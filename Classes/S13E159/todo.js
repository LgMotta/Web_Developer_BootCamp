var todos = [];

window.setTimeout(function(){
    var loop = true;


    while(loop===true){
        var input =  prompt("What would you want to do? ");
        console.log(input);
        if(input ==="new"){
            var item = prompt("what item would you want to save?");
            todos.push(item);
        }else if(input ==="list"){
            listTodos();
        }else if(input === "delete"){
            var index = prompt("What is the index of the item you want to delete?");
            todos.splice(index, 1);
        }else if(input === "quit"){
            console.log("HHHH");
            loop = false;
        }
    }


    function listTodos(){
        console.log("************");
        todos.forEach(function(todo, i){
            console.log(i + ": " + todo);
        });
        console.log("************");
    }

}, 500);
