(() => {


  const API_URL = "https://gist.githubusercontent.com/sevindi/8bcbde9f02c1d4abe112809c974e1f49/raw/9bf93b58df623a9b16f1db721cd0a7a539296cf0/products.json";
  const STORAGE_KEY = "carouselProducts";
  const FAV_KEY = "favProducts";
  
  const isHomePage = () => location.pathname === "/" || location.pathname.includes("index.html");
  
  const getStoredProducts = () => JSON.parse(localStorage.getItem(STORAGE_KEY)) || null;
  const saveFavorites = (arr) => localStorage.setItem(FAV_KEY, JSON.stringify(arr));
  const getFavorites = () => JSON.parse(localStorage.getItem(FAV_KEY)) || [];
  
  const injectStyles = () => {

    const style = document.createElement("style");
    style.textContent = `
        #custom-carousel {
          max-width: 1320px;
          margin: 30px auto;
          font-family: 'Poppins', sans-serif;
        }
        #custom-carousel h2 {
          font-size: 3rem;
          color: #f28e00;
          margin-bottom: 20px;
          background: #fff3e0;
          padding: 10px 20px;
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
          font-family: 'Quicksand-Bold', sans-serif;
        }
        .carousel-container-relative {
          position: relative;
          background: #fff;
          padding: 20px;
          border-bottom-left-radius: 30px;
          border-bottom-right-radius: 30px;
        }
        .carousel-wrapper {
          display: flex;
          gap: 20px;
          overflow-x: auto;
          scroll-behavior: smooth;
          padding: 10px 0;
        }
        .carousel-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          border: none;
          border-radius: 50%;
          background-color: #fff;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          cursor: pointer;
          z-index: 99;
        }
        .carousel-nav.prev {
          left: -20px;
        }
        .carousel-nav.next {
          right: -20px;
        }
        .carousel-nav::after {
          content: '';
          display: inline-block;
          width: 12px;
          height: 12px;
          border-top: 2px solid #f28e00;
          border-right: 2px solid #f28e00;
          transform: rotate(45deg);
        }
        .carousel-nav.prev::after {
          transform: rotate(-135deg);
        }
        .product-card {
          flex: 0 0 auto;
          width: 335px;
          height: 558px;
          border: 1px solid #eee;
          border-radius: 10px;
          background: #fff;
          padding: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          text-decoration: none;
          color: inherit;
        }
        .product-card img {
          width: 100%;
          height: 180px;
          object-fit: contain;
        }
        .product-name {
          font-size: 16px;
          font-weight: bold;
          margin: 10px 0;
          height: 48px;
          overflow: hidden;
          color: #1976d2;
          line-height: 1.2;
        }
        .price-section {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: bold;
          margin: 10px 0;
          flex-wrap: wrap;
        }
        .product-price {
          color: green;
          font-size: 1.5rem;
          width: 100%;
          text-align: center;
        }
        .product-original {
          text-decoration: line-through;
          color: gray;
          font-size: 14px;
          margin-left: 10px;
        }
        .discount-badge {
          color: red;
          font-size: 14px;
          margin-left: 10px;
        }
        .heart {
          position: absolute;
          top: 10px;
          right: 10px;
          width: 30px;
          height: 30px;
          background: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ccc;
          font-size: 18px;
          cursor: pointer;
          z-index: 2;
        }
        .heart.filled {
          color: orange;
        }
        .add-to-cart-button {
          width: 289px;
          height: 48px;
          margin: 0 auto 10px auto;
          background: #ffb74d;
          color: white;
          border: none;
          font-size: 16px;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        .add-to-cart-button:hover {
          background: #f28e00;
        }
      `;
      document.head.appendChild(style);
    };
  
    const createCarousel = () => {
      const ref = document.querySelector("eb-hero-banner-carousel");
  
      const section = document.createElement("section");
      section.id = "custom-carousel";
  
      const title = document.createElement("h2");
      title.textContent = "Beğenebileceğinizi düşündüklerimiz";
  
      const wrapper = document.createElement("div");
      wrapper.className = "carousel-wrapper";
  
      const wrapperContainer = document.createElement("div");
      wrapperContainer.className = "carousel-container-relative";
  
      const prevBtn = document.createElement("button");
      prevBtn.className = "carousel-nav prev";
      prevBtn.setAttribute("aria-label", "previous");
  
      const nextBtn = document.createElement("button");
      nextBtn.className = "carousel-nav next";
      nextBtn.setAttribute("aria-label", "next");
  
      wrapperContainer.appendChild(prevBtn);
      wrapperContainer.appendChild(wrapper);
      wrapperContainer.appendChild(nextBtn);
  
      section.appendChild(title);
      section.appendChild(wrapperContainer);
  
      if (ref) {
        ref.insertAdjacentElement("afterend", section);
      } else {
        document.body.appendChild(section);
      }
  
      prevBtn.addEventListener("click", () => {
        wrapper.scrollBy({ left: -360, behavior: "smooth" });
      });
      nextBtn.addEventListener("click", () => {
        wrapper.scrollBy({ left: 360, behavior: "smooth" });
      });
    };
  
    const renderProducts = (products) => {
      const wrapper = document.querySelector(".carousel-wrapper");
      const favs = getFavorites();
  
      products.forEach(p => {
        const card = document.createElement("a");
        card.className = "product-card";
        card.href = p.url;
        card.target = "_blank";
  
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.textContent = "♥";
        if (favs.includes(p.id)) heart.classList.add("filled");
        heart.onclick = (e) => {
          e.preventDefault();
          e.stopPropagation();
          let favList = getFavorites();
          if (favList.includes(p.id)) {
            favList = favList.filter(id => id !== p.id);
            heart.classList.remove("filled");
          } else {
            favList.push(p.id);
            heart.classList.add("filled");
          }
          saveFavorites(favList);
        };
  
        const img = document.createElement("img");
        img.src = p.img;
        img.alt = p.name;
  
        const name = document.createElement("div");
        name.className = "product-name";
        name.textContent = `${p.brand} - ${p.name}`;
  
        const priceSection = document.createElement("div");
        priceSection.className = "price-section";
  
        const price = document.createElement("div");
        price.className = "product-price";
        price.textContent = `${p.price} TL`;
        priceSection.appendChild(price);
  
        if (p.original_price && p.original_price !== p.price) {
          const original = document.createElement("span");
          original.className = "product-original";
          original.textContent = `${p.original_price} TL`;
  
          const percent = Math.round((1 - p.price / p.original_price) * 100);
          const discount = document.createElement("span");
          discount.className = "discount-badge";
          discount.textContent = `-%${percent}`;
  
          priceSection.appendChild(original);
          priceSection.appendChild(discount);
        }
  
        const btn = document.createElement("button");
        btn.className = "add-to-cart-button";
        btn.textContent = "Sepete Ekle";
  
        card.appendChild(heart);
        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(priceSection);
        card.appendChild(btn);
  
        wrapper.appendChild(card);
      });
    };
  
    const fetchProducts = async () => {
      const res = await fetch(API_URL);
      const data = await res.json();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      return data;
    };
  
    const init = async () => {
      if (!isHomePage()) {
        console.log("wrong page");
        return;
      }
  
      injectStyles();
      createCarousel();
  
      let products = getStoredProducts();
      if (!products) {
        products = await fetchProducts();
      }
      renderProducts(products);
    };
  
    init();
  })();
  