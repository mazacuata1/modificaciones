document.getElementById('cakeForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Obtener los valores del formulario
    var cakeName = document.getElementById('cakeName').value;
    var cakePrice = document.getElementById('cakePrice').value;
    var purchaseDate = document.getElementById('purchaseDate').value;
    var cakeRating = document.getElementById('cakeRating').value;
    var cakeSize = document.getElementById('cakeSize').value;

    // Crear un objeto con los datos
    var cakeData = {
        'Nombre de la torta': cakeName,
        'Precio': cakePrice,
        'Fecha en que se compró': purchaseDate,
        'Calificación': cakeRating,
        'Tamaño': cakeSize
    };

    // Convertir el objeto a cadena JSON y almacenar en el Local Storage
    localStorage.setItem('cakeData', JSON.stringify(cakeData));

    // Limpiar el formulario
    document.getElementById('cakeForm').reset();
});

document.getElementById('viewDataBtn').addEventListener('click', function () {
    // Obtener los datos almacenados del Local Storage
    var storedData = localStorage.getItem('cakeData');

    // Mostrar los datos en el elemento con id 'storedData'
    document.getElementById('storedData').textContent = storedData;
});