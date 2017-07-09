$(document).ready(function() {
    $('.toggler').on('click',function() {
        $(this).parent().children().toggle();
        $(this).parent().parent().find('.toggled_content').slideToggle(); 
    });
    $('.toggler_child').on('click',function() {
        $(this).parent().children().toggle();
        $(this).parent().parent().find('.toggled_content_child').slideToggle(); 
    });
});