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

for (let i = 0; i < couseCardsLength; i++) {
    courseCards[i].addEventListener('click', acessarCursos)
    function acessarCursos() {
        switch(i) {
            case 0:
                window.open('http://127.0.0.1:5500/views/rdc.html', "_self")
                break

            case 1:
                window.open('http://127.0.0.1:5500/views/ldp.html', "_self")
                break
                
            case 2:
                window.open('http://127.0.0.1:5500/views/cpi.html', "_self")
                break
        }
    }
}

/*======================================= CALENDÁRIO ======================================== */
const monthText = document.querySelector('.calendar-month h3')
const weekDays = document.querySelector('.calendar-week')
const monthDays = document.querySelector('.calendar-day')

/*============ Month =============*/
const months = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]

for (let i in months) {
    if (i == new Date().getMonth()) {
        monthText.innerHTML = months[i]
    }
}

/*============ Week =============*/
const week = ["D", "S", "T", "Q", "Q", "S", "S"]

for (let i in week) {
    weekDays.innerHTML += `<div>${week[i]}<div>`
}

/*============ Days =============*/
let days = ''

for (let i = 1; i <= 31; i++) {
    if (i == new Date().getDate()) {
        days = `<div class="today">${i}<div>`
        monthDays.innerHTML += days
    }
    else {
        days = `<div>${i}<div>`
        monthDays.innerHTML += days
    }
}

/*============ Previous Month e Next Month=============*/

document.querySelector('.calendar-month span:first-child').addEventListener('click', () => {
    monthText.innerHTML = months[new Date().getMonth() - 1]
 })

document.querySelector('.calendar-month span:last-child').addEventListener('click', () => {
    monthText.innerHTML = months[new Date().getMonth() + 1]
})



/*======================================== AULAS SÍNCRONAS ======================================== */

/*================== TODAY CLASS =======================*/
const todayClass = document.querySelector('.aulas > h5') 
const weekClass = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]

for (let i in weekClass) {
    if (i == new Date().getDay()) {
        todayClass.innerHTML = `${weekClass[i]},`
    }
}

for (let i = 1; i <= 31; i++) {
    if (i == new Date().getDate()) {
        todayClass.innerHTML += ` ${i} de `
    }
}

for (let i in months) {
    if (i == new Date().getMonth()) {
        todayClass.innerHTML += months[i]
    }
}


/*================== CLASS LINK =======================*/
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
