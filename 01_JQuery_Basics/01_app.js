/*
    1) Inline JQuery with a paragraph
    2) Internal JQuery with a Card
    3) External JQuery with a Card
 */

$('#green-button').click(function () {
    var buttonValue = $(this).text();
    if(buttonValue === 'HIDE'){
        $(this).text('SHOW');
    }
    else{
        $(this).text('HIDE');
    }
    $('#green-card').fadeToggle(1000);
});