document.addEventListener('DOMContentLoaded', function() {
    
    const productData = {
        name: "AMD Ryzen 7 7800X3D",
        rating: 5,
        price: "Rp 6.500.000",
        sku: "100-100000910WOF",
        category: "Processor",
        categoryLink: "categories/processor.html",
        description: "The ultimate gaming processor with AMD 3D V-Cache™ technology for extreme gaming performance. With 8 cores, 16 threads, and a massive cache, this processor is designed to deliver the highest frame rates in popular games.",
        images: [
            "productPictures/Ryzen7.jpg",
            "productPictures/Ryzen7_side.jpg", 
            "productPictures/Ryzen7_box.jpg"   
        ],
        specifications: {
            "CPU Cores": "8",
            "Threads": "16",
            "Max. Boost Clock": "Up to 5.0GHz",
            "Base Clock": "4.2GHz",
            "L3 Cache": "96MB",
            "Default TDP": "120W",
            "CPU Socket": "AM5"
        },
        reviews: [
            { name: "Budi S.", rating: 5, comment: "Performa gamingnya luar biasa! FPS di game-game favorit saya naik drastis. Sangat direkomendasikan." },
            { name: "Anita C.", rating: 5, comment: "Prosesor adem dan kencang, a must-have for gamers." }
        ]
    };

    document.getElementById('product-name').textContent = productData.name;
    document.getElementById('product-price').textContent = productData.price;
    document.getElementById('product-sku').textContent = productData.sku;
    document.getElementById('product-category').textContent = productData.category;
    document.getElementById('product-category').href = productData.categoryLink;
    document.getElementById('tab-description').innerHTML = `<p>${productData.description}</p>`;


    const mainImage = document.getElementById('main-product-image');
    const thumbnailContainer = document.getElementById('thumbnail-container');
    productData.images.forEach((src, index) => {
        let thumb = document.createElement('img');
        thumb.src = src;
        thumb.classList.add('thumbnail');
        if (index === 0) thumb.classList.add('active');
        thumb.addEventListener('click', () => {
            mainImage.src = src;
            document.querySelector('.thumbnail.active').classList.remove('active');
            thumb.classList.add('active');
        });
        thumbnailContainer.appendChild(thumb);
    });

    const quantityInput = document.querySelector('.quantity-selector input');
    document.querySelector('.quantity-selector button:first-child').addEventListener('click', () => {
        let val = parseInt(quantityInput.value);
        if (val > 1) quantityInput.value = val - 1;
    });
    document.querySelector('.quantity-selector button:last-child').addEventListener('click', () => {
        let val = parseInt(quantityInput.value);
        quantityInput.value = val + 1;
    });

    document.querySelector('.btn-add-to-cart-detail').addEventListener('click', () => {
        alert(`${quantityInput.value}x ${productData.name} successfully added to cart!`);
    });
    document.getElementById('btn-add-to-wishlist').addEventListener('click', () => {
        alert(`${productData.name} successfully added to your wishlist!`);
    });

    const tabLinks = document.querySelectorAll('.tab-link');
    const tabPanes = document.querySelectorAll('.tab-pane');
    tabLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.querySelector('.tab-link.active').classList.remove('active');
            document.querySelector('.tab-pane.active').classList.remove('active');
            link.classList.add('active');
            document.getElementById(link.dataset.tab).classList.add('active');
        });
    });

    const specsTable = document.createElement('table');
    specsTable.className = 'specs-table';
    let specsHTML = '';
    for (const key in productData.specifications) {
        specsHTML += `<tr><td>${key}</td><td>${productData.specifications[key]}</td></tr>`;
    }
    specsTable.innerHTML = specsHTML;
    document.getElementById('tab-specs').appendChild(specsTable);

    const reviewsContainer = document.getElementById('tab-reviews');
    let reviewsHTML = '';
    productData.reviews.forEach(review => {
        reviewsHTML += `
            <div class="review">
                <div class="review-header">
                    <strong>${review.name}</strong>
                    <span class="review-rating">${'⭐️'.repeat(review.rating)}</span>
                </div>
                <p class="review-body">${review.comment}</p>
            </div>
        `;
    });
    reviewsContainer.innerHTML = reviewsHTML;


    const relatedProductsData = [
        { name: "MSI MAG B760M Mortar WIFI", price: "Rp 3.800.000", image: "productPictures/B760M.png", link:"#" },
        { name: "Noctua NH-D15 CPU Cooler", price: "Rp 1.750.000", image: "productPictures/NOCTUA NH-D15.jpg", link:"#" }
    ];
    const relatedGrid = document.getElementById('related-products-grid');
    let relatedHTML = '';
    relatedProductsData.forEach(prod => {
        relatedHTML += `
            <a href="${prod.link}" class="product-card">
                <img src="${prod.image}" alt="${prod.name}">
                <h4>${prod.name}</h4>
                <p class="product-price">${prod.price}</p>
            </a>
        `;
    });
    relatedGrid.innerHTML = relatedHTML;
});