// Get the navigation bar element
const nav = document.querySelector('.nav');

// Add the scrolling event listener
window.addEventListener('scroll', () => {
    // Check if the scrolled distance is greater than the navigation bar height
    const isScrolled = window.scrollY > nav.offsetHeight;

    // Toggle the 'scrolled' class conditionally
    nav.classList.toggle('scrolled', isScrolled);
});


let menu = document.getElementById("bar");

let items = document.getElementById("navbar");

items.style.right = "-360px";

menu.onclick = function () {
    if(items.style.right == "-360px"){
        items.style.right = "0"
    }
    else{
        items.style.right = "-360px";
    }
}
