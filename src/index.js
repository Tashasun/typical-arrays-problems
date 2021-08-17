exports.min = function mini(array) {
    if (!array || array.length === 0) {
        return 0;
    }
    let result = array.reduce((minimum, current) => {
        if (minimum > current) minimum = current;
        return minimum;
    }, Infinity);
    return result;
};

exports.max = function maxi(array) {
    if (!array || array.length === 0) {
        return 0;
    }
    let result = array.reduce((maximum, current) => {
        if (maximum < current) maximum = current;
        return maximum;
    }, -Infinity);
    return result;
};

exports.avg = function avg(array) {
    if (!array || array.length === 0) {
        return 0;
    }
    let result = array.reduce((sum, current) => sum + current, 0);

    return result / array.length;
};

// console.log(avge([1,5,1,5,2,4]));
// // console.log(avg([1, 2, 8, 9, 10, 11, 5]));
