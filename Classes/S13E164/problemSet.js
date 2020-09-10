var array = [];

array = [1, 2, 3, 4];

for(i = array.length-1;i>=0;i--){
console.log(array[i]);
}

console.log("**********");

function TestArray(){
    for(i = 1; i < array.length;i++){
        if(array[i] !== array[i-1]){return false;}
        return true;
    }
}

array = [1, 1, 3, 1]
TestArray()

console.log("**********");

var sumArray = function(){
    var sumArray=0;
    array.forEach(element => {
        sumArray += element;
    });
    console.log(sumArray);
}

sumArray();

console.log("**********");

var maxArray = function(){
    var max = 0;
    array.forEach(element => {
        if(element > max){max = element;}
    });

    console.log(max);
}

maxArray();