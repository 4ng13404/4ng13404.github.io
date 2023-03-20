//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=120; timeIni=120; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#8080FF"; colorText="#000000"; colorSele="#80FF80";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=1; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=3; messageOk="VAMOOOS"; messageTime="TICK TACK"; messageError="Error"; messageErrorG="Error"; messageAttempts="Intenta de nuevo..."; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="T3JkZW5hUGFycmFmb3M="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var actMaxWidth="600"; actMaxHeight="400";profG=0;dirMedia="OrdenaParrafos_resources/media/";
var indexG=0;
var words1G=["TkFDRVI6RXMgZWwgcHJvY2VzbyBlbiBxdWUgc2UgZGEgdmlkYSBhIHVuIHNlciwgcXVlIGRlc3BpZXJ0YSBhbCBtdW5kbyB5IHNhbGUgZGVsIHZpZW50cmUgZGUgbGEgbWFkcmUuIEVsIG5hY2ltaWVudG8gZGUgdW4gbnVldm8gc2VyIGVzIHNpZW1wcmUgbW90aXZvIGRlIGFsZWdyw61hIHkgY2VsZWJyYWNpw7NuLCBwdWVzIGxsZWdhIHVuIGludGVncmFudGUgYSBsYSBmYW1pbGlhLg==","Q1JFQ0VSOiBBIG1lZGlkYSBxdWUgbG9zIGTDrWFzIHZhbiBwYXNhbmRvIGxvcyBzZXJlcyB2aXZvcyB2YW4gYXVtZW50YW5kbyBkZSB0YW1hw7FvLCB2YW4gY3JlY2llbmRvIGbDrXNpY2FtZW50ZSB5IG1hZHVyYW5kbyBzdSBwYXJ0ZSBlbW9jaW9uYWwgdGFtYmnDqW4uIFNlIHZhbiBwcmVwYXJhbmRvIHBhcmEgcGFzYXIgYSBvdHJhIGV0YXBhIHF1ZSBzZXLDrWEgbGEgcmVwcm9kdWNjacOzbi4gRWwgQ3JlY2ltaWVudG8gbnVuY2Egc2UgZGV0ZW5kcsOhIGVuIGVsIGhvbWJyZSwgbG9zIGTDrWFzIHkgbG9zIGHDsW9zIGlyw6FuIHBhc2FuZG8gcG9yIHN1IGN1ZXJwbyBoYXN0YSBsbGVnYXIgYWwgZW52ZWplY2ltaWVudG8u","UkVQUk9EVUNJUlNFOiBBIHRyYXbDqXMgZGVsIGNvbnRhY3RvIGVudHJlIHVuIGhvbWJyZSB5IHVuYSBtdWplciBjb24gY2llcnRvIG5pdmVsIGRlIG1hZHVyYWNpw7NuIGbDrXNpY2EsIHNlIGRhIGx1Z2FyIGEgbGEgcmVwcm9kdWNjacOzbiB5IGFsIG9yaWdlbiBkZSBudWV2b3MgaW5kaXZpZHVvcy4gQ2FiZSBkZXN0YWNhciBxdWUgbm8gdG9kb3MgbG9zIHNlcmVzIGh1bWFub3MgZGVjaWRlbiByZXByb2R1Y2lyc2UsIGRlIG1hbmVyYSBxdWUgZXN0YSBldGFwYSBiaW9sw7NnaWNhIHB1ZWRlIHNlciBwYXNhZGEgcG9yIGFsdG8gcG9yIGVsIHNlciBodW1hbm8u","TU9SSVI6IFRyYW5zY3VycmlkbyBlbCB0aWVtcG8gbmVjZXNhcmlvLCBsb3Mgc2VyZXMgdml2b3MgZW52ZWplY2VuLCBsbyBjdWFsIHNpZ25pZmljYSBxdWUgc3VzIGZ1bmNpb25lcyB2aXRhbGVzIHNlIGlyw6FuIGRldGVyaW9yYW5kbyBjb24gZWwgdGllbXBvLCBoYXN0YSBkZWphciBkZSBmdW5jaW9uYXIgY29ycmVjdGFtZW50ZSB5IG1vcmlyLiBUYW1iacOpbiBzZSBwdWVkZSBsbGVnYXIgYSBlc3RhIGV0YXBhIGEgY2F1c2EgZGUgZmFjdG9yZXMgZXh0ZXJub3Mu"];
var words2G=[];
var words3G=[];
var c1=[215,344,313,262];
var c2=[];
var c3=[];
colorText="#000000";colorButton="#FFCC00";colorBack="#FFFFFF";colorSele="#F7F1D7";goURLNext=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
