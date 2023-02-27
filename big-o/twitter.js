//Find 1st, Find Nth...

const array = [{
    tweet: "hi",
    date: 2012
}, {
    tweet: "my",
    date: 2014
}, {
    tweet: "teddy",
    date: 2018
}];

array[0]; //O(1)
array[array.length - 1]; //O(1)

array[0].date //O(n^2);
console.log(array[0].date)