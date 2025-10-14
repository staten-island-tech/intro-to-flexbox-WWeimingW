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
    img: "images/AirZoomPegasus37.avif",
    price: 90,
    alt: "White Nike Air Zoom Pegasus 37 sneaker",
  },
  {
    name: "Adidas Ultraboost 21",
    brand: "Adidas",
    img: "images/Ultraboo.avif",
    price: 210,
    alt: "Black Adidas Ultraboost 21 sneaker",
  },
  {
    name: "Adidas Stan Smith",
    brand: "Adidas",
    img: "images/StanSmith.avif",
    price: 150,
    alt: "White Adidas Stan Smith sneaker",
  },
  {
    name: "Converse Chuck",
    brand: "Converse",
    img: "images/ConverseChuck.avif",
    alt: "White Converse Chuck Taylor All Star sneaker",
    price: 85,
  },
  {
    name: "Taylor All Star",
    brand: "Converse",
    img: "images/TaylorAllStar.avif",
    price: 95,
    alt: "White Converse Taylor All Star sneaker",
  },
  {
    name: "New Balance 574",
    brand: "New Balance",
    img: "images/NewBalance574.avif",
    price: 80,
    alt: "Grey New Balance 574 sneaker",
  },
  {
    name: "New Balance 990v5",
    brand: "New Balance",
    img: "images/NewBalance990v5.avif",
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
    img: "images/PumaSuedeClassic.avif",
    price: 120,
    alt: "Black Puma Suede Classic sneaker",
  },
  {
    name: "Asics Gel-Kayano 27",
    brand: "Asics",
    img: "images/AsicsGelKayano27.avif",
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
    img: "images/ClassicWatercoloredMarbledClog.avif",
    price: 100,
    alt: "Classic Watercolored Marbled Crocs",
  },
  {
    name: "Birkenstock Boston Soft Footbed Suede",
    brand: "Birkenstock",
    img: "images/BirkenstockBoston.avif",
    price: 135,
    alt: "Birkenstock Boston Soft Footbed Suede Berks",
  },
  {
    name: "Men's Cloudtilt",
    brand: "On",
    img: "images/OnCloudtilt.avif",
    price: 90,
  },
  {
    name: "Nike Dunk Low Retro  ",
    brand: "Nike",
    img: "images/Dunk.avif",
    price: 120,
  },
  {
    name: "",
    brand: "Nike",
    price: 120,
  },
  {
    name: "Air Max 90",
    brand: "Nike",
    price: 120,
  },
];

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
      <button class="button" id ="${item.name}">Add to Cart</button>
    </div>`
  );
}
shoes.forEach((element) => {
  inject(element);
});
function getBtn() {
  const buttons = document.querySelectorAll(".button");
  const btnArr = Array.from(buttons);
  btnArr.forEach((btn) =>
    btn.addEventListener("click", function (event) {
      console.log(event.target.getAttribute("data-id"));
    })
  );
}
getBtn();
