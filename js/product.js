const allProducts = {
  processor: [
    { name: "Intel Core i9-13900K", price: "Rp 9.500.000", image: "productPictures/13900K.png" },
    { name: "AMD Ryzen 9 7950X", price: "Rp 9.200.000", image:    "productPictures/7950X.png" },
    { name: "Intel Core i7-13700K", price: "Rp 6.800.000", image: "productPictures/13700K.png" },
    { name: "AMD Ryzen 7 7800X3D", price: "Rp 6.500.000", image: "productPictures/Ryzen7.jpg" },
    { name: "Intel Core i5-13600K", price: "Rp 5.200.000", image: "productPictures/13600K.png" },
  ],
  motherboard: [
    { name: "MSI MAG B760M Mortar WIFI", price: "Rp 3.800.000", image: "productPictures/B760M.png" },
    { name: "ASUS Prime Z790-P WIFI", price: "Rp 4.200.000", image: "productPictures/Z790-P WIFI.png" },
    { name: "Gigabyte B650 Gaming X AX", price: "Rp 3.500.000", image: "productPictures/B650 GAMING.png" },
    { name: "ASRock B550 PG Riptide", price: "Rp 2.100.000", image: "productPictures/B550 PG Riptide(L2).png" },
    { name: "NZXT N7 Z790 Matte White", price: "Rp 5.300.000", image: "productPictures/N7 Z790.png" },
  ],
  "ram-sticks": [
    { name: "Corsair Vengeance RGB Pro 32GB DDR4", price: "Rp 1.850.000", image: "productPictures/CORSAIRVENGEANCE.jpg" },
    { name: "G.Skill Trident Z5 RGB 32GB DDR5", price: "Rp 2.500.000", image: "productPictures/GSKILLTRIDENT.jpg" },
    { name: "Kingston Fury Beast 16GB DDR4", price: "Rp 850.000", image: "productPictures/KINGSTONFURYBEAST.jpg" },
    { name: "Crucial Ballistix 16GB DDR4", price: "Rp 920.000", image: "productPictures/CRUCIALBALLISTIX.jpg" },
    { name: "Team T-Force Vulcan Z 16GB DDR4", price: "Rp 750.000", image: "productPictures/TEAM T-FORCE.jpg" },
  ],
  "graphic-cards": [
    { name: "NVIDIA GeForce RTX 4090", price: "Rp 30.000.000", image: "productPictures/4090.png" },
    { name: "AMD Radeon RX 7900 XTX", price: "Rp 18.500.000", image: "productPictures/RX 7900.png" },
    { name: "NVIDIA GeForce RTX 4070 Ti", price: "Rp 15.000.000", image: "productPictures/4070 TI.png" },
    { name: "NVIDIA GeForce RTX 4060", price: "Rp 5.500.000", image: "productPictures/RTX 4060.png" },
    { name: "AMD Radeon RX 7600", price: "Rp 4.800.000", image: "productPictures/RX 7600.png" },
  ],
  storage: [
    { name: "Samsung 990 Pro NVMe SSD 2TB", price: "Rp 3.800.000", image: "productPictures/SAMSUNG990PRO.jpg" },
    { name: "Crucial MX500 SATA SSD 1TB", price: "Rp 1.250.000", image: "productPictures/CRUCIALMX500.png" },
    { name: "Seagate Barracuda HDD 4TB", price: "Rp 1.500.000", image: "productPictures/SEAGATEBARRACUDA.png" },
    { name: "WD Black SN850X NVMe SSD 1TB", price: "Rp 1.950.000", image: "productPictures/SN850X1TB.png" },
    { name: "Kingston NV2 NVMe SSD 500GB", price: "Rp 650.000", image: "productPictures/KINGSTONNV2.png" },
  ],
  "power-supply": [
    { name: "Corsair RM850x 850W 80+ Gold", price: "Rp 2.100.000", image: "productPictures/rm850x_hero.png" },
    { name: "Seasonic FOCUS Plus Gold 750W", price: "Rp 1.850.000", image: "productPictures/SEASONIC FOCUS GOLD 750W.jpg" },
    { name: "Cooler Master MWE Gold 650 V2", price: "Rp 1.200.000", image: "productPictures/mwe650gold.jpg" },
    { name: "be quiet! Straight Power 11 1000W", price: "Rp 3.500.000", image: "productPictures/BE QUIET STRAIGHT POWER.jpg" },
    { name: "EVGA SuperNOVA 750 G6 80+ Gold", price: "Rp 1.900.000", image: "productPictures/EVGASUPERNOVA.jpg" },
  ],
  cooling: [
    { name: "Noctua NH-D15 CPU Air Cooler", price: "Rp 1.750.000", image: "productPictures/NOCTUA NH-D15.jpg" },
    { name: "Cooler Master Hyper 212 CPU Cooler", price: "Rp 650.000", image: "productPictures/COOLERMASTERHYPER212.jpg" },
    { name: "NZXT Kraken X73 AIO Liquid Cooler", price: "Rp 2.800.000", image: "productPictures/NZXTKRAKENX73.png" },
    { name: "be quiet! Dark Rock Pro 4 Air Cooler", price: "Rp 1.500.000", image: "productPictures/BEQUIET DARK ROCK.jpg" },
    { name: "Lian Li Galahad 240 AIO Cooler", price: "Rp 2.100.000", image: "productPictures/LIANLIGALAHAD.jpg" },
  ],
  casing: [
    { name: "NZXT H5 Flow", price: "Rp 1.500.000", image: "productPictures/NZXTH5FLOWWHITE.jpg" },
    { name: "Lian Li O11 Dynamic EVO", price: "Rp 2.800.000", image: "productPictures/LIANLIO11DYNAMIC.jpg" },
    { name: "Corsair 4000D Airflow", price: "Rp 1.650.000", image: "productPictures/CORSAIR400D.jpg" },
    { name: "Fractal Design Meshify 2", price: "Rp 2.500.000", image: "productPictures/FRACTALDESIGNMESHIFY.jpg" },
    { name: "Phanteks Eclipse G360A", price: "Rp 1.300.000", image: "productPictures/PHANTEKSECLIPSE.jpg" },
  ],
  
  peripherals: [
    { name: "Logitech G Pro X TKL Mechanical Keyboard", price: "Rp 2.500.000", image: "productPictures/LOGITECHGPROTKL.png" },
    { name: "Razer DeathAdder V3 Pro Mouse", price: "Rp 2.150.000", image: "productPictures/RAZERDEATHADDER.png" },
    { name: "SteelSeries Arctis Nova 7 Wireless Headset", price: "Rp 3.100.000", image: "productPictures/ARCTISNOVA7.png" },
    { name: "Logitech C922 Pro Stream Webcam", price: "Rp 1.450.000", image: "productPictures/c922 pro stream.jpg" },
    { name: "SteelSeries QcK Large Mousepad", price: "Rp 350.000", image: "productPictures/QCKLARGEMOUSEPAD.jpg" },
  ],
};

