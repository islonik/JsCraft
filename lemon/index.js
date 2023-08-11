// The difference between style.visibility and style.display is when using visibility:hidden unlike display:none, the tag is not visible, but space is allocated for it on the page. The tag is rendered, it just isn't seen on the page.
function showNav(id) {
    if (id == "about") {
        // document.getElementById("menu").style.visibility = "hidden";
        // document.getElementById("about").style.visibility = "visible";
        // document.getElementById("contact").style.visibility = "hidden";

        document.getElementById("menu").style.display = "none";
        document.getElementById("about").style.display = "block";
        document.getElementById("contact").style.display = "none";
    } else if (id == "contact") {
        document.getElementById("menu").style.display = "none";
        document.getElementById("about").style.display = "none";
        document.getElementById("contact").style.display = "flex";
    } else { // menu
        document.getElementById("menu").style.display = "grid";
        document.getElementById("about").style.display = "none";
        document.getElementById("contact").style.display = "none";
    }
    
}