/* Nav Bar */
$(function () {
    $(document).scroll(function(){
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});

/* Progress Bar */
$(document).ready(function() {
    $("#circle-1").Circlebar({
        maxValue: 20,
        fontSize: "14px",
        triggerPercentage: true
    });
});

/* Back To Top */
$(window).scroll(function () {
    let position = $(this).scrollTop();
    
    if(position >= 718){
        $('#back-to-top').addClass('scrollTop');

    }else{
        $('#back-to-top').removeClass('scrollTop');
    }
});

/* Chat Box - Open Button */
const btnOpen = () => {
    const btnOpenTwo = document.querySelector('.open-button');
    const chat = document.querySelector('.chat-popup');

    btnOpenTwo.addEventListener('click', () => {
        chat.classList.toggle('open');
        $('.open-button i').toggleClass('fas fa-times far fa-comments');
    });
}
btnOpen();

/* Scroll Chat Box*/
$(window).scroll(function(){
    //more then or equals to
    if($(window).scrollTop() >= 720 ){
        $( ".open-button" ).css( "display", "block" );
   
    //less then 100px from top
    } else {
       
   $( ".open-button" ).css( "display", "none" );
    }
  });

/* Textarea Submit When Pressing Enter */
function pressed(e) {
    if ( (window.event ? event.keyCode : e.which) == 13) { 
        document.forms[0].submit();
    }
}




