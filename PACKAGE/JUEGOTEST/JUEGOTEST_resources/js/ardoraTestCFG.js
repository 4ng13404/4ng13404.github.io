//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=11; attempts=0; attemptsMax=2;
var score=0; scoreMax=44; scoreInc=4; scoreDec=2
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FF9393"; colorButton="#FFFF00"; colorText="#FFFFFF"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fResp="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="congratulations you finished :)"; messageTime="you have 5 minutes"; messageError="try again"; messageErrorG="try again"; messageAttempts="you have 3 tries"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="SlVFR09URVNU"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["Do I have to <br>register?<br><br>","Do you speak <br>French?<br><br>(¿Hablas francés?)","Does she speak <br>Spanish?","Does he live <br>here?<br><br><br><br><br>","Does it <br>work?","Do we need <br>this?","<br><br>Do you speak french?<br><br>","Do I have to <br>register?<br><br>","Does she speak <br>Spanish?<br><br>","Does he live <br>here?<br><br>","Does it <br>work?"];
var answers1=["MVllcywgeW91IGRv","MGltIGFscmVhZHkgcmVnaXN0ZXJlZA=="];
var answers2=["MVllcywgSSBkbw==","MEkgZG8gbm90IHNwZWFrIEZyZW5jaA=="];
var answers3=["MXllcyBzaGUgZG9lcw==","MEknbSBzdGlsbCBsZWFybmluZw=="];
var answers4=["MVllcywgaGUgZG9lcw==","MG5vLCBpIGxpdmUgb24gYW5vdGhlciBibG9jaw=="];
var answers5=["MXllcyBpdCBkb2Vz","MGl0IGlzIHN0aWxsIHVuZGVyIHJlcGFpcg=="];
var answers6=["MXllcyB3ZSBkbw==","MGl0J3MgZW5vdWdoIHdpdGggd2hhdCB3ZSBoYXZl"];
var answers8=["MU5vLCBJIGRvIG5vdA==","MG5vIGkgZG9udA=="];
var answers9=["MU5vLCB5b3UgZG8gbm90","ME5vLCB5b3UgZG9udA=="];
var answers10=["MU5vLCBzaGUgZG9lcyBub3Q=","ME5vLCBzaGUgZG9lc250"];
var answers11=["MU5vLCBoZSBkb2VzIG5vdA==","ME5vLCBoZSBkb2VzbnQ="];
var answers12=["MU5vLCBpdCBkb2VzIG5vdA==","ME5vLCBpdCBkb2VzbnQ="];
var ans=[answers1,answers2,answers3,answers4,answers5,answers6,answers8,answers9,answers10,answers11,answers12];
var err=["error","error","error","error","error","error","error","error","error","error","error"];
var ima=["","","","","","","","","","",""];
var mp4=["","","","","","","","","","",""];
var ogv=["","","","","","","","","","",""];
var alt=["","","","","","","","","","",""];
var indexTag=0; actualAnswers=[]; dirMedia="JUEGOTEST_resources/media/";
var tiRandOrder=false;
var iT=0;var r_order=[];
colorText="#000000";colorButton="#50A82D";colorBack="#FFFF80";colorSele="#D0F58F";goURLRepeat=true;tiAval=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
