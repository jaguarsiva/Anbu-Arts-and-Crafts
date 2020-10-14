
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


// Gallery

const galleryBtn = document.querySelector("#gallery button");

galleryBtn.addEventListener("click", () => { 
    document.querySelector(".gallery-box").classList.toggle("showing-more");
    if( galleryBtn.innerHTML === "Show More" )
        document.querySelector(".gallery-box").scrollIntoView(true);
    galleryBtn.innerHTML = galleryBtn.innerHTML === "Show More" ? "Show Less" : "Show More";
});


// Observer

const insta = document.querySelector("#insta");
const locate = document.querySelector("#locate");
const details = { };

const instaObserver = new IntersectionObserver( (entries,instaObserver) => {
    entries.forEach( entry => {
        if( entry.isIntersecting )
        {
            insta.querySelector(".insta-circle").classList.add("slide-left-in");
            insta.querySelector(".insta-text").classList.add("slide-left-in");
            insta.querySelector(".embed-1").classList.add("slide-right-in");
            insta.querySelector(".embed-2").classList.add("slide-right-in");
        }
        else
        {
            insta.querySelector(".insta-circle").classList.remove("slide-left-in");
            insta.querySelector(".insta-text").classList.remove("slide-left-in");
            insta.querySelector(".embed-1").classList.remove("slide-right-in");
            insta.querySelector(".embed-2").classList.remove("slide-right-in");
        }
    });
} , details );

const locateObserver = new IntersectionObserver( (entries, locateObserver) => {
    entries.forEach( entry => {
        if( entry.isIntersecting )
        {
            locate.querySelector(".locate-circle").classList.add("slide-right-in");
            locate.querySelector(".locate-text").classList.add("slide-right-in");
            locate.querySelector(".maps-bg").classList.add("slide-left-in");
            locate.querySelector(".locate-map").classList.add("scale-up");
        }
        else
        {
            locate.querySelector(".locate-circle").classList.remove("slide-right-in");
            locate.querySelector(".locate-text").classList.remove("slide-right-in");
            locate.querySelector(".maps-bg").classList.remove("slide-left-in");
            locate.querySelector(".locate-map").classList.remove("scale-up");
        }
    });
} , details );

instaObserver.observe(insta);
locateObserver.observe(locate);