function typeWrite(elemento){
    if (elemento) {
        const textoArray = elemento.innerHTML.split('');
        elemento.innerHTML = ' ';
        textoArray.forEach(function(letra, i){   
            setTimeout(function(){
                elemento.innerHTML += letra;
            }, 75 * i);
        });
    } else {
        console.error('Elemento não encontrado');
    }
}

const titulo = document.querySelector('.titulo-principal');
typeWrite(titulo);

/* reveal*/

window.revelar = ScrollReveal({ reset: true });

revelar.reveal('.hidden-element', {
    duration: 2000,
    origin: 'bottom',
    distance: '90px',
    delay: 100
});