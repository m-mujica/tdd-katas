module.exports = (function() {

  var _sum = function(a, b) {
    return a + b;
  };

  var _digit = function(number) {
    var res = parseInt(number, 10);
    return (res === res) ? res : 0; // reject NaN values.
  };

  var _digits = function(numbers) {
    var del = _delimiter(numbers);

    numbers = numbers.replace(/\n/g, del);
    return numbers.split(del).map(_digit);
  };

  var _delimiter = function(numbers) {
    return (numbers.substr(0, 2) === '//') ? numbers.charAt(2) : ',';
  };

  var _negatives = function(digits) {
    return digits.filter(function(n) {
      return n < 0;
    });
  };

  return {
    add: function(numbers) {
      if (!numbers) return 0;

      var digits = _digits(numbers);
      var negatives = _negatives(digits);

      if (negatives.length) {
        throw new Error('negatives not allowed: ' + negatives.join(','));
      }

      return digits.reduce(_sum);
    }
  };

})();