let order = [];
let clickedOrder = [];
let score = 0;

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//cria ordem aleatória de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//acender a próxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number -250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//checar se os botões clicados são os mesmo da ordem gerada no jogo
let checkOrder = () => {
    for (let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

//função para o clique do user
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
}

//função que retorna o clique do user

let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if (color == 1) {
        return red;
    }else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

//função para o próximo nível do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//função para o fim do jogo
let gameOver = () => {
    alert(`Sua pontuação foi: ${score -1}!\nVocê perdeu o jogo!\nClique em OK para iniciar novamente`)
    order = [];
    clickedOrder = [];

    playGame();
}

//funcção para iniciar o jogo
let playGame = () => {
    alert('Bem vindo ao Gênesis! Iniciando um novo jogo!');
    score = 0 ;

    nextLevel();
}

//eventos de clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//iniciar o jogo
playGame();







