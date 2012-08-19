var BPM = require('../'),
    b = new BPM();

setInterval(function() {
  var s = b.tap();
  console.log(s);
  if (s.count > 10) process.exit(0);
}, 1000);
