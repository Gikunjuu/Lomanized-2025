const collections = {
    'portraits': [
        { 
            id: 'anastasia', 
            url: 'https://cdn.prod.website-files.com/6694d16edfb46eb7e97649ad/66a2226331d18463a4edffa3_ANASTASIA%20%26%20NINA.avif',
            srcset: 'https://cdn.prod.website-files.com/6694d16edfb46eb7e97649ad/66a2226331d18463a4edffa3_ANASTASIA%20%26%20NINA-p-500.avif 500w, https://cdn.prod.website-files.com/6694d16edfb46eb7e97649ad/66a2226331d18463a4edffa3_ANASTASIA%20%26%20NINA-p-800.avif 800w, https://cdn.prod.website-files.com/6694d16edfb46eb7e97649ad/66a2226331d18463a4edffa3_ANASTASIA%20%26%20NINA-p-1080.avif 1080w, https://cdn.prod.website-files.com/6694d16edfb46eb7e97649ad/66a2226331d18463a4edffa3_ANASTASIA%20%26%20NINA.avif 1800w',
            sizes: '(max-width: 479px) 60vw, (max-width: 767px) 32vw, (max-width: 991px) 40vw, 100vw'
        },
        { 
            id: 'facemoi1', 
            url: 'https://cdn.prod.website-files.com/6694d16edfb46eb7e97649ad/66aa424cff384a600bb4dba7_R1000719_EV_087.avif',
            srcset: 'https://cdn.prod.website-files.com/6694d16edfb46eb7e97649ad/66aa424cff384a600bb4dba7_R1000719_EV_087-p-500.avif 500w, https://cdn.prod.website-files.com/6694d16edfb46eb7e97649ad/66aa424cff384a600bb4dba7_R1000719_EV_087.avif 1001w'
        },
        { 
            id: 'facemoi2', 
            url: 'https://cdn.prod.website-files.com/6694d16edfb46eb7e97649ad/66aa424cc25710d6331c4fce_R1300892_EV_28.avif',
            srcset: 'https://cdn.prod.website-files.com/6694d16edfb46eb7e97649ad/66aa424cc25710d6331c4fce_R1300892_EV_28-p-500.avif 500w, https://cdn.prod.website-files.com/6694d16edfb46eb7e97649ad/66aa424cc25710d6331c4fce_R1300892_EV_28.avif 1007w'
        }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const imageId = params.get('id');
    const collection = params.get('collection');

    function loadImageDetails(imageId, collection) {
        const images = collections[collection];
        const mainImage = images.find(img => img.id === imageId);
        
        if (mainImage) {
            // Set main image with all attributes
            const mainImageElement = document.getElementById('mainImage');
            mainImageElement.src = mainImage.url;
            if (mainImage.srcset) mainImageElement.srcset = mainImage.srcset;
            if (mainImage.sizes) mainImageElement.sizes = mainImage.sizes;
            mainImageElement.style.filter = 'saturate(0%)';
            
            // Load related images
            const imageCollection = document.querySelector('.image-collection');
            imageCollection.innerHTML = ''; // Clear existing images
            
            images.forEach(img => {
                if (img.id !== imageId) {
                    const imgContainer = document.createElement('div');
                    imgContainer.className = 'related-image-container';
                    
                    const imgElement = document.createElement('img');
                    imgElement.src = img.url;
                    if (img.srcset) imgElement.srcset = img.srcset;
                    if (img.sizes) imgElement.sizes = img.sizes;
                    imgElement.style.filter = 'saturate(0%)';
                    
                    imgElement.addEventListener('click', () => {
                        const newUrl = `?id=${img.id}&collection=${collection}`;
                        window.history.pushState({}, '', newUrl);
                        loadImageDetails(img.id, collection);
                    });
                    
                    imgContainer.appendChild(imgElement);
                    imageCollection.appendChild(imgContainer);
                }
            });
        }
    }

    if (imageId && collection) {
        loadImageDetails(imageId, collection);
    }
}); 