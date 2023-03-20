//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=210; timeIni=210; timeBon=0;
var successes=0; successesMax=0; attempts=0; attemptsMax=1;
var score=0; scoreMax=10; scoreInc=10; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FF80FF"; colorButton="#FF8080"; colorText="#000000"; colorSele="#FFFFFF";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=1; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="felicidades :)"; messageTime="Casi lo logras"; messageError="Error"; messageErrorG="Error"; messageAttempts="Uy"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Q29sb3JlYUxleWVuZGE="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[];
var c=["#80FFFF","#00FF40","#FF0080","#FFFF00","#0000FF","#FF8040","#8000FF"];
var x=["107","193","167","215","242","180","286"];
var y=["48","72","160","264","322","236","309"];
var t=["7+3","4 x 5","15 + 15","60 - 20","100/2","30 x 2","35 + 35"];
var cM=["#80FFFF","#00FF40","#FF0080","#FFFF00","#0000FF","#FF8040","#8000FF"];
var tM=["10","20","30","40","50","60","70"];
var indexColor=0;
colorText="#000000";colorButton="#FFCC00";colorBack="#FFFFFF";colorSele="#F7F1D7";goURLNext=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
