// Nav (the component provides navigational links, should be in synch with Main component)

function Nav() {
    return (
        <nav>
            <ul>
                <li><a href="/">Main</a></li>
                <li><a href="/menu" >Menu</a></li>
                <li><a href="/specials">Specials</a></li>
                <li><a href="/testimonials">Testimonials</a></li>
                <li><a href="/booking">Booking</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="mailto:example@example.com">Email</a></li>
            </ul>
        </nav>
    );
}

export default Nav;