let btnEntrar = document.querySelector('input[name="btn-entrar"]')

function Login() {
    let email = document.querySelector('input[type="email"]')
    let senha = document.querySelector('input[type="password"]')

    if (email.value === '' || senha.value === '') {
        window.alert('[ERRO] Digite o e-mail e a senha')
    }
    else {
        window.open('/views/dashboard.html', '_self')
    }
}

btnEntrar.addEventListener('click', Login)