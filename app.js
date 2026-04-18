/* ===================================================
   TARGET E-COMMERCE — APPLICATION LOGIC
   =================================================== */

// ===================== PRODUCT DATA =====================
const products = [
    { id: 1, name: "Classic Cotton Crew Neck T-Shirt", category: "clothing", price: 12.99, originalPrice: 19.99, rating: 4.5, reviews: 1243, emoji: "👕", badge: "sale", description: "A wardrobe essential made from 100% organic cotton. Features a classic crew neck design that pairs perfectly with jeans, shorts, or layered under a jacket. Pre-shrunk for a lasting fit.", sizes: ["XS","S","M","L","XL"], colors: ["White","Black","Navy","Red"], featured: true, deal: true },
    { id: 2, name: "Women's High-Rise Skinny Jeans", category: "clothing", price: 29.99, originalPrice: 39.99, rating: 4.3, reviews: 876, emoji: "👖", badge: "sale", description: "Flattering high-rise fit with just the right amount of stretch. Made with sustainable denim. Features classic 5-pocket styling and a zip fly.", sizes: ["0","2","4","6","8","10","12"], colors: ["Dark Wash","Light Wash","Black"], featured: true, deal: true },
    { id: 3, name: "Wireless Bluetooth Earbuds Pro", category: "electronics", price: 49.99, originalPrice: 79.99, rating: 4.6, reviews: 2341, emoji: "🎧", badge: "sale", description: "Premium sound quality with active noise cancellation. 30-hour battery life with charging case. IPX5 water resistant, perfect for workouts.", sizes: [], colors: ["Black","White"], featured: true, deal: true, trending: true },
    { id: 4, name: '55" 4K Smart TV - QLED Display', category: "electronics", price: 449.99, originalPrice: 599.99, rating: 4.7, reviews: 567, emoji: "📺", badge: "sale", description: "Stunning 4K QLED display with Quantum Dot technology. Smart TV with built-in streaming apps. Dolby Vision & Atmos support. Game mode with 120Hz refresh rate.", sizes: [], colors: ["Black"], featured: true, deal: true },
    { id: 5, name: "Luxury Scented Candle Set (3-Pack)", category: "home-decor", price: 24.99, originalPrice: null, rating: 4.8, reviews: 432, emoji: "🕯️", badge: "new", description: "Hand-poured soy wax candles in three calming scents: Lavender Dreams, Vanilla Bean, and Fresh Linen. 45-hour burn time each. Comes in beautiful glass jars.", sizes: [], colors: [], featured: true },
    { id: 6, name: "Organic Mixed Berry Granola", category: "grocery", price: 6.99, originalPrice: null, rating: 4.4, reviews: 218, emoji: "🫐", description: "USDA Organic granola with real blueberries, strawberries, and raspberries. Non-GMO, no artificial flavors. 12oz bag.", sizes: [], colors: [], featured: true },
    { id: 7, name: "Vitamin C Brightening Serum", category: "beauty", price: 18.99, originalPrice: 24.99, rating: 4.5, reviews: 1567, emoji: "✨", badge: "sale", description: "Potent 20% Vitamin C serum with Hyaluronic Acid. Brightens skin, reduces dark spots, and boosts collagen. Dermatologist tested, suitable for all skin types.", sizes: [], colors: [], deal: true, trending: true },
    { id: 8, name: "Kids' Light-Up Sneakers", category: "clothing", price: 22.99, originalPrice: null, rating: 4.6, reviews: 345, emoji: "👟", badge: "new", description: "Fun LED light-up sneakers for kids. Rechargeable via USB. 7 color modes. Easy velcro closure. Non-slip rubber sole.", sizes: ["10T","11T","12T","13T","1Y","2Y","3Y"], colors: ["Blue","Pink","Black"], trending: true },
    { id: 9, name: "Smart Watch Fitness Tracker", category: "electronics", price: 89.99, originalPrice: 129.99, rating: 4.4, reviews: 892, emoji: "⌚", badge: "sale", description: "Advanced fitness tracker with heart rate monitor, GPS, sleep tracking, and 50+ sport modes. 7-day battery life. Water resistant to 50m.", sizes: [], colors: ["Black","Silver","Rose Gold"], deal: true, trending: true },
    { id: 10, name: "Velvet Throw Pillow Covers (Set of 2)", category: "home-decor", price: 16.99, originalPrice: 22.99, rating: 4.3, reviews: 276, emoji: "🛋️", badge: "sale", description: "Luxurious velvet pillow covers in rich colors. Hidden zipper closure. 18x18 inches. Machine washable.", sizes: ["18x18","20x20"], colors: ["Emerald","Navy","Blush","Mustard","Gray"], deal: true },
    { id: 11, name: "Portable Bluetooth Speaker", category: "electronics", price: 34.99, originalPrice: null, rating: 4.5, reviews: 1123, emoji: "🔊", description: "Powerful 360° sound in a compact design. 12-hour battery. IPX7 waterproof. Built-in microphone for calls.", sizes: [], colors: ["Black","Blue","Red","Teal"], trending: true },
    { id: 12, name: "Organic Cold Brew Coffee Concentrate", category: "grocery", price: 11.99, originalPrice: null, rating: 4.7, reviews: 534, emoji: "☕", description: "Smooth, low-acid cold brew concentrate. Makes 12 cups. USDA Organic, Fair Trade certified. Just add water or milk.", sizes: [], colors: [] },
    { id: 13, name: "Moisturizing Lip Gloss Collection", category: "beauty", price: 14.99, originalPrice: 19.99, rating: 4.2, reviews: 687, emoji: "💄", badge: "sale", description: "Set of 6 moisturizing lip glosses in universally flattering shades. Infused with shea butter and vitamin E. Non-sticky formula.", sizes: [], colors: [], deal: true },
    { id: 14, name: "Men's Performance Polo Shirt", category: "clothing", price: 19.99, originalPrice: null, rating: 4.4, reviews: 412, emoji: "👔", badge: "new", description: "Moisture-wicking performance polo. UPF 30 sun protection. 4-way stretch fabric. Classic fit with ribbed collar.", sizes: ["S","M","L","XL","XXL"], colors: ["White","Navy","Gray","Green"], },
    { id: 15, name: '10.2" Tablet with Retina Display', category: "electronics", price: 329.99, originalPrice: 349.99, rating: 4.8, reviews: 2156, emoji: "📱", badge: "sale", description: "Powerful tablet with stunning Retina display. A14 chip for incredible performance. 64GB storage. Perfect for streaming, gaming, and productivity.", sizes: [], colors: ["Space Gray","Silver"], featured: true },
    { id: 16, name: "Woven Storage Basket Set", category: "home-decor", price: 28.99, originalPrice: null, rating: 4.6, reviews: 198, emoji: "🧺", badge: "new", description: "Set of 3 handwoven seagrass baskets. Collapsible for easy storage. Great for organizing blankets, toys, or laundry.", sizes: ["S","M","L"], colors: ["Natural","White"], trending: true },
    { id: 17, name: "Organic Avocado Oil Cooking Spray", category: "grocery", price: 5.49, originalPrice: null, rating: 4.3, reviews: 167, emoji: "🥑", description: "100% pure avocado oil spray. High smoke point, perfect for grilling and roasting. Non-GMO, no propellants.", sizes: [], colors: [] },
    { id: 18, name: "Retinol Night Cream", category: "beauty", price: 22.99, originalPrice: 29.99, rating: 4.6, reviews: 923, emoji: "🌙", badge: "sale", description: "Anti-aging retinol cream with peptides and ceramides. Reduces fine lines and wrinkles while you sleep. Fragrance-free, non-comedogenic.", sizes: [], colors: [], deal: true },
    { id: 19, name: "Cozy Fleece Blanket - King Size", category: "home-decor", price: 34.99, originalPrice: 44.99, rating: 4.7, reviews: 1456, emoji: "🛏️", badge: "sale", description: "Ultra-soft microfiber fleece blanket. Lightweight yet warm. Machine washable, fade-resistant. Available in 8 gorgeous colors.", sizes: ["Twin","Queen","King"], colors: ["Charcoal","Ivory","Navy","Sage","Blush","Camel","Dusty Blue","Wine"], featured: true, deal: true },
    { id: 20, name: "Robot Vacuum Cleaner", category: "electronics", price: 199.99, originalPrice: 299.99, rating: 4.5, reviews: 743, emoji: "🤖", badge: "sale", description: "Smart robot vacuum with mapping technology. 2500Pa suction power. Self-emptying base. Works with Alexa and Google Home. 150-min runtime.", sizes: [], colors: ["Black","White"], deal: true, trending: true },
    { id: 21, name: "Plant-Based Protein Bars (12-Pack)", category: "grocery", price: 18.99, originalPrice: null, rating: 4.3, reviews: 321, emoji: "🍫", description: "20g protein per bar. Made with real peanut butter and dark chocolate. No artificial sweeteners. Gluten-free, vegan.", sizes: [], colors: [] },
    { id: 22, name: "Hydrating Face Sheet Masks (10-Pack)", category: "beauty", price: 12.99, originalPrice: 16.99, rating: 4.4, reviews: 458, emoji: "🧖", badge: "sale", description: "Korean-inspired sheet masks with hyaluronic acid, green tea, and collagen. Individually wrapped for freshness. 10 different formulas.", sizes: [], colors: [], deal: true },
    { id: 23, name: "Women's Running Shoes", category: "clothing", price: 64.99, originalPrice: 84.99, rating: 4.6, reviews: 1089, emoji: "👟", badge: "sale", description: "Lightweight running shoes with responsive cushioning. Breathable mesh upper. Durable rubber outsole. Great for daily training and races.", sizes: ["6","6.5","7","7.5","8","8.5","9","9.5","10"], colors: ["Black/White","Pink/Gray","Blue/Teal"], deal: true },
    { id: 24, name: "Ceramic Non-Stick Cookware Set", category: "home-decor", price: 79.99, originalPrice: 119.99, rating: 4.5, reviews: 634, emoji: "🍳", badge: "sale", description: "12-piece ceramic non-stick cookware set. PFOA-free. Oven safe to 450°F. Includes pots, pans, and utensils. Dishwasher safe.", sizes: [], colors: ["Gray","Cream","Navy"], deal: true, featured: true },
];

