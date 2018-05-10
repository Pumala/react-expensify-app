import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { defaultFilters, altFilters } from '../fixtures/filters';
import moment from 'moment';

let wrapper, setStartDateSpy, setEndDateSpy, setTextFilterSpy, sortByDateSpy, sortByAmountSpy;

beforeEach(() => {
    setStartDateSpy = jest.fn();
    setEndDateSpy = jest.fn();
    setTextFilterSpy = jest.fn();
    sortByDateSpy = jest.fn();
    sortByAmountSpy = jest.fn();

    wrapper = shallow(
        <ExpenseListFilters
            setStartDate={setStartDateSpy}
            setEndDate={setEndDateSpy}
            setTextFilter={setTextFilterSpy}
            sortByDate={sortByDateSpy}
            sortByAmount={sortByAmountSpy}
            filters={defaultFilters}
        />
    );
})

test('should render ExpenseListFilters correctly with default filters', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters correctly with alt filters', () => {

    wrapper.setProps({ filters: altFilters });
    expect(wrapper).toMatchSnapshot();
});

test('should handle setTextFilter correctly', () => {
    const textFilter = 'rent';
    wrapper.find('input[type="text"]').simulate('change', {
        target: {
            value: textFilter
        }
    });
    expect(setTextFilterSpy).toHaveBeenLastCalledWith(textFilter);
});

test('should handle sortByDate correctly', () => {
    const value = 'date';
    wrapper.setProps({
        filters: altFilters
    });
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByDateSpy).toHaveBeenCalled();

});

test('should handle sortByAmount correctly', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByAmountSpy).toHaveBeenCalled();

});

test('should handle date changes correctly', () => {

    const startDate = moment(0).add(1, 'years');
    const endDate = moment(0).add(4, 'years');    

    wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });
    expect(setStartDateSpy).toHaveBeenLastCalledWith(startDate);
    expect(setEndDateSpy).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus changes correctly', () => {
    const focused = 'endDate';

    wrapper.find('DateRangePicker').prop('onFocusChange')(focused);
    expect(wrapper.state('calendarFocused')).toEqual(focused);
});