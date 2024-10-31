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

tg.MainButton.show();

Telegram.WebApp.onEvent('mainButtonClicked', function(){
    sendData = area.value + "$" + thickness.value + "$" + price_stone.value + "$" + price_primer.value + "&";

	tg.sendData(sendData); 
});
