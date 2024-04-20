const carouselImages = document.querySelectorAll('.carousel-slide img');

let currentImageIndex = 0;

function showImage(index) {
  const nextImage = carouselImages[index];
  nextImage.style.opacity = 0;
  nextImage.style.transition = 'opacity 1s ease-in-out';
  setTimeout(() => {
    nextImage.style.opacity = 1;
  }, 50);
  carouselImages.forEach((image, i) => {
    if (i !== index && parseFloat(image.style.opacity) === 1) {
      image.style.opacity = 0;
    }
  });
}

// Показываем первое изображение при загрузке страницы
showImage(0);

function nextImage() {
  currentImageIndex++;
  if (currentImageIndex >= carouselImages.length) {
    currentImageIndex = 0;
  }
  showImage(currentImageIndex);
}

// Автоматическое переключение изображений каждые 3 секунды
setInterval(nextImage, 3000);