// ===================== APPLICATION STATE =====================
let cart = [];
let currentProduct = null;
let pdpQty = 1;
let currentCategory = 'all';
let promoApplied = null;
let notifications = [];
let orderHistory = [];

const promoCodes = {
    'BOGO50': { type: 'percent', value: 25, label: '25% Off (BOGO50)' },
    'TECH50': { type: 'fixed', value: 50, label: '$50 Off (TECH50)', minOrder: 200 },
    'FREESHIP': { type: 'shipping', value: 0, label: 'Free Shipping (FREESHIP)' },
    'BEAUTY20': { type: 'percent', value: 20, label: '20% Off (BEAUTY20)' },
    'TARGET10': { type: 'percent', value: 10, label: '10% Off (TARGET10)' },
};

// ===================== NAVIGATION =====================
function navigate(page, data) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    window.scrollTo(0, 0);

    switch(page) {
        case 'home':
            document.getElementById('page-home').classList.add('active');
            renderFeaturedProducts();
            renderTrendingProducts();
            break;
        case 'plp':
            currentCategory = data || 'all';
            document.getElementById('page-plp').classList.add('active');
            setupPLP();
            break;
        case 'pdp':
            currentProduct = products.find(p => p.id === data);
            pdpQty = 1;
            document.getElementById('page-pdp').classList.add('active');
            renderPDP();
            break;
        case 'cart':
            document.getElementById('page-cart').classList.add('active');
            renderCart();
            break;
        case 'checkout':
            if (cart.length === 0) { navigate('cart'); return; }
            document.getElementById('page-checkout').classList.add('active');
            goToCheckoutStep('shipping');
            updateCheckoutSummary();
            break;
        case 'processing':
            document.getElementById('page-processing').classList.add('active');
            break;
        case 'confirmation':
            document.getElementById('page-confirmation').classList.add('active');
            break;
    }
}

