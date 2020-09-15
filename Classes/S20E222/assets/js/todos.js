$("ul").on("click", "li", function(e){
    $(this).toggleClass("completed");
    e.stopPropagation();
});

$("ul").on("click","span", function(e){
    $(this).parent().fadeOut(600, function(){
        $(this).remove();
    });
    e.stopPropagation();
});

$("input[type='text']").keypress(function(e){
    if(e.which === 13){
        var input_value = $(this).val();
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + input_value + "</li>");
        $(this).val("");
    }
});

$(".fa-plus").click(function(e){
    $("input[type='text']").fadeToggle();
});