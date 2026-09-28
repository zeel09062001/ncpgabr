const { add } = require('./app');

if (add(2, 3) !== 5) {
  throw new Error("Test Failed: 2 + 3 should equal 5");
} else {
  console.log("SUCCESS: All tests passed!");
}
