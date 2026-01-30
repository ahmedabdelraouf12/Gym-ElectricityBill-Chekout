let price = Number(prompt("Enter item price"));
    console.log("Final price = " + price+ " $");
let quantity = Number(prompt("Enter quantity"));
    console.log("Final quantity = " + quantity);
let subtotal = price * quantity;
    console.log("Final subtotal = " + subtotal+ " $");
    let shipping = 0;
    if (subtotal < 1000) {
        shipping = 60;
    }
     let coupon = +prompt("Enter coupon discount percentage (or 0)");
         console.log("coupon for  discount = " + coupon+ "%");
     let discount;
if (coupon>0) {
  discount = subtotal*(coupon/100)

  subtotal = subtotal-discount;
           console.log("  discount = " + discount+ "$");
         console.log("subtotal = " + subtotal+ "$");

}
    let total = subtotal + shipping;
         console.log("total before Vat = " + total+ "$");

 total += total * 0.14;

    console.log("Final total with vat = " + total+ " $");