const categories = [
  { id: 1, name: "Processor", count: allProducts.processor.length },
  { id: 2, name: "Motherboard", count: allProducts.motherboard.length },
  { id: 3, name: "RAM", count: allProducts['ram-sticks'].length },
  { id: 4, name: "Graphic Cards", count: allProducts['graphic-cards'].length },
  { id: 5, name: "Storage", count: allProducts.storage.length },
  { id: 6, name: "Power Supply", count: allProducts['power-supply'].length },
  { id: 7, name: "Cooling", count: allProducts.cooling.length },
  { id: 8, name: "Casing", count: allProducts.casing.length },
  { id: 9, name: "Peripherals", count: allProducts.peripherals.length },
];

function getCurrentCategory() {
    const path = window.location.pathname;
    const parts = path.split('/');
    const fileName = parts.pop();
    const categoryKey = fileName.replace('.html', '');
    return categoryKey;
}

function renderCategories(currentCategoryKey) {
  const categoriesList = document.querySelector('.categories-list');
  if (!categoriesList) return;
  categoriesList.innerHTML = categories.map(category => {
      let categoryKey = category.name.toLowerCase().replace(/\s+/g, '-');
      if (category.name === "RAM") categoryKey = "ram-sticks";
      
      return `
        <div class="category-item">
          <input type="checkbox" id="category-${category.id}" 
                ${categoryKey === currentCategoryKey ? 'checked' : ''}>
          <label for="category-${category.id}">
            ${category.name} (${category.count})
          </label>
        </div>
      `
  }).join('');
}

function renderProducts(categoryKey) {
  const productsGrid = document.querySelector('.products-grid');
  const resultsCount = document.querySelector('.results-count');
  if (!productsGrid || !resultsCount) return;

  const productsToRender = allProducts[categoryKey] || [];

  resultsCount.innerHTML = `<span class="count">${productsToRender.length}</span> Results Found`;
  
  if (productsToRender.length === 0) {
      productsGrid.innerHTML = "<p>No products found for this category.</p>";
      return;
  }
  
  productsGrid.innerHTML = productsToRender.map(product => {
    const filledStars = Math.floor(Math.random() * 3) + 3;
    const emptyStars = 5 - filledStars;
    
    let detailPageLink = '#';
    
    if (product.name === "AMD Ryzen 7 7800X3D") {
      detailPageLink = '../product-detail.html'; 
    }

    return `
      <a href="${detailPageLink}" class="product-card-link">
        <div class="product-card">
          <img src="../${product.image}" alt="${product.name}" class="product-image">
          <div class="product-info">
            <h4 class="product-name">${product.name}</h4>
            <p class="product-price">${product.price}</p>
            <div class="product-rating">
              ${'⭐️'.repeat(filledStars)}${'☆'.repeat(emptyStars)}
            </div>
          </div>
        </div>
      </a>
    `
  }).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  const currentCategory = getCurrentCategory();
  renderCategories(currentCategory);
  renderProducts(currentCategory);
});