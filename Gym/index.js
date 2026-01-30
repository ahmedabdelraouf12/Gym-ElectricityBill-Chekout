let monthlyPrice = 350;
let months = Number(prompt("Enter number of months"));
console.log("number of months = " + months );

let totalMonthPrice = months*monthlyPrice;
console.log("totalMonthPrice= " + totalMonthPrice +"$" );


// dis 15%
if (months >= 12) {
  totalMonthPrice -= totalMonthPrice * 0.15;
  console.log("totalMonthPrice >= 12 =>  " + totalMonthPrice +"$" );

  // dis 10%
} else if (months >= 6) {
  totalMonthPrice -= totalMonthPrice * 0.1;
    console.log("totalMonthPrice >= 6 =>  " + totalMonthPrice +"$" );

}
let personalTraining = confirm("Add personal training for 200 $?");

if (personalTraining) {
  totalMonthPrice += 200;
    console.log("totalMonthPrice after personalTraining =  " + totalMonthPrice +"$" );

}
  console.log("totalMonthPrice before Vat  " + totalMonthPrice +"$" );


// VAT 14%
totalMonthPrice += totalMonthPrice * 0.14;

  console.log("totalMonthPrice aftar Vat  for membership " + totalMonthPrice +"$" );