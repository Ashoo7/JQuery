/*  USE BS Cards
    1) Show + Hide => Toggle
    2) FadeIn + FadeOut => FadeToggle
    3) slideUp + SlideDown => SlideToggle
    4) animate
    5) Stop
 */

// Show & Hide Effect
var showCount = 0;
$('#button1').click(function() {
    if(showCount % 2 === 0){
        $(this).text('SHOW');
        $('#card1').hide(1000);
        showCount++;
    }
    else{
        $(this).text('HIDE');
        $('#card1').show(1000);
        showCount++;
    }
});

// Toggle Effect
$('#button2').click(function() {
    var buttonText = $(this).text();
    if(buttonText === 'HIDE'){
        $(this).text('SHOW');
    }
    else{
        $(this).text('HIDE');
    }
    $('#card2').toggle(1000);
});


// FadeIn , FadeOut
var fadeCount = 0;
$('#button3').click(function() {
    if(fadeCount % 2 === 0){
        $(this).text('FadeIn');
        $('#card3').fadeOut(1000);
        fadeCount++;
    }
    else{
        $(this).text('FadeOut');
        $('#card3').fadeIn(1000);
        fadeCount++;
    }
});

// Fade Toggle Effect
$('#button4').click(function() {
    var buttonText = $(this).text();
    if(buttonText === 'FadeOut'){
        $(this).text('FadeIn');
    }
    else{
        $(this).text('FadeOut');
    }
    $('#card4').fadeToggle(1000);
});

// SlideIn , SlideUp Effects
var slideCount = 0;
$('#button5').click(function() {
    if(slideCount % 2 === 0){
        $(this).text('SlideDown');
        $('#card5').slideUp(1000);
        slideCount++;
    }
    else{
        $(this).text('SlideUp');
        $('#card5').slideDown(1000);
        slideCount++;
    }
});

// Slide Toggle Effect
$('#button6').click(function() {
    var buttonText = $(this).text();
    if(buttonText === 'SlideUp'){
        $(this).text('SlideDown');
    }
    else{
        $(this).text('SlideUp');
    }
    $('#card6').slideToggle(1000);
});

// animate effect
$('#button7').click(function() {
    $('#card7').animate({
        'transform' : 'translateX(10px)'
    });
});
