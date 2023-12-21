

let cards = []
sum = 0
let hasBlackjack = false
let isAlive = false
message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-El")
let cardsEl = document.getElementById("cards-el")
// let sumEl = document.querySelector("#sum-el") 

function getRandomCard(){
  let randomNumber = Math.floor(Math.random()*13 ) + 1
  if (randomNumber === 1){
    return 11
  } else if(randomNumber > 10){
    return 10
  } else {
    return randomNumber
  }
}

function startGame(){
  let isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  sum = firstCard + secondCard
  cards = [firstCard,secondCard]
  renderGame()
}

function renderGame(){
  sumEl.textContent = "Sum: " + sum
  cardsEl.textContent = "cards: "

  for (let i = 0; i < cards.length; i++){
    cardsEl.textContent += cards[i] + " "
  }

  if(sum < 21){
    message = "Do you want to draw another card?"
  } else if(sum === 21){
    message = "Wohoo! You've got Blackjack!"
    hasBlackjack = true
  } else {
    message = "You are out of the game!"
    isAlive = false
  }
  messageEl.textContent = message
  
}

function newCard(){
 let card = getRandomCard()
 sum += card
 cards.push(card)

 renderGame()
}

