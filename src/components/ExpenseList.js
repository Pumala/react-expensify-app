import React from 'react';
// called connect because it connects your component to the redux store
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => {
    return (
        <div className="content-container">
            <div className="list-header">
                <div className="show-for-mobile">Expenses</div>
                <div className="show-for-desktop">Expense</div>
                <div className="show-for-desktop">Amount</div>
            </div>
                <div className="list-body">
                {
                    props.expenses.length === 0 ? (
                        <div className="list-item list-item--message">
                            <span>No expenses</span>
                        </div>
                    ) : (
                        props.expenses.map((expense) => {
                            return <ExpenseListItem key={expense.id} {...expense} />
                        })
                    )
                }
                </div>
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