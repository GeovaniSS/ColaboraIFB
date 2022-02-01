const externalSystems = document.querySelectorAll('.external-card')

for(let i = 0; i < externalSystems.length; i++) {
    externalSystems[i].addEventListener('click', openPage)

    function openPage() {
        switch(i) {
            case 0:
                window.open('https://nead.ifb.edu.br/', "_blank")
                break
    
            case 1:
                window.open('https://portaldoestudante.ifb.edu.br/', "_blank")
                break
    
            case 2:
                window.open('https://plataforma.bvirtual.com.br/', "_blank")
                break
    
            case 3:
                window.open('https://www.gmail.com/', "_blank")
                break
        }
    }
}