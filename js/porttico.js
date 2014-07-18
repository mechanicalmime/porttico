$(function()
{
    $('#menu-bar a').each(function(index, value){
        $(value).click(function()
        {
            $('#menu-bar .active').removeClass('active');

            $(value).parent().addClass('active');

            $('html body').animate({scrollTop: $('#' + $(value).attr('name') + '-container').offset().top}, 500);
        });
    });
});