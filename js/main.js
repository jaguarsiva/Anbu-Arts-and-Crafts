
// Navbar
const hamburger = document.querySelector(".hamburger");
const menubar = document.querySelector(".menu-links");

hamburger.addEventListener("click", function() {
    if( menubar.className === "menu-links" )
    {
        hamburger.classList.add("is-active");
        menubar.className = "menu-links opened menu-open-anm";
        document.querySelector("html").classList.add("no-scroll");
    }
    else
    {
        hamburger.classList.remove("is-active");
        menubar.className = "menu-links opened menu-close-anm";
        setTimeout(() => {
            menubar.className = "menu-links";
        },400);
        document.querySelector("html").classList.remove("no-scroll");
    }
});

document.querySelectorAll(".menu-links li a").forEach( item => {
    item.addEventListener("click", () => {
        if( menubar.className === "menu-links opened menu-open-anm" )
        {
            hamburger.classList.remove("is-active");
            menubar.className = "menu-links opened menu-close-anm";
            setTimeout(() => {
                menubar.className = "menu-links";
            },400);
            document.querySelector("html").classList.remove("no-scroll");
        }
    });
});