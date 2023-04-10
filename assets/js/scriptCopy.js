// visibility: hidden;
// visibility: visible;
const title = document.querySelector('.informations-title');
const position = document.querySelector('.position');
// let boxInputs = [...document.querySelectorAll('.informations-numbers')];

let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let codigo = `${input1.value}${input2.value}`;
let candidatesName = document.querySelector('.candidates-name');
let photo = document.querySelector('.photo');
const options = document.querySelector('.orientation');
const btnsNumbers = [...document.querySelectorAll('.primary-item')]
const btnClear = document.querySelector('.btn-correct')
const btnConfirm = document.querySelector('.btn-confirm');
let resultado = document.querySelector('.resultado');

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
function hide(){
    candidatesName.style.visibility = 'hidden';
    photo.style.visibility = 'hidden';
    options.style.visibility = 'hidden';
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


// function confirmVote(){
//     if( +codigo === 10){
//         lisaVotes += 1        
//         console.log(lisaVotes)
//     }
// }
// btnConfirm.addEventListener('click', confirmVote)

// function updateLisaVotes(){
//     console.log(`Lisa received ${lisaVotes} votes.`);
// }



// function confirmVote(){
//     if( +codigo === 10){
//         lisaVotes += 1
//          let totalVotos = lisaVotes 
//          console.log(totalVotos)
//         // updateLisaVotes();
//     }
// }

// btnConfirm.addEventListener('click', confirmVote)



// function confirmVote() {
//     codigo = `${input1.value}${input2.value}`;
//     switch (codigo) {
//         case '10':
//             let votos = lisaVotes += 1;
//             console.log(votos)
//             break;
//         case '15':
//             console.log('VOTO NO BART')
//             break;
//         case '20':
//             console.log('VOTO NO MILHOUSE')
//             break;
//         default:
//             break;
//     }

//     // localStorage.setItem('candidato', +1);
// //   }
// }

// let lisaVotes = 0;

function confirmVote() {   // PAREI AQUI, FALTA CRIAR TELA DE RESULTADOS E EXIBIR NA TELA
  if (codigo === '20') {    
    resultado.innerHTML = anaVotes += 1;
    localStorage.setItem('Ana Sophia', resultado.innerHTML);
    
  } else if (codigo === '80'){
    resultado.innerHTML = ruannVotes += 1;
    localStorage.setItem('Ruann', resultado.innerHTML);   
  } else if (+codigo === 19){
    resultado.innerHTML = rayaneVotes += 1;
    localStorage.setItem('Rayane', resultado.innerHTML);
  } else if (+codigo === 40){
    resultado.innerHTML = rayaneVotes += 1;
    localStorage.setItem('Maria', resultado.innerHTML);
  } else if (+codigo === 25){
    resultado.innerHTML = deboraVotes += 1;
    localStorage.setItem('Débora', resultado.innerHTML);
  } else if (+codigo === 28){
    resultado.innerHTML = yasminVotes += 1;
    localStorage.setItem('Yasmin', resultado.innerHTML);
  } else if (+codigo === 29){
    resultado.innerHTML = monalizaVotes += 1;
    localStorage.setItem('Monaliza', resultado.innerHTML);
  } else if (+codigo === 39){
    resultado.innerHTML = bernardoVotes += 1;
    localStorage.setItem('Bernardo', resultado.innerHTML);
  } else if (+codigo === 50){
    resultado.innerHTML = miguelVotes += 1;
    localStorage.setItem('Miguel', resultado.innerHTML);
  } else if (+codigo === 22){
    resultado.innerHTML = pietroVotes += 1;
    localStorage.setItem('Pietro', resultado.innerHTML);
  }

  clearScreen()
}
btnConfirm.addEventListener('click', confirmVote);


