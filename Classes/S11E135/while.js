var stringResult = "result: ";
var index = 10;

// index = -10;
// while(index<=19){
//     stringResult += index + " ";
//     index ++;
// }

// index = 10;
// while(index <=40){
//     if(index % 2 === 0){ stringResult += index + " "; }
//     index++;
// }

// index = 300;
// while(index <=333){
//     if(index % 2 !== 0){ stringResult += index + " "; }
//     index++;
// }

index = 5;
while(index <=50){
    if(index % 3 === 0 && index % 5 === 0 ){ stringResult += index + " "; }
    index++;
}

alert(stringResult);

