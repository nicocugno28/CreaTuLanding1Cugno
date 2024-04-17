import './CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';



export const CartWidget = () => {

    const [cartCount, setCartCount] = useState(0)
    
    return (<div>
        <a href="#" className="nav-link" onClick={() => setCartCount(cartCount + 1)}>
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="badge">{cartCount}</span>
        </a>
    </div>);
}