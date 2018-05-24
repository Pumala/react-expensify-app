import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

let startAddExpenseSpy 
let history
let wrapper;

beforeEach(() => {
    startAddExpenseSpy = jest.fn();
    history = {
        push: jest.fn()
    };

    wrapper = shallow(<AddExpensePage startAddExpense={startAddExpenseSpy} history={history} />);
});

test('should render AddExpensePage correctly', () => {

    expect(wrapper).toMatchSnapshot();

}); 

test('should handle obSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startAddExpenseSpy).toHaveBeenLastCalledWith(expenses[1]);
});