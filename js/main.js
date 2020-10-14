
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

// Observer

const insta = document.querySelector("#insta");
const locate = document.querySelector("#locate");
const momemt = document.querySelector("#moment");
const details = { };

const observer = new IntersectionObserver( (entries,observer) => {
    entries.forEach( entry => {
        if( entry.target === insta )
        {
            insta.querySelector(".insta-circle").classList.toggle("slide-left-in");
            insta.querySelector(".insta-text").classList.toggle("slide-left-in");
        }
        else if( entry.target === locate )
        {
            locate.querySelector(".locate-circle").classList.toggle("slide-right-in");
            locate.querySelector(".locate-text").classList.toggle("slide-right-in");
            locate.querySelector(".locate-map").classList.toggle("scale-up");
        }
        else if( entry.target === moment )
        {
            momemt.querySelector(".left").classList.toggle("slide-left-in");
            momemt.querySelector(".right").classList.toggle("slide-right-in");
            momemt.querySelector(".container").classList.toggle("fade-in");
        }
    });
} , details );

observer.observe(insta);
observer.observe(locate);
observer.observe(momemt)