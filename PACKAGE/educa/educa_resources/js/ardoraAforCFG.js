//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=10; attempts=0; attemptsMax=1;
var score=0; scoreMax=10; scoreInc=1; scoreDec=1;
var typeGame=0;
var tiTime=false;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#CE9DFF"; colorText="#000000"; colorSele="#8080FF";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Gill Sans / Gill Sans MT, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Gill Sans / Gill Sans MT, sans-serif";
var timeOnMessage=5; messageOk="You're right!"; messageTime=""; messageError="oops! looks like you need to improve"; messageErrorG="oops! looks like you need to improve"; messageAttempts="oops! try again"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#000000";borderError="#000000"; borderAttempts="#000000";
var wordsGame="ZWR1Y2E="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["U0xPV0xZ","Q0FSRUZVTExZ","SEVBVklMWQ==","VE9EQVk=","T1VU","U09GVExZ","T1VUU0lERQ==","QUxXQVlT","V0VMTA==","V0hFUkU="];imaW=["0_How.png","0_ninos-dibujos-animados-jugando-jenga_1284-63183.png","0_32801860.png","0_Foo_Fighters_-_Live_in_Santiago__Chile_15-01-2015.png","0_pez.png","0_susurro.png","0_perrito.png","0_ni__osescuela.png","0_nadador.png","0_Detective_Pablo_infobox.png"];queW=["the tortoise is moving ___","ups! remove the pieces ____ so as not to lose","It’s raining ____","____ i'm going to the foo fighters concert","fish jumped ____ of the bag","David whispered something ____ in his ear","My dog is now jogging ____","The children are ____ on time for school.","He swims ____","____ are my keys?"];var wordsL=[6,9,7,5,3,6,7,6,4,5];var altW=["","","","","","","","","",""];
var auW=["","","","","","","","","",""];
var fillLetter="ABGHIJKLEMNDFCVOPRWZQTSXUY "; wordsG=[];var wordsGL=[]; indexG=0; actMaxWidth=550; indexWord=0; totalWord=0;
var alterW=[];var imageW=[];questionW=[];audioW=[];profG=0; dirMedia="educa_resources/media/"; textBNext="Suiguiente";
colorText="#000000";colorButton="#50A82D";colorBack="#FFFF80";colorSele="#D0F58F";goURLRepeat=true;tiAval=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
