/*
* tGame - Crazy Math code
* Fonksiyonlar, sayfalarin açilis sirasina göre dizilidir
*/






function closePageToPlayers(){
gamePlayerID=0;
$.mobile.changePage( $("#pagePlayers") , { transition: "slide"} );
}



function findlangID(){
var langID=1;
if(gameLang=="de"){	//Deutsch - Almanca
langID=0;
}
else if(gameLang=="es"){	//Espanol - Ispanyolca
langID=2;
}
else if(gameLang=="fr"){	//Français - Fransizca
langID=3;
}
else if(gameLang=="it"){	//Italiano - Italyanca
langID=4;
}
else if(gameLang=="tr"){	//Türkçe
langID=5;
}
return langID;
}





//Veritabanina kayit sirasinda kullanilacak sorunlu karakterleri önlemek için
//Inernetten buldum.
function mysql_real_escape_string (str) {
    return str.replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g, function (char) {
        switch (char) {
            case "\0":
                //return "\\0";
				return "";
            case "\x08":
                //return "\\b";
				return "";
            case "\x09":
                //return "\\t";
				return "";
            case "\x1a":
                //return "\\z";
				return "";
            case "\n":
                //return "\\n";
				return "";
            case "\r":
                //return "\\r";
				return "";
            case "\"":
            case "'":
            case "\\":
            case "%":
				return "";
                //return "\\"+char; // prepends a backslash to backslash, percent,
                                  // and double/single quotes
        }
    });
}


//Bir sayfaya ait olmayan kodlar baslangici
function gameLanguageChanged(){
pagePlayersLanguageChange();
}




function changeOpt(op1, op2){
//op1 opsiyon, 0:islem, 1:numara, 2:hane, 3:islem sayisi, 4:isaret
//op2 opsiyon, hangi opsiyonun seçili oldugu (opt1=0 için; toplama, çikarma, çarma, bölme gibi)

//alert("Eski lastSelFMOp = "+lastSelFMOp[gamePlayerID][i][i2]+" i="+i+" i2="+i2);
//alert("Yeni lastSelFMOp = "+opt1[i2]+" i="+i+" i2="+i2);
var m;
var opt1=[];	//geçici deger
var opt2=[[]];	//geçici deger
var optDB="";	//Veritabanina yazdirilacak veri

var dif;
dif=lastSelDif[gamePlayerID][0];	//Seçili zorluk derecesi
//alert("seçili dif= "+lastSelDif[gamePlayerID][0]);
//alert("seçili dif= "+dif);
if(op1==0){
m="fmoperation";

for(var i=0;i<3;i++){
for (var i2=0;i2<4;i2++){
	
opt1[i2]=lastSelFMOp[gamePlayerID][i][i2];
if(i2==op2 && dif==i){
opt1[i2]=(lastSelFMOp[gamePlayerID][i][i2]+1)%2;
}

if(optDB!="") optDB+"|";
optDB=optDB.toString()+opt1[i2].toString();
}

opt2[i]=[opt1[0],opt1[1],opt1[2],opt1[3]];
}

lastSelFMOp[gamePlayerID]=opt2;
//lastSelFMOp[gamePlayerID]=[[1,1,1,1],[1,0,0,0],[1,0,0,0]];
}
else if(op1==1){
m="fmnumbers";

for(var i=0;i<3;i++){
for (var i2=0;i2<5;i2++){
	
opt1[i2]=lastSelFMNum[gamePlayerID][i][i2];
if(i2==op2 && dif==i){
opt1[i2]=(lastSelFMNum[gamePlayerID][i][i2]+1)%2;
}

if(optDB!="") optDB+"|";
optDB=optDB.toString()+opt1[i2].toString();
}

opt2[i]=[opt1[0],opt1[1],opt1[2],opt1[3],opt1[4]];
}

lastSelFMNum[gamePlayerID]=opt2;
//lastSelFMNum[gamePlayerID]=[[1,1,1,1,1],[1,0,0,0,0],[1,0,0,0,0]];
}
else if(op1==2){
m="fmdigit";

for(var i=0;i<3;i++){
for (var i2=0;i2<5;i2++){
	
opt1[i2]=lastSelFMDig[gamePlayerID][i][i2];
if(i2==op2 && dif==i){
opt1[i2]=(lastSelFMDig[gamePlayerID][i][i2]+1)%2;
}

if(optDB!="") optDB+"|";
optDB=optDB.toString()+opt1[i2].toString();
}

opt2[i]=[opt1[0],opt1[1],opt1[2],opt1[3],opt1[4]];
}

lastSelFMDig[gamePlayerID]=opt2;
//lastSelFMDig[gamePlayerID]=[[1,1,1,1,1],[1,0,0,0,0],[1,0,0,0,0]];
}
else if(op1==3){
m="fmocount";

for(var i=0;i<3;i++){
for (var i2=0;i2<5;i2++){
	
opt1[i2]=lastSelFMOC[gamePlayerID][i][i2];
if(i2==op2 && dif==i){
opt1[i2]=(lastSelFMOC[gamePlayerID][i][i2]+1)%2;
}

if(optDB!="") optDB+"|";
optDB=optDB.toString()+opt1[i2].toString();
}

opt2[i]=[opt1[0],opt1[1],opt1[2],opt1[3],opt1[4]];
}

lastSelFMOC[gamePlayerID]=opt2;
//lastSelFMOC[gamePlayerID]=[[1,1,1,1,1],[1,0,0,0,0],[1,0,0,0,0]];
}
else if(op1==4){
m="fmsign";

for(var i=0;i<3;i++){
for (var i2=0;i2<6;i2++){
	
opt1[i2]=lastSelFMS[gamePlayerID][i][i2];
if(i2==op2 && dif==i){
opt1[i2]=(lastSelFMS[gamePlayerID][i][i2]+1)%2;
}

if(optDB!="") optDB+"|";
optDB=optDB.toString()+opt1[i2].toString();
}

opt2[i]=[opt1[0],opt1[1],opt1[2],opt1[3],opt1[4],opt1[5]];
}

lastSelFMS[gamePlayerID]=opt2;
//lastSelFMS[gamePlayerID]=[[1,1,1,1,1,1],[1,0,0,0,0,0],[1,0,0,0,0,0]];
}



if (dbOK==1) playerDBUpdate(m, optDB);	//Veritabanina kayit
//fmoperation, fmnumbers, fmdigit, fmocount, fmsign
//'1|0|0|0|0|0|0|0|0|0|0|0', '1|0|0|0|0|0|0|0|0|0|0|0|0|0|0', '1|0|0|0|0|0|0|0|0|0|0|0|0|0|0', '1|0|0|0|0|0|0|0|0|0|0|0|0|0|0', '1|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0'
}

function changeDifficulty(mode, selDif){

//lastSelDif[gamePlayerID]=[0,0,0,0,0];	//[1,0,0,0,0]	[2,0,0,0,0]
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

//alert("seçili dif= "+lastSelDif[gamePlayerID][mode]);
if (dbOK==1) playerDBUpdate(m, selDif);
//alert("m="+m+" seldif="+selDif);
}




function changeLevel(mode, selDif, level){
//mode: Hangi oyun modu oldugu	0:Free mode, 1:Find out ...
//selDif: Seçili oyun zorlugu	0:easy,	1:moderate, 2:hard
//level: geçilen seviye			0, 1, 2, 3, 4 ...

var m;	//m: veritabanindaki kayit adi
var v;	//Veritabanina yapilacak kayit	1|0|0 gibi

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
//alert("m="+m+" seldif="+selDif);
}








function createMul(iRand, iDig){
var digitMul=1;
//0-9, 10-99, 100-999, 1000-9999, 10000-99999 arasi rakkam üreten çarpan
for(i=0;i<gameDigit[iRand][iDig]+1;i++){
digitMul=digitMul*10;
}

return digitMul;
}


//Math.floor((Math.random()*10)+1);
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
}
else if (gameNumber[iRand][iNum]==1){	//Ondalik sayi
cNumber[0]=1;
cNumber[1]=(Math.random()*digitMul).toFixed(gameDigit[iRand][iDig]+1).toString();
}
else if (gameNumber[iRand][iNum]==2){	//Kesirli sayi
cNumber[0]=2;
cNumber[1]=Math.floor(Math.random()*digitMul).toString();
iDig=Math.floor(Math.random()*gameDigit[iRand].length);	
digitMul=createMul(iRand, iDig);
cNumber[2]=Math.floor(Math.random()*digitMul).toString();
}
else if (gameNumber[iRand][iNum]==3){	//Üslü sayi
cNumber[0]=3;
cNumber[1]=Math.floor(Math.random()*digitMul).toString();
iDig=Math.floor(Math.random()*gameDigit[iRand].length);	
digitMul=createMul(iRand, iDig);
cNumber[2]=Math.floor(Math.random()*digitMul).toString();
}
else if (gameNumber[iRand][iNum]==4){	//Köklü sayi
cNumber[0]=4;
cNumber[1]=Math.floor(Math.random()*digitMul).toString();
iDig=Math.floor(Math.random()*gameDigit[iRand].length);	
digitMul=createMul(iRand, iDig);
cNumber[2]=Math.floor(Math.random()*digitMul).toString();
}

return cNumber;
}


