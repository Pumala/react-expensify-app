import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);

    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with data', () => {

    const wrapper = shallow(<ExpenseForm expenses={expenses[0]} />);

    expect(wrapper).toMatchSnapshot();

});

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });

    expect(wrapper.state('error').length).toBeGreaterThan(0);

    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = "New Description";

    wrapper.find('input[placeholder="Description"]').simulate('change', {
        target: {
            value
        }
    });

    expect(wrapper.state('description')).toBe(value);

    expect(wrapper).toMatchSnapshot();
});

test('should set note on textarea change', () => {
     const wrapper = shallow(<ExpenseForm />);
     const value = "New note";

     wrapper.find('textarea').simulate('change', {
        target: {
            value
        }
     });

     expect(wrapper.state('note')).toBe(value);
     expect(wrapper).toMatchSnapshot();
});

test('should set amount if valid input', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = '14.59';

    wrapper.find('input[placeholder="Amount"]').simulate('change', {
        target: {
            value
        }
    });

    expect(wrapper.state('amount')).toBe(value);
    expect(wrapper).toMatchSnapshot();

});

test('should not set amount if invalid input', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = '14.5958';

    wrapper.find('input[placeholder="Amount"]').simulate('change', {
        target: {
            value
        }
    });

    expect(wrapper.state('amount')).toBe('');
    expect(wrapper).toMatchSnapshot();
    
});

test('should call onSubmit prop for valid form submission', () => {

    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);

    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });

    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenCalledWith({
        description: expenses[0].description,
        note: expenses[0].note,
        amount: expenses[0].amount,
        createdAt: expenses[0].createdAt
    })

});

test('should set new date on date change', () => {
     
    const wrapper = shallow(<ExpenseForm />);
    const now = moment();

    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);

});

test('should set calendar focus on focus change', () => {
    
   const wrapper = shallow(<ExpenseForm />);
   const focused = true;

   wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
   expect(wrapper.state('calendarFocused')).toEqual(focused);

});