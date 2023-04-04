// visibility: hidden;
// visibility: visible;

let title = document.querySelector('.informations-title');
let candidatesName = document.querySelector('.candidates-name')
let orientations = document.querySelector('.orientation');
let photo = document.querySelector('.photo');
let numbers = document.querySelector('.numbers');
const btnCorrect = document.querySelector('.btn-correct');

// let keyboardNumbers = [...document.querySelectorAll(".primary-item")];
// let input = document.querySelector('.informations-numbers.blink')



// FAZ OS ELEMENTOS NÃO APARECEREM NA TELA INICIAL
function hide(){
  candidatesName.style.visibility = 'hidden';
  photo.style.visibility = 'hidden';
  orientations.style.visibility = 'hidden';
}
hide();

function show(){
  candidatesName.style.visibility = 'visible';
  photo.style.visibility = 'visible';
  orientations.style.visibility = 'visible';
}


// RELACIONA O NUMERO DIGITADO COM OS CANDIDATOS CADASTRADOS.
function mostrar(){
  let voto = inputs[0].value + inputs[1].value;  
  
  switch (voto) {
      case '10':
        show() 
        candidatesName.innerHTML = stages[0].candidate[0].name;
        photo.innerHTML = stages[0].candidate[0].foto[0];
      
      break;
      case '15':
        console.log(stages[0].candidate[1])
      break;
      case '20':
        console.log(stages[0].candidate[2])
      break;
    default:       
      alert('CANDIDATO NÃO LOCALIZADO, POR FAVOR, TENTE NOVAMENTE.');
      break;
  }  
}


// CORRIGE OS NUMEROS DIGITADOS
btnCorrect.addEventListener('click', function(){
  inputs[0].value = '';
  inputs[1].value = '';
})



// function update(){
//     alert ("VOTAÇÃO FINALIZADA")
// }

  // keyboardNumbers.forEach( numero => {
  //   numero.addEventListener('click', () => {
  //       if(input.value === number){            
  //           input.value += numero.textContent;  
  //           input.classList.remove('blink');
  //             if(input.nextElementSibling === null){
  //           input.nextElementSibling.classList.add('blink'); 
  //             } 
  //       } else {
  //       alert("AGUARDE") }
  //   })
  // })

  // let elNumber = '';

  // keyboardNumbers.forEach( btn => {
  //   btn.addEventListener('click', () => {
  //     if( typeof +input.value === 'number' ) {
  //       input.innerHTML = btn;
  //       elNumber = `${elNumber}${btn}`
        


  //       input.value = btn.textContent;
  //       input.classList.remove('blink');
  //       input.nextElementSibling.classList.add('blink');
  //     }
  //   })
  // })



  
// FAZ O NÚMERO SER DIGITADO E PULAR PARA PRÓXIMA CASA.  
let inputs = [...document.querySelectorAll('.informations-numbers')];
let value = inputs.value;
let currentInputIndex = 0;

document.querySelectorAll('.primary-item').forEach((btn) => {
  btn.addEventListener('click', () => {
    const currentInput = inputs[currentInputIndex];
    if (currentInputIndex < inputs.length && currentInput.value.length < 1) {
      currentInput.value = btn.textContent;
      currentInput.classList.remove('blink');
      currentInputIndex++;
      if (currentInputIndex < inputs.length) {
        inputs[currentInputIndex].classList.add('blink');
      } else {
        mostrar()
      }
    }
  });
});
