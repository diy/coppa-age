var test = require("tap").test;
var coppaAge = require('./');

test('13 and up return true', function (t) {
    t.ok(coppaAge(13), '13 returns true');
    t.ok(coppaAge(14), '14 returns true');
    t.ok(coppaAge(100), '100 returns true');
    t.end();
});

test('11 and under return false', function (t) {
    t.notOk(coppaAge(12), '12 returns false');
    t.notOk(coppaAge(11), '11 returns false');
    t.notOk(coppaAge(5), '5 returns false');
    t.end();
});
