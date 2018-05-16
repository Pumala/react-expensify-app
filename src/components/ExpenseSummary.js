import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpenseSummary = ({ expensesCount, expensesTotal }) => {
    const expenseWord = expensesCount > 1 ? 'expenses' : 'expense';
    const formattedExpenseTotal = numeral(expensesTotal / 100).format('$0,0.00');

    return (
        <div>
            <p>Expenses Summary El</p>
            {expensesCount > 0 && <p>
                You are viewing {expensesCount} {expenseWord} totaling {formattedExpenseTotal}.
            </p>}
            {expensesCount < 1 && <p>There are no expenses at this time.</p>}
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    
    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpenseSummary);