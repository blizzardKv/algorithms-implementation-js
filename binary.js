const array = [1, 231, 12312, 12314, 12, 312, 312312, 4444];

const sortedArr = (arr) => {
    return arr.sort((a, b) => a - b);
}

const binary = (arr, item) => {
    let lowElIndex = 0;
    let highElIndex = arr.length - 1;

    while (lowElIndex <= highElIndex) {
        const midElIndex = Math.floor((lowElIndex + highElIndex) / 2);
        const guessEl = arr[midElIndex];

        if (guessEl === item) return guessEl;

        if (guessEl > item) {
            highElIndex = midElIndex - 1;
        } else {
            lowElIndex = midElIndex + 1;
        }
    }

    return 'Element is not found';
}

console.log(binary(sortedArr(array), 12));
