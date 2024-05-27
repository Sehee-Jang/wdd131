document.addEventListener("DOMContentLoaded", function () {
    // Display the total number of reviews
    const reviewCountElement = document.getElementById("reviewCount");
    let reviewCount = localStorage.getItem("reviewCount") || 0;
    reviewCountElement.textContent = reviewCount;
});