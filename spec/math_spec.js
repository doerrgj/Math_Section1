// tell test where to find the code
var math = require('../math');

describe("A simple arithmetic program", function() {
	
	it("can add two numbers", function() {
		expect(math.add(3,5)).toBe(8);
	});
    
    it("can subtract two numbers", function() {
    	expect(math.subtract(3,5)).toBe(-2);
    });
    
	it("can multiply two numbers", function() {
		expect(math.multiply(3,5)).toBe(15);
	});
	
	it("can divide two numbers", function() {
		expect(math.divide(15,5)).toBe(3);
		expect(math.divide(15,0)).toBe("Error! Division by zero.");
	});
	
});