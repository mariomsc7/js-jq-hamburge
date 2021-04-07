//1. Individuare menu da far vedere
//2. Individuare l'hamburger per farlo aprire
//3. Individuare la X per farlo chiudere


var hamburger = $('.header-right a');
var cross = $('.hamburger-menu a');
var menu = $('.hamburger-menu');


hamburger.click(function(){
    menu.show();
});

cross.click(function(){
    menu.hide();
});