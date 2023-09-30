// Menu (contains food, beverages and deserts)
import food1 from '../assets/img/food_1.jpg';
import food2 from '../assets/img/food_2.jpg';
import drink1 from '../assets/img/drink_1.jpg';
import drink2 from '../assets/img/drink_2.jpg';
import desert1 from '../assets/img/desert_1.jpg';
import desert2 from '../assets/img/desert_2.jpg';

function Menu() {
    return (
        <div id="menu" >
            <div class="menu">
                <div class="intro-menu">
                    <img src={food1} />
                    <img src={food2} />
                </div>
                <section class="home-menu">
                    <h2>FOOD MENU</h2>
                    <h3>Entrees, mains, and handhelds</h3>
                    <ul>
                        <li>
                            <span class="dish">Nachos</span>
                            <span class="price">$12</span>
                            <span class="description">Cheese, onions, tomotoes.</span>
                        </li>
                        <li>
                            <span class="dish">Tacos</span>
                            <span class="price">$12</span>
                            <span class="description">Chicken or beef with your choice of side</span>
                        </li>
                        <li>
                            <span class="dish">Chicken rice bowl</span>
                            <span class="price">$16</span>
                            <span class="description">
                                Brown rice, and veggies, served with choice or sauce 
                            </span>
                        </li>
                        <li>
                            <span class="dish">Grilled chicken</span>
                            <span class="price">$15</span>
                            <span class="description">
                                Juicy grilled chicken served with choice of sauce
                            </span>
                        </li>
                        <li>
                            <span class="dish">Steak and fired beans</span>
                            <span class="price">$15</span>
                            <span class="description">Steak and your choice of side</span>
                        </li>
                        <li>
                            <span class="dish">Burrito</span>
                            <span class="price">$12</span>
                            <span class="description">Your choice of beef or chicken</span>
                        </li>
                    </ul>
                </section>
            </div>
            <div class="menu">
                <div class="intro-menu">
                    <img src={drink1} />
                    <img src={drink2} />
                </div>
                <section class="home-menu">
                    <h2>DRINK MENU</h2>
                    <h3>Sprits, wine, and beer</h3>
                    <ul>
                        <li>
                            <span class="dish">Vodka 1oz</span>
                            <span class="price">$6</span>
                            <span class="description">VODKA and choice of juice or soda</span>
                        </li>
                        <li>
                            <span class="dish">Rum 1oz</span>
                            <span class="price">$6</span>
                            <span class="description">RUM and choice of juice or soda</span>
                        </li>
                        <li>
                            <span class="dish">Whisky 1oz</span>
                            <span class="price">$6</span>
                            <span class="description">Whisky and choice of juice or soda</span>
                        </li>
                        <li>
                            <span class="dish">Tequila 1oz</span>
                            <span class="price">$6</span>
                            <span class="description">Tequila served with juice or soda</span>
                        </li>
                        <li>
                            <span class="dish">Red wine</span>
                            <span class="price">$8</span>
                            <span class="description">8oz Red wine, ask server for our wine selection</span>
                        </li>
                        <li>
                            <span class="dish">White wine</span>
                            <span class="price">$8</span>
                            <span class="description">8oz white wine, ask server for our wine selection</span>
                        </li>
                        <li>
                            <span class="dish">Sparkling wine</span>
                            <span class="price">$12</span>
                            <span class="description">8oz sparking wine glass of your choice</span>
                        </li>
                        <li>
                            <span class="dish">Domestic or foreign beer</span>
                            <span class="price">$6 - $8</span>
                            <span class="description">Domestic or foreign beer of you choice</span>
                        </li>
                    </ul>
                </section>
            </div>
            <div class="menu">
                <div class="intro-menu">
                    <img src={desert1} />
                    <img src={desert2} />
                </div>
                <section class="home-menu">
                    <h2>DESERT MENU</h2>
                    <h3>Deserts and sweets</h3>
                    <ul>
                        <li>
                            <span class="dish">Chocolate cake</span>
                            <span class="price">$7</span>
                            <span class="description">Loaded Chocolate cake with fudge topping</span>
                        </li>
                        <li>
                            <span class="dish">NY cheesecake</span>
                            <span class="price">$12</span>
                            <span class="description">NY cheesecake toped with strawberry topping</span>
                        </li>
                        <li>
                            <span class="dish">Apple pie</span>
                            <span class="price">$6</span>
                            <span class="description">Warm apple pie tooped with icecream</span>
                        </li>
                        <li>
                            <span class="dish">Churros</span>
                            <span class="price">$7</span>
                            <span class="description">Pancake mix, water, oil, sugar, cinnamon</span>
                        </li>
                        <li>
                            <span class="dish">Sopaipillas</span>
                            <span class="price">$7</span>
                            <span class="description">Light, crispy pastry puffs, sopaipillas are a sweet way to round out a spicy meal</span>
                        </li>
                        <li>
                            <span class="dish">Creamy Caramel Flan</span>
                            <span class="price">$12</span>
                            <span class="description">A small slice of this impressively rich, creamy, caramel flan dessert goes a long way</span>
                        </li>
                        <li>
                            <span class="dish">Shortcut Tres Leches Cake</span>
                            <span class="price">$12</span>
                            <span class="description">My mom's favorite cake is tres leches, a butter cake soaked in three kinds of milk</span>
                        </li>
                        <li>
                            <span class="dish">Pressure-Cooker Pumpkin Flans</span>
                            <span class="price">$14</span>
                            <span class="description">This silky, smooth dessert captures the essence and elegance of fall</span>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default Menu;