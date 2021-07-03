import { processUrl } from './environmentProcesser';

test('processing auth url without an environment gets localhost 8000', () => {
  expect(processUrl('auth')).toEqual('localhost:8000/api/');
});

test('processing auth url with the urls test environment gets farawayhost 0008', () => {
    expect(processUrl('auth')).toEqual('farawayhost:0008/api/');
  });
  
  test('processing auth url with the apis test environment gets kindaclose 007', () => {
    expect(processUrl('auth')).toEqual('farawayhost:0008/api/');
  });