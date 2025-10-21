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
    const cardIndex = Math.floor(Math.random() * 52);
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
            console.log(`Player sum: ${psum}, Dealer sum: ${dsum}`);
        }else if (psum>dsum){
            console.log('player won');
            console.log(`Player sum: ${psum}, Dealer sum: ${dsum}`);
        }else if (psum===dsum){
            console.log("it is a draw");
            console.log(`Player sum: ${psum}, Dealer sum: ${dsum}`);
        }else {
            console.log("dealer is still ahead");
            console.log(`Player sum: ${psum}, Dealer sum: ${dsum}`);
        }
    });
    document.getElementById("standButton").addEventListener('click',function(){
        if (dsum<psum){
            dealerCards.push(drawCards());
            console.log(dsum += putValues(dealerCards));
            console.log(`Player sum: ${psum}, Dealer sum: ${dsum}`);
            if(dsum<=21 && dsum>psum){
            console.log('player lost');
            console.log(`Player sum: ${psum}, Dealer sum: ${dsum}`);
            }else
            console.log('player won');
            console.log(`Player sum: ${psum}, Dealer sum: ${dsum}`);
        }else{
            console.log('player lost');
            console.log(`Player sum: ${psum}, Dealer sum: ${dsum}`);
        }
    });
}
beginGame();
function putValues (array){
let value=0;
    for (const element of array){
        if (element.rank==="A"||element.rank==="K"||element.rank==="Q"||element.rank==="J"){
            value+=10;
        }else{
            value += Number(element.rank);
        }
    }
    return value;
}
