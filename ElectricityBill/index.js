let kwh = +prompt("Enter number of  kWh ");
console.log("Enter number of  kWh = " + kwh);
  let totalprice = 0;

if (kwh > 0) {
  if (kwh <= 100) {
    totalprice = kwh * 0.75;

  } else {
    let frist100Kwt = 100 * .75;

    totalprice =frist100Kwt+ (kwh - 100) * 1.2;

  }

}
 let service = confirm("optiion service fee 5 EGP ADD Or not?");
    if (service) {
        totalprice += 5;
            console.log("totalprice after Services = " + totalprice + " EGP");

    }

            console.log("totalprice before Vat = " + totalprice + " EGP");

    // VAT 14%
    totalprice += totalprice * 0.14;

            console.log("totalprice after Vat = " + totalprice + " EGP");

