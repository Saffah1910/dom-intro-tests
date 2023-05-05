function calculateBill(billString) {
    
    var total = 0;
function calcBill(){


    var phoneBill = billString.split(",");

    for (var i = 0; i < phoneBill.length; i++) {
        if (phoneBill[i].trim().toLowerCase() === "call") {
            total += 2.75;
        }
        else if (phoneBill[i].trim().toLowerCase() === "sms") {
            total += 0.75;
        }
    }
    return total;
}

function warningLevel(){
if(total > 20 && total < 30){
    return "warning"
}
}
function criticalLevel(){
    if(total > 30){
        return "critical"
    }  
}
return{
    calcBill,
    warningLevel,
    criticalLevel


}
   
}

    