var BPM = require('../'),
    b = new BPM();

setInterval(function() {
  var s = b.tap();
  console.log(s);
  if (s.count > 20) process.exit(0);
}, 250);
