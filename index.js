const formulario = document.querySelectorAll('.inputDados')
const mensagemCampoObrigatorio = document.querySelectorAll('.campoObrigatorio')
const botaoEnviar = document.getElementById('botaoEnviar')

botaoEnviar.addEventListener('click', () => {
    formulario.forEach((inputDeDados, indice) => {
        if (mensagemCampoObrigatorio[indice].classList.contains('mostrar')) mensagemCampoObrigatorio[indice].classList.remove('mostrar')

        if (!inputDeDados.value) {
            inputDeDados.classList.add('naoValidado');
            mensagemCampoObrigatorio[indice].classList.add('mostrar')
        }
        else inputDeDados.classList.add('validado')
    });
});