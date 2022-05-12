$(document).ready(function() {
    $(window).scroll(function() {
        if(this.scrollY > 20)
            $(".navbar").addClass("sticky");
        else
            $(".navbar").removeClass("sticky");
    });

    $(window).scroll(function() {
        if(this.scrollY > 20)
            $(".goTop").fadeIn();
        else
            $(".goTop").fadeOut();
    });
    
// TODO: combine sticky & goTop function

    $(".goTop").click(function() {
        scroll(0,0,)
    })

    $(".menu-toggler").click(function() {
        $(this).toggleClass("active");
        $(".navbar-menu").toggleClass("active");    
    });

    $(".works").magnificPopup({
        delegate: "a",
        type: "image",
        gallery: {enabled:true}
    })
});