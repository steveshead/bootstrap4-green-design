$(document).ready(function() {
    $(".nav-link,.dropdown-item").click(function() {
        var t = $(this).attr("href");
        $('.active').removeClass('active');
        $("html, body").animate({
            scrollTop: $(t).offset().top - 150
        }, {
            duration: 1e3,
        });

        $('body').scrollspy({ target: '#navbar-s2',offset: $(t).offset().top - 150 });
        $(this).parent().addClass('active');

        return false;
    });

});
