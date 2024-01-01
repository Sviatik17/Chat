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
let emojiCodes=['128512',`128513`,'128514','128515','128516','128517','128518','128519','128520','128521',
'128522','128523','128524','128525','128526','128527','128528','128529','128530','128531','128533',
'128534','128535','128536','128537','128539','128540','128541','128542','128545','128074','128076','128077','128078','128079','128075']
// $('#emoji1').click(function(){
//     console.log(emojiCodes[0])
//  $('#message_info').val(  $('#message_info').val()+String.fromCodePoint(128512));
// })
$('.emoji').click(function(e){
    console.log(e.target.id.slice(5)-1)
    // let num=e.target.id
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


