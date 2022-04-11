$(function () {
    $('[data-toggle="tooltip"]').tooltip();

    $('#quienesomos').click(function(){
        alert("Somos la mejor empresa de viajes")
    });

    $('#destacados').click(function(){
        alert("Comparte en los mejores lugares de Chile")
    });
    
    $('#contactos').click(function(){
        alert("Que esperas para ser parte de nosotros?")
    });
    
    $('.fa-plane').click(function(){
        $('.desc-text1').removeClass('d-none')(1000);
    })
    $('.fa-anchor').click(function(){
        $('.desc-text2').removeClass('d-none')(1000);
    })
    $('.fa-car').click(function(){
        $('.desc-text3').removeClass('d-none')(1000);
    })
  })

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        $('html,body').animate({
            'scrollTop': $($(this).attr('href')).offset().top+'px'
        }, 5000);
        

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

  $("#quienesomos").hover(function() {
    $(this).css('cursor','pointer').attr('title', 'Los mejores viajes estan junto a nosotros');
}, function() {
    $(this).css('cursor','auto');
});

$("i").hover(function() {
    $(this).css('cursor','pointer').attr('title', 'Los mejores viajes estan junto a nosotros');
}, function() {
    $(this).css('cursor','auto');
});