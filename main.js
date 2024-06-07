const DatosProductos = "./json/productos.json"
const MostrarProductos = document.getElementById(`TodosProductos`)
const Carrito = []
const agregarAlCarrito =(id , productos)=>{
    const producto = productos.find ((producto)=>producto.id === id)
    Carrito.push(producto)
    localStorage.setItem("Carrito",JSON.stringify(Carrito))

     }

     

fetch (DatosProductos)
 .then ((respuesta)=>respuesta.json())
 .then ((datos)=>{
     TodosLosProductos(datos)
 })


 function TodosLosProductos (productos){
     productos.forEach(producto => {
        const tarjeta = document.createElement (`li`)
        tarjeta.innerHTML =`
        
        <div class="card carta text-center col-3" style="width: 14rem; ">
        <img src="${producto.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">${producto.descripcion}</p>
          <button class="btn btn-primary" id="boton${producto.id}">agregar a carrito</button>
        </div>
      </div>
        
        `

        MostrarProductos.appendChild(tarjeta)
    
     const boton = document.getElementById(`boton${producto.id}`);
     boton.addEventListener("click", ()=>{
      
          Swal.fire({
          position: "center",
          icon: "success",
          title: "Se agrego tu producto al carrito",
          showConfirmButton: false,
          timer: 2000
        });
        agregarAlCarrito(producto.id , productos)
    

        
 });


    });

 }


    
    







