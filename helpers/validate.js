// Validate price input
function validatePrice(price) {
    return typeof price === 'number' && price > 0;
  }
  
  module.exports = { validatePrice };
  