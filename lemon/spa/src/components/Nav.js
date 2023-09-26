import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./Homepage";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import Booking from "./Booking";
import About from "./About";

function Nav() {
    return (

        <Routes>
            <Route path="/" element={<Homepage/>}></Route>
            <Route path="/specials" element={<Specials/>}></Route>
            <Route path="/specials" element={<Specials/>}></Route>
            <Route path="/testimonials" element={<Testimonials/>}></Route>
            <Route path="/booking" element={<Booking/>}></Route>
            <Route path="/about" element={<About/>}></Route>
        </Routes>
        // <nav>
        //     <ul>
        //         <li><a href="#" onclick="showTab('home')">Home</a></li>
        //         <li><a href="#" onclick="showTab('menu')">Menu</a></li>
        //         <li><a href="#" onclick="showTab('about')">About</a></li>
        //         <li><a href="mailto:example@example.com">Email</a></li>
        //     </ul>
        // </nav>
    );
}

export default Nav;