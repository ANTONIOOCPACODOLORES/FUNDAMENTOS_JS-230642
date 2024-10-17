// repaso de objetos 
const bg = "linear-gradient(11deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 86%)";
const style_console = `background:${bg};color:white; border-radius: 6px; padding: 4px; font-size: 1.0rem`;

// Personalización de las salidas a consola 
console.log("%cPráctica 05: repaso de objetos en JavaScript", style_console);


// Variables independientes 
let producto_nombre = "computadora ASUS gamer laptop 17*";
let producto_marca = "ASUS";
let producto_modelo = "TUF 17";
let producto_precio = 15749.50;
let producto_disponibilidad = true;
let producto_SKU = Symbol("TUF70W-HK221W");
let producto_stock = 15;
let producto_Imagen = null; // Cambiado a 'null'
let producto_Barcode; // Cambiado el nombre a 'Barcode'
let producto_categoria = ["ELECTRONICOS", "Computación", "Gaming", "Promociones BUEN FIN", "Mejor Valorados"];

// Accedemos a los valores de las características del producto de la marca de manera independiente 
console.log(`Los datos del producto son: 
Nombre: ${producto_nombre}, Tipo de dato: ${typeof(producto_nombre)} 
Marca: ${producto_marca}, Tipo de dato: ${typeof(producto_marca)} 
Modelo: ${producto_modelo}, Tipo de dato: ${typeof(producto_modelo)} 
Precio: ${producto_precio}, Tipo de dato: ${typeof(producto_precio)} 
Disponibilidad: ${producto_disponibilidad}, Tipo de dato: ${typeof(producto_disponibilidad)} 
SKU: ${producto_SKU.toString()}, Tipo de dato: ${typeof(producto_SKU)} 
Stock: ${producto_stock}, Tipo de dato: ${typeof(producto_stock)} 
Imagen: ${producto_Imagen}, Tipo de dato: ${typeof(producto_Imagen)} 
Barcode: ${producto_Barcode}, Tipo de dato: ${typeof(producto_Barcode)} 
Categoría: ${producto_categoria}, Tipo de dato: ${typeof(producto_categoria)}`);

console.log(); // Nueva línea

// Declaramos el objeto Producto
let Producto = {
    Nombre: "Tenis Deportivos",
    Marca: "Nike",
    Modelo: "Jordan '24",
    Precio: 3326.25,
    Disponibilidad: false,
    Stock: 0,
    Sku: "D25485-612",
    Imagen: "../assets/Products/sneakers/JORDAN.png",
    Barcode: null,
    Categorias: ["Deportivos", "Juvenil"]
};

// Leemos el objeto completo
console.table(Producto);

// Accedemos a propiedades específicas del objeto
console.log("Accediendo a propiedades específicas del producto");
console.log(`Nombre: ${Producto.Nombre} 
Marca: ${Producto.Marca} 
Modelo: ${Producto.Modelo} 
Precio: ${Producto.Precio} 
Disponibilidad: ${Producto.Disponibilidad} 
Stock: ${Producto.Stock} 
SKU: ${Producto.Sku} 
Barcode: ${Producto.Barcode} 
Categoría: ${Producto.Categorias}`);

console.log(`Estatus: ${Producto.Stock === 0 ? 'Agotado' : `${Producto.Stock} unidades disponibles`}`);

// Segundo producto
let Producto2 = {
    Clave: 316,
    Nombre: "Lentes para sol",
    Marca: "Oakley",
    Modelo: "QNTM kato",
    Precio: 6829.00,
    Disponibilidad: true,
    Stock: 5,
    SKU: "DO9481D-0356",
    Imagen: "../assets/Products/sunglasses/katoRed.png",
    Barcode: 888392491626,
    Categorias: ["Deportes", "Lentes", "Accesorios"]
};

// Comprador
let comprador = {
    Clave: 3216,
    Nombre: "Antonio",
    Apellido: "Dolores",
    Tipo: "Frecuente",
    correo: "TonyCr25@gmail.com",
    Pais_Origen: "México",
    Saldo: 140000.00
};

// Pedido
let Pedido = {
    Producto_clave: 316,
    comprador_clave: 3216,
    cantidad: 2,
    Estatus: "Carrito de compras",
    TipoPago: "Tarjeta de credito"
};

// Calcular costo de la compra
let Precio = Producto2.Precio;
let Cantidad = Pedido.cantidad;
let SaldoActual = comprador.Saldo;

let Costo_Compra = Precio * Cantidad;
console.log(`El cliente ha agregado a su carrito de compras ${Cantidad} unidades, con un costo total de: ${Costo_Compra}`);