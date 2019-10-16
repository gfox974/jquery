$(document).ready(function() {
    $('.voiture').css('background-color', '#E8D7FF');

    $('h1').on('click', function () {
        alert($(this).text());
    })

    let avion = $('.avion');
    avion.click(function() {
        // Je récupère la valeur bgColor de mon objet sur lequel je viens de cliquer
        let bgColor = $(this).css('background-color');
        console.log(bgColor);
        if(bgColor == "rgb(237, 226, 83)") {
            $(this).css('background-color', '#EDE8A8').css('color', 'black');
        } else {
            $(this).css('background-color', '#EDE253').css('color', 'grey');
        }
    });

    let voiture = $('.voiture');
    voiture.mouseenter(function() {
        $(this).css('background-color', 'red');
    })
    voiture.mouseleave(function() {
        $(this).css('background-color', 'purple');
    })

    let section = $('section');
    section.click(function(){

        // Je vérifie si l'élément est caché ou non
        let display = $(this).next().css('display');
        console.log(display);

        if(display == 'none') {
            $(this).next().show();
        } else {
            $(this).next().hide();
        }
    });
    
});