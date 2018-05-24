import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should setup default expenses array', () => {
    const result = expensesReducer(undefined, { type: '@@INIT' });

    expect(result).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const result = expensesReducer(expenses, action);

    expect(result).toEqual([ expenses[0], expenses[2]]);
});

test('should not remove expense by id if not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: 'blahhh'
    }
    const result = expensesReducer(expenses, action);

    expect(result).toEqual(expenses);
});

test('should add an expense', () => {

    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            description: 'groceries',
            amount: 555,
            note: '',
            createdAt: 0
        }
    };

    const result = expensesReducer(expenses, action);

    expect(result).toEqual([...expenses, action.expense ] );
});

test('should edit expense by id', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[2].id,
        updates: {
            note: 'birthday present purchase',
            amount: 4780
        }
    }
    const result = expensesReducer(expenses, action);

    expect(result[2]).toEqual({ ...expenses[2], ...action.updates} );
});

test('should not edit expense by id if not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: 'blahhhh',
        updates: {
            note: 'birthday present purchase',
            amount: 4780
        }
    }
    const result = expensesReducer(expenses, action);

    expect(result).toEqual( expenses );
});

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
});