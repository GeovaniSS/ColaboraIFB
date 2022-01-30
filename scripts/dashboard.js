/*======================================== SISTEMAS EXTERNOS ======================================== */
const externalCardLink = document.querySelectorAll('.external-card')
const cardsLength = externalCardLink.length

for (let i = 0; i < cardsLength; i++) {
    externalCardLink[i].addEventListener('click', acessarExterno)
    function acessarExterno() {
        switch (i) {
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

/*======================================== CURSOS ================================================*/
const courseCards = document.querySelectorAll('.course-card')
const couseCardsLength = courseCards.length

for (i = 0; i < couseCardsLength; i++) {
    courseCards[i].addEventListener('click', acessarCursos)
    function acessarCursos() {
        switch(i) {
            case 0:
                window.open('http://127.0.0.1:5500/views/rdc.html')
                break

            case 1:
                window.open('http://127.0.0.1:5500/views/cpi.html')
                break
                
            case 2:
                window.open('http://127.0.0.1:5500/views/rdc.html')
                break
        }
    }
}


courseCards.addEventListener('click', acessarCurso)

/*======================================== AULAS SÍNCRONAS ======================================== */
const aulaSelecionada = document.querySelector('.class-option') //Div da aula do dia
const informaçõesdaAula = document.querySelector('.class-active') //Div da aula clicada
const abrirAula = document.querySelector('.class-active a')

function opçõesAula() {
    if (informaçõesdaAula.style.display == 'none') {
        informaçõesdaAula.style.display = 'flex'
    }
    else {
        informaçõesdaAula.style.display = 'none'
    }
}

function acessarAula() {
    informaçõesdaAula.style.display = 'none'
}

aulaSelecionada.addEventListener('click', opçõesAula)
abrirAula.addEventListener('click', acessarAula)
