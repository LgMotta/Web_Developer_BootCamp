var btn = document.querySelector("button");

btn.addEventListener("click", function(){
    document.body.style.background = GetColor();
});

function GetColor(){
    return "rgb(" + Math.floor(Math.random() * 255) + "," +  Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ")";
}