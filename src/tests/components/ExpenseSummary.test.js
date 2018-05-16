import React from 'react';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import { shallow } from 'enzyme';

test('should render Expense Summary correctly with no expense', () => {
    const wrapper = shallow(<ExpenseSummary expensesCount={0} expensesTotal={0} />);

    expect(wrapper).toMatchSnapshot();
});

test('should render Expense Summary correctly with 1 expense', () => {
    const wrapper = shallow(<ExpenseSummary expensesCount={1} expensesTotal={235} />);

    expect(wrapper).toMatchSnapshot();
    
});

test('should render Expense Summary correctly with multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary expensesCount={23} expensesTotal={4758374} />);

    expect(wrapper).toMatchSnapshot();
    
});