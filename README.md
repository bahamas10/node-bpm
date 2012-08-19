BPM
===

Calculate BPM by tapping

Install
------

Install the command line tool `bpm`

    npm install -g bpm

Install locally to use as a module

    npm install bpm

Usage
-----

Command line

    bpm

As a module

``` js
var BPM = require('bpm');
var b = new BPM();
```

Example
-------

### Command line tool

Run `bpm` on the command line to tap out the beats, and let it calculate the
average BPM

    $ bpm
    Tap when ready... ctrl-c to break
    { count: 1 }
    { avg: 69.52491309385863, ms: 863, count: 2 }
    { avg: 67.6056338028169, ms: 912, count: 3 }
    { avg: 66.98920729438035, ms: 912, count: 4 }
    { avg: 66.6851903306474, ms: 912, count: 5 }
    { avg: 66.386368665634, ms: 920, count: 6 }
    { avg: 66.4819944598338, ms: 896, count: 7 }

In the output above you can see that it sits there waiting for you to tap.  When you
start tapping, it starts calculating the average BPM, and every tap it prints 3 fields.

* `avg` - The average BPM
* `ms` - The time in milliseconds from the previous to the current tap
* `count` - How many times you have tapped

It's also possible for `bpm` to read a stream on stdin.  The following is
possible, but not recommended

    $ yes | bpm

### Node Module

``` js
var BPM = require('bpm'),
    b = new BPM();

b.tap();
setTimeout(function() {
  console.log(b.tap());
}, 1000);
```
yields
``` json
{
  "avg": 59.46481665014866,
  "ms": 1009,
  "count": 2
}
```

Functions
---------

### var b = new BPM()

Create a new BPM object

### b.tap()

Trigger the tap event, it returns an object showing the current BPM statistics

### b.reset()

Reset the obj

Test
----

    npm test

License
-------

MIT Licensed
