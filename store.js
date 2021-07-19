let carts = document.querySelectorAll(".add-cart");
//console.log(carts);

let products = [
  {
    name: "Gold Bangle",
    price: 23,
    inCart: 0,
  },
  {
    name: "Gold Pendent Set",
    tag: "GoldPendentSet",
    price: 25,
    inCart: 0,
  },
  {
    name: "Gold Set",
    tag: "goldset",
    price: 15,
    inCart: 0,
  },
  {
    name: "Nackles Set",
    tag: "nacklesset",
    price: 52,
    inCart: 0,
  },
  {
    name: "Bangle",
    tag: "bangle",
    price: 27,
    inCart: 0,
  },
  {
    name: "Dubai Gold Pendent",
    tag: "dubaigoldpendent",
    price: 27,
    inCart: 0,
  },
  {
    name: "Dubai Gold pendent2",
    tag: "GreenRose",
    price: 277,
    inCart: 0,
  },
  {
    name: "Gold Nackless",
    tag: "goldnackless",
    price: 499,
    inCart: 0,
  },
];

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    // console.log(products[i]);
    cartNumbers(products[i]); // function call when event goes or on click happen
   // totalcost(products[i]);
  });
}

function onLoadCartNumber() {
  let productNumbers = localStorage.getItem("cartNumbers");

  if (productNumbers) {
    document.querySelector(".cart span").textContent = productNumbers;
  }
}

function cartNumbers(product) {
  // count the number of cart item count increment when onclick or click event happen
  // console.log("the products clicked is", product);
  let productNumbers = localStorage.getItem("cartNumbers");
  let cartValue = localStorage.getItem("cartValue");

  cartValue = parseInt(cartValue);
  if (cartValue) {
    localStorage.setItem("cartValue", cartValue + product.price);
  } else {
    localStorage.setItem("cartValue", product.price);
  }
  //
  productNumbers = parseInt(productNumbers);
  // localStorage.setItem("cartNumbers", 1);
  //  console.log(productNumbers);

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".cart span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart span").textContent = 1;
  }
  //console.log(productNumbers);
 // setItems(product);
}
//onLoadCartNumber();



onLoadCartNumber();

