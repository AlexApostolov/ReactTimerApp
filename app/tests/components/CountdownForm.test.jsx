const expect = require('expect'),
      React = require('react'),
      ReactDOM = require('react-dom'),
      TestUtils = require('react-addons-test-utils'),
      $ = require('jQuery');

const CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
  it('should exist', () => {
    expect(CountdownForm).toExist();
  });

  // check if your "expect spy" gets called when there's a valid value in the input field: 0-9
  it('should call onSetCountdown if valid seconds entered', () => {
    // create "spy" to pass down into <CountdownForm/>
    var spy = expect.createSpy();
    // render <CountdownForm/> to test its onSetCountdown function with "spy" injected
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
    var $el = $(ReactDOM.findDOMNode(countdownForm));

    // set the value
    countdownForm.refs.seconds.value = '109';
    // simulate submitting the form
    TestUtils.Simulate.submit($el.find('form')[0]);

    // assert that function was called with 109
    expect(spy).toHaveBeenCalledWith(109);
  });

  it('should NOT call onSetCountdown if invalid seconds entered', () => {
    // create "spy" to pass down into <CountdownForm/>
    var spy = expect.createSpy();
    // render <CountdownForm/> to test its onSetCountdown function with "spy" injected
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
    var $el = $(ReactDOM.findDOMNode(countdownForm));

    // set the value
    countdownForm.refs.seconds.value = '1:09';
    // simulate submitting the form
    TestUtils.Simulate.submit($el.find('form')[0]);

    // assert that function was NOT called with 1:09
    expect(spy).toNotHaveBeenCalled();
  });
});
