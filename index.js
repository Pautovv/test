let balance = document.querySelector('.balance-text')
let parsedbalance = parseFloat(balance.innerHTML)

function tup(){
    balance.innerHTML=Math.round(parsedbalance+=1)
}