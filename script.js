const todos = document.querySelectorAll('.box')
const btnSorteio = document.querySelector('.container-random button')
const resultado = document.querySelector('.h2-result')
let selecionado = '', verifica = false;
for (let i = 0; i < todos.length; i++) {
    todos[i].onclick = () => {
        deselecionar();
        selecionado = todos[i];
        verifica = true;
        todos[i].classList.add('selected');
    }
}
function deselecionar() {
    for (const i of todos) {
        i.classList.remove('selected')
    }
}
btnSorteio.onclick = () => {
    if (verifica) {
        const teste = todos[Math.floor(Math.random() * 4)]
        teste.classList.add('selected');
        deselecionar();

        if (teste === selecionado) {
            resultado.textContent = `${'PARABÉNS VOCÊ ACERTOU!'}`
        } else {
            resultado.textContent = `${'TENTE OUTRA VEZ!'}`
        }
    } else {
        resultado.textContent = `${'SELECIONE UMA COR'}`
    }
    setTimeout(() => {
        deselecionar();
        verifica = false;
        resultado.textContent = `${''}`
    }, 2000)
}
