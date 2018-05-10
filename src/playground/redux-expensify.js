import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD EXPENSE
const addExpense = (
    { 
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0 
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

// REMOVE EXPENSE
const removeExpense = (
    {
        id = ""
    } = {}
) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// EDIT EXPENSE
const editExpense = ( id, updates ) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// SET TEXT FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT"
});

const sortByDate = () => ({
    type: "SORT_BY_DATE"
});

const setStartDate = ( startDate ) => ({
    type: 'SET_START_DATE',
    startDate
});

const setEndDate = (endDate ) => ({
    type: "SET_END_DATE",
    endDate
})

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => 
                id !== action.id
            );
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    // grab existing properties, and also new overriding properties
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return state;
                }
            });
        default:
            return state;
    }
}

const filtersReducerDefaultState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            console.log("setting state::::", state);
            console.log("setting action::::", action);
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
}

// GET VISIBLE EXPENSES
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    
    return expenses.filter((expense) => {   
        console.log("VISIBLE EXPENSES::: ", expense);
        console.log("VISIBLE EXPENSES text::: ", text);
        
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy == 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy == 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
}

// STORE CREATION
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log("Subscribing and calling store. Here are the visible expenses:: ", visibleExpenses);
});

const expense1 = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 1000 }));
const expense2 = store.dispatch(addExpense({ description: 'Groceries', amount: 400, createdAt: 500 }));
const expense3 = store.dispatch(addExpense({ description: 'Auto hippo', amount: 975, createdAt: -1000 }));

store.dispatch(removeExpense({ id : expense1.expense.id }));

// console.log("About to edit the expense:::");

// store.dispatch(editExpense( expense2.expense.id, { amount: 750 } ));

console.log("setting text filter to hippo");

store.dispatch(setTextFilter("hippo"));

console.log("About to sort:::"); 

store.dispatch(sortByAmount());
store.dispatch(sortByDate());

console.log("About to set start and end dates:::");

store.dispatch(setStartDate(125));
store.dispatch(setStartDate());
store.dispatch(setEndDate(1250));

// console.log("Expense add1:: ", add1);

// console.log("Calling store *********** ", store.getState());

const demoState = {
    expenses: [{
        id: "123",
        description: "January Rent",
        note: "Final payment",
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
}

// const user = {
//     name: "Lucy",
//     age: 29
// };

// console.log({
//     ...user,
//     location: 'Big Eagle',
//     age: 54
// });