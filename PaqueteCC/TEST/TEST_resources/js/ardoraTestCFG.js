//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=5;
var successes=0; successesMax=14; attempts=0; attemptsMax=4;
var score=0; scoreMax=14; scoreInc=1; scoreDec=-1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#71555A"; colorText="#000000"; colorSele="#16B9D6";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Arial, Helvetica, sans-serif";
var fResp="Georgia, Serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=3; messageOk="Yeeeeeeeeeei Ganaste"; messageTime="Nooooo se acabó el tiempo"; messageError="Noooooooo"; messageErrorG="Noooooooo"; messageAttempts="Demasiados errores, estudia y luego regresa"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="VEVTVA=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["¿Qué es medir?<br>","¿Qué es medicion en la fisica?","¿Qué utilizamos para medir?","¿Qué es la ciencia fisica?","¿Qué es gravedad en las ciencias?","¿Qué es velocidad?","¿Qué es un vector?","Selecciona las afirmaciones verdaderas de un factor de conversión","A partir de las equivalencias entre las unidades de longitud pueden obtenerse las de superficie y volumen ¿Esto es verdadero o falso?","¿Cuáles son las tres principales razones trigonométricas?","¿Qué es un objeto?","¿Qué es un patrón?","Selecciona los tipos de incerteza","¿Qué es la incertidumbre de una medida?"];
var answers1=["MURldGVybWluYXIgbGEgbG9uZ2l0dWQsIGV4dGVuc2nDs24sIHZvbHVtZW4gbyBjYXBhY2lkYWQgZGUgdW5hIGNvc2EgcG9yIGNvbXBhcmFjacOzbiBjb24gdW5hIHVuaWRhZCBlc3RhYmxlY2lkYSBxdWUgc2UgdG9tYSBjb21vIHJlZmVyZW5jaWEsIGdlbmVyYWxtZW50ZSBtZWRpYW50ZSBhbGfDum4gaW5zdHJ1bWVudG8gZ3JhZHVhZG8gY29uIGRpY2hhIHVuaWRhZC4=","MEVzIGxsZXZhciBhY2FibyB1bmEgYWNjaW9uIGRlIGFub3RhciBsb3MgbnVtZXJvcyByZXByZXNlbnRhZG9zIHkgY3JlYXIgdW5hIHN1bWEu"];
var answers2=["MWFzb2NpYXIgYSBsYSBtaXNtYSB1biB2YWxvciBkaW1lbnNpb25hZG8gZW4gcmVsYWNpw7NuIGEgbGEgdW5pZGFkIHF1ZSBhcmJpdHJhcmlhbWVudGUgc2UgaGEgZGVmaW5pZG8gcGFyYSBtZWRpcmxh","MEVzIG1lZGlyIGNvbiB1bmEgcmVnbGEgQWxndW5hcyBtZWRpZGFzIGRlIG1lZGly"];
var answers3=["MWxhIGJhbGFuemEgeSBsYSBiw6FzY3VsYSwgIHRlbXBlcmF0dXJhIHRlcm3Ds21ldHJvLCBlbCB2YXTDrW1ldHJvIGxvbmdpdHVkLg==","MG11ZXN0cmEgaW5mb3JtYWNpw7NuIHJlbGFjaW9uYWRhIGNvbiBsb3MgdmFsb3JlcyBkZSB1bmEgw7puaWNhIHZhcmlhYmxlIGVuIGZvcm1hdG8gY2lyY3VsYXIu"];
var answers4=["MUxhIEbDrXNpY2EgZXMgbGEgY2llbmNpYSBxdWUgZXN0dWRpYSBsYXMgaW50ZXJhY2Npb25lcyBmdW5kYW1lbnRhbGVzIGVuIGxhIG5hdHVyYWxlemEsIGRlc2RlIGxvIG1pY3Jvc2PDs3BpY28gYSBsbyBtYWNyb3Njw7NwaWNvLCBsYXMgZXN0cnVjdHVyYXMgeSBjYW1iaW9zIHF1ZSBnZW5lcmFuLg==","MExhIGVkdWNhY2nDs24gZsOtc2ljYSBjb250cmlidXllIGFsIGRlc2Fycm9sbG8gZGUgbGEgbW90cmljaWRhZCBlbiBsYXMgeSBsb3MgYWx1bW5vcyBhIHRyYXbDqXMgZGUgdW4gcHJvY2VzbyBkaW7DoW1pY28geSByZWZsZXhpdm8sIGRlIGVzdHJhdGVnaWFzIGRpZMOhY3RpY2FzIHF1ZSBkZXJpdmFuIGRlbCBqdWVnbyBtb3RvciBjb21vIGV4cHJlc2nDs24gY29ycG9yYWwsIGxhIGluaWNpYWNpw7NuIGRlcG9ydGl2YSB5IGVsIGRlcG9ydGUgZWR1Y2F0"];
var answers5=["MUxhIGdyYXZlZGFkIGVzIGxvIHF1ZSBoYWNlIHF1ZSBsb3MgcGxhbmV0YXMgZW50cmVuIGVuIMOzcmJpdGEgYWxyZWRlZG9yIGRlIGxhcyBlc3RyZWxsYXMtLWNvbW8gbGEgVGllcnJhIHF1ZSBlc3TDoSBlbiDDs3JiaXRhIGFscmVkZWRvciBkZSBudWVzdHJhIGVzdHJlbGxhLCBlbCBTb2wu","MEltcG9ydGFuY2lhLCBkaWZpY3VsdGFkIG8gcGVsaWdybyBxdWUgcHJlc2VudGEgdW5hIGNvc2EgbyBwZXJzb25hIGdyYXZlLg=="];
var answers6=["MUxhIHZlbG9jaWRhZCBlcyB1bmEgbWFnbml0dWQgZsOtc2ljYSBkZSBjYXLDoWN0ZXIgdmVjdG9yaWFsIHF1ZSBleHByZXNhIGVsIGRlc3BsYXphbWllbnRvIGRlIHVuIG9iamV0byBwb3IgdW5pZGFkIGRlIHRpZW1wby4=","MEVzIGFxdWVsbGEgcXVlIHNlIGxvZ3JhIGN1YW5kbyB2YW1vcyBlbiB1bmEgY2FtaW5hdGEu"];
var answers7=["MVNlZ21lbnRvIGRlIHJlY3RhLCBjb250YWRvIGEgcGFydGlyIGRlIHVuIHB1bnRvIGRlbCBlc3BhY2lvLCBjdXlhIGxvbmdpdHVkIHJlcHJlc2VudGEgYSBlc2NhbGEgdW5hIG1hZ25pdHVkLCBlbiB1bmEgZGlyZWNjacOzbiBkZXRlcm1pbmFkYSB5IGVuIHVubyBkZSBzdXMgc2VudGlkb3Mu","MEVuIHBzaWNvbG9nw61hLCBmdWVyemEgbyBlbGVtZW50byBxdWUgaW5mbHV5ZSBlbiBlbCBjb21wb3J0YW1pZW50byBkZSBsYSBwZXJzb25hLg=="];
var answers8=["MXBlcm1pdGVuIHRyYXNsYWRhciBlbCB2YWxvciBkZSB1bmEgbWFnbml0dWQgZsOtc2ljYSBkZSB1biBzaXN0ZW1hIGRlIHVuaWRhZGVzIGEgb3Rybw==","MXBlcm1pdGVuIG9idGVuZXIgZWwgdmFsb3IgZXF1aXZhbGVudGUgZGUgbGEgbWFnbml0dWQgZW4gcmVsYWNpw7NuIGEgbcO6bHRpcGxvcyBvIHN1Ym3Dumx0aXBsb3MgZGUgbGEgbWlzbWEgdW5pZGFk","MHBlcm1pdGVuIG9wZXJhciBsYXMgdW5pZGFkZXMgZmFjdG9yaXphbmRvbGFz","MG5vIHNlIHB1ZWRlIGNvbnZlcnRpciBkZSB1biBmYWN0b3IgbcOhcyBwZXF1ZcOxbyBhIHVubyBtw6FzIGdyYW5kZQ=="];
var answers9=["MVZlcmRhZGVybw==","MEZhbHNv","ME5vIHPDqQ=="];
var answers10=["MVNlbm8=","MUNvc2Vubw==","MVRhbmdlbnRl","MENvc2VjYW50ZQ==","MFRhbmdlbm8=","MFNlY29ubw=="];
var answers11=["MVRhbWJpw6luIHNlIGxlIGxsYW1hIG1lc3VyYW5kbw==","MUVzIGxvIHF1ZSB2YW1vcyBhIG1lZGly","MFVuIGluc3RydW1lbnRv","MExhIHJlZ2xh"];
var answers12=["MUNhbnRpZGFkIGVzdGFuZGFyaXphZGE=","MURlZmluaWRhIHkgYWRvcHRhZGEgcG9yIGNvbnZlbmNpw7Nu","MENhbnRpZGFkIGFsZWF0b3JpYQ==","MGRhZGEgcG9yIGVsIGF6YXI="];
var answers13=["MWFic29sdXRh","MXJlbGF0aXZh","MXBvcmNlbnR1YWw=","MG1lZGlh","MGFsdGE=","MGJhamE="];
var answers14=["MXBhcsOhbWV0cm8gbm8gbmVnYXRpdm8gYXNvY2lhZG8gYWwgcmVzdWx0YWRvIGRlIHVuYSBtZWRpY2nDs24gcXVlIGNhcmFjdGVyaXphIGxhIGRpc3BlcnNpw7NuIGRlIGxvcyB2YWxvcmVzIHF1ZSBwb2Ryw61hbiBzZXIgcmF6b25hYmxlbWVudGUgYXRyaWJ1aWRvcyBhIHVuIG1lbnN1cmFuZG8=","MEVzIGxhIHRvdGFsIGNlcnRlemEgZGUgcXVlIHRvZG8gbG8gcXVlIG1pZGFtb3MgY29uIGN1YXFsdWllciBpbnRydW1lbnRvIGVzdMOhIGJpZW4="];
var ans=[answers1,answers2,answers3,answers4,answers5,answers6,answers7,answers8,answers9,answers10,answers11,answers12,answers13,answers14];
var err=["Perdiste","Perdiste","Perdiste","Perdiste","Perdiste","Perdiste","Perdiste","nou","nou","nou","nou","nou","nou","noo"];
var ima=["","","","","","","","","","","","","",""];
var mp4=["","","","","","","","","","","","","",""];
var ogv=["","","","","","","","","","","","","",""];
var alt=["","","","","","","","","","","","","",""];
var indexTag=0; actualAnswers=[]; dirMedia="TEST_resources/media/";
var tiRandOrder=true;
var iT=0;var r_order=[];
colorText="#000000";colorButton="#8080C0";colorBack="#FFFFFF";colorSele="#FFFF00";goURLNext=true;goURLRepeat=true;tiAval=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
