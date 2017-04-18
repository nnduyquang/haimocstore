var plugins = {
    slider: $('.owl-slider')
};
$(document).ready(function () {
    function activeSlider() {
        plugins.slider.owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            items: 1,
        });
    }

    if (plugins.slider.length) {
        activeSlider();
    }
});