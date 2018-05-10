import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpenseSpy, removeExpenseSpy, wrapper, props, history;

beforeEach(() => {
    editExpenseSpy = jest.fn();
    removeExpenseSpy = jest.fn();

    history = {
        push: jest.fn()
    }
    // props = { 
    //         match: {
    //             params: expenses[1]
    //         },  
    //         history: {
    //             push: jest.fn()
    //         },
    //         expense: expenses[1]
    //     };

    wrapper = shallow(
        <EditExpensePage
            editExpense={editExpenseSpy}
            removeExpense={removeExpenseSpy}
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
    expect(editExpenseSpy).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);

});

test('should handle removeExpense correctly', () => {

    wrapper.find('button').simulate('click');

    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpenseSpy).toHaveBeenLastCalledWith({ id: expenses[1].id });

});