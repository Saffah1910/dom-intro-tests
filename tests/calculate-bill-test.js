describe("Calculate bill function" , function(){
   
    it("should return 5.50 if 2 calls were made",function(){
    
        assert.equal(5.50, calculateBill("CALL,call"))
    });

    it("should return R3.00 if 4 calls were made",function(){
        assert.equal(3.00 ,calculateBill("sms,sMs,Sms,SMS"))
    });
    it("should return R3.50 if one call and one sms is made",function(){
        assert.equal(3.50, calculateBill("call,sms"))
    })

})