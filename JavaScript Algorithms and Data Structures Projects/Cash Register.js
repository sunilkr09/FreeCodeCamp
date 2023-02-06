function checkCashRegister(price, cash, cid = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) {
    let totalCID = Math.round(cid.map(unit => unit[1]).reduce((sum, cash) => sum + cash) * 100) / 100;
    let change = cash - price;
    console.log(totalCID);
    console.log(change)
    if (change > totalCID) {
        return { status: "INSUFFICIENT_FUNDS", change: [] }
    } else if(change === totalCID){
        return {status: "CLOSED", change: cid}
    } else {
        return null//{status: "OPEN", change: [...]}
    }

    return change;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));