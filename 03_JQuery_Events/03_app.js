/*
    1) Click Event for a button BS Styles
    2) dblClick event for a button BS Styles
    3) Hover on an Image with opacity
    4) Focus Event & blur Event
    5) MouseEnter Event to show a BS Modal
 */

// Click event
$('#green-button').click(function () {
    $(this).removeClass('btn-success').addClass('btn-danger').text('Register');
});

// dblclick
$('#red-button').dblclick(function() {
    $(this).removeClass('btn-danger').addClass('btn-success').text('Login');
});

// Toggle Button
$('#blue-button').dblclick(function() {
    var buttonText = $(this).text();
    if(buttonText === 'HIDE'){
        $(this).text('SHOW');
    }
    else{
        $(this).text('HIDE');
    }
});

// Mouse Enter Event
$('#top-div').mouseenter(function() {
    $('#msg-modal').modal('show');
});

// keyup event for Input Field
$('#user-input').keyup(function() {
    $('#my-text').text(reverseString($(this).val()));
});

function reverseString(str) {
    var tempStr = '';
    for(var i = str.length-1; i>=0; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
}