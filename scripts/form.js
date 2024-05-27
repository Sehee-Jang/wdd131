// script.js

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averageRating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averageRating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averageRating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averageRating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averageRating: 5.0
  }
];

const productNameSelect = document.getElementById("product");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    productNameSelect.appendChild(option);
});

// Increment review counter on form submission confirmation
if (localStorage.getItem("reviewCounter")) {
    let counter = parseInt(localStorage.getItem("reviewCounter"));
    counter++;
    localStorage.setItem("reviewCounter", counter);
} else {
    localStorage.setItem("reviewCounter", 1);
}
