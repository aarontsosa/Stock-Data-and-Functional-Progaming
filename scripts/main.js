    function averages(stocks, values){
        num = getNum(stocks, values)
        num = num
            .reduce((open, value) => {
                return (Number(open) + Number(value))
            })
            / 100 
        return num.toFixed(3)
    }

    function getNum(stocks, values){
        days = Object.keys(stocks)
        return days
            .map((x) => {
                return stocks[x][values]
            })
    }



    function sorting(stocks, values){
        values = getNum(stocks, values)
        return values.sort()
    }

    function sortHigh(stocks){
        x = sorting(stocks, "2. high")
        return x.reverse()
    }

    function sortLow(stocks){
        return sorting(stocks, "3. low")
    }


    function dayReport(stocks){
        days = Object.keys(stocks)
        days = days
            .map((x) => {
                return "Day: "+ x +" Open: " + stocks[x]["1. open"] + " Close: " + stocks[x]["4. close"] + "\n"
            }) 
        return console.log(days)
        
    }

