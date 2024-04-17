import './navbar.css'
import logo from '../..//assets/logo.png'
import { CartWidget } from '../CartWidget/CartWidget';





export const Navbar = () => {
    
    return (
        <>
            <nav className='navbar'>
                <div className="container">
                    
                    <ul className="navbar-nav ">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Ofertas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Ofertas</a>
                        </li>
                        <CartWidget />
                    </ul>
                </div>
                
            </nav>
            
        </>
    );
}
