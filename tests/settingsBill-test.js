

describe("The Bill with settings function", function () {
    it("should be able to set call cost", function () {
        let settingsBill = BillWithSettings();
        settingsBill.setCallCost(1.85);
        assert.equal(1.85, settingsBill.getCallCost());

        let settingsBill2 = BillWithSettings();
        settingsBill2.setCallCost(2.75);
        assert.equal(2.75, settingsBill2.getCallCost());
    });
    it("should be able to set sms cost", function () {
        let settingsBill = BillWithSettings();
        settingsBill.setSmsCost(0.85);
        assert.equal(0.85, settingsBill.getSmsCost());

        let settingsBill2 = BillWithSettings();
        settingsBill2.setSmsCost(2);
        assert.equal(2, settingsBill2.getSmsCost());
    });
    it("should be able to set sms and call cost", function () {

        let settingsBill = BillWithSettings();
        settingsBill.setSmsCost(2);
        settingsBill.setCallCost(2.5);

        assert.equal(2, settingsBill.getSmsCost());
        assert.equal(2.5, settingsBill.getCallCost());

        let settingsBill2 = BillWithSettings();
        settingsBill2.setSmsCost(3.5);
        settingsBill2.setCallCost(4);

        assert.equal(3.5, settingsBill2.getSmsCost());
        assert.equal(4, settingsBill2.getCallCost());


    });
    it("should be able to set warning level", function () {
        let settingsBill = BillWithSettings();
        settingsBill.setWarningLevel(5);
        assert.equal(5, settingsBill.getWarningLevel());
    });
    it("should be able to set critical level", function () {
        let settingsBill = BillWithSettings();
        settingsBill.setCriicalLevel(10);
        assert.equal(10, settingsBill.getCriicalLevel());
    });

    it("should be able to set warning and  critical level", function () {
        let settingsBill = BillWithSettings();
        settingsBill.setWarningLevel(20);
        settingsBill.setCriicalLevel(10);

        assert.equal(20, settingsBill.getWarningLevel());
        assert.equal(10, settingsBill.getCriicalLevel());
    });


});

describe("use values", function(){
    it("should be able to use call cost set", function(){
        let settingsBill = BillWithSettings();

        settingsBill.setCallCost(2.75);
        settingsBill.setCallCost(0.85);

        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();

        assert.equal(6.75, settingsBill.getTotalCost());
        assert.equal(6.75, settingsBill.getTotalCallCost());
        assert.equal(0.00, settingsBill.getTotalSmsCost());
    })




})
