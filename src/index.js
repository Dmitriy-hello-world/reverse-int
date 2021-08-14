module.exports = function reverse (num) {
    const arr = `${num}`.split('');
    let result = '';
    if(arr[0] == '-' || arr[0] == '0') {
        arr.shift();
    }
    for(let i = arr.length - 1; i >= 0; i--) {
        result += arr[i];
    }
    return +result;
}
