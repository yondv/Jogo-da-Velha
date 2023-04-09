let q = new Array();
let turn = 2;
let xIsPlaying;

const game = document.getElementById('game');
const winScreen = document.getElementById('win-screen');
winScreen.style.display = 'none';

const pickQ = () =>{
    for(var i = 0; i<9; i++){
        q.pop();
    }
    for(var i = 0; i<9; i++){
        console.log('Recebendo item no vetor ' + document.getElementById('q'+(i+1)))
        q.push(document.getElementById('q'+(i+1)));
    }
    console.log('O vetor possui ' + q.length + ' alocações.');
    console.log('O vetor é: ');
    console.log(q);
}

let fillQ = (objectToFill, typeOfTheFill, ident) => {
    if(typeOfTheFill == 'x'){
        console.log('Preenchendo o quadrante com X');
        objectToFill.className = 'signedX';
        objectToFill.textContent = 'X'
    } else{
        console.log('Preenchendo o quadrante com O');
        objectToFill.className = 'signedO';
        objectToFill.textContent = 'O';
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
        winner.textContent = 'O [X] venceu!';
    } else{
        winner.textContent = 'O [O] venceu!';
    }
}

function checkWin(){
    console.log('Checando se alguem ganhou');
    pickQ();

    // X AREA
    if((q[0].className == 'signedX' && q[1].className == 'signedX' && q[2].className == 'signedX') == true){ // Horizontal X
        Win('x');
    } if((q[3].className == 'signedX' && q[4].className == 'signedX' && q[5].className == 'signedX') == true){ // Horizontal X
        Win('x');
    } if((q[6].className && q[7].className && q[8].className == 'signedX') == true){ // Horizontal X
        Win('x');
    } if((q[0].className == 'signedX' && q[3].className == 'signedX' && q[6].className == 'signedX') == true){ // Vertical X
        Win('x');
    } if((q[1].className == 'signedX' && q[4].className == 'signedX' && q[7].className == 'signedX') == true){ // Vertical X
        Win('x');
    } if((q[2].className == 'signedX' && q[5].className == 'signedX' && q[8].className == 'signedX') == true){ // Vertical X
        Win('x');
    } if((q[0].className == 'signedX' && q[4].className == 'signedX' && q[8].className == 'signedX') == true){ // Diagonal X
        Win('x');
    } if((q[2].className == 'signedX' && q[4].className == 'signedX' && q[6].className == 'signedX') == true){ // Diagonal X
        Win('x');
    }

    // O AREA
    if(q[0].className == 'signedO' && q[1].className == 'signedO' && q[2].className == 'signedO'){ // Horizontal O
        Win('o');
    } if(q[3].className == 'signedO' && q[4].className == 'signedO' && q[5].className == 'signedO'){ // Horizontal O
        Win('o');
    } if(q[6].className == 'signedO' && q[7].className  == 'signedO' && q[8].className == 'signedO'){ // Horizontal O
        Win('o');
    } if(q[0].className == 'signedO' && q[3].className == 'signedO' && q[6].className == 'signedO'){ // Vertical O
        Win('o');
    } if(q[1].className == 'signedO' && q[4].className == 'signedO' && q[7].className == 'signedO'){ // Vertical O
        Win('o');
    } if(q[2].className == 'signedO' && q[5].className == 'signedO' && q[8].className == 'signedO'){ // Vertical O
        Win('o');
    } if(q[0].className == 'signedO' && q[4].className == 'signedO' && q[8].className == 'signedO'){ // Diagonal O
        Win('o');
    } if(q[2].className == 'signedO' && q[4].className == 'signedO' && q[6].className == 'signedO'){ // Diagonal O
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

onload(pickQ(), changeTurn());