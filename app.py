from flask import Flask, render_template, request, redirect, url_for, flash,session,make_response
from flask_socketio import SocketIO
from flask_sock import Sock
from gevent import monkey
from gevent.pywsgi import WSGIServer
import json

app = Flask(__name__)
sock = Sock(app)
socketio = SocketIO(app)

monkey.patch_all()

app.config['WS']=""
app.secret_key = 'key'
password = 'password'
app.config["TEMPLATES_AUTO_RELOAD"] = True

Options={
"Color":[True,0,0,'#FFFFFF'],
"Opacity":[True,0,100,70],
"FontSize":[True,20,100,50],
"Speed":[True,1000,8000,7000],
}

@sock.route('/')
def websocket(ws):
    print("websocket connected")
    app.config['WS']=ws
    while True:
        ws.receive()

def send_message(message):
    with app.app_context():
        for client in sock.clients('/'):
            client.send(message)

@app.route('/')
def index():
    return render_template('index.html',Options=Options)

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        pw = request.form['password']
        if pw == password:
            # 登入成功，設置session來表示用戶已登入
            session['logged_in'] = True
            flash('Login successful', 'success')
    return redirect(url_for('admin'))

@app.route('/logout')
def logout():
    # 登出，刪除session中的登入信息
    session.pop('logged_in', None)
    flash('Logged out successfully', 'success')
    return redirect(url_for('login'))

@app.route('/admin')
def admin():
    return render_template('admin.html',Options=Options)

@app.route('/fire', methods=['POST'])
def fire():
    data = json.dumps(request.get_json())
    app.config['WS'].send(data)
    return make_response()

@app.route('/update', methods=['POST'])
def update():
    data = request.get_json()
    input_name, input_value = list(data.items())[0]
    print(input_name, input_value)
    Options[input_name][3] = input_value
    return make_response()

@app.route('/admin/Set', methods=['POST'])
def Set():
    data=request.get_data().decode().split()
    print(data)
    if data[1]=='True':
        Options[data[0]][0]=True
    else:
        Options[data[0]][0]=False
    print(Options)
    return redirect(url_for('admin'))

if __name__ == '__main__':
    port=4000

    # WSGIServer(('127.0.0.1', 4000), app).serve_forever()
    app.run(port=port,debug=True)
    