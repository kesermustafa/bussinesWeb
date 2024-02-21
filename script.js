// Get the navigation bar element
const nav = document.querySelector('.nav');

// Add the scrolling event listener
window.addEventListener('scroll', () => {
    // Check if the scrolled distance is greater than the navigation bar height
    const isScrolled = window.scrollY > nav.offsetHeight;

    // Toggle the 'scrolled' class conditionally
    nav.classList.toggle('scrolled', isScrolled);
});