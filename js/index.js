isBlack=true;
$(document).ready(function(){
  drawGrid(16);
   });

function drawGrid(grid){
  var i;
  var num = (grid*grid);
  var j= 640/grid;
  console.log(j);
  console.log(num);
  console.log(grid);
  for (i=0;i<num;i++){
  $( "<div class='floating-box'></div>" ).appendTo(".wrapper" );  
}
  $(".floating-box").width(j);
  $(".floating-box").height(j);
  if(isBlack){
    draw();
  }
  else {randColour();}
  }
function resetDisp(){
  $('.wrapper').empty();
  var howMany=prompt("Please enter the required grid size max 100 (ie 16 = 16 x 16 grid)");
  while(howMany <1 || howMany>100){
    howMany=prompt("Carefully enter a number between 1-100");
  }
  drawGrid(howMany);
}

function randColour() { 
  isBlack=false;
 	$(".floating-box").hover(function(){ 
		var colour = '#'+Math.floor(Math.random()*16777215).toString(16);
 		$(this).css("background", colour); 
 	}) 
} 

function draw(){
  isBlack=true;
  $(".floating-box").hover(function(){ 
 			$(this).css('background', '#000') 
 		});
}