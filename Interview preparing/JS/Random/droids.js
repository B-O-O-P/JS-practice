function makeDroids() {

    var droids = [];

    /* test */
    for (var i = 0; i < 10; i++) {
        var droid = function () {
            console.log("R2D" + i);
        };
        droids.push(droid);
    }
    /* test */

    return droids;
}

for (let d of makeDroids()) {
    d();
}

function makeDroids1() {

    var droids = [];

    /* test */
    for (let i = 0; i < 10; i++) {
        var droid = function () {
            console.log("R2D" + i);
        };
        droids.push(droid);
    }
    /* test */

    return droids;
}

for (let d of makeDroids1()) {
    d();
}

function makeDroids2() {

    var droids = [];

    /* test */
    for (var i = 0; i < 10; i++) {
        (function (i) {
            var droid = function () {
                console.log("R2D" + i);
            };
            droids.push(droid)
        })(i);
    }
    /* test */

    return droids;
}

for (let d of makeDroids2()) {
    d();
}
