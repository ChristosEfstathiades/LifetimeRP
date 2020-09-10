var scrollLink = $(".scroll");
    //smooth scrolling
scrollLink.click(function(event) {
    event.preventDefault();
    $("body,html").animate({
        scrollTop: $(this.hash).offset().top
    }, 600)
})