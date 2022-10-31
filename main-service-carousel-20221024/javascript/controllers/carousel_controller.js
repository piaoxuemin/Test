import {Controller} from "@hotwired/stimulus";

export default class extends Controller {
    static targets = ["carouselImages"]

    initialize() {
        window.addEventListener("turbo:before-cache", function () {
                $(".carousel").owlCarousel('destroy');
            }
        );
    }

    connect() {
        const nav_arrow = this.carouselImagesTarget.getAttribute('data-nav-arrows') == 'true';

        $(this.element).owlCarousel({
            nav: nav_arrow,
            lazyLoad: false,
            loop: nav_arrow || this.carouselImagesTarget.getAttribute('data-autoplay') == 'true',
            infinite: nav_arrow || this.carouselImagesTarget.getAttribute('data-autoplay') == 'true',
            margin: 20,
            autoplay: this.carouselImagesTarget.getAttribute('data-autoplay') == 'true',
            dots: this.carouselImagesTarget.getAttribute('data-dots') == 'true',
            navText : ["<i class='material-icons'>chevron_left</i>","<i class='material-icons'>chevron_right</i>"],
            responsiveClass:true,
            responsive:{
                0:{
                    items: this.carouselImagesTarget.getAttribute('data-items-sm')
                },
                768:{
                    items: this.carouselImagesTarget.getAttribute('data-items-md')
                },
                1024:{
                    items: this.carouselImagesTarget.getAttribute('data-items')
                }
            }
        });
    }
}
