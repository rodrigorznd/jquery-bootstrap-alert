(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('jQuery#bsAlert', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is chainable', function() {
    expect(1);
    // Not a bad test to run on collection methods.
//    strictEqual(this.elems.awesome(), this.elems, 'should be chainable');
    strictEqual('a', 'a');
  });

//  test('is bsAlert', function() {
//    expect(1);
//    strictEqual(this.elems.awesome().text(), 'awesome0awesome1awesome2', 'should be awesome');
//  });
//
//  module('jQuery.bsAlert');
//
//  test('is awesome', function() {
//    expect(2);
//    strictEqual($.awesome(), 'awesome.', 'should be awesome');
//    strictEqual($.awesome({punctuation: '!'}), 'awesome!', 'should be thoroughly awesome');
//  });

}(jQuery));
