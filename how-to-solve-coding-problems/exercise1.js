// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
// For example:
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// should return false


// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
// should return true

// The function has 2 parameters -arrays- no size limit
// return true or false


//#1 
//O(a*b) nested loop (not the best solution)

// function containsCommonItem(arr1, arr2) {
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] === arr2[j]) {
//                 return true;
//             }
//         }
//     }
//     return false
// }

// console.log(containsCommonItem(array1, array2))





//#2 
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];

function containsCommonItem2(arr1, arr2) {
    //loop through first array and create object where properties === items in the array
    let map = {};
    for (let i = 0; i < arr1.length; i++) {
        if (!map[arr1[i]]) {
            const item = arr1[i];
            map[item] = true;
        }
    }

    //loop through second array and check if item in second array exists on created object.
    for (let j = 0; j < arr2.length; j++) {
        if (map[arr2[j]]) {
            return (arr2[j] + ": " + true);
        }
    }

    return false;
}

//O(a + b) better time complexity
console.log(containsCommonItem2(array1, array2))



//#3
function containsCommonItem3(arr1, arr2){
    return arr1.some(item => arr2.includes(item))
}

console.log(containsCommonItem3(array2, array2))