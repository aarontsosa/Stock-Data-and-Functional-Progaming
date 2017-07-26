var socket = io.connect('http://socket.coincap.io');

function coinName(payload) {
  let parent = document.querySelector('.container')
  let elem = document.createElement('p')
  elem.textContent = payload.message.coin
  parent.appendChild(elem)
}

socket.on('trades', function (tradeMsg) {
    // console.log(tradeMsg)
    var BTC = tradeMsg["message"]["msg"]["long"]
    var value = tradeMsg["message"]["msg"]["price"]
    var i = 0
    if (BTC === "Bitcoin"){
        console.log(tradeMsg)
        $('[data-BTC="target"]')[0].textContent = BTC + " " + value
    }
    // coinName(tradeMsg);
})