document.addEventListener("DOMContentLoaded", function(){
    let products = [];

    // Create the submit button element
    let submitBtn = document.createElement('button');
    submitBtn.textContent = 'Añadir';
    submitBtn.className = 'btn btn-success';
    document.getElementById('product-form').appendChild(submitBtn);

    // Agrega un evento de click al botón de agregar producto
    document.querySelector('#dropdownMenuButton +.dropdown-menu #add-product').addEventListener('click', () => {
        // Muestra el formulario de agregar producto
        document.getElementById('product-form').style.display = 'block';
        submitBtn.style.display = 'block';
    });

    // Agrega un evento de submit al formulario
    document.getElementById('product-form').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            submitForm();
        }
    });

    // Agrega un evento de click al botón de submit
    submitBtn.addEventListener('click', submitForm);

    function submitForm() {
        // Obtiene los valores del formulario
        let productName = document.getElementById('productName').value;
        let productDescription = document.getElementById('productDescription').value;

        // Verifica si los campos están vacíos
        if (productName === '' || productDescription === '') {
            alert("Por favor, complete ambos campos y vuelva a intentar.");
            return;
        }

        // Crea un nuevo producto
        let newProduct = {
            name: productName,
            description: productDescription
        };

        // Agrega el producto a la lista de productos
        products.push(newProduct);

        // Limpia el formulario
        document.getElementById('productName').value = '';
        document.getElementById('productDescription').value = '';

        // Oculta el formulario
        document.getElementById('product-form').style.display = 'none';
        submitBtn.style.display = 'none';

        // Llama a la función listProducts para actualizar la lista de productos
        listProducts();
    }

    // Agrega un evento de click al botón de editar producto
    document.querySelector('#dropdownMenuButton +.dropdown-menu #edit-product').addEventListener('click', () => {
        // Muestra la lista de productos para editar
        let productListUl = document.getElementById('product-list-ul');
        productListUl.innerHTML = '';
        products.forEach((product, index) => {
            let listItem = document.createElement('li');
            listItem.textContent = `Name: ${product.name}, Description: ${product.description}`;
            listItem.dataset.index = index;
            listItem.style.color = 'lightgreen';
            productListUl.appendChild(listItem);
        });

    let editButtons = document.createElement('button');
    editButtons.textContent = 'Editar';
    editButtons.className = 'btn btn-primary';
    productListUl.appendChild(editButtons);

    editButtons.addEventListener('click', () => {
        let productName = prompt("Ingrese el nombre del producto que desea editar:");
        let selectedIndex = products.findIndex(product => product.name === productName);

        if (selectedIndex === -1) {
            alert("Producto no encontrado!");
            return;
        }

        let newProductName = prompt("Ingrese el nuevo nombre del producto:");
        let newProductDescription = prompt("Ingrese la nueva descripción del producto:");

        if (newProductName !== null && newProductDescription !== null) {
            products[selectedIndex].name = newProductName;
            products[selectedIndex].description = newProductDescription;
            listProducts();
        }
    });
});

// Agrega un evento de click al botón de eliminar producto
document.querySelector('#dropdownMenuButton +.dropdown-menu #delete-product').addEventListener('click', () => {
    let productListUl = document.getElementById('product-list-ul');
    productListUl.innerHTML = '';
    products.forEach((product, index) => {
        let listItem = document.createElement('li');
        listItem.textContent = `Name: ${product.name}, Description: ${product.description}`;
        listItem.dataset.index = index;
        listItem.style.color = 'lightgreen';
        productListUl.appendChild(listItem);
    });

    let deleteButtons = document.createElement('button');
    deleteButtons.textContent = 'Eliminar';
    deleteButtons.className = 'btn btn-danger';
    productListUl.appendChild(deleteButtons);

    deleteButtons.addEventListener('click', () => {
        let productName = prompt("Ingrese el nombre del producto que desea eliminar:");
        let selectedIndex = products.findIndex(product => product.name === productName);

        if (selectedIndex === -1) {
            alert("Producto no encontrado!");
            return;
        }

        products.splice(selectedIndex, 1);
        listProducts();
    });
});

    // Agrega un evento de click al botón de listar productos
    document.querySelector('#dropdownMenuButton +.dropdown-menu #list-products').addEventListener('click', listProducts);

    // Función para listar los productos
    function listProducts() {
        console.log('listProducts function called');
        let productListUl = document.getElementById('product-list-ul');
        productListUl.innerHTML = '';
        products.forEach((product) => {
            let listItem = document.createElement('li');
            listItem.style.color = 'lightgreen';
            listItem.textContent = `Name: ${product.name}, Description: ${product.description}`;
            productListUl.appendChild(listItem);
        });
    }});