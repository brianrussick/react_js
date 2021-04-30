import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import { findByTestAttr, checkProps, storeFactory } from '../test/testUtils';
import Input from './Input';

const setup = (initialState={}, secretWord='party') => {
    const store = storeFactory(initialState);
    return mount(<Provider store={store}><Input success={success} secretWord={secretWord} /></Provider>);
}

describe('render', () => {
    describe('success is true', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setup({success: true});
    });    
    describe('success is false', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setup({success: false});
        });
        test('Input renders without error', () => {
            const wrapper = setup();
            const inputComponent = findByTestAttr(wrapper, 'component-input');
            expect(inputComponent.length).toBe(1);
        });
        test('input box shows', () => {
            const inputBox = findByTestAttr(wrapper, 'input-box');
            expect(inputBox.exists()).toBe(true);
        });
        test('submit button shows', () => {
            const submitButton = findByTestAttr(wrapper, 'submit-button');
            expect(submitButton.exists()).toBe(true);
        });
    });
  });

test('does not throw warning with expected props', () => {
    checkProps(Input, { secretWord: 'party' });
});

describe('state controlled input field', () => {
let mockSetCurrentGuess = jest.fn();
let wrapper;
let originalUseState;


beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    originalUseState = React.useState;
    React.useState = () => ["", mockSetCurrentGuess];
    wrapper = setup({ success: false });
});
    afterEach(() => {
        React.useState = originalUseState;
    });

    test('state updates with value of input box upon change', () => {


        const inputBox = findByTestAttr(wrapper, 'input-box');

        const mockEvent = { target: { value: 'train' } };
        inputBox.simulate("change", mockEvent);

        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  });
  test('field is cleared upon submit button click', () => {
    const mockSetCurrentGuess = jest.fn();
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);

    const wrapper = setup();
    const submitButton = findByTestAttr(wrapper, 'submit-button');

    submitButton.simulate('click', { preventDefault() {} });
    expect(mockSetCurrentGuess).toHaveBeenCalled("");
  }) 
});
});