let tg = window.Telegram.WebApp;

HeaderText= document.getElementById("header_news")
if (tg.colorScheme == "light"){
    HeaderText.style.color == "black";
}
else if (tg.colorScheme == "dark"){
    HeaderText.style.color == "white";
}
tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';
