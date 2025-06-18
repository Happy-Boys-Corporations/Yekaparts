document.addEventListener('DOMContentLoaded', () => {
            const tabLinks = document.querySelectorAll('.tab-link');
            const tabContents = document.querySelectorAll('.tab-content');

            tabLinks.forEach(link => {
                link.addEventListener('click', () => {
                    const tabId = link.getAttribute('data-tab');

                    tabLinks.forEach(item => item.classList.remove('active'));
                    tabContents.forEach(item => item.classList.remove('active'));

                    link.classList.add('active');
                    document.getElementById(tabId).classList.add('active');
                });
            });

            const mainImage = document.getElementById('main-product-image');
            const thumbnails = document.querySelectorAll('.thumbnail');

            thumbnails.forEach(thumb => {
                thumb.addEventListener('click', () => {
                    mainImage.src = thumb.src;
                    
                    thumbnails.forEach(item => item.classList.remove('active'));
                    thumb.classList.add('active');
                });
            });
        });