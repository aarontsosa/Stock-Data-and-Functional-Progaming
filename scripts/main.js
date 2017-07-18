
/////// Getting the Average//////////
// This puts the numbers in the sub libraries in an array.
function getNum(stocks, values){            // var stocks and values is the sub libraries like "1. open"
        days = Object.keys(stocks)
        return days
            .map((x) => {                   // use the days in an array to change each library
                return stocks[x][values] 
            })
    }    
// This adds up all the numbers then divides it by the length... which is 100
function averages(stocks, values){
        num = getNum(stocks, values)
        num = num
            .reduce((open, value) => {
                return (Number(open) + Number(value))
            })
            / 100 
        return num.toFixed(3)                           // just extra stuff to make the decimeal smaller
    }


//////// Sorting high and lows ////////
// function calls getNum to put the given value into an array then sorts it from low to high
    function sorting(stocks, values){
        values = getNum(stocks, values)
        return values.sort()
    }
// gets the sorted function of the value "2. high" and then reverses it high to low
    function sortHigh(stocks){
        x = sorting(stocks, "2. high")
        return x.reverse()
    }
// gets the sorted function of the value "3. low" and then just returns it
    function sortLow(stocks){
        return sorting(stocks, "3. low")
    }



//////////Daily Report/////////////
    function dayReport(stocks){
        days = Object.keys(stocks)              // puts all the days in an array
        days = days
            .map((x) => {                       // uses the individual days to call the values open and close
                return "Day: "+ x +" Open: " + stocks[x]["1. open"] + " Close: " + stocks[x]["4. close"] + "\n"
            }) 
        return console.log(days) /// log it so it can come out in individual lines
        
    }

//// If you have questions just slack me