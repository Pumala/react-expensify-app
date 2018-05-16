import selectExpenseTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses and no total', () => {

    const total = selectExpenseTotal([]);

    expect(total).toBe(0);

});

test('should correctly add up a single expense', () => {

    const total = selectExpenseTotal([expenses[0]]);

    expect(total).toBe(200);
});

test('should correctly add up a single expense', () => {

    const total = selectExpenseTotal(expenses);

    expect(total).toBe(114200);
});