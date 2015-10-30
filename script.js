function clickHighlight(){
 	document.getElementById('highlights').scrollIntoView();	
}
function clickExp(){
 	document.getElementById('exp').scrollIntoView();	
}

function clickSkill(){
 	document.getElementById('skill').scrollIntoView();	
}

function clickEdu(){
 	document.getElementById('edu').scrollIntoView();	
}
function clickPro(){
 	document.getElementById('pro').scrollIntoView();	
}
function clickCourse(){
 	document.getElementById('course').scrollIntoView();	
}
function clickTop(){
 	document.getElementById('top').scrollIntoView();	
}

$(function(){ 
 $(window).on('scroll', function () {
 var scrollPos = $(document).scrollTop();
 $('.scroll').css({
 top: scrollPos
 });
 }).scroll();
});
