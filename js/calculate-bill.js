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
// function calculateBill() {
//     var costOfCall = 0;

//     function setCallCost(callCost) {
//         costOfCall = callCost;
//     }
//     function getCallCost() {
//         return costOfCall;
//     }
//     return {
//         setCallCost,
//         getCallCost
//     }

// }
// function phoneBillCalculator() {

//     var calls = 0;
//     var sms = 0;
//     var billTotal = 0;
    
//     function calculateBill(billString) {

//     var billItems = billString.split(",");

//     for (var i=0; i<billItems.length; i++) {

//     var billItem = billItems[i].trim().toLowerCase();

//     if (billItems[i].trim().toLowerCase() === "call") {
//     calls += 1;
//     billTotal += 2.75;
//     }
//     else if (billItems[i].trim().toLowerCase() === "sms") {
//     sms += 1;
//     billTotal += 0.75;
//     }
//     }
//     return billTotal.toFixed(2);
//     }
//     return {
//         calculateBill
//     }
    
    // return {
    //     get total() {
    //     return billTotal;
    //     },
    //     set total(value) {
    //     billTotal = value;
    //     },
    //     calculateBill: calculateBill
    //     }
    //     }
        
    //     var calculator = phoneBillCalculator();
        
    //     $(".calculateBtn").on("click", function() {
    //     var billString = $(".billString").val();
    //     var total = calculator.calculateBill(billString);
    //     calculator.total = total;
        
    //     $(".billTotal").text(total);
        
    //     if (total > 30) {
    //     $(".total").addClass("");
    //     }
    //     else if (total > 20) {
    //     $(".total").addClass("");
    //     }
    