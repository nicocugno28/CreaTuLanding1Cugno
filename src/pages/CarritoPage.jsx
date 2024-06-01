import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import Swal from 'sweetalert2';
import html2canvas from 'html2canvas';

export const CarritoPage = () => {
    const { listaCompras, aumentarCantidad, disminuirCantidad, eliminarCompra } = useContext(CarritoContext);

    const calcularTotal = () => {
        return listaCompras.reduce((total, item) => total + item.price * item.cantidad, 0).toFixed(2);
    }

    const handleImpresion = () => {
        const total = calcularTotal();
        const productos = listaCompras.map(item => `${item.title} x ${item.cantidad}`).join(', ');

        Swal.fire({
            title: 'Resumen de Compra',
            html: `
                <p><b>Productos:</b> ${productos}</p>
                <p><b>Total a pagar:</b> $${total}</p>
            `,
            icon: 'info',
            confirmButtonText: 'Aceptar',
            preConfirm: () => {
                return new Promise((resolve) => {
                    const swalContent = document.querySelector('.swal2-html-container');
                    html2canvas(swalContent).then(canvas => {
                        const imgData = canvas.toDataURL('image/png');
                        const printWindow = window.open('', '_blank');
                        printWindow.document.write('<html><head><title>Factura</title></head><body>');
                        printWindow.document.write(`<img src="${imgData}" />`);
                        printWindow.document.write('</body></html>');
                        printWindow.document.close();
                        printWindow.focus();
                        printWindow.onload = () => {
                            printWindow.print();
                            printWindow.close();
                        };
                        resolve();
                    });
                });
            }
        });
    }

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listaCompras.map(item => (
                            <tr key={item.id}>
                                <th>{item.title}</th>
                                <td>{item.price}</td>
                                <td>
                                    <button 
                                        className="btn btn-outline-primary" 
                                        onClick={() => disminuirCantidad(item.id)}
                                    >-</button>
                                    <button className="btn btn-primary">{item.cantidad}</button>
                                    <button 
                                        className="btn btn-outline-primary" 
                                        onClick={() => aumentarCantidad(item.id)}
                                    >+</button>
                                </td>
                                <td><button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => eliminarCompra(item.id)}
                                >Eliminar
                                </button>
                                </td>
                            </tr>
                        ))
                    }
                    <tr>
                        <th><b>TOTAL: </b></th>
                        <td></td>
                        <td></td>
                        <td>${calcularTotal()}</td>
                    </tr>
                </tbody>
            </table>

            <div className="d-grid gap-2">
                <button 
                    className="btn btn-primary"
                    onClick={handleImpresion}
                    disabled={listaCompras.length < 1}
                >COMPRAR</button>
            </div>
        </>
    );
}