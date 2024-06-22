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
