import { authFactory, JWTAuth, BaseAuth } from './auth';

test('Expect Auth Module to return JWTAuth', () => { 
    expect(authFactory() instanceof JWTAuth).toBeTruthy();
});