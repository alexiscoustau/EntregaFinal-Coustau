const Carrito = JSON.parse(localStorage.getItem("Carrito")||[])
console.log(Carrito)
const Tabla = document.getElementById(`TablaCarrito`)

Carrito.forEach(element => {
    Tabla.innerHTML += `
   
    <tr>
      <th scope="row">${element.id}</th>
      <td>${element.nombre}</td>
      <td>${element.precio}</td>
      <td>1</td>
    </tr>
    
        

    
    `
    
});

let TotalDeCompra = Carrito.reduce((acumulador , element)=> acumulador + element.precio,0,);
    const CompraTotal = document.getElementById(`Total`);
    console.log(TotalDeCompra)
    CompraTotal.innerHTML = `el total de la compra es $ `+TotalDeCompra;