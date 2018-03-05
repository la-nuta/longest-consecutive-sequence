module.exports = function longestConsecutiveLength(array) {

    let store = {},
        count = 1,
        maxCount = 1,
        min = array[0];

    if (array.length === 0) {
        return 0;
    }

    for (let i = 0; i < array.length; i++) {
        store[array[i]] = array[i];
    }

    for (let i = 1; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
        }
    }

    for (let key in store) {
        if (store[key] === min + 1) {
            min++;
            count++;
        } else if (store[key] !== min) {
            min = store[key];
            maxCount = Math.max(count, maxCount);
            count = 1;
        }
    }

    return maxCount;

};
