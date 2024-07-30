import assert from "assert";
import transportFee from "../transportFee.js";

describe("testing my transportFee function,", function(){
    it("it should use the conditional statement and return a fee for different shifts", function(){
      assert.equal(transportFee('morning'), 'R20');
    });  
  
    it("it should return R10 for afternoon fee", function(){
      assert.equal(transportFee('afternoon'), 'R10');
  
    });
  
    it("it should return free for the night shift", function(){
      assert.equal(transportFee('nightshift'), 'free');
  
    });
  
  });