import React from "react";
import ReactDOM from "react-dom";
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import { startSetExpenses, startRemoveExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
// import './playground/promises';

const store = configureStore();

// Provider gives all the components access to store
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById("box"));
});