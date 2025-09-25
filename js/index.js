function openNav() {
    document.getElementById("mySidenavs").classList.add("open");
    document.getElementById("menuOverlay").classList.add("active");
}

function closeNav() {
    document.getElementById("mySidenavs").classList.remove("open");
    document.getElementById("menuOverlay").classList.remove("active");
}


//  header sticky js start  
const header = document.querySelector("header");
const toggleClass = "is-sticky";

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 40) {
        header.classList.add(toggleClass);
    } else {
        header.classList.remove(toggleClass);
    }
});
//  header sticky js end

// Slick Slider Initialization
$(document).ready(function(){
    $('.latest-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        fade: false,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>'
    });
});

// Custom Scroll Animations
document.addEventListener('DOMContentLoaded', function() {
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to check if element is partially in viewport
    function isPartiallyInViewport(element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        return (
            rect.top < windowHeight &&
            rect.bottom > 0
        );
    }

    // Function to add animation class
    function animateOnScroll() {
        const animatedElements = document.querySelectorAll('[class*="scroll-"]');
        
        animatedElements.forEach(element => {
            if (isPartiallyInViewport(element)) {
                element.classList.add('animate');
            }
        });
    }

    // Initial check
    animateOnScroll();

    // Listen for scroll events
    window.addEventListener('scroll', animateOnScroll);
    
    // Listen for resize events to recalculate on window resize
    window.addEventListener('resize', animateOnScroll);
});




