import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/*  Factory function to create ShallowWrapper for the App component
 *  @function setup
 *  @returns {ShallowWrapper}
*/
const setup = () => shallow(<App />);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`)

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app")
  expect(appComponent.length).toBe(1);
});

test('renders button', () => {
  const wrapper = shallow(<App />);
  const button = findByTestAttr(wrapper, "increment-button");
  expect(button.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = shallow(<App />);
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
});

test('renders increment button', () => {

});

test('renders counter display', () => {

});

test('counter display starts at 0', () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("0");
});

test('clicking button increments counter display', () => {
  const wrapper = setup();

  // find the button
  const button = findByTestAttr(wrapper, "increment-button");

  // click the button
  button.simulate('click');

  // find the display and test that the number has been incremented
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("1");
});
