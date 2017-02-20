var data = [1, 2, 3];

var doubled = data.reduce((acc, value) => {
    acc.push(value * 2);

    return acc;
}, []);

var doubledMap = data.map((item) => {
    return item * 2;
})

// console.log(`My doubled data with using .reduce: ${doubled}`);
// console.log(`My doubled data with using .map: ${doubledMap}`);

var data2 = [1, 2, 3, 4, 5, 6];

var evens = data2.reduce((acc, value) => {
    if(value % 2 === 0) {
        acc.push(value);
    }
    return acc;
}, []);

var evenFiltered = data2.filter((item) => {
    return (item % 2 === 0)
});

var mapFiltered = data2.filter((item) => {
    return (item % 2 === 0 )    
}).map((value) => {
    return value * 2;
})

// console.log(mapFiltered);

var bigData = [];

for(let i = 0; i < 1000000; i++) {
    bigData[i] = i;
}

console.time('bigData');

var mapFilteredBigData = bigData.filter((item) => {
    return (item % 2 === 0 )    
}).map((value) => {
    return value * 2;
})

console.timeEnd('bigData');

console.time('bigDataReduce');

var reducedBigData = bigData.reduce((acc, value) =>{
    if(value % 2 === 0) {
        acc.push(value * 2);
    }

    return acc
}, [])
console.timeEnd('bigDataReduce');