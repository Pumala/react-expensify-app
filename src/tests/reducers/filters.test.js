import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT'});

    expect(state).toEqual({
        text: "",
        sortBy: "date",
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT'});

    expect(state).toEqual({
        ...state,
        sortBy: 'amount'
    });
});

test('should set sortBy to date', () => {

    const currentState = {
        text: "",
        sortBy: "amount",
        startDate: undefined,
        endDate: undefined
    };
    
    const action = { type: 'SORT_BY_DATE'};

    const state = filtersReducer(currentState, action);

    expect(state.sortBy).toEqual('date');
});

test('should set text filter', () => {
    
    const text = 'bill';

    const action = {
        type: 'SET_TEXT_FILTER',
        text: text
    };

    const result = filtersReducer(undefined, action);

    expect(result.text).toEqual(text);
});

test('should set startDate filter', () => {

    const startDate = moment().startOf('month').subtract(3, 'days');
    
    const action = {
        type: 'SET_START_DATE',
        startDate: startDate
    };

    const result = filtersReducer(undefined, action);

    expect(result.startDate).toEqual(startDate);
});

test('should set endDate filter', () => {

    const endDate = moment().endOf('month').add(2, 'days');

    const action = {
        type: 'SET_END_DATE',
        endDate: endDate
    };

    const result = filtersReducer(undefined, action);

    expect(result.endDate).toEqual(endDate);
    
});