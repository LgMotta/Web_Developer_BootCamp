var secretNumber = 7;

var guess = prompt("Guess a number");
guess = Number(guess);
alert(guess);

if(guess === secretNumber){
    alert("right!!");
}else{
    alert("wrong!");
}
