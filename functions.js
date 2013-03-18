/*
* tGame - Crazy Math code
* Fonksiyonlar, sayfalarin açilis sirasina göre dizilidir
*/




/* Dil seçeneklerini yazmak için kullanilacak kod baslangiç
 if(langSelVal=="de"){	//Deutsch - Almanca
}
else if(langSelVal=="es"){	//Espanol - Ispanyolca
}
else if(langSelVal=="fr"){	//Français - Fransizca
}
else if(langSelVal=="it"){	//Italiano - Italyanca
}
else if(langSelVal=="tr"){	//Türkçe
}
else{	//langSelVal=="en"		Ingilizce
//Hiç bir dil seçili degilse otomatik Ingilizce olacak
}
/* Dil seçeneklerini yazmak için kullanilacak kod sonu */

function closePageToPlayers(){
gamePlayerID=0;
$.mobile.changePage( $("#pagePlayers") , { transition: "slide"} );
}

function openPagePlayerRename(id){
gamePlayerID=id;
$.mobile.changePage( $("#pagePlayerRename") , { transition: "slide"} );
}

$("#pagePlayerRename").live('pagebeforeshow', function(event){
$("#pagePlayerRenameContent").find("#pagePlayerRenameButton").attr("onclick","gamePlayerRename("+gamePlayerID+");");
$("#pagePlayerRenameContent").find("#pagePlayerRenamePlayerName").html(pName[gamePlayerID]);
$("#pagePlayerRenameContent").find("#newname").val("");
});


function openPagePlayerDelete(id){
gamePlayerID=id;
$.mobile.changePage( $("#pagePlayerDelete") , { transition: "slide"} );
}

$("#pagePlayerDelete").live('pagebeforeshow', function(event){
$("#pagePlayerDeleteContent").find("#pagePlayerDeleteButton").attr("onclick","gamePlayerDelete("+gamePlayerID+");");
$("#pagePlayerDeleteContent").find("#pagePlayerDeletePlayerName").html(pName[gamePlayerID]);
});


function openPagePlayerCreate(){
$.mobile.changePage( $("#pagePlayerCreate") , { transition: "slide"} );
$("#pagePlayerCreateContent").find("#createPlayerName").val("");
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
pagePlayersLanguageChange(gameLang);
}





//Deneme amaçli degerler
gameNumber = [[1,2]];	//null; //gameNumber=[[1]];	//[[1,2],[1,2,3],[1]];
gameOperation=[[1]];	//[[1,2],[1,2,3],[1]];
gameOCount=[[1]];
gameDigit=[[1]];
gameDifficulty=1;	//0,1,2



