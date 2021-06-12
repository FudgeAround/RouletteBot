var red =[1,3,5,7,9,12,14,18,19,21,23,25,27,30,32,34,36];
var black=[2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35];
var odd =[1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35];
var even=[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36];
var low=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
var high=[19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35];
var historys= [];
function getLastNumbers() {
    historys.unshift(parseFloat($('div.number-container--2fA8h:nth-child(1) > div:nth-child(1) > span:nth-child(1)').textContent));
    console.log("Checking NumB!");
}
function checkBet() {
    console.log("Checking Bet!");
    if(red.includes(historys[0]) && black.includes(historys[1]) && black.includes(historys[2]) && black.includes(historys[3]) && red.includes(historys[4])) {
        console.log("BET RED");
        playSound();
    }
    if(black.includes(historys[0]) && red.includes(historys[1]) && red.includes(historys[2]) && red.includes(historys[3]) && black.includes(historys[4])) {
        console.log("BET BLACK");
        playSound();
    }
    if(odd.includes(historys[0]) && even.includes(historys[1]) && even.includes(historys[2]) && even.includes(historys[3]) && odd.includes(historys[4])) {
        console.log("BET ODD");
        playSound();
    }
    if(even.includes(historys[0]) && odd.includes(historys[1]) && odd.includes(historys[2]) && odd.includes(historys[3]) && even.includes(historys[4])) {
        console.log("BET EVEN");
        playSound();
    }
    if(low.includes(historys[0]) && high.includes(historys[1]) && high.includes(historys[2]) && high.includes(historys[3]) && low.includes(historys[4])) {
        console.log("BET LOW");
        playSound();
    }
    if(high.includes(historys[0]) && low.includes(historys[1]) && low.includes(historys[2]) && low.includes(historys[3]) && high.includes(historys[4])) {
        console.log("BET HIGH");
        playSound();
    }
}
function playSound() {
    var a= new Audio("https://freesound.org/data/previews/490/490658_10604192-lq.mp3");
    a.play();
}
async function doIt() {
    while(1) {
        if ($("div[data-role='status-text']").textContent == "PLACE YOUR BETS"){
            getLastNumbers();
            checkBet();
            await Sleep(19000);
        }
        await Sleep(1000);
    }
}
function Sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve,milliseconds));
    }
doIt();