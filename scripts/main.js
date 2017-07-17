function averages(stocks){
    days = Object.keys(stocks);
    return stocks
        .map((day) => {
            return day.open
        })
        .reduce((open, value) =>{
            return open + value
        })
    return stocks / days.length();
}