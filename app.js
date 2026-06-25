const STORAGE_KEY = "click2have-state-v1";

const products = [
  {
    id: "p1",
    category: "tech",
    title: "Aurora Noise-Canceling Earbuds",
    price: 149,
    rating: 4.8,
    reviews: 2184,
    image:
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=1200&q=80",
    desc: "Compact wireless earbuds with deep bass, ambient mode, and a smooth simulated finish.",
    bullets: ["Adaptive noise canceling", "All-day battery", "Magnetic charging case"],
    variants: { Color: ["Black", "Silver", "Mint"] },
    timeline: "2-4 days",
  },
  {
    id: "p2",
    category: "home",
    title: "Halo Smart Desk Lamp",
    price: 62,
    rating: 4.7,
    reviews: 973,
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    desc: "A clean desk lamp with warm-to-cool tones, soft touch controls, and simulated productivity energy.",
    bullets: ["Touch dimming", "Night mode", "USB-C powered"],
    variants: { Finish: ["White", "Graphite"], Height: ["Standard", "Tall"] },
    timeline: "1-3 days",
  },
  {
    id: "p3",
    category: "fashion",
    title: "Metro Shell Jacket",
    price: 118,
    rating: 4.6,
    reviews: 406,
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1200&q=80",
    desc: "Lightweight weather shell with a crisp city silhouette and premium simulated stitching.",
    bullets: ["Water resistant", "Hidden pockets", "Unisex fit"],
    variants: { Size: ["S", "M", "L", "XL"], Color: ["Storm", "Sand", "Onyx"] },
    timeline: "3-5 days",
  },
  {
    id: "p4",
    category: "luxury",
    title: "Midnight Executive Chronograph",
    price: 980,
    rating: 4.9,
    reviews: 88,
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1200&q=80",
    desc: "A polished statement watch with a sleek dial, precision styling, and simulated prestige.",
    bullets: ["Sapphire-style finish", "Chronograph look", "Gift-ready box"],
    variants: { Strap: ["Steel", "Leather"] },
    timeline: "2-6 days",
  },
  {
    id: "p5",
    category: "food",
    title: "Skyline Truffle Burger Set",
    price: 24,
    rating: 4.5,
    reviews: 1226,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80",
    desc: "A simulated gourmet burger combo with fries and a drink, built for late-night cravings.",
    bullets: ["Extra sauce", "Crispy fries", "Large drink"],
    variants: { Spice: ["Mild", "Medium", "Hot"] },
    timeline: "20-35 min",
  },
  {
    id: "p6",
    category: "tech",
    title: "Vector Pro Tablet Stand",
    price: 39,
    rating: 4.7,
    reviews: 512,
    image:
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=1200&q=80",
    desc: "An aluminum stand for tablets and laptops with a modern angle and quiet tabletop presence.",
    bullets: ["Foldable", "Stable grip", "Airflow cutout"],
    variants: { Color: ["Silver", "Black"] },
    timeline: "2-4 days",
  },
  {
    id: "p7",
    category: "home",
    title: "Cloud Comfort Throw",
    price: 48,
    rating: 4.8,
    reviews: 731,
    image:
      "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=1200&q=80",
    desc: "A soft woven blanket designed for couch sessions, movie nights, and simulated emotional recovery.",
    bullets: ["Ultra-soft texture", "Machine washable", "Two-tone weave"],
    variants: { Size: ["Throw", "Large"], Color: ["Cream", "Blue", "Charcoal"] },
    timeline: "2-4 days",
  },
  {
    id: "p8",
    category: "fashion",
    title: "Studio Knit Sneakers",
    price: 132,
    rating: 4.6,
    reviews: 644,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
    desc: "Casual sneakers with a sleek silhouette and a breathable upper for everyday simulated movement.",
    bullets: ["Breathable knit", "Foam sole", "Neutral profile"],
    variants: { Size: ["40", "41", "42", "43", "44"], Color: ["White", "Grey", "Black"] },
    timeline: "3-5 days",
  },
];

const stateDefaults = {
  query: "",
  category: "all",
  selectedProductId: products[0].id,
  selectedVariants: {},
  cart: [],
  walletBalance: 9999999,
  ledger: [
    { title: "Initial ClickCash grant", amount: 9999999, type: "credit", detail: "Welcome balance" },
  ],
  orders: [],
  trackingOrderId: null,
};

