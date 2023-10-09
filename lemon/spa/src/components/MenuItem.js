// MenuItem renders a dish from Menu.
import '../assets/css/MenuItem.css';

const MenuItem = ({ dish, price, desc}) => {
    return (
        <div className="menu-item">
            <span className="menu-item-dish">{dish}</span>
            <span className="menu-item-price">{price}</span>
            <span className="menu-item-description">{desc}</span>
        </div>
    );
}

export default MenuItem;