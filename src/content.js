import './content.css'
window.addEventListener ("load", myMain, false);

function runclear(){
  var k = document.body.querySelectorAll('[role="feed"]')[0] ;
  if(k!== undefined)
   k.innerHTML = '<div class="style_it">BOI no fb Pls :) </div>'
}

function myMain () {

 setInterval(runclear , 1000) ;


}
