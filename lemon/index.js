// The difference between style.visibility and style.display:
// * visibility:hidden renders the tag, but isn't seen on the page.
// * style.display doesn't render the tag.
function showNav(id) {
    if (id == "about") {
        document.getElementById("menu").style.display = "none";
        document.getElementById("about").style.display = "block";
        document.getElementById("contact").style.display = "none";
    } else if (id == "contact") {
        document.getElementById("menu").style.display = "none";
        document.getElementById("about").style.display = "none";
        document.getElementById("contact").style.display = "flex";
    } else { // main food menu
        document.getElementById("menu").style.display = "grid";
        document.getElementById("about").style.display = "none";
        document.getElementById("contact").style.display = "none";
    }
    
}