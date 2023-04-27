let memoryBox,cardAmount, cardsLeft,totalCards,cards,minWidth,letter;
let storedLetter,storedCardOne;
let compareValues;
const letters=[`A`,`B`,`C`,`D`,`E`,`F`,`G`];

generateCards = (amount) =>{
     compareValues = 0;
     totalCards = amount;
     cardsLeft = amount;
     cards = "";
     if (cardAmount == 7){
          minWidth = 60;
     } if (cardAmount == 10){
          minWidth = 20;
     }
     for (let i = 0; i < amount; i++){
          cards += `<div class="black_box"></div>`;
     }
     memoryBox.innerHTML = cards;
     cards = document.getElementsByClassName(`black_box`);
     // Generating the cards` style and attaching event listeners
     for (let i = 1; i < amount + 1; i++){
          cards[i].style.height = minWidth + i*20 + `px`;
          cards[i].style.width = minWidth + i*20 + `px`;

          cards[i].addEventListener('click',function(){
               memGame(i)
          });
     }
     for (let i = 1; i < Math.floor(amount/2) + 1; i++){
          cards[i].innerHTML = `<p>`+ letters[i - 1] +`</p>`
     }
     for (let i = Math.floor(amount/2) +1; i < amount; i++){
          cards[i].innerHTML = `<p>`+ letters[i - Math.floor(amount/2) -1] +`</p>`
     }
     if (amount = 7){
          cards[7].innerHTML = `<p>None</p>`;
     }
}
function memGame(i){
     if (compareValues == 0){
          cards[i].childNodes[0].style.color = 'white';
          cards[i].style.color = 'white';
          storedLetter = cards[i].childNodes[0].innerHTML;
          storedCardOne = i;
          compareValues =  1;
          return;
     }
     if(compareValues == 1){
          cards[i].childNodes[0].style.color = 'white';
          if (cards[i].childNodes[0].innerHTML == storedLetter && i != storedCardOne) {
               cards[i].style.backgroundColor = `grey`;
               cards[i].addEventListener(`click`, function () {
               });
               cards[storedCardOne].style.backgroundColor = `grey`;
               cards[storedCardOne].addEventListener(`click`, function () {
               });
               cardsLeft -= 2;
               if (cardsLeft < 2) {
                    generateCards(totalCards)
               }
               compareValues = 0;
               return;
          }else if (i == storedCardOne){
               return;
          } else  {
               setTimeout(() => {cards[i].childNodes[0].style.color = 'black';},1500);
               cards[storedCardOne].childNodes[0].style.color = `black`;
               compareValues = 0;
               return;
          }
     }

     console.log(compareValues);
};
function changeCardAmount(){

     if (cardAmount == 7){
          cardAmount = 10;
          generateCards(10);

     } else {
          cardAmount = 7;
          generateCards(7);

     }
};
window.onload = () => {

     memoryBox = document.getElementById(`gameArea`)
     cards = document.getElementsByClassName(`black_box`);
     cards[0].addEventListener("click",function (){
          changeCardAmount();
     })
     cardAmount=7;
     generateCards(7);
}