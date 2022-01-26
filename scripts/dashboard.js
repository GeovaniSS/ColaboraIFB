/*======================================== SISTEMAS EXTERNOS ======================================== */
var Nead = document.getElementsByClassName('external-card')[0]
var Portal = document.getElementsByClassName('external-card')[1]
var Biblioteca = document.getElementsByClassName('external-card')[2]
var Email = document.getElementsByClassName('external-card')[3]

function acessarNead() {
    window.open('https://nead.ifb.edu.br/', "_blank")
}

function acessarPortal() {
    window.open('https://portaldoestudante.ifb.edu.br/', "_blank")
}

function acessarBiblioteca () {
    window.open('https://plataforma.bvirtual.com.br/', "_blank")
}

function acessarEmail () {
    window.open('https://www.gmail.com/', "_blank")
}

Nead.addEventListener('click', acessarNead)
Portal.addEventListener('click', acessarPortal)
Biblioteca.addEventListener('click', acessarBiblioteca)
Email.addEventListener('click', acessarEmail)


/*======================================== AULAS SÍNCRONAS ======================================== */
var aulaSelecionada = document.querySelector('div.class-option') //Div da aula do dia
var informaçõesdaAula = document.querySelector('div.class-active') //Div da aula clicada

function Opção() {
    informaçõesdaAula.style.display = 'flex'
}

function ClicarNovamente() {
    informaçõesdaAula.style.display = 'none'
}

aulaSelecionada.addEventListener('click', Opção, ClicarNovamente)
