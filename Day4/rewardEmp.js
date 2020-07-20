//Q 4

let sales=Number(prompt("Enter the sales:-"));
//let sales=20000;
let commission,commissionPercent=null;
if(sales > 0 && sales <=5000){
    commissionPercent=2;
    commission=sales*(commissionPercent/100);
}
else if(sales >= 5001 && sales <=10000){
    commissionPercent=5;
    commission= sales*(commissionPercent/100);
}
else if(sales >= 10001 && sales <= 20000){
    commissionPercent=7;
    commission= sales*(commissionPercent/100)
}
else {
    console.log("Invalid Input!!");
    alert("Invalid Input");
}

commission=commission.toFixed(3);
console.log(`As per your total sales:- ${sales}, your ${commissionPercent}% commission Is ${commission}.`);
alert(`As per your total sales:-${sales},your ${commissionPercent}% commission Is ${commission}`)