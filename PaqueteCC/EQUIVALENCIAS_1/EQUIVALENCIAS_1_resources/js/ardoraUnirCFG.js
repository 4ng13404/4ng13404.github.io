//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=120; timeIni=120; timeBon=0;
var successes=0; successesMax=6; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#0080FF"; colorText="#000000"; colorSele="#FF0000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=1; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Yeiiiiiiiiiiiiiiiiiiii que crack "; messageTime="Se acacó el tiempo"; messageError="Fallaste :("; messageErrorG="Fallaste :("; messageAttempts="Noooooooo"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="RVFVSVZBTEVOQ0lBU18x"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["MSBrbQ==", "MSwwMDAgbQ=="],["MSBt", "MTAwIGNt"],["MSB0", "MSwwMDAga2c="],["MSBrZw==", "MSwwMDAgZw=="],["MSBo", "NjAgbWlu"],["MSBtaW4=", "NjAgcw=="]];
var c=[[4,7],[3,6],[3,8],[4,7],[3,6],[5,4]];
var con1=["1 km","1 m","1 t","1 kg","1 h","1 min"];
var con2=["1,000 m","100 cm","1,000 kg","1,000 g","60 min","60 s"];
var sel1=""; join1=[]; join2=[];
colorText="#000000";colorButton="#8080C0";colorBack="#FFFFFF";colorSele="#FFFF00";goURLNext=true;goURLRepeat=true;tiAval=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
