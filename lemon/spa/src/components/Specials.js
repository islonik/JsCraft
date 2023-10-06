// Specials (the component that loops over the specials that come from a data source)

import Special from "./Special";

import food1 from '../assets/img/food_1.jpg';
import food2 from '../assets/img/food_2.jpg';
import drink1 from '../assets/img/drink_1.jpg';
import drink2 from '../assets/img/drink_2.jpg';

function Specials() {
    return (
        <ul>
            <li>
                <Special key="1" pic={food1} dish="Nachos" oldPrice="$12" newPrice="$10" desc="Cheese, onions, tomotoes."/>
            </li>
            <li>
                <Special key="2" pic={food2} dish="Tacos" oldPrice="$12" newPrice="$10" desc="Chicken or beef with your choice of side"/>
            </li>
            <li>
                <Special key="3" pic={drink1} dish="Vodka 1oz" oldPrice="$6" newPrice="$5" desc="Vodka and choice of juice or soda"/>
            </li>
            <li>
                <Special key="4" pic={drink2} dish="Rum 1oz" oldPrice="$6" newPrice="$5" desc="Rum and choice of juice or soda"/>
            </li>
        </ul>
    );
}

export default Specials;