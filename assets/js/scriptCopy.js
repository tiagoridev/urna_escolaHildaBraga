// visibility: hidden;
// visibility: visible;
let title = document.querySelector('.informations-title');
let position = document.querySelector('.position');
let boxInputs = document.querySelector('.numbers');
let thanks = document.querySelector('.thanks');
let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let codigo = `${input1.value}${input2.value}`;
let candidatesName = document.querySelector('.candidates-name');
let photo = document.querySelector('.photo');
const options = document.querySelector('.orientation');
const btnsNumbers = [...document.querySelectorAll('.primary-item')]
const btnClear = document.querySelector('.btn-correct')
const btnConfirm = document.querySelector('.btn-confirm');
const btnResult = document.querySelector('.btn-result')
const btnContinue = document.querySelector('.btn-continue');
// const btnFinish = document.querySelector('.btn-finish');
let resultado = document.querySelector('.resultado');
const audio = document.querySelector('audio');

let anaVotes = +localStorage.getItem('Ana Sophia');
let rayaneVotes = +localStorage.getItem('Rayane');
let mariaVotes = +localStorage.getItem('Maria');
let deboraVotes = +localStorage.getItem('Débora');
let ruannVotes = +localStorage.getItem('Ruann');
let yasminVotes = +localStorage.getItem('Yasmin');
let monalizaVotes = +localStorage.getItem('Monaliza');
let bernardoVotes = +localStorage.getItem('Bernardo');
let miguelVotes = +localStorage.getItem('Miguel');
let pietroVotes = +localStorage.getItem('Pietro');




// ESCONDE ITENS ANTES DE INICIAR VOTAÇÃO
function btns(){
    btnContinue.style.display = 'none';
    // btnFinish.style.display = 'none';
    btnClear.style.display = 'block';
    btnConfirm.style.display = 'block';
    btnResult.style.display = 'block';
}
btnContinue.addEventListener('click', btns)

function btnsResult(){
    btnContinue.style.display = 'block';
    // btnFinish.style.display = 'none';
    btnClear.style.display = 'none';
    btnConfirm.style.display = 'none';
    btnResult.style.display = 'none';
}

btnResult.addEventListener('click', btnsResult)

function hide(){
    candidatesName.style.visibility = 'hidden';
    photo.style.visibility = 'hidden';
    options.style.visibility = 'hidden';
    btns()
}
hide()

function insert(){
    btnsNumbers.forEach((btn) => {
        btn.addEventListener('click', () => {
            if(input1.value === ''){
                // input1.classList.remove('blink');
                input1.value = +btn.textContent;
            } else if (input2.value === '') {
                // input2.classList.add('blink')
                input2.value = +btn.textContent;
            }
            updateScreen()
        })
    })
}
insert()

function show(){
    candidatesName.style.visibility = 'visible';
    photo.style.visibility = 'visible';
    options.style.visibility = 'visible';
}

// INSERI NUMERO NA TELA CLICANDO NO TECLADO



// LIMPA NUMERO DO CANDIDATO E TELA.
function clearScreen(){
    input1.value = '';
    input2.value = '';
    hide()
    thanks.classList.add('hidden');
}
btnClear.addEventListener('click', clearScreen);



// COLOCA DADOS DOS CANDIDATOS NA TELA.
function updateScreen(){    
    codigo = `${input1.value}${input2.value}`;
    switch (codigo) {
        case '20': 
            show();
            candidatesName.innerHTML = stages[0].candidate[0].name;
            photo.innerHTML = `<img src="${stages[0].candidate[0].foto[0].src}">`;
            
        break;
        case '19': 
            show();
            candidatesName.innerHTML = stages[0].candidate[1].name;
            photo.innerHTML = `<img src="${stages[0].candidate[1].foto[0].src}">`;            
        break;
        case '40': 
            show();
            candidatesName.innerHTML = stages[0].candidate[2].name;
            photo.innerHTML = `<img src="${stages[0].candidate[2].foto[0].src}">`;            
        break;
        case '25': 
            show();
            candidatesName.innerHTML = stages[0].candidate[3].name;
            photo.innerHTML = `<img src="${stages[0].candidate[3].foto[0].src}">`;            
        break;
        case '80': 
            show();
            candidatesName.innerHTML = stages[0].candidate[4].name;
            photo.innerHTML = `<img src="${stages[0].candidate[4].foto[0].src}">`;            
        break;
        case '28': 
            show();
            candidatesName.innerHTML = stages[0].candidate[5].name;
            photo.innerHTML = `<img src="${stages[0].candidate[5].foto[0].src}">`;            
        break;
        case '29': 
            show();
            candidatesName.innerHTML = stages[0].candidate[6].name;
            photo.innerHTML = `<img src="${stages[0].candidate[6].foto[0].src}">`;            
        break;
        case '39': 
            show();
            candidatesName.innerHTML = stages[0].candidate[7].name;
            photo.innerHTML = `<img src="${stages[0].candidate[7].foto[0].src}">`;            
        break;
        case '50': 
            show();
            candidatesName.innerHTML = stages[0].candidate[8].name;
            photo.innerHTML = `<img src="${stages[0].candidate[8].foto[0].src}">`;            
        break;
        case '22': 
            show();
            candidatesName.innerHTML = stages[0].candidate[9].name;
            photo.innerHTML = `<img src="${stages[0].candidate[9].foto[0].src}">`;            
        break;       
        default:
            if(codigo.length === 2){
                candidatesName.style.visibility = 'visible';
                candidatesName.innerHTML = `Candidato não localizado.</br>
                                            Por favor, clique no botão <strong>CORRIGE</strong> e tente novamente.`
                console.log('candidato não encontrado')
            }
            break;
    } 

}
updateScreen()


