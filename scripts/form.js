// Product Array
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    avg_rating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    avg_rating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    avg_rating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    avg_rating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    avg_rating: 5.0
  }
];

// Populate Product Options
document.addEventListener("DOMContentLoaded", function () {
  const productSelect = document.getElementById("product");

  // Loop through products array to create options
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
});

// Track Number of Reviews Completed
document.addEventListener("DOMContentLoaded", function () {
  const reviewButton = document.querySelector('input[type="button"]');

  // Check if reviewButton exists before adding event listener
  if (reviewButton) {
    reviewButton.addEventListener("click", function () {
      if (localStorage.getItem("reviewCount")) {
        let reviewCount = parseInt(localStorage.getItem("reviewCount"));
        reviewCount++;
        localStorage.setItem("reviewCount", reviewCount);
      } else {
        localStorage.setItem("reviewCount", "1");
      }
    });
  }
});