// ===================== HERO SLIDER =====================
let currentSlide = 0;
const totalSlides = 3;
let slideInterval;

function goToSlide(index) {
    currentSlide = index;
    document.querySelectorAll('.hero-slide').forEach((s, i) => s.classList.toggle('active', i === index));
    document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === index));
}

function nextSlide() {
    goToSlide((currentSlide + 1) % totalSlides);
}

function startSlider() {
    slideInterval = setInterval(nextSlide, 5000);
}

// ===================== PRODUCT RENDERING =====================
function renderStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) stars += '<i class="fas fa-star"></i>';
        else if (i - 0.5 <= rating) stars += '<i class="fas fa-star-half-alt"></i>';
        else stars += '<i class="far fa-star"></i>';
    }
    return stars;
}

function createProductCard(product) {
    const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;
    const badgeHTML = product.badge ? `<span class="product-badge ${product.badge}">${product.badge === 'sale' ? `${discount}% OFF` : 'NEW'}</span>` : '';

    return `
        <div class="product-card" onclick="navigate('pdp', ${product.id})">
            <div class="product-image">
                ${badgeHTML}
                <span class="product-emoji">${product.emoji}</span>
                <button class="quick-add" onclick="event.stopPropagation(); quickAdd(${product.id})" title="Quick Add to Cart">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
            <div class="product-info">
                <div class="product-name">${sanitize(product.name)}</div>
                <div class="product-price">
                    <span class="price-current">$${product.price.toFixed(2)}</span>
                    ${product.originalPrice ? `<span class="price-original">$${product.originalPrice.toFixed(2)}</span>` : ''}
                    ${discount > 0 ? `<span class="price-discount">Save ${discount}%</span>` : ''}
                </div>
                <div class="product-rating">
                    ${renderStars(product.rating)}
                    <span>(${product.reviews.toLocaleString()})</span>
                </div>
            </div>
        </div>
    `;
}

function renderFeaturedProducts() {
    const container = document.getElementById('featured-products');
    const featured = products.filter(p => p.featured).slice(0, 8);
    container.innerHTML = featured.map(createProductCard).join('');
}

function renderTrendingProducts() {
    const container = document.getElementById('trending-products');
    const trending = products.filter(p => p.trending).slice(0, 4);
    container.innerHTML = trending.map(createProductCard).join('');
}

// ===================== PLP =====================
function setupPLP() {
    const titleEl = document.getElementById('plp-title');
    const breadcrumbEl = document.getElementById('plp-breadcrumb');
    const catNames = { 'all': 'All Products', 'clothing': 'Clothing', 'electronics': 'Electronics', 'home-decor': 'Home & Décor', 'grocery': 'Grocery', 'beauty': 'Beauty', 'deals': 'Top Deals' };
    const catName = catNames[currentCategory] || 'All Products';

    titleEl.textContent = catName;
    breadcrumbEl.innerHTML = `<a href="#" onclick="navigate('home')">Home</a> / <span>${sanitize(catName)}</span>`;

    // Reset filters
    if (currentCategory !== 'all' && currentCategory !== 'deals') {
        document.querySelectorAll('input[name="filter-cat"]').forEach(cb => {
            cb.checked = cb.value === currentCategory;
        });
    } else {
        document.querySelectorAll('input[name="filter-cat"]').forEach(cb => cb.checked = false);
    }
    document.getElementById('filter-deals').checked = currentCategory === 'deals';

    applyFilters();
}

