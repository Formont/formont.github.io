// Получить файл JSON из веб-хранилища
const jsonStr = localStorage.getItem('data');

// Преобразовать строку JSON в объект JavaScript
const data = JSON.parse(jsonStr);

// Отредактировать объект JavaScript
data.views += 1;

// Преобразовать отредактированный объект обратно в строку JSON
const newJsonStr = JSON.stringify(data);

// Сохранить отредактированный файл JSON в веб-хранилище
localStorage.setItem('myData', newJsonStr);
 
let tg = window.Telegram.WebApp;

const elements = document.getElementsByClassName("scroller_text");
if (tg.colorScheme == "light"){
    for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = "black"; 
    }
}
else if (tg.colorScheme == "dark"){
    for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = "white"; 
    }
}
tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';
