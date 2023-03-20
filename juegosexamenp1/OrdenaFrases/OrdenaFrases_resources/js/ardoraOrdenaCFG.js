var timeAct=60; timeIni=60; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=3;
var score=0; scoreMax=5; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#FF8040"; colorText="#000000"; colorSele="#FFFF80";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=1; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=2; messageOk="Lo lograste, felicidades."; messageTime="Se te acabó el tiempo..."; messageError="Nop"; messageErrorG="Nop"; messageAttempts="Ya te equivocaste mucho, vuelve a intentar"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#00FF40"; borderTime="#FF8040";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="T3JkZW5hRnJhc2Vz"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["TGEgdHJhZ2VkaWEgcHJldGVuZGUgaGFjZXIgbGxvcmFy","TGEgY29tZWRpYSB0aWVuZSBjb21vIGZpbiBlbnRyZXRlbmVy","RXhpc3RlbiB0cmVzIGdyYW5kZXMgZ8OpbmVyb3MgbGl0ZXJhcmlvcw==","Q2FkYSBnw6luZXJvIGxpdGVyYXJpbyB0aWVuZSBzdWJnw6luZXJvcw==","RWwgdGVhdHJvIG5hY2nDsyBlbiBsYSBBbnRpZ3VhIEdyZWNpYQ=="];imaW=["num5814foto06.jpg","m__scara-de-comedia-teatral-__pera-vintage-para-un-actor-feliz-la-cara-expresa-emoci__n-positiva-industria-cinematogr__fica-y-186712005.jpg","GENEROS_LITERARIOS.jpg","GENEROS_LITERARIOS.jpg","cultura-griega-acropolis-e1559077275552-800x400.jpg"];queW=[":(",":D","Son el narrativo, lírico y dramático.","Cada división tiene subdivisiones","Origen de la dramática"];altW=["","","","",""];c=[33,36,39,38,36];
var auW=["MQ==","Mg==","Mw==","NA==","NQ=="];
var actMaxWidth="600"; actMaxHeight="300";indexG=0;profG=0;dirMedia="OrdenaFrases_resources/media/"; textBNext="Siguiente";
var wordsG=[];imageW=[];questionW=[];audioW=[];cG=[];alterW=[];
