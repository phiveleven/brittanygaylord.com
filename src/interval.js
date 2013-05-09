setInterval(function(){
  // current time
  $('address[data] time')
    .html((new Date).toLocaleTimeString());
  
  // -webkit vw resize bug
  $('a').css('z-index',1);
}, 1e3);
