document.addEventListener('DOMContentLoaded', () => {

    const components = {
        processor: [
            { name: 'Intel Core i9-13900K', price: 9850000, image: 'productPictures/13900K.png' },
            { name: 'AMD Ryzen 9 7950X', price: 10500000, image: 'productPictures/7950X.png' },
            { name: 'Intel Core i5-13600K', price: 4800000, image: 'productPictures/13600k.png' },
            { name: 'AMD Ryzen 7 7800X3D', price: 6500000, image: 'productPictures/Ryzen7.jpg' },
            { name: 'Intel Core i7-13700K', price: 6200000, image: 'productPictures/13700K.png' }
        ],
        motherboard: [
            { name: 'MSI MAG B760M Mortar WIFI', price: 3800000, image: 'productPictures/B760M.png' },
            { name: 'ASUS Prime Z790-P WIFI', price: 4200000, image: 'productPictures/Z790-P WIFI.png' },
            { name: 'Gigabyte B650 Gaming X AX', price: 3500000, image: 'productPictures/B650 GAMING.png' },
            { name: 'ASRock B550 PG Riptide', price: 2100000, image: 'productPictures/B550 PG Riptide(L2).png' },
            { name: 'NZXT N7 Z790 Matte White', price: 5300000, image: 'productPictures/N7 Z790.png' }
        ],
        ram: [
            { name: 'Corsair Vengeance RGB DDR5 32GB', price: 2150000, image: 'productPictures/CORSAIRVENGEANCE.png' },
            { name: 'G.Skill Trident Z5 Neo RGB 32GB', price: 2400000, image: 'productPictures/GSKILLTRIDENT.png' },
            { name: 'Kingston Fury Beast 16GB', price: 980000, image: 'productPictures/KINGSTONFURYBEAST.png' },
            { name: 'Teamgroup T-Force Delta RGB 16GB', price: 890000, image: 'productPictures/TEAM_T-FORCE.png' },
            { name: 'Crucial Pro DDR5 32GB', price: 1750000, image: 'productPictures/CRUCIALBALLISTIX.jpg' }
        ],
        gpu: [
            { name: 'NVIDIA GeForce RTX 4090', price: 30000000, image: 'productPictures/4090.png' },
            { name: 'AMD Radeon RX 7900 XTX', price: 18500000, image: 'productPictures/RX 7900.png' },
            { name: 'NVIDIA GeForce RTX 4070 Ti', price: 15000000, image: 'productPictures/4070 TI.png' },
            { name: 'NVIDIA GeForce RTX 4060', price: 5500000, image: 'productPictures/RTX 4060.png' },
            { name: 'AMD Radeon RX 7600', price: 4800000, image: 'productPictures/RX 7600.png' }
        ],
        storage: [
            { name: 'Samsung 990 Pro NVMe SSD 2TB', price: 3850000, image: 'productPictures/SAMSUNG990PRO.png' },
            { name: 'Seagate Barracuda 4TB HDD', price: 1500000, image: 'productPictures/SEAGATEBARRACUDA.png' },
            { name: 'Crucial P3 Plus NVMe SSD 1TB', price: 990000, image: 'productPictures/CRUCIALMX500.png' },
            { name: 'WD Black SN850X NVMe 1TB', price: 1950000, image: 'productPictures/SN850X1TB.png' },
            { name: 'Samsung 870 EVO SATA SSD 1TB', price: 1250000, image: 'productPictures/SAMSUNG990PRO.png' }
        ],
        psu: [
            { name: 'Corsair RM850x 850W Gold', price: 2450000, image: 'productPictures/rm850x_hero.png' },
            { name: 'Seasonic FOCUS Plus Gold 750W', price: 1980000, image: 'productPictures/SEASONIC_FOCUS_GOLD_750W.png' },
            { name: 'Cooler Master MWE 650 Bronze', price: 850000, image: 'productPictures/mwe650gold.png' },
            { name: 'be quiet! Pure Power 11 700W', price: 1300000, image: 'productPictures/BE_QUIET_STRAIGHT_POWER.png' },
            { name: 'FSP Hydro G Pro 850W', price: 2100000, image: 'productPictures/HydroG.png' }
        ],
        casing: [
            { name: 'NZXT H5 Flow', price: 1500000, image: 'productPictures/NZXTH5FLOWWHITE.jpg' },
            { name: 'Lian Li O11 Dynamic EVO', price: 2800000, image: 'productPictures/LIANLIO11DYNAMIC.jpg' },
            { name: 'Corsair 4000D Airflow', price: 1650000, image: 'productPictures/CORSAIR400D.jpg' },
            { name: 'Fractal Design Meshify 2', price: 2500000, image: 'productPictures/FRACTALDESIGNMESHIFY.jpg' },
            { name: 'Phanteks Eclipse G360A', price: 1300000, image: 'productPictures/PHANTEKSECLIPSE.jpg' }
        ],
        cooling: [
            { name: 'Noctua NH-D15 Chromax Black', price: 1800000, image: 'productPictures/Noctua.png' },
            { name: 'Lian Li Galahad II Trinity AIO', price: 2500000, image: 'productPictures/LIANLICOOLER.png' },
            { name: 'Cooler Master Hyper 212 EVO V2', price: 650000, image: 'productPictures/COOLERMASTERHYPE.png' },
            { name: 'Arctic Liquid Freezer II 240', price: 1950000, image: 'productPictures/ARTIC.png' },
            { name: 'Deepcool AK400 Digital', price: 550000, image: 'productPictures/DEEPCOOL.png' }
        ]
    };
    
    const componentMap = {
        processor: "Processor", motherboard: "Motherboard", ram: "RAM Sticks",
        gpu: "Graphic Card", storage: "Storage", psu: "Power Supply",
        casing: "Casing", cooling: "Cooling System"
    };

    const modal = document.getElementById('componentModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalGrid = document.getElementById('modalProductsGrid');
    const closeButton = document.querySelector('.close-button');
    let currentComponentType = null;

    const formatCurrency = (amount) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(amount);

    const openModal = (type) => {
        currentComponentType = type;
        modalTitle.textContent = `Pilih ${componentMap[type]}`;
        modalGrid.innerHTML = ''; 

        components[type].forEach(item => {
            const productCard = `
                <div class="product-card-modal">
                    <img src="${item.image}" alt="${item.name}">
                    <h4>${item.name}</h4>
                    <p>${formatCurrency(item.price)}</p>
                    <button class="btn-pilih-produk" data-name="${item.name}" data-price="${item.price}" data-image="${item.image}">Pilih</button>
                </div>
            `;
            modalGrid.insertAdjacentHTML('beforeend', productCard);
        });
        
        modal.style.display = 'block';
    };

    document.querySelectorAll('.component-slot').forEach(slot => {
        slot.querySelector('.btn-pilih').addEventListener('click', () => {
            const type = slot.getAttribute('data-type');
            openModal(type);
        });

        slot.querySelector('.btn-remove-component').addEventListener('click', () => {
            slot.classList.remove('selected');
            slot.querySelector('.slot-product-image').src = '';
            slot.querySelector('.product-name').textContent = 'Pilih sebuah komponen';
            const priceDiv = slot.querySelector('.slot-price');
            priceDiv.textContent = '';
            priceDiv.dataset.price = 0;
            slot.querySelector('.btn-pilih').textContent = 'Pilih';
            updateTotals();
        });
    });

    modalGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-pilih-produk')) {
            const name = e.target.getAttribute('data-name');
            const price = parseFloat(e.target.getAttribute('data-price'));
            const image = e.target.getAttribute('data-image');
            const slot = document.getElementById(`${currentComponentType}-slot`);
            
            slot.classList.add('selected');
            slot.querySelector('.slot-product-image').src = image;
            slot.querySelector('.product-name').textContent = name;
            const priceDiv = slot.querySelector('.slot-price');
            priceDiv.textContent = formatCurrency(price);
            priceDiv.dataset.price = price;
            slot.querySelector('.btn-pilih').textContent = 'Ganti';

            updateTotals();
            
            modal.style.display = 'none';
        }
    });

    const updateTotals = () => {
        let total = 0;
        let selectedCount = 0;
        
        document.querySelectorAll('.slot-price').forEach(div => {
            const price = parseFloat(div.dataset.price);
            if (price > 0) {
                total += price;
                selectedCount++;
            }
        });
        
        document.getElementById('total-price').textContent = formatCurrency(total);
        const addToCartButton = document.querySelector('.btn-add-to-cart');
        addToCartButton.disabled = selectedCount === 0;
    };

    closeButton.addEventListener('click', () => modal.style.display = "none");
    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = "none";
        }
    });

    const addToCartButton = document.querySelector('.btn-add-to-cart');
    const warningModal = document.getElementById('warningModal');
    
    const closeWarningModal = document.getElementById('closeWarningModal');
    const btnReturn = document.getElementById('btn-return-to-build');
    const btnProceed = document.getElementById('btn-proceed-checkout');

    addToCartButton.addEventListener('click', () => {
        let selectedCount = 0;
        const totalComponents = document.querySelectorAll('.component-slot').length;

        document.querySelectorAll('.slot-price').forEach(div => {
            if (parseFloat(div.dataset.price) > 0) {
                selectedCount++;
            }
        });

        if (selectedCount < totalComponents) {
            warningModal.style.display = 'block';
        } else {
            alert('Rakitan lengkap! Menuju ke halaman keranjang...');
        }
    });

    btnProceed.addEventListener('click', () => {
        warningModal.style.display = 'none';
        alert('Rakitan tidak lengkap, tetap melanjutkan ke keranjang...');
    });


    btnReturn.addEventListener('click', () => {
        warningModal.style.display = 'none';
    });

    closeWarningModal.addEventListener('click', () => {
        warningModal.style.display = 'none';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target == warningModal) {
            warningModal.style.display = "none";
        }
    });
});