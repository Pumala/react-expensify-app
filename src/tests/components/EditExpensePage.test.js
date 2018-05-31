import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let startEditExpenseSpy, startRemoveExpenseSpy, wrapper, props, history;

beforeEach(() => {
    startEditExpenseSpy = jest.fn();
    startRemoveExpenseSpy = jest.fn();

    history = {
        push: jest.fn()
    }

    wrapper = shallow(
        <EditExpensePage
            startEditExpense={startEditExpenseSpy}
            startRemoveExpense={startRemoveExpenseSpy}
            history={history}
            expense={expenses[1]}
        />);
})

test('should render EditExpensePage correctly', () => {

    expect(wrapper).toMatchSnapshot();

});

test('should handle EditExpense correctly', () => {

    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpenseSpy).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);

});

test('should handle startRemoveExpense correctly', () => {

    wrapper.find('button').simulate('click');

    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpenseSpy).toHaveBeenLastCalledWith({ id: expenses[1].id });

});