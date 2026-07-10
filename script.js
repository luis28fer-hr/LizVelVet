const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('active');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.14 });

reveals.forEach(item => revealObserver.observe(item));

const counters = document.querySelectorAll('[data-count]');
let countersStarted = false;

function animateCounter(counter){
    const target = Number(counter.dataset.count);
    const duration = 1300;
    const startTime = performance.now();

    function update(currentTime){
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const value = Math.floor(progress * target);
        counter.textContent = `${value}+`;
        if(progress < 1){
            requestAnimationFrame(update);
        }else{
            counter.textContent = `${target}+`;
        }
    }

    requestAnimationFrame(update);
}

const statsSection = document.querySelector('.hero-stats');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting && !countersStarted){
            countersStarted = true;
            counters.forEach(animateCounter);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

if(statsSection){
    statsObserver.observe(statsSection);
}

const galleryImages = document.querySelectorAll('.gallery-grid img');

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        const overlay = document.createElement('div');
        overlay.className = 'lightbox-overlay';
        overlay.innerHTML = `
            <button class="lightbox-close" aria-label="Cerrar imagen">x</button>
            <img src="${img.src}" alt="${img.alt}">
        `;
        document.body.appendChild(overlay);
        document.body.style.overflow = 'hidden';

        overlay.addEventListener('click', (event) => {
            if(event.target === overlay || event.target.classList.contains('lightbox-close')){
                overlay.remove();
                document.body.style.overflow = '';
            }
        });
    });
});

const style = document.createElement('style');
style.textContent = `
.lightbox-overlay{
    position:fixed;
    inset:0;
    z-index:200;
    background:rgba(0,0,0,.82);
    display:grid;
    place-items:center;
    padding:24px;
}
.lightbox-overlay img{
    max-width:min(980px, 94vw);
    max-height:86vh;
    border-radius:24px;
    box-shadow:0 30px 70px rgba(0,0,0,.35);
}
.lightbox-close{
    position:fixed;
    right:24px;
    top:24px;
    width:44px;
    height:44px;
    border:0;
    border-radius:50%;
    font-size:1.4rem;
    font-weight:900;
    cursor:pointer;
    background:#fff;
    color:#ff4fa1;
}
`;
document.head.appendChild(style);
