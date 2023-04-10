let q = new Array();
let turn = 0;
let xIsPlaying;

const game = document.getElementById('game');
const winScreen = document.getElementById('win-screen');
const gameboardDefault = `<div id="gameboard">
<div onclick="makePlay(1)" id="q1" class="unsigned"></div>
<div onclick="makePlay(2)" id="q2" class="unsigned"></div>
<div onclick="makePlay(3)" id="q3" class="unsigned"></div>
<div onclick="makePlay(4)" id="q4" class="unsigned"></div>
<div onclick="makePlay(5)" id="q5" class="unsigned"></div>
<div onclick="makePlay(6)" id="q6" class="unsigned"></div>
<div onclick="makePlay(7)" id="q7" class="unsigned"></div>
<div onclick="makePlay(8)" id="q8" class="unsigned"></div>
<div onclick="makePlay(9)" id="q9" class="unsigned"></div>
</div>`;

winScreen.style.display = 'none';

const pickQ = () =>{
    if(q.length > 1){
        for(var i = 0; i<9; i++){
            q.pop();
        }
    }
    for(var i = 0; i<9; i++){
        console.log('Recebendo item no vetor ' + document.getElementById('q'+(i+1)));
        q.push(document.getElementById('q'+(i+1)));
    }
    console.log('O vetor possui ' + q.length + ' alocações.');
    console.log('O vetor é: ');
    console.log(q);
}

let fillQ = (objectToFill, typeOfTheFill, ident) => {
    if(typeOfTheFill == 'x'){
        console.log('Preenchendo o quadrante com X');
        objectToFill.outerHTML = `<div id="q${ident}" class="signedX">X</div>`;
    } else{
        console.log('Preenchendo o quadrante com O');
        objectToFill.outerHTML = `<div id="q${ident}" class="signedO">O</div>`;
    }
}

let changeTurn = () =>{
    const output = document.getElementById('out-turn');

    let x =  '<h1 id="out-turn">Vez do <span>X</span></h1>';
    let o =  '<h1 id="out-turn">Vez do <b>O</b></h1>';

    if(turn%2 == 0){
        output.outerHTML = x;
        xIsPlaying = true;
    } else{
        output.outerHTML = o;
        xIsPlaying = false;
    }
    console.log('O turno agora é ' + turn);
}

function Win(whoWin){
    game.style.display = 'none';
    winScreen.style.display = 'flex';
    const winner = document.getElementById('winner');

    if(whoWin == 'x'){
        winner.outerHTML = '<h1 id="winner">O <span>X</span> ganhou!</h1>'
    } else{
        winner.outerHTML = '<h1 id="winner">O <b>O</b> ganhou!</h1>';
    }
}

function checkWin(){
    console.log('Checando se alguem ganhou');
    pickQ();

    // X AREA
    if(q[0].className == 'signedX' && q[1].className == 'signedX' && q[2].className == 'signedX'){ // Horizontal X
        console.log('Horizontal 1');
        Win('x');
    } else if(q[3].className == 'signedX' && q[4].className == 'signedX' && q[5].className == 'signedX'){ // Horizontal X
        console.log('Horizontal 2');
        Win('x');
    } else if(q[6].className == 'signedX' && q[7].className == 'signedX' && q[8].className == 'signedX'){ // Horizontal X
        console.log('Horizontal 3');
        Win('x');
    } else if(q[0].className == 'signedX' && q[3].className == 'signedX' && q[6].className == 'signedX'){ // Vertical X
        console.log('Vertical 1');
        Win('x');
    } else if(q[1].className == 'signedX' && q[4].className == 'signedX' && q[7].className == 'signedX'){ // Vertical X
        console.log('Vertical 2');
        Win('x');
    } else if(q[2].className == 'signedX' && q[5].className == 'signedX' && q[8].className == 'signedX'){ // Vertical X
        console.log('Vertical 3');
        Win('x');
    } else if(q[0].className == 'signedX' && q[4].className == 'signedX' && q[8].className == 'signedX'){ // Diagonal X
        console.log('Diagonal 1');
        Win('x');
    } else if(q[2].className == 'signedX' && q[4].className == 'signedX' && q[6].className == 'signedX'){ // Diagonal X
        console.log('Diagonal 2');
        Win('x');
    }

    // O AREA
    if(q[0].className == 'signedO' && q[1].className == 'signedO' && q[2].className == 'signedO'){ // Horizontal O
        console.log('Horizontal 1');
        Win('o');
    } if(q[3].className == 'signedO' && q[4].className == 'signedO' && q[5].className == 'signedO'){ // Horizontal O
        console.log('Horizontal 2');
        Win('o');
    } if(q[6].className == 'signedO' && q[7].className  == 'signedO' && q[8].className == 'signedO'){ // Horizontal O
        console.log('Horizontal 3');
        Win('o');
    } if(q[0].className == 'signedO' && q[3].className == 'signedO' && q[6].className == 'signedO'){ // Vertical O
        console.log('Vertical 1');
        Win('o');
    } if(q[1].className == 'signedO' && q[4].className == 'signedO' && q[7].className == 'signedO'){ // Vertical O
        console.log('Vertical 2');
        Win('o');
    } if(q[2].className == 'signedO' && q[5].className == 'signedO' && q[8].className == 'signedO'){ // Vertical O
        console.log('Vertical 3');
        Win('o');
    } if(q[0].className == 'signedO' && q[4].className == 'signedO' && q[8].className == 'signedO'){ // Diagonal O
        console.log('Diagonal 1');
        Win('o');
    } if(q[2].className == 'signedO' && q[4].className == 'signedO' && q[6].className == 'signedO'){ // Diagonal O
        console.log('Diagonal 2');
        Win('o');
    }
}

function makePlay(id){
    let p = id - 1;

    if(xIsPlaying == true){
        fillQ(q[p], 'x', id);
        turn++;
        changeTurn();
    } else{
        fillQ(q[p], 'o', id);
        turn++;
        changeTurn();
    }

    checkWin();
}

function restartGame(){
    console.log('tentando reiniciar o jogo');
    // Dar reset no turn
    turn = 0;

    // Acionar novamente o display na tela
    let gameboard = document.getElementById('gameboard');

    game.style.display = 'flex';
    winScreen.style.display = 'none';
    // Resetar butões na tela
    gameboard.outerHTML = gameboardDefault;

    // chamar funções PICKQ e CHANGETURN novamente
    pickQ();
    changeTurn();
}

onload(pickQ(), changeTurn());