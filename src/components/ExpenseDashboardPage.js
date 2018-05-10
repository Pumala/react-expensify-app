import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = (props) => {
    return (
        <div>
            <p>This is from Dashboard Component.</p>
            <ExpenseListFilters />
            <ExpenseList />
        </div>
    );
}

export default ExpenseDashboardPage;