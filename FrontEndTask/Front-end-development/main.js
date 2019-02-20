$('#signup').click(function(){
   window.location.replace('http://127.0.0.1:5500/login.html');
});

h2=document.querySelector('#current-time');

window.setInterval(()=>{

   var d=new Date();
   if(d.getSeconds() < 10)
   {
var time="Current Time - " + d.getHours() + ":" + d.getMinutes() + ":0" + d.getSeconds();

   }
   else{
      var time="Current Time - " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
   }

h2.innerText=time;


},1000);