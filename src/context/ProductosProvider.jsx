import { useEffect, useState } from 'react';
import { ProductosContext } from './ProductosContext';
import { db } from '../firebase/dbConecction'; // Importa la conexión a Firebase
import { collection, addDoc, getDocs } from 'firebase/firestore'; // Importa las funciones necesarias de Firestore

export const ProductosProvider = ({ children }) => {
    const [productos, setProductos] = useState([]);

    const fetchProductos = async () => {
        // Obtén los productos desde la API externa
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        console.log(data);

        // Guarda los productos en el estado
        setProductos(data);

        // Referencia a la colección de productos en Firestore
        const productosCollection = collection(db, 'productos');

        // Agrega cada producto a Firestore
        data.forEach(async (producto) => {
            try {
                await addDoc(productosCollection, producto);
            } catch (error) {
                console.error('Error agregando documento: ', error);
            }
        });
    };

    useEffect(() => {
        // Fetch productos solo cuando el componente se monta
        fetchProductos();
    }, []);

    return (
        <ProductosContext.Provider value={{ productos }}>
            {children}
        </ProductosContext.Provider>
    );
};