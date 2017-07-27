var socket = io.connect('http://socket.coincap.io');

function coinName(payload) {
  let parent = document.querySelector('.container')
  let elem = document.createElement('p')
  elem.textContent = payload.message.coin
  parent.appendChild(elem)
}

socket.on('trades', function (tradeMsg) {
    // console.log(tradeMsg)
    var CurName = tradeMsg["message"]["msg"]["long"]
    var value = tradeMsg["message"]["msg"]["price"]
    var supply = tradeMsg["message"]["msg"]["supply"]
    var i = 0
    if (CurName === "Bitcoin"){
        $('[data-name="target"]')[0].textContent = CurName
        $('[data-price="target"]')[0].textContent = value
        $('[data-supply="target"]')[0].textContent = supply
    } else if (CurName === "Ethereum"){
        $('[data-name="target"]')[1].textContent = CurName
        $('[data-price="target"]')[1].textContent = value
        $('[data-supply="target"]')[1].textContent = supply
    } else if (CurName === "Ripple"){
        $('[data-name="target"]')[2].textContent = CurName
        $('[data-price="target"]')[2].textContent = value
        $('[data-supply="target"]')[2].textContent = supply
    }
    // coinName(tradeMsg);
})