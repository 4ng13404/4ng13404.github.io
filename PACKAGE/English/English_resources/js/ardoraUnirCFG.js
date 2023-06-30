//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=100; timeIni=100; timeBon=0;
var successes=0; successesMax=10; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="'Times New Roman', Times, serif";
var fEnun="'Times New Roman', Times, serif";
var timeOnMessage=5; messageOk="Goog Job! "; messageTime=""; messageError="Sorry, maybe next time :("; messageErrorG="Sorry, maybe next time :("; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#42FF63"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="RW5nbGlzaA=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["U2hlIGlz", "c28gYmVhdXRpZnVsbA=="],["dGhpcyBpcw==", "c3VjaCBhIGludGVyZXN0aW5nIGFjdGl2aXR5"],["WW91ciBtb3RoZXIgYWx3YXlzIHdlYXJz", "c3VjaCBlbGVnYW50IGNsb3RoZXMu"],["WWVzdGVyZGF5IGhlIGhhcyBjb29rZWQ=", "c3VjaCBhIHdvbmRlcmZ1bCBtZWFsLg=="],["U2hlIGlz", "c3VjaCBhIG5pY2UgcGVyc29u"],["WW91IGFyZQ==", "c3VjaCBhIG5pY2UgcGVyc29u"],["V2h5IGFyZSB5b3Ugd2Fsa2luZw==", "U28gc2xvd2x5Pw=="],["TXkgY2F0IGlz", "c28gY3V0ZS4="],["VGhhbmsgeW91IGZvciB0aGUgZGF0ZSwgaXQgd2Fz", "c3VjaCBhIGJlYXV0aWZ1bGwgZGF5"],["VGhhbmsgeW91IGZvciB0aGUgZGF0ZSwgaXQgd2Fz", "c3VjaCBhIGJlYXV0aWZ1bGwgZGF5"]];
var c=[[6,13],[7,27],[24,21],[23,22],[6,18],[7,18],[19,10],[9,8],[30,21],[30,21]];
var con1=["She is","this is","Yesterday he has cooked","Your mother always wears","She is","Thank you for the date, it was","You are","My cat is","Why are you walking"];
var con2=["so beautifull","such elegant clothes.","such a nice person","such a interesting activity","such a wonderful meal.","such a beautifull day","such a nice person","So slowly?","so cute."];
var sel1=""; join1=[]; join2=[];
colorText="#000000";colorButton="#50A82D";colorBack="#FFFF80";colorSele="#D0F58F";goURLRepeat=true;tiAval=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
