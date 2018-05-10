import { createStore } from 'redux';

// To use redux, we need to access createStore. We call this function to 
// create a store. The store tracks our changing data over time. We have to
// pass a function in and that function gets called once right away. There is
// no state the first time redux calls it, so it uses the default state


// Action generators = functions that return action objects

// 1 way
// const incrementCount = (payload = {}) => ({
//    type: "INCREMENT",
//    incrementBy: typeof payload.incrementBy === "number" ? payload.incrementBy : 1
// });

// 2nd way
// const incrementCount = ({ incrementBy = 1}) => ({
//     type: "INCREMENT",
//     incrementBy: incrementBy
//  });

//  3rd way
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: "INCREMENT",
    incrementBy
 });

 const decrementCount = ({ decrementBy = 1} = {}) => ({
    type: "DECREMENT",
    decrementBy
 });

 const resetCount = () => ({
    type: "RESET",
    count: 0
 });

 const setCount = ({ count = 10 } = {}) => ({
    type: "SET",
    count
 });

const countReducer = (state = { count: 0 }, action) => {
    console.log("creating store.......");
    console.log("what is the action.....", action);

    switch(action.type) {
        case "RESET":
            return {
                count: 0
            };
        case "INCREMENT":
            return {
                count: state.count + action.incrementBy
            };
        case "DECREMENT":
            return {
                count: state.count - action.decrementBy
            };
        case "SET":
            return {
                count: action.count
            };
        default:
            return state;
    }
};

const store = createStore(countReducer);

// called whenever the store changes
store.subscribe(() => {
    console.log("A change has occured!");
});

console.log("Getting DEFAULT state: ", store.getState());

// Actions object gets sent to the store
// store gets called once in the beginning, and then everytime an action is dispatched
store.dispatch(incrementCount({ incrementBy: 3 }));

store.dispatch({
    type: "INCREMENT",
    incrementBy: 6    
});

store.dispatch({
    type: "INCREMENT",
    incrementBy: "hmmmmm"
});

console.log("Getting 10x INCREMENTED state: ", store.getState());

store.dispatch(decrementCount({ decrementBy: 5 }));

store.dispatch({
    type: "DECREMENT",
    decrementBy: "??????"
})

console.log("Getting 6X DECREMENTED state: ", store.getState());

store.dispatch(resetCount());

console.log("Getting RESETTED state: ", store.getState());

store.dispatch(setCount({ count: 115}))

console.log("Getting the SET state: ", store.getState());