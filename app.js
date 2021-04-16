cardcounting1 = () => {
  var count = 0;
  var card = document.getElementById('card1').value; 
  cardgame = (cards) => {
    cards == 2 || cards == 3 || cards == 4 || cards == 5 || cards == 6 ? count ++ : console.log()
    cards == 7 || cards == 8 || cards == 9 ? count :  console.log()
    cards == 10 || cards == 'J' || cards == 'Q' || cards == 'K' || cards == 'A' ? xount -- : console.log()

    result = count + (count > 0 ? "BET": "HOLD");
    return count;


  }
  if (card === '1') {
    document.querySelector('#score', cardgame(2) + cardgame(3) + cardgame(4) + cardgame(5) + cardgame(6)).textContent = result;
    
  }
  if (card === '2') {
    document.querySelector('#score', cardgame(7) + cardgame(8) + cardgame(9)).textContent = result;
    
  }
  if (card === '3') {
    document.querySelector('#score', cardgame(10) + cardgame('J') + cardgame('Q') + cardgame('K') + cardgame('A')).textContent = result;
    
  }
  if (card === '4') {
    document.querySelector('#score', cardgame(3) + cardgame(7) + cardgame('Q') + cardgame(8) + cardgame('A')).textContent = result;
    
  }
  if (card === '5') {
    document.querySelector('#score', cardgame(2) + cardgame('J') + cardgame(9) + cardgame(2) + cardgame(7)).textContent = result;
    
  }
  if (card === '6') {
    document.querySelector('#score', cardgame(2) + cardgame(2) + cardgame(10)).textContent = result;
    
  }
  if (card === '7') {
    document.querySelector('#score', cardgame(3) + cardgame(2) + cardgame('A') + cardgame(10) + cardgame('K')).textContent = result;
    
  }









}
reset = (clear) => {
  clear = document.querySelector("#score").textContent = "...";
}

