/*================ MENU ACTIVE ================= */
const activePage = location.href; //Objeto location com o método href (link da página atual)
const menuItems = document.querySelectorAll('div.sidebar a') //Referência dos items do menu
const menuLenght = menuItems.length //Comprimento da nodelist menuItems (6)

for (let i = 0; i < menuLenght; i++){
    if (menuItems[i].href === activePage) {
        menuItems[i].classList.add('active')
    }
}

