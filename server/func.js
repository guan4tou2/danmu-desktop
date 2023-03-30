const range = document.getElementById("customRange")
            const value = document.getElementById('rangevalue');

            range.addEventListener('input', () => {
                value.textContent = range.value + "%";
            });

            const text = document.getElementById("floatingTextarea")
            const btn = document.getElementById("btnSend")
            const color = document.getElementById('ColorInput');
            const size = document.getElementById('SizeInput');
            const speed = document.getElementById('SpeedInput');

            btn.onclick = function () {
                if(speed.value<speed.min)speed.value=speed.min;
                let xhr = new XMLHttpRequest();
                const data = {
                    "text": text.value,
                    "range": range.value,
                    "color": color.value.slice(1),
                    "size":size.value,
                    "speed":speed.value
                };

                if (text.value != "") {
                    xhr.open("get", `http://${window.location.hostname}:5000/api?text=${text.value}&color=${color.value.slice(1)}&range=${range.value}&size=${size.value}&speed=${speed.value}`)
                    xhr.send()
                    text.value = "";
                }
            }
            text.addEventListener("keydown",function(e){
                if(e.key==='Enter'){
                    e.preventDefault();
                    btn.click()
                }
            })
   
            speed.addEventListener('input', () => {
            if (speed.value < speed.min) {
              speed.value = 1;
             } else if (speed.value > speed.max) {
                speed.value = 100;
             }
            });
