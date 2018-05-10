import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test("should setup remove expense action object", () => {
    const action = removeExpense({ id: 'abc123' });

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'abc123'
    });
});

test('should setup edit expense action object', () => {
    const action = editExpense( 'abc123', { 'note' : 'Newly edited!!' });

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'abc123',
        updates: {
            'note': 'Newly edited!!'
        }
    });
});

test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: "Rent",
        note: 'This was the current month\'s rent',
        amount: 120000,
        createdAt: 5500
    };

    const action = addExpense(expenseData);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });

});

test('should setup add expense action object with default values', () => {
    const action = addExpense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    });
});