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

// Custom Scroll Animations - Triggers on every scroll
document.addEventListener('DOMContentLoaded', function() {
    // Function to check if element is partially in viewport
    function isPartiallyInViewport(element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        return (
            rect.top < windowHeight * 0.8 &&
            rect.bottom > windowHeight * 0.2
        );
    }

    // Function to add animation class (removes and adds for continuous animation)
    function animateOnScroll() {
        const animatedElements = document.querySelectorAll('[class*="scroll-"]');
        
        animatedElements.forEach(element => {
            if (isPartiallyInViewport(element)) {
                // Remove animate class first, then add it back for continuous animation
                element.classList.remove('animate');
                // Small delay to ensure the animation resets
                setTimeout(() => {
                    element.classList.add('animate');
                }, 10);
            } else {
                // Remove animate class when element is out of view
                element.classList.remove('animate');
            }
        });
    }

    // Initial check
    animateOnScroll();

    // Listen for scroll events with throttling for performance
    let ticking = false;
    function handleScroll() {
        if (!ticking) {
            requestAnimationFrame(function() {
                animateOnScroll();
                ticking = false;
            });
            ticking = true;
        }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Listen for resize events to recalculate on window resize
    window.addEventListener('resize', animateOnScroll);
});




