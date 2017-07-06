$(document).ready(function() {
    $.material.init();
    $('.toggler').on('click',function() {
        $(this).parent().children().toggle();
        $(this).parent().parent().find('.toggled_content').slideToggle(); 
    });
});