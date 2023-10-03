// Specials (the component that loops over the specials that come from a data source)

import Special from "./Special";

import food1 from '../assets/img/food_1.jpg';
import food2 from '../assets/img/food_2.jpg';
import drink1 from '../assets/img/drink_1.jpg';
import drink2 from '../assets/img/drink_2.jpg';
import desert1 from '../assets/img/desert_1.jpg';
import desert2 from '../assets/img/desert_2.jpg';

function Specials() {
    return (
        <div>
            <Special key="1" pic={food1} dish="Nachos" desc="Cheese, onions, tomotoes."/>
            <Special key="2" pic={food2} dish="Tacos" desc="Chicken or beef with your choice of side"/>
        </div>
    );
}

export default Specials;