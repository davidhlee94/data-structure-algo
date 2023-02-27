const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];

const large = new Array(10000).fill('nemo');

function findNemo(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] === 'nemo'){
            console.log('Found NEMO!');
        }
    }
}

findNemo(large); 
// O(n) --> Linear Time
// It it going through each index in the array to check if it's Nemo
// O(10000)




function compressFirstBox(boxes){
    console.log(boxes[0]);
}
// O(1) --> Constant Time
// It's only pulling from the first index, no matter how large the array is



const boxes = [0, 1, 2, 3, 4, 5]
function logFirstTwoBoxes(boxes){
    console.log(boxes[0]); //O(1)
    console.log(boxes[1]); //O(1)
}

logFirstTwoBoxes(boxes) //O(1)
//It's not checking each index in the array. It's only checking the index of [0] and [1]