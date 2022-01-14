import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  xit('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })
  // add() test
  xit('should add 1 to 4 and get 5', () => {
    const button1 = container.find('#number1');
    const button4 = container.find('#number4');
    const buttonAdd = container.find('#operator-add')
    const buttonEquals = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');
    button1.simulate('click');
    buttonAdd.simulate('click');
    button4.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('5');
  })
  // subtract() test
  xit('should subtract 4 from 7 and get 3', () => {
    const button7 = container.find('#number7');
    const button4 = container.find('#number4');
    const buttonSub = container.find('#operator-subtract')
    const buttonEquals = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');
    button7.simulate('click');
    buttonSub.simulate('click');
    button4.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  })

  // multiply() test
  xit('multiply 3 by 5 and get 15', () => {
    const button3 = container.find('#number3');
    const button5 = container.find('#number5');
    const buttonMultiply = container.find('#operator-multiply')
    const buttonEquals = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');
    button3.simulate('click');
    buttonMultiply.simulate('click');
    button5.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('15');
  })
  // subtract() test
  xit('should divide 21 by 7 and get 3', () => {
    const button7 = container.find('#number7');
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const buttonDiv = container.find('#operator-divide')
    const buttonEquals = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');
    button2.simulate('click');
    button1.simulate('click');
    buttonDiv.simulate('click');
    button7.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  })



  // numberclick() test 4 click of 7 button = 7777
  xit('should concatenate multiple number button clicks', () => {
    const button7 = container.find('#number7');
    const runningTotal = container.find('#running-total');
    button7.simulate('click');
    button7.simulate('click');
    button7.simulate('click');
    button7.simulate('click');
    expect(runningTotal.text()).toEqual('7777');
  })
  // operatorClick() test 2+1/2*7-2=8.5
  xit('should chain multiple operations together', () => {
    const button7 = container.find('#number7');
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const buttonDiv = container.find('#operator-divide')
    const buttonMultiply = container.find('#operator-multiply')
    const buttonSub = container.find('#operator-subtract')
    const buttonAdd = container.find('#operator-add')
    const buttonEquals = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');
    button2.simulate('click');
    buttonAdd.simulate('click');
    button1.simulate('click');
    buttonDiv.simulate('click');
    button2.simulate('click');
    buttonMultiply.simulate('click');
    button7.simulate('click');
    buttonSub.simulate('click');
    button2.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('8.5');
  })







  // clearClick() test 2+1/2*7-2 => click clear => running total = 0
  it('should clear the running total', () => {
    const button7 = container.find('#number7');
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const buttonDiv = container.find('#operator-divide');
    const buttonMultiply = container.find('#operator-multiply');
    const buttonSub = container.find('#operator-subtract');
    const buttonAdd = container.find('#operator-add');
    const buttonClear = container.find('#clear');
    const runningTotal = container.find('#running-total');
    button2.simulate('click');
    buttonAdd.simulate('click');
    button1.simulate('click');
    buttonDiv.simulate('click');
    button2.simulate('click');
    buttonMultiply.simulate('click');
    button7.simulate('click');
    buttonSub.simulate('click');
    button2.simulate('click');
    buttonClear.simulate('click');
    expect(runningTotal.text()).toEqual('0');
  })
})
