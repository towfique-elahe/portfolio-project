// dropdown button starts
function dropDown() {
    document.getElementById("menuContent").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.menu-button')) {
        var dropdowns = document.getElementsByClassName("menu-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
// dropdown button ends

// dark light toggle
function darkToggle() {
    // sections
    const mode = document.getElementsByClassName("dark");
    for (let i = 0; i < mode.length; i++) {
        mode[i].classList.toggle("light");
    }
    // toggle
    document.getElementById("active").classList.toggle("activeMove");
    document.getElementById("sun").classList.toggle("iconDark");
    document.getElementById("moon").classList.toggle("iconLight");
}