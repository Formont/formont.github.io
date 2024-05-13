import { readFileSync, writeFileSync } from './fs';

const json1 = readFileSync('data.json', 'utf8');

const object = JSON.parse(json1);
object.views += 1;

const json2 = JSON.stringify(object);
writeFileSync('data.json', json2);
 
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
