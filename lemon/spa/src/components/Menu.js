// Menu (contains food, beverages and deserts)

import '../assets/css/Menu.css';

import food1 from '../assets/img/food_1.jpg';
import food2 from '../assets/img/food_2.jpg';
import drink1 from '../assets/img/drink_1.jpg';
import drink2 from '../assets/img/drink_2.jpg';
import desert1 from '../assets/img/desert_1.jpg';
import desert2 from '../assets/img/desert_2.jpg';

function Menu() {
    return (
        <div id="menu" >
            <div className="menu">
                <div className="intro-menu">
                    <img src={food1} alt="tasty food"/>
                    <img src={food2} alt="tasty food"/>
                </div>
                <section className="home-menu">
                    <h2>FOOD MENU</h2>
                    <h3>Entrees, mains, and handhelds</h3>
                    <ul>
                        <li>
                            <span className="dish">Nachos</span>
                            <span className="price">$12</span>
                            <span className="description">Cheese, onions, tomotoes.</span>
                        </li>
                        <li>
                            <span className="dish">Tacos</span>
                            <span className="price">$12</span>
                            <span className="description">Chicken or beef with your choice of side</span>
                        </li>
                        <li>
                            <span className="dish">Chicken rice bowl</span>
                            <span className="price">$16</span>
                            <span className="description">
                                Brown rice, and veggies, served with choice or sauce 
                            </span>
                        </li>
                        <li>
                            <span className="dish">Grilled chicken</span>
                            <span className="price">$15</span>
                            <span className="description">
                                Juicy grilled chicken served with choice of sauce
                            </span>
                        </li>
                        <li>
                            <span className="dish">Steak and fired beans</span>
                            <span className="price">$15</span>
                            <span className="description">Steak and your choice of side</span>
                        </li>
                        <li>
                            <span className="dish">Burrito</span>
                            <span className="price">$12</span>
                            <span className="description">Your choice of beef or chicken</span>
                        </li>
                    </ul>
                </section>
            </div>
            <div className="menu">
                <div className="intro-menu">
                    <img src={drink1} alt="cold drink"/>
                    <img src={drink2} alt="cold drink"/>
                </div>
                <section className="home-menu">
                    <h2>DRINK MENU</h2>
                    <h3>Sprits, wine, and beer</h3>
                    <ul>
                        <li>
                            <span className="dish">Vodka 1oz</span>
                            <span className="price">$6</span>
                            <span className="description">VODKA and choice of juice or soda</span>
                        </li>
                        <li>
                            <span className="dish">Rum 1oz</span>
                            <span className="price">$6</span>
                            <span className="description">RUM and choice of juice or soda</span>
                        </li>
                        <li>
                            <span className="dish">Whisky 1oz</span>
                            <span className="price">$6</span>
                            <span className="description">Whisky and choice of juice or soda</span>
                        </li>
                        <li>
                            <span className="dish">Tequila 1oz</span>
                            <span className="price">$6</span>
                            <span className="description">Tequila served with juice or soda</span>
                        </li>
                        <li>
                            <span className="dish">Red wine</span>
                            <span className="price">$8</span>
                            <span className="description">8oz Red wine, ask server for our wine selection</span>
                        </li>
                        <li>
                            <span className="dish">White wine</span>
                            <span className="price">$8</span>
                            <span className="description">8oz white wine, ask server for our wine selection</span>
                        </li>
                        <li>
                            <span className="dish">Sparkling wine</span>
                            <span className="price">$12</span>
                            <span className="description">8oz sparking wine glass of your choice</span>
                        </li>
                        <li>
                            <span className="dish">Domestic or foreign beer</span>
                            <span className="price">$6 - $8</span>
                            <span className="description">Domestic or foreign beer of you choice</span>
                        </li>
                    </ul>
                </section>
            </div>
            <div className="menu">
                <div className="intro-menu">
                    <img src={desert1} alt="super sweet desert"/>
                    <img src={desert2} alt="super sweet desert"/>
                </div>
                <section className="home-menu">
                    <h2>DESERT MENU</h2>
                    <h3>Deserts and sweets</h3>
                    <ul>
                        <li>
                            <span className="dish">Chocolate cake</span>
                            <span className="price">$7</span>
                            <span className="description">Loaded Chocolate cake with fudge topping</span>
                        </li>
                        <li>
                            <span className="dish">NY cheesecake</span>
                            <span className="price">$12</span>
                            <span className="description">NY cheesecake toped with strawberry topping</span>
                        </li>
                        <li>
                            <span className="dish">Apple pie</span>
                            <span className="price">$6</span>
                            <span className="description">Warm apple pie tooped with icecream</span>
                        </li>
                        <li>
                            <span className="dish">Churros</span>
                            <span className="price">$7</span>
                            <span className="description">Pancake mix, water, oil, sugar, cinnamon</span>
                        </li>
                        <li>
                            <span className="dish">Sopaipillas</span>
                            <span className="price">$7</span>
                            <span className="description">Light, crispy pastry puffs, sopaipillas are a sweet way to round out a spicy meal</span>
                        </li>
                        <li>
                            <span className="dish">Creamy Caramel Flan</span>
                            <span className="price">$12</span>
                            <span className="description">A small slice of this impressively rich, creamy, caramel flan dessert goes a long way</span>
                        </li>
                        <li>
                            <span className="dish">Shortcut Tres Leches Cake</span>
                            <span className="price">$12</span>
                            <span className="description">My mom's favorite cake is tres leches, a butter cake soaked in three kinds of milk</span>
                        </li>
                        <li>
                            <span className="dish">Pressure-Cooker Pumpkin Flans</span>
                            <span className="price">$14</span>
                            <span className="description">This silky, smooth dessert captures the essence and elegance of fall</span>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default Menu;