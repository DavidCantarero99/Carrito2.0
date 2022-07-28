import React from 'react';
import './carrito.css';
import Producto from './Producto';
const carrito = ({ carrito , agregarProducto}) => (
  <div className="carrito">
    <h2>Carrito de compras</h2>

    {carrito.length ===0
           ?<p> esta Vacio </p>
       

    :carrito.map((producto) => (
     <Producto key={producto.id} 
      producto={producto}
      carrito={carrito}
      agregarProducto = {agregarProducto}
      />
    ))}
  </div>
);

export default carrito