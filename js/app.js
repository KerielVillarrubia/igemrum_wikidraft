/* Lógica e Interactividad - IGEM-RUM 2026 */

document.addEventListener('DOMContentLoaded', () => {
            
    // 1. Cursor Personalizado (Brillo que sigue el mouse)
    const cursorGlow = document.getElementById('cursor-glow');
    
    if (cursorGlow) {
        document.addEventListener('mousemove', (e) => {
            // requestAnimationFrame hace que el movimiento sea muy fluido
            requestAnimationFrame(() => {
                cursorGlow.style.left = e.clientX + 'px';
                cursorGlow.style.top = e.clientY + 'px';
            });
        });
    }

    // 2. Animaciones al hacer Scroll (Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // El elemento se revela cuando el 15% es visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Añade la clase 'active' que dispara la animación CSS
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    // Buscar todos los elementos que tengan la clase .reveal
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // 3. Formulario de contacto (opcional)
    const contactForm = document.querySelector('form');
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log("Datos del formulario listos para ser enviados.");
            // Se puede conectar a nuestro servicio de emails...
        });
    }
});
