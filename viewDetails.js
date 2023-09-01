// // Right Side (Menu) 
// const openMenu = () => {
//     document.querySelector('.backdrop').className = 'backdrop active';
//     document.querySelector('aside').className = 'active';
// }

// const closeMenu = () => {
//     document.querySelector('.backdrop').className = 'backdrop';
//     document.querySelector('aside').className = '';
// }    

// document.getElementById("menuBtn").onclick = e => {
//     e.preventDefault();
//     openMenu();
// }

// document.querySelector('aside button.close').onclick = e => {
//     closeMenu();
// }

// async function fetchProductById(id) {
    
//     try {
//       const response = await fetch(`https://dummyjson.com/products?id=${id}`);
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
      
//       const data = await response.json();
//       return data.products;
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       return [];
//     }


// }


async function fetchProductById(id) {
    try {
        const response = await fetch(`https://dummyjson.com/products?id=${id}`);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        
        return data.products[id-1]; // Assuming the API returns a single product
    } catch (error) {
        console.error("Error fetching product:", error);
        return null;
    }
}

async function loadProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('productId');

    if (!productId) {
        console.error("Product ID not found in query parameter.");
        return;
    }

    const product = await fetchProductById(productId);
    if (product) {
        const productDetailsContainer = document.getElementById("productDetailsContainer");
        if (productDetailsContainer) {
            productDetailsContainer.innerHTML = `
                <div class="product">
                    <div class="mainOne">
                    <div class="productImage">
                        <img src="${product.thumbnail}" alt="">
                    </div>
                    <div class="productDetails">
                        <h3>${product.brand}</h3>
                        <p>$${product.price}</p>
                        <p>See if this accessory is compatible with a car in your Tesla Account<span id="spanOne"> Sign In</span></p>
                        <button >${product.title}</button>
                        <p>${product.description}</p>

                        <!-- Other product details -->
                    </div>
                    </div>
                    <div class="ImagesBelow">
                        <img src="${product.images[1]}"> 
                        <img src="${product.images[2]}"> 
                        <img src="${product.images[3]}"> 
                        <img src="${product.images[0]}"> 
                    </div>

                </div>`;
        }
    }
}

loadProductDetails();