function finalMsg(){    
    thanks.classList.remove('hidden');
}
;

function start(){
    clearScreen();
    insert();
}

function completedVote(){
    boxInputs.classList.add('hidden');
    finalMsg()
    hide()
    setTimeout(clearScreen, 2000)    
}

function confirmVote() { 
if (input1.value !== ''){
    if (codigo === '20')  {    
        resultado.innerHTML = anaVotes += 1;
        localStorage.setItem('Ana Sophia', resultado.innerHTML);
        audio.play();
        completedVote();   
      } else if (codigo === '80'){
        resultado.innerHTML = ruannVotes += 1;
        localStorage.setItem('Ruann', resultado.innerHTML); 
        audio.play(); 
        completedVote(); 
      } else if (+codigo === 19){
        resultado.innerHTML = rayaneVotes += 1;
        localStorage.setItem('Rayane', resultado.innerHTML);
        audio.play();
        completedVote();
      } else if (+codigo === 40){
        resultado.innerHTML = rayaneVotes += 1;
        localStorage.setItem('Maria', resultado.innerHTML);
        audio.play();
        completedVote();
      } else if (+codigo === 25){
        resultado.innerHTML = deboraVotes += 1;
        localStorage.setItem('Débora', resultado.innerHTML);
        audio.play();
        completedVote();
      } else if (+codigo === 28){
        resultado.innerHTML = yasminVotes += 1;
        localStorage.setItem('Yasmin', resultado.innerHTML);
        audio.play();
        completedVote();
      } else if (+codigo === 29){
        resultado.innerHTML = monalizaVotes += 1;
        localStorage.setItem('Monaliza', resultado.innerHTML);
        audio.play();
        completedVote();
      } else if (+codigo === 39){
        resultado.innerHTML = bernardoVotes += 1;
        localStorage.setItem('Bernardo', resultado.innerHTML);
        audio.play();
        completedVote();
      } else if (+codigo === 50){
        resultado.innerHTML = miguelVotes += 1;
        localStorage.setItem('Miguel', resultado.innerHTML);
        audio.play();
        completedVote();
      } else if (+codigo === 22){
        resultado.innerHTML = pietroVotes += 1;
        localStorage.setItem('Pietro', resultado.innerHTML);
        audio.play();
        completedVote();
      }
    } else {
    
}
  
}
btnConfirm.addEventListener('click', confirmVote);


/* TELA E BOTÕES RESULTADO*/
function resultVotes(){
    title.innerHTML = 'TOTAL DE VOTOS';
    boxInputs.style.visibility = 'hidden';
    document.querySelector('.result').classList.remove('hidden');
    document.querySelector('.anaResult').innerHTML = localStorage.getItem('Ana Sophia');
    document.querySelector('.rayaneResult').innerHTML = localStorage.getItem('Rayane');
    document.querySelector('.mariaResult').innerHTML = localStorage.getItem('Maria');
    document.querySelector('.deboraResult').innerHTML = localStorage.getItem('Débora');
    document.querySelector('.ruannResult').innerHTML = localStorage.getItem('Ruann');
    document.querySelector('.yasminResult').innerHTML = localStorage.getItem('Yasmin');
    document.querySelector('.monalizaResult').innerHTML = localStorage.getItem('Monaliza');
    document.querySelector('.bernardoResult').innerHTML = localStorage.getItem('Bernardo');
    document.querySelector('.miguelResult').innerHTML = localStorage.getItem('Miguel');
    document.querySelector('.pietroResult').innerHTML = localStorage.getItem('Pietro');   
}
btnResult.addEventListener('click', resultVotes);


//CONTINUAR VOTAÇÃO
function voteContinue(){
    title.innerHTML = 'SEU VOTO PARA:';
    document.querySelector('.result').classList.add('hidden');
    boxInputs.style.visibility = 'visible';
}
btnContinue.addEventListener('click', voteContinue);

// APAGAR TODOS OS VOTOS
// DESATIVAR ESTE BOTÃO.
// function eraseVotes(){
//     localStorage.clear();    
//     voteContinue()
//     btns()
// }
// btnFinish.addEventListener('click', eraseVotes);

// COLOCAR BOTÃO NOVO VOTO E RESULTADO APÓS APARECER A TELA DE OBRIGADO POR VOTAR.

