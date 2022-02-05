const currentMonth = document.querySelector('.current-month')
const weekDays = document.querySelector('.week')
const monthDays = document.querySelector('.days')
const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
const week = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"]

/*============= CURRENT MONTH ============ */
for (let i in months) {
    if (i == new Date().getMonth()) {
        currentMonth.innerHTML = `${months[i]} ${new Date().getFullYear()}`
    }
}
/*================ WEEK DAYS ================ */
for (let i in week) {
    weekDays.innerHTML += `<div>${week[i]}</div>`
}
/*================ MONTH DAYS ================ */
for (let i = 1; i <= 31; i++) {
    if (i == new Date().getDate()) {
        monthDays.innerHTML += `<div class="today">${i} <span class ="course">Construção de Páginas</span> <span class="task">Projeto Final</span></div>`
    }
    else {
        switch (i) {
            case 2: 
                monthDays.innerHTML += `<div>${i} <span class ="course">Redes de Computadores</span> <span class="task">Exame Final</span></div>`
                break

            case 3:
                monthDays.innerHTML += `<div>${i} <span class ="course">Lógica de Programação</span> <span class="task">2° Prova</span></div>`
                break

            case 4: 
                 monthDays.innerHTML += `<div>${i} <span class ="course">Computação</span> <span class="task">Prova de IaC</span></div>`
                 break

            case 5: 
                 monthDays.innerHTML += `<div>${i} <span class ="course">Construção de Páginas</span> <span class="task">Exame Final</span></div>`
                 break

            case 6:
                 monthDays.innerHTML += `<div>${i} <span class ="course">Metodologia Científica</span> <span class="task">Trabalho Final</span></div>`
                 break

            default: 
                monthDays.innerHTML += `<div>${i}</div>`
                break
        }
    }
}

/*================ PREVIOUS MONTH E NEX MONTH ================ */
let actualMonth = new Date().getMonth()
document.querySelector('.navigate-month span:first-child').addEventListener('click', () => {
    actualMonth--
    currentMonth.innerHTML = `${months[actualMonth]} ${new Date().getFullYear()}`
})

document.querySelector('.navigate-month span:last-child').addEventListener('click', () => { 
    actualMonth++
    currentMonth.innerHTML = `${months[actualMonth]} ${new Date().getFullYear()}`
})

/*================ CALENDAR OPTIONS ================ */
const calendarOptions = document.querySelectorAll('.calendar-options span')

for (let i = 0; i < calendarOptions.length; i++) {
    calendarOptions[i].addEventListener('click', () => {
        calendarOptions[i].classList.add('active')
    })
}