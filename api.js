// Right Side (Menu)
let currentDetails ={}
const openMenu = () => {
    document.querySelector('.backdrop').className = 'backdrop active';
    document.querySelector('aside').className = 'active';
}
const closeMenu = () => {
    document.querySelector('.backdrop').className = 'backdrop';
    document.querySelector('aside').className = '';
}
document.getElementById("menuBtn").onclick = e => {
    e.preventDefault();
    openMenu();
}
document.querySelector('aside button.close').onclick = e => {
    closeMenu();
}
/////// Showing Data //////
async function fetchProducts() {
    try {
      const response = await fetch("https://dummyjson.com/products");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data.products;
      console.log(data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
}
function renderProducts(products) {
    const tableBody = document.getElementById("table_body");
    let tableData = "";
    products.forEach((product) => {
        tableData += `
            <div  class="product">
                <div class="productImage">
                    <img src="${product.thumbnail}" alt="">
                    <a href="./viewDetails.html?productId=${product.id}"  class="viewDetails" >view Details</a>
                </div>
                <div class="productDetails">
                    <h3>${product.brand}</h3>
                    <p>$${product.price}</p>
                </div>
            </div>`;
    });
    if(tableBody){
        tableBody.innerHTML = tableData;
    }
}
async function loadProducts() {
    const products = await fetchProducts();
    renderProducts(products);
}
console.log('currentDetails',currentDetails)
loadProducts();
///// second page onhover effect on the image /////
// let secondPage = document.querySelector(".productImage"); // Use querySelector for a single element
// let secondDrop = document.querySelector(".viewDetails");
// secondPage.addEventListener("mouseover", () => {
//     secondDrop.style.display = "block"; // Display the dropdown when hovering over the anchor
// });
// secondPage.addEventListener("mouseout", () => {
//     secondDrop.style.display = "none"; // Hide the dropdown when moving away from the anchor
// });
// secondDrop.addEventListener("mouseover", () => {
//     secondDrop.style.display = "block"; // Keep the dropdown open when hovering over the dropdown itself
// });
// secondDrop.addEventListener("mouseout", () => {
//     secondDrop.style.display = "none"; // Hide the dropdown when moving away from the dropdown itself
// });