const cpy = require('cpy');
import { processUrl } from './environmentProcesser';

test('processing auth url without an environment gets localhost 8000', () => {
  expect(processUrl('auth')).toEqual('localhost:8000/api/');
});

test('processing auth url with the urls test environment gets farawayhost 0008', () => {
    cpy(['test/urls.environment.json'], 'src', {rename: basename => `environment.json`});
    expect(processUrl('auth')).toEqual('farawayhost:0008/api/');
    cpy(['test/default.environment.json'], 'src', {rename: basename => `environment.json`});

  });
  
  test('processing auth url with the apis test environment gets kindaclose 007', () => {
    cpy(['test/urls.environment.json'], 'src', {rename: basename => `environment.json`});
    expect(processUrl('auth')).toEqual('kindaclose:0007/api/');
    cpy(['test/default.environment.json'], 'src', {rename: basename => `environment.json`});
  });

function moveEnvironmentPropertiesTEST(){

}