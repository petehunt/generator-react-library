var path = require('path'),
  nexpect = require('nexpect');

nexpect.spawn('node_modules/.bin/mocha', {stripColors: true})
  .wait('name:')
  .sendline('temp-app')
  .sendline('')
  .sendline('')
  .expect('keywords:')
  .sendline('')
  .sendline('')
  .sendline('')
  .expect('About to write to')
  .sendline('')
  .run(function (err) {
   if (!err) {
     console.log('node process started, console logged, process exited');
   }
   else {
     console.log(err)
   }
  });
