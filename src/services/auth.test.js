import { authFactory, JWTAuth, BaseAuth } from './auth';

test('Expect Auth Module to return JWTAuth', () => { 
    expect(authFactory() instanceof JWTAuth).toBeTruthy();
});

let fakeJWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
// you might recognise this JWT from jwt.io, or then again, you might not ;), either way, its their example
/**
 * Payload: 
 * {
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022
}
 */

test('Expect JWTAuth Module to return Subject as Username', () => {
    expect(new JWTAuth(fakeJWT).userName()).toEqual("1234567890");
})

test('Expect JWTAuth Module to return Thu Jan 18 2018 01:30:22 on issued time', () => {
  expect(new JWTAuth(fakeJWT).issuedTime()).toEqual(new Date(2018, 0, 18, 1, 30, 22));
})

test('Expect JWTAuth Module grant function fetches correct grant', () => {
  expect(new JWTAuth(fakeJWT).grant('name')).toEqual('John Doe');
})
