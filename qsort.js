const qsort = (arr) => {
    if (arr.length < 2 ) {
        return arr;
    } else {
        const pivot = Math.floor(Math.random() * arr.length);
        const less = arr.filter((item) => item < pivot);
        const greater = arr.filter((item) => item > pivot);
        return [...qsort(less), pivot, ...qsort(greater)];
    }
}
