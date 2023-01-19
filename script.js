var level_counter = 1; 
var num_levels = 2;

$("#instructions").click(function(){
    $("#instructions_popup").toggle();
});

$("button.answers1").click(function(){
    $(this).css("border", "blue solid 5px");
});
// this will make the border appear when clicked on, so can only click on the correct answers on the right side image

$("#show_answers").click(function(){
    $(`img.level${level_counter}`).toggle();
    $(`answers${level_counter}_img`).toggle();
    if ($('button.answers1').prop('disabled') == true){
        $('button.answers1').prop('disabled', false);
    }
    else {
        $("button.answers1").prop('disabled', true); 
    } //prop for disabled property, not attribute 
});

$("#next_level").click(function(){
    $(`img.level${level_counter}`).hide();
    $(`answers${level_counter}_img`).hide();
    $('button.answers1').prop('disabled', true); //this one does not generalize when adding more levels bc of button method
    if (level_counter < num_levels){
        level_counter++;     //go to next level #
    }
    else {
        level_counter = 1; //reset after hit the end 
    }
    $("#label").text(`Level ${level_counter}:`);
    $(`img.level${level_counter}`).show();
    $(`#answers${level_counter}_img`).hide();
    //need to close all the things from the old level
    //and enable all of the things from the new level 
});