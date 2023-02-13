const currencyUnit = {
    0.01: "PENNY",
    0.05: "NICKEL",
    0.1: "DIME",
    0.25: "QUARTER",
    1: "ONE",
    5: "FIVE",
    10: "TEN",
    20: "TWENTY",
    100: "ONE HUNDRED"
}

function checkCashRegister(price, cash, cid) {
    let totalCID = Math.round(cid.map(unit => unit[1]).reduce((sum, cash) => sum + cash) * 100) / 100;
    let changeInMachine = {};
    cid.forEach(entity => changeInMachine[entity[0]] = entity[1]);
    let change = cash - price;
    if (change > totalCID) {
        return { status: "INSUFFICIENT_FUNDS", change: [] }
    } else if (change === totalCID) {
        return { status: "CLOSED", change: cid }
    } else {
        let returnChange = { status: "OPEN", change: [] };
        let currency = Object.keys(currencyUnit).sort((a, b) => b - a).map(c => Number.parseFloat(c));
        currency.forEach(c => {
            let totalChange = 0;
            while (change >= c && totalChange < changeInMachine[currencyUnit[c]]) {
                totalChange += c;
                change -= c;
                change = Math.round(change * 100) / 100;
            }
            if (totalChange)
                returnChange.change.push([currencyUnit[c], totalChange]);
        });

        if(change != 0) return { status: "INSUFFICIENT_FUNDS", change: [] };
        return returnChange;
    }
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));