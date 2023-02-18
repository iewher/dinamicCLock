var clock = document.getElementById('clock'); //получаем переменные из html
var color = document.getElementById('color'); //получаем переменные из html

function dinamicClock() {
    var time = new Date();
    var h = (time.getHours() % 12).toString(); //преобразуем integer в string
    var m = time.getMinutes().toString();
    var s = time.getSeconds().toString();

    if (h.length < 2) { //проверяем числа, если часов < 10, подставяем 0 спереди
        h = '0' + h;
    }
    if (m.length < 2) {//проверяем числа, если минут < 10, подставяем 0 спереди
        m = '0' + m;
    }
    if (s.length < 2) {//проверяем числа, если секунд < 10, подставяем 0 спереди
        s = '0' + s;
    }

    var clockString  = h + ':' + m + ':' + s;
    var colorString = '#' + h + m + s;

    clock.textContent = clockString; //изменяем содержимое переменной
    color.textContent = colorString; //изменяем содержимое переменной
    
   document.body.style.background = colorString;

}
dinamicClock(); //вызываем функцию для моментального появленяи в браузере
setInterval(dinamicClock, 1000); // вызываем функцию каждую секунду