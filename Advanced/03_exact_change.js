// YouTube: https://youtu.be/_nAUQYOjIek

// value of denominations. It's in the global scope, so our function can access it
var denominations = [
  {name: 'ONE HUNDRED',  value: 100.00},
  {name: 'TWENTY',       value: 20.00},
  {name: 'TEN',          value: 10.00},
  {name: 'FIVE',         value: 5.00},
  {name: 'ONE',          value: 1.00},
  {name: 'QUARTER',      value: 0.25},
  {name: 'DIME',         value: 0.10},
  {name: 'NICKEL',       value: 0.05},
  {name: 'PENNY',        value: 0.01}
];

function checkCashRegister(price, cash, cid) {

  // calculate how much change we owe the customer
  var change = cash - price;

  // calcuate the total cash-in-drawer
  var totalCid = cid.reduce(function(acc, next) {
    return acc + next[1];
  }, 0.0);

  // return the appropriate string if needed
  if (totalCid < change) {
    return 'Insufficient Funds';
  } else if (totalCid === change) {
    return 'Closed';
  }

  /* We are about to traverse through the denominations array, which is in descending order.
   We want our cid, which is currently ascending, to match the order of the denominations array. Why?
  Think about how you would give change to a customer. You would start with the biggest bills,
  and then work your way down. If you owe a customer 15 dollars in change, it's standard protocol to give them a ten and a five instead of 3 fives (unless they requested it!). */
  cid = cid.reverse();

  var result = denominations.reduce(function(acc, next, index) {
    // if the change owed is greater than or equal to the value of current denomination
    if (change >= next.value) {
      var currentValue  = 0.0;
      // keep looping so long as we have enough of that current denomination in the cash drawer
      while (change >= next.value && cid[index][1] >= next.value) {
        currentValue += next.value;
        change -= next.value;
        // for decimal precision
        change = Math.round(change * 100) / 100;
        cid[index][1] -= next.value;
      }
      acc.push([next.name, currentValue]);
      return acc;
    } else {
      return acc;
    }
  }, []);

  // if the result array is not empty AND change is 0, then return the array.
  // if one of the conditions failed, we didn't have enough of the denomination needed
  return result.length > 0 && change === 0 ? result : 'Insufficient Funds';

}

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
