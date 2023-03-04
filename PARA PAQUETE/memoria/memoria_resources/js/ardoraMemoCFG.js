//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=180;timeIni=180; timeBon=5;
var successes=0; successesMax=8; attempts=0; attemptsMax=1;
var score=0;scoreMax=10;scoreInc=10; scoreDec=0;
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFFFF"; colorButton="#8000FF"; colorText="#000000"; colorSele="#00FFFF";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Impact, Charcoal, sans-serif";
var fEnun="Arial, Helvetica, sans-serif";
var timeOnMessage=5; messageOk="YA TE LAS SABES TODAS ¡BIEN!"; messageTime="SE ACABÓ EL TIEMPO"; messageError=""; messageErrorG=""; messageAttempts="ERROR"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError=""; borderAttempts="#FF0000";
var wordsGame="bWVtb3JpYQ=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var wo1=["SENO","COSENO","TANGENTE","Cotangente","Secante","Cosecante","Alfa","Beta"];im1=["","","","","","","",""];mp31=["MTA=","MTE=","MTI=","MTM=","MTQ=","MTU=","MTY=","MTc="];alt1=["","","","","","","",""];
var wo2=["Cateto adyacente/ Hipotenusa","Hipotenusa / Cateto adyacente","Hipotenusa / Cateto opuesto","Cateto opuesto/Cateto adyacente","Cateto opuesto/ Hipotenusa","α","Cateto adyacente / Cateto opuesto","β"];im2=["","","","","","","",""];mp32=["MjE=","MjQ=","MjU=","MjI=","MjA=","MjY=","MjM=","Mjc="];alt2=["","","","","","","",""];
var cols=4; rows=4; items=8; itp=["MTA=","MTE=","MTI=","MTM=","MTQ=","MTU=","MTY=","MTc="]; pos=["MjQ=","MjA=","MjM=","MjY=","MjE=","MjI=","MjU=","Mjc="];
var boardGame=[["","","",""],["","","",""],["","","",""],["","","",""]]; dirMedia="memoria_resources/media/"
var open1R=""; open1C=""; open2R=""; open2C=""; ansDo=0;
var a;
