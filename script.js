let products = [];//Guardamos los productos en un array

// Los siguientes bloques corresponden a la añadidura, eliminación, edición
// y enlistamiento de productos,

document.getElementById('submit-btn').addEventListener('click', (e) => {
    e.preventDefault();
    let productName = document.getElementById('productName').value;
    let productDescription = document.getElementById('productDescription').value;

    if (productName.trim() === '' || productDescription.trim() === '') {
        alert("Llena ambos campos!");
        return;
    }

    let newProduct = { name: productName, description: productDescription };
    products.push(newProduct);
    listProducts();
    document.getElementById('product-form').reset();
});

document.getElementById('delete-btn').addEventListener('click', () => {
    let deleteProductName = prompt("Ingresa el nombre del producto que para eliminar:");
    let deleteProductIndex = products.findIndex((product) => product.name === deleteProductName);
    if (deleteProductIndex !== -1) {
        products.splice(deleteProductIndex, 1);
        listProducts();
    } else {
        alert("Product not found!");
    }
});

document.getElementById('update-btn').addEventListener('click', () => {
    let updateProductName = prompt("Ingresa el nombre del producto que para editar:");
    let updateProductIndex = products.findIndex((product) => product.name === updateProductName);
    if (updateProductIndex !== -1) {
        let newProductName = prompt("Ingresa un nuevo nombre:");
        let newProductDescription = prompt("Ingresa la nueva descripción:");
        products[updateProductIndex].name = newProductName;
        products[updateProductIndex].description = newProductDescription;
        listProducts();
    } else {
        alert("Producto no encontrado!");
    }
});

// Lista de productos
function listProducts() {
    let productListUl = document.getElementById('product-list-ul');
    productListUl.innerHTML = '';
    products.forEach((product) => {
        let listItem = document.createElement('li');
        listItem.style.color = 'lightgreen';
        listItem.textContent = `Nombre: ${product.name}, Descripción: ${product.description}`;
        productListUl.appendChild(listItem);
    });
}