function creatEquation(iRand){
	
var result=[];	//0 = html kodu,	1 = kodda yazanin hesaplanan degeri
var result2=[];	//0 = html kodu,	1 = kodda yazanin hesaplanan degeri
var cNumber=[];	//Olusturulan sayi	//created numbers

//iRand ile Denklem olusturmakta kullanilacak seçeneklerin bulundugu yer belirlenecek
//var iRand=Math.floor(Math.random()*gameDigit.length);
//var eqCode, eqCode;	//Sayfada gösterilecek kod;

//Hangi hane sayisi kullanilacagi belirlenecek
var iOCount=Math.floor(Math.random()*gameOCount[iRand].length);	

cNumber=createNumber(iRand);
//alert("cem cNumber="+cNumber[0]+" "+cNumber[1]+" "+cNumber[2]);
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
//alert("cem result 1 ="+result[0]+" "+result[1]);
var iOper;	//Hangi islemin kullanilacagini belirlemede kullanilacak
//alert("gamOCount="+gameOCount[iRand][iOCount]);
for(i2=0;i2<gameOCount[iRand][iOCount]+1;i2++){

cNumber=createNumber(iRand);

iOper=Math.floor(Math.random()*gameOperation[iRand].length);	
//alert("cem op = "+iOper);
//alert("cem cNumber 2 ="+cNumber[0]+" "+cNumber[1]+" "+cNumber[2]);


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
var iDiff;	//Oynun zorluk derecesine göre, sonuca eklenecek veya çikarilacak deger
var iDiff2;	//Zonuca ekleme mi çikarma mi yapilacagini belirlemede kullanilacak deger
//var resultSet=[];	//sonuçlari fonksiyon disina çikarmakta kullanialacak degisken
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
//Zorluk hesabi buraya gelecek


if (result2.indexOf(".")>0){	//Sonuç ondalikli sayi ise
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
else{	//Sonuç tam sayi ise
//alert("cem2 = "+(result2.length-Math.floor(Math.random()*result2.length)));
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

//alert("sonuc = "+result);
//resultSet[0]=iDiff2;
//resultSet[1]=result;

return result;
}

//Bir sayfaya ait olmayan kodlar sonu






/* pageLang kodu baslangici */
function chooseLang(lang){
//Seçilen bayraga göre
//Oynun dili (hem js degiskeni, hem de veritabanindaki degeri) degistirilecek
//Sonra da pagePlayers sayfasina yönlendirilecek
alert("dil seçildi = "+lang);
//lang="en";	//Deneme amaçli, silinecek
gameLang=lang;

//gameLangChange();	//tarayicida çalismayi önler
//alert("sayfa degis"+gameLang);
//$("#langSelect").val(gameLang);

$("#langSelect").val(gameLang);
$("#langSelect").trigger("change");  //Bunun içinde gameLanguageChanged() çalistiriliyor

//$.mobile.changePage( $("#pagePlayers") , { transition: "slide"} );
}
/* pageLang kodu sonu */



/* pageGameSettings kodu baslangici */
function langChangeSelect() {

var lang;
lang=$("#langSelect").val();
alert(lang);
if(lang!=""){
gameLang=lang;

pageGameSettingsLanguageChange();
//gameLangChange();	//tarayicida çalismayi önler
//gameLanguageChanged();
}
//gameLangChange(lang);		//Tarayicida çalismayi önler

}


function pageGameSettingsLanguageChange(){

var langID=1; //gameLang=="en" Ingilizce //Hiç bir dil seçili degilse otomatik Ingilizce olacak
langID=findlangID();

var langLabelH=["Sprache", "Language", "Idioma", "Langue", "Lingua", "Dil"];
$("#langLabelH").text(langLabelH[langID]);

}
/* pageGameSettings kodu sonu */






/* pagePlayerRename kodu baslangici */


$("#pagePlayerRename").live('pagebeforeshow', function(event){
pageRenameLanguageChange();													   
$("#pagePlayerRenameContent").find("#pagePlayerRenameButton").attr("onclick","gamePlayerRenameDB("+gamePlayerID+");");
$("#pagePlayerRenameContent").find("#pagePlayerRenamePlayerName").html(pName[gamePlayerID]);
$("#pagePlayerRenameContent").find("#newname").val("");
});


function pageRenameLanguageChange(){

var langID=1; //gameLang=="en" Ingilizce //Hiç bir dil seçili degilse otomatik Ingilizce olacak
langID=findlangID();

var playerCancelSpan=["Kündigen", "Cancel", "Cancelar", "Annuler", "Annullare", "Vazge&ccedil;"];
var playerRenameSpan=["Umbenennen", "Rename", "Cambiar el Nombre", "Renommer", "Rinominare", "&#304;smi De&#287;i&#351;tir"];
var pagePlayerRenamePlayerH=["Umbenennen Spieler", "Rename Player", "Cambiar el Nombre de Jugador", "Renommer Joueur", "Renommer Joueur", "Oyuncu &#304;smini De&#287;i&#351;tir"];
var labelNewName=["Neuen Namen", "New Name", "Nuevo Nombre", "Nouveau Nom", "Nuovo Nome", "Yeni &#304;sim"];

$("#pagePlayerRenamePlayerH").html(pagePlayerRenamePlayerH[langID]);
$(".playerCancelSpan").html(playerCancelSpan[langID]);
$(".playerRenameSpan").html(playerRenameSpan[langID]);
$("#labelNewName").html(labelNewName[langID]);

}
/* pagePlayerRename kodu baslangici */



/* pagePlayerDelete kodu baslangici */
$("#pagePlayerDelete").live('pagebeforeshow', function(event){
pageDeleteLanguageChange();
$("#pagePlayerDeleteContent").find("#pagePlayerDeleteButton").attr("onclick","gamePlayerDeleteDB("+gamePlayerID+");");
$("#pagePlayerDeleteContent").find("#pagePlayerDeletePlayerName").html(pName[gamePlayerID]);
});

function pageDeleteLanguageChange(){

var langID=1; //gameLang=="en" Ingilizce //Hiç bir dil seçili degilse otomatik Ingilizce olacak
langID=findlangID();

var pagePlayerDeletePlayerH=["l&ouml;schen Spieler", "Delete Player", "Borrar Jugador", "Effacer Joueur", "Eliminare Giocatore", "Oyuncu Silme"];
var labelDelete=["Wollen Sie spieler löschen?", "Do you want to delete player?", "¿Quieres eliminar jugador", "Voulez-vous supprimer joueur?", "Vuoi eliminare giocatore?", "Oyuncuyu silmek istiyor musunuz?"];
var playerCancelSpan=["Kündigen", "Cancel", "Cancelar", "Annuler", "Annullare", "Vazge&ccedil;"];
var playerDeleteSpan=["L&ouml;schen", "Delete", "Borrar", "Effacer", "Cancellare", "Sil"]

$("#pagePlayerDeletePlayerH").html(pagePlayerDeletePlayerH[langID]);
$(".playerCancelSpan").html(playerCancelSpan[langID]);
$(".playerDeleteSpan").html(playerDeleteSpan[langID]);

}
/* pagePlayerDelete kodu sonu */


/* pagePlayerCreate kodu baslangici */
$("#pagePlayerDelete").live('pagebeforeshow', function(event){
pageCreateLanguageChange();
});


function pageCreateLanguageChange(){

var langID=1; //gameLang=="en" Ingilizce //Hiç bir dil seçili degilse otomatik Ingilizce olacak
langID=findlangID();

// diller 	[ 0=de, 1=en, 2=es, 3=fr, 4=it, 5=tr]
//["", "", "", "", "", ""]
var pagePlayerCreatePlayerH=["Spieler Erstellen", "Create Player", "crear jugador", "Cr&eacute;er Un Joueur", "Creare Un Giocatore", "Yeni Oyuncu Olustur"];
var labelName=["Name", "Name", "Nombre", "Nom", "Nome", "&#304;sim"];
var playerCancelSpan=["Kündigen", "Cancel", "Cancelar", "Annuler", "Annullare", "Vazge&ccedil;"];
var playerCreateSpan=["Schaffen", "Create", "Crear", "Cr&eacute;er", "Creare", "Olu&#351;tur"];

$("#pagePlayerCreatePlayerH").html(pagePlayerCreatePlayerH[langID]);
$("#labelName").text(labelName[langID]);
$(".playerCancelSpan").html(playerCancelSpan[langID]);
$(".playerCreateSpan").html(playerCreateSpan[langID]);

}
/* pagePlayerCreate kodu sonu */





/* pagePlayers kodu baslangici */


//pagePlayer sayfasinin dilini degistiren kod
function openPagePlayerRename(id){
gamePlayerID=id;
$.mobile.changePage( $("#pagePlayerRename") , { transition: "slide"} );
}

function openPagePlayerDelete(id){
gamePlayerID=id;
$.mobile.changePage( $("#pagePlayerDelete") , { transition: "slide"} );
}

function openPagePlayerCreate(){
$.mobile.changePage( $("#pagePlayerCreate") , { transition: "slide"} );
$("#pagePlayerCreateContent").find("#createPlayerName").val("");
}


function pagePlayersLanguageChange(){
//Dil degisimi ile sayfada yazilar degisecek
var langID=1; //gameLang=="en" Ingilizce //Hiç bir dil seçili degilse otomatik Ingilizce olacak
langID=findlangID();

/*var langLabel=$("#langLabel");
var playerDelSpan= $(".playerDelSpan");
var newPlayerH= $("#newPlayerH");
var playerNameLabel= $("#playerNameLabel");
var playerCreateSpan=$("#playerCreateSpan");
var playersH=$("#playersH");
var levelSpanFreemode=$("#levelSpanFreemode");
var levelSpanFindout=$("#levelSpanFindout");
var levelSpanMathris=$("#levelSpanMathris");
var levelSpanMathrix=$("#levelSpanMathrix");
var levelSpanShootout=$("#levelSpanShootout");*/



// diller 	[ 0=de, 1=en, 2=es, 3=fr, 4=it, 5=tr]
//["", "", "", "", "", ""]
var playersH=["Spieler :", "Players :", "Jugadores :", "Joueurs :", "Giocatori :", "Oyuncular :"];
var levelSpanMode=["Modus","Mode","Modo","Mode","Moda","Mod"];
var levelSpanDifE=["Leicht", "Easy", "F&aacute;cil", "Facile", "Facile", "Kolay"];
var levelSpanDifM=["Moderieren", "Moderate", "Moderada", "Mod&eacute;r&eacute;e", "Moderata", "Normal"];
var levelSpanDifH=["Schwer", "Hard", "Dif&iacute;cil", "Difficile", "", "Zor"];
var playerRenameSpan=["Umbenennen", "Rename", "Rebautizar", "Renommer", "Rinominare", "&#304;smi de&#287;i&#351;tir"]
var playerDeleteSpan=["L&ouml;schen", "Delete", "Borrar", "Effacer", "Cancellare", "Sil"];
var playerCreateSpan=["Schaffen", "Create", "Crear", "Cr&eacute;er", "Creare", "Olu&#351;tur"];


//var langLabel=["Sprache :", "Idioma", "Langue", "Lingua", "Dil :", "Language :"];
//var playerDelSpan=["L&ouml;schen", "Borrar", "Effacer", "Cancellare", "Sil", "Delete"];
//var newPlayerH=["Erstellen Neuer Spieler :", "Crear Nuevo Jugador", "Cr&eacute;er nouveau joueur", "Crea Nuovo Giocatore", "Yeni Oyuncu Olu&#351;tur :", "Create New Player :"];
//var playerNameLabel= ["Name", "Nombre", "Nom", "Nome", "Isim", "Name"];
//var levelSpanFreemode=["Free Mode", "Free Mode", "Free Mode", "Free Mode", "Free Mode", "Free Mode"];
//var levelSpanFindout=["Find-Out", "Find-Out", "Find-Out", "Find-Out", "Find-Out", "Find-Out"];
//var levelSpanMathris=["Mathris", "Mathris", "Mathris", "Mathris", "Mathris", "Mathris"];
//var levelSpanMathrix=["Mathrix", "Mathrix", "Mathrix", "Mathrix", "Mathrix", "Mathrix"];
//var levelSpanShootout=["Shoot-Out", "Shoot-Out", "Shoot-Out", "Shoot-Out", "Shoot-Out", "Shoot-Out"];


$("#playersH").html(playersH[langID]);
$(".levelSpanMode").html(levelSpanMode[langID]);
$(".levelSpanDifE").html(levelSpanDifE[langID]);
$(".levelSpanDifM").html(levelSpanDifM[langID]);
$(".levelSpanDifH").html(levelSpanDifH[langID]);
$(".playerRenameSpan").html(playerRenameSpan[langID]);
$(".playerDeleteSpan").html(playerDeleteSpan[langID]);
$(".playerCreateSpan").html(playerCreateSpan[langID]);


//$("#langLabel").text(langLabel[langID]);
//$(".playerDelSpan").html(playerDelSpan[langID]);
//$("#newPlayerH").html(newPlayerH[langID]);
//$("#playerNameLabel").text(playerNameLabel[langID]);
//$(".levelSpanFreemode").html(levelSpanFreemode[langID]);
//$(".levelSpanFindout").html(levelSpanFindout[langID]);
//$(".levelSpanMathris").html(levelSpanMathris[langID]);
//$(".levelSpanMathrix").html(levelSpanMathrix[langID]);
//$(".levelSpanShootout").html(levelSpanShootout[langID]);
}




//function playerCreate(){
//var name;	//, name2;
//name=$("#createPlayerName").val();
////name2=mysql_real_escape_string (name);
////alert("Yeni oyuncu kaydi isim "+ name+ "- Güvenli isism="+name2 );
////
////return false;
//if(name!=""){
//gamePlayerCreate(name);
//listPagePlayersUserInfoDB();	//Yeni olusturulanla birlikte oyuncular yeniden listeleniyor
////langChangeSelect();
//}
//}

//function playerDelete(id){
//gamePlayerDelete(id);
//listPagePlayersUserInfoDB();	//Silinen disindaki oyuncular yeniden listeleniyor
////langChangeSelect();
//}


function playerSelect(id){
//alert(id);
//Oyuncunun seçilip oyun seçimi sayfasina yönlendirme yapiliyor
gamePlayerID=id;


//$("#pageGameModesContent").trigger("create");
//}

//$(document).on("pageinit", "#pageGameModes", function() {
//if(pFreemodeE[gamePlayerID]>0) $("#pageGameModesFreeMode").button('enable').button('refresh');
//if(pFindoutE[gamePlayerID]>2) $("#pageGameModesFindOut").button('enable');
//if(pMathrisE[gamePlayerID]>2) $("#pageGameModesMathris").button('enable');
//if(pMathrixE[gamePlayerID]>2) $("#pageGameModesMathrix").button('enable');
//if(pShootoutE[gamePlayerID]>2) $("#pageGameModesShootOut").button('enable');
//});


$.mobile.changePage( $("#pageGameModes") , { transition: "slide"} );
}



$("#pagePlayers").live('pagebeforeshow', function(event){											
listPagePlayersUserInfoDB();
pagePlayersLanguageChange();
});

/* PagePlayers kodu sonu */


$("#pageGameModes").live("pagebeforeshow", function() {

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


$("#pageFreeModeLevel").live("pagebeforeshow", function() {
freeModeLevels();
});


$("#pageFindOutLevel").live("pagebeforeshow", function() {
//var level;
//
//alert("cem sayfa");
//alert("dif="+lastSelDif[gamePlayerID][1]);
//level=pLevels[gamePlayerID][1][lastSelDif[gamePlayerID][1]];
//alert("level="+level);

//if(lastSelFindOutDif[gamePlayerID]==3){
//level=pFindOutH[gamePlayerID];
//}
//else if(lastSelFindOutDif[gamePlayerID]==2){
//level=pFindOutM[gamePlayerID];
//}
//else{
//level=pFindOutE[gamePlayerID];
//}
gamesModesLevels(1, "FindOut");
});



$("#pageMathrisLevel").live("pagebeforeshow", function() {
gamesModesLevels(2, "Mathris");
});



$("#pageMathrixLevel").live("pagebeforeshow", function() {
gamesModesLevels(3, "Mathrix");
});



$("#pageShootOutLevel").live("pagebeforeshow", function(e, data) {
gamesModesLevels(4, "ShootOut");
});









function gamesModesLevels(mode1, mode2){
//mode1: hangi oyun modu için yapilacagi, numarasa 1:find out, 2-mathris ...	
//mode2: hangi oyun modu için yapilacagi, sayfa adi gelecek (FindOut, Mathris) gibi

//maxLevel: seçilen mode'un toplam kaç level oldugu. Böylece disable edilecek leveller belirlenecek
var maxLevel;
if(mode1==1){
maxLevel=100;
}
else if(mode1==2){
maxLevel=5;
}
else if(mode1==3){
maxLevel=8;
}
else if(mode1==4){
maxLevel=10;
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

var level;	//level
var dif;	//last selected difficulty

dif=lastSelDif[gamePlayerID][mode1];
level=pLevels[gamePlayerID][mode1][dif];

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
if (level>maxLevel){
level=maxLevel;
//Gerekirse,  level=maxLevel; ayarlamsi yapilacak ve veritabanna ve pLevels degiskenine islenecek
//pLevels[gamePlayerID][mode1][dif]=level;
}
else{
levelHtml='<a class="ui-btn ui-btn-up-d ui-shadow ui-btn-corner-all ui-disabled" data-wrapperels="span" data-iconshadow="true" data-shadow="true" data-corners="true" href="#" onclick="play'+mode2+'('+(level+1)+',0)" data-role="button" data-theme="d"><span class="ui-btn-inner ui-btn-corner-all"><span class="ui-btn-text">'+(level+1)+'</span></span></a>';
}

//for (i=2;i<maxLevel+1;i++){
//$("#"+mode2).find("#level"+i.toString()).removeClass("ui-disabled");	//Varsa, kaldirmis olacak
//$("#"+mode2).find("#level"+i.toString()).addClass("ui-disabled");
//}


for (i=level;i>0;i--){
levelHtml=levelHtml+'<a class="ui-btn ui-shadow ui-btn-corner-all ui-btn-up-d" data-wrapperels="span" data-iconshadow="true" data-shadow="true" data-corners="true" href="#" onclick="play'+mode2+'('+i+',0)" data-role="button" data-theme="d"><span class="ui-btn-inner ui-btn-corner-all"><span class="ui-btn-text">'+i+'</span></span></a>';

//$("#"+mode2).find("#level"+i.toString()).removeClass("ui-disabled");
}
$("#page"+mode2+"Levels").html(levelHtml);


}




function freeModeLevels(){
//
//Ayarlar sifirlaniyor
//
//alert("sirifrlama yapilacak");
//$(".labelHard").find(".ui-btn-text").html("zooor");

//Difficulty; easy eanbled ve checked, digerleri disabled
//$("#freeModeModerate").attr("checked",true).checkboxradio("refresh");
$("#freeModeEasy").attr("checked",false).checkboxradio('enable').checkboxradio("refresh");
$("#freeModeModerate").attr("checked",false).checkboxradio('disable').checkboxradio("refresh");
$("#freeModeHard").attr("checked",false).checkboxradio('disable').checkboxradio("refresh");

//alert("sifirlama tamam");
//$("#pageFreeModeLevel").find("#freeModeEasy").trigger("click").checkboxradio("refresh");
//$("#pageFreeModeLevel").find("#freeModeModerate").checkboxradio('disable').checkboxradio("refresh");
//$("#pageFreeModeLevel").find("#freeModeHard").checkboxradio('disable').checkboxradio("refresh");


//Islermler; sadece toplama enable ve checked, digerler disabled ve checked degil
$("#pageFreeModeLevel").find("#oAdd").checkboxradio("enable").attr("checked",false).checkboxradio('refresh');
$("#pageFreeModeLevel").find("#oSub").checkboxradio("disable").attr("checked",false).checkboxradio('refresh');
$("#pageFreeModeLevel").find("#oMul").checkboxradio("disable").attr("checked",false).checkboxradio('refresh');
$("#pageFreeModeLevel").find("#oDiv").checkboxradio("disable").attr("checked",false).checkboxradio('refresh');

//Sayilar; sadece tamsayilar enable ve checked, digerler disabled ve checked degil
$("#pageFreeModeLevel").find("#nInt").checkboxradio("enable").attr("checked",false).checkboxradio('refresh');
$("#pageFreeModeLevel").find("#nDec").checkboxradio("disable").attr("checked",false).checkboxradio('refresh');
$("#pageFreeModeLevel").find("#nRat").checkboxradio("disable").attr("checked",false).checkboxradio('refresh');
$("#pageFreeModeLevel").find("#nExp").checkboxradio("disable").attr("checked",false).checkboxradio('refresh');
$("#pageFreeModeLevel").find("#nRoo").checkboxradio("disable").attr("checked",false).checkboxradio('refresh');

//Hane sayisi; sadece tek haneliler enable ve checked, digerler disabled ve checked degil
$("#pageFreeModeLevel").find("#digit1").checkboxradio("enable").attr("checked",false).checkboxradio('refresh');
$("#pageFreeModeLevel").find("#digit2").checkboxradio("disable").attr("checked",false).checkboxradio('refresh');
$("#pageFreeModeLevel").find("#digit3").checkboxradio("disable").attr("checked",false).checkboxradio('refresh');
$("#pageFreeModeLevel").find("#digit4").checkboxradio("disable").attr("checked",false).checkboxradio('refresh');
$("#pageFreeModeLevel").find("#digit5").checkboxradio("disable").attr("checked",false).checkboxradio('refresh');

//Islem sayisi; sadece bir islem enable ve checked, digerler disabled ve checked degil
$("#pageFreeModeLevel").find("#oCount1").checkboxradio("enable").attr("checked",false).checkboxradio('refresh');
$("#pageFreeModeLevel").find("#oCount2").checkboxradio("disable").attr("checked",false).checkboxradio('refresh');
$("#pageFreeModeLevel").find("#oCount3").checkboxradio("disable").attr("checked",false).checkboxradio('refresh');
$("#pageFreeModeLevel").find("#oCount4").checkboxradio("disable").attr("checked",false).checkboxradio('refresh');
$("#pageFreeModeLevel").find("#oCount5").checkboxradio("disable").attr("checked",false).checkboxradio('refresh');

//Isaret; sadece esitlik enable ve checked, digerler disabled ve checked degil
$("#pageFreeModeLevel").find("#eSign0").checkboxradio("enable").attr("checked",false).checkboxradio('refresh');
$("#pageFreeModeLevel").find("#eSign1").checkboxradio("disable").attr("checked",false).checkboxradio('refresh');
$("#pageFreeModeLevel").find("#eSign2").checkboxradio("disable").attr("checked",false).checkboxradio('refresh');
$("#pageFreeModeLevel").find("#eSign3").checkboxradio("disable").attr("checked",false).checkboxradio('refresh');
$("#pageFreeModeLevel").find("#eSign4").checkboxradio("disable").attr("checked",false).checkboxradio('refresh');
$("#pageFreeModeLevel").find("#eSign5").checkboxradio("disable").attr("checked",false).checkboxradio('refresh');

//alert("sifirlama tamam2");
//Oyuncunun seviyesine göre seçenekler açilacak
//var x;
//var level, op, num, dig, oc, sign;
//level=pFreemodeE[gamePlayerID];		//lastSelFMDif[gamePlayerID]==1
//op=lastSelFMEOp[gamePlayerID];
//num=lastSelFMENum[gamePlayerID];
//dig=lastSelFMEDig[gamePlayerID];
//oc=lastSelFMEOC[gamePlayerID];
//sign=lastSelFMES[gamePlayerID];
//
//if(lastSelFMDif[gamePlayerID]==2){
//level=pFreemodeM[gamePlayerID];
//op=lastSelFMMOp[gamePlayerID];
//num=lastSelFMMNum[gamePlayerID];
//dig=lastSelFMMDig[gamePlayerID];
//oc=lastSelFMMOC[gamePlayerID];
//sign=lastSelFMMS[gamePlayerID];
//}
//else if(lastSelFMDif[gamePlayerID]==3){
//level=pFreemodeH[gamePlayerID];
//op=lastSelFMHOp[gamePlayerID];
//num=lastSelFMHNum[gamePlayerID];
//dig=lastSelFMHDig[gamePlayerID];
//oc=lastSelFMHOC[gamePlayerID];
//sign=lastSelFMHS[gamePlayerID];
//}
//alert("sifirlama tamam3");

var level;	//level
var dif;	//last selected difficulty

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
else{	//dif=2
$("#freeModeHard").attr("checked",true).checkboxradio("refresh");
}

//lastSelFMOp[gamePlayerID][dif][0]; 0, 1, 2, 3
//lastSelFMNum[gamePlayerID][dif][0]; 0, 1, 2, 3, 4
//lastSelFMDig[gamePlayerID][dif][0]; 0, 1, 2, 3, 4
//lastSelFMOC[gamePlayerID][dif][0]; 0, 1, 2, 3, 4
//lastSelFMS[gamePlayerID][dif][0]; 0, 1, 2, 3, 4, 5
//alert("gameplayerid ="+gamePlayerID+" lastSelFMNum[gamePlayerID][dif][0]= "+lastSelFMNum[gamePlayerID][dif][0]);

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

//alert("sifirlama tamam");

}




//Silinecek
function difficultyClick(mod, v){

if(mod=="fmdiffiulty" && v!=lastSelFMDif[gamePlayerID]){
playerDifUpdate(mod, v)
}
else if(mod=="findoutdifficulty" && v!=lastSelFindOutDif[gamePlayerID]){
playerDifUpdate(mod, v)
}
else if(mod=="mathrisdifficulty" && v!=lastSelMathrisDif[gamePlayerID]){
playerDifUpdate(mod, v)
}
else if(mod=="mathrixdifficulty" && v!=lastSelMathrixDif[gamePlayerID]){
playerDifUpdate(mod, v)
}
else if(mod=="shootoutdifficulty" && v!=lastSelShootOutDif[gamePlayerID]){
playerDifUpdate(mod, v)
}

}


//silinecek
function goster (){
//seçili radio dügmesinin degerini ögrenme
alert("cem1");
//$("#freeModeEasy").click();
$("#freeModeEasy").attr("checked",true).checkboxradio("refresh");


//attr("checked",false).checkboxradio('enable').checkboxradio("refresh");


//$("#pageFreeModeLevel .labelEasy").removeClass("ui-radio-off ui-radio-on ui-focus ui-btn-active");
////$("#pageFreeModeLevel .labelEasy").attr("checked", false);
//$("#pageFreeModeLevel .labelEasy").removeAttr("checked");
//$("#pageFreeModeLevel .labelModerate").removeClass("ui-radio-off ui-radio-on ui-focus ui-btn-active");
////$("#pageFreeModeLevel .labelModerate").attr("checked", false);
////$("#pageFreeModeLevel .labelModerate").removeAttr("checked");
//$("#pageFreeModeLevel .labelHard").removeClass("ui-radio-off ui-radio-on ui-focus ui-btn-active");
//$("#pageFreeModeLevel .labelHard").attr("checked", true);
//$("#pageFreeModeLevel .labelHard").removeAttr("checked");



//$("#pageFreeModeLevel").find("input[name=gDifficulty]:checked").each(function() {
//alert($(this).val());
//if($(this).val()==2){
//alert ("val=2");
//$("#freeModeEasy").parent().trigger("click");
//.trigger("click");.find(".ui-btn-text")
//$(this).trigger("click").checkboxradio("refresh");	
//}
//});

	$("#pageFreeModeLevel").find("input[name=gDifficulty]:checked").each(function() {															
    alert("checked = "+$(this).val());
	alert($(this).attr("id"));
    });
//	alert("cemmm");
//$("#pageFreeModeLevel .labelModerate").addClass("ui-radio-on ui-focus ui-btn-active");

//$("#pageFreeModeLevel [name=gDifficulty]").removeAttr("checked");
//$("#pageFreeModeLevel .labelModerate").addClass("ui-radio-on ui-btn-active");
//$("#freeModeModerate").attr("checked",true).checkboxradio("refresh");
//$("#freeModeModerate").attr("checked",false).checkboxradio("refresh");

//$("#pageFreeModeLevel .labelModerate").attr("checked", "checked");
//$("#pageFreeModeLevel .labelModerate").trigger("click");

//$("#pageFreeModeLevel .labelModerate").prop("checked", true);

//$("#pageFreeModeLevel [name=gDifficulty]").trigger("change");
//$("#oAdd").checkboxradio("enable").attr("checked",true).checkboxradio('refresh');

//$("#pageFreeModeLevel").find("#oSub").checkboxradio("enable").attr("checked",false).checkboxradio('refresh');

//$("#pageFreeModeLevel").find("#oSub").removeClass("ui-disable");
//$("#pageFreeModeLevel").find("#oSub").trigger("click");

//$("#pageFreeModeLevel .labelModerate").parent().parent().trigger("click");	//hatali
//$("#pageFreeModeLevel .labelModerate").find(".ui-btn").trigger("click");
alert("cem2");
}

//silinecek
function bas (){
//radio button disable kaldirma
	//$("#freeModeHard").parent().removeClass("ui-disabled");
	//$("#freeModeHard").removeAttr("disabled");
	
$("#freeModeModerate").checkboxradio('enable').checkboxradio("refresh");
$("#freeModeHard").checkboxradio('enable').checkboxradio("refresh");
//$("input[type='radio']:first").attr("checked",true).checkboxradio("refresh");

//radio button yazi degistirme
//$(".labelHard").find(".ui-btn-text").html("zooor");

//$("#oSub").button("enable").trigger("click").button('refresh');
//$("#oMul").button("enable").button('refresh');
//$("#oDiv").button("enable").button('refresh');


$("#oSub").checkboxradio("enable").attr("checked",true).checkboxradio('refresh');
$("#oMul").checkboxradio("enable").checkboxradio('refresh');
$("#oDiv").checkboxradio("enable").checkboxradio('refresh');


}

//silinecek
function bas2 (){
//radio button disable yapma

$("#freeModeEasy").trigger("click").checkboxradio("refresh");
//$("#freeModeEasy").checkboxradio("refresh");
$("#freeModeHard").checkboxradio('disable').checkboxradio("refresh");
$("#freeModeModerate").checkboxradio('disable').checkboxradio("refresh");

//$("#freeModeEasy").parent().trigger("click");
//$("#freeModeEasy").child().trigger("click");
//$("#freeModeEasy").child().child().trigger("click");
//$("#freeModeEasy").child().child().child().trigger("click");

//$("input[type='radio']").checkboxradio('enable');
//
//$("#freeModeEasy").find("labelEasy").trigger("click");
//	$("#freeModeHard").parent().addClass("ui-disabled");
//	$("#freeModeHard").attr("disabled", "disabled");
	//Seçiliyse kaldirmak için
//	$("#freeModeHard").removeAttr("checked");
	
//	$("#freeModeHard").find(".labelHard").removeClass("ui-btn-active");
//	$("#freeModeHard").find(".labelHard").addClass("ui-radio-off");
$("#pageFreeModeLevelContent").trigger("create");


$("#oAdd").checkboxradio("enable").attr("checked",true).checkboxradio('refresh');
$("#oSub").checkboxradio("disable").attr("checked",false).checkboxradio('refresh');
$("#oMul").checkboxradio("disable").attr("checked",false).checkboxradio('refresh');
$("#oDiv").checkboxradio("disable").attr("checked",false).checkboxradio('refresh');
	
}

//silinecek
function bas3(){
	freeModeLevels();
}









/* pageGameModes kodu baslangici */
function gameModeSelect(mode){
gameMode=mode;
if (gameMode==0){
$.mobile.changePage( $("#pageFreeModeLevel") , { transition: "slide"} );
}
else if (gameMode==1){
$.mobile.changePage( $("#pageFindOutLevel") , { transition: "slide"} );
}
else if (gameMode==2){
$.mobile.changePage( $("#pageMathrisLevel") , { transition: "slide"} );
}
else if (gameMode==3){
$.mobile.changePage( $("#pageMathrixLevel") , { transition: "slide"} );
}
else if (gameMode==4){
$.mobile.changePage( $("#pageShootOutLevel") , { transition: "slide"} );
}
return false;
}
/* pageGameModes kodu sonu */


/* pageFreeModePlay kodu baslangici */
function playFreeMode(score){



//iRand ile Denklem olusturmakta kullanilacak seçeneklerin bulundugu yer belirlenecek
var iRand=Math.floor(Math.random()*gameDigit.length);


//Deneme amaçli degerler
//gameNumber = [[0]];	//null; //gameNumber=[[1]];	//[[1,2],[1,2,3],[1]];
//gameOperation=[[1]];	//[[1,2],[1,2,3],[1]];
//gameOCount=[[0]];
//gameDigit=[[0]];
//gameSign=[[5]];
//gameDifficulty=1;	//0,1,2

//Free mode difficulty
gameDifficulty=lastSelDif[gamePlayerID][0];



//Free mode selected operations
var gameOperation2=[];
var i2=0;
for(var i=0;i<4;i++){
if (lastSelFMOp[gamePlayerID][gameDifficulty][i]==1){
gameOperation2[i2]=i;
i2++;
}
}
gameOperation[0]=gameOperation2;
//alert("gameOperation[0]="+gameOperation[0].length+" gameOperation[0][0]="+gameOperation[0][0]);


//Free mode selected numbers
var gameNumber2=[];
var i2=0;
for(var i=0;i<5;i++){
if (lastSelFMNum[gamePlayerID][gameDifficulty][i]==1){
gameNumber2[i2]=i;
i2++;
}
}
gameNumber[0]=gameNumber2;


//Free mode selected digits
var gameDigit2=[];
var i2=0;
for(var i=0;i<5;i++){
if (lastSelFMDig[gamePlayerID][gameDifficulty][i]==1){
gameDigit2[i2]=i;
i2++;
}
}
gameDigit[0]=gameDigit2;


//Free mode selected operation counts
var gameOCount2=[];
var i2=0;
for(var i=0;i<5;i++){
if (lastSelFMOC[gamePlayerID][gameDifficulty][i]==1){
gameOCount2[i2]=i;
i2++;
}
}
gameOCount[0]=gameOCount2;

//alert("gc="+gameOCount.toString());

//Free mode selected signs
var gameSign2=[];
var i2=0;
for(var i=0;i<6;i++){
if (lastSelFMS[gamePlayerID][gameDifficulty][i]==1){
gameSign2[i2]=i;
i2++;
}
}
gameSign[0]=gameSign2;




//var varNum=[];
//if($("#nInt").attr('checked')){
//varNum[varNum.length]=0;
//}
//if($("#nDec").attr('checked')){
//varNum[varNum.length]=1;
//}
//if($("#nRat").attr('checked')){
//varNum[varNum.length]=2;
//}
//if($("#nExp").attr('checked')){
//varNum[varNum.length]=3;
//}
//if($("#nRoo").attr('checked')){
//varNum[varNum.length]=4;
//}

//gameNumber=[varNum];


//alert("cem "+gameDigit[2][0]);
$.mobile.changePage( $("#pageFreeModePlay") , { transition: "slide"} );
if(score==0){
$("#pageFreeModePlaySlider").val(0);
$("#pageFreeModePlaySlider").slider('refresh');
}

var result= [];	//result[0]; Esitligin html kodu	result[1]; Esitligin hesaplanan sonucu
var result2; //result2; Esitligin hesaplanan sonucundan farkli (veya farksiz) gösterilecek sonuç


result =creatEquation(iRand); 
result2=createResult(result[1]);

var eqSign=[];	//Esitsizligin isaretini belirlemekte kullanilacak
var eqRes;		//Esitsizligin dogrulugu veya yanlisligi
var point;		//Dogru veya yanlis cevapta eklenecek veya çikarilacak puan
point=1;
if(gameDifficulty==0) point=25;
if(gameDifficulty==1) point=2;


iSign=Math.floor(Math.random()*gameSign[iRand].length);
eqSign[0]=gameSign[iRand][iSign];
//eqSign[0]=Math.floor(Math.random()*6);	//Eskisi
//eqSign[0]=0;

if(eqSign[0]==0){	//Esitlik isareti
eqSign[1]="=";
eqRes=(-1)*point;
if(result[1]==result2) eqRes=point;
}
else if(eqSign[0]==1){	//Esitsizlik isareti
eqSign[1]="&ne;";
eqRes=(-1)*point;
if(result[1]!=result2) eqRes=point;
}
else if(eqSign[0]==2){	//Büyük isareti
eqSign[1]=">";
eqRes=(-1)*point;
if(result[1]>result2) eqRes=point;
}
else if(eqSign[0]==3){	//Büyük esit isareti
eqSign[1]="&ge;";
eqRes=(-1)*point;
if(result[1]>=result2) eqRes=point;
}
else if(eqSign[0]==4){	//Küçük isareti
eqSign[1]="<";
eqRes=(-1)*point;
if(result[1]<result2) eqRes=point;
}
else if(eqSign[0]==5){	//Küçük esit isareti
eqSign[1]="&le;";
eqRes=(-1)*point;
if(result[1]<=result2) eqRes=point;
}


result[0]='<table align="center" class="equationTable"><tr>'+result[0]+'<td>'+eqSign[1]+'</td><td>'+result2+'</td></tr></table>';

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

var h=[];
var h2;
h[0]=$(window).height();
h[1]=$("#pageFreeModePlayQuestion").height();
h2=((((h[0]-h[1])/2)*100)/h[0]).toString();
if(h[1]<h[0]){
$("#pageFreeModePlayQuestion").css("top",h2+"%");
}
//$(".pageFreeModePlayImage").width(w[0]*0.8);
//$(".pageFreeModePlayImage").height(h[0]*0.8);

}



function playFreeModeCal(point){
var points;
points=Number($("#pageFreeModePlaySlider").val());
points=points+Number(point);
if(points<0) points=0;
if(points>100) points=100;
$("#pageFreeModePlaySlider").val(points.toString());
$("#pageFreeModePlaySlider").slider('refresh');
if(points>=100){
//level atlama kodu
if(pLevels[gamePlayerID][0][gameDifficulty]==1 && lastSelFMOp[gamePlayerID][gameDifficulty][0]==1){
changeLevel(0, gameDifficulty, 2)
}
else if(pLevels[gamePlayerID][0][gameDifficulty]==2 && lastSelFMOp[gamePlayerID][gameDifficulty][1]==1){
changeLevel(0, gameDifficulty, 3)
}
else if(pLevels[gamePlayerID][0][gameDifficulty]==3 && lastSelFMOp[gamePlayerID][gameDifficulty][0]==1){
changeLevel(0, gameDifficulty, 4)
}
else if(pLevels[gamePlayerID][0][gameDifficulty]==4 && lastSelFMOp[gamePlayerID][gameDifficulty][0]==1){
changeLevel(0, gameDifficulty, 5)
if(gameDifficulty==0)	changeLevel(0, 1, 1);
if(gameDifficulty==1)	changeLevel(0, 2, 1);
}


$( "#popupFreeModePlay" ).popup( "open" );
}
else{
playFreeMode();
}
}
/* pageFreeModePlay kodu sonu */


//Oyunlarin levellerinin ayarlari. Ilk 7 bölüm tamam, deneme amaçli olarak.
function gameLevelsConfig(){
	
gameOperation=[[]];			//Oyun islem türü
gameNumber=[[]];				//Oyun sayi türü
gameDigit=[[]];				//Oyun hane sayisi
gameOCount=[[]];				//Oyun islem sayisi
gameSign=[[]];				//Oyun sayi türü	//Sonradan ekledim bölümlerde yok.

if(gameLevel==1){
gameOperation=[[0]];	//[[1,2],[1,2,3],[1]];
gameNumber = [[0]];	//null; //gameNumber=[[1]];	//[[1,2],[1,2,3],[1]];
gameDigit=[[0]];
gameOCount=[[0]];
gameSign=[[0]];
}
else if(gameLevel==2){
gameOperation=[[1]];	//[[1,2],[1,2,3],[1]];
gameNumber = [[0]];	//null; //gameNumber=[[1]];	//[[1,2],[1,2,3],[1]];
gameDigit=[[0]];
gameOCount=[[0]];
gameSign=[[0]];
}
else if(gameLevel==3){
gameOperation=[[0,1]];	//[[1,2],[1,2,3],[1]];
gameNumber = [[0]];	//null; //gameNumber=[[1]];	//[[1,2],[1,2,3],[1]];
gameDigit=[[0]];
gameOCount=[[0]];
gameSign=[[0]];
}
else if(gameLevel==4){
gameOperation=[[2]];	//[[1,2],[1,2,3],[1]];
gameNumber = [[0]];	//null; //gameNumber=[[1]];	//[[1,2],[1,2,3],[1]];
gameDigit=[[0]];
gameOCount=[[0]];
gameSign=[[0]];
}
else if(gameLevel==5){
gameOperation=[[3]];	//[[1,2],[1,2,3],[1]];
gameNumber = [[0]];	//null; //gameNumber=[[1]];	//[[1,2],[1,2,3],[1]];
gameDigit=[[0]];
gameOCount=[[0]];
gameSign=[[0]];
}
else if(gameLevel==6){
gameOperation=[[2,3]];	//[[1,2],[1,2,3],[1]];
gameNumber = [[0]];	//null; //gameNumber=[[1]];	//[[1,2],[1,2,3],[1]];
gameDigit=[[0]];
gameOCount=[[0]];
gameSign=[[0]];
}
else if(gameLevel==7){
gameOperation=[[0,1,2,3]];	//[[1,2],[1,2,3],[1]];
gameNumber = [[0]];	//null; //gameNumber=[[1]];	//[[1,2],[1,2,3],[1]];
gameDigit=[[0]];
gameOCount=[[0]];
gameSign=[[0]];
}

}


/* pageFindOutPlay kodu baslangici */
function playFindOut(level, score){

//Deneme amaçli degerler
//gameNumber = [[0]];	//null; //gameNumber=[[1]];	//[[1,2],[1,2,3],[1]];
//gameOperation=[[1]];	//[[1,2],[1,2,3],[1]];
//gameOCount=[[0]];
//gameDigit=[[0]];
//gameSign=[[5]];
//gameDifficulty=0;	//0,1,2

$.mobile.changePage( $("#pageFindOutPlay") , { transition: "slide"} );

//alert("score="+score+" level="+level);
if(score==0){
gameLevel=level;
$('#playFindOutEq').removeClass("ui-disabled");
$('#playFindOutNotEq').removeClass("ui-disabled");
$('#playFindOutBig').removeClass("ui-disabled");
$('#playFindOutEqBig').removeClass("ui-disabled");
$('#playFindOutLess').removeClass("ui-disabled");
$('#playFindOutEqLess').removeClass("ui-disabled");
$("#pageFindOutPlaySlider").val(score.toString());
$("#pageFindOutPlaySlider").slider('refresh');
}

gameLevelsConfig();	//Oyunlarin, seviyeye bagli olarak ayarlari belirleniyor
gameDifficulty=lastSelDif[gamePlayerID][1];


//iRand ile Denklem olusturmakta kullanilacak seçeneklerin bulundugu yer belirlenecek
var iRand=Math.floor(Math.random()*gameDigit.length);

var result= [];	//result[0]; Esitligin html kodu	result[1]; Esitligin hesaplanan sonucu
var result2; //result2; Esitligin hesaplanan sonucundan farkli (veya farksiz) gösterilecek sonuç

result =creatEquation(iRand); 
result2=createResult(result[1]);

var eqSign=[];	//Esitsiligin isaretini belirlemekte kullanilacak
var eqRes=[];		//Esitsizligin dogrulugu veya yanlisligi
var point;		//Dogru veya yanlis cevapta eklenecek veya çikarilacak puan
point=1;
if(gameDifficulty==0) point=25;
if(gameDifficulty==1) point=2;

//eqSign[0]=Math.floor(Math.random()*6);
//eqSign[0]=0;

eqRes[0]=point;//Esitlik isareti
eqRes[1]=point;//Esitsizlik isareti
eqRes[2]=point;//Büyük isareti
eqRes[3]=point;//Büyük esit isareti
eqRes[4]=point;//Küçük isareti
eqRes[5]=point;//Küçük esit isareti

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


result[0]='<table align="center" class="equationTable"><tr>'+result[0]+'<td> ? </td><td>'+result2+'</td></tr></table>';

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

var h=[];
var h2;
h[0]=$(window).height();
h[1]=$("#pageFindOutPlayQuestion").height();
h2=((((h[0]-h[1])/2)*100)/h[0]).toString();
if(h[1]<h[0]){
$("#pageFindOutPlayQuestion").css("top",h2+"%");
}
//$(".pageFreeModePlayImage").width(w[0]*0.8);
//$(".pageFreeModePlayImage").height(h[0]*0.8);


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
points=points+Number(point);
if(points<0) points=0;
if(points>100) points=100;
$("#pageFindOutPlaySlider").val(points.toString());
$("#pageFindOutPlaySlider").slider('refresh');

if(points>=100){
//level atlama kodu
//pLevels[gamePlayerID][1][gameDifficulty]++;
//alert("levels="+pLevels[gamePlayerID][1][gameDifficulty]+"-"+gameLevel);
if(pLevels[gamePlayerID][1][gameDifficulty]==gameLevel){
changeLevel(1, gameDifficulty, (pLevels[gamePlayerID][1][gameDifficulty]+1));
}

//Difficulty moderate ve hard'in açilma zamanlari
//if(pLevels[gamePlayerID][1][0]==5)	changeLevel(1, 1, 1);
//if(pLevels[gamePlayerID][1][1]==5)	changeLevel(1, 2, 1);

$( "#popupFindOutPlay" ).popup( "open" );
}
else{
playFindOut();
}
}
/* pageFindOutPlay kodu sonu */







/* pageMathrixPlay kodu baslangici */
function playMathrix(level,score){
$('#pageMathrixPlayQuestions').stop();
$.mobile.changePage( $("#pageMathrixPlay") , { transition: "slide"} );
if(score==0){
gameLevel=level;
$("#pageMathrixPlaySlider").val(score.toString());
$("#pageMathrixPlaySlider").slider('refresh');
}

gameLevelsConfig();	//Oyunlarin, seviyeye bagli olarak ayarlari belirleniyor
gameDifficulty=lastSelDif[gamePlayerID][3];

//iRand ile Denklem olusturmakta kullanilacak seçeneklerin bulundugu yer belirlenecek
var iRand=Math.floor(Math.random()*gameDigit.length);

var result= [];	//result[0]; Esitligin html kodu	result[1]; Esitligin hesaplanan sonucu
var result2; //result2; Esitligin hesaplanan sonucundan farkli (veya farksiz) gösterilecek sonuç
var result3 =""; //result3; bütün sorulari barindiran degisken

var eqSign=[];	//Esitsiligin isaretini belirlemekte kullanilacak
var eqRes;		//Esitsizligin dogrulugu veya yanlisligi
var point;		//Dogru veya yanlis cevapta eklenecek veya çikarilacak puan
var totalQNum;		//question numbers.
var qTime;		//question time.
var sSucc;		//score success. Basarili kabul edilecek score

point=1;		//gameDifficulty=2 için degeri
totalQNum=100;		//gameDifficulty=2 için degeri
qTime=1000000;	//gameDifficulty=2 için degeri
sSucc=90;		//gameDifficulty=2 için degeri

if(gameDifficulty==0){
point=25;
totalQNum=20;
qTime=200000;
sSucc=50;
}
if(gameDifficulty==1){
point=2;
totalQNum=50;
qTime=500000;
sSucc=75;
}

for(iQuestion=0;iQuestion<totalQNum;iQuestion++){

result =creatEquation(iRand); 
result2=createResult(result[1]);



eqSign[0]=Math.floor(Math.random()*6);	//A6 isaretten birini alacak
eqSign[0]=0;

if(eqSign[0]==0){	//Esitlik isareti
eqSign[1]="=";
eqRes=(-1)*point;
if(result[1]==result2) eqRes=point;
}
else if(eqSign[0]==1){	//Esitsizlik isareti
eqSign[1]="&ne;";
eqRes=(-1)*point;
if(result[1]!=result2) eqRes=point;
}
else if(eqSign[0]==2){	//Büyük isareti
eqSign[1]=">";
eqRes=(-1)*point;
if(result[1]>result2) eqRes=point;
}
else if(eqSign[0]==3){	//Büyük esit isareti
eqSign[1]="&ge;";
eqRes=(-1)*point;
if(result[1]>=result2) eqRes=point;
}
else if(eqSign[0]==4){	//Küçük isareti
eqSign[1]="<";
eqRes=(-1)*point;
if(result[1]<result2) eqRes=point;
}
else if(eqSign[0]==5){	//Küçük esit isareti
eqSign[1]="&le;";
eqRes=(-1)*point;
if(result[1]<=result2) eqRes=point;
}


result[0]='<div id="pageMatrixPlayQuestion'+iQuestion+'" class="ui-bar ui-bar-d ui-corner-all pageMathrixQuestion ui-bar2" style="margin-top:5px;"><table width="100%" align="center" border="0"><tbody><tr><td><img src="images/delete.png" onclick="playMathrixCal(\''+iQuestion+'\',\''+(eqRes*(-1))+'\')"></td><td><table width="" align="center" border="0"><tbody><tr>'+result[0]+'<td>'+eqSign[1]+'</td><td>'+result2+'</td></tr></tbody></table></td><td align="right"><img src="images/check.png" onclick="playMathrixCal(\''+iQuestion+'\',\''+eqRes+'\')"></td></tr></tbody></table></div>';



result3=result3+result[0];
}

$("#pageMathrixPlayQuestions").html(result3);


var h;
var h2;
var h3;

h=$("#pageMathrixPlayQuestions").height();
h2=$("#pageMathrixPlayQuestionsView").height();
$("#pageMathrixPlayQuestions").css("top",h*(-1)+"px");

h3=h+h2;
h3="+="+h3+"px";

$('#pageMathrixPlayQuestions').animate({
top: h3
}, qTime, 'linear', function() {
	
// Animation complete.
var pScore;
pScore=$("#pageMathrixPlaySlider").val(score.toString());
if (pScore>=sSucc){
$( "#popup1MathrixPlay" ).popup( "open" );
if(pLevels[gamePlayerID][1][gameDifficulty]==gameLevel){
changeLevel(2, gameDifficulty, (pLevels[gamePlayerID][2][gameDifficulty]+1));
}

//Difficulty moderate ve hard'in açilma zamanlari
//if(pLevels[gamePlayerID][2][0]==5)	changeLevel(1, 1, 1);
//if(pLevels[gamePlayerID][2][1]==5)	changeLevel(1, 2, 1);
}
else{
$( "#popup2MathrixPlay" ).popup( "open" );
}

});


}

function playMathrixCal(qNum, point){

$('#pageMatrixPlayQuestion'+qNum).addClass("ui-disabled");
var points;
points=Number($("#pageMathrixPlaySlider").val());
points=points+Number(point);
if(points<0) points=0;
if(points>100) points=100;
$("#pageMathrixPlaySlider").val(points.toString());
$("#pageMathrixPlaySlider").slider('refresh');

}
/* pageMathrixPlay kodu sonu */






//$("#pageShootOutPlay").live("orientationchange", function() {
//alert("cem");
//});
function playShootOutRearrange(){
var w0, w1, w2, h0, h1, h2;

$("#pageShootOutPlayQuestions").find(".ui-bar").each(function(){
															  
w0=$("#pageShootOutPlayQuestions").width();
w1=$(this).width();
w2=(($("#pageShootOutPlayQuestions").offset().left+Math.floor(Math.random()*(w0-w1-10)))*100/$(window).width()).toString();


if(w1<w0){
$(this).css("left",w2+"%");
}

h0=$("#pageShootOutPlayQuestions").height();
h1=$(this).height();
h2=($("#pageShootOutPlayQuestions").offset().top+Math.floor(Math.random()*(h0-h1))).toString();

$(this).css("top",h2+"px");
//alert(w0+"-"+w1+"-"+h0+"-"+h1+"-"+$(this).attr("id"));
//alert($(this).html());
});
$("#pageShootOutPlayQuestions").trigger("create");
}



/* pageShootOutPlay kodu baslangici */
function playShootOut(level,score){
//score bu oyunda gerekli degil.
//alert("cem");
gameLevel=level;
$.mobile.changePage( $("#pageShootOutPlay") , { transition: "slide"} );

//var iQuestion=0;
//var w=[];
//var w2;
//w[0]=$("#pageShootOutPlayQuestions").width();
//
//var h=[];
//var h2;
//h[0]=$("#pageShootOutPlayQuestions").height();

//$("#pageShootOutPlayQuestions").find(".ui-bar").each(function(){
//
//
//w[1]=$("#pageShootOutPlayQuestion"+iQuestion).width();
//w2=(($("#pageShootOutPlayQuestions").offset().left+Math.floor(Math.random()*(w[0]-w[1]-10)))*100/$(window).width()).toString();
//alert(i+"-"+w[1]+"-"+w[0]);
//if(w[1]<w[0]){
//$("#pageShootOutPlayQuestion"+iQuestion).css("left",w2+"%");
//}
//
//h[1]=$("#pageShootOutPlayQuestion"+iQuestion).height();
//h2=($("#pageShootOutPlayQuestions").offset().top+Math.floor(Math.random()*(h[0]-h[1]))).toString();
//
//$("#pageShootOutPlayQuestion"+iQuestion).css("top",h2+"px");
//
//iQuestion++;
//
//});

//$("#pageShootOutPlayQuestions").trigger("create");

}


$("#pageShootOutPlay").live("pageshow", function(event, data) {
playShootOutRearrange();
})




$("#pageShootOutPlay").live("pagebeforeshow", function(event, data) {

//$("#pageShootOutPlayQuestions").html("");
//alert("cem5");
$("#pageShootOutPlayQuestions").empty();

$("#pageShootOutPlaySlider").val("0");
$("#pageShootOutPlaySlider").slider('refresh');

gameLevelsConfig();	//Oyunlarin, seviyeye bagli olarak ayarlari belirleniyor

gameDifficulty=lastSelDif[gamePlayerID][4];

//iRand ile Denklem olusturmakta kullanilacak seçeneklerin bulundugu yer belirlenecek
var iRand=Math.floor(Math.random()*gameDigit.length);

var result=[];	//result[0]; Esitligin html kodu	result[1]; Esitligin hesaplanan sonucu
var result2; //result2; Esitligin hesaplanan sonucundan farkli (veya farksiz) gösterilecek sonuç
var result3 =""; //result3; bütün sorulari barindiran degisken




for(iQuestion=0;iQuestion<3;iQuestion++){

result =creatEquation(iRand); 
result2=createResult(result[1]);

var eqSign=[];	//Esitsiligin isaretini belirlemekte kullanilacak
var eqRes;		//Esitsizligin dogrulugu veya yanlisligi
var point;		//Dogru veya yanlis cevapta eklenecek veya çikarilacak puan
point=1;
if(gameDifficulty==0) point=25;
if(gameDifficulty==1) point=2;

eqSign[0]=Math.floor(Math.random()*6);	//A6 isaretten birini alacak
eqSign[0]=0;

if(eqSign[0]==0){	//Esitlik isareti
eqSign[1]="=";
eqRes=(-1)*point;
if(result[1]==result2) eqRes=point;
}
else if(eqSign[0]==1){	//Esitsizlik isareti
eqSign[1]="&ne;";
eqRes=(-1)*point;
if(result[1]!=result2) eqRes=point;
}
else if(eqSign[0]==2){	//Büyük isareti
eqSign[1]=">";
eqRes=(-1)*point;
if(result[1]>result2) eqRes=point;
}
else if(eqSign[0]==3){	//Büyük esit isareti
eqSign[1]="&ge;";
eqRes=(-1)*point;
if(result[1]>=result2) eqRes=point;
}
else if(eqSign[0]==4){	//Küçük isareti
eqSign[1]="<";
eqRes=(-1)*point;
if(result[1]<result2) eqRes=point;
}
else if(eqSign[0]==5){	//Küçük esit isareti
eqSign[1]="&le;";
eqRes=(-1)*point;
if(result[1]<=result2) eqRes=point;
}

result[0]='<div id="pageShootOutPlayQuestion'+iQuestion+'" class="ui-bar ui-bar-d ui-corner-all pageShootOutQuestion ui-bar2" style="position:absolute; clear:none; float:none; width:auto;"><table align="center" border="0"><tbody><tr><td><span id="id'+iQuestion+'"></span><img src="images/delete.png" onclick="playShootOutCal(\''+iQuestion+'\',\''+(eqRes*(-1))+'\')"></td><td><table align="center" border="0"><tbody><tr>'+result[0]+'<td>'+eqSign[1]+'</td><td>'+result2+'</td></tr></tbody></table></td><td align="right"><img src="images/check.png" onclick="playShootOutCal(\''+iQuestion+'\',\''+eqRes+'\')"></td></tr></tbody></table></div>';

result3=$("#pageShootOutPlayQuestions").html()+result[0];

//$("#pageShootOutPlayQuestions").html(result3);
$("#pageShootOutPlayQuestions").append(result[0]).trigger("create");

}
//alert($("#pageShootOutPlayQuestions").html());



});

function playShootOutCal(qNum, point){
//alert($('#pageShootOutPlayQuestion'+qNum).css("top"));
$('#pageShootOutPlayQuestion'+qNum).addClass("ui-disabled");
$("#pageShootOutPlayQuestion"+qNum).css("visibility","hidden");
var points;
points=Number($("#pageShootOutPlaySlider").val());
points=points+Number(point);
if(points<0) points=0;
if(points>100) points=100;
$("#pageShootOutPlaySlider").val(points.toString());
$("#pageShootOutPlaySlider").slider('refresh');

}
/* pageShootOutPlay kodu sonu */

























/* pageMathrisPlay kodu baslangici */
function playMathris(level,score){
var mathrisBlock=[[]];
$.mobile.changePage( $("#pageMathrisPlay") , { transition: "slide"} );

if(score==0){
gameLevel=level;
$("#pageMathrisPlaySlider").val(score.toString());
$("#pageMathrisPlaySlider").slider('refresh');
}

gameLevelsConfig();	//Oyunlarin, seviyeye bagli olarak ayarlari belirleniyor
gameDifficulty=lastSelDif[gamePlayerID][2];


var qID;
if($("#pageMathrisPlayQuestions").children().length>0){
qID=$("#pageMathrisPlayQuestions div:last-child").attr("id");
//alert("qID =" +qID);
qNo=qID.split("pageMathrisPlayQuestion");
iQuestion=Number(qNo[1])+1;
}
else{
iQuestion=0;
$("#pageMathrisPlayQuestions").html("");
}



//if(iQuestion==null){
//iQuestion=0;
//$("#pageMathrisPlayQuestions").html("");
//}
//else if(iQuestion==""){
//iQuestion=iQuestion+1;
//alert("iQuestion else if ="+iQuestion)
//}




//iRand ile Denklem olusturmakta kullanilacak seçeneklerin bulundugu yer belirlenecek
var iRand=Math.floor(Math.random()*gameDigit.length);

var result= [];	//result[0]; Esitligin html kodu	result[1]; Esitligin hesaplanan sonucu
var result2; //result2; Esitligin hesaplanan sonucundan farkli (veya farksiz) gösterilecek sonuç
var result3; //result3; bütün sorulari barindiran degisken
//if (result3==null) result3="";


//for(iQuestion=0;iQuestion<2;iQuestion++){

result =creatEquation(iRand); 
result2=createResult(result[1]);

var eqSign=[];	//Esitsiligin isaretini belirlemekte kullanilacak
var eqRes;		//Esitsizligin dogrulugu veya yanlisligi
var point;		//Dogru veya yanlis cevapta eklenecek veya çikarilacak puan
point=1;
if(gameDifficulty==0) point=25;
if(gameDifficulty==1) point=2;

eqSign[0]=Math.floor(Math.random()*6);	//A6 isaretten birini alacak
eqSign[0]=0;

if(eqSign[0]==0){	//Esitlik isareti
eqSign[1]="=";
eqRes=(-1)*point;
if(result[1]==result2) eqRes=point;
}
else if(eqSign[0]==1){	//Esitsizlik isareti
eqSign[1]="&ne;";
eqRes=(-1)*point;
if(result[1]!=result2) eqRes=point;
}
else if(eqSign[0]==2){	//Büyük isareti
eqSign[1]=">";
eqRes=(-1)*point;
if(result[1]>result2) eqRes=point;
}
else if(eqSign[0]==3){	//Büyük esit isareti
eqSign[1]="&ge;";
eqRes=(-1)*point;
if(result[1]>=result2) eqRes=point;
}
else if(eqSign[0]==4){	//Küçük isareti
eqSign[1]="<";
eqRes=(-1)*point;
if(result[1]<result2) eqRes=point;
}
else if(eqSign[0]==5){	//Küçük esit isareti
eqSign[1]="&le;";
eqRes=(-1)*point;
if(result[1]<=result2) eqRes=point;
}
//alert("iq="+iQuestion);

// style="width:100%;"
result[0]='<div id="pageMathrisPlayQuestion'+iQuestion+'" class="ui-bar ui-bar-d ui-corner-all pageMathrisQuestion ui-bar2 moving" style="position:absolute; clear:none; float:none; width:100%;"><table align="center" border="0"><tbody><tr><td><span id="id'+iQuestion+'"></span><img src="images/delete.png" onclick="playMathrisCal(\''+iQuestion+'\',\''+(eqRes*(-1))+'\',\''+level+'\')"></td><td><table align="center" border="0"><tbody><tr>'+result[0]+'<td>'+eqSign[1]+'</td><td>'+result2+'</td></tr></tbody></table></td><td align="right"><img src="images/check.png" onclick="playMathrisCal(\''+iQuestion+'\',\''+eqRes+'\',\''+level+'\')"></td></tr></tbody></table></div>';

result3=$("#pageMathrisPlayQuestions").html()+result[0];
//alert("-"+$("#pageMathrisPlayQuestions").html()+"-");
$("#pageMathrisPlayQuestions").html(result3);
mathrisQuestionMove(level, iQuestion);








//alert("-"+$("#pageMathrisPlayQuestions").html()+"-");

/*w[1]=$("#pageMathrisPlayQuestion"+iQuestion).width();
w2=(($("#pageMathrisPlayQuestions").offset().left+Math.floor(Math.random()*(w[0]-w[1]-10)))*100/$(window).width()).toString();
if(w[1]<w[0]){
//$("#pageShootOutPlayQuestion"+iQuestion).css("left","100px");
//$("#pageMathrisPlayQuestion"+iQuestion).css("left",w2+"%");
}*/



/*var w=[];
var w2;
w[0]=$("#pageMathrisPlayQuestions").width();*/

//var h=[];
//var h2;
//
//h[0]=$("#pageMathrisPlayQuestions").height();
//
//
////h[1]=$("#pageMathrisPlayQuestion"+iQuestion).height()*(-1);
//h[1]=$("#pageMathrisPlayQuestion"+iQuestion).outerHeight();
//h2=($("#pageMathrisPlayQuestions").offset().top+Math.floor(Math.random()*(h[0]-h[1]))).toString();
////h2=(iQuestion==1)?-10:-100;
//h2=$("#pageMathrisPlayQuestions").height()-$("#pageMathrisPlayQuestion"+iQuestion).height();
////h2=-10;
////if(h[1]<h[0]){
////$("#pageShootOutPlayQuestion"+iQuestion).css("top","100px");
//$("#pageMathrisPlayQuestion"+iQuestion).css("top","-"+h[1]+"px");
////}
////$("#id"+iQuestion).html("i ="+iQuestion+" t ="+h2+" l ="+w2+" ");
////alert("iQuestion="+iQuestion+" h[0] ="+h[0]+" h[1] ="+h[1]+" w[0] ="+w[0]+" w[1] ="+w[1]+" h2 ="+h2+" w2 ="+w2);
////alert($("#pageMathrisPlayQuestion"+iQuestion).height());
////alert($("#pageMathrisPlayQuestion"+iQuestion).outerHeight());
//var iLen=$("#pageMathrisPlayQuestions").children().length;	//mathrisBlock.length; olmadi
////alert($("#pageMathrisPlayQuestions").children().length);
//mathrisBlock[iLen]=[iQuestion, 0];
////[id degeri, yanlis cevap verilip verilmedigi (0 veya 1)]
////0: Hiç cevap verilmedigi
////1: Yanlis cevap verildigi
//
//
//var mathrisSetInt;
////alert("cem");
//
//mathrisSetInt=setInterval(function(){
//var t2, t3;
//t3=0;
//
//var iLen=$("#pageMathrisPlayQuestions").children().length;	
//for(i=1;i<iLen+1;i++){
//t3=t3+$("#pageMathrisPlayQuestions div:nth-child("+i+")").outerHeight();
//}
///*-$("#pageMathrisPlayQuestion"+iQuestion).outerHeight()*/
//t3=$("#pageMathrisPlayQuestions").outerHeight()+$("#pageMathrisPlayQuestions").offset().top-t3-3;
//
//t2=$("#pageMathrisPlayQuestion"+iQuestion).offset().top;
//
//if(t2>=t3){
//window.clearInterval(mathrisSetInt);
//playMathris(level, iQuestion+1)
//return false;
//}
//else{
//$("#pageMathrisPlayQuestion"+iQuestion).css("top","+=1px");
//}
//					   },10);
/*$("#pageMathrisPlayQuestion"+iQuestion).animate({
top: h2
}, 5000, 'linear', function() {
// Animation complete.

});*/
//}


}

//Kullanilmiyor
function questionMove(moveStep, moveTime, t, t2, qGap, i){
//alert(moveStep+" - "+moveTime+" - "+t+" - "+t2+" - "+qGap+" - "+i);
//alert("i = "+i);
i=i-1;
if(t>t2+moveStep){
$("#pageMathrisPlayQuestion"+iQuestion).css("top","+="+moveStep+"px");
}
else if(t>t2+qGap){
t=t2+qGap;
$("#pageMathrisPlayQuestion"+iQuestion).css("top", t+"px");
}
else{
window.clearInterval(mathrisSetInt[i]);
}
}


function qMNew(level){
var qMLen;
qMLen=$("#pageMathrisPlayQuestions").children(".moving").length;
if(qMLen==0){
playMathris(level);
}
}



function mathrisQuestionMove(level, iQuestion){
var moveStep=50;	//moveStep : Her adimda kayacak miktar.
var moveTime=10;	//moveTime: Her adimida beklenecek süre
var qGap=10;		//questionGap: Her soru arasindaki mesafe
var mathrisSetInt=[];
var t,t2;

var qLen=$("#pageMathrisPlayQuestions").children().length;	
//alert("qLen= "+qLen+" i= "+i);
for(i=1;i<qLen+1;i++){
t=0; //top
for(i2=1;i2<i+1;i2++){	//Önceki sorularin yükseklikleri hesaplaniyor.
if(t==""){
t=$("#pageMathrisPlayQuestions div:nth-child("+i2+")").outerHeight();
}
else{
t=t+$("#pageMathrisPlayQuestions div:nth-child("+i2+")").outerHeight()+qGap;
}
}
t2=$("#pageMathrisPlayQuestions").outerHeight();
//alert("t= "+t+" -t2= "+t2);
if(t>t2){
return false;
//Ekran doldu, oyunun sonu.
}

//i. sorunun olmasi gereken "top" degeri hesaplaniyor
t=$("#pageMathrisPlayQuestions").outerHeight()+$("#pageMathrisPlayQuestions").offset().top-t;
//t=$("#pageMathrisPlayQuestions").outerHeight()+$("#pageMathrisPlayQuestions").offset().top-t-qGap;

//i. sorunun su anki "top" degeri
t2=$("#pageMathrisPlayQuestions div:nth-child("+i+")").offset().top+qGap;


//moveStep>qGap olma durumu düsünüldü
if(t>=t2+moveStep){

mathrisSetInt[i]=setInterval(function (){
var t3, t4;

qLen=$("#pageMathrisPlayQuestions").children().length;

for(i3=1;i3<qLen+1;i3++){
t3=0;	
for(i4=1;i4<i3+1;i4++){	//Önceki sorularin yükseklikleri hesaplaniyor.
if(t3==""){
t3=$("#pageMathrisPlayQuestions div:nth-child("+i4+")").outerHeight();
}
else{
t3=t3+$("#pageMathrisPlayQuestions div:nth-child("+i4+")").outerHeight()+qGap;
}
}
t4=$("#pageMathrisPlayQuestions").outerHeight();

if((t3>=t4+moveStep)){
//alert("oyun bitti");
return false;
//Ekran doldu, oyunun sonu.
}

//i3. sorunun olmasi gereken "top" degeri hesaplaniyor
t3=$("#pageMathrisPlayQuestions").outerHeight()+$("#pageMathrisPlayQuestions").offset().top-t3;

//i3. sorunun su anki "top" degeri
t4=$("#pageMathrisPlayQuestions div:nth-child("+i3+")").offset().top+qGap;


//moveStep>qGap olma durumu düsünüldü
if(t3>=t4+moveStep){
$("#pageMathrisPlayQuestions div:nth-child("+i3+")").css("top","+="+moveStep+"px");
}
//else if(t3>t4){
////alert("elseif");
//$("#pageMathrisPlayQuestions div:nth-child("+i3+")").css("top", t3.toString+"px");
//$("#pageMathrisPlayQuestions div:nth-child("+i3+")").removeClass("moving");
//window.clearInterval(mathrisSetInt[i3]);
//qMNew(level, iQuestion);
//}
else{
//alert("else");
$("#pageMathrisPlayQuestions div:nth-child("+i3+")").css("top", (t3+qGap).toString+"px");
$("#pageMathrisPlayQuestions div:nth-child("+i3+")").removeClass("moving");
window.clearInterval(mathrisSetInt[i3]);
qMNew(level, iQuestion);
}
}
}, moveTime);


}
/*else if(t>t2){
$("#pageMathrisPlayQuestions div:nth-child("+i+")").css("top", t.toString+"px");
$("#pageMathrisPlayQuestions div:nth-child("+i+")").removeClass("moving");
window.clearInterval(mathrisSetInt[i]);
qMNew(level, iQuestion);
}*/
else{
$("#pageMathrisPlayQuestions div:nth-child("+i+")").css("top", (t+qGap).toString+"px");
$("#pageMathrisPlayQuestions div:nth-child("+i+")").removeClass("moving");
window.clearInterval(mathrisSetInt[i]);
qMNew(level, iQuestion);
}

}

//alert("cem");
}



function playMathrisCal(qNum, point, level){
	
//alert($('#pageMathrisPlayQuestion'+qNum).css("top"));
//window.clearInterval(mathrisSetInt);
//alert(point);
if(Number(point)<=0){	//Cevap yanlis ise
//alert("yanlis")
$('#pageMathrisPlayQuestion'+qNum).addClass("ui-disabled");
qMNew(level);
}
else{	//Cevap dogru ise
//alert("dogru");
$("#pageMathrisPlayQuestion"+qNum).remove();
qMNew(level);
//mathrisBlock içindende silinmesi lazim

}

//$('#pageMathrisPlayQuestion'+qNum).stop();//addClass("ui-disabled");
//$("#pageMathrisPlayQuestion"+qNum).css("visibility","hidden");
var points;
points=Number($("#pageMathrisPlaySlider").val());
points=points+Number(point);
if(points<0) points=0;
if(points>100) points=100;
$("#pageMathrisPlaySlider").val(points.toString());
$("#pageMathrisPlaySlider").slider('refresh');

}
/* pageMathrisPlay kodu sonu */


/* Page kodu baslangici */
/* Page kodu sonu */


/* Page kodu baslangici */
/* Page kodu sonu */


/* Page kodu baslangici */
/* Page kodu sonu */



/* Page kodu baslangici */
/* Page kodu sonu */