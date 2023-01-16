var level_counter = 1; 
var num_levels = 2;

$("#instructions").click(function(){
    $("#instructions_popup").toggle();
});

$("button.answers").click(function(){
    $(this).css("border", "blue solid 5px");
});
// this will make the border appear when clicked on, so can only click on the correct answers on the right side image

$("#show_answers").click(function(){
    $("img").toggle();
    if ($('button.answers').prop('disabled') == true){
        $('button.answers').prop('disabled', false);
    }
    else {
        $("button.answers").prop('disabled', true); 
    } //prop for disabled property, not attribute 
});

$("#next_level").click(function(){
    if (level_counter < num_levels){
        level_counter++;     //go to next level #
    }
    else {
        level_counter = 1; //reset after hit the end 
    }
    //need to close all the things from the old level
    //and enable all of the things from the new level 
});