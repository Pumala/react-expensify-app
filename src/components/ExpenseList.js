import React from 'react';
// called connect because it connects your component to the redux store
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => {
    return (
        <div>
            <h1>Expense List</h1>
            <ul>
            {
                props.expenses.length === 0 ? (
                    <li>No expenses found.</li>
                ) : (
                    props.expenses.map((expense) => {
                        return <ExpenseListItem key={expense.id} {...expense} />
        
                        // expense={expense} or {...expense}
                        // similar, not the same
                    })
                )
            }
            </ul>
        </div>
    )
};

// this function lets us determine what info we want from the store that 
    // we want our component to access
const mapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses, state.filters)
})

// export HOC
export default connect(mapStateToProps)(ExpenseList); 



// Alt below
// HOC
// const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);

// export default ConnectedExpenseList;