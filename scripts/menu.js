/*================ MENU ACTIVE ================= */
const activePage = location.href; 
const menuItems = document.querySelectorAll('.sidebar a')
const menuLength = menuItems.length

for (let i = 0; i < menuLength; i++) {
    if (menuItems[i].href === activePage) {
        menuItems[i].classList.toggle('active')
    }
}
