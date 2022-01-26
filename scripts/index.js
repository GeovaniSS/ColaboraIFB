let btnEntrar = document.querySelector('input[name="btn-entrar"]')

function Login() {
    let email = document.querySelector('input[type="email"]')
    let senha = document.querySelector('input[type="password"]')

    if (email.value === '' || senha.value === '') {
        window.alert('[ERRO] Digite o e-mail e a senha')
    }

    if (email.value != '@estudante.ifb.edu.br') {
        window.alert('[ERRO] Utilize o e-mail institucional do IFB')
    }
}

btnEntrar.addEventListener('click', Login)