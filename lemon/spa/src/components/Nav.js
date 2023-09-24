

function Nav() {
    return (
        <nav>
            <ul>
                <li><a href="#" onclick="showTab('home')">Home</a></li>
                <li><a href="#" onclick="showTab('menu')">Menu</a></li>
                <li><a href="#" onclick="showTab('about')">About</a></li>
                <li><a href="mailto:example@example.com">Email</a></li>
            </ul>
        </nav>
    );
}

export default Nav;