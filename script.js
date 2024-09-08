/* 
 * INTRUCTIONS:
 * change numImages to number of images inside images folder
 * initially, images are in reverse order so we have to manually invert
 * simply add new images to the folder and increment numImages each time
*/

var numImages = 43;
const imagesRev = [];
for (var i = 1; i <= numImages; i++) {
    imagesRev.push("image" + i + ".png");
}
images = imagesRev.reverse()

// Function to create and append sections for each image
function createImageSections() {
    const container = document.getElementById('image-container');

    images.forEach(image => {
        // Create a new section
        const section = document.createElement('section');
        
        // Create an img element
        const img = document.createElement('img');
        img.src = `images/${image}`;
        img.alt = image;  // Optionally, set alt attribute for accessibility
        
        // Append the image to the section
        section.appendChild(img);
        
        // Add the section to the container
        container.appendChild(section);
    });
}

// Call the function when the page loads
window.onload = createImageSections;
