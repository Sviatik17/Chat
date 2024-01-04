let socket = io();
$('.popup').hide(0);
let countClick=0;
$('#smileIcon').click(function(){
   
    if(countClick%2==0){
        $('.popup').show(500);
    }else  {
        $('.popup').hide(500);
    }
    countClick++;
});
$('.settings').hide(0)
$('#settingsIcon').click(function(){
    $('.settings').fadeIn(500)
})
$('#close').click(function(){
    $('.settings').fadeOut(500)
})
$('#bg1').click(function(){
    $('body').css('background-image', 'url(./img/background1.jpg)')
    $('i').css('color','#fff')
    $('#close').css('color','#000')
    
});
$('#bg2').click(function(){
    $('body').css('background-image', 'url(./img/background2.jpg)')
    $('i').css('color','#fff')
    $('#close').css('color','#000')

});
$('#bg3').click(function(){
    $('body').css('background-image', 'url(./img/background4.jpg)')
    $('i').css('color','#000')
    $('#close').css('color','#000')
});
$('#bg4').click(function(){
    $('body').css('background-image', 'url(./img/background5.jpg)')
    $('i').css('color','#fff')
    $('#close').css('color','#000')
});
$('#bg5').click(function(){
    $('body').css('background-image', 'url(./img/background10.jpg)')
    $('i').css('color','#fff')
    $('#close').css('color','#000')
});
$('#bg6').click(function(){
    $('body').css('background-image', 'url(./img/background6.webp)')
    $('i').css('color','#000')
    $('#close').css('color','#000')
});
$('#bg7').click(function(){
    $('body').css('background-image', 'url(./img/background7.jpg)')
    $('i').css('color','#000')
    $('#close').css('color','#000')
});
$('#bg8').click(function(){
    $('body').css('background-image', 'url(./img/background8.jpg)')
    $('i').css('color','#000')
    $('#close').css('color','#000')
});
$('#bg9').click(function(){
    $('body').css('background-image', 'url(./img/background9.jpg)')
    $('i').css('color','#fff')
    $('#close').css('color','#000')
});


let emojiCodes=['128512',`128513`,'128514','128515','128516','128517','128518','128519','128520','128521',
'128522','128523','128524','128525','128526','128527','128528','128529','128530','128531','128533',
'128534','128535','128536','128537','128539','128540','128541','128542','128545','128074','128076','128077','128078','128079','128075']

$('.emoji').click(function(e){
    console.log(e.target.id.slice(5)-1)
    console.log(emojiCodes[e.target.id.slice(5)-1])
     $('#message_info').val(  $('#message_info').val()+String.fromCodePoint(emojiCodes[e.target.id.slice(5)-1]));
})
$('#form').submit(function() {
   
    socket.emit('chat message', $('#message_info').val());
    $('#message_info').val('');
    return false;
});
socket.on('chat message', function(data) {
    $('#messages').append($('<li>').text(data));
});


