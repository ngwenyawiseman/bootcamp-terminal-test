import assert from 'assert'
import fromWhere from '../fromWhere.js';

describe('testing my function called fromWhere', function(){
    it('it should take a car registration number as a parameter and returns Bellville if the car starts with CY', function(){
     assert.equal(fromWhere('CY 567489'), 'Bellville'); 
   
    });
   
   });
   describe('testing my function called fromWhere', function(){
     it('it should return Cape Town for the car registration number starts with CA', function(){ 
       assert.equal(fromWhere('CA 987504'), 'Cape Town');
   });
   
   });
   describe('testing my function called fromWhere', function(){
    it('for the car registration number that starts with ZN it should return some other place!', function(){
     assert.equal(fromWhere('ZN 568593'), 'Some other place!');
    });
   
   });