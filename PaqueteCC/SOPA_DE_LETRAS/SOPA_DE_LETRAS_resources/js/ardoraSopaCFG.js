//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=0
var successes=0; successesMax=1; attempts=1; attemptsMax=1;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var startTime; tiSuccesses=false; tiAttempts=false; tiScore=false;
typeGame=1;
var colorBack="#80FF80"; colorButton="#2187A5"; colorText="#000000"; colorSele="#6141BE";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Felicitacionesss"; messageTime="Noo se te acabó el teimpo :c"; isShowMessage=false;
var urlOk=""; urlTime="";
var goURLOk="_blank"; goURLTime="_blank"; 
var borderOk="#008000"; borderTime="#FF0000"; borderAttempts="#FF0000";borderError="#FF0000";
var imaSel=0; texSel=0;
var board=[]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var words=["S0lMT0dSQU1P","SEVDVE9HUkFNTw==","R1JBTU8=","SE9SQQ==","TUlOVVRP","U0VHVU5ETw==","S0lMT01FVFJP","TUVUUk8=","REVDQU1FVFJP","QVRPTU8=","TU9MRUNVTEE=","R1JBRE9DRUxTSVVT","R1JBRE9GQUhSRU5IRUlU","QU1QRVJJT1M=","Vk9MVElP"];
var c=[9,10,5,4,6,7,9,5,9,5,8,12,15,8,6];
var defs=["Unidad de masa del Sistema Internacional, de símbolo kg","Medida de masa, de símbolo hg","Medida de masa, de símbolo g","Equivale a 60 minutos","Equivale a 60 segundos","Equivale a 1000 milisegundos","Medida de longitud, de símbolo km","Medida de longitud, de simbolo m","Unidad de longitud equivalente a 10 metros","Parte más pequeña de una sustancia que no se puede descomponer químicamente.","Partícula más pequeña de una sustancia que tiene todas las propiedades físicas y químicas de esa sustancia.","grados por debajo del punto triple del agua","Es una unidad de temperatura propuesta por Gabriel Fahrenheit en 1754, cuya escala fija el cero y el cien en las temperaturas de congelación y evapora","Es la unidad de intensidad de corriente eléctrica.","equivale a la diferencia de potencial que se registra entre dos puntos de un determinado conductor cuando, para llevar de un punto al otro una carga"];
var wDefs=350; posCheck=[];
var answers=[]; letters=[]; indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="U09QQV9ERV9MRVRSQVM="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var numCols=15; numRows=15; sizeCell=20;
var direction=["HD","VD"];
var boardGame=[[".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".","."]];
var solved1X=[];solved1Y=[];solved2X=[];solved2Y=[];paintSolved=["N","N","N","N","N","N","N","N","N","N","N","N","N","N","N"];x1=[];y1=[];x2=[];y2=[];
var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ";
colorText="#000000";colorButton="#8080C0";colorBack="#FFFFFF";colorSele="#FFFF00";goURLNext=true;goURLRepeat=true;tiAval=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
