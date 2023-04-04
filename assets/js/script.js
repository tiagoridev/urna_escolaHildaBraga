// visibility: hidden;
// visibility: visible;

let title = document.querySelector('.informations-title');
let candidatesName = document.querySelector('.candidates-name')
let orientations = document.querySelector('.orientation');
let photo = document.querySelector('.photo');
let numbers = document.querySelector('.numbers');
let keyboardNumbers = [...document.querySelectorAll(".primary-item")];
let input = document.querySelector('.informations-numbers.blink')

function update(){
    alert ("VOTAÇÃO FINALIZADA")
}

  keyboardNumbers.forEach( numero => {
    numero.addEventListener('click', () => {
        if( input.value === number){            
            input.value += numero.textContent;  
            input.classList.remove('blink');
            input.nextElementSibling.classList.add('blink');
               
            }   
        // console.log(`Clicou em ${number.innerHTML}`)
        // } else {
        //     alert("AGUARDE")
        
           
                
    })
  })




  
  let currentStage = 0
  let number = '';
  
//   function start(){ // Começa com campos zerados.
//     let stage = stages[currentStage]
//     let numberHtml = '';

    // for(let i = 0; stage<number;i++){
    //     if(i === 0){
    //         numberHtml += '<input type="number" class="informations-numbers blink">';
    //     } else {
    //         numberHtml += '<input type="number" class="informations-numbers">';
    //     }
    // }
    
    
    // title.style.visibility = 'hidden';
//     candidatesName.innerHTML = '';
//     photo.style.display = 'none';
//     orientations.style.display = 'none';
//     numbers.innerHTML = numberHtml;
//   }

//   function Update(){

//   }

//   function toClick(n){
//     let elNumber = document.querySelector('.informations-numbers.blink');
//     if(elNumber !== full){
//         elNumber.innerHTML = n;
//         number = `${number}${n}`
//     }
//   }