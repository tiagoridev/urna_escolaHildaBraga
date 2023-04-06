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
let lisaVotes = 0;
let bartVotes = 0;
let milhouseVotes = 0; 



// ESCONDE ITENS ANTES DE INICIAR VOTAÇÃO
function hide(){
    candidatesName.style.visibility = 'hidden';
    photo.style.visibility = 'hidden';
    options.style.visibility = 'hidden';
}
hide()

function show(){
    candidatesName.style.visibility = 'visible';
    photo.style.visibility = 'visible';
    options.style.visibility = 'visible';
}

// INSERI NUMERO NA TELA CLICANDO NO TECLADO
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
        case '10': 
            show();
            candidatesName.innerHTML = stages[0].candidate[0].name;
            photo.innerHTML = `<img src="${stages[0].candidate[0].foto[0].src}">`;
            
        break;
        case '15': 
            show() 
            candidatesName.innerHTML = stages[0].candidate[1].name;
            photo.innerHTML = `<img src="${stages[0].candidate[1].foto[0].src}">`;
        break;
        case '20': 
            show() 
            candidatesName.innerHTML = stages[0].candidate[2].name;
            photo.innerHTML = `<img src="${stages[0].candidate[2].foto[0].src}">`;
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

function confirmVote() {
  if (+codigo === 10) {
    
    resultado.innerHTML = lisaVotes += 1;
    localStorage.setItem('Lisa', resultado.innerHTML);
    console.log(`Total de votos da Lisa: ${lisaVotes}`);
  }
}
btnConfirm.addEventListener('click', confirmVote);





