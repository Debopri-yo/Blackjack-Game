import './styles/style.css';
let cards=[];
const suits = ["♠", "♥", "♣", "♦"];
const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
for(const suit of suits){
    for (const rank of ranks){
        cards.push({suit,rank});
    }
}
let playerCards=[];
let dealerCards=[];
let psum=0,dsum=0;
function drawCards(){
    let drawnCard;
    const cardIndex = Math.floor(Math.random() * cards.length);
    drawnCard= (cards[cardIndex]);
    cards.splice(cardIndex,1);
    return (drawnCard);
}
function beginGame(){
    playerCards.push(drawCards());
    playerCards.push(drawCards());
    dealerCards.push(drawCards());
    dealerCards.push(drawCards());
    console.log(playerCards);
    console.log(dealerCards);
    console.log(psum += putValues(playerCards));
    console.log(dsum += putValues(dealerCards));
    document.getElementById("hitButton").addEventListener('click',function(){
        playerCards.push(drawCards());
        psum=putValues(playerCards);
        if(psum>21){
            console.log('player lost');
            console.log(`Player sum: ${psum}, Dealer sum: ${dsum}`, playerCards);
        }else if (psum>dsum){
            console.log(`Player sum: ${psum}, Dealer sum: ${dsum}`, playerCards);
        }else if (psum===dsum){
            console.log(`Player sum: ${psum}, Dealer sum: ${dsum}`, playerCards);
        }else {
            console.log(`Player sum: ${psum}, Dealer sum: ${dsum}`, playerCards);
        }
    });
    document.getElementById("standButton").addEventListener('click',function(){
        if (dsum<psum && dsum<17){
            dealerCards.push(drawCards());
            dsum = putValues(dealerCards);
            console.log(`Player sum: ${psum}, Dealer sum: ${dsum}`,dealerCards);
            if(dsum<=21 && dsum>psum){
            console.log('player lost');
            console.log(`Player sum: ${psum}, Dealer sum: ${dsum}`,dealerCards);
            }else
            console.log('player won');
            console.log(`Player sum: ${psum}, Dealer sum: ${dsum}`,dealerCards);
        }else{
            console.log('player lost');
            console.log(`Player sum: ${psum}, Dealer sum: ${dsum}`,dealerCards);
        }
    });
}
beginGame();
function putValues (array){
let value=0,aceCount=0;
    for (const element of array){
        if (element.rank==="K"||element.rank==="Q"||element.rank==="J"){
            value+=10;
        }else if(element.rank==="A"){
            value+=11;
            aceCount++;
        }else{
            value += Number(element.rank);
        }    
    }
    while(value>21 && aceCount>0){
        value -= 10;
        aceCount--;
    }
    return value;
}