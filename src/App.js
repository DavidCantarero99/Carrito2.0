import React, { Fragment, useState } from 'react'
import Footer from './components/Footer';
import Header from './components/Header'
import Producto from './components/Producto';
import Carrito from './components/Carrito';


function App() {
 
 //Listado de Productos
 const [productos , guardarProductos]=useState([

  {id: 1, nombre: 'Camisa React', precio: 50},
  {id: 2, nombre: 'Camisa Express', precio: 45},
  {id: 3, nombre: 'Camisa Electron', precio: 35},
  {id: 4, nombre: 'Camisa Vue', precio: 25},
 ])
 
 //state carrito de compras
 const[carrito , agregarProducto]=useState([])
  
 
 //Funcion Fecha Actual 
  const fecha = new Date().getFullYear()

  return (
    <Fragment>
      <Header titulo = 'tienda virtual'/>
      
      <h1>Lista de Productos</h1>
      {productos.map(producto =>(
        <Producto  
        producto ={producto}
        key = {producto.id}
        carrito = {carrito}
        productos = {productos}
        agregarProducto = {agregarProducto}
        />
      ))}

      <Carrito 
      carrito={carrito} 
      agregarProducto={agregarProducto}
      
      />

      <Footer  fecha={fecha}/>
      </Fragment>
  
  );
}

export default App
