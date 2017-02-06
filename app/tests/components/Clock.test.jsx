const React = require('react'),
      ReactDOM = require('react-dom'),
      expect = require('expect'),
      $ = require('jQuery'),
      TestUtils = require('react-addons-test-utils');

const Clock = require('Clock');

describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).toExist();
  });

  describe('render', () => {
    it('should render clock to output', () => {
      // render the <Clock /> component with 62 seconds
      var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62} />);
      // convert above line into jQuery object to store the DOM root of the component
      var $el = $(ReactDOM.findDOMNode(clock));
      // then use $el to check the text value of property/class "clock-text"
      // i.e. what is actually rendered
      var actualText = $el.find('.clock-text').text();

      expect(actualText).toBe('01:02');
    });
  });

  describe('formatSeconds', () => {
    it('should format seconds', () => {
      // to run a test that uses a component, you have to render the component so
      // that it can access the methods on it: formatSeconds from the <Clock/>
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      // define number of seconds to pass in as 615
      var seconds = 615;
      // what you expect to come back: 10:15
      var expected = '10:15';
      // call it to store the actual result
      var actual = clock.formatSeconds(seconds);

      // make assertion with "expect" library
      expect(actual).toBe(expected);
    });

    it('should format seconds when min/sec are less than 10', () => {
      // to run a test that uses a component, you have to render the component so
      // that it can access the methods on it: formatSeconds from the <Clock/>
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      // define number of seconds to pass in as 615
      var seconds = 61;
      // what you expect to come back: 10:15
      var expected = '01:01';
      // call it to store the actual result
      var actual = clock.formatSeconds(seconds);

      // make assertion with "expect" library
      expect(actual).toBe(expected);
    });
  });
});
