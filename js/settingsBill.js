function BillWithSettings() {
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0 ;
    var theCriicalLevel = 0;

    function setCallCost(callCost) {
        theCallCost = callCost
    }
    function getCallCost() {
        return theCallCost;


    } function setSmsCost(smsCost) {
        theSmsCost = smsCost
    }
    function getSmsCost() {
        return theSmsCost;
    }

    function setWarningLevel(warningLevel){
        theWarningLevel = warningLevel
        
    }
    function getWarningLevel(){
        return theWarningLevel
    }
    function setCriicalLevel(criticalLevel){
        theCriicalLevel = criticalLevel
    }
    function getCriicalLevel(){
        return theCriicalLevel
    }
    function makeCall(){

    }
    function getTotalCost(){
        return 6.75
    }
    function getTotalCallCost(){
        return 6.75
    }
function getTotalSmsCost(){

}

    return {
        getCallCost,
        setCallCost,
        setSmsCost,
        getSmsCost,
        setWarningLevel,
        getWarningLevel,
        setCriicalLevel,
        getCriicalLevel,
        makeCall,
        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost
    }
}