let slideIndex = 0;
let nepszeruDiv = document.querySelectorAll('.nepszeru div');
const konyvJelzo =
`
        <svg fill="rgba(0,0,0,0.3)" class="konyvjelzo" width="32px" height="40px" viewBox="0 0 24 34" xmlns="http://www.w3.org/2000/svg" role="presentation">
        <polygon points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343">

        </polygon>
        <polygon points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343">

        </polygon>
        <polygon points="24 31.7728343 24 33.7728343 12.2436611 28.2926049 0 34 0 32 12.2436611 26.2926049">

        </polygon>
        
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="plus-sign" viewBox="0 0 24 24" fill="currentColor" role="presentation">
            <path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z">

            </path>
        </svg>

    </svg>`

nepszeruDiv.forEach(nepszeru => {
    nepszeru.insertAdjacentHTML('beforeend', konyvJelzo);
    });

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slides img').length;

    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = index;
    }

    const offset = slideIndex * -100;
    slides.style.transform = `translateX(${offset}%)`;
}


function nextSlide() {
    showSlide(slideIndex + 1);
}

function prevSlide() {
    showSlide(slideIndex - 1);
}

window.onload = function() {
    showSlide(slideIndex);
};

setInterval(() => {
    nextSlide();
}, '10000');