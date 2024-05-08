import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { ComprasPage } from "./pages/ComprasPage";
import { CarritoPage } from "./pages/CarritoPage";
import { ProductosProvider } from "./context/ProductosProvider";
import { CarritoProvider } from "./context/CarritoProvider";
import { CategoriaPage } from "./pages/CategoriaPage"; 

export const CarritoApp = () => {
    return (
        <ProductosProvider>
            <CarritoProvider>
                <NavBar />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<ComprasPage />} />
                        <Route path="/electronics" element={<CategoriaPage categoria="electronics" />} />
                        <Route path="/jewelery" element={<CategoriaPage categoria="jewelery" />} />
                        <Route path="/mens-clothing" element={<CategoriaPage categoria="men's clothing" />} />
                        <Route path="/womens-clothing" element={<CategoriaPage categoria="women's clothing" />} />
                        <Route path="/carrito" element={<CarritoPage />} />
                        <Route path="/*" element={<Navigate to='/' />} />
                    </Routes>
                </div>
            </CarritoProvider>
        </ProductosProvider>
    );
};