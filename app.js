const shoes = [
  {
    name: "Air Force 1",
    brand: "Nike",
    img: "images/AirForce1.avif",
    price: 120,
    alt: "White Nike Air Force 1 sneaker",
  },
  {
    name: "Air Max 90",
    brand: "Nike",
    img: "images/AirMax90.avif",
    alt: "White and black Nike Air Max 90 sneaker",
    price: 150,
  },
  {
    name: "Air Zoom Pegasus 37",
    brand: "Nike",
    img: "images/AirZoomPegasus.avif",
    price: 90,
    alt: "White Nike Air Zoom Pegasus 37 sneaker",
  },
  {
    name: "Adidas Ultraboost 21",
    brand: "Adidas",
    img: "images/Ultraboost.avif",
    price: 210,
    alt: "Black Adidas Ultraboost 21 sneaker",
  },
  {
    name: "Adidas Stan Smith",
    brand: "Adidas",
    img: "images/StanSmith.jpg",
    price: 150,
    alt: "White Adidas Stan Smith sneaker",
  },
  {
    name: "Converse Chuck",
    brand: "Converse",
    img: "images/ConverseChuck.jpg",
    alt: "White Converse Chuck Taylor All Star sneaker",
    price: 85,
  },
  {
    name: "Taylor All Star",
    brand: "Converse",
    img: "images/TaylorAllStar.jpg",
    price: 95,
    alt: "White Converse Taylor All Star sneaker",
  },
  {
    name: "New Balance 574",
    brand: "New Balance",
    img: "images/NewBalance574.webp",
    price: 80,
    alt: "Grey New Balance 574 sneaker",
  },
  {
    name: "New Balance 990v5",
    brand: "New Balance",
    img: "images/NewBalance990.webp",
    price: 175,
    alt: "Grey New Balance 990v5 sneaker",
  },
  {
    name: "Vans Old Skool",
    brand: "Vans",
    img: "images/VansOldSkool.avif",
    price: 70,
    alt: "Black Vans Old Skool sneaker",
  },
  {
    name: "Puma Suede Classic",
    brand: "Puma",
    img: "images/PumaSuedeClassic.webp",
    price: 120,
    alt: "Black Puma Suede Classic sneaker",
  },
  {
    name: "Asics Gel-Kayano 27",
    brand: "Asics",
    img: "images/AsicsGelKayano.webp",
    price: 130,
    alt: "Black Asics Gel-Kayano 27 sneaker",
  },
  {
    name: "Adidas Samba OG",
    brand: "Adidas",
    img: "images/SambaOG.avif",
    price: 80,
    alt: "Black Adidas Samba OG sneaker",
  },
  {
    name: "Adidas Samba XLG 'Blue'",
    brand: "Adidas",
    img: "images/SambaXLGBlue.avif",
    price: 110,
    alt: "Blue Adidas XLG sneaker",
  },
  {
    name: "Classic Watercolored Marbled Clog",
    brand: "Crocs",
    img: "images/ClassicWatercoloredMarbledClog.webp",
    price: 100,
    alt: "Classic Watercolored Marbled Crocs",
  },
  {
    name: "Birkenstock Boston Soft Footbed Suede",
    brand: "Birkenstock",
    img: "images/BirkenstockBoston.jpg",
    price: 135,
    alt: "Birkenstock Boston Soft Footbed Suede Berks",
  },
  {
    name: "Men's Cloudtilt",
    brand: "On",
    img: "images/OnCloudtilt.jpg",
    price: 90,
  },
  {
    name: "Nike Dunk Low Retro  ",
    brand: "Nike",
    img: "images/Dunk.avif",
    price: 120,
  },
  {
    name: "Handball Spezial Bordeau",
    brand: "Adidas",
    img: "images/HandballSpezialBordeau.webp",
    price: 120,
    alt: "Adidas Handball Spezial sneaker",
  },
  {
    name: "Men's Win Flo 10",
    brand: "Nike",
    img: "images/WinFlo10.webp",
    price: 100,
    alt: "Nike Win Flo 10 sneaker",
  },
];
let total = 0;
//create inject function
function inject(item) {
  //query the html where we inject the card
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "afterbegin",
    `<div class="card">
      <h2 class="title">${item.name}</h2>
      <img src="${item.img}" alt="${item.alt}">
      <p class="price">${item.price}</p>
      <button class="button" id = "${item.name}" data-title="${item.name}" data-price="${item.price}">Buy Me</button>
    </div>`
  );
}
// render each shoe once and wire up controls
shoes.forEach((element) => inject(element));
getBtn();

function getBtn() {
  const buttons = document.querySelectorAll(".button");
  buttons.forEach((btn) =>
    btn.addEventListener("click", function (event) {
      const button = event.currentTarget;
      const price = Number(button.getAttribute("data-price")) || 0;
      const item = button.getAttribute("data-title");
      total += price;
      console.log("total:", total);
      addCart(item);
    })
  );
  document.querySelectorAll(".Filter").forEach((btn) =>
    btn.addEventListener("click", function (event) {
      const category = event.currentTarget.getAttribute("data-class");
      filterByBrand(category);
    })
  );
}
function addCart(item) {
  let found = shoes.find((shoe) => shoe.name === item);
  const container = document.querySelector(".cartd");
  container.insertAdjacentHTML(
    "afterbegin",
    `<div class="cart-item">
    <h2 class="name">${found.name}</h2>
    <p> Price:${found.price}</p>
    <button class="remove" data-price="${found.price}" > Remove Item</button>
    </div>`
  );
  updateTotal();
  // attach remove handler for newly added remove button(s)
  setRemoveButtons();
}
function updateTotal() {
  const totalDisplay = document.querySelector(".total");

  if (!totalDisplay) {
    document
      .querySelector(".cartd")
      .insertAdjacentHTML(
        "beforeend",
        `<h3 class = "total">Total:${total}</h3>`
      );
  } else {
    totalDisplay.textContent = `Total: ${total}`;
  }
}

function filterByBrand(category) {
  const container = document.querySelector(".container");
  container.innerHTML = ""; // this clears previous items

  let filteredshoes;
  if (category === "All") {
    filteredshoes = shoes;
  } else {
    // support price-range and brand filters
    if (category === "under50") {
      filteredshoes = shoes.filter((shoe) => shoe.price < 50);
    } else if (category === "50to100") {
      filteredshoes = shoes.filter(
        (shoe) => shoe.price >= 50 && shoe.price <= 100
      );
    } else if (category === "100to150") {
      filteredshoes = shoes.filter(
        (shoe) => shoe.price > 100 && shoe.price <= 150
      );
    } else if (category === "over150") {
      filteredshoes = shoes.filter((shoe) => shoe.price > 150);
    } else {
      filteredshoes = shoes.filter((shoe) => shoe.brand === category);
    }
  }
  filteredshoes.forEach((shoe) => inject(shoe));
  getBtn();
}

// attach remove button listeners to cart items (idempotent)
function setRemoveButtons() {
  document.querySelectorAll(".remove").forEach((btn) => {
    if (btn.dataset.bound === "true") return;
    btn.addEventListener("click", function (event) {
      const button = event.currentTarget;
      const price = Number(button.getAttribute("data-price")) || 0;
      total -= price;
      const cartItem = button.closest(".cart-item");
      if (cartItem) cartItem.remove();
      updateTotal();
    });
    btn.dataset.bound = "true";
  });
}
//make array
//find item in array, .find("name")
//push item to cart
//show cart

//How to add cards
