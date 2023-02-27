function booooo(n){
    for(let i = 0; i < n.length; i++){
        console.log("booo!")
    }
}

booooo([1, 2, 3, 4, 5]) //O(1)


function hiTimes(n){
    let hiArray = [];
    for (let i =0; i < n.length; i++){
        hiArray[i] = 'hi';
    }
    return hiArray;
}

hiTimes(6) //O(n)