/*
    1) Tag Selector
    2) Class Selector
    3) Id Selector
    4) Attribute Selector

 */

/*-----Tag selector-----*/

$('.abc').click(function () {
    $(this).css({
        'background-color' : 'orange',
        padding : '10px',
        'box-shadow' : '0 0 15px black'
    });

});



/*---------Attribute------------*/

var textbox = $('input[type="text"]');
$(textbox).focus(functio/*
    1) Tag Selector
    2) Class Selector
    3) Id Selector
    4) Attribute Selector

 */

// tag selector
$('.abc').click(function() {
    $(this).css({
        'background-color' : 'orange',
        padding : '10px',
        'box-shadow' : '0 0 15px black'
    });
});

// Attribute Selector
var textBox = $('input[type="text"]');
$(textBox).focus(function() {
    $(this).css('background-color','lightblue');
});
$(textBox).blur(function() {
    $(this).css('background-color','white');
});

var passwordBox = $('input[type="password"]');
$(passwordBox).focus(function() {
    $(this).css('background-color','lightgreen');
});
$(passwordBox).blur(function() {
    $(this).css('background-color','white');
});

n () {
    $(this).css('background-color','orange');
});
$(textbox).blur(function () {
    $(this).css('background-color','white+');

});

var passwordbox = $('input[type="password"]');
$(passwordbox).focus(function () {
    $(this).css('background-color','blue');
});
$(passwordbox).blur(function () {
    $(this).css('background-color','blue');

});