function applyFilters() {
    let filtered = [...products];

    // Category from nav
    if (currentCategory !== 'all' && currentCategory !== 'deals') {
        filtered = filtered.filter(p => p.category === currentCategory);
    }

    // Category checkboxes
    const catChecks = [...document.querySelectorAll('input[name="filter-cat"]:checked')].map(cb => cb.value);
    if (catChecks.length > 0) {
        filtered = filtered.filter(p => catChecks.includes(p.category));
    }

    // Deals
    if (document.getElementById('filter-deals').checked) {
        filtered = filtered.filter(p => p.deal);
    }

    // Price
    const priceChecks = [...document.querySelectorAll('input[name="filter-price"]:checked')].map(cb => cb.value);
    if (priceChecks.length > 0) {
        filtered = filtered.filter(p => {
            return priceChecks.some(range => {
                const [min, max] = range.split('-').map(Number);
                return p.price >= min && p.price <= max;
            });
        });
    }

    // Rating
    const ratingChecks = [...document.querySelectorAll('input[name="filter-rating"]:checked')].map(cb => Number(cb.value));
    if (ratingChecks.length > 0) {
        const minRating = Math.min(...ratingChecks);
        filtered = filtered.filter(p => p.rating >= minRating);
    }

    // Sort
    const sort = document.getElementById('plp-sort-select').value;
    switch(sort) {
        case 'price-asc': filtered.sort((a, b) => a.price - b.price); break;
        case 'price-desc': filtered.sort((a, b) => b.price - a.price); break;
        case 'rating': filtered.sort((a, b) => b.rating - a.rating); break;
        case 'name': filtered.sort((a, b) => a.name.localeCompare(b.name)); break;
    }

    document.getElementById('plp-count').textContent = `(${filtered.length} items)`;
    const container = document.getElementById('plp-products');
    const noResults = document.getElementById('plp-no-results');

    if (filtered.length === 0) {
        container.innerHTML = '';
        noResults.classList.remove('hidden');
    } else {
        noResults.classList.add('hidden');
        container.innerHTML = filtered.map(createProductCard).join('');
    }
}

function clearFilters() {
    document.querySelectorAll('.plp-filters input[type="checkbox"]').forEach(cb => cb.checked = false);
    document.getElementById('plp-sort-select').value = 'featured';
    currentCategory = 'all';
    applyFilters();
}

// ===================== PDP =====================
function renderPDP() {
    if (!currentProduct) return;
    const p = currentProduct;
    const discount = p.originalPrice ? Math.round((1 - p.price / p.originalPrice) * 100) : 0;

    document.getElementById('pdp-breadcrumb-name').textContent = p.name;
    document.getElementById('pdp-name').textContent = p.name;
    document.getElementById('pdp-main-image').innerHTML = `<span>${p.emoji}</span>`;
    document.getElementById('pdp-description').textContent = p.description;
    document.getElementById('pdp-qty').textContent = '1';
    pdpQty = 1;

    // Rating
    document.getElementById('pdp-rating').innerHTML = `${renderStars(p.rating)} <span class="review-count">${p.rating} (${p.reviews.toLocaleString()} reviews)</span>`;

    // Price
    let priceHTML = `$${p.price.toFixed(2)}`;
    if (p.originalPrice) priceHTML += ` <span class="original-price">$${p.originalPrice.toFixed(2)}</span> <span class="discount-pct">${discount}% off</span>`;
    document.getElementById('pdp-price').innerHTML = priceHTML;

    // Thumbnails
    const thumbs = document.getElementById('pdp-thumbnails');
    thumbs.innerHTML = `<div class="pdp-thumb active">${p.emoji}</div><div class="pdp-thumb">${p.emoji}</div><div class="pdp-thumb">${p.emoji}</div>`;

    // Variants
    const variantsDiv = document.getElementById('pdp-variants');
    let variantsHTML = '';
    if (p.sizes && p.sizes.length > 0) {
        variantsHTML += `<h4>Size</h4><div class="variant-options">${p.sizes.map((s, i) => `<button class="variant-btn ${i === 0 ? 'active' : ''}" onclick="selectVariant(this)">${sanitize(s)}</button>`).join('')}</div>`;
    }
    if (p.colors && p.colors.length > 0) {
        variantsHTML += `<h4 style="margin-top:12px">Color</h4><div class="variant-options">${p.colors.map((c, i) => `<button class="variant-btn ${i === 0 ? 'active' : ''}" onclick="selectVariant(this)">${sanitize(c)}</button>`).join('')}</div>`;
    }
    variantsDiv.innerHTML = variantsHTML;

    // Related
    const related = products.filter(r => r.category === p.category && r.id !== p.id).slice(0, 4);
    document.getElementById('pdp-related').innerHTML = related.map(createProductCard).join('');
}

