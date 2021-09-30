var initialPrice = document.querySelector('#initial-price');
var stocksQuantity = document.querySelector('#stocks-quantity');
var currentPrice = document.querySelector('#current-price');
var submitBtn = document.querySelector('#submit-btn');
var outputBox = document.querySelector('#output-box');

function calculateProfitandLoss(initial, quantity, current){
if(initial > current){
  var loss=(initial-current)* quantity;
  var lossPercent=((loss/initial)*100).toFixed(2);
  showOutput(`Here the loss is ${loss} and the percent is ${lossPercent}% 🤬`);
  outputBox.style.color = 'red';
}
else if(current>initial){
    var profit=(current-initial)* quantity;
    var profitPercent=((profit/initial)*100).toFixed(2);
    showOutput(`Here the profit is ${profit} and the percent is ${profitPercent}% 💃🏿`);
    outputBox.style.color = 'black';
}
else{
    showOutput(`No Pain no Gain and no Gain no pain 👻`);
}
}
function submitHandler(){
    let ip=Number(initialPrice.value);
    let qty=Number(stocksQuantity.value);
    let cp=Number(currentPrice.value);
    if(ip==='' && qty==='' && cp===''){
    alert("Please fill out all Fields");
    }else{
    calculateProfitandLoss(ip,qty,cp);
    }
}
submitBtn.addEventListener('click', submitHandler);

function showOutput(message){
outputBox.innerHTML=message;
}