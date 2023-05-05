

describe("The Bill with settings function", function () {
    it("should be able to set call cost", function () {
        let settingsBill = BillWithSettings();
        settingsBill.setCriticalLevel(10);
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
        settingsBill.setCriticalLevel(10);
        assert.equal(10, settingsBill.getCriticalLevel());
    });

    it("should be able to set warning and  critical level", function () {
        let settingsBill = BillWithSettings();
        settingsBill.setWarningLevel(20);
        settingsBill.setCriticalLevel(10);

        assert.equal(20, settingsBill.getWarningLevel());
        assert.equal(10, settingsBill.getCriticalLevel());
    });


});

describe("use values", function () {
    it("should be able to use call cost set", function () {
        let settingsBill = BillWithSettings();

        settingsBill.setCriticalLevel(10);
        settingsBill.setCallCost(2.75);
        settingsBill.setSmsCost(0.85);

        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();

        assert.equal(8.25, settingsBill.getTotalCost());
        assert.equal(8.25, settingsBill.getTotalCallCost());
        assert.equal(0.00, settingsBill.getTotalSmsCost());
    });

    it("should be able to use call cost set for 2 calls at 1.35 each", function () {
        let settingsBill = BillWithSettings();
        settingsBill.setCriticalLevel(10);
        settingsBill.setCallCost(1.35);
        settingsBill.setSmsCost(0.85);

        settingsBill.makeCall();
        settingsBill.makeCall();


        assert.equal(2.70, settingsBill.getTotalCost());
        assert.equal(2.70, settingsBill.getTotalCallCost());
        assert.equal(0.00, settingsBill.getTotalSmsCost());
    });

    it("should be able to send 2 sms's at 0.85 each", function () {
        let settingsBill = BillWithSettings();

        settingsBill.setCriticalLevel(10);
        settingsBill.setSmsCost(0.85);
        settingsBill.setCallCost(1.35);


        settingsBill.sendSms();
        settingsBill.sendSms();


        assert.equal(1.70, settingsBill.getTotalCost());
        assert.equal(0.00, settingsBill.getTotalCallCost());
        assert.equal(1.70, settingsBill.getTotalSmsCost());
    });


    it("should be able to send 2 sms's at 0.85 each and make 1 call att 1.35", function () {
        let settingsBill = BillWithSettings();

        settingsBill.setCriticalLevel(10);
        settingsBill.setSmsCost(0.85);
        settingsBill.setCallCost(1.35);


        settingsBill.sendSms();
        settingsBill.makeCall();
        settingsBill.sendSms();


        assert.equal(3.05, settingsBill.getTotalCost());
        assert.equal(1.35, settingsBill.getTotalCallCost());
        assert.equal(1.70, settingsBill.getTotalSmsCost());
    });


});

describe("warning and critical level", function () {
    it("should return a class name of 'warning' if warning level is reached", function () {
        let settingsBill = BillWithSettings();

        settingsBill.setCallCost(1.35);
        settingsBill.setSmsCost(0.85);
        settingsBill.setWarningLevel(5);
        settingsBill.setCriticalLevel(10);

        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();


        assert.equal("warning", settingsBill.totalClassName())
    });


    it("should return a class name of 'critical' if critical level is reached", function () {
        let settingsBill = BillWithSettings();

        settingsBill.setCallCost(2.50);
        settingsBill.setSmsCost(0.85);
        settingsBill.setCriticalLevel(10);

        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();


        assert.equal("critical", settingsBill.totalClassName())
    });

    it("should stop the total call cost from increasing when the critical level is reached", function () {
        let settingsBill = BillWithSettings();

        settingsBill.setCallCost(2.50);
        settingsBill.setSmsCost(0.85);
        settingsBill.setCriticalLevel(10);

        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();


        assert.equal("critical", settingsBill.totalClassName());
        assert.equal(10, settingsBill.getTotalCallCost())

    });
    it("should allow the total to increase after the critcal level and then upping the critical level ", function () {
        let settingsBill = BillWithSettings();

        settingsBill.setCallCost(2.50);
        settingsBill.setSmsCost(0.85);
        settingsBill.setWarningLevel(8);
        settingsBill.setCriticalLevel(10);


        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();


        assert.equal("critical", settingsBill.totalClassName());
        assert.equal(10, settingsBill.getTotalCallCost());

        settingsBill.setCriticalLevel(20);
        assert.equal("warning", settingsBill.totalClassName());
        settingsBill.makeCall();
        settingsBill.makeCall();
        assert.equal(15, settingsBill.getTotalCallCost());


    });


});