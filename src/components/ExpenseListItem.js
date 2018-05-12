import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, note, amount, createdAt }) => (
    <li>
        <p>ID: {id}</p>
        <Link to={`/edit/${id}`}>
            <p>Description: {description}</p>
        </Link>
        <p>Note: {note}</p>
        <p>
            Amount: {numeral(amount / 100).format('$0,0.00')}
            <br />
            Created At: {moment(createdAt).format("MMMM Do, YYYY ")}
        </p>
        <button>Expense Item Page</button>
    </li>
); 

export default ExpenseListItem;