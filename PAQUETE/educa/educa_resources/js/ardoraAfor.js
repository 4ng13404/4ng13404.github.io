//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
function initAct(){
calcMaxWidth();paintQuest();paintbGame();paintOk();$(".bGame").css("background", colorButton);
if (tiAval){parent.iniciaActividade()}if ((tiTime) && (tiButtonTime)){paintButtonTime();}
}
function paintQuest(){$("#ardoraQuest").html("");
if (audioW[indexG].localeCompare("")==0){$("#ardoraQuest").html("<p>" + questionW[indexG] + "</p>");}else{
$("#ardoraQuest").html("<img id='playSound' class='imaLeft' src='educa_resources/media/' alt='Sound' align='left'>"+ "<p>" + questionW[indexG] + "</p>");
$("#playSound").bind("click", function (e) {var au="audio"+audioW[indexG];document.getElementById(au).play();});}
profG=parseInt($("#ardoraQuest").css("height").replace("px", ""));
$("#ardoraImage").html("");if (imageW[indexG].localeCompare("")!=0){$("#ardoraImage").html("<img alt='"+alterW[indexG]+"' src='"+dirMedia+imageW[indexG]+"'/>");}
profG=profG+200;
}
function randomSort(){
var iW=[];var iWL=[];for (i = 0; i < words.length; i++) {if (words[i].localeCompare("")!=0){iW.push(words[i]);iWL.push(wordsL[i]);wordsG.push("");wordsGL.push("");imageW.push("");questionW.push("");audioW.push("");}}
for (i = 0; i < iW.length; i++) {var ind = Math.floor(Math.random()*iW.length);while (wordsG[ind].localeCompare("")!=0){
ind++;if (ind==iW.length){ind=0;}}wordsGL[ind]=iWL[i];wordsG[ind]=iW[i];imageW[ind]=imaW[i];questionW[ind]=queW[i];audioW[ind]=auW[i];alterW[ind]=altW[i];}
}
function calcMaxWidth(){for (i = 0; i < wordsG.length; i++) {var actualSize=0;actualSize=$.trim(aforWords(wordsG[i])).length*(48+9);
if (actualSize>actMaxWidth){actMaxWidth=actualSize}}$("#ardoraAct").css("width",actMaxWidth+20+"px");
var canWidth=$("#ardoraAct").css("width").replace("px","");
var canHeight=$("#ardoraAct").css("height").replace("px","");$("#ardoraActCanvas").attr({"width": (parseInt(canWidth)+20).toString(),"height": canHeight});}
function paintbGame() {var iW = [];for (i=0;i<wordsGL[indexG]; i++) {if (aforWords(wordsG[indexG]).substr(i, 1).localeCompare("") != 0) {
iW.push(""); }}for (i = 0; i<wordsGL[indexG]; i++) {if (aforWords(wordsG[indexG]).substr(i, 1).localeCompare("") != 0) {
var ind = Math.floor(Math.random() * iW.length);while (iW[ind].localeCompare("") != 0) {ind++;
if (ind == iW.length) {ind = 0;}}iW[ind]=$.trim(aforWords(wordsG[indexG])).substr(i,1);}}
var newHtml="<ul id='sortable'>";for (i=0;i<wordsGL[indexG];i++) {if (aforWords(wordsG[indexG]).substr(i, 1).localeCompare("") != 0) {
newHtml=newHtml+"<li tabindex='0' id='cellG" + i.toString() + "' class='bGame'><p>"+iW[i]+"</p></li>";}}
newHtml=newHtml+"</ul>";$("#ardoraActSort").html(newHtml);$( "#sortable" ).sortable({revert: true});$( "ul, li" ).disableSelection();
calcMaxWidth();
$(".bGame").mouseenter(function () {$(this).css({background: colorSele,color: colorText,borderColor: colorButton});
var color2 = colorSele;var color1 = colorBack;$(this).css("background", "-webkit-gradient(linear, left top, left bottom, from(" + color1 + "), to(" + color2 + "))");
$(this).css("background", "-webkit-linear-gradient(" + color1 + ", " + color2 + ")");$(this).css("background", "-moz-linear-gradient(top, " + color1 + ", " + color2 + ")");$(this).css("background", "-ms-linear-gradient(" + color1 + ", " + color2 + ")");
$(this).css("background", "-o-linear-gradient(" + color1 + ", " + color2 + ")");$(this).css("background", "linear-gradient(" + color1 + ", " + color2 + ")");$(this).css("filter", "progid:DXImageTransform.Microsoft.Alpha(startColorstr='" + color1 + "', endColorstr='" + color2 + "')");
});$(".bGame").mouseleave(function (){$(this).css({background: colorButton,color: colorBack,borderColor: colorBack});});
$(".bGame").focus(function() {$(this).css({background:colorSele,color:colorText,borderColor:colorButton});var color2=colorSele;var color1=colorBack;$(this).css("background", "-webkit-radial-gradient(center, ellipse, " + color1 + "," + color2 + ")");$(this).css("background", "-moz-radial-gradient(center,ellipse, " + color1 + ", " + color2 + ")");$(this).css("background", "-ms-radial-gradient(center, ellipse, " + color1 + ", " + color2 + ")");$(this).css("background", "-o-radial-gradient(center, ellipse, " + color1 + ", " + color2 + ")");$(this).css("background", "radial-gradient(ellipse at center, " + color1 + ", " + color2 + ")");$(this).css("filter", "progid:DXImageTransform.Microsoft.gradient(startColorstr='" + color1 + "', endColorstr='" + color2 + "')");});
$(".bGame").blur(function() {$(this).css({background: colorButton,color: colorBack,borderColor: colorBack});});
$(".bGame").keydown(function(event) {if (event.which == 37 || event.which == 38) {$(this).insertBefore($(this).prev());}
if (event.which==39 || event.which==40) {$(this).insertAfter($(this).next());}
if (event.which == 84 || event.which == 33) {$(this).parent().prepend($(this));}
if (event.which == 66 || event.which == 34) {$(this).parent().append($(this));}
if (event.which == 82) {var p = $(this).parent();p.children().each(function() {p.prepend($(this))})}
if (event.which==83) {var p = $(this).parent();p.children().each(function() {if (Math.random() < .5) {p.prepend($(this));} else {p.append($(this));}})};$(this).focus();});
$("#ardoraActCanvas").attr("tabindex","0");
  $("#buttonOk").attr("tabindex","0");$("#buttonOk").keydown(function(e) {if (e.which != 9) {isCorrect();}});$("#buttonOk").focus(function(e) {removeOk();});$("#buttonOk").blur(function(e) {paintOk();});
}
function showButtonNext(){var canvas = document.getElementById("ardoraActCanvas");document.getElementById("ardoraActCanvas").style.zIndex = 5;document.getElementById("ardoraActCanvas").style["visibility"] = "visible";
canvas.width = canvas.width;var contexto = canvas.getContext("2d");contexto.globalAlpha = 0.50;contexto.fillStyle = colorBack;
contexto.fillRect(0, 0, canvas.width, canvas.height);contexto.font = "14px " + fMenssage;
var metricsW = contexto.measureText(textBNext).width;var x = canvas.width - metricsW -50 ;var y = canvas.height-14-40;
contexto.beginPath();contexto.globalAlpha = 1;contexto.lineWidth = 2;contexto.fillStyle = colorButton;contexto.strokeStyle = colorSele;
roundedRect(contexto, x, y, metricsW+45,14+20, 5, colorButton);contexto.shadowColor = "black";contexto.shadowBlur = 15;
contexto.shadowOffsetX=4;contexto.shadowOffsetY=4;contexto.stroke();contexto.beginPath();contexto.textAlign = "left";contexto.fillStyle = colorText;
contexto.fillText(textBNext,x+10,y+14+10);contexto.lineWidth=5;contexto.stroke();contexto.fill();
$("#ardoraActCanvas").focus();$("#ardoraActCanvas").bind("click keypress", function (e) {$("#ardoraActCanvas").unbind();document.getElementById("ardoraActCanvas").style.zIndex=0;
document.getElementById("ardoraActCanvas").style["visibility"] = "hidden";paintQuest();paintbGame();
$(".bGame").css("backgroundColor", colorButton);$(".bGame").css("color", colorBack);});
}
function isCorrect(){
var ans=""; $("ul li").each(function(ind,e) {ans=ans+$(e).text();});var correct=false;if (ans.localeCompare(aforWords(wordsG[indexG]))==0){
score=score+scoreInc;timeAct=timeAct+timeBon;successes++;correct=true;}
if (correct){indexG++;if (indexG==wordsG.length){$("#ardoraActCanvas").attr("aria-label",messageOk);showMessage("Ok");$("#buttonOk").remove();}else{
showButtonNext();}}
else{attempts++;score=score-scoreDec;if (tiAttempts){if (attempts > attemptsMax) {$("#ardoraActCanvas").attr("aria-label",messageAttempts);showMessage("Attempts");} else {$("#ardoraActCanvas").attr("aria-label", messageError);showMessage("Error");}
}else{$("#ardoraActCanvas").attr("aria-label", messageError);showMessage("Error");}}
}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame){ 
var i=0;$("ul li").each(function (ind, e) {$(e).html("<p>" + aforWords(wordsG[indexG]).substr(i, 1) + "</p>");i++;});
}
function paintBack(){}
function aforWords(input) {return decodeURIComponent(escape(window.atob( input )));}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
