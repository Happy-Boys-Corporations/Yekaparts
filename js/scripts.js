document.addEventListener('DOMContentLoaded', () => {
    const categories = [
        { name: 'Processor', image: 'logo/processor.png' },
        { name: 'Motherboard', image: 'logo/motherboard.png' },
        { name: 'RAM Sticks', image: 'logo/RAM.png' },
        { name: 'Graphic Cards', image: 'logo/graphic cards.png' },
        { name: 'Storage', image: 'logo/storage.png' },
        { name: 'Power Supply', image: 'logo/psu.png' },
        { name: 'Cooling', image: 'logo/cooler.png' },
        { name: 'Casing', image: 'logo/case.png' },
        { name: 'Peripherals', image: 'logo/peripherals.png' }
    ];

    const categoryGrid = document.querySelector('.category-grid');
    if (categoryGrid) { // Check if the element exists
        categories.forEach((category, index) => {
            const slug = category.name.toLowerCase().replace(/\s+/g, '-');
            const card = document.createElement('div');
            card.className = 'category-card';
            card.innerHTML = `
                <a href="categories/${slug}.html" style="text-decoration:none; color:inherit;">
                    <img src="${category.image}" alt="${category.name}">
                    <h3>${category.name}</h3>
                </a>
            `;
            categoryGrid.appendChild(card);
        });
    }
});


document.addEventListener('DOMContentLoaded', () => {

    if (window.location.pathname.endsWith('signinpage.html')) {
        const form = document.querySelector('form[action="/signin"]');
        if (form) {
            form.addEventListener('submit', function (e) {
                e.preventDefault();
               
                window.location.href = 'homepage.html';
            });
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.endsWith('signup.html')) {
        const form = document.querySelector('form[action="/signup"]');
        if (form) {
            form.addEventListener('submit', function (e) {
                e.preventDefault();
                
                window.location.href = 'homepage.html';
            });
        }
    }
});