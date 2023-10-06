// Special renders a single special.
import '../assets/css/Special.css';

const Special = ({ pic, dish, price, desc }) => {
    return (
        <div className="special">
            <img className="special-pic" src={pic} alt={dish}/>
            <span className="special-dish">{dish}</span>
            <span className="special-price">{price}</span>
            <span className="special-description">{desc}</span>
        </div>
    );
}

export default Special;