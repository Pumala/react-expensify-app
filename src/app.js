import React from "react";
import ReactDOM from "react-dom";
import AppRouter, { history } from './routers/AppRouter';
import { Provider } from 'react-redux';
import { startSetExpenses, startRemoveExpense, editExpense } from './actions/expenses';
import { login, logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import {firebase} from './firebase/firebase';
import LoadingPage from './components/LoadingPage';

const store = configureStore();

// Provider gives all the components access to store
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;

const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById("box"));
        hasRendered = true;
    }
};

ReactDOM.render(<LoadingPage />, document.getElementById("box"));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('User Id:', user.uid);
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }
        });
        console.log('loggined in', history);
    } else {
        console.log('Logged out!');
        store.dispatch(logout());
        renderApp();
        history.push('/');        
    }
});