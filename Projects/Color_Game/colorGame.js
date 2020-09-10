var color_display = document.getElementById("colorDisplay");
var msg_display = document.getElementById("messageDisplay");
var squares = document.querySelectorAll(".square");
var game_name = document.getElementById("gameName");
var btn_restart = document.getElementById("btnRestart");
var btns_mode = document.querySelectorAll(".mode");

var dificulty_lvl;
var colors = [];
var selected_color;

Setup();

function Setup(){
    //setup game
    dificulty_lvl = 6;

    SetupModeButtons();
    SetupRestartButton();
    Set_Game(dificulty_lvl);
}

//setup the dificulty buttons
function SetupModeButtons(){
    for(var i = 0;i < btns_mode.length;i++){
        btns_mode[i].addEventListener("click", function(){
            btns_mode[0].classList.remove("selected");
            btns_mode[1].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent === "Easy"){
                dificulty_lvl = 3;    
            }else{
                dificulty_lvl = 6;
            }
            Set_Game(dificulty_lvl);
        });
    }
}

//setup restart button
function SetupRestartButton(){
    btn_restart.addEventListener("click", function(){
        btn_restart.textContent = "New Colors";
        Set_Game(dificulty_lvl);
    });
}

function SetupSquares(){
    //setup the squares
    for( var i = 0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];

        squares[i].addEventListener("click", function(){
            var clicked_color = this.style.backgroundColor;

            if(clicked_color === selected_color){
                Right_Color(this);
            }else{
                Wrong_Color(this);
            }
        })
    }
}

//when the user select the wrong color
function Wrong_Color(square){
    msg_display.textContent = "Try Again";
    square.style.backgroundColor = "#232323";
}

//when the user select the right color
function Right_Color(square){
    msg_display.textContent = "Correct";
    Change_Color(selected_color);
    game_name.style.backgroundColor = selected_color;
    btn_restart.textContent = "Play again";
}

//change the square colors
function Change_Color(color){
    for( var i = 0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

//select one color to guess
function Select_Color(){
    return colors[Math.floor(Math.random() * colors.length)];
}

//generate random colors to use 
function Generate_Colors(num_colors){
    var ret_array = [];

    for(var i = 0; i<num_colors;i++){
        ret_array.push(Random_Color());
    }

    return ret_array;
}

//generate a random rgb string
function Random_Color(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    var color = "rgb(" + r + ", " + g + ", " + b + ")";

    return color;
}

//set the colors for square and hide if needed
function Set_Colors_Square(size){
    for( var i = 0; i<size; i++){
        squares[i].style.display = "block";
        squares[i].style.backgroundColor = colors[i];
    }
    for(var i = size;i<squares.length;i++){
        squares[i].style.display = "none";
    }
}


function Set_Game(size){
    colors = Generate_Colors(size);
    selected_color = Select_Color();
    msg_display.textContent = "";
    color_display.textContent = selected_color;
    Set_Colors_Square(size);
    SetupSquares();
    game_name.style.backgroundColor = "steelblue";
    
}

