import authReducer from '../../reducers/auth';

test('should set uid for login', () => {

    const action = {
        type: 'LOGIN',
        uid: '12345'
    };
    const state = authReducer({}, action);

    expect(state.uid).toEqual(action.uid);
});

test('should clear uid for user', () => {

    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({ uid: '8989'}, action);

    expect(state).toEqual({});
});