function selectVariant(btn) {
    btn.parentElement.querySelectorAll('.variant-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

function changePdpQty(delta) {
    pdpQty = Math.max(1, Math.min(10, pdpQty + delta));
    document.getElementById('pdp-qty').textContent = pdpQty;
}

function addToCartFromPDP() {
    if (!currentProduct) return;
    const p = currentProduct;

    // Get selected variants
    let size = '', color = '';
    const sizeBtn = document.querySelector('#pdp-variants .variant-options:first-child .variant-btn.active');
    if (sizeBtn) size = sizeBtn.textContent;
    const colorBtns = document.querySelectorAll('#pdp-variants .variant-options');
    if (colorBtns.length > 1) {
        const colorBtn = colorBtns[1].querySelector('.variant-btn.active');
        if (colorBtn) color = colorBtn.textContent;
    }

    addToCart(p.id, pdpQty, size, color);
}

// ===================== CART =====================
function addToCart(productId, qty = 1, size = '', color = '') {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const key = `${productId}-${size}-${color}`;
    const existing = cart.find(item => item.key === key);

    if (existing) {
        existing.qty = Math.min(10, existing.qty + qty);
    } else {
        cart.push({ key, productId, qty, size, color });
    }

    updateCartBadge();
    showToast('success', 'Added to Cart', `${product.name} has been added to your cart.`);
    sendNotification('cart', 'Item Added to Cart', `${product.name} x${qty} added. Your cart now has ${getCartTotalItems()} item(s).`, ['app']);
}

function quickAdd(productId) {
    addToCart(productId);
}

function removeFromCart(key) {
    cart = cart.filter(item => item.key !== key);
    updateCartBadge();
    renderCart();
}

function updateCartItemQty(key, delta) {
    const item = cart.find(i => i.key === key);
    if (!item) return;
    item.qty = Math.max(1, Math.min(10, item.qty + delta));
    renderCart();
    updateCartBadge();
}

function getCartTotalItems() {
    return cart.reduce((sum, item) => sum + item.qty, 0);
}

function getCartSubtotal() {
    return cart.reduce((sum, item) => {
        const product = products.find(p => p.id === item.productId);
        return sum + (product ? product.price * item.qty : 0);
    }, 0);
}

function updateCartBadge() {
    const count = getCartTotalItems();
    const badge = document.getElementById('cart-count');
    if (count > 0) {
        badge.textContent = count;
        badge.classList.remove('hidden');
    } else {
        badge.classList.add('hidden');
    }
}

function renderCart() {
    const emptyEl = document.getElementById('cart-empty');
    const contentEl = document.getElementById('cart-content');
    const itemsEl = document.getElementById('cart-items');

    if (cart.length === 0) {
        emptyEl.classList.remove('hidden');
        contentEl.classList.add('hidden');
        return;
    }

    emptyEl.classList.add('hidden');
    contentEl.classList.remove('hidden');

    itemsEl.innerHTML = cart.map(item => {
        const p = products.find(prod => prod.id === item.productId);
        if (!p) return '';
        const variantText = [item.size, item.color].filter(Boolean).join(' / ');
        return `
            <div class="cart-item">
                <div class="cart-item-image">${p.emoji}</div>
                <div class="cart-item-details">
                    <div class="cart-item-name" onclick="navigate('pdp', ${p.id})">${sanitize(p.name)}</div>
                    ${variantText ? `<div class="cart-item-variant">${sanitize(variantText)}</div>` : ''}
                    <div class="cart-item-price">$${(p.price * item.qty).toFixed(2)}</div>
                    <div class="cart-item-actions">
                        <div class="qty-control">
                            <button onclick="updateCartItemQty('${item.key}', -1)">-</button>
                            <span>${item.qty}</span>
                            <button onclick="updateCartItemQty('${item.key}', 1)">+</button>
                        </div>
                        <button class="cart-item-remove" onclick="removeFromCart('${item.key}')">Remove</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    updateCartTotals();
}

function updateCartTotals() {
    const subtotal = getCartSubtotal();
    const shippingMethod = document.querySelector('input[name="ship-method"]:checked');
    let shipping = 0;
    if (shippingMethod) {
        if (shippingMethod.value === 'express') shipping = 9.99;
        else if (shippingMethod.value === 'overnight') shipping = 19.99;
    }
    if (subtotal >= 35) shipping = 0; // Free shipping over $35

    let discount = 0;
    if (promoApplied) {
        const promo = promoCodes[promoApplied];
        if (promo.type === 'percent') discount = subtotal * (promo.value / 100);
        else if (promo.type === 'fixed') discount = promo.value;
        else if (promo.type === 'shipping') shipping = 0;
    }

    const tax = (subtotal - discount) * 0.0875;
    const total = subtotal - discount + shipping + tax;

    document.getElementById('cart-subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('cart-shipping').textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
    document.getElementById('cart-tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('cart-total').textContent = `$${total.toFixed(2)}`;

    const discountRow = document.getElementById('cart-discount-row');
    if (discount > 0) {
        discountRow.classList.remove('hidden');
        document.getElementById('cart-discount').textContent = `-$${discount.toFixed(2)}`;
    } else {
        discountRow.classList.add('hidden');
    }
}

function applyPromo() {
    const code = document.getElementById('promo-code').value.trim().toUpperCase();
    if (!code) return;

    if (promoCodes[code]) {
        const promo = promoCodes[code];
        if (promo.minOrder && getCartSubtotal() < promo.minOrder) {
            showToast('warning', 'Minimum Not Met', `This promo requires a minimum order of $${promo.minOrder}.`);
            return;
        }
        promoApplied = code;
        showToast('success', 'Promo Applied!', promo.label);
        sendNotification('promo', 'Promo Code Applied', `${promo.label} - saving you money on this order!`, ['app']);
        updateCartTotals();
    } else {
        showToast('error', 'Invalid Code', 'This promo code is not valid.');
    }
}

// ===================== CHECKOUT =====================
function goToCheckoutStep(step) {
    const steps = ['shipping', 'payment', 'review'];
    const currentIdx = steps.indexOf(step);

    // Update tabs
    steps.forEach((s, i) => {
        const tab = document.getElementById(`step-${s}-tab`);
        tab.classList.remove('active', 'done');
        if (i < currentIdx) tab.classList.add('done');
        if (i === currentIdx) tab.classList.add('active');
    });

    // Show correct step
    document.querySelectorAll('.checkout-step').forEach(el => el.classList.remove('active'));
    document.getElementById(`checkout-step-${step}`).classList.add('active');

    if (step === 'review') populateReview();
    updateCheckoutSummary();
}

function updateCheckoutSummary() {
    const itemsContainer = document.getElementById('checkout-summary-items');
    itemsContainer.innerHTML = cart.map(item => {
        const p = products.find(prod => prod.id === item.productId);
        if (!p) return '';
        return `<div class="co-summary-item"><span class="co-item-emoji">${p.emoji}</span> <span>${sanitize(p.name)}</span> <span class="co-item-qty">x${item.qty}</span></div>`;
    }).join('');

    const subtotal = getCartSubtotal();
    const shippingMethod = document.querySelector('input[name="ship-method"]:checked');
    let shipping = 0;
    if (shippingMethod) {
        if (shippingMethod.value === 'express') shipping = 9.99;
        else if (shippingMethod.value === 'overnight') shipping = 19.99;
    }
    if (subtotal >= 35) shipping = 0;

    let discount = 0;
    if (promoApplied) {
        const promo = promoCodes[promoApplied];
        if (promo.type === 'percent') discount = subtotal * (promo.value / 100);
        else if (promo.type === 'fixed') discount = promo.value;
        else if (promo.type === 'shipping') shipping = 0;
    }

    const tax = (subtotal - discount) * 0.0875;
    const total = subtotal - discount + shipping + tax;

    document.getElementById('co-subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('co-shipping').textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
    document.getElementById('co-tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('co-total').textContent = `$${total.toFixed(2)}`;

    const discountRow = document.getElementById('co-discount-row');
    if (discount > 0) {
        discountRow.classList.remove('hidden');
        document.getElementById('co-discount').textContent = `-$${discount.toFixed(2)}`;
    } else {
        discountRow.classList.add('hidden');
    }
}

function selectPayMethod(method) {
    document.querySelectorAll('.pay-method-opt').forEach(el => el.classList.remove('active'));
    event.currentTarget.classList.add('active');

    document.getElementById('pay-card-fields').classList.toggle('hidden', method !== 'card');
    document.getElementById('pay-paypal-fields').classList.toggle('hidden', method !== 'paypal');
    document.getElementById('pay-apple-fields').classList.toggle('hidden', method !== 'apple');
}

function formatCardNumber(input) {
    let v = input.value.replace(/\D/g, '').substring(0, 16);
    v = v.replace(/(.{4})/g, '$1 ').trim();
    input.value = v;
}

function formatExpiry(input) {
    let v = input.value.replace(/\D/g, '').substring(0, 4);
    if (v.length >= 2) v = v.substring(0, 2) + '/' + v.substring(2);
    input.value = v;
}

function populateReview() {
    // Shipping info
    const fname = document.getElementById('ship-fname').value;
    const lname = document.getElementById('ship-lname').value;
    const address = document.getElementById('ship-address').value;
    const apt = document.getElementById('ship-apt').value;
    const city = document.getElementById('ship-city').value;
    const state = document.getElementById('ship-state').value;
    const zip = document.getElementById('ship-zip').value;
    const email = document.getElementById('ship-email').value;
    const phone = document.getElementById('ship-phone').value;

    document.getElementById('review-shipping-info').innerHTML = `
        <strong>${sanitize(fname)} ${sanitize(lname)}</strong><br>
        ${sanitize(address)}${apt ? ', ' + sanitize(apt) : ''}<br>
        ${sanitize(city)}, ${sanitize(state)} ${sanitize(zip)}<br>
        ${sanitize(email)} | ${sanitize(phone)}
    `;

    // Payment info
    const activeMethod = document.querySelector('.pay-method-opt.active');
    const methodText = activeMethod ? activeMethod.textContent.trim() : 'Credit Card';
    const cardNum = document.getElementById('pay-card').value;
    const last4 = cardNum.replace(/\s/g, '').slice(-4);

    document.getElementById('review-payment-info').innerHTML = `
        ${sanitize(methodText)}${last4 ? ` ending in ${sanitize(last4)}` : ''}
    `;

    // Items
    document.getElementById('review-item-count').textContent = getCartTotalItems();
    document.getElementById('review-items').innerHTML = cart.map(item => {
        const p = products.find(prod => prod.id === item.productId);
        if (!p) return '';
        const variantText = [item.size, item.color].filter(Boolean).join(' / ');
        return `
            <div class="review-item">
                <div class="review-item-img">${p.emoji}</div>
                <div class="review-item-info">
                    <div class="review-item-name">${sanitize(p.name)}</div>
                    <div class="review-item-meta">Qty: ${item.qty}${variantText ? ' | ' + sanitize(variantText) : ''}</div>
                </div>
                <div class="review-item-price">$${(p.price * item.qty).toFixed(2)}</div>
            </div>
        `;
    }).join('');
}

// ===================== PLACE ORDER =====================
function placeOrder() {
    // Show processing screen
    navigate('processing');

    const orderId = 'TGT-' + Date.now().toString(36).toUpperCase() + Math.random().toString(36).substring(2, 6).toUpperCase();

    // Simulate processing delay
    setTimeout(() => {
        const subtotal = getCartSubtotal();
        const shippingMethod = document.querySelector('input[name="ship-method"]:checked');
        let shippingCost = 0;
        let shippingName = 'Standard Shipping (5-7 days)';
        let deliveryDays = 7;

        if (shippingMethod) {
            if (shippingMethod.value === 'express') { shippingCost = 9.99; shippingName = 'Express (2-3 days)'; deliveryDays = 3; }
            else if (shippingMethod.value === 'overnight') { shippingCost = 19.99; shippingName = 'Overnight (Next day)'; deliveryDays = 1; }
        }
        if (subtotal >= 35) shippingCost = 0;

        let discount = 0;
        if (promoApplied) {
            const promo = promoCodes[promoApplied];
            if (promo.type === 'percent') discount = subtotal * (promo.value / 100);
            else if (promo.type === 'fixed') discount = promo.value;
            else if (promo.type === 'shipping') shippingCost = 0;
        }

        const tax = (subtotal - discount) * 0.0875;
        const total = subtotal - discount + shippingCost + tax;

        // Delivery date
        const deliveryDate = new Date();
        deliveryDate.setDate(deliveryDate.getDate() + deliveryDays);
        const deliveryStr = deliveryDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });

        // Render confirmation
        document.getElementById('confirm-order-id').textContent = orderId;

        const fname = document.getElementById('ship-fname').value;
        const lname = document.getElementById('ship-lname').value;
        const address = document.getElementById('ship-address').value;
        const city = document.getElementById('ship-city').value;
        const state = document.getElementById('ship-state').value;
        const zip = document.getElementById('ship-zip').value;

        document.getElementById('confirm-ship-info').innerHTML = `
            ${sanitize(fname)} ${sanitize(lname)}<br>${sanitize(address)}<br>${sanitize(city)}, ${sanitize(state)} ${sanitize(zip)}
        `;
        document.getElementById('confirm-delivery').innerHTML = `${deliveryStr}<br><small>${shippingName}</small>`;

        const activeMethod = document.querySelector('.pay-method-opt.active');
        const methodText = activeMethod ? activeMethod.textContent.trim() : 'Credit Card';
        const cardNum = document.getElementById('pay-card').value;
        const last4 = cardNum.replace(/\s/g, '').slice(-4);
        document.getElementById('confirm-pay-info').innerHTML = `${sanitize(methodText)}${last4 ? ` ending in ${sanitize(last4)}` : ''}`;

        // Items
        document.getElementById('confirm-items-list').innerHTML = cart.map(item => {
            const p = products.find(prod => prod.id === item.productId);
            if (!p) return '';
            return `
                <div class="review-item">
                    <div class="review-item-img">${p.emoji}</div>
                    <div class="review-item-info">
                        <div class="review-item-name">${sanitize(p.name)}</div>
                        <div class="review-item-meta">Qty: ${item.qty}</div>
                    </div>
                    <div class="review-item-price">$${(p.price * item.qty).toFixed(2)}</div>
                </div>
            `;
        }).join('');

        document.getElementById('confirm-total').textContent = `$${total.toFixed(2)}`;

        // Send notifications to all channels
        const channels = getActiveChannels();
        const channelHTML = channels.map(ch => {
            const icons = { app: 'fas fa-bell', email: 'fas fa-envelope', sms: 'fas fa-sms', push: 'fas fa-mobile-alt' };
            const labels = { app: 'In-App', email: 'Email', sms: 'SMS', push: 'Push' };
            return `<span class="notif-ch-badge"><i class="${icons[ch]}"></i> ${labels[ch]}</span>`;
        }).join('');
        document.getElementById('confirm-notif-channels').innerHTML = `<div class="notif-channel-badges">${channelHTML}</div>`;

        // Send order confirmation notifications
        sendNotification('order', 'Order Confirmed!', `Order ${orderId} for $${total.toFixed(2)} has been placed. Estimated delivery: ${deliveryStr}.`, channels);

        // Send shipping notification after a bit
        setTimeout(() => {
            sendNotification('order', 'Order Shipped!', `Great news! Order ${orderId} has shipped and is on its way.`, channels);
        }, 8000);

        // Clear cart
        cart = [];
        promoApplied = null;
        updateCartBadge();

        navigate('confirmation');
    }, 2500);
}

// ===================== NOTIFICATIONS =====================
function getActiveChannels() {
    const channels = [];
    if (document.getElementById('ch-app').checked) channels.push('app');
    if (document.getElementById('ch-email').checked) channels.push('email');
    if (document.getElementById('ch-sms').checked) channels.push('sms');
    if (document.getElementById('ch-push').checked) channels.push('push');
    return channels.length > 0 ? channels : ['app'];
}

function sendNotification(type, title, message, channels) {
    if (!channels) channels = getActiveChannels();
    const now = new Date();
    const notif = {
        id: Date.now(),
        type,
        title,
        message,
        channels,
        time: now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
        timestamp: now
    };

    notifications.unshift(notif);
    updateNotificationBadge();
    renderNotificationPanel();

    // Show toast for in-app
    if (channels.includes('app')) {
        const toastType = type === 'order' ? 'success' : type === 'promo' ? 'promo' : type === 'cart' ? 'info' : 'info';
        showToast(toastType, title, message);
    }

    // Simulate sending to other channels
    channels.forEach(ch => {
        if (ch === 'email') console.log(`📧 EMAIL sent: ${title} - ${message}`);
        if (ch === 'sms') console.log(`📱 SMS sent: ${title} - ${message}`);
        if (ch === 'push') console.log(`🔔 PUSH sent: ${title} - ${message}`);
    });
}

function updateNotificationBadge() {
    const badge = document.getElementById('notif-badge');
    const count = notifications.length;
    if (count > 0) {
        badge.textContent = count > 99 ? '99+' : count;
        badge.classList.remove('hidden');
    } else {
        badge.classList.add('hidden');
    }
}

function renderNotificationPanel() {
    const body = document.getElementById('notif-panel-body');
    if (notifications.length === 0) {
        body.innerHTML = '<p class="notif-empty">No notifications yet</p>';
        return;
    }

    body.innerHTML = notifications.map(n => {
        const iconClass = n.type === 'order' ? 'order' : n.type === 'promo' ? 'promo' : n.type === 'cart' ? 'cart' : 'info';
        const iconFA = n.type === 'order' ? 'fa-box' : n.type === 'promo' ? 'fa-tag' : n.type === 'cart' ? 'fa-cart-plus' : 'fa-info';
        const channelTags = n.channels.map(ch => `<span class="notif-ch-tag">${ch.toUpperCase()}</span>`).join('');
        return `
            <div class="notif-item">
                <div class="notif-item-icon ${iconClass}"><i class="fas ${iconFA}"></i></div>
                <div class="notif-item-body">
                    <div class="notif-item-title">${sanitize(n.title)}</div>
                    <div class="notif-item-msg">${sanitize(n.message)}</div>
                    <div class="notif-item-time">${n.time}</div>
                    <div class="notif-item-channels">${channelTags}</div>
                </div>
            </div>
        `;
    }).join('');
}

function openNotificationPanel() {
    document.getElementById('notification-panel').classList.add('open');
    document.getElementById('notif-overlay').classList.add('open');
}

function closeNotificationPanel() {
    document.getElementById('notification-panel').classList.remove('open');
    document.getElementById('notif-overlay').classList.remove('open');
}

function clearAllNotifications() {
    notifications = [];
    updateNotificationBadge();
    renderNotificationPanel();
}

// ===================== TOAST =====================
function showToast(type, title, message) {
    const container = document.getElementById('notification-container');
    const icons = { success: 'fa-check-circle', error: 'fa-exclamation-circle', warning: 'fa-exclamation-triangle', info: 'fa-info-circle', promo: 'fa-tag' };

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <i class="fas ${icons[type] || 'fa-bell'}"></i>
        <div class="toast-body">
            <div class="toast-title">${sanitize(title)}</div>
            <div class="toast-msg">${sanitize(message)}</div>
        </div>
        <button class="toast-close" onclick="this.parentElement.remove()">&times;</button>
    `;

    container.appendChild(toast);
    setTimeout(() => { if (toast.parentElement) toast.remove(); }, 5000);
}

// ===================== SEARCH =====================
function handleSearch(event) {
    if (event.key === 'Enter') performSearch();
}

function performSearch() {
    const query = document.getElementById('search-input').value.trim().toLowerCase();
    if (!query) return;

    // Simple search - filter products by name/category/description
    currentCategory = 'all';
    navigate('plp', 'all');

    const filtered = products.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
    );

    document.getElementById('plp-title').textContent = `Search: "${sanitize(query)}"`;
    document.getElementById('plp-count').textContent = `(${filtered.length} results)`;
    document.getElementById('plp-products').innerHTML = filtered.map(createProductCard).join('');
    document.getElementById('plp-no-results').classList.toggle('hidden', filtered.length > 0);
}

// ===================== WISHLIST =====================
function addToWishlist() {
    if (!currentProduct) return;
    showToast('info', 'Saved!', `${currentProduct.name} has been saved to your favorites.`);
    sendNotification('info', 'Item Saved', `${currentProduct.name} was added to your wishlist.`, ['app']);
}

// ===================== NEWSLETTER =====================
function subscribeNewsletter() {
    const email = document.getElementById('newsletter-email').value.trim();
    if (!email || !email.includes('@')) {
        showToast('warning', 'Invalid Email', 'Please enter a valid email address.');
        return;
    }
    showToast('success', 'Subscribed!', "You'll receive our latest deals and offers.");
    sendNotification('promo', 'Welcome to Target Emails!', `${sanitize(email)} is now subscribed. Check your inbox for a welcome offer!`, getActiveChannels());
    document.getElementById('newsletter-email').value = '';
}

// ===================== UTILITY =====================
function sanitize(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}

// ===================== INITIALIZATION =====================
document.addEventListener('DOMContentLoaded', () => {
    navigate('home');
    startSlider();

    // Welcome notification after a delay
    setTimeout(() => {
        sendNotification('promo', '🎯 Welcome to Target!', 'Use code TARGET10 for 10% off your first order!', ['app']);
    }, 2000);
});
