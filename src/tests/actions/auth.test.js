import { login, logout } from '../../actions/auth';

test('should genenate login action object', () => {
    const uid = '898';
    const action = login(uid);

    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('should genenate logout action object', () => {

    const action = logout();

    expect(action).toEqual({
        type: 'LOGOUT'
    });
});