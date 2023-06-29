var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=3;
var score=0; scoreMax=5; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#808080"; colorButton="#80FF80"; colorText="#000000"; colorSele="#8080FF";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Congratulations you are a crack :)"; messageTime=""; messageError="you failed :("; messageErrorG="you failed :("; messageAttempts="You don't have any more attempts"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="SnVlZ29fcGFyYV9sYV9mZXJpYV9ldmFsdWFkbw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["R28gb3V0IG9mIHRoZSBob3VzZSBhbmQgc2VlIHdoYXQgaXMgaGFwcGVuaW5n","T3VyIGZsaWdodCB3ZW50IG92ZXIgdGhlIEFuZGVzIG1vdW50YWlucw==","V2UgZm91bmQgYSBkb2cgd2hlbiB3ZSByYW4gcGFzdCB0aGUgc2Nob29s","U2hlIGlzIGdvaW5nIHRvIHZpc2l0IGhlciBncmFuZG1vdGhlciBpbiBzdW1tZXI=","SGVyIGdsYXNzZXMgYXJlIGFib3ZlIHRoZSB0YWJsZQ=="];imaW=["step.jpg","hay_gente_que_pretende_pasar_por_encima_de_los_demas_VL403862_MG19872145.jpg","2-1-600x332.jpeg","original-3159150-1.jpg","descarga.jpg"];queW=["","","","",""];altW=["","","","",""];c=[45,40,42,47,31];
var auW=["MQ==","Mg==","Mw==","NA==","NQ=="];
var actMaxWidth="600"; actMaxHeight="400";indexG=0;profG=0;dirMedia="Juego_para_la_feria_evaluado_resources/media/"; textBNext="Siguiente";
var wordsG=[];imageW=[];questionW=[];audioW=[];cG=[];alterW=[];
