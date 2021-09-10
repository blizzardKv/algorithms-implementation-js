const array = [1, 2, 3, 1231, 1231, 123, 1, 3, 421321, 123];

const qsort = (arr) => {
    if (arr.length < 2 ) {
        return arr;
    }

    const pivotPosition =  Math.floor(Math.random() * arr.length);
    const pivot = arr[pivotPosition];
    const less = arr.filter((item) => item < pivot);
    const greater = arr.filter((item) => item > pivot);
    const equal = arr.filter((item) => item === pivot);
    return [...qsort(less), ...equal, ...qsort(greater)];
}

console.log(qsort(array));
