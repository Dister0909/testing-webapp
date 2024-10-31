let tg = window.Telegram.WebApp;

let sendData = "";

tg.expand();

tg.MainButton.text = "Рассчитать"; //изменяем текст кнопки 
tg.MainButton.textColor = "#FFFFFF"; //изменяем цвет текста кнопки
tg.MainButton.color = "#143F6B"; //изменяем цвет бэкграунда кнопки

let area = document.getElementById("area");
let thickness = document.getElementById("thickness");
let price_stone = document.getElementById("price_stone");
let price_primer = document.getElementById("price_primer");

area.addEventListener("change", function() {
    if (area.value != '' && thickness.value != '' && price_stone.value != '' && price_primer.value != '') {
        if (!tg.MainButton.isVisible) {
            tg.MainButton.show();
        }
    } else {
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide();
        }
    }
});

thickness.addEventListener("change", function() {
    if (area.value != '' && thickness.value != '' && price_stone.value != '' && price_primer.value != '') {
        if (!tg.MainButton.isVisible) {
            tg.MainButton.show();
        }
    } else {
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide();
        }
    }
});

price_stone.addEventListener("change", function() {
    if (area.value != '' && thickness.value != '' && price_stone.value != '' && price_primer.value != '') {
        if (!tg.MainButton.isVisible) {
            tg.MainButton.show();
        }
    } else {
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide();
        }
    }
});

price_primer.addEventListener("change", function() {
    if (area.value != '' && thickness.value != '' && price_stone.value != '' && price_primer.value != '') {
        if (!tg.MainButton.isVisible) {
            tg.MainButton.show();
        }
    } else {
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide();
        }
    }
});


Telegram.WebApp.onEvent('mainButtonClicked', function(){
    sendData = area.value + "$" + thickness.value + "$" + price_stone.value + "$" + price_primer.value + "&";

	tg.sendData(sendData); 
});
