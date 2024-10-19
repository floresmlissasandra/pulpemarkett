document.addEventListener("DOMContentLoaded", function() {
    const progressBar = document.getElementById("progress-bar");
    let width = 0;
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            document.body.classList.add("loaded");
        } else {
            width++;
            progressBar.style.width = width + "%";
        }
    }, 30); // Ajusta el tiempo si deseas que la carga sea más rápida o lenta
});

// Animación del carrusel
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    const carouselContainer = document.querySelector('.slides');
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    carouselContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000); // Cambiar imagen cada 5 segundos

// Mostrar más / menos imágenes en la galería
const mostrarMasBtn = document.getElementById('mostrarMas');
const mostrarMenosBtn = document.getElementById('mostrarMenos');
const imagenesExtra = document.querySelectorAll('.extra');

mostrarMasBtn.addEventListener('click', () => {
    imagenesExtra.forEach(imagen => imagen.style.display = 'block');
    mostrarMasBtn.style.display = 'none';
    mostrarMenosBtn.style.display = 'block';
});

mostrarMenosBtn.addEventListener('click', () => {
    imagenesExtra.forEach(imagen => imagen.style.display = 'none');
    mostrarMasBtn.style.display = 'block';
    mostrarMenosBtn.style.display = 'none';
});

// Función para el modal de visualización de imágenes
const modal = document.getElementById('modal');
const modalImg = document.getElementById('imagenModal');
const captionText = document.getElementById('caption');
const cerrarBtn = document.getElementById('cerrar');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let currentImageIndex = 0;

// Obtener todas las imágenes de la galería
const imagenesGaleria = document.querySelectorAll('.grid-galeria .imagen img');

// Abrir el modal al hacer clic en una imagen
imagenesGaleria.forEach((img, index) => {
    img.addEventListener('click', function () {
        modal.style.display = 'block';
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
        currentImageIndex = index; // Guardar el índice de la imagen actual
    });
});

// Cerrar el modal al hacer clic en la "x"
cerrarBtn.addEventListener('click', function () {
    modal.style.display = 'none';
});

// Navegar a la imagen anterior
prevBtn.addEventListener('click', function () {
    currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : imagenesGaleria.length - 1;
    modalImg.src = imagenesGaleria[currentImageIndex].src;
    captionText.innerHTML = imagenesGaleria[currentImageIndex].alt;
});

// Navegar a la imagen siguiente
nextBtn.addEventListener('click', function () {
    currentImageIndex = (currentImageIndex < imagenesGaleria.length - 1) ? currentImageIndex + 1 : 0;
    modalImg.src = imagenesGaleria[currentImageIndex].src;
    captionText.innerHTML = imagenesGaleria[currentImageIndex].alt;
});


document.addEventListener("DOMContentLoaded", function() {
    var progressBar = document.getElementById("progress-bar");
    var loadPercentage = document.getElementById("load-percentage");
    var progress = 0;

    function updateProgress() {
        progress += 1;
        progressBar.style.width = progress + "%";
        loadPercentage.innerText = progress + "%";

        if (progress < 100) {
            setTimeout(updateProgress, 30);  // Velocidad de carga ajustable
        } else {
            setTimeout(function() {
                document.body.classList.add("loaded");
                document.getElementById("preloader").style.display = "none";
                document.getElementById("main-content").style.display = "block";
            }, 500);  // Espera un poco antes de ocultar el preloader
        }
    }

    updateProgress();
});