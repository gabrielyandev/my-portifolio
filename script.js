document.addEventListener("DOMContentLoaded", function () {
    
    // --- LÓGICA DO MODO ESCURO ---
    const darkModeToggle = document.getElementById('darkModeToggle');
    const htmlElement = document.documentElement;

    if (darkModeToggle) {
        const applyTheme = (theme) => {
            if (theme === 'dark') {
                htmlElement.classList.add('dark-mode');
                darkModeToggle.classList.remove('bi-moon-stars-fill');
                darkModeToggle.classList.add('bi-sun-fill');
            } else {
                htmlElement.classList.remove('dark-mode');
                darkModeToggle.classList.remove('bi-sun-fill');
                darkModeToggle.classList.add('bi-moon-stars-fill');
            }
        };

        const toggleTheme = () => {
            const isDarkMode = htmlElement.classList.contains('dark-mode');
            if (isDarkMode) {
                applyTheme('light');
                localStorage.setItem('theme', 'light');
            } else {
                applyTheme('dark');
                localStorage.setItem('theme', 'dark');
            }
        };

        darkModeToggle.addEventListener('click', toggleTheme);

        // Define o tema inicial ao carregar a página
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme) {
            applyTheme(savedTheme);
        } else if (systemPrefersDark) {
            applyTheme('dark');
        } else {
            applyTheme('light');
        }
    } else {
        console.error("Botão de modo escuro não encontrado!");
    }

    // --- EFEITO MÁQUINA DE ESCREVER ---
    function typeWrite(elemento) {
        if (!elemento) { return; }
        const textoOriginal = elemento.getAttribute('data-text') || elemento.innerHTML;
        if (!elemento.getAttribute('data-text')) {
            elemento.setAttribute('data-text', textoOriginal);
        }
        const textoArray = textoOriginal.split("");
        elemento.innerHTML = " ";
        textoArray.forEach((letra, i) => {
            setTimeout(() => {
                elemento.innerHTML += letra;
                if (i === textoArray.length - 1) {
                    setTimeout(() => typeWrite(elemento), 3000);
                }
            }, 75 * i);
        });
    }

    const titulo = document.querySelector(".titulo-principal");
    if(titulo) {
        typeWrite(titulo);
    }
    
    // --- ANIMAÇÃO DE SCROLL (SCROLLREVEAL) ---
    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            origin: 'bottom',
            distance: '60px',
            duration: 1000,
            delay: 100,
            reset: false
        });
        sr.reveal('.hidden-element');
    }

    // --- PARTICLES.JS ---
    if (typeof particlesJS !== 'undefined') {
        particlesJS("particles-js", {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#5E1675" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: false },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: "#5E1675", opacity: 0.4, width: 1 },
                move: { enable: true, speed: 4, direction: "none", random: false, straight: false, out_mode: "out", bounce: false },
            },
            interactivity: {
                detect_on: "canvas",
                events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
                modes: { repulse: { distance: 150, duration: 0.4 }, push: { particles_nb: 4 } },
            },
            retina_detect: true,
        });
    }
});