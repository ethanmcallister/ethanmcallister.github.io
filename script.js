function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    // when we click, it adds/removes the open class
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}