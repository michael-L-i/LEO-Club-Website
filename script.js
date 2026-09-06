// Load all images from the images folder in reverse order (newest first)
const gallery = document.getElementById('gallery');
const totalImages = 74;

// Loop from the newest event image down to the oldest.
for (let i = totalImages; i >= 1; i--) {
  const img = document.createElement('img');
  img.src = `images/image${i}.png`;
  img.alt = `Image ${i}`;
  img.loading = 'lazy'; // Lazy load for better performance
  gallery.appendChild(img);
}
