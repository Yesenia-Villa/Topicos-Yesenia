import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function ItemProductos({producto}) {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={producto.img}/>
      <Card.Body>
        <Card.Title><h2>{producto.nombre}</h2></Card.Title>
        <Card.Text>
        <h2>cantidad: {producto.cantidad}</h2>
        <h2>precio: {producto.precio}</h2>
         <h2>unidad: {producto.unidad}</h2>
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
    </div>
  )
}


