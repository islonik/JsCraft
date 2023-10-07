// Specials (the component that loops over the specials that come from a data source)

import Special from "./Special";

import special1 from '../assets/img/specials/special_1.jpg';
import special2 from '../assets/img/specials/special_2.jpg';
import special3 from '../assets/img/specials/special_3.jpg';
import special4 from '../assets/img/specials/special_4.jpg';

function Specials() {
    return (
        <ul>
            <li>
                <Special key="1" pic={special1} dish="Nachos" oldPrice="$12" newPrice="$10" desc="Cheese, onions, tomotoes."/>
            </li>
            <li>
                <Special key="2" pic={special2} dish="Tacos" oldPrice="$12" newPrice="$10" desc="Chicken or beef with your choice of side"/>
            </li>
            <li>
                <Special key="3" pic={special3} dish="Vodka 1oz" oldPrice="$6" newPrice="$5" desc="Vodka and choice of juice or soda"/>
            </li>
            <li>
                <Special key="4" pic={special4} dish="Rum 1oz" oldPrice="$6" newPrice="$5" desc="Rum and choice of juice or soda"/>
            </li>
        </ul>
    );
}

export default Specials;