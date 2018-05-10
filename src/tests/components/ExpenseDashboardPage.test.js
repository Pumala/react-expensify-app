import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';
import expenses from '../fixtures/expenses';

test('should render ExpenseDashboardPage correctly', () => {

    const wrapper = shallow(<ExpenseDashboardPage {...expenses} />);

    expect(wrapper).toMatchSnapshot();
});
