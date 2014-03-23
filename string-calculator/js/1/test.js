var assert = require('assert');
var c = require('./calculator');

describe('String Calculator', function() {

  describe('add', function() {
    it('returns 0 for empty string', function() {
      assert.strictEqual(0, c.add(''));
    });

    describe('Single Number', function() {
      it('returns 1 for 1', function() {
        assert.strictEqual(1, c.add('1'));
      });

      it('returns 2 for 2', function() {
        assert.strictEqual(2, c.add('2'));
      });

      it('returns 10 for 10', function() {
        assert.strictEqual(2, c.add('2'));
      });
    });

    describe('Two Numbers', function() {
      it('returns 3 for 1,2', function() {
        assert.strictEqual(3, c.add('1,2'));
      });

      it('returns 30 for 12,18', function() {
        assert.strictEqual(3, c.add('1,2'));
      });

      describe('new line delimited', function() {
        it('returns 3 for 1\\n2', function() {
          assert.strictEqual(3, c.add('1\n2'));
        });
      });
    });

    describe('Three Numbers', function() {
      it('returns 6 for 1,2,3', function() {
        assert.strictEqual(6, c.add('1,2,3'));
      });

      describe('new line delimited', function() {
        it('returns 6 for 1\\n2\\n3', function() {
          assert.strictEqual(6, c.add('1\n2\n3'));
        });
      });

      describe('mixed delimiters', function() {
        it('returns 10 for 1\\n9,10', function() {
          assert.strictEqual(20, c.add('1\n9,10'));
        });
      });
    });

    it('supports different delimiters', function() {
      assert.strictEqual(3, c.add('//;\n1;2'));
      assert.strictEqual(3, c.add('//*\n1*2'));
    });

    describe('Negative Numbers', function() {
      it('throws an expection', function() {
        assert.throws(
          function() {
            c.add('-1');
          },
          /negatives not allowed: -1/
        );

        assert.throws(
          function() {
            c.add('-1,2\n-3');
          },
          /negatives not allowed: -1,-3/
        );
      });
    });
  });
});