let state = loadState();

const els = {
  homeView: document.getElementById("homeView"),
  productView: document.getElementById("productView"),
  cartView: document.getElementById("cartView"),
  checkoutView: document.getElementById("checkoutView"),
  successView: document.getElementById("successView"),
  trackingView: document.getElementById("trackingView"),
  walletView: document.getElementById("walletView"),
  productGrid: document.getElementById("productGrid"),
  productDetail: document.getElementById("productDetail"),
  cartContent: document.getElementById("cartContent"),
  checkoutSummary: document.getElementById("checkoutSummary"),
  trackingContent: document.getElementById("trackingContent"),
  ledgerList: document.getElementById("ledgerList"),
  cartBadge: document.getElementById("cartBadge"),
  searchInput: document.getElementById("searchInput"),
  categoryFilter: document.getElementById("categoryFilter"),
  heroBalance: document.getElementById("heroBalance"),
  walletBalance: document.getElementById("walletBalance"),
  toast: document.getElementById("toast"),
  simulationAck: document.getElementById("simulationAck"),
  placeOrderButton: document.getElementById("placeOrderButton"),
  deliverySpeed: document.getElementById("deliverySpeed"),
  addressInput: document.getElementById("addressInput"),
};

document.addEventListener("click", handleDocumentClick);
document.getElementById("searchInput").addEventListener("input", (e) => {
  state.query = e.target.value;
  saveAndRender();
});
document.getElementById("categoryFilter").addEventListener("change", (e) => {
  state.category = e.target.value;
  saveAndRender();
});
document.getElementById("placeOrderButton").addEventListener("click", placeOrder);
document.getElementById("deliverySpeed").addEventListener("change", renderCheckoutSummary);
document.getElementById("addressInput").addEventListener("input", saveState);

