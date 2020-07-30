/*
    1) SMS App
    2) Enable Submit Button if file selected
    3) Show Password with check Box
    4) Change Images with button
    5) Display Triangle Strings with Text Box

 */

// SMS App
var maxLength = 100;
$('#textarea').keyup(function() {
    $('#char-count').text(maxLength - ($(this).val().length));
});

// Enable Upload Button
$('#input-file').change(function() {
    $('#upload-button').removeAttr('disabled');
});

// Show Password
var checkCount = 0;
$('#check').change(function() {
    if(checkCount %2 === 0){
        $('#password-input').attr('type','text');
        checkCount++;
    }
    else{
        $('#password-input').attr('type','password');
        checkCount++;
    }
});

// Change Images
$('#btn1').click(function() {
    changeImage(1);
});
$('#btn2').click(function() {
    changeImage(2);
});
$('#btn3').click(function() {
    changeImage(3);
});

function changeImage(number) {
    $('#src-img').attr('src','../img/image' + number + '.jpeg');
}

// TriangleOne String
$('#triangle-one-input').keyup(function() {
    $('#triangle-one-text').text(triangleOne($(this).val()));
});

function triangleOne(str) {
    var tempStr = '';
    for(var i=0; i<=str.length; i++){
        tempStr += str.substr(0,i) + '\n';
    }
    return tempStr;
}