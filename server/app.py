from flask import (
    Flask,
    render_template,
    request,
    redirect,
    url_for,
    flash,
    session,
    make_response,
)

from flask_sock import Sock
from gevent import monkey
from gevent.pywsgi import WSGIServer
import json
import re
import os
from dotenv import load_dotenv, find_dotenv
import secrets

app = Flask(__name__)
sock = Sock(app)

monkey.patch_all()

app.config["WS"] = ""
load_dotenv(find_dotenv(), override=True)
app.secret_key = secrets.token_hex(16)
password = os.getenv("ADMIN_PASSWORD", "ADMIN_PASSWORD")

Options = {
    "Color": [True, 0, 0, "#FFFFFF"],
    "Opacity": [True, 0, 100, 70],
    "FontSize": [True, 20, 100, 50],
    "Speed": [True, 1000, 8000, 7000],
}

active_ws = None

load_dotenv()


def is_valid_image_url(url):
    return bool(re.match(r"https?://.*\.(jpeg|jpg|gif|png|webp)$", url, re.I))


@sock.route("/")
def websocket(ws):
    global active_ws
    print("websocket connected")
    active_ws = ws
    while True:
        try:
            ws.receive()
        except Exception as e:
            print(f"WebSocket error: {e}")
            active_ws = None
            break


def send_message(message):
    with app.app_context():
        for client in sock.clients("/"):
            client.send(message)


@app.route("/")
def index():
    return render_template("index.html", Options=Options)


@app.route("/login", methods=["POST"])
def login():
    if request.form["password"] == password:
        session["logged_in"] = True
        return redirect(url_for("admin"))
    else:
        flash("wrong password!")
        return redirect(url_for("admin"))


@app.route("/logout")
def logout():
    session.pop("logged_in", None)
    return redirect(url_for("admin"))


@app.route("/admin")
def admin():
    if not session.get("logged_in"):
        return render_template("admin.html")
    return render_template("admin.html", Options=Options)


@app.route("/fire", methods=["POST"])
def fire():
    global active_ws
    if active_ws is None:
        return make_response("Not Websocket connect", 503)

    try:
        data = request.get_json()

        if not data.get("text"):
            return make_response("Content can't be empty", 400)

        if data.get("isImage"):
            if not is_valid_image_url(data["text"]):
                return make_response("Invalid image url", 400)

        active_ws.send(json.dumps(data))
        return make_response("OK", 200)
    except Exception as e:
        print(f"Send Error: {e}")
        return make_response(str(e), 500)


@app.route("/update", methods=["POST"])
def update():
    if not session.get("logged_in"):
        return redirect(url_for("admin"))
    data = request.get_json()
    for key in data:
        if key == "Color":
            if data[key]:
                Options[key][3] = "#" + data[key]
        else:
            # 处理数值型数据
            try:
                if data[key] == "":
                    continue
                Options[key][3] = int(data[key])
            except ValueError:
                print(f"Can't convert '{data[key]}' to int, stay original value")

    try:
        if active_ws:
            notification = {"type": "settings_changed", "settings": Options}
            active_ws.send(json.dumps(notification))
    except Exception as e:
        print(f"Change Error: {e}")

    return make_response()


@app.route("/admin/Set", methods=["POST"])
def Set():
    if not session.get("logged_in"):
        return redirect(url_for("admin"))
    data = request.get_data().decode().split(" ")
    Options[data[0]][0] = data[1] == "True"

    try:
        if active_ws:
            notification = {"type": "settings_changed", "settings": Options}
            active_ws.send(json.dumps(notification))
    except Exception as e:
        print(f"Change Error: {e}")

    return redirect(url_for("admin"))


@app.route("/get_settings", methods=["GET"])
def get_settings():
    return make_response(json.dumps(Options), 200, {"Content-Type": "application/json"})


if __name__ == "__main__":
    WSGIServer(('0.0.0.0', 4000), app).serve_forever()
    #app.run(port=4000)