renderAll();
setInterval(progressTracking, 15000);

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(stateDefaults);
    const parsed = JSON.parse(raw);
    return { ...structuredClone(stateDefaults), ...parsed };
  } catch {
    return structuredClone(stateDefaults);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function saveAndRender() {
  saveState();
  renderAll();
}

function renderAll() {
  els.searchInput.value = state.query;
  els.categoryFilter.value = state.category;
  els.heroBalance.textContent = formatMoney(state.walletBalance);
  els.walletBalance.textContent = formatMoney(state.walletBalance);
  els.cartBadge.textContent = state.cart.reduce((sum, item) => sum + item.qty, 0);
  renderProductGrid();
  renderProductDetail();
  renderCart();
  renderCheckoutSummary();
  renderTracking();
  renderLedger();
  syncNavState();
}

function filteredProducts() {
  return products.filter((product) => {
    const queryHit =
      !state.query ||
      product.title.toLowerCase().includes(state.query.toLowerCase()) ||
      product.desc.toLowerCase().includes(state.query.toLowerCase());
    const categoryHit = state.category === "all" || product.category === state.category;
    return queryHit && categoryHit;
  });
}

function renderProductGrid() {
  const list = filteredProducts();
  if (!list.length) {
    els.productGrid.innerHTML = `<div class="empty">No simulated products found.</div>`;
    return;
  }
  els.productGrid.innerHTML = list
    .map(
      (product) => `
        <article class="product-card">
          <button class="image-button" data-action="open-product" data-id="${product.id}">
            <div class="image-frame">
              <img src="${product.image}" alt="${escapeHtml(product.title)}" loading="lazy" />
              <span class="watermark">Simulated Product - For Fun Only</span>
            </div>
          </button>
          <div class="product-body">
            <p class="product-title">${escapeHtml(product.title)}</p>
            <div class="rating">★ ${product.rating} · ${product.reviews} reviews</div>
            <div class="price-row">
              <div class="price">$${product.price}<small>Simulated price</small></div>
              <button class="mini-button" data-action="quick-add" data-id="${product.id}">+</button>
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderProductDetail() {
  const product = getSelectedProduct();
  const selectedVariants = state.selectedVariants[product.id] || {};
  const variantFields = Object.entries(product.variants)
    .map(
      ([name, values]) => `
        <div>
          <div class="eyebrow" style="margin-top:12px">${escapeHtml(name)}</div>
          <div class="option-grid">
            ${values
              .map(
                (value) => `<button class="option ${selectedVariants[name] === value ? "selected" : ""}" data-action="pick-variant" data-product="${product.id}" data-name="${escapeHtml(name)}" data-value="${escapeHtml(value)}">${escapeHtml(value)}</button>`,
              )
              .join("")}
          </div>
        </div>
      `,
    )
    .join("");

  els.productDetail.innerHTML = `
    <div class="detail-media">
      <div class="image-frame">
        <img src="${product.image}" alt="${escapeHtml(product.title)}" />
        <span class="watermark">Simulated Product - For Fun Only</span>
      </div>
    </div>
    <div class="detail-info">
      <p class="eyebrow">${product.category}</p>
      <h2>${escapeHtml(product.title)}</h2>
      <div class="rating">★ ${product.rating} · ${product.reviews} reviews</div>
      <div class="detail-price">
        <span>Simulated price</span>
        <strong>$${product.price}</strong>
        <small>Entertainment only. No real transaction occurs.</small>
      </div>
      <p>${escapeHtml(product.desc)}</p>
      <ul class="bullets">
        ${product.bullets.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
      ${variantFields}
      <button class="primary-button full" data-action="add-to-cart" data-id="${product.id}">Click to Have</button>
      <div style="margin-top:14px;color:var(--muted);line-height:1.5">
        This is a simulated product for entertainment only.
      </div>
    </div>
  `;
}

function renderCart() {
  if (!state.cart.length) {
    els.cartContent.innerHTML = `
      <div class="empty">
        Your cart is empty. Browse the feed and click to have something.
      </div>
    `;
    return;
  }

  const itemsHtml = state.cart
    .map((item) => {
      const product = products.find((p) => p.id === item.productId);
      return `
        <article class="cart-item">
          <img src="${product.image}" alt="${escapeHtml(product.title)}" />
          <div>
            <h3>${escapeHtml(product.title)}</h3>
            <p>${formatVariantText(item.variantSelection)}</p>
            <div class="qty">
              <button data-action="decrease-qty" data-id="${item.id}">−</button>
              <strong>${item.qty}</strong>
              <button data-action="increase-qty" data-id="${item.id}">+</button>
              <button class="text-button" data-action="remove-cart-item" data-id="${item.id}" style="margin-left:10px">Remove</button>
            </div>
          </div>
          <div class="cart-line-price">
            <strong>$${product.price * item.qty}</strong>
            <p>Simulated subtotal</p>
          </div>
        </article>
      `;
    })
    .join("");

  const summary = getCartSummary();
  els.cartContent.innerHTML = `
    <div class="cart-list">${itemsHtml}</div>
    <div class="cart-total">
      <div class="total-row"><span>Subtotal</span><strong>$${summary.subtotal}</strong></div>
      <div class="total-row"><span>Simulated shipping</span><strong>$${summary.shipping}</strong></div>
      <div class="total-row"><span>Tax</span><strong>$${summary.tax}</strong></div>
      <div class="total-row"><span>Total</span><strong>$${summary.total}</strong></div>
      <button class="primary-button full" data-action="go-checkout">Proceed to Checkout</button>
    </div>
  `;
}

function renderCheckoutSummary() {
  const summary = getCartSummary();
  const expressFee = els.deliverySpeed.value === "express" ? 120 : 0;
  const total = summary.total + expressFee;
  els.checkoutSummary.innerHTML = `
    <div class="summary-line"><span>Subtotal</span><strong>$${summary.subtotal}</strong></div>
    <div class="summary-line"><span>Shipping</span><strong>$${summary.shipping}</strong></div>
    <div class="summary-line"><span>Tax</span><strong>$${summary.tax}</strong></div>
    <div class="summary-line"><span>Express fee</span><strong>$${expressFee}</strong></div>
    <div class="summary-line"><span>Total</span><strong>$${total}</strong></div>
    <div style="margin-top:10px;color:var(--muted)">Amount charged: $0.00</div>
  `;
}

function renderTracking() {
  const order = getLatestOrder();
  if (!order) {
    els.trackingContent.innerHTML = `
      <div class="empty">
        No simulated order yet. Place one to see the tracking timeline.
      </div>
    `;
    return;
  }

  const steps = order.timeline.map((step) => `
    <article class="timeline-item ${step.done ? "done" : ""}">
      <div class="timeline-dot"></div>
      <div>
        <h3>${escapeHtml(step.title)}</h3>
        <p>${escapeHtml(step.copy)}</p>
      </div>
    </article>
  `);
  els.trackingContent.innerHTML = steps.join("");
}

function renderLedger() {
  els.ledgerList.innerHTML = state.ledger
    .slice()
    .reverse()
    .map(
      (entry) => `
        <article class="ledger-item">
          <div>
            <strong>${escapeHtml(entry.title)}</strong>
            <p>${escapeHtml(entry.detail)}</p>
          </div>
          <strong class="${entry.type === "credit" ? "positive" : "negative"}">
            ${entry.type === "credit" ? "+" : "-"}${formatMoney(entry.amount)}
          </strong>
        </article>
      `,
    )
    .join("");
}

function handleDocumentClick(event) {
  const actionEl = event.target.closest("[data-action]");
  if (!actionEl) return;
  const action = actionEl.dataset.action;

  if (action === "go-home") {
    showView("home");
    return;
  }
  if (action === "open-cart") {
    showView("cart");
    return;
  }
  if (action === "open-wallet") {
    showView("wallet");
    return;
  }
  if (action === "open-tracking") {
    showView("tracking");
    return;
  }
  if (action === "scroll-products") {
    document.getElementById("productGrid").scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  if (action === "open-product") {
    state.selectedProductId = actionEl.dataset.id;
    showView("product");
    saveAndRender();
    return;
  }
  if (action === "quick-add" || action === "add-to-cart") {
    const productId = actionEl.dataset.id;
    addToCart(productId);
    return;
  }
  if (action === "pick-variant") {
    const productId = actionEl.dataset.product;
    const name = actionEl.dataset.name;
    const value = actionEl.dataset.value;
    if (!state.selectedVariants[productId]) state.selectedVariants[productId] = {};
    state.selectedVariants[productId][name] = value;
    saveAndRender();
    showToast(`${name}: ${value}`);
    return;
  }
  if (action === "increase-qty") {
    updateCartItem(actionEl.dataset.id, 1);
    return;
  }
  if (action === "decrease-qty") {
    updateCartItem(actionEl.dataset.id, -1);
    return;
  }
  if (action === "remove-cart-item") {
    state.cart = state.cart.filter((item) => item.id !== actionEl.dataset.id);
    saveAndRender();
    showToast("Removed from cart");
    return;
  }
  if (action === "go-checkout") {
    if (!state.cart.length) return showToast("Cart is empty");
    showView("checkout");
    return;
  }
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  const variantSelection = state.selectedVariants[productId] || defaultVariantSelection(product);
  const existing = state.cart.find((item) => item.productId === productId && sameVariants(item.variantSelection, variantSelection));
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({
      id: createId(),
      productId,
      qty: 1,
      variantSelection,
    });
  }
  saveAndRender();
  showToast("Added to cart");
}

function updateCartItem(id, delta) {
  const item = state.cart.find((entry) => entry.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    state.cart = state.cart.filter((entry) => entry.id !== id);
  }
  saveAndRender();
}

function placeOrder() {
  if (!state.cart.length) return showToast("Cart is empty");
  if (!els.simulationAck.checked) return showToast("Please confirm the simulation acknowledgement");

  const summary = getCartSummary();
  const delivery = els.deliverySpeed.value;
  const expressFee = delivery === "express" ? 120 : 0;
  const clickCashSpent = summary.total + expressFee;
  const deliveryMinutes = delivery === "express" ? "20-40 min" : "2-4 days";
  const order = {
    id: createId(),
    orderNumber: `C2H-${Math.floor(100000 + Math.random() * 900000)}`,
    address: els.addressInput.value,
    delivery,
    deliveryMinutes,
    statusIndex: 0,
    timeline: buildTimeline(0),
    createdAt: Date.now(),
    summary,
    clickCashSpent,
  };

  state.orders.push(order);
  state.trackingOrderId = order.id;
  state.walletBalance -= clickCashSpent;
  addLedgerEntry(`Order ${order.orderNumber}`, clickCashSpent, "debit", "Simulated purchase - amount charged $0.00");
  state.cart = [];
  saveState();
  renderAll();
  showView("success");
  showToast("Order placed");
  pulseConfetti();
}

function createId() {
  if (window.crypto && typeof window.crypto.randomUUID === "function") {
    return window.crypto.randomUUID();
  }
  return `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function buildTimeline(doneCount) {
  const steps = [
    ["Order placed", "Your simulated order has entered the network."],
    ["Parcel picked up by carrier", "A fictional carrier collected the package."],
    ["Departed from fulfillment center (SimCity)", "It left the virtual warehouse."],
    ["Out for delivery - driver: Alex (simulated)", "The simulated driver is on the way."],
    ["Delivered", "Left at your virtual mailbox."],
  ];
  return steps.map(([title, copy], index) => ({ title, copy, done: index <= doneCount }));
}

function progressTracking() {
  const order = getLatestOrder();
  if (!order) return;
  if (order.statusIndex >= 4) return;
  order.statusIndex += 1;
  order.timeline = buildTimeline(order.statusIndex);
  order.updatedAt = Date.now();
  state.trackingOrderId = order.id;
  saveState();
  renderTracking();
}

function getLatestOrder() {
  if (!state.orders.length) return null;
  const id = state.trackingOrderId || state.orders[state.orders.length - 1].id;
  return state.orders.find((order) => order.id === id) || state.orders[state.orders.length - 1];
}

function getSelectedProduct() {
  return products.find((product) => product.id === state.selectedProductId) || products[0];
}

function getCartSummary() {
  const subtotal = state.cart.reduce((sum, item) => {
    const product = products.find((p) => p.id === item.productId);
    return sum + product.price * item.qty;
  }, 0);
  const shipping = subtotal >= 25 ? 0 : 4;
  const tax = Math.round(subtotal * 0.08);
  return {
    subtotal,
    shipping,
    tax,
    total: subtotal + shipping + tax,
  };
}

function addLedgerEntry(title, amount, type, detail) {
  state.ledger.push({ title, amount, type, detail });
}

function defaultVariantSelection(product) {
  const selection = {};
  Object.entries(product.variants).forEach(([key, values]) => {
    selection[key] = values[0];
  });
  return selection;
}

function sameVariants(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

function formatVariantText(selection) {
  return Object.entries(selection)
    .map(([key, value]) => `${key}: ${value}`)
    .join(" · ");
}

function formatMoney(value) {
  return Number(value).toLocaleString("en-US");
}

function showView(view) {
  const map = {
    home: els.homeView,
    product: els.productView,
    cart: els.cartView,
    checkout: els.checkoutView,
    success: els.successView,
    tracking: els.trackingView,
    wallet: els.walletView,
  };
  Object.values(map).forEach((node) => node.classList.remove("active-view"));
  map[view].classList.add("active-view");
  window.scrollTo({ top: 0, behavior: "smooth" });
  syncNavState(view);
  if (view === "checkout") renderCheckoutSummary();
  if (view === "wallet") renderLedger();
  if (view === "tracking") renderTracking();
}

function syncNavState(view = getCurrentView()) {
  document.querySelectorAll(".nav-item").forEach((btn) => btn.classList.remove("active"));
  const active =
    view === "cart"
      ? 1
      : view === "wallet"
        ? 2
        : view === "tracking"
          ? 3
          : 0;
  document.querySelectorAll(".nav-item")[active].classList.add("active");
}

function getCurrentView() {
  if (els.cartView.classList.contains("active-view")) return "cart";
  if (els.checkoutView.classList.contains("active-view")) return "checkout";
  if (els.successView.classList.contains("active-view")) return "success";
  if (els.trackingView.classList.contains("active-view")) return "tracking";
  if (els.walletView.classList.contains("active-view")) return "wallet";
  if (els.productView.classList.contains("active-view")) return "product";
  return "home";
}

function showToast(text) {
  els.toast.textContent = text;
  els.toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => els.toast.classList.remove("show"), 2200);
}

function pulseConfetti() {
  const node = document.querySelector(".confetti");
  if (!node) return;
  node.animate(
    [{ transform: "translateY(0)" }, { transform: "translateY(-8px)" }, { transform: "translateY(0)" }],
    { duration: 700, iterations: 2 },
  );
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
