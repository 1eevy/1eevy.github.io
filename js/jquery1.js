$(function(){
var music = document.getElementById("bgMusic");
$("#audioBtn").click(function(){
if(music.paused){music.play();
$("#audioBtn").removeClass("pause").addClass("play");
}else{music.pause();
$("#audioBtn").removeClass("play").addClass("pause");}});
});