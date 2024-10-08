/* máquina de escrever */

/* function typeWrite(elemento) {
  if (elemento) {
    const textoArray = elemento.innerHTML.split("");
    elemento.innerHTML = " ";
    textoArray.forEach(function (letra, i) {
      setTimeout(function () {
        elemento.innerHTML += letra;
      }, 75 * i);
    });
  } else {
    console.error("Elemento não encontrado");
  }
}

const titulo = document.querySelector(".titulo-principal");
typeWrite(titulo); */


function typeWrite(elemento) {
  if (elemento) {
    const textoOriginal = elemento.innerHTML;
    const textoArray = textoOriginal.split("");
    elemento.innerHTML = " ";
    
    textoArray.forEach(function (letra, i) {
      setTimeout(function () {
        elemento.innerHTML += letra;
        
        // Quando a última letra for adicionada, reinicie a função após uma pausa
        if (i === textoArray.length - 1) {
          setTimeout(function () {
            typeWrite(elemento);
          }, 1000); // Pausa de 1 segundo antes de reiniciar
        }
      }, 75 * i);
    });
  } else {
    console.error("Elemento não encontrado");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const titulo = document.querySelector(".titulo-principal");
  typeWrite(titulo);
});



/* reveal*/

window.revelar = ScrollReveal({ reset: true });

revelar.reveal(".hidden-element", {
  duration: 1000,
  origin: "bottom",
  distance: "90px",
  delay: 100,
});

/* particles */

particlesJS("particles-js", {
  particles: {
    number: { value: 105, density: { enable: true, value_area: 800 } },
    color: { value: "#5E1675" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#fff" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#5E1675",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});
var count_particles, stats, update;
stats = new stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);

/* darkmode */

// Verificar se o usuário já tem uma preferência de tema salva no localStorage
if (localStorage.getItem('darkMode') === "true") {
  enableDarkMode();
}

// Adicionar um evento de clique ao botão
document
  .getElementById("darkModeButton")
  .addEventListener("click", toggleDarkMode);

// Função para ativar ou desativar o modo escuro
function toggleDarkMode() {
  if (localStorage.getItem("darkMode") === "true") {
    disableDarkMode();
    const toggle = document.getElementsByTagName("i")[0];
    toggle.classList.remove("fa-sun");
    toggle.classList.add("fa-moon");
  } else {
    enableDarkMode();
  }
}

// Função para ativar o modo escuro

function enableDarkMode() {
  document.body.style.color = "#fff";
  document.body.style.backgroundColor = "#111";
  document.body.style.transition = "all 0.5s";
  localStorage.setItem("darkMode", "true");
}

// Função para desativar o modo escuro
function disableDarkMode() {
  document.body.style.backgroundColor = "#fff";
  document.body.style.color = "#111";
  localStorage.setItem("darkMode", "false");
}