function createMul(iRand, iDig){
var digitMul=1;
//0-9, 10-99, 100-999, 1000-9999, 10000-99999 arasi rakkam üreten çarpan
for(i=0;i<gameDigit[iRand][iDig];i++){
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

if (gameNumber[iRand][iNum]==1){	//Tam sayi
cNumber[0]=1;
cNumber[1]=Math.floor(Math.random()*digitMul).toString();
}
else if (gameNumber[iRand][iNum]==2){	//Ondalik sayi
cNumber[0]=2;
cNumber[1]=(Math.random()*digitMul).toFixed(gameDigit[iRand][iDig]).toString();
}
else if (gameNumber[iRand][iNum]==3){	//Kesirli sayi
cNumber[0]=3;
cNumber[1]=Math.floor(Math.random()*digitMul).toString();
iDig=Math.floor(Math.random()*gameDigit[iRand].length);	
digitMul=createMul(iRand, iDig);
cNumber[2]=Math.floor(Math.random()*digitMul).toString();
}
else if (gameNumber[iRand][iNum]==4){	//Üslü sayi
cNumber[0]=4;
cNumber[1]=Math.floor(Math.random()*digitMul).toString();
iDig=Math.floor(Math.random()*gameDigit[iRand].length);	
digitMul=createMul(iRand, iDig);
cNumber[2]=Math.floor(Math.random()*digitMul).toString();
}
else if (gameNumber[iRand][iNum]==5){	//Köklü sayi
cNumber[0]=5;
cNumber[1]=Math.floor(Math.random()*digitMul).toString();
iDig=Math.floor(Math.random()*gameDigit[iRand].length);	
digitMul=createMul(iRand, iDig);
cNumber[2]=Math.floor(Math.random()*digitMul).toString();
}

return cNumber;
}


function creatEquation(){
	
var result=[];	//0 = html kodu,	1 = kodda yazanin hesaplanan degeri
var result2=[];	//0 = html kodu,	1 = kodda yazanin hesaplanan degeri
var cNumber=[];	//Olusturulan sayi

//iRand ile Denklem olusturmakta kullanilacak seçeneklerin bulundugu yer belirlenecek
var iRand=Math.floor(Math.random()*gameDigit.length);
//var eqCode, eqCode;	//Sayfada gösterilecek kod;

//Hangi hane sayisi kullanilacagi belirlenecek
var iOCount=Math.floor(Math.random()*gameDigit[iRand].length);	

cNumber=createNumber(iRand);
//alert("cem cNumber="+cNumber[0]+" "+cNumber[1]+" "+cNumber[2]);
if(cNumber[0]==1){
result[0]='<td>'+cNumber[1]+'</td>';
result[1]=Number(cNumber[1]);
}
else if(cNumber[0]==2){
result[0]='<td>'+cNumber[1]+'</td>';
result[1]=Number(cNumber[1]);
}
else if(cNumber[0]==3){
if(cNumber[2]==0) cNumber[2]="1";
result[0]='<td>'+cNumber[1]+'<hr>'+cNumber[2]+'</td>';
result[1]=Number(cNumber[1])/Number(cNumber[2]);
}
else if(cNumber[0]==4){
result[0]='<td>'+cNumber[1]+'<sup>'+cNumber[2]+'</sup></td>';
result[1]=Math.pow(Number(cNumber[1]), Number(cNumber[2]));
}
else if(cNumber[0]==5){
if(cNumber[2]==0) cNumber[2]="1";
result[0]='<td><sup>'+cNumber[1]+'</sup>&radic;'+cNumber[2]+'</td>';
result[1]=Math.pow(Number(cNumber[1]), 1/Number(cNumber[2]));
}
//alert("cem result 1 ="+result[0]+" "+result[1]);
var iOper;	//Hangi islemin kullanilacagini belirlemede kullanilacak

for(i2=0;i2<gameOCount[iRand][iOCount];i2++){

cNumber=createNumber(iRand);

iOper=Math.floor(Math.random()*gameOperation[iRand].length);	
//alert("cem op = "+iOper);
//alert("cem cNumber 2 ="+cNumber[0]+" "+cNumber[1]+" "+cNumber[2]);


if(cNumber[0]==1){
result2[0]='<td>'+cNumber[1]+'</td>';
result2[1]=Number(cNumber[1]);
}
else if(cNumber[0]==2){
result2[0]='<td>'+cNumber[1]+'</td>';
result2[1]=Number(cNumber[1]);
}
else if(cNumber[0]==3){
if(cNumber[2]==0) cNumber[2]="1";
result2[0]='<td>'+cNumber[1]+'<hr>'+cNumber[2]+'</td>';
result2[1]=Number(cNumber[1])/Number(cNumber[2]);
}
else if(cNumber[0]==4){
result2[0]='<td>'+cNumber[1]+'<sup>'+cNumber[2]+'</sup></td>';
result2[1]=Math.pow(Number(cNumber[1]), Number(cNumber[2]));
}
else if(cNumber[0]==5){
if(cNumber[2]==0) cNumber[2]="1";
result2[0]='<td><sup>'+cNumber[1]+'</sup>&radic;'+cNumber[2]+'</td>';
result2[1]=Math.pow(Number(cNumber[1]), 1/Number(cNumber[2]));
}


if(gameOperation[iRand][iOper]==1){
result[0]=result[0]+'<td>+</td>'+result2[0];
result[1]=result[1]+result2[1];
}
else if(gameOperation[iRand][iOper]==2){
result[0]=result[0]+'<td>-</td>'+result2[0];
result[1]=result[1]-result2[1];
}
else if(gameOperation[iRand][iOper]==3){
result[0]=result[0]+'<td>x</td>'+result2[0];
result[1]=result[1]*result2[1];
}
else if(gameOperation[iRand][iOper]==4){
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

$.mobile.changePage( $("#pagePlayers") );
}
/* pageLang kodu sonu */



/* pageGameSettings kodu baslangici */
function langChangeSelect() {
var lang;
lang=$("#langSelect").val();
if(lang!=""){
gameLang=lang;
gameLangChange();	//tarayicida çalismayi önler
gameLanguageChanged();
}
//gameLangChange(lang);		//Tarayicida çalismayi önler

};
/* pageGameSettings kodu sonu */










 
/* pagePlayers kodu baslangici */





//pagePlayer sayfasinin dilini degistiren kod
function pagePlayersLanguageChange(lang){
//Dil degisimi ile sayfada yazilar degisecek

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


//s= &#351;

// diller 	[ 0=de, 1=es, 2=fr, 3=it, 4=tr, 5=en]
var langLabel=["Sprache :", "Idioma", "Langue", "Lingua", "Dil :", "Language :"];
var playerDelSpan=["L&ouml;schen", "Borrar", "Effacer", "Cancellare", "Sil", "Delete"];
var newPlayerH=["Erstellen Neuer Spieler :", "Crear Nuevo Jugador", "Cr&eacute;er nouveau joueur", "Crea Nuovo Giocatore", "Yeni Oyuncu Olu&#351;tur :", "Create New Player :"];
var playerNameLabel= ["Name", "Nombre", "Nom", "Nome", "Isim", "Name"];
var playerCreateSpan=["Schaffen", "Crear", "Cr&eacute;er", "Creare", "Olu&#351;tur", "Create"];
var playersH=["Spieler :", "Jugadores :", "Joueurs :", "Giocatori :", "Oyuncular :", "Players :"];

var levelSpanFreemode=["Free Mode", "Free Mode", "Free Mode", "Free Mode", "Free Mode", "Free Mode"];

var levelSpanFindout=["Find-Out", "Find-Out", "Find-Out", "Find-Out", "Find-Out", "Find-Out"];
var levelSpanMathris=["Mathris", "Mathris", "Mathris", "Mathris", "Mathris", "Mathris"];
var levelSpanMathrix=["Mathrix", "Mathrix", "Mathrix", "Mathrix", "Mathrix", "Mathrix"];
var levelSpanShootout=["Shoot-Out", "Shoot-Out", "Shoot-Out", "Shoot-Out", "Shoot-Out", "Shoot-Out"];



var langID=5; //langSelVal=="en" Ingilizce //Hiç bir dil seçili degilse otomatik Ingilizce olacak

if(lang=="de"){	//Deutsch - Almanca
langID=0;
}
else if(lang=="es"){	//Espanol - Ispanyolca
langID=1;
}
else if(lang=="fr"){	//Français - Fransizca
langID=2;
}
else if(lang=="it"){	//Italiano - Italyanca
langID=3;
}
else if(lang=="tr"){	//Türkçe
langID=4;
}

$("#langLabel").text(langLabel[langID]);
$(".playerDelSpan").html(playerDelSpan[langID]);
$("#newPlayerH").html(newPlayerH[langID]);
$("#playerNameLabel").text(playerNameLabel[langID]);
$("#playerCreateSpan").html(playerCreateSpan[langID]);
$("#playersH").html(playersH[langID]);
$(".levelSpanFreemode").html(levelSpanFreemode[langID]);
$(".levelSpanFindout").html(levelSpanFindout[langID]);
$(".levelSpanMathris").html(levelSpanMathris[langID]);
$(".levelSpanMathrix").html(levelSpanMathrix[langID]);
$(".levelSpanShootout").html(levelSpanShootout[langID]);
}




function playerCreate(){
var name;	//, name2;
name=$("#createPlayerName").val();
//name2=mysql_real_escape_string (name);
//alert("Yeni oyuncu kaydi isim "+ name+ "- Güvenli isism="+name2 );
//
//return false;
if(name!=""){
gamePlayerCreate(name);
listPagePlayersUserInfoDB();	//Yeni olusturulanla birlikte oyuncular yeniden listeleniyor
//langChangeSelect();
}
}

function playerDelete(id){
gamePlayerDelete(id);
listPagePlayersUserInfoDB();	//Silinen disindaki oyuncular yeniden listeleniyor
//langChangeSelect();
}


function playerSelect(id){
alert(id);
//Oyuncunun seçilip oyun seçimi sayfasina yönlendirme yapiliyor
gamePlayerID=id;

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

//if(pFindout[gamePlayerID]>0){
if(pFreemodeE[gamePlayerID]>0) $("#pageGameModesFreeMode").removeClass("ui-disabled");
if(pFindoutE[gamePlayerID]>0) $("#pageGameModesFindOut").removeClass("ui-disabled");
if(pMathrisE[gamePlayerID]>0) $("#pageGameModesMathris").removeClass("ui-disabled");
if(pMathrixE[gamePlayerID]>0) $("#pageGameModesMathrix").removeClass("ui-disabled");
if(pShootoutE[gamePlayerID]>0) $("#pageGameModesShootOut").removeClass("ui-disabled");
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
listPagePlayersUserInfoDBSuccess();
});

/* PagePlayers kodu sonu */




$("#pageFreeModeLevel").live("pagebeforeshow", function() {
freeModeLevels();
});


$("#pageFindOutLevel").live("pagebeforeshow", function() {
var maxLevelsNo=3;
var level;
if(lastSelFindOutDif[gamePlayerID]==3){
level=pFindOutH[gamePlayerID];
}
else if(lastSelFindOutDif[gamePlayerID]==2){
level=pFindOutM[gamePlayerID];
}
else{
level=pFindOutE[gamePlayerID];
}

gamesModesLevels("pageFindOutLevel", level, maxLevelsNo)
});

$("#pageMathrisLevel").live("pagebeforeshow", function() {
var maxLevelsNo=3;
var level;
if(lastSelFindOutDif[gamePlayerID]==3){
level=pFindOutH[gamePlayerID];
}
else if(lastSelFindOutDif[gamePlayerID]==2){
level=pFindOutM[gamePlayerID];
}
else{
level=pFindOutE[gamePlayerID];
}
gamesModesLevels("pageMathrisLevel", level, maxLevelsNo)
});

$("#pageMathrixLevel").live("pagebeforeshow", function() {
var maxLevelsNo=3;
var level;
if(lastSelFindOutDif[gamePlayerID]==3){
level=pFindOutH[gamePlayerID];
}
else if(lastSelFindOutDif[gamePlayerID]==2){
level=pFindOutM[gamePlayerID];
}
else{
level=pFindOutE[gamePlayerID];
}
gamesModesLevels("pageMathrixLevel", level, maxLevelsNo)
});

$("#pageShootOutLevel").live("pagebeforeshow", function() {
var maxLevelsNo=3;
var level;
if(lastSelFindOutDif[gamePlayerID]==3){
level=pFindOutH[gamePlayerID];
}
else if(lastSelFindOutDif[gamePlayerID]==2){
level=pFindOutM[gamePlayerID];
}
else{
level=pFindOutE[gamePlayerID];
}
gamesModesLevels("pageShootOutLevel", level, maxLevelsNo)
});


function freeModeLevels(){
//
//Ayarlar sifirlaniyor
//
//alert("sirifrlama yapilacak");
//$(".labelHard").find(".ui-btn-text").html("zooor");

if(1==1){
//Difficulty; easy eanbled ve checked, digerleri disabled
//$("#freeModeModerate").attr("checked",true).checkboxradio("refresh");
$("#freeModeEasy").attr("checked",false).checkboxradio('enable').checkboxradio("refresh");
$("#freeModeModerate").attr("checked",false).checkboxradio('disable').checkboxradio("refresh");
$("#freeModeHard").attr("checked",false).checkboxradio('disable').checkboxradio("refresh");


//$("#pageFreeModeLevel").find("#freeModeEasy").trigger("click").checkboxradio("refresh");
alert("sifirlama tamam2");
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
}

//Oyuncunun seviyesine göre seçenekler açilacak
//var x;
var level, op, num, dig, oc, sign;
level=pFreemodeE[gamePlayerID];		//lastSelFMDif[gamePlayerID]==1
op=lastSelFMEOp[gamePlayerID];
num=lastSelFMENum[gamePlayerID];
dig=lastSelFMEDig[gamePlayerID];
oc=lastSelFMEOC[gamePlayerID];
sign=lastSelFMES[gamePlayerID];

if(lastSelFMDif[gamePlayerID]==2){
level=pFreemodeM[gamePlayerID];
op=lastSelFMMOp[gamePlayerID];
num=lastSelFMMNum[gamePlayerID];
dig=lastSelFMMDig[gamePlayerID];
oc=lastSelFMMOC[gamePlayerID];
sign=lastSelFMMS[gamePlayerID];
}
else if(lastSelFMDif[gamePlayerID]==3){
level=pFreemodeH[gamePlayerID];
op=lastSelFMHOp[gamePlayerID];
num=lastSelFMHNum[gamePlayerID];
dig=lastSelFMHDig[gamePlayerID];
oc=lastSelFMHOC[gamePlayerID];
sign=lastSelFMHS[gamePlayerID];
}

switch (level){
case 6:

case 5:

case 4:

case 3:

case 2:
$("#freeModeEasy").checkboxradio('enable').checkboxradio("refresh");
$("#oAdd").checkboxradio("enable").checkboxradio('refresh');
}



}




function gamesModesLevels(mode, level, maxLevel){
//mode: hangi oyun modu için yapilacagi, sayfa adi gelecek (pageMathrisLevel) gibi
//level: oyuncunun kaçinci level'de oldugu. Böylece enable edilecek leveller belirlenecek
//maxLevel: seçilen mode'un toplam kaç level oldugu. Böylece disable edilecek leveller belirlenecek

$("#"+mode).find("#easy").trigger("click").checkboxradio("refresh");
$("#"+mode).find("#moderate").checkboxradio('disable').checkboxradio("refresh");
$("#"+mode).find("#hard").checkboxradio('disable').checkboxradio("refresh");

if(level>1){
$("#"+mode).find("#moderate").checkboxradio('enable').checkboxradio("refresh");	
}
if(level>2){
$("#"+mode).find("#hard").checkboxradio('enable').checkboxradio("refresh");
}



for (i=2;i<maxLevel+1;i++){
$("#"+mode).find("#level"+i.toString()).removeClass("ui-disabled");	//Varsa, kaldirmis olacak
$("#"+mode).find("#level"+i.toString()).addClass("ui-disabled");
}
for (i=2;i<level+1;i++){
$("#"+mode).find("#level"+i.toString()).removeClass("ui-disabled");
}
}



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

function goster (){
//seçili radio dügmesinin degerini ögrenme

$("#pageFreeModeLevel .labelEasy").removeClass("ui-radio-off ui-radio-on ui-focus ui-btn-active");
//$("#pageFreeModeLevel .labelEasy").attr("checked", false);
$("#pageFreeModeLevel .labelEasy").removeAttr("checked");
$("#pageFreeModeLevel .labelModerate").removeClass("ui-radio-off ui-radio-on ui-focus ui-btn-active");
//$("#pageFreeModeLevel .labelModerate").attr("checked", false);
//$("#pageFreeModeLevel .labelModerate").removeAttr("checked");
$("#pageFreeModeLevel .labelHard").removeClass("ui-radio-off ui-radio-on ui-focus ui-btn-active");
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
	alert("cemmm");
//$("#pageFreeModeLevel .labelModerate").addClass("ui-radio-on ui-focus ui-btn-active");

//$("#pageFreeModeLevel [name=gDifficulty]").removeAttr("checked");
//$("#pageFreeModeLevel .labelModerate").addClass("ui-radio-on ui-btn-active");
$("#freeModeModerate").attr("checked",true).checkboxradio("refresh");
$("#freeModeModerate").attr("checked",false).checkboxradio("refresh");

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
alert("cem");
}


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
function playFreeMode(){


var varNum=[];
if($("#nInt").attr('checked')){
varNum[varNum.length]=1;
}
if($("#nDec").attr('checked')){
varNum[varNum.length]=2;
}
if($("#nRat").attr('checked')){
varNum[varNum.length]=3;
}
if($("#nExp").attr('checked')){
varNum[varNum.length]=4;
}
if($("#nRoo").attr('checked')){
varNum[varNum.length]=5;
}

gameNumber=[varNum];


//alert("cem "+gameDigit[2][0]);
$.mobile.changePage( $("#pageFreeModePlay") , { transition: "slide"} );
var result= [];	//result[0]; Esitligin html kodu	result[1]; Esitligin hesaplanan sonucu
var result2; //result2; Esitligin hesaplanan sonucundan farkli (veya farksiz) gösterilecek sonuç


result =creatEquation(); 
result2=createResult(result[1]);

var eqSign=[];	//Esitsiligin isaretini belirlemekte kullanilacak
var eqRes;		//Esitsizligin dogrulugu veya yanlisligi
var point;		//Dogru veya yanlis cevapta eklenecek veya çikarilacak puan
point=1;

eqSign[0]=Math.floor(Math.random()*6);
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
playFreeMode();
}
/* pageFreeModePlay kodu sonu */







/* pageFindOutPlay kodu baslangici */
function playFindOut(level){
$.mobile.changePage( $("#pageFindOutPlay") , { transition: "slide"} );

var result= [];	//result[0]; Esitligin html kodu	result[1]; Esitligin hesaplanan sonucu
var result2; //result2; Esitligin hesaplanan sonucundan farkli (veya farksiz) gösterilecek sonuç

result =creatEquation(); 
result2=createResult(result[1]);

var eqSign=[];	//Esitsiligin isaretini belirlemekte kullanilacak
var eqRes=[];		//Esitsizligin dogrulugu veya yanlisligi
var point;		//Dogru veya yanlis cevapta eklenecek veya çikarilacak puan
point=1;

eqSign[0]=Math.floor(Math.random()*6);
eqSign[0]=0;

eqRes[0]=point;//Esitlik isareti
eqRes[1]=point;//Esitsizlik isareti
eqRes[2]=point;//Büyük isareti
eqRes[3]=point;//Büyük esit isareti
eqRes[4]=point;//Küçük isareti
eqRes[5]=point;//Küçük esit isareti

if(result[1]==result2){
eqRes[1]=point*(-1);
eqRes[2]=point;
eqRes[4]=point;
}
if(result[1]>result2){
eqRes[0]=point*(-1);
eqRes[4]=point;
eqRes[5]=point;
}
if(result[1]<result2){
eqRes[0]=point*(-1);
eqRes[1]=point;
eqRes[2]=point;
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
playFindOut();
}
/* pageFindOutPlay kodu sonu */







/* pageMathrixPlay kodu baslangici */
function playMathrix(level){
$('#pageMathrixPlayQuestions').stop();
$.mobile.changePage( $("#pageMathrixPlay") , { transition: "slide"} );

var result= [];	//result[0]; Esitligin html kodu	result[1]; Esitligin hesaplanan sonucu
var result2; //result2; Esitligin hesaplanan sonucundan farkli (veya farksiz) gösterilecek sonuç
var result3 =""; //result3; bütün sorulari barindiran degisken

for(iQuestion=0;iQuestion<10;iQuestion++){

result =creatEquation(); 
result2=createResult(result[1]);

var eqSign=[];	//Esitsiligin isaretini belirlemekte kullanilacak
var eqRes;		//Esitsizligin dogrulugu veya yanlisligi
var point;		//Dogru veya yanlis cevapta eklenecek veya çikarilacak puan
point=1;

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
}, 50000, 'linear', function() {
// Animation complete.
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










/* pageShootOutPlay kodu baslangici */
function playShootOut(level){

$("#pageShootOutPlayQuestions").html("");

$.mobile.changePage( $("#pageShootOutPlay") , { transition: "slide"} );

var result= [];	//result[0]; Esitligin html kodu	result[1]; Esitligin hesaplanan sonucu
var result2; //result2; Esitligin hesaplanan sonucundan farkli (veya farksiz) gösterilecek sonuç
var result3 =""; //result3; bütün sorulari barindiran degisken

var w=[];
var w2;
w[0]=$("#pageShootOutPlayQuestions").width();

var h=[];
var h2;
h[0]=$("#pageShootOutPlayQuestions").height();


for(iQuestion=0;iQuestion<10;iQuestion++){

result =creatEquation(); 
result2=createResult(result[1]);

var eqSign=[];	//Esitsiligin isaretini belirlemekte kullanilacak
var eqRes;		//Esitsizligin dogrulugu veya yanlisligi
var point;		//Dogru veya yanlis cevapta eklenecek veya çikarilacak puan
point=1;

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


// style="width:100%;"
result[0]='<div id="pageShootOutPlayQuestion'+iQuestion+'" class="ui-bar ui-bar-d ui-corner-all pageShootOutQuestion ui-bar2" style="position:absolute; clear:none; float:none; width:auto;"><table align="center" border="0"><tbody><tr><td><span id="id'+iQuestion+'"></span><img src="images/delete.png" onclick="playShootOutCal(\''+iQuestion+'\',\''+(eqRes*(-1))+'\')"></td><td><table align="center" border="0"><tbody><tr>'+result[0]+'<td>'+eqSign[1]+'</td><td>'+result2+'</td></tr></tbody></table></td><td align="right"><img src="images/check.png" onclick="playShootOutCal(\''+iQuestion+'\',\''+eqRes+'\')"></td></tr></tbody></table></div>';

result3=$("#pageShootOutPlayQuestions").html()+result[0];

$("#pageShootOutPlayQuestions").html(result3);


w[1]=$("#pageShootOutPlayQuestion"+iQuestion).width();
w2=(($("#pageShootOutPlayQuestions").offset().left+Math.floor(Math.random()*(w[0]-w[1]-10)))*100/$(window).width()).toString();
if(w[1]<w[0]){
//$("#pageShootOutPlayQuestion"+iQuestion).css("left","100px");
$("#pageShootOutPlayQuestion"+iQuestion).css("left",w2+"%");
}


h[1]=$("#pageShootOutPlayQuestion"+iQuestion).height();
h2=($("#pageShootOutPlayQuestions").offset().top+Math.floor(Math.random()*(h[0]-h[1]))).toString();
//if(h[1]<h[0]){
//$("#pageShootOutPlayQuestion"+iQuestion).css("top","100px");
$("#pageShootOutPlayQuestion"+iQuestion).css("top",h2+"px");
//}
//$("#id"+iQuestion).html("i ="+iQuestion+" t ="+h2+" l ="+w2+" ");
//alert("iQuestion="+iQuestion+" h[0] ="+h[0]+" h[1] ="+h[1]+" w[0] ="+w[0]+" w[1] ="+w[1]+" h2 ="+h2+" w2 ="+w2);


}


}

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
function playMathris(level){
var mathrisBlock=[[]];

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


$.mobile.changePage( $("#pageMathrisPlay") , { transition: "slide"} );

var result= [];	//result[0]; Esitligin html kodu	result[1]; Esitligin hesaplanan sonucu
var result2; //result2; Esitligin hesaplanan sonucundan farkli (veya farksiz) gösterilecek sonuç
var result3; //result3; bütün sorulari barindiran degisken
//if (result3==null) result3="";


//for(iQuestion=0;iQuestion<2;iQuestion++){

result =creatEquation(); 
result2=createResult(result[1]);

var eqSign=[];	//Esitsiligin isaretini belirlemekte kullanilacak
var eqRes;		//Esitsizligin dogrulugu veya yanlisligi
var point;		//Dogru veya yanlis cevapta eklenecek veya çikarilacak puan
point=1;

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
alert("cem");
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