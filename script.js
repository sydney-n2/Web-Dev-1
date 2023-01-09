$("#instructions").click(function(){
    $("#instructions_popup").toggle();
});

$("button.answers").click(function(){
    $(this).css("border", "white solid 5px");
});
/* this will make the border appear when clicked on, so can only click on the correct answers on the right side image*/ 

$("#show_answers").click(function(){
    $("img").toggle();
})