$(document).ready(function(){
    $('button').click(function(){
        if($('#orb').hasClass('sun')) {
            $('#orb').removeClass('sun').addClass('moon');
        }
        else {
            $('#orb').removeClass('moon').addClass('sun');

        }
        if($('body').hasClass('day')) {
            $('body').removeClass('day').addClass('night');
        }
        else {
            $('body').removeClass('night').addClass('day');

        }
    });


});
