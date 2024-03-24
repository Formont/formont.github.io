let tg = window.Telegram.WebApp;

if (tg.colorScheme == "light"){
    document.getElementById("header_container").style.color = "black";
    document.getElementsByClassName("scroller_text").style.color = "black"
}
else if (tg.colorScheme == "dark"){
    document.getElementById("header_container").style.color = "white";
    document.getElementsByClassName("scroller_text").style.color = "white"
}
tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';
