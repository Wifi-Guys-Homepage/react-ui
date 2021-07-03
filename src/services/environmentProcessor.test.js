const cpy = require('cpy');
import { processUrl } from './environmentProcesser';

test('processing auth url without an environment gets localhost 8000', () => {
    expect(processUrl('auth')).toEqual('localhost:8000/api/');
});
