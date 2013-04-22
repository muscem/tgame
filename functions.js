function gameLevelsConfig(){
gameOperation=[[]];
gameNumber=[[]];
gameDigit=[[]];
gameOCount=[[]];
gameSign=[[]];
if(gameLevel==1){gameOperation=[[0]];gameNumber=[[0]];gameDigit=[[0]];gameOCount=[[0]];gameSign=[[0]];}
else if(gameLevel==2){gameOperation=[[1]];gameNumber=[[0]];gameDigit=[[0]];gameOCount=[[0]];gameSign=[[0]];}
else if(gameLevel==3){gameOperation=[[0,1]];gameNumber=[[0]];gameDigit=[[0]];gameOCount=[[0]];gameSign=[[0]];}
else if(gameLevel==4){gameOperation=[[2]];gameNumber=[[0]];gameDigit=[[0]];gameOCount=[[0]];gameSign=[[0]];}
else if(gameLevel==5){gameOperation=[[3]];gameNumber=[[0]];gameDigit=[[0]];gameOCount=[[0]];gameSign=[[0]];}
else if(gameLevel==6){gameOperation=[[2,3]];gameNumber=[[0]];gameDigit=[[0]];gameOCount=[[0]];gameSign=[[0]];}
else if(gameLevel==7){gameOperation=[[0,1,2,3]];gameNumber=[[0]];gameDigit=[[0]];gameOCount=[[0]];gameSign=[[0]];}
else if(gameLevel==8){gameOperation=[[0,1,2,3]];gameNumber=[[0]];gameDigit=[[0]];gameOCount=[[0]];gameSign=[[1]];}
else if(gameLevel==9){gameOperation=[[0,1,2,3]];gameNumber=[[0]];gameDigit=[[0]];gameOCount=[[0]];gameSign=[[2]];}
else if(gameLevel==10){gameOperation=[[0,1,2,3]];gameNumber=[[0]];gameDigit=[[0]];gameOCount=[[0]];gameSign=[[3]];}
else if(gameLevel==11){gameOperation=[[0,1,2,3]];gameNumber=[[0]];gameDigit=[[0]];gameOCount=[[0]];gameSign=[[4]];}
else if(gameLevel==12){gameOperation=[[0,1,2,3]];gameNumber=[[0]];gameDigit=[[0]];gameOCount=[[0]];gameSign=[[5]];}
else if(gameLevel==13){gameOperation=[[0,1,2,3]];gameNumber=[[0]];gameDigit=[[0]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==14){gameOperation=[[0,1]];gameNumber=[[0]];gameDigit=[[0]];gameOCount=[[0,1]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==15){gameOperation=[[0,1]];gameNumber=[[0]];gameDigit=[[0]];gameOCount=[[1,2]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==16){gameOperation=[[0,1]];gameNumber=[[0]];gameDigit=[[0]];gameOCount=[[3,4]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==17){gameOperation=[[2]];gameNumber=[[2]];gameDigit=[[0]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==18){gameOperation=[[3]];gameNumber=[[2]];gameDigit=[[0]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==19){gameOperation=[[0]];gameNumber=[[2]];gameDigit=[[0]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==20){gameOperation=[[1]];gameNumber=[[2]];gameDigit=[[0]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==21){gameOperation=[[0,1]];gameNumber=[[0]];gameDigit=[[0,1]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}//50
else if(gameLevel==22){gameOperation=[[2,3]];gameNumber=[[2]];gameDigit=[[0,1]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}//80
else if(gameLevel==23){gameOperation=[[0,1,2,3]];gameNumber=[[0,1,2,3,4]];gameDigit=[[4]];gameOCount=[[4]];gameSign=[[0,1,2,3,4,5]];}//100
}
function closePageToPlayers(){
gamePlayerID=0;
$.mobile.changePage( $("#pagePlayers") , { transition: "none"} );
}
function findlangID(){
var langID=1;
if(gameLang=="de"){
langID=0;
}
else if(gameLang=="es"){
langID=2;
}
else if(gameLang=="fr"){
langID=3;
}
else if(gameLang=="it"){
langID=4;
}
else if(gameLang=="tr"){
langID=5;
}
return langID;
}
function mysql_real_escape_string (str) {
    return str.replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g, function (char) {
        switch (char) {
            case "\0":
				return "";
            case "\x08":
				return "";
            case "\x09":
				return "";
            case "\x1a":
				return "";
            case "\n":
				return "";
            case "\r":
				return "";
            case "\"":
            case "'":
            case "\\":
            case "%":
				return "";
        }
    });
}
function gameLanguageChanged(){
pagePlayersLanguageChange();
}
function changeDifficulty(mode, selDif){
var m;
if(mode==0){
lastSelDif[gamePlayerID]=[selDif, lastSelDif[gamePlayerID][1], lastSelDif[gamePlayerID][2], lastSelDif[gamePlayerID][3], lastSelDif[gamePlayerID][4]];
m="freemodedifficulty";
freeModeLevels();
}
else if(mode==1){
lastSelDif[gamePlayerID]=[lastSelDif[gamePlayerID][0], selDif, lastSelDif[gamePlayerID][2], lastSelDif[gamePlayerID][3], lastSelDif[gamePlayerID][4]];
m="findoutdifficulty";
gamesModesLevels(1, "FindOut");
}
else if(mode==2){
lastSelDif[gamePlayerID]=[lastSelDif[gamePlayerID][0], lastSelDif[gamePlayerID][1], selDif,lastSelDif[gamePlayerID][3], lastSelDif[gamePlayerID][4]];
m="mathrisdifficulty";
gamesModesLevels(2, "Mathris");
}
else if(mode==3){
lastSelDif[gamePlayerID]=[lastSelDif[gamePlayerID][0], lastSelDif[gamePlayerID][1], lastSelDif[gamePlayerID][2], selDif, lastSelDif[gamePlayerID][4]];
m="mathrixdifficulty";
gamesModesLevels(3, "Mathrix");
}
else if(mode==4){
lastSelDif[gamePlayerID]=[lastSelDif[gamePlayerID][0], lastSelDif[gamePlayerID][1], lastSelDif[gamePlayerID][2], lastSelDif[gamePlayerID][3], selDif];
m="shootoutdifficulty";
gamesModesLevels(4, "ShootOut");
}
if (dbOK==1) playerDBUpdate(m, selDif);
}
function changeLevel(mode, selDif, level){
var m;
var v;
pLevels[gamePlayerID][mode][selDif]=level;
v=pLevels[gamePlayerID][mode][0].toString()+"|"+pLevels[gamePlayerID][mode][1].toString()+"|"+pLevels[gamePlayerID][mode][2].toString();
if(mode==0){
m="plfreemode";
}
else if(mode==1){
m="plfindout";
}
else if(mode==2){
m="plmathris";
}
else if(mode==3){
m="plmathrix";
}
else if(mode==4){
m="plshootout";
}
if (dbOK==1) playerDBUpdate(m, v);
}
function createMul(iRand, iDig){
var digitMul=1;
for(i=0;i<gameDigit[iRand][iDig]+1;i++){
digitMul=digitMul*10;
}
return digitMul;
}
function createNumber(iRand){
//iRand, önceden belirlenen degisken degeri

var cNumber=[];	//Olusturulan sayi
var digitMul=1;	//Hane sayisina bagli olarak çarpimda kullanilacak sayi

//Hangi sayi türü kullanilacagi belirlenecek, 
var iNum=Math.floor(Math.random()*gameNumber[iRand].length);

//Hangi hane sayisi kullanilacagi belirlenecek
var iDig=Math.floor(Math.random()*gameDigit[iRand].length);	

digitMul=createMul(iRand, iDig);

if (gameNumber[iRand][iNum]==0){	//Tam sayi
cNumber[0]=0;
cNumber[1]=Math.floor(Math.random()*digitMul).toString();
while (cNumber[1]==0){
cNumber[1]=Math.floor(Math.random()*digitMul).toString();
}
}
else if (gameNumber[iRand][iNum]==1){	//Ondalik sayi
cNumber[0]=1;
cNumber[1]=(Math.random()*digitMul).toFixed(gameDigit[iRand][iDig]+1).toString();
while(cNumber[1]==0){
cNumber[1]=(Math.random()*digitMul).toFixed(gameDigit[iRand][iDig]+1).toString();
}
}
else if (gameNumber[iRand][iNum]==2){	//Kesirli sayi
cNumber[0]=2;
cNumber[1]=Math.floor(Math.random()*digitMul).toString();
iDig=Math.floor(Math.random()*gameDigit[iRand].length);	
digitMul=createMul(iRand, iDig);
cNumber[2]=Math.floor(Math.random()*digitMul).toString();
while(cNumber[2]==0){
cNumber[2]=Math.floor(Math.random()*digitMul).toString();
}
}
else if (gameNumber[iRand][iNum]==3){	//Üslü sayi
cNumber[0]=3;
cNumber[1]=Math.floor(Math.random()*digitMul).toString();
while(cNumber[1]==0){
cNumber[1]=Math.floor(Math.random()*digitMul).toString();
}
iDig=Math.floor(Math.random()*gameDigit[iRand].length);	
digitMul=createMul(iRand, iDig);
cNumber[2]=Math.floor(Math.random()*digitMul).toString();
while(cNumber[2]==0){
cNumber[2]=Math.floor(Math.random()*digitMul).toString();
}
}
else if (gameNumber[iRand][iNum]==4){	//Köklü sayi
cNumber[0]=4;
cNumber[1]=Math.floor(Math.random()*digitMul).toString();
while(cNumber[1]==0){
cNumber[1]=Math.floor(Math.random()*digitMul).toString();
}
iDig=Math.floor(Math.random()*gameDigit[iRand].length);	
digitMul=createMul(iRand, iDig);
cNumber[2]=Math.floor(Math.random()*digitMul).toString();
while(cNumber[2]==0){
cNumber[2]=Math.floor(Math.random()*digitMul).toString();
}
}

return cNumber;
}
function creatEquation(iRand){
var result=[];
var result2=[];
var cNumber=[];
var iOCount=Math.floor(Math.random()*gameOCount[iRand].length);	
cNumber=createNumber(iRand);
if(cNumber[0]==0){
result[0]='<td>'+cNumber[1]+'</td>';
result[1]=Number(cNumber[1]);
}
else if(cNumber[0]==1){
result[0]='<td>'+cNumber[1]+'</td>';
result[1]=Number(cNumber[1]);
}
else if(cNumber[0]==2){
if(cNumber[2]==0) cNumber[2]="1";
result[0]='<td>'+cNumber[1]+'<hr>'+cNumber[2]+'</td>';
result[1]=Number(cNumber[1])/Number(cNumber[2]);
}
else if(cNumber[0]==3){
result[0]='<td>'+cNumber[1]+'<sup>'+cNumber[2]+'</sup></td>';
result[1]=Math.pow(Number(cNumber[1]), Number(cNumber[2]));
}
else if(cNumber[0]==4){
if(cNumber[2]==0) cNumber[2]="1";
result[0]='<td><sup>'+cNumber[1]+'</sup>&radic;'+cNumber[2]+'</td>';
result[1]=Math.pow(Number(cNumber[1]), 1/Number(cNumber[2]));
}
var iOper;
for(i2=0;i2<gameOCount[iRand][iOCount]+1;i2++){
cNumber=createNumber(iRand);
iOper=Math.floor(Math.random()*gameOperation[iRand].length);	
if(cNumber[0]==0){
result2[0]='<td>'+cNumber[1]+'</td>';
result2[1]=Number(cNumber[1]);
}
else if(cNumber[0]==1){
result2[0]='<td>'+cNumber[1]+'</td>';
result2[1]=Number(cNumber[1]);
}
else if(cNumber[0]==2){
if(cNumber[2]==0) cNumber[2]="1";
result2[0]='<td>'+cNumber[1]+'<hr>'+cNumber[2]+'</td>';
result2[1]=Number(cNumber[1])/Number(cNumber[2]);
}
else if(cNumber[0]==3){
result2[0]='<td>'+cNumber[1]+'<sup>'+cNumber[2]+'</sup></td>';
result2[1]=Math.pow(Number(cNumber[1]), Number(cNumber[2]));
}
else if(cNumber[0]==4){
if(cNumber[2]==0) cNumber[2]="1";
result2[0]='<td><sup>'+cNumber[1]+'</sup>&radic;'+cNumber[2]+'</td>';
result2[1]=Math.pow(Number(cNumber[1]), 1/Number(cNumber[2]));
}
if(gameOperation[iRand][iOper]==0){
result[0]=result[0]+'<td>+</td>'+result2[0];
result[1]=result[1]+result2[1];
}
else if(gameOperation[iRand][iOper]==1){
result[0]=result[0]+'<td>-</td>'+result2[0];
result[1]=result[1]-result2[1];
}
else if(gameOperation[iRand][iOper]==2){
result[0]=result[0]+'<td>x</td>'+result2[0];
result[1]=result[1]*result2[1];
}
else if(gameOperation[iRand][iOper]==3){
result[0]=result[0]+'<td>&divide;</td>'+result2[0];
result[1]=result[1]/result2[1];
}
}
return result;
}
function createResult(result){
var result2=result.toString();
var iDiff;
var iDiff2;
iDiff2=Math.floor(Math.random()*2);
if(gameDifficulty==0){
iDiff=3;	
if (Math.floor(Math.random()*2)==0) iDiff=0;
}
else if(gameDifficulty==1){
iDiff=2;
if (Math.floor(Math.random()*2)==0) iDiff=0;
}
else if(gameDifficulty==2){
iDiff=1;
if (Math.floor(Math.random()*2)==0) iDiff=0;
}
if (result2.indexOf(".")>0){
for(i=0;i<(result2.indexOf(".")-Math.floor(Math.random()*result2.indexOf("."))-1);i++){
iDiff=iDiff*10;
}
if(iDiff2==0){
result=result+iDiff;
}
else{
result=result-iDiff;
}
result=result.toFixed(2).toString();
}
else{
for(i=0;i<(result2.length-Math.floor(Math.random()*result2.length)-1);i++){
iDiff=iDiff*10;
}
if(iDiff2==0){
result=result+iDiff;
}
else{
result=result-iDiff;
}

}
if(result=="Infinity" && gameLang!="en"){
if (gameLang=="de") result="Unendlichkeit";
if (gameLang=="es") result="Infinito";
if (gameLang=="fr") result="Infini";
if (gameLang=="it") result="Infinito";
if (gameLang=="tr") result="Sonsuz";
}
return result;
}
function findMax(vala, vale){
var valb=vala.toString().split(",");
if(vale==0) var valc=valb.sort();
if(vale==1) var valc=valb.sort(function(a,b){return b-a});
var vald=valc[0];
return vald;
}
function timeCal(time){
var coefNum=[[1,1,1.01,1.02],[1,1,1.01,1.02],[1.01,1.01,1.01,1.01],[1.01,1.01,1.01,1.01],[1.01,1.01,1.01,1.01]];
var coefDigit=[[1,1,1,1],[1.01,1.01,1.02,1.02],[1.01,1.01,1.02,1.02],[1.01,1.01,1.02,1.02],[1.01,1.01,1.02,1.02]];
var time2;
var maxOp, maxDig, maxNum, maxOC;
maxOp=findMax(gameOperation,1);
maxDig=findMax(gameDigit,1);
maxNum=findMax(gameNumber,1);
maxOC=findMax(gameOCount,1);
time2=(1+maxOC*0.9)*(time*coefNum[maxNum][maxOp]*coefDigit[maxDig][maxOp]);
return Math.floor(time2);
}
function pointToComma(vala){
vala=vala.toString();
if(gameLang!="en"){
while(vala.indexOf(".")>-1){
vala=vala.replace(".",",");
}
}
return vala;
}
function chooseLang(lang){
gameLang=lang;
$("#langSelect").val(gameLang);
$("#langSelect").trigger("change");
$.mobile.changePage( $("#pageIntro") , { transition: "none"} );
}
function langChangeSelect(){
var lang;
lang=$("#langSelect").val();
if(lang!=""){
gameLang=lang;
pageGameSettingsLanguageChange();
if(dbOK==1) gameLangChangeDB();
}
}
function styleChangeSelect(){
var s1,s2;
s1=$("#styleSelect").val();
s2="jquery.mobile-1.2.0.min"+s1+".css";
gameDBUpdate("theme", s1);
$('#styleConf[rel=stylesheet]').attr('href', s2);
}
function pageGameSettingsLanguageChange(){
var langID=1;
langID=findlangID();
var langLabelH=["Sprache :", "Language :", "Idioma :", "Langue :", "Lingua :", "Dil :"];
var gameSettingsH1=["Spiel-Einstellungen", "Game Settings", "Configuraci&oacute;n Del Juego", "Param&eacute;tres De Jeu", "Impostazioni Di Gioco", "Oyun Ayarlar&#305;"];
var themeLabelH=["Thema :", "Theme :", "Tema :", "Th&eacute;me :", "Tema :", "Tema :"];
$("#gameSettingsH1").html(gameSettingsH1[langID]);
$("#langLabelH").html(langLabelH[langID]);
$("#themeLabelH").html(themeLabelH[langID]);
}
$("#pagePlayerRename").live('pagebeforeshow', function(event){
pageRenameLanguageChange();													   
$("#pagePlayerRenameContent").find("#pagePlayerRenameButton").attr("onclick","gamePlayerRenameDB("+gamePlayerID+");");
$("#pagePlayerRenameContent").find("#pagePlayerRenamePlayerName").html(pName[gamePlayerID]);
$("#pagePlayerRenameContent").find("#newname").val("");
});
function pageRenameLanguageChange(){
var langID=1;
langID=findlangID();
var playerCancelSpan=["K&#252;ndigen", "Cancel", "Cancelar", "Annuler", "Annullare", "Vazge&ccedil;"];
var playerRenameSpan=["Umbenennen", "Rename", "Cambiar el Nombre", "Renommer", "Rinominare", "&#304;smi De&#287;i&#351;tir"];
var pagePlayerRenamePlayerH=["Umbenennen Spieler", "Rename Player", "Cambiar el Nombre de Jugador", "Renommer Joueur", "Renommer Joueur", "Oyuncu &#304;smini De&#287;i&#351;tir"];
var labelNewName=["Neuen Namen", "New Name", "Nuevo Nombre", "Nouveau Nom", "Nuovo Nome", "Yeni &#304;sim"];
$("#pagePlayerRenamePlayerH").html(pagePlayerRenamePlayerH[langID]);
$(".playerCancelSpan").html(playerCancelSpan[langID]);
$(".playerRenameSpan").html(playerRenameSpan[langID]);
$("#labelNewName").html(labelNewName[langID]);
}
$("#pagePlayerDelete").live('pagebeforeshow', function(event){
pageDeleteLanguageChange();
$("#pagePlayerDeleteContent").find("#pagePlayerDeleteButton").attr("onclick","gamePlayerDeleteDB("+gamePlayerID+");");
$("#pagePlayerDeleteContent").find("#pagePlayerDeletePlayerName").html(decodeURIComponent(pName[gamePlayerID]));
});
function pageDeleteLanguageChange(){
var langID=1;
langID=findlangID();
var pagePlayerDeletePlayerH=["L&ouml;schen Spieler", "Delete Player", "Borrar Jugador", "Effacer Joueur", "Eliminare Giocatore", "Oyuncu Silme"];
var labelDelete=["Wollen Sie spieler l&ouml;schen?", "Do you want to delete player?", "¿Quieres eliminar jugador", "Voulez-vous supprimer joueur?", "Vuoi eliminare giocatore?", "Oyuncuyu silmek istiyor musunuz?"];
var playerCancelSpan=["K&uuml;ndigen", "Cancel", "Cancelar", "Annuler", "Annullare", "Vazge&ccedil;"];
var playerDeleteSpan=["L&ouml;schen", "Delete", "Borrar", "Effacer", "Cancellare", "Sil"]
$("#pagePlayerDeletePlayerH").html(pagePlayerDeletePlayerH[langID]);
$("#labelDelete").html(labelDelete[langID]);
$("#playerCancelSpan").html(playerCancelSpan[langID]);
$("#playerDeleteSpan").html(playerDeleteSpan[langID]);
}
$("#pagePlayerCreate").live('pagebeforeshow', function(event){
pagePlayerCreateLanguageChange();
});
function pagePlayerCreateLanguageChange(){
var langID=1;
langID=findlangID();
var pagePlayerCreatePlayerH=["Spieler Erstellen", "Create Player", "Crear Jugador", "Cr&eacute;er Un Joueur", "Creare Un Giocatore", "Yeni Oyuncu Olu&#351;tur"];
var nameSpan=["Name", "Name", "Nombre", "Nom", "Nome", "&#304;sim"];
var playerCreateCancelSpan=["K&#252;ndigen", "Cancel", "Cancelar", "Annuler", "Annullare", "Vazge&ccedil;"];
var playerCreateCreateSpan=["Schaffen", "Create", "Crear", "Cr&eacute;er", "Creare", "Olu&#351;tur"];
$("#pagePlayerCreatePlayerH").html(pagePlayerCreatePlayerH[langID]);
$("#nameSpan").html(nameSpan[langID]);
$("#playerCreateCancelSpan").html(playerCreateCancelSpan[langID]);
$("#playerCreateCreateSpan").html(playerCreateCreateSpan[langID]);
}
function openPagePlayerRename(id){
gamePlayerID=id;
$.mobile.changePage( $("#pagePlayerRename") , { transition: "none"} );
}
function openPagePlayerDelete(id){
gamePlayerID=id;
$.mobile.changePage( $("#pagePlayerDelete") , { transition: "none"} );
}
function openPagePlayerCreate(){
$.mobile.changePage( $("#pagePlayerCreate") , { transition: "none"} );
$("#pagePlayerCreateContent").find("#createPlayerName").val("");
}
$("#pageGameInfo").live('pagebeforeshow', function(event){
pageGameInfoLanguageChange();
});
function pageGameInfoLanguageChange(){
var langID=1;
langID=findlangID();
var pageGameInfo23AprilDiv = []; 
pageGameInfo23AprilDiv[0]='<h4>T&#252;rkei</h4>Die Gro&szlig;en Nationalversammlung der T&#252;rkei wurde auf 1920, 23. April gegr&#252;ndet, und das Ereignis, 23. April verk&#252;ndet einen nationalen Feiertag wurde 1921 zu gedenken. Seit 1927 ist es auch geworden Weltkindertag (t&#252;rkisch: Ulusal Egemenlik ve &#199;ocuk Bayram&#305;, w&#246;rtlich "Der Feiertag der Nationalen Souver&atilde;nit&atilde;t und Kindertag"), ein offizieller Feiertag f&#252;r die Kinder in der T&#252;rkei gewidmet und (ab 1979) die Welt.<br><br>Neben dem Halten von vielen heimischen festlichen Veranstaltungen wie Auff&#252;hrungen Stadion, T&#252;rkei beherbergt auch <a href="http://www.trt23nisan.com/en/" target="_blank">TRT International April 23 Kinder-Festival</a>, wo Gruppen von Kindern aus anderen L&atilde;ndern eingeladen, an den Feierlichkeiten teilzunehmen w&atilde;hrend des Aufenthalts in t&#252;rkischen Familien zu Hause sind. In einigen L&atilde;ndern sind die Festivals mit Kindern der verschiedenen Ethnien gefeiert.'; 
pageGameInfo23AprilDiv[1]='<h4>Turkey</h4>The Grand National Assembly of Turkey was established on 1920, April 23, and to commemorate the event, April 23 was proclaimed a national holiday in 1921. Since 1927 it has also become Children\'s Day (Turkish: Ulusal Egemenlik ve &#199;ocuk Bayram&#305;, literally "The Holiday of National Sovereignty and Children"), an official holiday dedicated to the children of Turkey and (from 1979 on) the world.<br><br>In addition to holding many domestic celebratory events such as stadium performances, Turkey also houses <a href="http://www.trt23nisan.com/en/" target="_blank">TRT International April 23 Children\'s Festival</a>, where groups of children from other countries are invited to participate in the festivities while staying at Turkish families\' homes. In some countries, Festivals are celebrated with children\'s of different ethnicities.';
pageGameInfo23AprilDiv[2]='<h4>Turqu&iacute;a</h4>La Asamblea Nacional de Turqu&iacute;a fue establecida en 1920, 23 de abril, y para conmemorar el evento, 23 de abril se proclam&oacute; un d&iacute;a de fiesta nacional en 1921. Desde 1927, tambi&eacute;n se ha convertido en el D&iacute;a del Ni&ntilde;o (en turco: Ulusal Egemenlik ve &#199;ocuk Bayram&#305;, literalmente "La Fiesta de la Soberan&iacute;a Nacional y de la Infancia"), un d&iacute;a de fiesta oficial dedicado a los ni&ntilde;os de Turqu&iacute;a y (a partir de 1979) el mundo.<br><br>Adem&aacute;s de la celebraci&oacute;n de muchos eventos festivos nacionales como actuaciones estadio, Turqu&iacute;a tambi&eacute;n alberga <a href="http://www.trt23nisan.com/en/" target="_blank">TRT Festival Internacional 23 de abril de los ni&ntilde;os</a>, donde se invita a los grupos de ni&ntilde;os de otros pa&iacute;ses para participar en las festividades que se hospedan en casas de familias turcas. En algunos pa&iacute;ses, las fiestas se celebran con los ni&ntilde;os de diferentes etnias.'; 
pageGameInfo23AprilDiv[3]='<h4>Turquie</h4>L\'Assembl&eacute;e Nationale de Turquie a &eacute;t&eacute; cr&eacute;&eacute; le 1920 23 Avril et pour comm&eacute;morer l\'&eacute;v&eacute;nement, le 23 Avril a &eacute;t&eacute; proclam&eacute;e f&ecirc;te nationale en 1921. Depuis 1927, il est aussi devenu le jour des enfants (turc: Ulusal Egemenlik ve &Ccedil;ocuk Bayram&#305;, litt&eacute;ralement "La F&ecirc;te de la souverainet&eacute; nationale et de l\'enfance"), un jour f&eacute;ri&eacute; d&eacute;di&eacute; aux enfants de Turquie et d\'(&agrave; partir de 1979) dans le monde.<br><br>En plus d\'organiser de nombreux &eacute;v&eacute;nements festifs domestiques telles que des spectacles stade, la Turquie abrite aussi <a href="http://www.trt23nisan.com/en/" target="_blank">le festival de la TRT International Avril 23 Enfants</a>, o&ugrave; des groupes d\'enfants d\'autres pays sont invit&eacute;s &agrave; participer aux festivit&eacute;s, tout en restant au domicile des familles turques. Dans certains pays, les festivals sont c&eacute;l&eacute;br&eacute;s avec de des diff&eacute;rentes ethnies enfants.'; 
pageGameInfo23AprilDiv[4]='<h4>Turchia</h4>La Grande Assemblea Nazionale della Turchia &eacute; stato stabilito in 1920, 23 aprile e per commemorare l\'evento, il 23 aprile si &eacute; proclamata una festa nazionale nel 1921. Dal 1927 &eacute; diventato anche il giorno dei bambini (Turco: Ulusal Egemenlik ve &Ccedil;ocuk Bayram&#305;, letteralmente "La Casa della sovranit&agrave; nazionale e dei bambini"), una festa ufficiale dedicato ai figli di Turchia e (dal 1979) il mondo.<br><br>Oltre a tenere numerosi eventi celebrativi domestici come performance dello stadio, la Turchia ospita anche <a href="http://www.trt23nisan.com/en/" target="_blank">Festival Internazionale TRT 23 aprile per bambini</a>, dove gruppi di bambini provenienti da altri paesi sono invitati a partecipare ai festeggiamenti durante il soggiorno in case di famiglie turche. In alcuni paesi, i festival sono celebrati con bambini di diverse etnie.'; 
pageGameInfo23AprilDiv[5]='<h4>T&#252;rkiye</h4>T&#252;rkiye B&#252;y&#252;k Millet Meclisinin 23 Nisan 1920\'de kurulmu&#351; olmas&#305; an&#305;s&#305;na, 23 Nisan 1921 y&#305;l&#305;nda milli tatil ilan edilmistir. 1927\'den bu yana ayn&#305; zamanda &#199;ocuk Bayram&#305; haline gelmi&#351;tir (Ulusal Egemenlik ve &#199;ocuk Bayram&#305;). T&#252;rkiye ve d&#252;nya &#231;ocuklar&#305;na adanm&#305;&#351; resmi tatildir (1979\'dan itibaren).<br><br>Stadyum g&#246;sterileri gibi &#231;ok say&#305;da yerli kutlama etkinliklerine ek olarak, T&#252;rkiye, di&#287;er &#252;lkelerden &#231;ocuk gruplar&#305;n&#305; &#351;enliklere kat&#305;lmaya davet etti&#287;i ve kat&#305;lanlarin, T&#252;rk ailelerin evlerinde kald&#305;&#287;&#305;, <a href="http://www.trt23nisan.com/en/" target="_blank">TRT Uluslararas&#305; 23 Nisan &#199;ocuk &#350;enli&#287;i\'ne</a> de ev sahipli&#287;i yapmaktad&#305;r. Baz&#305; &#252;lkelerde, Festivaller  farkl&#305; etnikteki &#231;ocuklarla kutlanmaktad&#305;r.'; 
$("#pageGameInfo23AprilDiv").html(pageGameInfo23AprilDiv[langID]);
}
function pagePlayersLanguageChange(){
var langID=1;
langID=findlangID();
var playersH=["Spieler :", "Players :", "Jugadores :", "Joueurs :", "Giocatori :", "Oyuncular :"];
var levelSpanMode=["Modus","Mode","Modo","Mode","Moda","Mod"];
var levelSpanDifE=["Leicht", "Easy", "F&aacute;cil", "Facile", "Facile", "Kolay"];
var levelSpanDifM=["Moderieren", "Moderate", "Moderada", "Mod&eacute;r&eacute;e", "Moderata", "Normal"];
var levelSpanDifH=["Schwer", "Hard", "Dif&iacute;cil", "Difficile", "", "Zor"];
var playerRenameSpan=["Umbenennen", "Rename", "Rebautizar", "Renommer", "Rinominare", "&#304;smi de&#287;i&#351;tir"];
var playerDeleteSpan=["L&ouml;schen", "Delete", "Borrar", "Effacer", "Cancellare", "Sil"];
var playerCreateSpan=["Schaffen", "Create", "Crear", "Cr&eacute;er", "Creare", "Olu&#351;tur"];
$("#playersH").html(playersH[langID]);
$(".levelSpanMode").html(levelSpanMode[langID]);
$(".levelSpanDifE").html(levelSpanDifE[langID]);
$(".levelSpanDifM").html(levelSpanDifM[langID]);
$(".levelSpanDifH").html(levelSpanDifH[langID]);
$(".playerRenameSpan").html(playerRenameSpan[langID]);
$(".playerDeleteSpan").html(playerDeleteSpan[langID]);
$(".playerCreateSpan").html(playerCreateSpan[langID]);
}
function playerSelect(id){
gamePlayerID=id;
$.mobile.changePage( $("#pageGameModes") , { transition: "none"} );
}
$("#pagePlayers").live('pagebeforeshow', function(event){											
listPagePlayersUserInfoDB();
});
$("#pageGameModes").live("pagebeforeshow", function(){
$("#pageGameModesFreeMode").removeClass("ui-disabled");
$("#pageGameModesFindOut").removeClass("ui-disabled");
$("#pageGameModesMathris").removeClass("ui-disabled");
$("#pageGameModesMathrix").removeClass("ui-disabled");
$("#pageGameModesShootOut").removeClass("ui-disabled");
$("#pageGameModesFreeMode").addClass("ui-disabled");
$("#pageGameModesFindOut").addClass("ui-disabled");
$("#pageGameModesMathris").addClass("ui-disabled");
$("#pageGameModesMathrix").addClass("ui-disabled");
$("#pageGameModesShootOut").addClass("ui-disabled");
if(pLevels[gamePlayerID][0][0]>0) $("#pageGameModesFreeMode").removeClass("ui-disabled");
if(pLevels[gamePlayerID][1][0]>0) $("#pageGameModesFindOut").removeClass("ui-disabled");
if(pLevels[gamePlayerID][2][0]>0) $("#pageGameModesMathris").removeClass("ui-disabled");
if(pLevels[gamePlayerID][3][0]>0) $("#pageGameModesMathrix").removeClass("ui-disabled");
if(pLevels[gamePlayerID][4][0]>0) $("#pageGameModesShootOut").removeClass("ui-disabled");
});
function gameModeSelect(mode){
gameMode=mode;
if (gameMode==0){
$.mobile.changePage( $("#pageFreeModeLevel") , { transition: "none"} );
}
else if (gameMode==1){
$.mobile.changePage( $("#pageFindOutLevel") , { transition: "none"} );
}
else if (gameMode==2){
$.mobile.changePage( $("#pageMathrisLevel") , { transition: "none"} );
}
else if (gameMode==3){
$.mobile.changePage( $("#pageMathrixLevel") , { transition: "none"} );
}
else if (gameMode==4){
$.mobile.changePage( $("#pageShootOutLevel") , { transition: "none"} );
}
return false;
}
$("#pageGameModesInfo").live("pagebeforeshow", function(){
pageGameModesInfoLanguageChange();
});
function pageGameModesInfoLanguageChange(){

var langID=1; //gameLang=="en" Ingilizce //Hiç bir dil seçili degilse otomatik Ingilizce olacak
langID=findlangID();
//["", "", "", "", "", ""];

var pageGameModeInfoLevelsSpan=["Ebenen", "Levels", "Niveles", "Niveaux", "Livelli", "Seviyeler"];
var pageGameModeInfoPointsSpan=["Punkte", "Points", "Puntos", "Points", "Punti", "Puanlama"];
var pageGameModeInfoTrueSpan=["Wahr", "True", "Verdadero", "Vrai", "Vero", "Do&#287;ru"];
var pageGameModeInfoFalseSpan=["Falsch", "False", "Falso", "Faux", "Falso", "Yanl&#305;&#351;"];
var pageGameModeInfoEasySpan=["Leicht", "Easy", "F&aacute;cil", "Facile", "Facile", "Kolay"];
var pageGameModeInfoModerateSpan=["Moderieren", "Moderate", "Moderada", "Mod&eacute;r&eacute;", "Moderato", "Normal"];
var pageGameModeInfoHardSpan=["Schwer", "Hard", "Difficile", "Dur", "Difficile", "Zor"];
var pageGameModeInfoQuestionsSpan=["Fragen", "Questions", "Preguntas", "Questions", "Domande", "Sorular"];
var pageGameModeInfoPTSSpan=["", "Points To Success", "Puntos Para El &Eacute;xito", "Points De La R&eacute;ussite", "Punti Per Il Successo", "Gerekli Puan"];
//var a=["", "", "", "", "", ""];

$("#pageGameModeInfoLevelsSpan").html(pageGameModeInfoLevelsSpan[langID]);
$("#pageGameModeInfoPointsSpan").html(pageGameModeInfoPointsSpan[langID]);
$("#pageGameModeInfoTrueSpan").html(pageGameModeInfoTrueSpan[langID]);
$("#pageGameModeInfoFalseSpan").html(pageGameModeInfoFalseSpan[langID]);
$(".pageGameModeInfoEasySpan").html(pageGameModeInfoEasySpan[langID]);
$(".pageGameModeInfoModerateSpan").html(pageGameModeInfoModerateSpan[langID]);
$(".pageGameModeInfoHardSpan").html(pageGameModeInfoHardSpan[langID]);
$("#pageGameModeInfoQuestionsSpan").html(pageGameModeInfoQuestionsSpan[langID]);
$("#pageGameModeInfoPTSSpan").html(pageGameModeInfoPTSSpan[langID]);
//$("#").html([langID]);

}
$("#pageFreeModeLevel").live("pagebeforeshow", function(){
pageFreeModeLevelLanguageChange();
freeModeLevels();
});
function freeModeLevels(){
$("#freeModeEasy").attr("checked",false).checkboxradio('enable').checkboxradio("refresh");
$("#freeModeModerate").attr("checked",false).checkboxradio('disable').checkboxradio("refresh");
$("#freeModeHard").attr("checked",false).checkboxradio('disable').checkboxradio("refresh");
$("#pageFreeModeLevel").find("#oAdd").checkboxradio("enable").attr("checked",false).checkboxradio('refresh');
$("#pageFreeModeLevel").find("#oSub").checkboxradio("disable").attr("checked",false).checkboxradio('refresh');
$("#pageFreeModeLevel").find("#oMul").checkboxradio("disable").attr("checked",false).checkboxradio('refresh');
$("#pageFreeModeLevel").find("#oDiv").checkboxradio("disable").attr("checked",false).checkboxradio('refresh');
$("#pageFreeModeLevel").find("#nInt").checkboxradio("enable").attr("checked",false).checkboxradio('refresh');
$("#pageFreeModeLevel").find("#nDec").checkboxradio("disable").attr("checked",false).checkboxradio('refresh');
$("#pageFreeModeLevel").find("#nRat").checkboxradio("disable").attr("checked",false).checkboxradio('refresh');
$("#pageFreeModeLevel").find("#nExp").checkboxradio("disable").attr("checked",false).checkboxradio('refresh');
$("#pageFreeModeLevel").find("#nRoo").checkboxradio("disable").attr("checked",false).checkboxradio('refresh');
$("#pageFreeModeLevel").find("#digit1").checkboxradio("enable").attr("checked",false).checkboxradio('refresh');
$("#pageFreeModeLevel").find("#digit2").checkboxradio("disable").attr("checked",false).checkboxradio('refresh');
$("#pageFreeModeLevel").find("#digit3").checkboxradio("disable").attr("checked",false).checkboxradio('refresh');
$("#pageFreeModeLevel").find("#digit4").checkboxradio("disable").attr("checked",false).checkboxradio('refresh');
$("#pageFreeModeLevel").find("#digit5").checkboxradio("disable").attr("checked",false).checkboxradio('refresh');
$("#pageFreeModeLevel").find("#oCount1").checkboxradio("enable").attr("checked",false).checkboxradio('refresh');
$("#pageFreeModeLevel").find("#oCount2").checkboxradio("disable").attr("checked",false).checkboxradio('refresh');
$("#pageFreeModeLevel").find("#oCount3").checkboxradio("disable").attr("checked",false).checkboxradio('refresh');
$("#pageFreeModeLevel").find("#oCount4").checkboxradio("disable").attr("checked",false).checkboxradio('refresh');
$("#pageFreeModeLevel").find("#oCount5").checkboxradio("disable").attr("checked",false).checkboxradio('refresh');
$("#pageFreeModeLevel").find("#eSign0").checkboxradio("enable").attr("checked",false).checkboxradio('refresh');
$("#pageFreeModeLevel").find("#eSign1").checkboxradio("disable").attr("checked",false).checkboxradio('refresh');
$("#pageFreeModeLevel").find("#eSign2").checkboxradio("disable").attr("checked",false).checkboxradio('refresh');
$("#pageFreeModeLevel").find("#eSign3").checkboxradio("disable").attr("checked",false).checkboxradio('refresh');
$("#pageFreeModeLevel").find("#eSign4").checkboxradio("disable").attr("checked",false).checkboxradio('refresh');
$("#pageFreeModeLevel").find("#eSign5").checkboxradio("disable").attr("checked",false).checkboxradio('refresh');
var level;
var dif;
dif=lastSelDif[gamePlayerID][0];
level=pLevels[gamePlayerID][0][dif];
if(pLevels[gamePlayerID][0][1]>0) $("#freeModeModerate").checkboxradio('enable').checkboxradio("refresh");
if(pLevels[gamePlayerID][0][2]>0) $("#freeModeHard").checkboxradio('enable').checkboxradio("refresh");
if(dif==0){
$("#freeModeEasy").attr("checked",true).checkboxradio("refresh");
}
else if(dif==1){
$("#freeModeModerate").attr("checked",true).checkboxradio("refresh");
}
else{
$("#freeModeHard").attr("checked",true).checkboxradio("refresh");
}
switch (level){
case 5:
$("#pageFreeModeLevel").find("#nRoo").checkboxradio("enable").checkboxradio('refresh');
$("#pageFreeModeLevel").find("#digit5").checkboxradio("enable").checkboxradio('refresh');
$("#pageFreeModeLevel").find("#oCount5").checkboxradio("enable").checkboxradio('refresh');
if(lastSelFMNum[gamePlayerID][dif][4]==1) $("#pageFreeModeLevel").find("#nRoo").attr("checked",true).checkboxradio('refresh');
if(lastSelFMDig[gamePlayerID][dif][4]==1) $("#pageFreeModeLevel").find("#digit5").attr("checked",true).checkboxradio('refresh');
if(lastSelFMOC[gamePlayerID][dif][4]==1) $("#pageFreeModeLevel").find("#oCount5").attr("checked",true).checkboxradio('refresh');
case 4:
$("#pageFreeModeLevel").find("#oDiv").checkboxradio("enable").checkboxradio('refresh');
$("#pageFreeModeLevel").find("#nExp").checkboxradio("enable").checkboxradio('refresh');
$("#pageFreeModeLevel").find("#digit4").checkboxradio("enable").checkboxradio('refresh');
$("#pageFreeModeLevel").find("#oCount4").checkboxradio("enable").checkboxradio('refresh');
$("#pageFreeModeLevel").find("#eSign4").checkboxradio("enable").checkboxradio('refresh');
$("#pageFreeModeLevel").find("#eSign5").checkboxradio("enable").checkboxradio('refresh');
if(lastSelFMOp[gamePlayerID][dif][3]==1) $("#pageFreeModeLevel").find("#oDiv").attr("checked",true).checkboxradio('refresh');
if(lastSelFMNum[gamePlayerID][dif][3]==1) $("#pageFreeModeLevel").find("#nExp").attr("checked",true).checkboxradio('refresh');
if(lastSelFMDig[gamePlayerID][dif][3]==1) $("#pageFreeModeLevel").find("#digit4").attr("checked",true).checkboxradio('refresh');
if(lastSelFMOC[gamePlayerID][dif][3]==1) $("#pageFreeModeLevel").find("#oCount4").attr("checked",true).checkboxradio('refresh');
if(lastSelFMS[gamePlayerID][dif][4]==1) $("#pageFreeModeLevel").find("#eSign4").attr("checked",true).checkboxradio('refresh');
if(lastSelFMS[gamePlayerID][dif][5]==1) $("#pageFreeModeLevel").find("#eSign5").attr("checked",true).checkboxradio('refresh');
case 3:
$("#pageFreeModeLevel").find("#oMul").checkboxradio("enable").checkboxradio('refresh');
$("#pageFreeModeLevel").find("#nRat").checkboxradio("enable").checkboxradio('refresh');
$("#pageFreeModeLevel").find("#digit3").checkboxradio("enable").checkboxradio('refresh');
$("#pageFreeModeLevel").find("#oCount3").checkboxradio("enable").checkboxradio('refresh');
$("#pageFreeModeLevel").find("#eSign2").checkboxradio("enable").checkboxradio('refresh');
$("#pageFreeModeLevel").find("#eSign3").checkboxradio("enable").checkboxradio('refresh');
if(lastSelFMOp[gamePlayerID][dif][2]==1) $("#pageFreeModeLevel").find("#oMul").attr("checked",true).checkboxradio('refresh');
if(lastSelFMNum[gamePlayerID][dif][2]==1) $("#pageFreeModeLevel").find("#nRat").attr("checked",true).checkboxradio('refresh');
if(lastSelFMDig[gamePlayerID][dif][2]==1) $("#pageFreeModeLevel").find("#digit3").attr("checked",true).checkboxradio('refresh');
if(lastSelFMOC[gamePlayerID][dif][2]==1) $("#pageFreeModeLevel").find("#oCount3").attr("checked",true).checkboxradio('refresh');
if(lastSelFMS[gamePlayerID][dif][2]==1) $("#pageFreeModeLevel").find("#eSign2").attr("checked",true).checkboxradio('refresh');
if(lastSelFMS[gamePlayerID][dif][3]==1) $("#pageFreeModeLevel").find("#eSign3").attr("checked",true).checkboxradio('refresh');
case 2:
$("#pageFreeModeLevel").find("#oSub").checkboxradio("enable").checkboxradio('refresh');
$("#pageFreeModeLevel").find("#nDec").checkboxradio("enable").checkboxradio('refresh');
$("#pageFreeModeLevel").find("#digit2").checkboxradio("enable").checkboxradio('refresh');
$("#pageFreeModeLevel").find("#oCount2").checkboxradio("enable").checkboxradio('refresh');
$("#pageFreeModeLevel").find("#eSign1").checkboxradio("enable").checkboxradio('refresh');
if(lastSelFMOp[gamePlayerID][dif][1]==1) $("#pageFreeModeLevel").find("#oSub").attr("checked",true).checkboxradio('refresh');
if(lastSelFMNum[gamePlayerID][dif][1]==1) $("#pageFreeModeLevel").find("#nDec").attr("checked",true).checkboxradio('refresh');
if(lastSelFMDig[gamePlayerID][dif][1]==1) $("#pageFreeModeLevel").find("#digit2").attr("checked",true).checkboxradio('refresh');
if(lastSelFMOC[gamePlayerID][dif][1]==1) $("#pageFreeModeLevel").find("#oCount2").attr("checked",true).checkboxradio('refresh');
if(lastSelFMS[gamePlayerID][dif][1]==1) $("#pageFreeModeLevel").find("#eSign1").attr("checked",true).checkboxradio('refresh');
}
if(lastSelFMOp[gamePlayerID][dif][0]==1) $("#pageFreeModeLevel").find("#oAdd").attr("checked",true).checkboxradio('refresh');
if(lastSelFMNum[gamePlayerID][dif][0]==1) $("#pageFreeModeLevel").find("#nInt").attr("checked",true).checkboxradio('refresh');
if(lastSelFMDig[gamePlayerID][dif][0]==1) $("#pageFreeModeLevel").find("#digit1").attr("checked",true).checkboxradio('refresh');
if(lastSelFMOC[gamePlayerID][dif][0]==1) $("#pageFreeModeLevel").find("#oCount1").attr("checked",true).checkboxradio('refresh');
if(lastSelFMS[gamePlayerID][dif][0]==1) $("#pageFreeModeLevel").find("#eSign0").attr("checked",true).checkboxradio('refresh');
freeModeLevelCheckControl();
}
function pageFreeModeLevelLanguageChange(){
var langID=1;
langID=findlangID();
var spanEasyFreeMode=["Leicht", "Easy", "F&aacute;cil", "Facile", "Facile", "Kolay"];
var spanModerateFreeMode=["Moderieren", "Moderate", "Moderada", "Mod&eacute;r&eacute;", "Moderato", "Normal"];
var spanHardFreeMode=["Schwer", "Hard", "Difficile", "Dur", "Difficile", "Zor"];
var operationsH3=["Operationen", "Operations", "Operaciones", "Op&eacute;rations", "Operazioni", "&#304;&#351;lemler"];
var spanOAdd=["Addition", "Addition", "adici&oacute;n", "Addition", "Addizione", "Toplama"];
var spanOSub=["Subtraktion", "Subtraction", "Sustracci&oacute;n", "Soustraction", "Sottrazione", "&Ccedil;&#305;karma"];
var spanOMul=["Multiplikation", "Multiplication", "Multiplicaci&oacute;n", "Multiplication", "Moltiplicazione", "&Ccedil;arpma"];
var spanODiv=["Division", "Division", "Divisi&oacute;n", "Division", "Divisione", "B&ouml;lme"];
var numbersH3=["Zahlen", "Numbers", "N&uacute;meros", "Num&eacute;ros", "Numeri", "Say&#305;lar"];
var spanNInt=["Ganze Zahl", "Integers", "N&uacute;meros Enteros", "Entier Relatif", "Numero Intero", "Tam Say&#305;lar"];
var spanNDec=["Rationale Zahl", "Rational Numbers", "N&uacute;mero Racional", "Nombre Rationnel", "Numero Razionale", "Ondal&#305;k Say&#305;lar"];
var spanNRat=["Dezimal Zahl", "Decimal Numbers", "N&uacute;mero Decimales", "Nombre D&eacute;cimaux", "Numero Decimali", "Kesirli Say&#305;lar"];
var spanNExp=["Exponentielle Zahl", "Exponential Numbers", "N&uacute;mero Exponenciales", "Nombres Exponentielles", "Numero Esponenziali", "&#220;sl&#252; Say&#305;lar"];
var spanNRoo=["Wurzeln Zahl", "Root Numbers", "N&uacute;mero Raíz", "Nombre Racines", "Numero Radice", "K&#246;kl&#252; Say&#305;lar"];
var digitsH3=["Stellen", "Digits", "D&iacute;gitos", "Chiffres", "Cifre", "Hane Say&#305;s&#305;"];
var oCountH3=["Anzahl der Operationen", "Operation Count", "N&uacute;mero De Operaciones", "Nombre D'op&eacute;rations", "Numero Di Operazioni", "&#304;&#351;lem Say&#305;s&#305;"];
var signH3=["Zeichen", "Sign", "Signo", "Signe", "Segno", "&#304;&#351;aret"];
var playSpan=["Starten", "Start", "Comenzar", "Commencer", "Iniziare", "Ba&#351;la"];
$("#spanEasyFreeMode").html(spanEasyFreeMode[langID]);
$("#spanModerateFreeMode").html(spanModerateFreeMode[langID]);
$("#spanHardFreeMode").html(spanHardFreeMode[langID]);
$("#operationsH3").html(operationsH3[langID]);
$("#spanOAdd").html(spanOAdd[langID]);
$("#spanOSub").html(spanOSub[langID]);
$("#spanOMul").html(spanOMul[langID]);
$("#spanODiv").html(spanODiv[langID]);
$("#numbersH3").html(numbersH3[langID]);
$("#spanNInt").html(spanNInt[langID]);
$("#spanNDec").html(spanNDec[langID]);
$("#spanNRat").html(spanNRat[langID]);
$("#spanNExp").html(spanNExp[langID]);
$("#spanNRoo").html(spanNRoo[langID]);
$("#digitsH3").html(digitsH3[langID]);
$("#oCountH3").html(oCountH3[langID]);
$("#signH3").html(signH3[langID]);
$("#playSpan").html(playSpan[langID]);
}
function changeOpt(op1, op2){
var m;
var opt1=[];
var opt2=[[]];
var optDB="";
var dif;
dif=lastSelDif[gamePlayerID][0];
if(op1==0){
m="fmoperation";
for(var i=0;i<3;i++){
for (var i2=0;i2<4;i2++){
opt1[i2]=lastSelFMOp[gamePlayerID][i][i2];
if(i2==op2 && dif==i){
opt1[i2]=(Number(lastSelFMOp[gamePlayerID][i][i2])+1)%2;
}
if(optDB!="") optDB=optDB+"|";
optDB=optDB.toString()+opt1[i2].toString();
}
opt2[i]=[opt1[0],opt1[1],opt1[2],opt1[3]];
}
lastSelFMOp[gamePlayerID]=opt2;
}
else if(op1==1){
m="fmnumbers";
for(var i=0;i<3;i++){
for (var i2=0;i2<5;i2++){
opt1[i2]=lastSelFMNum[gamePlayerID][i][i2];
if(i2==op2 && dif==i){
opt1[i2]=(Number(lastSelFMNum[gamePlayerID][i][i2])+1)%2;
}
if(optDB!="") optDB=optDB+"|";
optDB=optDB.toString()+opt1[i2].toString();
}
opt2[i]=[opt1[0],opt1[1],opt1[2],opt1[3],opt1[4]];
}
lastSelFMNum[gamePlayerID]=opt2;
}
else if(op1==2){
m="fmdigit";
for(var i=0;i<3;i++){
for (var i2=0;i2<5;i2++){
	opt1[i2]=lastSelFMDig[gamePlayerID][i][i2];
if(i2==op2 && dif==i){
opt1[i2]=(Number(lastSelFMDig[gamePlayerID][i][i2])+1)%2;
}
if(optDB!="") optDB=optDB+"|";
optDB=optDB.toString()+opt1[i2].toString();
}
opt2[i]=[opt1[0],opt1[1],opt1[2],opt1[3],opt1[4]];
}
lastSelFMDig[gamePlayerID]=opt2;
}
else if(op1==3){
m="fmocount";
for(var i=0;i<3;i++){
for (var i2=0;i2<5;i2++){
	opt1[i2]=lastSelFMOC[gamePlayerID][i][i2];
if(i2==op2 && dif==i){
opt1[i2]=(Number(lastSelFMOC[gamePlayerID][i][i2])+1)%2;
}
if(optDB!="") optDB=optDB+"|";
optDB=optDB.toString()+opt1[i2].toString();
}
opt2[i]=[opt1[0],opt1[1],opt1[2],opt1[3],opt1[4]];
}
lastSelFMOC[gamePlayerID]=opt2;
}
else if(op1==4){
m="fmsign";
for(var i=0;i<3;i++){
for (var i2=0;i2<6;i2++){
opt1[i2]=lastSelFMS[gamePlayerID][i][i2];
if(i2==op2 && dif==i){
opt1[i2]=(Number(lastSelFMS[gamePlayerID][i][i2])+1)%2;
}
if(optDB!="") optDB=optDB+"|";
optDB=optDB.toString()+opt1[i2].toString();
}
opt2[i]=[opt1[0],opt1[1],opt1[2],opt1[3],opt1[4],opt1[5]];
}
lastSelFMS[gamePlayerID]=opt2;
}
if (dbOK==1) playerDBUpdate(m, optDB);
freeModeLevelCheckControl();
}
function freeModeLevelCheckControl(){
var dif;
dif=lastSelDif[gamePlayerID][0];
var j1=0, j2=0, j3=0; j4=0, j5=0;
for(var i=0;i<4;i++){
if(lastSelFMOp[gamePlayerID][dif][i]!=0) j1=1;
}
if(j1==0){
$("#freeModePlayButton").addClass("ui-disabled");
}
for(var i=0;i<5;i++){
if(lastSelFMNum[gamePlayerID][dif][i]!=0) j2=1;
}
if(j2==0){
$("#freeModePlayButton").addClass("ui-disabled");
}
for(var i=0;i<5;i++){
if(lastSelFMDig[gamePlayerID][dif][i]!=0) j3=1;
}
if(j3==0){
$("#freeModePlayButton").addClass("ui-disabled");
}
for(var i=0;i<5;i++){
if(lastSelFMOC[gamePlayerID][dif][i]!=0) j4=1;
}
if(j4==0){
$("#freeModePlayButton").addClass("ui-disabled");
}
for(var i=0;i<6;i++){
if(lastSelFMS[gamePlayerID][dif][i]!=0) j5=1;
}
if(j5==0){
$("#freeModePlayButton").addClass("ui-disabled");
}
if(j1!=0 && j2!=0 && j3!=0 && j4!=0 && j5!=0){
$("#freeModePlayButton").removeClass("ui-disabled");	
}
}
function playFreeMode(score){
var iRand=Math.floor(Math.random()*gameDigit.length);
gameDifficulty=lastSelDif[gamePlayerID][0];
var gameOperation2=[];
var i2=0;
for(var i=0;i<4;i++){
if (lastSelFMOp[gamePlayerID][gameDifficulty][i]==1){
gameOperation2[i2]=i;
i2++;
}
}
gameOperation[0]=gameOperation2;
var gameNumber2=[];
var i2=0;
for(var i=0;i<5;i++){
if (lastSelFMNum[gamePlayerID][gameDifficulty][i]==1){
gameNumber2[i2]=i;
i2++;
}
}
gameNumber[0]=gameNumber2;
var gameDigit2=[];
var i2=0;
for(var i=0;i<5;i++){
if (lastSelFMDig[gamePlayerID][gameDifficulty][i]==1){
gameDigit2[i2]=i;
i2++;
}
}
gameDigit[0]=gameDigit2;
var gameOCount2=[];
var i2=0;
for(var i=0;i<5;i++){
if (lastSelFMOC[gamePlayerID][gameDifficulty][i]==1){
gameOCount2[i2]=i;
i2++;
}
}
gameOCount[0]=gameOCount2;
var gameSign2=[];
var i2=0;
for(var i=0;i<6;i++){
if (lastSelFMS[gamePlayerID][gameDifficulty][i]==1){
gameSign2[i2]=i;
i2++;
}
}
gameSign[0]=gameSign2;
$.mobile.changePage( $("#pageFreeModePlay") , { transition: "none"} );
if(score==0){
$("#pageFreeModePlaySlider").val(0);
$("#pageFreeModePlaySlider").slider('refresh');
}
var result= [];
var result2;
result =creatEquation(iRand); 
result2=createResult(result[1]);
var eqSign=[];
var eqRes;
var point;
point=1;
if(gameDifficulty==0) point=5;
if(gameDifficulty==1) point=2;
iSign=Math.floor(Math.random()*gameSign[iRand].length);
eqSign[0]=gameSign[iRand][iSign];
if(eqSign[0]==0){
eqSign[1]="=";
eqRes=(-1)*point;
if(result[1]==result2) eqRes=point;
}
else if(eqSign[0]==1){
eqSign[1]="&ne;";
eqRes=(-1)*point;
if(result[1]!=result2) eqRes=point;
}
else if(eqSign[0]==2){
eqSign[1]=">";
eqRes=(-1)*point;
if(result[1]>result2) eqRes=point;
}
else if(eqSign[0]==3){
eqSign[1]="&ge;";
eqRes=(-1)*point;
if(result[1]>=result2) eqRes=point;
}
else if(eqSign[0]==4){
eqSign[1]="<";
eqRes=(-1)*point;
if(result[1]<result2) eqRes=point;
}
else if(eqSign[0]==5){
eqSign[1]="&le;";
eqRes=(-1)*point;
if(result[1]<=result2) eqRes=point;
}
result[0]='<table align="center" class="equationTable"><tr>'+pointToComma(result[0])+'<td>'+eqSign[1]+'</td><td>'+pointToComma(result2)+'</td></tr></table>';
$("#playFreeModeWrong").attr("onClick","playFreeModeCal('"+(eqRes*(-1))+"')");
$("#playFreeModeRight").attr("onClick","playFreeModeCal('"+eqRes+"')");
$("#pageFreeModePlayQuestion").html(result[0]);
var w=[];
var w2;
w[0]=$(window).width();
w[1]=$("#pageFreeModePlayQuestion").width();
w2=((((w[0]-w[1])/2)*100)/w[0]).toString();
if(w[1]<w[0]){
$("#pageFreeModePlayQuestion").css("left",w2+"%");
}
else{
$("#pageFreeModePlayQuestion").css("left","0px");
}
var h=[];
var h2;
h[0]=$(window).height();
h[1]=$("#pageFreeModePlayQuestion").height();
h2=((((h[0]-h[1])/2)*100)/h[0]).toString();
if(h[1]<h[0]){
$("#pageFreeModePlayQuestion").css("top",h2+"%");
}
else{
$("#pageFreeModePlayQuestion").css("top","0px");
}
}
$("#pageFreeModePlay").live("pagebeforeshow", function(){
pageFreeModePlayLanguageChange();
$("#pageFreeModePlayH1").css("opacity",0.5);
});
function pageFreeModePlayLanguageChange(){
var langID=1;
langID=findlangID();
var popupFreeModePlaySucH1=["Gl&#220;ckw&#220;nsche", "Congratulations", "Congratulaciones", "F&eacute;licitations", "Congratulazioni", "Tebrikler"];
var popupFreeModePlaySucH3=["Sie wurde erfolgreich abgeschlossen.", "You completed successfuly.", "Ha completado con &eacute;xito.", "Vous avez termin&eacute; avec succ&eacute;s.", "Hai completato con successo.", "Ba&#351;ar&#305;yla tamamlad&#305;n&#305;z."];
var popupFreeModePlaySucSpan=["Ok", "Ok", "Aceptar", "D'accord", "Bene", "Tamam"];
var popupFreeModePlayUnSucH1=["Leider", "Sorry", "Arrepentido", "D&eacute;sol&eacute;", "Dispiacente", "Maalesef"];
var popupFreeModePlayUnSucH3=["Sie konnten nicht erfolgreich abzuschlie&szlig;en.", "You could not complete succesfully.", "No se pudo completar con &eacute;xito.", "On ne pouvait pas terminer avec succ&eacute;s.", "Non &eacute; in grado di completare con successo.", "Ba&#351;ar&#305;yla tamamlayamad&#305;n&#305;z."];
var popupFreeModePlayUnSucSpan=["Ok", "Ok", "Aceptar", "D'accord", "Bene", "Tamam"];
var playFreeModeFalseSpan=["Falsch", "False", "Falso", "Faux", "Falso", "Yanl&#305;&#351;"];
var playFreeModeTrueSpan=["Wahr", "True", "Verdadero", "Vrai", "Vero", "Do&#287;ru"];
$("#popupFreeModePlaySucH1").html(popupFreeModePlaySucH1[langID]);
$("#popupFreeModePlaySucH3").html(popupFreeModePlaySucH3[langID]);
$("#popupFreeModePlaySucSpan").html(popupFreeModePlaySucSpan[langID]);
$("#popupFreeModePlayUnSucH1").html(popupFreeModePlayUnSucH1[langID]);
$("#popupFreeModePlayUnSucH3").html(popupFreeModePlayUnSucH3[langID]);
$("#popupFreeModePlayUnSucSpan").html(popupFreeModePlayUnSucSpan[langID]);
$("#playFreeModeFalseSpan").html(playFreeModeFalseSpan[langID]);
$("#playFreeModeTrueSpan").html(playFreeModeTrueSpan[langID]);
}
function playFreeModeCal(point){
var points;
points=Number($("#pageFreeModePlaySlider").val());
point=Number(point);
if(point<0){
if(gameDifficulty==1) point=point*2;
if(gameDifficulty==2) point=point*3;
}
points=points+Number(point);
if(points<0) points=0;
if(points>100) points=100;
$("#pageFreeModePlaySlider").val(points.toString());
$("#pageFreeModePlaySlider").slider('refresh');
if(points>=100){
if(pLevels[gamePlayerID][0][gameDifficulty]==1 && lastSelFMOp[gamePlayerID][gameDifficulty][0]==1){
changeLevel(0, gameDifficulty, 2)
}
else if(pLevels[gamePlayerID][0][gameDifficulty]==2 && lastSelFMOp[gamePlayerID][gameDifficulty][1]==1){
changeLevel(0, gameDifficulty, 3)
}
else if(pLevels[gamePlayerID][0][gameDifficulty]==3 && lastSelFMOp[gamePlayerID][gameDifficulty][2]==1){
changeLevel(0, gameDifficulty, 4)
}
else if(pLevels[gamePlayerID][0][gameDifficulty]==4 && lastSelFMOp[gamePlayerID][gameDifficulty][3]==1){
changeLevel(0, gameDifficulty, 5)
}
$( "#popupFreeModePlaySuc" ).popup( "open" );
}
else{
playFreeMode();
}
}
$("#pageFindOutLevel").live("pagebeforeshow", function(){
clearInterval(gameCountDown);
pageFindOutLevelLanguageChange();
gamesModesLevels(1, "FindOut");
});
function pageFindOutLevelLanguageChange(){
var langID=1;
langID=findlangID();
var spanEasyFindOut=["Leicht", "Easy", "F&aacute;cil", "Facile", "Facile", "Kolay"];
var spanModerateFindOut=["Moderieren", "Moderate", "Moderada", "Mod&eacute;r&eacute;", "Moderato", "Normal"];
var spanHardFindOut=["Schwer", "Hard", "Difficile", "Dur", "Difficile", "Zor"];
$("#spanEasyFindOut").html(spanEasyFindOut[langID]);
$("#spanModerateFindOut").html(spanModerateFindOut[langID]);
$("#spanHardFindOut").html(spanHardFindOut[langID]);
};
$("#pageFindOutPlay").live("pagebeforeshow", function(){
clearInterval(gameCountDown);
pageFindOutPlayLanguageChange();
$("#pageFindOutPlayTimeSpan").removeClass("time1");
$("#pageFindOutPlayTimeSpan").removeClass("time2");
$("#pageFindOutPlayTimeSpan").addClass("time1");
});
function pageFindOutPlayLanguageChange(){
var langID=1;
langID=findlangID();
var popupFindOutPlaySucH1=["Gl&#220;ckw&#220;nsche", "Congratulations", "Congratulaciones", "F&eacute;licitations", "Congratulazioni", "Tebrikler"];
var popupFindOutPlaySucH3=["Sie wurde erfolgreich abgeschlossen.", "You completed successfuly.", "Ha completado con &eacute;xito.", "Vous avez termin&eacute; avec succ&eacute;s.", "Hai completato con successo.", "Ba&#351;ar&#305;yla tamamlad&#305;n&#305;z."];
var popupFindOutPlaySucSpan=["Ok", "Ok", "Aceptar", "D'accord", "Bene", "Tamam"];
var popupFindOutPlayUnSucH1=["Leider", "Sorry", "Arrepentido", "D&eacute;sol&eacute;", "Dispiacente", "Maalesef"];
var popupFindOutPlayUnSucH3=["Sie konnten nicht erfolgreich abzuschlie&szlig;en.", "You could not complete succesfully.", "No se pudo completar con &eacute;xito.", "On ne pouvait pas terminer avec succ&eacute;s.", "Non &eacute; in grado di completare con successo.", "Ba&#351;ar&#305;yla tamamlayamad&#305;n&#305;z."];
var popupFindOutPlayUnSucSpan=["Ok", "Ok", "Aceptar", "D'accord", "Bene", "Tamam"];
$("#popupFindOutPlaySucH1").html(popupFindOutPlaySucH1[langID]);
$("#popupFindOutPlaySucH3").html(popupFindOutPlaySucH3[langID]);
$("#popupFindOutPlaySucSpan").html(popupFindOutPlaySucSpan[langID]);
$("#popupFindOutPlayUnSucH1").html(popupFindOutPlayUnSucH1[langID]);
$("#popupFindOutPlayUnSucH3").html(popupFindOutPlayUnSucH3[langID]);
$("#popupFindOutPlayUnSucSpan").html(popupFindOutPlayUnSucSpan[langID]);
}
function playFindOut(level, score){
$.mobile.changePage( $("#pageFindOutPlay") , { transition: "none"} );
if(score==0){
gameLevel=level;
gameLevelsConfig();
gameDifficulty=lastSelDif[gamePlayerID][1];
$('#playFindOutEq').removeClass("ui-disabled");
$('#playFindOutNotEq').removeClass("ui-disabled");
$('#playFindOutBig').removeClass("ui-disabled");
$('#playFindOutEqBig').removeClass("ui-disabled");
$('#playFindOutLess').removeClass("ui-disabled");
$('#playFindOutEqLess').removeClass("ui-disabled");
$("#pageFindOutPlaySlider").val(score.toString());
$("#pageFindOutPlaySlider").slider('refresh');
var time=120;
if(gameDifficulty==1) time=225;
if(gameDifficulty==2) time=300;
time=timeCal(time);
$("#pageFindOutPlayTimeSpan").html(time);
gameCountDown=self.setInterval(function(){
time--;
$("#pageFindOutPlayTimeSpan").html(time);
if(time<10){
$("#pageFindOutPlayTimeSpan").removeClass("time1");
$("#pageFindOutPlayTimeSpan").addClass("time2");
}
if(time<1){
clearInterval(gameCountDown);
playFindOutFinish();
}
},1000);
}
var iRand=Math.floor(Math.random()*gameDigit.length);
var result= [];
var result2;
result =creatEquation(iRand); 
result2=createResult(result[1]);
var eqSign=[];
var eqRes=[];
var point;
point=1;
if(gameDifficulty==0) point=5;
if(gameDifficulty==1) point=2;
eqRes[0]=point;
eqRes[1]=point;
eqRes[2]=point;
eqRes[3]=point;
eqRes[4]=point;
eqRes[5]=point;
if(result[1]==result2){
eqRes[1]=point*(-1);
eqRes[2]=point*(-1);
eqRes[4]=point*(-1);
}
if(result[1]>result2){
eqRes[0]=point*(-1);
eqRes[4]=point*(-1);
eqRes[5]=point*(-1);
}
if(result[1]<result2){
eqRes[0]=point*(-1);
eqRes[2]=point*(-1);
eqRes[3]=point*(-1);
}
result[0]='<table align="center" class="equationTable"><tr>'+pointToComma(result[0])+'<td> ? </td><td>'+pointToComma(result2)+'</td></tr></table>';
$("#playFindOutEq").attr("onClick","playFindOutCal('playFindOutEq', '"+eqRes[0]+"')");
$("#playFindOutNotEq").attr("onClick","playFindOutCal('playFindOutNotEq', '"+eqRes[1]+"')");
$("#playFindOutBig").attr("onClick","playFindOutCal('playFindOutBig', '"+eqRes[2]+"')");
$("#playFindOutEqBig").attr("onClick","playFindOutCal('playFindOutEqBig', '"+eqRes[3]+"')");
$("#playFindOutLess").attr("onClick","playFindOutCal('playFindOutLess', '"+eqRes[4]+"')");
$("#playFindOutEqLess").attr("onClick","playFindOutCal('playFindOutEqLess', '"+eqRes[5]+"')");
$("#pageFindOutPlayQuestion").html(result[0]);
var w=[];
var w2;
w[0]=$(window).width();
w[1]=$("#pageFindOutPlayQuestion").width();
w2=((((w[0]-w[1])/2)*100)/w[0]).toString();
if(w[1]<w[0]){
$("#pageFindOutPlayQuestion").css("left",w2+"%");
}
else{
$("#pageFindOutPlayQuestion").css("left","0px");
}
var h=[];
var h2;
h[0]=$(window).height();
h[1]=$("#pageFindOutPlayQuestion").height();
h2=((((h[0]-h[1])/2)*100)/h[0]).toString();
if(h[1]<h[0]){
$("#pageFindOutPlayQuestion").css("top",h2+"%");
}
else{
$("#pageFindOutPlayQuestion").css("top","0px");
}
}
function playFindOutCal(bSign, point){
$('#playFindOutEq').removeClass("ui-disabled");
$('#playFindOutNotEq').removeClass("ui-disabled");
$('#playFindOutBig').removeClass("ui-disabled");
$('#playFindOutEqBig').removeClass("ui-disabled");
$('#playFindOutLess').removeClass("ui-disabled");
$('#playFindOutEqLess').removeClass("ui-disabled");
$('#'+bSign).addClass("ui-disabled");
var points;
points=Number($("#pageFindOutPlaySlider").val());
point=Number(point);
if(point<0){
if(gameDifficulty==1) point=point*2;
if(gameDifficulty==2) point=point*3;
}
points=points+Number(point);
if(points<0) points=0;
if(points>100) points=100;
$("#pageFindOutPlaySlider").val(points.toString());
$("#pageFindOutPlaySlider").slider('refresh');
if(points>=100){
clearInterval(gameCountDown);
if(pLevels[gamePlayerID][1][gameDifficulty]==gameLevel){
changeLevel(1, gameDifficulty, (pLevels[gamePlayerID][1][gameDifficulty]*1+1));
}
$( "#popupFindOutPlaySuc" ).popup( "open" );
}
else{
playFindOut();
}
}
function playFindOutFinish(){
var points, gameDifficulty, scoreForLevelUp;
points=Number($("#pageFindOutPlaySlider").val());
if(points>=100){
if(pLevels[gamePlayerID][1][gameDifficulty]==gameLevel){
changeLevel(1, gameDifficulty, (pLevels[gamePlayerID][1][gameDifficulty]*1+1));
}
$("#popupFindOutPlaySuc").popup("open");
}
else{
clearInterval(gameCountDown);
$("#popupFindOutPlayUnSuc").popup("open");
}
}
$("#pageMathrisLevel").live("pagebeforeshow", function(){
window.clearInterval(mathrisSetInt);
pageMathrisLevelLanguageChange();
gamesModesLevels(2, "Mathris");
});
function pageMathrisLevelLanguageChange(){
var langID=1;
langID=findlangID();
var spanEasyMathris=["Leicht", "Easy", "F&aacute;cil", "Facile", "Facile", "Kolay"];
var spanModerateMathris=["Moderieren", "Moderate", "Moderada", "Mod&eacute;r&eacute;", "Moderato", "Normal"];
var spanHardMathris=["Schwer", "Hard", "Difficile", "Dur", "Difficile", "Zor"];
$("#spanEasyMathris").html(spanEasyMathris[langID]);
$("#spanModerateMathris").html(spanModerateMathris[langID]);
$("#spanHardMathris").html(spanHardMathris[langID]);
};
$("#pageMathrisPlay").live("pagebeforeshow", function() {
pageMathrisPlayLanguageChange();
});
function pageMathrisPlayLanguageChange(){
var langID=1;
langID=findlangID();
var popupMathrisPlaySucH1=["Gl&#220;ckw&#220;nsche", "Congratulations", "Congratulaciones", "F&eacute;licitations", "Congratulazioni", "Tebrikler"];
var popupMathrisPlaySucH3=["Sie wurde erfolgreich abgeschlossen.", "You completed successfuly.", "Ha completado con &eacute;xito.", "Vous avez termin&eacute; avec succ&eacute;s.", "Hai completato con successo.", "Ba&#351;ar&#305;yla tamamlad&#305;n&#305;z."];
var popupMathrisPlaySucSpan=["Ok", "Ok", "Aceptar", "D'accord", "Bene", "Tamam"];
var popupMathrisPlayUnSucH1=["Leider", "Sorry", "Arrepentido", "D&eacute;sol&eacute;", "Dispiacente", "Maalesef"];
var popupMathrisPlayUnSucH3=["Sie konnten nicht erfolgreich abzuschlie&szlig;en.", "You could not complete succesfully.", "No se pudo completar con &eacute;xito.", "On ne pouvait pas terminer avec succ&eacute;s.", "Non &eacute; in grado di completare con successo.", "Ba&#351;ar&#305;yla tamamlayamad&#305;n&#305;z."];
var popupMathrisPlayUnSucSpan=["Ok", "Ok", "Aceptar", "D'accord", "Bene", "Tamam"];
$("#popupMathrisPlaySucH1").html(popupMathrisPlaySucH1[langID]);
$("#popupMathrisPlaySucH3").html(popupMathrisPlaySucH3[langID]);
$("#popupMathrisPlaySucSpan").html(popupMathrisPlaySucSpan[langID]);
$("#popupMathrisPlayUnSucH1").html(popupMathrisPlayUnSucH1[langID]);
$("#popupMathrisPlayUnSucH3").html(popupMathrisPlayUnSucH3[langID]);
$("#popupMathrisPlayUnSucSpan").html(popupMathrisPlayUnSucSpan[langID]);
}
var mathrisSetInt;
var mathrisPlayOk=1;
function playMathris(level,score){
mathrisPlayOk=1;
$.mobile.changePage( $("#pageMathrisPlay") , { transition: "none"} );
gameLevel=level;
$("#pageMathrisPlaySlider").val(score.toString());
$("#pageMathrisPlaySlider").slider('refresh');
$("#pageMathrisPlayQuestions").html("");
gameLevelsConfig();
gameDifficulty=lastSelDif[gamePlayerID][2];
var moveTime=500;
var moveStep=5;
var qGap=2;
if(gameDifficulty==1) moveTime=450;
if(gameDifficulty==2) moveTime=400;
time=timeCal(moveTime);
if (mathrisPlayOk==1){
playMathrisNewQuestion(qGap);
mathrisSetInt=setInterval(function (){mathrisQuestionMove(qGap, moveStep)},moveTime);
}
}
function playMathrisNewQuestion(qGap){
var qID;
var qNo=[];
if($("#pageMathrisPlayQuestions").children().length>0){
qID=$("#pageMathrisPlayQuestions div:last-child").attr("id");
qNo=qID.split("pageMathrisPlayQuestion");
iQuestion=Number(qNo[1])+1;
}
else{
qNo[1]=1;
iQuestion=0;
$("#pageMathrisPlayQuestions").html("");
}
var iRand=Math.floor(Math.random()*gameDigit.length);
var result= [];
var result2;
var result3;
result =creatEquation(iRand); 
result2=createResult(result[1]);
var eqSign=[];
var eqRes;
var point;
point=1;
if(gameDifficulty==0) point=5;
if(gameDifficulty==1) point=2;
eqSign[0]=Math.floor(Math.random()*6);
eqSign[0]=0;
if(eqSign[0]==0){
eqSign[1]="=";
eqRes=(-1)*point;
if(result[1]==result2) eqRes=point;
}
else if(eqSign[0]==1){
eqSign[1]="&ne;";
eqRes=(-1)*point;
if(result[1]!=result2) eqRes=point;
}
else if(eqSign[0]==2){
eqSign[1]=">";
eqRes=(-1)*point;
if(result[1]>result2) eqRes=point;
}
else if(eqSign[0]==3){
eqSign[1]="&ge;";
eqRes=(-1)*point;
if(result[1]>=result2) eqRes=point;
}
else if(eqSign[0]==4){
eqSign[1]="<";
eqRes=(-1)*point;
if(result[1]<result2) eqRes=point;
}
else if(eqSign[0]==5){
eqSign[1]="&le;";
eqRes=(-1)*point;
if(result[1]<=result2) eqRes=point;
}
result[0]='<div id="pageMathrisPlayQuestion'+iQuestion+'" class="ui-bar ui-bar-d pageMathrisQuestion ui-bar2 moving shadow" style="position:absolute; width:100%;"><table align="center" border="0"><tbody><tr><td><span id="id'+iQuestion+'"></span><img src="images/delete.png" onclick="playMathrisCal(\''+iQuestion+'\',\''+(eqRes*(-1))+'\',\''+gameLevel+'\')"></td><td><table align="center" border="0"><tbody><tr>'+pointToComma(result[0])+'<td>'+eqSign[1]+'</td><td>'+pointToComma(result2)+'</td></tr></tbody></table></td><td align="right"><img src="images/check.png" onclick="playMathrisCal(\''+iQuestion+'\',\''+eqRes+'\',\''+gameLevel+'\')"></td></tr></tbody></table></div>';
result3=$("#pageMathrisPlayQuestions").html()+result[0];
$("#pageMathrisPlayQuestions").html(result3);
mathrisQControl();
var qLen=$("#pageMathrisPlayQuestions").children().length;
if(qLen>1){
var t0,t1, h1;
t0=$("#pageMathrisPlayQuestions div:nth-child("+(qLen-1)+")").offset().top;
t1=$("#pageMathrisPlayQuestions div:nth-child("+qLen+")").offset().top;
h1=$("#pageMathrisPlayQuestions div:nth-child("+qLen+")").outerHeight();
if((t0-h1-qGap)<t1){
mathrisPlayOk=0;
window.clearInterval(mathrisSetInt);
var qLen=$("#pageMathrisPlayQuestions").children().length;	
for(var i=qLen;i>0;i--){
$("#pageMathrisPlayQuestions div:nth-child("+i+")").addClass("ui-disabled");
}
$("#popupMathrisPlayUnSuc").popup("open");
}
}
}
function qMNew(qGap){
var qMLen;
qMLen=$("#pageMathrisPlayQuestions").children(".moving").length;
if(qMLen==0 && mathrisPlayOk==1){
playMathrisNewQuestion(qGap);
}
}
function mathrisQuestionMove(qGap, moveStep){
var t0,t1, h1;
var qLen=$("#pageMathrisPlayQuestions").children().length;	
t0=$("#pageMathrisPlayQuestions").outerHeight()+$("#pageMathrisPlayQuestions").offset().top;
for(var i=1;i<qLen+1;i++){
h1=$("#pageMathrisPlayQuestions div:nth-child("+i+")").outerHeight();
t1=$("#pageMathrisPlayQuestions div:nth-child("+i+")").offset().top
if(i>1) t0=$("#pageMathrisPlayQuestions div:nth-child("+(i-1)+")").offset().top;
if((t0-qGap)>(t1+moveStep+h1)){
t1=t1+moveStep;
$("#pageMathrisPlayQuestions div:nth-child("+i+")").css("top", t1+"px");
$("#pageMathrisPlayQuestions div:nth-child("+i+")").removeClass("moving");
$("#pageMathrisPlayQuestions div:nth-child("+i+")").addClass("moving");
}
else{
$("#pageMathrisPlayQuestions div:nth-child("+i+")").css( "top", (t0-qGap-h1).toString+"px"  );
$("#pageMathrisPlayQuestions div:nth-child("+i+")").removeClass("moving");
if(i==qLen) qMNew(qGap);
}
}
}
function playMathrisCal(qNum, point, level){
if(Number(point)<=0){
$('#pageMathrisPlayQuestion'+qNum).addClass("ui-disabled");
$('#pageMathrisPlayQuestion'+qNum).addClass("wrong");
qMNew(level);
}
else{
$("#pageMathrisPlayQuestion"+qNum).remove();
qMNew(level);
}
var points;
points=Number($("#pageMathrisPlaySlider").val());
point=Number(point);
if(point<0){
if(gameDifficulty==1) point=point*2;
if(gameDifficulty==2) point=point*3;
}
points=points+Number(point);
if(points<0) points=0;
if(points>100) points=100;
$("#pageMathrisPlaySlider").val(points.toString());
$("#pageMathrisPlaySlider").slider('refresh');
mathrisQControl();
if(points>=100){
mathrisPlayOk=0;
window.clearInterval(mathrisSetInt);
if(pLevels[gamePlayerID][2][gameDifficulty]==gameLevel){
changeLevel(2, gameDifficulty, (pLevels[gamePlayerID][2][gameDifficulty]*1+1));
}
$("#popupMathrisPlaySuc").popup("open");
}
}
function mathrisQControl(){
var qLen=$("#pageMathrisPlayQuestions").children().length;	
var i2=0;
for(var i=qLen;i>0;i--){
if($("#pageMathrisPlayQuestions div:nth-child("+i+")").attr("class").indexOf("wrong")<1 && i2<2){
$("#pageMathrisPlayQuestions div:nth-child("+i+")").removeClass("ui-disabled");
i2++;
}
else{
$("#pageMathrisPlayQuestions div:nth-child("+i+")").removeClass("ui-disabled");
$("#pageMathrisPlayQuestions div:nth-child("+i+")").addClass("ui-disabled");
}
}
}
$("#pageMathrixLevel").live("pagebeforeshow", function(){
clearInterval(mathrixSetInt);
pageMathrixLevelLanguageChange();
gamesModesLevels(3, "Mathrix");
});
function pageMathrixLevelLanguageChange(){
var langID=1;
langID=findlangID();
var spanEasyMathrix=["Leicht", "Easy", "F&aacute;cil", "Facile", "Facile", "Kolay"];
var spanModerateMathrix=["Moderieren", "Moderate", "Moderada", "Mod&eacute;r&eacute;", "Moderato", "Normal"];
var spanHardMathrix=["Schwer", "Hard", "Difficile", "Dur", "Difficile", "Zor"];
$("#spanEasyMathrix").html(spanEasyMathrix[langID]);
$("#spanModerateMathrix").html(spanModerateMathrix[langID]);
$("#spanHardMathrix").html(spanHardMathrix[langID]);
};
var mathrixSetInt;
$("#pageMathrixPlay").live("pagebeforeshow", function(){
pageMathrixPlayLanguageChange();
});
function pageMathrixPlayLanguageChange(){
var langID=1;
langID=findlangID();
var popupMathrixPlaySucH1=["Gl&#220;ckw&#220;nsche", "Congratulations", "Congratulaciones", "F&eacute;licitations", "Congratulazioni", "Tebrikler"];
var popupMathrixPlaySucH3=["Sie wurde erfolgreich abgeschlossen.", "You completed successfuly.", "Ha completado con &eacute;xito.", "Vous avez termin&eacute; avec succ&eacute;s.", "Hai completato con successo.", "Ba&#351;ar&#305;yla tamamlad&#305;n&#305;z."];
var popupMathrixPlaySucSpan=["Ok", "Ok", "Aceptar", "D'accord", "Bene", "Tamam"];
var popupMathrixPlayUnSucH1=["Leider", "Sorry", "Arrepentido", "D&eacute;sol&eacute;", "Dispiacente", "Maalesef"];
var popupMathrixPlayUnSucH3=["Sie konnten nicht erfolgreich abzuschlie&szlig;en.", "You could not complete succesfully.", "No se pudo completar con &eacute;xito.", "On ne pouvait pas terminer avec succ&eacute;s.", "Non &eacute; in grado di completare con successo.", "Ba&#351;ar&#305;yla tamamlayamad&#305;n&#305;z."];
var popupMathrixPlayUnSucSpan=["Ok", "Ok", "Aceptar", "D'accord", "Bene", "Tamam"];
$("#popupMathrixPlaySucH1").html(popupMathrixPlaySucH1[langID]);
$("#popupMathrixPlaySucH3").html(popupMathrixPlaySucH3[langID]);
$("#popupMathrixPlaySucSpan").html(popupMathrixPlaySucSpan[langID]);
$("#popupMathrixPlayUnSucH1").html(popupMathrixPlayUnSucH1[langID]);
$("#popupMathrixPlayUnSucH3").html(popupMathrixPlayUnSucH3[langID]);
$("#popupMathrixPlayUnSucSpan").html(popupMathrixPlayUnSucSpan[langID]);
}
function playMathrix(level,score){
clearInterval(mathrixSetInt);
$.mobile.changePage( $("#pageMathrixPlay") , { transition: "none"} );
if(score==0){
gameLevel=level;
$("#pageMathrixPlaySlider").val(score.toString());
$("#pageMathrixPlaySlider").slider('refresh');
}
gameLevelsConfig();
gameDifficulty=lastSelDif[gamePlayerID][3];
var iRand=Math.floor(Math.random()*gameDigit.length);
var result= [];
var result2;
var result3 ="";
var eqSign=[];
var eqRes;
var point;
var totalQNum;
var sSucc;
point=1;
totalQNum=20;
sSucc=90;
if(gameDifficulty==0){
point=5;
totalQNum=20;
sSucc=50;
}
if(gameDifficulty==1){
point=2;
totalQNum=50;
qTime=1000;
sSucc=75;
}
for(iQuestion=0;iQuestion<totalQNum;iQuestion++){
result =creatEquation(iRand); 
result2=createResult(result[1]);
eqSign[0]=Math.floor(Math.random()*6);
eqSign[0]=0;
if(eqSign[0]==0){
eqSign[1]="=";
eqRes=(-1)*point;
if(result[1]==result2) eqRes=point;
}
else if(eqSign[0]==1){
eqSign[1]="&ne;";
eqRes=(-1)*point;
if(result[1]!=result2) eqRes=point;
}
else if(eqSign[0]==2){
eqSign[1]=">";
eqRes=(-1)*point;
if(result[1]>result2) eqRes=point;
}
else if(eqSign[0]==3){
eqSign[1]="&ge;";
eqRes=(-1)*point;
if(result[1]>=result2) eqRes=point;
}
else if(eqSign[0]==4){
eqSign[1]="<";
eqRes=(-1)*point;
if(result[1]<result2) eqRes=point;
}
else if(eqSign[0]==5){
eqSign[1]="&le;";
eqRes=(-1)*point;
if(result[1]<=result2) eqRes=point;
}
result[0]='<div id="pageMatrixPlayQuestion'+iQuestion+'" class="ui-bar ui-bar-d ui-corner-all pageMathrixQuestion ui-bar2 shadow" style="margin-top:5px;"><table width="100%" align="center" border="0"><tbody><tr><td><img src="images/delete.png" onclick="playMathrixCal(\''+iQuestion+'\',\''+(eqRes*(-1))+'\')"></td><td><table width="" align="center" border="0"><tbody><tr>'+pointToComma(result[0])+'<td>'+eqSign[1]+'</td><td>'+pointToComma(result2)+'</td></tr></tbody></table></td><td align="right"><img src="images/check.png" onclick="playMathrixCal(\''+iQuestion+'\',\''+eqRes+'\')"></td></tr></tbody></table></div>';
result3=result3+result[0];
}
$("#pageMathrixPlayQuestions").html(result3);
var h;
var h2;
var h3;
h=$("#pageMathrixPlayQuestions").height();
$("#pageMathrixPlayQuestions").css("top",h*(-1)+"px");
var moveTime=500;
var moveStep=5;
if(gameDifficulty==1) moveTime=450;
if(gameDifficulty==2) moveTime=400;
time=timeCal(moveTime);
mathrixSetInt=setInterval(function (){matrixQuestionsMove(moveStep)},moveTime);
}
function matrixQuestionsMove(moveStep){
var h, h2, t, t2;
h=$("#pageMathrixPlayQuestionsView").height();
t2=$("#pageMathrixPlayQuestions").offset().top;
t=$("#pageMathrixPlayQuestionsView").offset().top;
if(t2<t+h){
t2=t2+moveStep;
$("#pageMathrixPlayQuestions").offset({ top: t2});
}
else{
matrixControl("moveOut");
}
}
function matrixControl(moveOut){
var n, n2, points, gameDifficulty;
n=$("#pageMathrixPlayQuestions").children(".ui-bar").length;
n2=$("#pageMathrixPlayQuestions").children(".ui-disabled").length;
points=Number($("#pageMathrixPlaySlider").val());
gameDifficulty=lastSelDif[gamePlayerID][3];
var sSucc;
sSucc=90;
if(gameDifficulty==0) sSucc=50;
if(gameDifficulty==1) sSucc=75;
if(n<=n2 && points<sSucc){
clearInterval(mathrixSetInt);
$("#popupMathrixPlayUnSuc").popup("open");
}
else if(moveOut!="" && points<sSucc){
clearInterval(mathrixSetInt);
$("#popupMathrixPlayUnSuc").popup("open");
}
else if(points>=sSucc){
clearInterval(mathrixSetInt);
$("#popupMathrixPlaySuc").popup("open");
if(pLevels[gamePlayerID][3][gameDifficulty]==gameLevel){
changeLevel(3, gameDifficulty, (pLevels[gamePlayerID][3][gameDifficulty]*1+1));
}
}
}
function playMathrixCal(qNum, point){
$('#pageMatrixPlayQuestion'+qNum).addClass("ui-disabled");
var points;
points=Number($("#pageMathrixPlaySlider").val());
point=Number(point);
if(point<0){
if(gameDifficulty==1) point=point*2;
if(gameDifficulty==2) point=point*3;
}
points=points+Number(point);
if(points<0) points=0;
if(points>100) points=100;
$("#pageMathrixPlaySlider").val(points.toString());
$("#pageMathrixPlaySlider").slider('refresh');
matrixControl("");
}
$("#pageShootOutLevel").live("pagebeforeshow", function(e, data){
clearInterval(gameCountDown);
pageShootOutLevelLanguageChange();
gamesModesLevels(4, "ShootOut");
});
function pageShootOutLevelLanguageChange(){
var langID=1;
langID=findlangID();
var spanEasyShootOut=["Leicht", "Easy", "F&aacute;cil", "Facile", "Facile", "Kolay"];
var spanModerateShootOut=["Moderieren", "Moderate", "Moderada", "Mod&eacute;r&eacute;", "Moderato", "Normal"];
var spanHardShootOut=["Schwer", "Hard", "Difficile", "Dur", "Difficile", "Zor"];
$("#spanEasyShootOut").html(spanEasyShootOut[langID]);
$("#spanModerateShootOut").html(spanModerateShootOut[langID]);
$("#spanHardShootOut").html(spanHardShootOut[langID]);
};
function playShootOutRearrange(){
var w0, w1, w2, w3, w4, w5, h0, h1, h2, t1, t2;
$("#pageShootOutPlayQuestions").find(".ui-bar").each(function(){
w0=$(window).width();
w1=$("#pageShootOutPlayQuestions").width();
w2=$(this).width();
w3=w1*100/w0;
w4=w2*100/w0
w2=($("#pageShootOutPlayQuestions").offset().left+(Math.random()*(100-((w1*100)/w0)))).toString();
w5=100-w3+Math.random()*(100-2*(100-w3)-w4);
if(w2<w1){
$(this).css("left",w5+"%");
}
else{
$(this).css("left","0px");
}
h0=$(window).height();
t1=$("#pageShootOutPlayQuestions").offset().top;
h1=h0-t1-h0*3/100;
h2=$(this).height();
t2=(h0/100)*(t1*100/h0+Math.random()*(100-t1*100/h0-3-h2*100/h0));
$("#pageShootOutPlayQuestions").css("height",h1+"px");
$(this).css("top",t2+"px");
});
$("#pageShootOutPlayQuestions").trigger("create");
}
function playShootOut(level,score){
gameLevel=level;
$.mobile.changePage( $("#pageShootOutPlay") , { transition: "none"} );
}
$("#pageShootOutPlay").live("pageshow", function(event, data){
playShootOutRearrange();
});
$("#pageShootOutPlay").live("pagebeforeshow", function(event, data){
pageShootOutPlayLanguageChange();
$("#pageShootOutPlayQuestions").empty();
$("#pageShootOutPlaySlider").val("0");
$("#pageShootOutPlaySlider").slider('refresh');
$("#pageShootOutPlayTimeSpan").removeClass("time1");
$("#pageShootOutPlayTimeSpan").removeClass("time2");
$("#pageShootOutPlayTimeSpan").addClass("time1");
gameLevelsConfig();
gameDifficulty=lastSelDif[gamePlayerID][4];
var iRand=Math.floor(Math.random()*gameDigit.length);
var result=[];
var result2;
var result3 ="";
var qCount;
qCount=100;
if(gameDifficulty==0) qCount=20;
if(gameDifficulty==1) qCount=50;
var point;
point=1;
if(gameDifficulty==0) point=5;
if(gameDifficulty==1) point=2;
for(iQuestion=0;iQuestion<qCount;iQuestion++){
result =creatEquation(iRand); 
result2=createResult(result[1]);
var eqSign=[];
var eqRes;
eqSign[0]=Math.floor(Math.random()*6);
eqSign[0]=0;
if(eqSign[0]==0){
eqSign[1]="=";
eqRes=(-1)*point;
if(result[1]==result2) eqRes=point;
}
else if(eqSign[0]==1){
eqSign[1]="&ne;";
eqRes=(-1)*point;
if(result[1]!=result2) eqRes=point;
}
else if(eqSign[0]==2){
eqSign[1]=">";
eqRes=(-1)*point;
if(result[1]>result2) eqRes=point;
}
else if(eqSign[0]==3){
eqSign[1]="&ge;";
eqRes=(-1)*point;
if(result[1]>=result2) eqRes=point;
}
else if(eqSign[0]==4){
eqSign[1]="<";
eqRes=(-1)*point;
if(result[1]<result2) eqRes=point;
}
else if(eqSign[0]==5){
eqSign[1]="&le;";
eqRes=(-1)*point;
if(result[1]<=result2) eqRes=point;
}
result[0]='<div id="pageShootOutPlayQuestion'+iQuestion+'" class="ui-bar ui-bar-d ui-corner-all pageShootOutQuestion ui-bar2 shadow" style="position:absolute; clear:none; float:none; width:auto;"><table align="center" border="0"><tbody><tr><td><span id="id'+iQuestion+'"></span><img src="images/delete.png" onclick="playShootOutCal(\''+iQuestion+'\',\''+(eqRes*(-1))+'\')"></td><td><table align="center" border="0"><tbody><tr>'+pointToComma(result[0])+'<td>'+eqSign[1]+'</td><td>'+pointToComma(result2)+'</td></tr></tbody></table></td><td align="right"><img src="images/check.png" onclick="playShootOutCal(\''+iQuestion+'\',\''+eqRes+'\')"></td></tr></tbody></table></div>';
result3=$("#pageShootOutPlayQuestions").html()+result[0];
$("#pageShootOutPlayQuestions").append(result[0]).trigger("create");
}
var time=120;
if(gameDifficulty==1) time=225;
if(gameDifficulty==2) time=300;
time=timeCal(time);
$("#pageShootOutPlayTimeSpan").html(time);
gameCountDown=self.setInterval(function(){
time--;
$("#pageShootOutPlayTimeSpan").html(time);
if(time<10){
$("#pageShootOutPlayTimeSpan").removeClass("time1");
$("#pageShootOutPlayTimeSpan").addClass("time2");
}
if(time<1){
clearInterval(gameCountDown);
playShootOutFinish();
}
},1000);
});
function pageShootOutPlayLanguageChange(){
var langID=1;
langID=findlangID();
var popupShootOutPlaySucH1=["Gl&#220;ckw&#220;nsche", "Congratulations", "Congratulaciones", "F&eacute;licitations", "Congratulazioni", "Tebrikler"];
var popupShootOutPlaySucH3=["Sie wurde erfolgreich abgeschlossen.", "You completed successfuly.", "Ha completado con &eacute;xito.", "Vous avez termin&eacute; avec succ&eacute;s.", "Hai completato con successo.", "Ba&#351;ar&#305;yla tamamlad&#305;n&#305;z."];
var popupShootOutPlaySucSpan=["Ok", "Ok", "Aceptar", "D'accord", "Bene", "Tamam"];
var popupShootOutPlayUnSucH1=["Leider", "Sorry", "Arrepentido", "D&eacute;sol&eacute;", "Dispiacente", "Maalesef"];
var popupShootOutPlayUnSucH3=["Sie konnten nicht erfolgreich abzuschlie&szlig;en.", "You could not complete succesfully.", "No se pudo completar con &eacute;xito.", "On ne pouvait pas terminer avec succ&eacute;s.", "Non &eacute; in grado di completare con successo.", "Ba&#351;ar&#305;yla tamamlayamad&#305;n&#305;z."];
var popupShootOutPlayUnSucSpan=["Ok", "Ok", "Aceptar", "D'accord", "Bene", "Tamam"];
$("#popupShootOutPlaySucH1").html(popupShootOutPlaySucH1[langID]);
$("#popupShootOutPlaySucH3").html(popupShootOutPlaySucH3[langID]);
$("#popupShootOutPlaySucSpan").html(popupShootOutPlaySucSpan[langID]);
$("#popupShootOutPlayUnSucH1").html(popupShootOutPlayUnSucH1[langID]);
$("#popupShootOutPlayUnSucH3").html(popupShootOutPlayUnSucH3[langID]);
$("#popupShootOutPlayUnSucSpan").html(popupShootOutPlayUnSucSpan[langID]);
}
function playShootOutCal(qNum, point){
$('#pageShootOutPlayQuestion'+qNum).addClass("ui-disabled");
$("#pageShootOutPlayQuestion"+qNum).css("visibility","hidden");
var points;
points=Number($("#pageShootOutPlaySlider").val());
point=Number(point);
if(point<0){
if(gameDifficulty==1) point=point*2;
if(gameDifficulty==2) point=point*3;
}
points=points+Number(point);
if(points<0) points=0;
if(points>100) points=100;
$("#pageShootOutPlaySlider").val(points.toString());
$("#pageShootOutPlaySlider").slider('refresh');
var n=0;
var n2=0;
$('#pageShootOutPlayQuestions').find(".ui-bar").each(function(){
n++;
})
$('#pageShootOutPlayQuestions').find(".ui-disabled").each(function(){
n2++;
})
if(n2>=n){
playShootOutFinish();
}
}
function playShootOutFinish(){
var points, gameDifficulty, scoreForLevelUp;
points=Number($("#pageShootOutPlaySlider").val());
gameDifficulty=lastSelDif[gamePlayerID][4];
scoreForLevelUp=90;		//gameDifficulty=2
if (gameDifficulty==0) scoreForLevelUp=50;
if (gameDifficulty==1) scoreForLevelUp=75;
if(points>=scoreForLevelUp){
if(pLevels[gamePlayerID][4][gameDifficulty]==gameLevel){
changeLevel(4, gameDifficulty, (pLevels[gamePlayerID][4][gameDifficulty]*1+1));
}
$("#popupShootOutPlaySuc").popup("open");
clearInterval(gameCountDown);
}
else{
$("#popupShootOutPlayUnSuc").popup("open");
clearInterval(gameCountDown);
}
}
function gamesModesLevels(mode1, mode2){
var maxLevel;
if(mode1==1){
maxLevel=23;
}
else if(mode1==2){
maxLevel=23;
}
else if(mode1==3){
maxLevel=23;
}
else if(mode1==4){
maxLevel=23;
}
$("#easy"+mode2).attr("checked",false).checkboxradio('enable').checkboxradio("refresh");
$("#moderate"+mode2).attr("checked",false).checkboxradio('disable').checkboxradio("refresh");
$("#hard"+mode2).attr("checked",false).checkboxradio('disable').checkboxradio("refresh");
if(pLevels[gamePlayerID][1][1]>0){
$("#moderate"+mode2).checkboxradio('enable').checkboxradio("refresh");	
}
if(pLevels[gamePlayerID][1][2]>0){
$("#hard"+mode2).checkboxradio('enable').checkboxradio("refresh");
}
var level;
var dif;
dif=lastSelDif[gamePlayerID][mode1];
level=pLevels[gamePlayerID][mode1][dif]*1;
if(pLevels[gamePlayerID][mode1][1]>0) $("#moderate"+mode2).checkboxradio('enable').checkboxradio("refresh");
if(pLevels[gamePlayerID][mode1][2]>0) $("#hard"+mode2).checkboxradio('enable').checkboxradio("refresh");
if(dif==0){
$("#easy"+mode2).attr("checked",true).checkboxradio("refresh");
}
else if(dif==1){
$("#moderate"+mode2).attr("checked",true).checkboxradio("refresh");
}
else{	//dif=2
$("#hard"+mode2).attr("checked",true).checkboxradio("refresh");
}
var levelHtml="";
levelHtml=levelHtml+'<div class="ui-grid-b"><div class="ui-block-a"></div><div class="ui-block-b">';
if (level>=maxLevel){
level=maxLevel;
}
else{
levelHtml=levelHtml+'<a class="ui-btn ui-btn-up-d ui-shadow ui-btn-corner-all ui-disabled" data-wrapperels="span" data-iconshadow="true" data-shadow="true" data-corners="true" href="#" onclick="play'+mode2+'('+(level*1+1)+',0)" data-role="button" data-theme="d"><span class="ui-btn-inner ui-btn-corner-all"><span class="ui-btn-text">'+(level*1+1)+'</span></span></a>';
}
for (i=level;i>0;i--){
levelHtml=levelHtml+'<a class="ui-btn ui-shadow ui-btn-corner-all ui-btn-up-d"  data-wrapperels="span" data-iconshadow="true" data-shadow="true" data-corners="true" href="#" onclick="play'+mode2+'('+i+',0)" data-role="button" data-theme="d"><span class="ui-btn-inner ui-btn-corner-all"><span class="ui-btn-text">'+i+'</span></span></a>';
}
levelHtml=levelHtml+'</div><div class="ui-block-c"></div>';
$("#page"+mode2+"Levels").html(levelHtml);
}
function pageIntroLanguageChange(){
var langID=1;
langID=findlangID();
var intro1=["Dies<br>Ist<br>Nur<br>Ein<br>Anfang", "This<br>Is<br>Just<br>A<br>Beginning", "Esto<br>Es<br>S&oacute;lo<br>El<br>Comienzo", "Ce<br>N'est<br>Qu'un<br>D&eacute;but", "Questo<br>&Eacute;<br>Solo<br>Un<br>Inizio", "Bu<br>Sadece<br>Bir<br>Ba&#351;lang&#305;&#231;"];
var intro2=["Der<br>Tag<br>Wird<br>Kommen", "The<br>Day<br>Is<br>Coming", "Se<br>Acerca<br>El<br>D&iacute;a", "Le<br>Jour<br>Viendra", "Il<br>Giorno<br>Sta<br>Arrivando", "B&#252;y&#252;k<br>G&#252;n<br>Geliyor"];
var intro3=["Bereiten<br>Sie<br>Sich", "Prepare<br>Yourself", "Prepararse", "Pr&eacute;parez-vous", "Preparatevi", "Haz&#305;rlan&#305;n"];
$("#intro1").html(intro1[langID]);
$("#intro2").html(intro2[langID]);
$("#intro3").html(intro3[langID]);
};
$("#pageIntro").live("pagebeforeshow", function(event, data){
$("#pageIntroContent").height($(window).outerHeight());
})
$("#pageIntro").live("pageshow", function(event, data){
setTimeout(function(){
$.mobile.changePage( $("#pagePlayers") , { transition: "none"} );
},3000);
});