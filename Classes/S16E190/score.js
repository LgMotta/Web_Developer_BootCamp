var btn_p1 = document.querySelector("#p1");
var btn_p2 = document.querySelector("#p2");
var btn_reset = document.querySelector("#reset");
var num_input = document.querySelector("input");
var p1_display = document.querySelector("#p1Score");
var p2_display = document.querySelector("#p2Score");
var max_display = document.querySelector("#maxScore");


var p1_score = 0;
var p2_score = 0;
var max_score = 1;
var game_over = false;

Check_GameOver();

btn_p1.addEventListener("click", function(){
    if(!game_over){
        p1_score++;
        Update_P1();
        Check_GameOver(p1_display)
    }
})

btn_p2.addEventListener("click", function(){
    if(!game_over){
        p2_score++;
        Update_P2();
        Check_GameOver(p2_display)
    }
})

btn_reset.addEventListener("click", function(){
    Reset();
})

num_input.addEventListener("change", function(){
    max_score = Number(num_input.value);
    Update_maxScore();
})


function Check_GameOver(display){
    if(p1_score === max_score || p2_score === max_score){
        game_over = true;
        display.classList.add("winner");
    }
}


function Reset(){
    p1_score = 0;
    p2_score = 0;
    Update_P1();
    Update_P2();

    game_over = false;

    p1_display.classList.remove("winner");
    p2_display.classList.remove("winner");
}

function Update_P1(){
    p1_display.textContent = p1_score;
}

function Update_P2(){
    p2_display.textContent = p2_score;
}

function Update_maxScore(){
    max_display.textContent = max_score;
    Reset();
}