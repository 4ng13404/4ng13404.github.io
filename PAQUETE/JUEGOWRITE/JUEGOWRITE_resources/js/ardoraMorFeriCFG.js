//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=12; attempts=0; attemptsMax=4;
var score=0; scoreMax=12; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;var tiAudio=false;
var colorBack="#FFFDFD"; colorButton="#80FF80"; colorText="#000000"; colorSele="#FFFF80";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=3; messageOk="Congrats! You did it great :3"; messageTime="Oh...you have no time left. Try again."; messageError="Try again!"; messageErrorG="Try again!"; messageAttempts="Game over. You have no tries left."; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="SlVFR09XUklURQ=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}

var col=0; row=0; writeDir=0;
var words=["RVZFUllCT0RZ","RVZFUllPTkU=","RVZFUllUSElORw==","U09NRUJPRFk=","U09NRU9ORQ==","U09NRVRISU5H","QU5ZQk9EWQ==","QU5ZT05F","QU5ZVEhJTkc=","Tk9CT0RZ","Tk8tT05F","Tk9USElORw=="];var defs=["We need to respect ________ to have peace.","One of the most important things to remember is that_______has their own unique aspirations and goals in life.","________ happens for a reason, and sometimes we may not understand why things are happening the way they are, but we must trust that everything will be okay in the end","I saw________ stealing the apples at the store, but I do not know his or her name.","I know that ______ has my pen, but I cannot remember who borrowed it.","They need _____ to eat. Please, they have not eaten since yesterday.","Does______ have a problem with this desition? If not let's continue the meeting.","Someone has to come here and help me. Come on, it can be _____.","There is not _____ inside the fridge. We need to go shopping or else we will starve.","_______ came to my party. I am very disappointed with all my ''friends''.","______ can deny the importance of education in shaping one's future.","_____ is more important than family and loved ones. We should cherish them and make time for them whenever possible."];
var indexWords=0;var indexAttemps=0;
