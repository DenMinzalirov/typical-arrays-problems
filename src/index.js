exports.min = function min(array) {
    if (!arguments.length || array.length == 0) {
        return 0
    }
    return Math.min(...array);
};

exports.max = function max(array) {
    if (!arguments.length || array.length == 0) {
        return 0
    }
    return Math.max(...array);
};

exports.avg = function avg(array) {
    if (!arguments.length || array.length == 0) {
        return 0
    }
    const result = array.reduce(function(sum, current) {
        return sum + current;
    }, 0);
    return result / array.length
};
