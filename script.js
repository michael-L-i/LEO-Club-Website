/* 
 * INSTRUCTIONS:
 * Images are automatically discovered by checking which files exist
 * Simply add new images to the folder with the naming pattern image1.png, image2.png, etc.
 * No need to manually update numImages anymore!
*/

// Function to check if an image exists
async function imageExists(src) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = src;
    });
}

// Function to discover all images
async function discoverImages() {
    const images = [];
    let i = 1;
    
    while (true) {
        const imageName = `image${i}.png`;
        const imagePath = `images/${imageName}`;
        
        if (await imageExists(imagePath)) {
            images.push(imageName);
            i++;
        } else {
            break; // No more images found
        }
    }
    
    return images.reverse(); // Reverse to maintain your original order
}

// Function to create and append sections for each image
async function createImageSections() {
    const container = document.getElementById('image-container');
    const images = await discoverImages();
    
    console.log(`Found ${images.length} images`);

    images.forEach(image => {
        // Create a new section
        const section = document.createElement('section');
        
        // Create an img element
        const img = document.createElement('img');
        img.src = `images/${image}`;
        img.alt = image;
        
        // Append the image to the section
        section.appendChild(img);
        
        // Add the section to the container
        container.appendChild(section);
    });
}

// Call the function when the page loads
window.onload = createImageSections;