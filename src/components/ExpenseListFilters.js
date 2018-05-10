import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };
    onTextFilterChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };
    onFocusChange = (calendarFocused) => {
        this.setState({ calendarFocused });
    };
    onDatesChange = ({ startDate, endDate}) => {
        
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);        
    };
    onSortByChange = (e) => {
        const value = e.target.value;

        if (value == 'date') {
            this.props.sortByDate();
        } else {
            this.props.sortByAmount();
        }
    };
    render() {
        return (
            <div>
                <input 
                    type="text" 
                    value={this.props.filters.text} 
                    onChange={this.onTextFilterChange} />
                <select 
                    value={this.props.filters.sortBy}
                    onChange={this.onSortByChange}>
                    <option>Select</option>        
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>            
                </select>
                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={false}
                    numberOfMonths={1}
                    isOutsideRange={() => false }
                />
            </div>
        );
    };
};

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);