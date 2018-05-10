import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, note, amount, createdAt }) => (
    <li>
        <p>ID: {id}</p>
        <Link to={`/edit/${id}`}>
            <p>Description: {description}</p>
        </Link>
        <p>Note: {note}</p>
        <p>Amount: {amount}</p>
        <p>Created At: {createdAt}</p>
        <button>Expense Item Page</button>
    </li>
);

export default ExpenseListItem;