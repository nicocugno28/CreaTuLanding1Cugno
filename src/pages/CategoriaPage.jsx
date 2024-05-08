import React, { useContext } from 'react';
import { Card } from '../components/Card';
import { ProductosContext } from '../context/ProductosContext';
import { CarritoContext } from '../context/CarritoContext';

export const CategoriaPage = ({ categoria }) => {
    const { productos } = useContext(ProductosContext);
    const { agregarCompra, eliminarCompra } = useContext(CarritoContext);

    const handleAgregar = (compra) => {
        agregarCompra(compra);
    };

    const handleQuitar = (id) => {
        eliminarCompra(id);
    };

    // Filtramos los productos por la categoría especificada
    const productosCategoria = productos.filter(producto => producto.category === categoria);

    return (
        <>
            <h1>{categoria}</h1>
            <hr />

            {productosCategoria.map(producto => (
                <Card
                    key={producto.id}
                    imagen={producto.image}
                    titulo={producto.title}
                    descripcion={producto.description}
                    precio={producto.price}
                    handleAgregar={() => handleAgregar(producto)}
                    handleQuitar={() => handleQuitar(producto.id)}
                />
            ))}
        </>
    );
};