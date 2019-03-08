
function fetchHelper(url, method, callback, queryString = "") {

    if (queryString != "") {
        var htmlInit = {
            method: method,
            credentials: 'include',
            body: queryString
        }
    } else {
        var htmlInit = {
            method: method
        }
    }

    fetch(url, htmlInit)
    .then((response) => response.json())
    .then((json) => {
        callback(json);
    });

}

function addToShoppingcart(addProductButton) {
    console.log('it works!');
    var productId = addProductButton.id;
    var queryString = "productId="+productId;

    fetchHelper("api/cartBackend.php", "PUT", (json) => {console.log(json)}, queryString);
}

function deleteFromShoppingcart(deleteProductButton) {

    var productId = deleteProductButton.id;
    var queryString = "productId="+productId;

    fetchHelper("api/cartBackend.php", "DELETE", (shoppingCart) => {
        updateNumberOfChosenProducts(shoppingCart);
        removeProductDivIfDoesntExist(productId, shoppingCart);
    }, queryString);
}

function removeProductDivIfDoesntExist(productId, shoppingCart) {
    if (typeof shoppingCart[productId] === 'undefined') {
        var productDiv = document.getElementById("productDiv" + productId);
        productDiv.parentNode.removeChild(productDiv);
    }
}

function getAndDisplayShoppingcart() {
    fetchHelper("api/cartBackend.php", "GET", (shoppingCart) => {
        displayShoppingCart(shoppingCart);
        addAllChosenProducts(shoppingCart);
    });
}

function displayShoppingCart(shoppingCart) {
    sortedProductIdList = getSortedProductIdList(shoppingCart);
    displayProductList(sortedProductIdList, shoppingCart);  
}

function displayProductList(sortedProductIdList, shoppingCart) {
    var nextProductId = sortedProductIdList.shift();
    console.log(nextProductId);
    if(!isNaN(nextProductId)) {
        fetchHelper("api/get.php?productId="+nextProductId, "GET", (productInfo) => {
            if (shoppingCart[nextProductId] != null) {
                addProductToProductContainerDiv(productInfo, shoppingCart);
            }
            displayProductList(sortedProductIdList, shoppingCart);
        });
    }
}

function getSortedProductIdList(shoppingCart) {
    productIdList = [];
    for (var productId in shoppingCart) {
        productIdList.push(productId);
    }
    productIdList.sort();
    return productIdList;
}

function addProductToProductContainerDiv(productInfo, shoppingCart) {
    var chosenProduct = createProductDiv();

    chosenProduct.appendChild(createProductImage(productInfo));
    chosenProduct.appendChild(createProductName(productInfo));
    chosenProduct.appendChild(createProductPrice(productInfo));
    chosenProduct.appendChild(createNumberOfChosenProduct(productInfo, shoppingCart));
    chosenProduct.appendChild(createDeleteButton(productInfo));
    chosenProduct.id = "productDiv" + productInfo["productId"];

    var productContainer = document.getElementById("divOfChosenProducts");
    productContainer.appendChild(chosenProduct);
}

function createProductDiv() {
    var productDiv = document.createElement("div");
    productDiv.classList.add("chosenProduct");
    return productDiv;
}

function createProductImage(productInfo) {
    var chosenProductImage = document.createElement("img");
    chosenProductImage.classList.add("shoppingcartImage");
    chosenProductImage.src = "data:image/jpeg;base64," + productInfo["image"];
    return chosenProductImage;
}

function createProductName(productInfo) {
    var divOfProductsName = document.createElement("div");
    divOfProductsName.id = "productsNameDiv";
    var nameOfChosenProduct = document.createElement("h3");
    nameOfChosenProduct.innerText = productInfo["name"];
    divOfProductsName.appendChild(nameOfChosenProduct);
    return divOfProductsName;
}

function createProductPrice(productInfo) {
    var priceOfChosenProduct = document.createElement("p");
    priceOfChosenProduct.innerText = productInfo["price"] + " kr";
    return priceOfChosenProduct;
}

function createNumberOfChosenProduct(productInfo, shoppingCart) {
    var divOfNumberOfChosenProducts = document.createElement("div");
    var numberOfChosenProducts = document.createElement("p");

    var productId = productInfo["productId"];
    var quantity = shoppingCart[productId];
    numberOfChosenProducts.innerText = quantity;
    numberOfChosenProducts.id = "number" + productId;
    divOfNumberOfChosenProducts.appendChild(numberOfChosenProducts);
    return divOfNumberOfChosenProducts;
}

function updateNumberOfChosenProducts(shoppingCart) {
    addAllChosenProducts(shoppingCart);
    for (var productId in shoppingCart) {
        if (shoppingCart[productId] != null) {
            var numberOfCurrentChosenProduct = document.getElementById("number" + productId);
            numberOfCurrentChosenProduct.innerText = shoppingCart[productId];
        }
    }
}

function addAllChosenProducts(shoppingCart) {

    var numberOfAllChosenProducts = document.getElementById("numberOfAllChosenProduct");
    var number = 0;

    for (var productId in shoppingCart) {
        number += shoppingCart[productId];
    }

    numberOfAllChosenProducts.innerText = number;
}

function createDeleteButton(productInfo) {
    var deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    deleteButton.id = productInfo["productId"];
    deleteButton.innerText = "Delete";
    deleteButton.setAttribute("onclick", "deleteFromShoppingcart(this)");
    return deleteButton;
}