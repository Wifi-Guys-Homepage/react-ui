import { authFactory, JWTAuth, BaseAuth } from './auth';

test('Expect Auth Module to return JWTAuth', () => { 
    expect(authFactory() instanceof JWTAuth).toBeTruthy();
});

let fake_jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
// you might recognise this JWT from jwt.io, or then again, you might not ;), either way, its not a real one
/**
 * Payload: 
 * {
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022
}
 */

test('Expect JWTAuth Module to return Subject as Username', () => {
    expect(new JWTAuth().userName()).toEqual("1234567890");
})

test('Expect JWTAuth Module to return Thu Jan 18 2018 01:30:22 on issued time', () => {
  expect(new JWTAuth().issuedTime()).toEqual(new Date(2018, 1, 18, 1, 30, 22));
})


test('Expect JWTAuth Module grant function fetches correct grant', () => {
  expect(new JWTAuth().grant('name')).toEqual('John Doe');
})