//Prevenindo o envio padrão do formulário:
document.querySelector('.btn-enviar').addEventListener('click', function (event) {
  event.preventDefault();
});

//Capturando todos os campos do formulário:
const campos = document.querySelectorAll('.formulario input, .formulario textarea');


//Validando cada campo e exibindo mensagens de erro:
let formularioValido = true;

campos.forEach(campo => {
  const mensagemErro = campo.nextElementSibling.querySelector('.paragrafo-vermelho');
  if (campo.value.trim() === '') {
    campo.style.border = '1px solid red';
    mensagemErro.style.display = 'block';
    formularioValido = false;
  } else {
    campo.style.border = '1px solid green';
    mensagemErro.style.display = 'none';
  }
});