import assert from "assert";
import totalPhoneBill from "../totalPhoneBill.js";

describe("testing my function called totalPhoneBill", function(){
    it("it should take in a string calls made and sms's sent and return the total bill for the provided data", function(){
      assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    });
  
  });