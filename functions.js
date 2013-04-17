/*
* tGame - Crazy Math code
* Fonksiyonlar, sayfalarin açilis sirasina göre dizilidir
*/

//Oyunlarin levellerinin ayarlari. Ilk 7 bölüm tamam, deneme amaçli olarak.
function gameLevelsConfig(){
	
gameOperation=[[]];			//Oyun islem türü
gameNumber=[[]];				//Oyun sayi türü
gameDigit=[[]];				//Oyun hane sayisi
gameOCount=[[]];				//Oyun islem sayisi
gameSign=[[]];				//Oyun sayi türü	//Sonradan ekledim bölümlerde yok.

/*if(gameLevel==1){
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
}*/


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
else if(gameLevel==21){gameOperation=[[0,1,2,3]];gameNumber=[[2]];gameDigit=[[0]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==22){gameOperation=[[2]];gameNumber=[[0]];gameDigit=[[0]];gameOCount=[[1]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==23){gameOperation=[[3]];gameNumber=[[0]];gameDigit=[[0]];gameOCount=[[1]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==24){gameOperation=[[0,1,2,3]];gameNumber=[[0]];gameDigit=[[0]];gameOCount=[[1]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==25){gameOperation=[[0,1]];gameNumber=[[0]];gameDigit=[[1]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==26){gameOperation=[[0]];gameNumber=[[1]];gameDigit=[[0]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==27){gameOperation=[[1]];gameNumber=[[1]];gameDigit=[[0]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==28){gameOperation=[[0,1]];gameNumber=[[1]];gameDigit=[[0]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==29){gameOperation=[[0,1]];gameNumber=[[0,1]];gameDigit=[[0]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==30){gameOperation=[[0,1]];gameNumber=[[0,2]];gameDigit=[[0]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==31){gameOperation=[[0,1]];gameNumber=[[1,2]];gameDigit=[[0]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==32){gameOperation=[[0,1]];gameNumber=[[0,1,2]];gameDigit=[[0]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==33){gameOperation=[[2,3]];gameNumber=[[0,1]];gameDigit=[[0]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==34){gameOperation=[[2,3]];gameNumber=[[0,2]];gameDigit=[[0]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==35){gameOperation=[[2,3]];gameNumber=[[1,2]];gameDigit=[[0]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==36){gameOperation=[[2,3]];gameNumber=[[0,1,2]];gameDigit=[[0]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==37){gameOperation=[[0,1,2,3]];gameNumber=[[0,1,2]];gameDigit=[[0]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==38){gameOperation=[[0]];gameNumber=[[3]];gameDigit=[[0]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==39){gameOperation=[[1]];gameNumber=[[3]];gameDigit=[[0]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==40){gameOperation=[[2]];gameNumber=[[3]];gameDigit=[[0]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==41){gameOperation=[[3]];gameNumber=[[3]];gameDigit=[[0]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==42){gameOperation=[[0,1,2,3]];gameNumber=[[3]];gameDigit=[[0]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==43){gameOperation=[[0]];gameNumber=[[4]];gameDigit=[[0]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==44){gameOperation=[[1]];gameNumber=[[4]];gameDigit=[[0]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==45){gameOperation=[[2]];gameNumber=[[4]];gameDigit=[[0]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==46){gameOperation=[[3]];gameNumber=[[4]];gameDigit=[[0]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==47){gameOperation=[[0,1,2,3]];gameNumber=[[4]];gameDigit=[[0]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==48){gameOperation=[[2,3]];gameNumber=[[3,4]];gameDigit=[[0]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==49){gameOperation=[[0,1]];gameNumber=[[3,4]];gameDigit=[[0]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==50){gameOperation=[[0,1]];gameNumber=[[0]];gameDigit=[[0,1]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==51){gameOperation=[[0,1]];gameNumber=[[0]];gameDigit=[[1]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==52){gameOperation=[[0,1]];gameNumber=[[1]];gameDigit=[[0,1]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==53){gameOperation=[[0,1]];gameNumber=[[1]];gameDigit=[[1]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==54){gameOperation=[[0,1]];gameNumber=[[2]];gameDigit=[[0,1]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==55){gameOperation=[[0,1]];gameNumber=[[2]];gameDigit=[[1]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==56){gameOperation=[[0,1]];gameNumber=[[0,1]];gameDigit=[[1]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==57){gameOperation=[[0,1]];gameNumber=[[0,2]];gameDigit=[[1]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==58){gameOperation=[[0,1]];gameNumber=[[1,2]];gameDigit=[[1]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==59){gameOperation=[[0,1]];gameNumber=[[0,1,2]];gameDigit=[[1]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==60){gameOperation=[[0]];gameNumber=[[0,1,2,3,4]];gameDigit=[[0]];gameOCount=[[0,1]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==61){gameOperation=[[1]];gameNumber=[[0,1,2,3,4]];gameDigit=[[0]];gameOCount=[[0,1]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==62){gameOperation=[[2]];gameNumber=[[0,1,2,3,4]];gameDigit=[[0]];gameOCount=[[0,1]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==63){gameOperation=[[3]];gameNumber=[[0,1,2,3,4]];gameDigit=[[0]];gameOCount=[[0,1]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==64){gameOperation=[[0,1,2,3]];gameNumber=[[0,1,2,3,4]];gameDigit=[[0]];gameOCount=[[0,1]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==65){gameOperation=[[0,1]];gameNumber=[[0]];gameDigit=[[1]];gameOCount=[[2]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==66){gameOperation=[[0,1]];gameNumber=[[1]];gameDigit=[[1]];gameOCount=[[2]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==67){gameOperation=[[0,1]];gameNumber=[[0,1]];gameDigit=[[1]];gameOCount=[[3]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==68){gameOperation=[[0,1]];gameNumber=[[0,1]];gameDigit=[[1]];gameOCount=[[4]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==69){gameOperation=[[0,1]];gameNumber=[[0]];gameDigit=[[2]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==70){gameOperation=[[0,1]];gameNumber=[[1]];gameDigit=[[2]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==71){gameOperation=[[0,1]];gameNumber=[[0,1]];gameDigit=[[2]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==72){gameOperation=[[0,1]];gameNumber=[[0]];gameDigit=[[2]];gameOCount=[[1,2]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==73){gameOperation=[[0,1]];gameNumber=[[1]];gameDigit=[[2]];gameOCount=[[1,2]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==74){gameOperation=[[0,1]];gameNumber=[[0,1]];gameDigit=[[2]];gameOCount=[[1,2]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==75){gameOperation=[[0,1]];gameNumber=[[3]];gameDigit=[[1]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==76){gameOperation=[[0,1]];gameNumber=[[4]];gameDigit=[[1]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==77){gameOperation=[[0,1]];gameNumber=[[3,4]];gameDigit=[[1]];gameOCount=[[0,1]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==78){gameOperation=[[2,3]];gameNumber=[[0]];gameDigit=[[0,1]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==79){gameOperation=[[2,3]];gameNumber=[[1]];gameDigit=[[0,1]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==80){gameOperation=[[2,3]];gameNumber=[[2]];gameDigit=[[0,1]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==81){gameOperation=[[0,1]];gameNumber=[[2]];gameDigit=[[1]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==82){gameOperation=[[0,1]];gameNumber=[[0]];gameDigit=[[3]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==83){gameOperation=[[0,1]];gameNumber=[[0]];gameDigit=[[4]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==84){gameOperation=[[0,1]];gameNumber=[[0]];gameDigit=[[2,3,4]];gameOCount=[[0,1,2]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==85){gameOperation=[[2,3]];gameNumber=[[3]];gameDigit=[[1]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==86){gameOperation=[[2,3]];gameNumber=[[4]];gameDigit=[[1]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==87){gameOperation=[[0,1]];gameNumber=[[0]];gameDigit=[[2,3]];gameOCount=[[3]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==88){gameOperation=[[0,1]];gameNumber=[[1]];gameDigit=[[2,3]];gameOCount=[[3]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==89){gameOperation=[[0,1]];gameNumber=[[0]];gameDigit=[[3,4]];gameOCount=[[4]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==90){gameOperation=[[0,1]];gameNumber=[[1]];gameDigit=[[3,4]];gameOCount=[[4]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==91){gameOperation=[[0,1]];gameNumber=[[0,1]];gameDigit=[[4]];gameOCount=[[4]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==92){gameOperation=[[2]];gameNumber=[[0]];gameDigit=[[2]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==93){gameOperation=[[3]];gameNumber=[[0]];gameDigit=[[3]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==94){gameOperation=[[2]];gameNumber=[[0]];gameDigit=[[2]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==95){gameOperation=[[3]];gameNumber=[[0]];gameDigit=[[3]];gameOCount=[[0]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==96){gameOperation=[[0,1,2,3]];gameNumber=[[0,1,2,3,4]];gameDigit=[[0]];gameOCount=[[4]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==97){gameOperation=[[0,1,2,3]];gameNumber=[[0,1,2,3,4]];gameDigit=[[1]];gameOCount=[[4]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==98){gameOperation=[[0,1,2,3]];gameNumber=[[0,1,2,3,4]];gameDigit=[[2]];gameOCount=[[4]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==99){gameOperation=[[0,1,2,3]];gameNumber=[[0,1,2,3,4]];gameDigit=[[3]];gameOCount=[[4]];gameSign=[[0,1,2,3,4,5]];}
else if(gameLevel==100){gameOperation=[[0,1,2,3]];gameNumber=[[0,1,2,3,4]];gameDigit=[[4]];gameOCount=[[4]];gameSign=[[0,1,2,3,4,5]];}






}




function closePageToPlayers(){
gamePlayerID=0;
$.mobile.changePage( $("#pagePlayers") , { transition: "none"} );
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
while(cNumber[2]==0 && gameDifficulty==0 ){
cNumber[2]=Math.floor(Math.random()*digitMul).toString();
}
}
else if (gameNumber[iRand][iNum]==3){	//Üslü sayi
cNumber[0]=3;
cNumber[1]=Math.floor(Math.random()*digitMul).toString();
while(cNumber[1]==0 && gameDifficulty==0 ){
cNumber[1]=Math.floor(Math.random()*digitMul).toString();
}
iDig=Math.floor(Math.random()*gameDigit[iRand].length);	
digitMul=createMul(iRand, iDig);
cNumber[2]=Math.floor(Math.random()*digitMul).toString();
while(cNumber[2]==0 && gameDifficulty==0 ){
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
while(cNumber[2]==0 && gameDifficulty==0 ){
cNumber[2]=Math.floor(Math.random()*digitMul).toString();
}
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

//result=5/0;
if(result=="Infinity" && gameLang!="en"){
if (gameLang=="de") result="Unendlichkeit";
if (gameLang=="es") result="Infinito";
if (gameLang=="fr") result="Infini";
if (gameLang=="it") result="Infinito";
if (gameLang=="tr") result="Sonsuz";
}
//alert("sonuc = "+result);
//resultSet[0]=iDiff2;
//resultSet[1]=result;


return result;
}


function findMax(vala, vale){
//Serinin en büyük degerini buluyor.
//vale=0 ise en küçük, vale=1 ise en büyük deger
var valb=vala.toString().split(",");
if(vale==0) var valc=valb.sort();
if(vale==1) var valc=valb.sort(function(a,b){return b-a});
var vald=valc[0];

//var valc=valb.sort();
//var vald=valc[valc.length-1];
return vald;
}

function timeCal(time){
//alert("cem1");
//coefNum; sayilar - islemler katsayi tablosu coefNeum[sayi türü][islem türü]
//sayi türü 0-4, islem türü 0-3 
var coefNum=[[1,1,1.01,1.02],[1,1,1.01,1.02],[1.01,1.01,1.01,1.01],[1.01,1.01,1.01,1.01],[1.01,1.01,1.01,1.01]];
//var coefNum=[[1,1,1.5,2],[1,1,1.5,2],[1.5,1.5,1.5,1.5],[2.5,2.5,2.5,2.5],[3,3,3,3]];


//coefDigit; hane sayisi - islemler katsayi tablosu coefDigit[hane sayisi][islem türü]
//hane sayisi 0-4, islem türü 0-3
var coefDigit=[[1,1,1,1],[1.01,1.01,1.02,1.02],[1.01,1.01,1.02,1.02],[1.01,1.01,1.02,1.02],[1.01,1.01,1.02,1.02]];
//var coefDigit=[[1,1,1,1],[2.1,2.1,2.8,2.9],[3.1,3.1,3.8,3.9],[4.1,4.1,4.8,4.9],[5.1,5.1,5.8,5.9]];

var time2;
var maxOp, maxDig, maxNum, maxOC;

maxOp=findMax(gameOperation,1);
//alert("cem2");
maxDig=findMax(gameDigit,1);
maxNum=findMax(gameNumber,1);
maxOC=findMax(gameOCount,1);

time2=(1+maxOC*0.9)*(time*coefNum[maxNum][maxOp]*coefDigit[maxDig][maxOp]);
//alert("time2= "+time2);
//alert(maxOp+" - "+maxDig+" - "+maxNum+" - "+maxOC+" - "+coefNum[maxNum][maxOp]+" - "+coefDigit[maxDig][maxOp]);

return Math.floor(time2);
}


function pointToComma(vala){
//alert("vala="+vala);
//alert("lang="+gameLang);
//alert("indexof="+vala.indexOf("."));
vala=vala.toString();
if(gameLang!="en"){
while(vala.indexOf(".")>-1){
vala=vala.replace(".",",");
}
}
//alert("val12="+vala);
return vala;
}
//Bir sayfaya ait olmayan kodlar sonu






/* pageLang kodu baslangici */
function chooseLang(lang){
//Seçilen bayraga göre
//Oynun dili (hem js degiskeni, hem de veritabanindaki degeri) degistirilecek
//Sonra da pagePlayers sayfasina yönlendirilecek
//alert("dil seçildi = "+lang);
//lang="en";	//Deneme amaçli, silinecek
gameLang=lang;

//gameLangChange();	//tarayicida çalismayi önler
//alert("sayfa degis"+gameLang);
//$("#langSelect").val(gameLang);

$("#langSelect").val(gameLang);
$("#langSelect").trigger("change");  //Bunun içinde gameLanguageChanged() çalistiriliyor

$.mobile.changePage( $("#pageIntro") , { transition: "none"} );
}
/* pageLang kodu sonu */



/* pageGameSettings kodu baslangici */
function langChangeSelect(){

var lang;
lang=$("#langSelect").val();
//alert(lang);
if(lang!=""){
gameLang=lang;

pageGameSettingsLanguageChange();
if(dbOK==1) gameLangChangeDB();	//tarayicida çalismayi önler
//gameLanguageChanged();
}
//gameLangChange(lang);		//Tarayicida çalismayi önler

}


function styleChangeSelect(){

var s1,s2;
s1=$("#styleSelect").val();
s2="jquery.mobile-1.2.0.min"+s1+".css";
//if(s1=="1") s2="jquery.mobile-1.2.0.min.css";
//if(s1=="2") s2="jquery.mobile-1.2.0.min2.css";
//if(s1=="3") s2="jquery.mobile-1.2.0.min3.css";

//alert(s1+"-"+s2);
//alert($('#styleConf[rel=stylesheet]').attr('href'));
gameDBUpdate("theme", s1);
$('#styleConf[rel=stylesheet]').attr('href', s2);

//if(lang!=""){
//gameLang=lang;
//
//pageGameSettingsLanguageChange();
//if(dbOK==1) gameLangChangeDB();	//tarayicida çalismayi önler
////gameLanguageChanged();
//}
//gameLangChange(lang);		//Tarayicida çalismayi önler

}

function pageGameSettingsLanguageChange(){

var langID=1; //gameLang=="en" Ingilizce //Hiç bir dil seçili degilse otomatik Ingilizce olacak
langID=findlangID();

var langLabelH=["Sprache :", "Language :", "Idioma :", "Langue :", "Lingua :", "Dil :"];
var gameSettingsH1=["Spiel-Einstellungen", "Game Settings", "Configuraci&oacute;n Del Juego", "Param&eacute;tres De Jeu", "Impostazioni Di Gioco", "Oyun Ayarlar&#305;"];
var themeLabelH=["Thema :", "Theme :", "Tema :", "Th&eacute;me :", "Tema :", "Tema :"];

$("#gameSettingsH1").html(gameSettingsH1[langID]);
$("#langLabelH").html(langLabelH[langID]);
$("#themeLabelH").html(themeLabelH[langID]);
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
$("#pagePlayerDeleteContent").find("#pagePlayerDeletePlayerName").html(decodeURIComponent(pName[gamePlayerID]));
});


function pageDeleteLanguageChange(){

var langID=1; //gameLang=="en" Ingilizce //Hiç bir dil seçili degilse otomatik Ingilizce olacak
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
/* pagePlayerDelete kodu sonu */




/* pagePlayerCreate kodu baslangici */
$("#pagePlayerCreate").live('pagebeforeshow', function(event){
pagePlayerCreateLanguageChange();
});


function pagePlayerCreateLanguageChange(){

var langID=1; //gameLang=="en" Ingilizce //Hiç bir dil seçili degilse otomatik Ingilizce olacak
langID=findlangID();

// diller 	[ 0=de, 1=en, 2=es, 3=fr, 4=it, 5=tr]
//["", "", "", "", "", ""]
var pagePlayerCreatePlayerH=["Spieler Erstellen", "Create Player", "Crear Jugador", "Cr&eacute;er Un Joueur", "Creare Un Giocatore", "Yeni Oyuncu Olu&#351;tur"];
var nameSpan=["Name", "Name", "Nombre", "Nom", "Nome", "&#304;sim"];
var playerCreateCancelSpan=["Kündigen", "Cancel", "Cancelar", "Annuler", "Annullare", "Vazge&ccedil;"];
var playerCreateCreateSpan=["Schaffen", "Create", "Crear", "Cr&eacute;er", "Creare", "Olu&#351;tur"];

$("#pagePlayerCreatePlayerH").html(pagePlayerCreatePlayerH[langID]);
$("#nameSpan").html(nameSpan[langID]);
$("#playerCreateCancelSpan").html(playerCreateCancelSpan[langID]);
$("#playerCreateCreateSpan").html(playerCreateCreateSpan[langID]);

}
/* pagePlayerCreate kodu sonu */



/* pagePlayers kodu baslangici */
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
//alert("cem lang change");
var playersH=["Spieler :", "Players :", "Jugadores :", "Joueurs :", "Giocatori :", "Oyuncular :"];
//alert("cem1_2");
var levelSpanMode=["Modus","Mode","Modo","Mode","Moda","Mod"];
//alert("cem2");
var levelSpanDifE=["Leicht", "Easy", "F&aacute;cil", "Facile", "Facile", "Kolay"];
//alert("cem3");
var levelSpanDifM=["Moderieren", "Moderate", "Moderada", "Mod&eacute;r&eacute;e", "Moderata", "Normal"];
//alert("cem4");
var levelSpanDifH=["Schwer", "Hard", "Dif&iacute;cil", "Difficile", "", "Zor"];
//alert("cem5");
var playerRenameSpan=["Umbenennen", "Rename", "Rebautizar", "Renommer", "Rinominare", "&#304;smi de&#287;i&#351;tir"];
//alert("cem6");
var playerDeleteSpan=["L&ouml;schen", "Delete", "Borrar", "Effacer", "Cancellare", "Sil"];
//alert("cem7");
var playerCreateSpan=["Schaffen", "Create", "Crear", "Cr&eacute;er", "Creare", "Olu&#351;tur"];
//alert("cem8");

//var langLabel=["Sprache :", "Idioma", "Langue", "Lingua", "Dil :", "Language :"];
//var playerDelSpan=["L&ouml;schen", "Borrar", "Effacer", "Cancellare", "Sil", "Delete"];
//var newPlayerH=["Erstellen Neuer Spieler :", "Crear Nuevo Jugador", "Cr&eacute;er nouveau joueur", "Crea Nuovo Giocatore", "Yeni Oyuncu Olu&#351;tur :", "Create New Player :"];
//var playerNameLabel= ["Name", "Nombre", "Nom", "Nome", "Isim", "Name"];
//var levelSpanFreemode=["Free Mode", "Free Mode", "Free Mode", "Free Mode", "Free Mode", "Free Mode"];
//var levelSpanFindout=["Find-Out", "Find-Out", "Find-Out", "Find-Out", "Find-Out", "Find-Out"];
//var levelSpanMathris=["Mathris", "Mathris", "Mathris", "Mathris", "Mathris", "Mathris"];
//var levelSpanMathrix=["Mathrix", "Mathrix", "Mathrix", "Mathrix", "Mathrix", "Mathrix"];
//var levelSpanShootout=["Shoot-Out", "Shoot-Out", "Shoot-Out", "Shoot-Out", "Shoot-Out", "Shoot-Out"];

//alert("cem9");
//alert($("#playersH").html()+" = "+playersH[langID]);//
//alert($(".levelSpanMode").html()+" = "+levelSpanMode[langID]);
//alert($(".levelSpanDifE").html()+" = "+levelSpanDifE[langID]);
//alert($(".levelSpanDifM").html()+" = "+levelSpanDifM[langID]);
//alert($(".levelSpanDifH").html()+" = "+levelSpanDifH[langID]);
//alert($(".playerRenameSpan").html()+" = "+playerRenameSpan[langID]);//
//alert($(".playerDeleteSpan").html()+" = "+playerDeleteSpan[langID]);
//alert($(".playerCreateSpan").html()+" = "+playerCreateSpan[langID]);//

$("#playersH").html(playersH[langID]);
//alert("cem10");
$(".levelSpanMode").html(levelSpanMode[langID]);
//alert("cem11");
$(".levelSpanDifE").html(levelSpanDifE[langID]);
//alert("cem12");
$(".levelSpanDifM").html(levelSpanDifM[langID]);
//alert("cem13");
$(".levelSpanDifH").html(levelSpanDifH[langID]);
//alert("cem14");
$(".playerRenameSpan").html(playerRenameSpan[langID]);
//alert("cem15");
$(".playerDeleteSpan").html(playerDeleteSpan[langID]);
//alert("cem16");
$(".playerCreateSpan").html(playerCreateSpan[langID]);
//alert("cem17");




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

function playerSelect(id){
//alert(id);
//Oyuncunun seçilip oyun seçimi sayfasina yönlendirme yapiliyor
gamePlayerID=id;
//alert("gamePlayerID="+gamePlayerID);

//$("#pageGameModesContent").trigger("create");
//}

//$(document).on("pageinit", "#pageGameModes", function() {
//if(pFreemodeE[gamePlayerID]>0) $("#pageGameModesFreeMode").button('enable').button('refresh');
//if(pFindoutE[gamePlayerID]>2) $("#pageGameModesFindOut").button('enable');
//if(pMathrisE[gamePlayerID]>2) $("#pageGameModesMathris").button('enable');
//if(pMathrixE[gamePlayerID]>2) $("#pageGameModesMathrix").button('enable');
//if(pShootoutE[gamePlayerID]>2) $("#pageGameModesShootOut").button('enable');
//});


$.mobile.changePage( $("#pageGameModes") , { transition: "none"} );
}



$("#pagePlayers").live('pagebeforeshow', function(event){											
listPagePlayersUserInfoDB();
//pagePlayersLanguageChange();
});



/* PagePlayers kodu sonu */



/* pageGameModes kodu baslangici */
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
/* pageGameModes kodu sonu */


/* pageFreeModeLevel kodu baslangici */
$("#pageFreeModeLevel").live("pagebeforeshow", function(){
pageFreeModeLevelLanguageChange();
freeModeLevels();
});

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
//alert("level="+level);
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
//alert("sifirlama tamam");

}


function pageFreeModeLevelLanguageChange(){

var langID=1; //gameLang=="en" Ingilizce //Hiç bir dil seçili degilse otomatik Ingilizce olacak
langID=findlangID();
//["", "", "", "", "", ""];

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
//var a=["", "", "", "", "", ""];

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
//$("#").html([langID]);

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
//alert("seçili dif= "+dif+" op1= "+op1+" op2= "+op2);
if(op1==0){
m="fmoperation";

for(var i=0;i<3;i++){
for (var i2=0;i2<4;i2++){
//alert("Eski lastSelFMOp = "+lastSelFMOp[gamePlayerID][i][i2]+" i="+i+" i2="+i2);	
opt1[i2]=lastSelFMOp[gamePlayerID][i][i2];
if(i2==op2 && dif==i){
//alert("Eski lastSelFMOp = "+lastSelFMOp[gamePlayerID][i][i2]+" i="+i+" i2="+i2+" op[i2]="+opt1[i2]);
opt1[i2]=(lastSelFMOp[gamePlayerID][i][i2]+1)%2;
//alert("Eski lastSelFMOp = "+lastSelFMOp[gamePlayerID][i][i2]+" i="+i+" i2="+i2+" op[i2]="+opt1[i2]);
}

if(optDB!="") optDB=optDB+"|";
optDB=optDB.toString()+opt1[i2].toString();
}

opt2[i]=[opt1[0],opt1[1],opt1[2],opt1[3]];
}

lastSelFMOp[gamePlayerID]=opt2;
//lastSelFMOp[gamePlayerID]=[[1,1,1,1],[1,0,0,0],[1,0,0,0]];
//alert("1-m="+m+" -optDB="+optDB); 
}
else if(op1==1){
m="fmnumbers";
//alert("op1==1 girildi");
for(var i=0;i<3;i++){
for (var i2=0;i2<5;i2++){

opt1[i2]=lastSelFMNum[gamePlayerID][i][i2];
if(i2==op2 && dif==i){
opt1[i2]=(lastSelFMNum[gamePlayerID][i][i2]+1)%2;
}

if(optDB!="") optDB=optDB+"|";
//alert("optDB="+optDB);
//alert("i2="+i2);
//alert("opt1[i2]="+opt1[i2]);
//alert("cem4="+opt1[i2].toString());
optDB=optDB.toString()+opt1[i2].toString();
//alert("cem4-2");

}
//alert("cem5");
opt2[i]=[opt1[0],opt1[1],opt1[2],opt1[3],opt1[4]];
}
//alert("cem6");
lastSelFMNum[gamePlayerID]=opt2;
//lastSelFMNum[gamePlayerID]=[[1,1,1,1,1],[1,0,0,0,0],[1,0,0,0,0]];
//alert("1-m="+m+" -optDB="+optDB); 
}
else if(op1==2){
m="fmdigit";

for(var i=0;i<3;i++){
for (var i2=0;i2<5;i2++){
	
opt1[i2]=lastSelFMDig[gamePlayerID][i][i2];
if(i2==op2 && dif==i){
opt1[i2]=(lastSelFMDig[gamePlayerID][i][i2]+1)%2;
}

if(optDB!="") optDB=optDB+"|";
optDB=optDB.toString()+opt1[i2].toString();
}

opt2[i]=[opt1[0],opt1[1],opt1[2],opt1[3],opt1[4]];
}

lastSelFMDig[gamePlayerID]=opt2;
//lastSelFMDig[gamePlayerID]=[[1,1,1,1,1],[1,0,0,0,0],[1,0,0,0,0]];
//alert("1-m="+m+" -optDB="+optDB); 
}
else if(op1==3){
m="fmocount";

for(var i=0;i<3;i++){
for (var i2=0;i2<5;i2++){
	
opt1[i2]=lastSelFMOC[gamePlayerID][i][i2];
if(i2==op2 && dif==i){
opt1[i2]=(lastSelFMOC[gamePlayerID][i][i2]+1)%2;
}

if(optDB!="") optDB=optDB+"|";
optDB=optDB.toString()+opt1[i2].toString();
}

opt2[i]=[opt1[0],opt1[1],opt1[2],opt1[3],opt1[4]];
}

lastSelFMOC[gamePlayerID]=opt2;
//lastSelFMOC[gamePlayerID]=[[1,1,1,1,1],[1,0,0,0,0],[1,0,0,0,0]];
//alert("1-m="+m+" -optDB="+optDB); 
}
else if(op1==4){
m="fmsign";

for(var i=0;i<3;i++){
for (var i2=0;i2<6;i2++){
	
opt1[i2]=lastSelFMS[gamePlayerID][i][i2];
if(i2==op2 && dif==i){
opt1[i2]=(lastSelFMS[gamePlayerID][i][i2]+1)%2;
}

if(optDB!="") optDB=optDB+"|";
optDB=optDB.toString()+opt1[i2].toString();
}

opt2[i]=[opt1[0],opt1[1],opt1[2],opt1[3],opt1[4],opt1[5]];
}

lastSelFMS[gamePlayerID]=opt2;
//lastSelFMS[gamePlayerID]=[[1,1,1,1,1,1],[1,0,0,0,0,0],[1,0,0,0,0,0]];
//alert("1-m="+m+" -optDB="+optDB); 
}


//alert("2-m="+m+" -optDB="+optDB); 
if (dbOK==1) playerDBUpdate(m, optDB);	//Veritabanina kayit
//fmoperation, fmnumbers, fmdigit, fmocount, fmsign
//'1|0|0|0|0|0|0|0|0|0|0|0', '1|0|0|0|0|0|0|0|0|0|0|0|0|0|0', '1|0|0|0|0|0|0|0|0|0|0|0|0|0|0', '1|0|0|0|0|0|0|0|0|0|0|0|0|0|0', '1|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0'
freeModeLevelCheckControl();

//alert("cem");
}

function freeModeLevelCheckControl(){
var dif;
dif=lastSelDif[gamePlayerID][0];

var j1=0, j2=0, j3=0; j4=0, j5=0;
for(var i=0;i<4;i++){
//alert("lastSelFMOp[gamePlayerID][dif][i]="+lastSelFMOp[gamePlayerID][dif][i]);
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
/* pageFreeModeLevel kodu sonu */


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

//alert("cem1");

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



//alert("cem2");
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
$.mobile.changePage( $("#pageFreeModePlay") , { transition: "none"} );
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

//alert("result0="+result[0]);
//alert("result2="+result2);

//alert("cem3 "+ pointToComma(result[0])+ " - "+pointToComma(result2));
result[0]='<table align="center" class="equationTable"><tr>'+pointToComma(result[0])+'<td>'+eqSign[1]+'</td><td>'+pointToComma(result2)+'</td></tr></table>';
//alert("cem4");
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
//$(".pageFreeModePlayImage").width(w[0]*0.8);
//$(".pageFreeModePlayImage").height(h[0]*0.8);

}


$("#pageFreeModePlay").live("pagebeforeshow", function() {
pageFreeModePlayLanguageChange();
});


function pageFreeModePlayLanguageChange(){

var langID=1; //gameLang=="en" Ingilizce //Hiç bir dil seçili degilse otomatik Ingilizce olacak
langID=findlangID();
//["", "", "", "", "", ""];

//var a=["", "", "", "", "", ""];
var popupFreeModePlaySucH1=["Gl&#220;ckw&#220;nsche", "Congratulations", "Congratulaciones", "F&eacute;licitations", "Congratulazioni", "Tebrikler"];
var popupFreeModePlaySucH3=["Sie wurde erfolgreich abgeschlossen.", "You completed successfuly.", "Ha completado con &eacute;xito.", "Vous avez termin&eacute; avec succ&eacute;s.", "Hai completato con successo.", "Ba&#351;ar&#305;yla tamamlad&#305;n&#305;z."];
var popupFreeModePlaySucSpan=["Ok", "Ok", "Aceptar", "D'accord", "Bene", "Tamam"];
var popupFreeModePlayUnSucH1=["Leider", "Sorry", "Arrepentido", "D&eacute;sol&eacute;", "Dispiacente", "Maalesef"];
var popupFreeModePlayUnSucH3=["Sie konnten nicht erfolgreich abzuschlie&szlig;en.", "You could not complete succesfully.", "No se pudo completar con &eacute;xito.", "On ne pouvait pas terminer avec succ&eacute;s.", "Non &eacute; in grado di completare con successo.", "Ba&#351;ar&#305;yla tamamlayamad&#305;n&#305;z."];
var popupFreeModePlayUnSucSpan=["Ok", "Ok", "Aceptar", "D'accord", "Bene", "Tamam"];

//$("#").html([langID]);
$("#popupFreeModePlaySucH1").html(popupFreeModePlaySucH1[langID]);
$("#popupFreeModePlaySucH3").html(popupFreeModePlaySucH3[langID]);
$("#popupFreeModePlaySucSpan").html(popupFreeModePlaySucSpan[langID]);
$("#popupFreeModePlayUnSucH1").html(popupFreeModePlayUnSucH1[langID]);
$("#popupFreeModePlayUnSucH3").html(popupFreeModePlayUnSucH3[langID]);
$("#popupFreeModePlayUnSucSpan").html(popupFreeModePlayUnSucSpan[langID]);

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
//level atlama kodu
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
//if(gameDifficulty==0)	changeLevel(0, 1, 1);
//if(gameDifficulty==1)	changeLevel(0, 2, 1);
}


$( "#popupFreeModePlaySuc" ).popup( "open" );
}
else{
playFreeMode();
}
}
/* pageFreeModePlay kodu sonu */




/* pageFindOutLevel kodu baslangici */
$("#pageFindOutLevel").live("pagebeforeshow", function(){
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
clearInterval(gameCountDown);
pageFindOutLevelLanguageChange();
gamesModesLevels(1, "FindOut");
});

function pageFindOutLevelLanguageChange(){
var langID=1; //gameLang=="en" Ingilizce //Hiç bir dil seçili degilse otomatik Ingilizce olacak
langID=findlangID();

var spanEasyFindOut=["Leicht", "Easy", "F&aacute;cil", "Facile", "Facile", "Kolay"];
var spanModerateFindOut=["Moderieren", "Moderate", "Moderada", "Mod&eacute;r&eacute;", "Moderato", "Normal"];
var spanHardFindOut=["Schwer", "Hard", "Difficile", "Dur", "Difficile", "Zor"];

$("#spanEasyFindOut").html(spanEasyFindOut[langID]);
$("#spanModerateFindOut").html(spanModerateFindOut[langID]);
$("#spanHardFindOut").html(spanHardFindOut[langID]);

};
/* pageFindOutLevel kodu sonu */




/* pageFindOutPlay kodu baslangici */
$("#pageFindOutPlay").live("pagebeforeshow", function(){
clearInterval(gameCountDown);
pageFindOutPlayLanguageChange();
$("#pageFindOutPlayTimeSpan").removeClass("time1");
$("#pageFindOutPlayTimeSpan").removeClass("time2");
$("#pageFindOutPlayTimeSpan").addClass("time1");
});





function pageFindOutPlayLanguageChange(){

var langID=1; //gameLang=="en" Ingilizce //Hiç bir dil seçili degilse otomatik Ingilizce olacak
langID=findlangID();
//["", "", "", "", "", ""];

//var a=["", "", "", "", "", ""];
var popupFindOutPlaySucH1=["Gl&#220;ckw&#220;nsche", "Congratulations", "Congratulaciones", "F&eacute;licitations", "Congratulazioni", "Tebrikler"];
var popupFindOutPlaySucH3=["Sie wurde erfolgreich abgeschlossen.", "You completed successfuly.", "Ha completado con &eacute;xito.", "Vous avez termin&eacute; avec succ&eacute;s.", "Hai completato con successo.", "Ba&#351;ar&#305;yla tamamlad&#305;n&#305;z."];
var popupFindOutPlaySucSpan=["Ok", "Ok", "Aceptar", "D'accord", "Bene", "Tamam"];
var popupFindOutPlayUnSucH1=["Leider", "Sorry", "Arrepentido", "D&eacute;sol&eacute;", "Dispiacente", "Maalesef"];
var popupFindOutPlayUnSucH3=["Sie konnten nicht erfolgreich abzuschlie&szlig;en.", "You could not complete succesfully.", "No se pudo completar con &eacute;xito.", "On ne pouvait pas terminer avec succ&eacute;s.", "Non &eacute; in grado di completare con successo.", "Ba&#351;ar&#305;yla tamamlayamad&#305;n&#305;z."];
var popupFindOutPlayUnSucSpan=["Ok", "Ok", "Aceptar", "D'accord", "Bene", "Tamam"];

//$("#").html([langID]);
$("#popupFindOutPlaySucH1").html(popupFindOutPlaySucH1[langID]);
$("#popupFindOutPlaySucH3").html(popupFindOutPlaySucH3[langID]);
$("#popupFindOutPlaySucSpan").html(popupFindOutPlaySucSpan[langID]);
$("#popupFindOutPlayUnSucH1").html(popupFindOutPlayUnSucH1[langID]);
$("#popupFindOutPlayUnSucH3").html(popupFindOutPlayUnSucH3[langID]);
$("#popupFindOutPlayUnSucSpan").html(popupFindOutPlayUnSucSpan[langID]);

}

function playFindOut(level, score){

//Deneme amaçli degerler
//gameNumber = [[0]];	//null; //gameNumber=[[1]];	//[[1,2],[1,2,3],[1]];
//gameOperation=[[1]];	//[[1,2],[1,2,3],[1]];
//gameOCount=[[0]];
//gameDigit=[[0]];
//gameSign=[[5]];
//gameDifficulty=0;	//0,1,2

$.mobile.changePage( $("#pageFindOutPlay") , { transition: "none"} );

//alert("score="+score+" level="+level);
if(score==0){
gameLevel=level;
gameLevelsConfig();	//Oyunlarin, seviyeye bagli olarak ayarlari belirleniyor
gameDifficulty=lastSelDif[gamePlayerID][1];

$('#playFindOutEq').removeClass("ui-disabled");
$('#playFindOutNotEq').removeClass("ui-disabled");
$('#playFindOutBig').removeClass("ui-disabled");
$('#playFindOutEqBig').removeClass("ui-disabled");
$('#playFindOutLess').removeClass("ui-disabled");
$('#playFindOutEqLess').removeClass("ui-disabled");
$("#pageFindOutPlaySlider").val(score.toString());
$("#pageFindOutPlaySlider").slider('refresh');

var time=20;	//6 saniye/soru
if(gameDifficulty==1) time=275;	//5.5 saniye/soru
if(gameDifficulty==2) time=500; //5 saniye/soru

//var time=30;	//6 saniye/soru
//if(gameDifficulty==1) time=50;
//if(gameDifficulty==2) time=100;


//alert(time);
time=timeCal(time);
//alert(time);
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


//gameDifficulty=lastSelDif[gamePlayerID][1];
//alert("gameDifficulty1= "+gameDifficulty);

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
//level atlama kodu
//pLevels[gamePlayerID][1][gameDifficulty]++;
//alert("levels="+pLevels[gamePlayerID][1][gameDifficulty]+"-"+gameLevel);
if(pLevels[gamePlayerID][1][gameDifficulty]==gameLevel){
changeLevel(1, gameDifficulty, (pLevels[gamePlayerID][1][gameDifficulty]*1+1));
}

//Difficulty moderate ve hard'in açilma zamanlari
//if(pLevels[gamePlayerID][1][0]==5)	changeLevel(1, 1, 1);
//if(pLevels[gamePlayerID][1][1]==5)	changeLevel(1, 2, 1);

$( "#popupFindOutPlaySuc" ).popup( "open" );
}
else{
playFindOut();
}
}

function playFindOutFinish(){
var points, gameDifficulty, scoreForLevelUp;
points=Number($("#pageFindOutPlaySlider").val());

//gameDifficulty=lastSelDif[gamePlayerID][4];
//scoreForLevelUp=90;		//gameDifficulty=2
//if (gameDifficulty==0) scoreForLevelUp=50;
//if (gameDifficulty==1) scoreForLevelUp=75;

//if(points>=scoreForLevelUp){
if(points>=100){

if(pLevels[gamePlayerID][1][gameDifficulty]==gameLevel){
changeLevel(1, gameDifficulty, (pLevels[gamePlayerID][1][gameDifficulty]*1+1));
}
//difficulty degistirme kodlari da gelecek buraya
$("#popupFindOutPlaySuc").popup("open");

}
else{
clearInterval(gameCountDown);
$("#popupFindOutPlayUnSuc").popup("open");
}

}
/* pageFindOutPlay kodu sonu */




/* pageMathrisLevel kodu baslangici */

$("#pageMathrisLevel").live("pagebeforeshow", function(){
window.clearInterval(mathrisSetInt);
pageMathrisLevelLanguageChange();
gamesModesLevels(2, "Mathris");
});

function pageMathrisLevelLanguageChange(){
var langID=1; //gameLang=="en" Ingilizce //Hiç bir dil seçili degilse otomatik Ingilizce olacak
langID=findlangID();

var spanEasyMathris=["Leicht", "Easy", "F&aacute;cil", "Facile", "Facile", "Kolay"];
var spanModerateMathris=["Moderieren", "Moderate", "Moderada", "Mod&eacute;r&eacute;", "Moderato", "Normal"];
var spanHardMathris=["Schwer", "Hard", "Difficile", "Dur", "Difficile", "Zor"];

$("#spanEasyMathris").html(spanEasyMathris[langID]);
$("#spanModerateMathris").html(spanModerateMathris[langID]);
$("#spanHardMathris").html(spanHardMathris[langID]);

};
/* pageMathrisLevel kodu sonu */




/* pageMathrisPlay kodu baslangici */
$("#pageMathrisPlay").live("pagebeforeshow", function() {
pageMathrisPlayLanguageChange();
});

function pageMathrisPlayLanguageChange(){

var langID=1; //gameLang=="en" Ingilizce //Hiç bir dil seçili degilse otomatik Ingilizce olacak
langID=findlangID();
//["", "", "", "", "", ""];

//var a=["", "", "", "", "", ""];
var popupMathrisPlaySucH1=["Gl&#220;ckw&#220;nsche", "Congratulations", "Congratulaciones", "F&eacute;licitations", "Congratulazioni", "Tebrikler"];
var popupMathrisPlaySucH3=["Sie wurde erfolgreich abgeschlossen.", "You completed successfuly.", "Ha completado con &eacute;xito.", "Vous avez termin&eacute; avec succ&eacute;s.", "Hai completato con successo.", "Ba&#351;ar&#305;yla tamamlad&#305;n&#305;z."];
var popupMathrisPlaySucSpan=["Ok", "Ok", "Aceptar", "D'accord", "Bene", "Tamam"];
var popupMathrisPlayUnSucH1=["Leider", "Sorry", "Arrepentido", "D&eacute;sol&eacute;", "Dispiacente", "Maalesef"];
var popupMathrisPlayUnSucH3=["Sie konnten nicht erfolgreich abzuschlie&szlig;en.", "You could not complete succesfully.", "No se pudo completar con &eacute;xito.", "On ne pouvait pas terminer avec succ&eacute;s.", "Non &eacute; in grado di completare con successo.", "Ba&#351;ar&#305;yla tamamlayamad&#305;n&#305;z."];
var popupMathrisPlayUnSucSpan=["Ok", "Ok", "Aceptar", "D'accord", "Bene", "Tamam"];

//$("#").html([langID]);
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

//if(score==0){
gameLevel=level;
$("#pageMathrisPlaySlider").val(score.toString());
$("#pageMathrisPlaySlider").slider('refresh');
$("#pageMathrisPlayQuestions").html("");
//}

gameLevelsConfig();	//Oyunlarin, seviyeye bagli olarak ayarlari belirleniyor
gameDifficulty=lastSelDif[gamePlayerID][2];

var moveTime=500;	//moveTime: Her adimida beklenecek süre
var moveStep=5;	//moveStep : Her adimda kayacak miktar.
var qGap=2;		//questionGap: Her soru arasindaki mesafe

if(gameDifficulty==1) moveTime=450;
if(gameDifficulty==2) moveTime=400;
time=timeCal(moveTime);

if (mathrisPlayOk==1){
playMathrisNewQuestion(qGap);

//mathrisSetInt=setInterval(function (){mathrisQuestionMove(qGap, moveStep)},moveTime);
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


//iRand ile Denklem olusturmakta kullanilacak seçeneklerin bulundugu yer belirlenecek
var iRand=Math.floor(Math.random()*gameDigit.length);

var result= [];	//result[0]; Esitligin html kodu	result[1]; Esitligin hesaplanan sonucu
var result2; //result2; Esitligin hesaplanan sonucundan farkli (veya farksiz) gösterilecek sonuç
var result3; //result3; bütün sorulari barindiran degisken

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


<!--result[0]='<div id="pageMathrisPlayQuestion'+iQuestion+'" class="ui-bar ui-bar-d ui-corner-all pageMathrisQuestion ui-bar2 moving" style="position:absolute; clear:none; float:none; width:96%;"><table align="center" border="0"><tbody><tr><td><span id="id'+iQuestion+'"></span><img src="images/delete.png" onclick="playMathrisCal(\''+iQuestion+'\',\''+(eqRes*(-1))+'\',\''+gameLevel+'\')"></td><td><table align="center" border="0"><tbody><tr>'+result[0]+'<td>'+eqSign[1]+'</td><td>'+result2+'</td></tr></tbody></table></td><td align="right"><img src="images/check.png" onclick="playMathrisCal(\''+iQuestion+'\',\''+eqRes+'\',\''+gameLevel+'\')"></td></tr></tbody></table></div>';-->

result[0]='<div id="pageMathrisPlayQuestion'+iQuestion+'" class="ui-bar ui-bar-d pageMathrisQuestion ui-bar2 moving shadow" style="position:absolute; width:100%;"><table align="center" border="0"><tbody><tr><td><span id="id'+iQuestion+'"></span><img src="images/delete.png" onclick="playMathrisCal(\''+iQuestion+'\',\''+(eqRes*(-1))+'\',\''+gameLevel+'\')"></td><td><table align="center" border="0"><tbody><tr>'+pointToComma(result[0])+'<td>'+eqSign[1]+'</td><td>'+pointToComma(result2)+'</td></tr></tbody></table></td><td align="right"><img src="images/check.png" onclick="playMathrisCal(\''+iQuestion+'\',\''+eqRes+'\',\''+gameLevel+'\')"></td></tr></tbody></table></div>';


<!--result[0]='<div id="pageMatrixPlayQuestion'+iQuestion+'" class="ui-bar ui-bar-d ui-corner-all pageMathrixQuestion ui-bar2" style="margin-top:5px;"><table width="100%" align="center" border="0"><tbody><tr><td><img src="images/delete.png" onclick="playMathrixCal(\''+iQuestion+'\',\''+(eqRes*(-1))+'\')"></td><td><table width="" align="center" border="0"><tbody><tr>'+result[0]+'<td>'+eqSign[1]+'</td><td>'+result2+'</td></tr></tbody></table></td><td align="right"><img src="images/check.png" onclick="playMathrixCal(\''+iQuestion+'\',\''+eqRes+'\')"></td></tr></tbody></table></div>';-->


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
	//alert("cem");
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
playMathrisNewQuestion(qGap);//playMathris(level);
}
}


function mathrisQuestionMove(qGap, moveStep){
var t0,t1, h1;
//alert("cem");
var qLen=$("#pageMathrisPlayQuestions").children().length;	
t0=$("#pageMathrisPlayQuestions").outerHeight()+$("#pageMathrisPlayQuestions").offset().top;


for(var i=1;i<qLen+1;i++){
	
//var qclass=$("#pageMathrisPlayQuestions div:nth-child("+i+")").attr("class");
//if(qClass.indexOf("moving")>0){
h1=$("#pageMathrisPlayQuestions div:nth-child("+i+")").outerHeight();
t1=$("#pageMathrisPlayQuestions div:nth-child("+i+")").offset().top

if(i>1) t0=$("#pageMathrisPlayQuestions div:nth-child("+(i-1)+")").offset().top;

if((t0-qGap)>(t1+moveStep+h1)){
//alert(t1);
t1=t1+moveStep;
//alert(t1);
$("#pageMathrisPlayQuestions div:nth-child("+i+")").css("top", t1+"px");
$("#pageMathrisPlayQuestions div:nth-child("+i+")").removeClass("moving");
$("#pageMathrisPlayQuestions div:nth-child("+i+")").addClass("moving");
}
else{
$("#pageMathrisPlayQuestions div:nth-child("+i+")").css( "top", (t0-qGap-h1).toString+"px"  );
$("#pageMathrisPlayQuestions div:nth-child("+i+")").removeClass("moving");
if(i==qLen) qMNew(qGap);

}
//}


}

}


function playMathrisCal(qNum, point, level){
	
//alert($('#pageMathrisPlayQuestion'+qNum).css("top"));
//window.clearInterval(mathrisSetInt);
//alert(point);
if(Number(point)<=0){	//Cevap yanlis ise
//alert("yanlis")
$('#pageMathrisPlayQuestion'+qNum).addClass("ui-disabled");
$('#pageMathrisPlayQuestion'+qNum).addClass("wrong");
qMNew(level);
}
else{	//Cevap dogru ise
//alert("dogru");
$("#pageMathrisPlayQuestion"+qNum).remove();
qMNew(level);
}

//$('#pageMathrisPlayQuestion'+qNum).stop();//addClass("ui-disabled");
//$("#pageMathrisPlayQuestion"+qNum).css("visibility","hidden");
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
/*else{	//Asagi düsen soru yanlis cevaplanirsa, diger soru gelmeye basliyor ancak
//çok çabuk cevaplanmissa, yeteri kadar inmemissa, yeni soru üstüne biniyor ve oyun sonlaniyor.
//Bu yüzden vaz geçtim.
//Yeniden koyulursa, fonksiyonun öntanimli degiskeni olarak qGap eklenmeli.
var n1=0;
var qLen=$("#pageMathrisPlayQuestions").children().length;	
for(var i=qLen;i>0;i--){

if($("#pageMathrisPlayQuestions div:nth-child("+i+")").attr("class").indexOf("moving")>0 && $("#pageMathrisPlayQuestions div:nth-child("+i+")").attr("class").indexOf("wrong")<1){
n1=1;
}

}
//alert(n1);
if(n1==0) playMathrisNewQuestion(qGap);
//hareket
}*/

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
/* pageMathrisPlay kodu sonu */



/* pageMathrixLevel kodu baslangici */
$("#pageMathrixLevel").live("pagebeforeshow", function(){
clearInterval(mathrixSetInt);
pageMathrixLevelLanguageChange();
gamesModesLevels(3, "Mathrix");
});


function pageMathrixLevelLanguageChange(){
var langID=1; //gameLang=="en" Ingilizce //Hiç bir dil seçili degilse otomatik Ingilizce olacak
langID=findlangID();

var spanEasyMathrix=["Leicht", "Easy", "F&aacute;cil", "Facile", "Facile", "Kolay"];
var spanModerateMathrix=["Moderieren", "Moderate", "Moderada", "Mod&eacute;r&eacute;", "Moderato", "Normal"];
var spanHardMathrix=["Schwer", "Hard", "Difficile", "Dur", "Difficile", "Zor"];

$("#spanEasyMathrix").html(spanEasyMathrix[langID]);
$("#spanModerateMathrix").html(spanModerateMathrix[langID]);
$("#spanHardMathrix").html(spanHardMathrix[langID]);

};
/* pageMathrixLevel kodu sonu */



/* pageMathrixPlay kodu baslangici */
var mathrixSetInt;

$("#pageMathrixPlay").live("pagebeforeshow", function(){
pageMathrixPlayLanguageChange();
});

function pageMathrixPlayLanguageChange(){

var langID=1; //gameLang=="en" Ingilizce //Hiç bir dil seçili degilse otomatik Ingilizce olacak
langID=findlangID();
//["", "", "", "", "", ""];

//var a=["", "", "", "", "", ""];
var popupMathrixPlaySucH1=["Gl&#220;ckw&#220;nsche", "Congratulations", "Congratulaciones", "F&eacute;licitations", "Congratulazioni", "Tebrikler"];
var popupMathrixPlaySucH3=["Sie wurde erfolgreich abgeschlossen.", "You completed successfuly.", "Ha completado con &eacute;xito.", "Vous avez termin&eacute; avec succ&eacute;s.", "Hai completato con successo.", "Ba&#351;ar&#305;yla tamamlad&#305;n&#305;z."];
var popupMathrixPlaySucSpan=["Ok", "Ok", "Aceptar", "D'accord", "Bene", "Tamam"];
var popupMathrixPlayUnSucH1=["Leider", "Sorry", "Arrepentido", "D&eacute;sol&eacute;", "Dispiacente", "Maalesef"];
var popupMathrixPlayUnSucH3=["Sie konnten nicht erfolgreich abzuschlie&szlig;en.", "You could not complete succesfully.", "No se pudo completar con &eacute;xito.", "On ne pouvait pas terminer avec succ&eacute;s.", "Non &eacute; in grado di completare con successo.", "Ba&#351;ar&#305;yla tamamlayamad&#305;n&#305;z."];
var popupMathrixPlayUnSucSpan=["Ok", "Ok", "Aceptar", "D'accord", "Bene", "Tamam"];

//$("#").html([langID]);
$("#popupMathrixPlaySucH1").html(popupMathrixPlaySucH1[langID]);
$("#popupMathrixPlaySucH3").html(popupMathrixPlaySucH3[langID]);
$("#popupMathrixPlaySucSpan").html(popupMathrixPlaySucSpan[langID]);
$("#popupMathrixPlayUnSucH1").html(popupMathrixPlayUnSucH1[langID]);
$("#popupMathrixPlayUnSucH3").html(popupMathrixPlayUnSucH3[langID]);
$("#popupMathrixPlayUnSucSpan").html(popupMathrixPlayUnSucSpan[langID]);

}


function playMathrix(level,score){
clearInterval(mathrixSetInt);
//$('#pageMathrixPlayQuestions').stop();
$.mobile.changePage( $("#pageMathrixPlay") , { transition: "none"} );
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
//var qTime;		//question time.
var sSucc;		//score success. Basarili kabul edilecek score

point=1;		//gameDifficulty=2 için degeri
totalQNum=20;		//gameDifficulty=2 için degeri
//qTime=1000;		//gameDifficulty=2 için degeri
sSucc=90;		//gameDifficulty=2 için degeri		scoreSuccess

if(gameDifficulty==0){
point=25;
totalQNum=20;
//qTime=1000;
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


result[0]='<div id="pageMatrixPlayQuestion'+iQuestion+'" class="ui-bar ui-bar-d ui-corner-all pageMathrixQuestion ui-bar2 shadow" style="margin-top:5px;"><table width="100%" align="center" border="0"><tbody><tr><td><img src="images/delete.png" onclick="playMathrixCal(\''+iQuestion+'\',\''+(eqRes*(-1))+'\')"></td><td><table width="" align="center" border="0"><tbody><tr>'+pointToComma(result[0])+'<td>'+eqSign[1]+'</td><td>'+pointToComma(result2)+'</td></tr></tbody></table></td><td align="right"><img src="images/check.png" onclick="playMathrixCal(\''+iQuestion+'\',\''+eqRes+'\')"></td></tr></tbody></table></div>';



result3=result3+result[0];
}

$("#pageMathrixPlayQuestions").html(result3);

var h;
var h2;
var h3;

h=$("#pageMathrixPlayQuestions").height();
//h2=$("#pageMathrixPlayQuestionsView").height();
$("#pageMathrixPlayQuestions").css("top",h*(-1)+"px");

var moveTime=500;	//moveTime: Her adimida beklenecek süre
var moveStep=5;	//moveStep : Her adimda kayacak miktar.

if(gameDifficulty==1) moveTime=450;
if(gameDifficulty==2) moveTime=400;
time=timeCal(moveTime);

mathrixSetInt=setInterval(function (){matrixQuestionsMove(moveStep)},moveTime);
//alert("cem2");
//h3=h+h2;
//h3="+="+h3+"px";

/*$('#pageMathrixPlayQuestions').animate({
top: h3
}, qTime, 'linear', function() {
	
// Animation complete.
var pScore;
pScore=$("#pageMathrixPlaySlider").val(score.toString());
if (pScore>=sSucc){
if(pLevels[gamePlayerID][3][gameDifficulty]==gameLevel){
changeLevel(3, gameDifficulty, (pLevels[gamePlayerID][3][gameDifficulty]*1+1));
}
$( "#popupMathrixPlaySuc" ).popup( "open" );

//Difficulty moderate ve hard'in açilma zamanlari
//if(pLevels[gamePlayerID][2][0]==5)	changeLevel(1, 1, 1);
//if(pLevels[gamePlayerID][2][1]==5)	changeLevel(1, 2, 1);
}
else{
$( "#popupMathrixPlayUnSuc" ).popup( "open" );
}

});*/


}

function matrixQuestionsMove(moveStep){
var h, h2, t, t2;

//h=$("#pageMathrixPlayQuestions").height();
h=$("#pageMathrixPlayQuestionsView").height();
t2=$("#pageMathrixPlayQuestions").offset().top;
t=$("#pageMathrixPlayQuestionsView").offset().top;


if(t2<t+h){
t2=t2+moveStep;//-t2;


$("#pageMathrixPlayQuestions").offset({ top: t2});
//$("#pageMathrixPlayQuestions").offset().top=t;
}
else{
//clearInterval(mathrixSetInt);
matrixControl("moveOut");
//$("#popupMathrixPlayUnSuc").popup("open");
}

//alert("cem5");
}

function matrixControl(moveOut){
var n, n2, points, gameDifficulty;
n=$("#pageMathrixPlayQuestions").children(".ui-bar").length;
n2=$("#pageMathrixPlayQuestions").children(".ui-disabled").length;
points=Number($("#pageMathrixPlaySlider").val());
gameDifficulty=lastSelDif[gamePlayerID][3];

var sSucc;		//score success. Basarili kabul edilecek score
sSucc=90;		//gameDifficulty=2 için degeri		scoreSuccess
if(gameDifficulty==0) sSucc=50;
if(gameDifficulty==1) sSucc=75;


//alert(n+" - "+n2);



if(n<=n2 && points<sSucc){
clearInterval(mathrixSetInt);
$("#popupMathrixPlayUnSuc").popup("open");
}
//else if(n<=n2 && points>=sSucc){
//clearInterval(mathrixSetInt);
//$("#popupMathrixPlaySuc").popup("open");
//if(pLevels[gamePlayerID][3][gameDifficulty]==gameLevel){
//changeLevel(3, gameDifficulty, (pLevels[gamePlayerID][3][gameDifficulty]*1+1));
//}
//}
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
/* pageMathrixPlay kodu sonu */





/* pageShootOutLevel kodu baslangici */
$("#pageShootOutLevel").live("pagebeforeshow", function(e, data){

clearInterval(gameCountDown);
/*$("#pageShootOutPlayTimeSpan").removeClass("time1");
$("#pageShootOutPlayTimeSpan").removeClass("time2");
$("#pageShootOutPlayTimeSpan").addClass("time1");*/

pageShootOutLevelLanguageChange();
gamesModesLevels(4, "ShootOut");
});


function pageShootOutLevelLanguageChange(){
var langID=1; //gameLang=="en" Ingilizce //Hiç bir dil seçili degilse otomatik Ingilizce olacak
langID=findlangID();

var spanEasyShootOut=["Leicht", "Easy", "F&aacute;cil", "Facile", "Facile", "Kolay"];
var spanModerateShootOut=["Moderieren", "Moderate", "Moderada", "Mod&eacute;r&eacute;", "Moderato", "Normal"];
var spanHardShootOut=["Schwer", "Hard", "Difficile", "Dur", "Difficile", "Zor"];

$("#spanEasyShootOut").html(spanEasyShootOut[langID]);
$("#spanModerateShootOut").html(spanModerateShootOut[langID]);
$("#spanHardShootOut").html(spanHardShootOut[langID]);

};
/* pageShootOutLevel kodu sonu */







/* pageShootOutPlay kodu baslangici */

//$("#pageShootOutPlay").live("orientationchange", function() {
//alert("cem");
//});
function playShootOutRearrange(){
var w0, w1, w2, w3, w4, w5, h0, h1, h2, t1, t2;

$("#pageShootOutPlayQuestions").find(".ui-bar").each(function(){

w0=$(window).width();
w1=$("#pageShootOutPlayQuestions").width();
w2=$(this).width();
w3=w1*100/w0;
w4=w2*100/w0

//w2=(($("#pageShootOutPlayQuestions").offset().left+Math.floor(Math.random()*(w0-w1-10)))*100/$(window).width()).toString();

w2=($("#pageShootOutPlayQuestions").offset().left+(Math.random()*(100-((w1*100)/w0)))).toString();
w5=100-w3+Math.random()*(100-2*(100-w3)-w4);
//alert(w0+" - "+w1+" - "+w2+" - "+w3+" - "+w4+" - "+w5);
if(w2<w1){
$(this).css("left",w5+"%");
}
else{
$(this).css("left","0px");
}

h0=$(window).height();
t1=$("#pageShootOutPlayQuestions").offset().top;
h1=h0-t1-h0*3/100;	//1=alttaki bosluk= %1 ekran yüksekligi
h2=$(this).height();


t2=(h0/100)*(t1*100/h0+Math.random()*(100-t1*100/h0-3-h2*100/h0));
//h2=($("#pageShootOutPlayQuestions").offset().top+Math.floor(Math.random()*(h0-h1))).toString();
//alert(h0+" - "+h1+" - "+h2+" - "+t1+" - "+t2)
$("#pageShootOutPlayQuestions").css("height",h1+"px");
$(this).css("top",t2+"px");
//alert(w0+"-"+w1+"-"+h0+"-"+h1+"-"+$(this).attr("id"));
//alert($(this).html());
});
$("#pageShootOutPlayQuestions").trigger("create");
}


function playShootOut(level,score){
//score bu oyunda gerekli degil.
//alert("cem");
gameLevel=level;
$.mobile.changePage( $("#pageShootOutPlay") , { transition: "none"} );

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


$("#pageShootOutPlay").live("pageshow", function(event, data){
playShootOutRearrange();
});




$("#pageShootOutPlay").live("pagebeforeshow", function(event, data){
pageShootOutPlayLanguageChange();
//$("#pageShootOutPlayQuestions").html("");
//alert("cem5");
$("#pageShootOutPlayQuestions").empty();

$("#pageShootOutPlaySlider").val("0");
$("#pageShootOutPlaySlider").slider('refresh');

$("#pageShootOutPlayTimeSpan").removeClass("time1");
$("#pageShootOutPlayTimeSpan").removeClass("time2");
$("#pageShootOutPlayTimeSpan").addClass("time1");

gameLevelsConfig();	//Oyunlarin, seviyeye bagli olarak ayarlari belirleniyor

gameDifficulty=lastSelDif[gamePlayerID][4];

//iRand ile Denklem olusturmakta kullanilacak seçeneklerin bulundugu yer belirlenecek
var iRand=Math.floor(Math.random()*gameDigit.length);

var result=[];	//result[0]; Esitligin html kodu	result[1]; Esitligin hesaplanan sonucu
var result2; //result2; Esitligin hesaplanan sonucundan farkli (veya farksiz) gösterilecek sonuç
var result3 =""; //result3; bütün sorulari barindiran degisken

var qCount;
qCount=100;		//100 sorudan 90'inin dogru yapilmasi lazim level atlamak için
if(gameDifficulty==0) qCount=20;	//20 sorudan 10'unun dogru yapilmasi lazim level atlamak için
if(gameDifficulty==1) qCount=50;	//50 sorudan 38'inin dogru yapilmasi lazim level atlamak için

var point;		//Dogru veya yanlis cevapta eklenecek veya çikarilacak puan
point=1;
if(gameDifficulty==0) point=25;
if(gameDifficulty==1) point=2;

for(iQuestion=0;iQuestion<qCount;iQuestion++){

result =creatEquation(iRand); 
result2=createResult(result[1]);

var eqSign=[];	//Esitsiligin isaretini belirlemekte kullanilacak
var eqRes;		//Esitsizligin dogrulugu veya yanlisligi


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

result[0]='<div id="pageShootOutPlayQuestion'+iQuestion+'" class="ui-bar ui-bar-d ui-corner-all pageShootOutQuestion ui-bar2 shadow" style="position:absolute; clear:none; float:none; width:auto;"><table align="center" border="0"><tbody><tr><td><span id="id'+iQuestion+'"></span><img src="images/delete.png" onclick="playShootOutCal(\''+iQuestion+'\',\''+(eqRes*(-1))+'\')"></td><td><table align="center" border="0"><tbody><tr>'+pointToComma(result[0])+'<td>'+eqSign[1]+'</td><td>'+pointToComma(result2)+'</td></tr></tbody></table></td><td align="right"><img src="images/check.png" onclick="playShootOutCal(\''+iQuestion+'\',\''+eqRes+'\')"></td></tr></tbody></table></div>';

result3=$("#pageShootOutPlayQuestions").html()+result[0];

//$("#pageShootOutPlayQuestions").html(result3);
$("#pageShootOutPlayQuestions").append(result[0]).trigger("create");

}
//alert($("#pageShootOutPlayQuestions").html());
var time=20;
if(gameDifficulty==1) time=275;
if(gameDifficulty==2) time=500;
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

var langID=1; //gameLang=="en" Ingilizce //Hiç bir dil seçili degilse otomatik Ingilizce olacak
langID=findlangID();
//["", "", "", "", "", ""];

//var a=["", "", "", "", "", ""];
var popupShootOutPlaySucH1=["Gl&#220;ckw&#220;nsche", "Congratulations", "Congratulaciones", "F&eacute;licitations", "Congratulazioni", "Tebrikler"];
var popupShootOutPlaySucH3=["Sie wurde erfolgreich abgeschlossen.", "You completed successfuly.", "Ha completado con &eacute;xito.", "Vous avez termin&eacute; avec succ&eacute;s.", "Hai completato con successo.", "Ba&#351;ar&#305;yla tamamlad&#305;n&#305;z."];
var popupShootOutPlaySucSpan=["Ok", "Ok", "Aceptar", "D'accord", "Bene", "Tamam"];
var popupShootOutPlayUnSucH1=["Leider", "Sorry", "Arrepentido", "D&eacute;sol&eacute;", "Dispiacente", "Maalesef"];
var popupShootOutPlayUnSucH3=["Sie konnten nicht erfolgreich abzuschlie&szlig;en.", "You could not complete succesfully.", "No se pudo completar con &eacute;xito.", "On ne pouvait pas terminer avec succ&eacute;s.", "Non &eacute; in grado di completare con successo.", "Ba&#351;ar&#305;yla tamamlayamad&#305;n&#305;z."];
var popupShootOutPlayUnSucSpan=["Ok", "Ok", "Aceptar", "D'accord", "Bene", "Tamam"];

//$("#").html([langID]);
$("#popupShootOutPlaySucH1").html(popupShootOutPlaySucH1[langID]);
$("#popupShootOutPlaySucH3").html(popupShootOutPlaySucH3[langID]);
$("#popupShootOutPlaySucSpan").html(popupShootOutPlaySucSpan[langID]);
$("#popupShootOutPlayUnSucH1").html(popupShootOutPlayUnSucH1[langID]);
$("#popupShootOutPlayUnSucH3").html(popupShootOutPlayUnSucH3[langID]);
$("#popupShootOutPlayUnSucSpan").html(popupShootOutPlayUnSucSpan[langID]);

}


function playShootOutCal(qNum, point){
//alert($('#pageShootOutPlayQuestion'+qNum).css("top"));
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

//alert(n+" - "+n2);

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
//difficulty degistirme kodlari da gelecek buraya
$("#popupShootOutPlaySuc").popup("open");

}
else{
$("#popupShootOutPlayUnSuc").popup("open");
}
}
/* pageShootOutPlay kodu sonu */












/*function page LanguageChange(){
var =["", "", "", "", "", ""];

$("#").html([langID]);
};*/

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


























function gamesModesLevels(mode1, mode2){
//mode1: hangi oyun modu için yapilacagi, numarasa 1:find out, 2-mathris ...	
//mode2: hangi oyun modu için yapilacagi, sayfa adi gelecek (FindOut, Mathris) gibi

//maxLevel: seçilen mode'un toplam kaç level oldugu. Böylece disable edilecek leveller belirlenecek
var maxLevel;
if(mode1==1){
maxLevel=100;
}
else if(mode1==2){
maxLevel=100;
}
else if(mode1==3){
maxLevel=100;
}
else if(mode1==4){
maxLevel=100;
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
//Gerekirse,  level=maxLevel; ayarlamsi yapilacak ve veritabanna ve pLevels degiskenine islenecek
//pLevels[gamePlayerID][mode1][dif]=level;
}
else{
levelHtml=levelHtml+'<a class="ui-btn ui-btn-up-d ui-shadow ui-btn-corner-all ui-disabled" data-wrapperels="span" data-iconshadow="true" data-shadow="true" data-corners="true" href="#" onclick="play'+mode2+'('+(level*1+1)+',0)" data-role="button" data-theme="d"><span class="ui-btn-inner ui-btn-corner-all"><span class="ui-btn-text">'+(level*1+1)+'</span></span></a>';
}

//for (i=2;i<maxLevel+1;i++){
//$("#"+mode2).find("#level"+i.toString()).removeClass("ui-disabled");	//Varsa, kaldirmis olacak
//$("#"+mode2).find("#level"+i.toString()).addClass("ui-disabled");
//}


for (i=level;i>0;i--){
levelHtml=levelHtml+'<a class="ui-btn ui-shadow ui-btn-corner-all ui-btn-up-d"  data-wrapperels="span" data-iconshadow="true" data-shadow="true" data-corners="true" href="#" onclick="play'+mode2+'('+i+',0)" data-role="button" data-theme="d"><span class="ui-btn-inner ui-btn-corner-all"><span class="ui-btn-text">'+i+'</span></span></a>';

//$("#"+mode2).find("#level"+i.toString()).removeClass("ui-disabled");
}

levelHtml=levelHtml+'</div><div class="ui-block-c"></div>';
$("#page"+mode2+"Levels").html(levelHtml);


}




//silinecek
function timeCalculate1(){



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

//silinecek
function playMathris2(level,score){

mathrisQuestionMove(level, iQuestion);

}

//silinecek
function mathrisQuestionMove2(level, iQuestion){
var moveStep=10;	//moveStep : Her adimda kayacak miktar.
var qGap=10;		//questionGap: Her soru arasindaki mesafe
var mathrisSetInt=[];
var t,t2;

var qLen=$("#pageMathrisPlayQuestions").children().length;	
t=$("#pageMathrisPlayQuestions").height();//+$("#pageMathrisPlayQuestions").offset().top;


for(var i=1;i<qLen+1;i++){
t2=$("#pageMathrisPlayQuestions div:nth-child("+i+")").outerHeight();
alert("cem "+qLen+" - "+t+" - "+i);
$("#pageMathrisPlayQuestions div:nth-child("+i+")").animate({
top: (t-qGap-t2)
}, {
duration: 10000,
easing: "linear",
step: function( now, fx ){
////
//
t2=$("#pageMathrisPlayQuestions div:nth-child("+i+")").offset().top;
//
if(i>1) t=$("#pageMathrisPlayQuestions div:nth-child("+(i-1)+")").offset().top;
//alert(i+" - "+t+" - "+t2);
if(t2>t/2){
alert("cem");
$("#pageMathrisPlayQuestions div:nth-child("+i+")").stop();
}
else{
$("#pageMathrisPlayQuestions div:nth-child("+i+")").css( "top", now );
}
////
////
alert("ce  mmm");
}

});

}


//if(qLen==1){






//
//
//var qLen=$("#pageMathrisPlayQuestions").children().length;	
//
//if(qLen==1){
//t=$("#pageMathrisPlayQuestions").height();
//}
//else{
//t=$("#pageMathrisPlayQuestions div:nth-child("+(qLen-1)+")").offset().top;
//}
//t2=$("#pageMathrisPlayQuestions div:nth-child("+(qLen)+")").offset().top;
//
//$("#pageMathrisPlayQuestions div:nth-child("+(qLen)+")").css("top","+="+moveStep+"px");
//
////}
////else{
////t=$("#pageMathrisPlayQuestions div:nth-child("+(qLen-1)+")").offset().top;
////}
//t2=$("#pageMathrisPlayQuestions div:nth-child("+(qLen)+")").offset().top;
//if(t2+qGap+moveStep<t){
//
////animate
//
//
//
//}
//else{
//$("#pageMathrisPlayQuestions div:nth-child("+(qLen)+")").css("top",(t2+qGap)+"px");
//}
//
//
//
//
//
//for(i=1;i<qLen+1;i++){
//t=0; //top
//for(i2=1;i2<i+1;i2++){	//Önceki sorularin yükseklikleri hesaplaniyor.
//if(t==0){
//t=$("#pageMathrisPlayQuestions div:nth-child("+i2+")").outerHeight();
//}
//else{
//t=t+$("#pageMathrisPlayQuestions div:nth-child("+i2+")").outerHeight()+qGap;
//}
//}
//t2=$("#pageMathrisPlayQuestions").outerHeight();
////alert("t= "+t+" -t2= "+t2);
//if(t>=t2){
//return false;
////Ekran doldu, oyunun sonu.
//}
//
////i. sorunun olmasi gereken "top" degeri hesaplaniyor
//t=$("#pageMathrisPlayQuestions").outerHeight()+$("#pageMathrisPlayQuestions").offset().top-t;
////t=$("#pageMathrisPlayQuestions").outerHeight()+$("#pageMathrisPlayQuestions").offset().top-t-qGap;
//
////i. sorunun su anki "top" degeri
//t2=$("#pageMathrisPlayQuestions div:nth-child("+i+")").offset().top;//+qGap;
//
//
////moveStep>qGap olma durumu düsünüldü
//if(t>=t2+moveStep){
//
//mathrisSetInt[i]=setInterval(function (){
//var t3, t4;
//
//qLen=$("#pageMathrisPlayQuestions").children().length;
//
//for(i3=1;i3<qLen+1;i3++){
//t3=0;	
//for(i4=1;i4<i3+1;i4++){	//Önceki sorularin yükseklikleri hesaplaniyor.
//if(t3==0){
//t3=$("#pageMathrisPlayQuestions div:nth-child("+i4+")").outerHeight();
//}
//else{
//t3=t3+$("#pageMathrisPlayQuestions div:nth-child("+i4+")").outerHeight()+qGap;
//}
//}
//t4=$("#pageMathrisPlayQuestions").outerHeight();
//
//if((t3+qGap>=t4)){	//if((t3>=t4+moveStep)){
////alert("oyun bitti");
//return false;
////Ekran doldu, oyunun sonu.
//}
//
////i3. sorunun olmasi gereken "top" degeri hesaplaniyor
//t3=$("#pageMathrisPlayQuestions").outerHeight()+$("#pageMathrisPlayQuestions").offset().top-t3;
//
////i3. sorunun su anki "top" degeri
//t4=$("#pageMathrisPlayQuestions div:nth-child("+i3+")").offset().top;//+qGap;
//
//
////moveStep>qGap olma durumu düsünüldü
//if(t3>=t4+moveStep){
//$("#pageMathrisPlayQuestions div:nth-child("+i3+")").css("top","+="+moveStep+"px");
//}
//else if(t3>=t4){
//$("#pageMathrisPlayQuestions div:nth-child("+i3+")").css("top",t3+"px");
//////alert("elseif");
////$("#pageMathrisPlayQuestions div:nth-child("+i3+")").css("top", t3.toString+"px");
////$("#pageMathrisPlayQuestions div:nth-child("+i3+")").removeClass("moving");
////window.clearInterval(mathrisSetInt[i3]);
////qMNew(level, iQuestion);
//}
//else{
////alert("else");
//$("#pageMathrisPlayQuestions div:nth-child("+i3+")").css("top", t3+"px");
//$("#pageMathrisPlayQuestions div:nth-child("+i3+")").removeClass("moving");
//window.clearInterval(mathrisSetInt[i3]);
//qMNew(level, iQuestion);
//}
//}
//}, moveTime);
//
//
//}
//else if(t>t2){
//$("#pageMathrisPlayQuestions div:nth-child("+i+")").css("top", t+"px");
//$("#pageMathrisPlayQuestions div:nth-child("+i+")").removeClass("moving");
//window.clearInterval(mathrisSetInt[i]);
//qMNew(level, iQuestion);
//}
//else{
//$("#pageMathrisPlayQuestions div:nth-child("+i+")").css("top", t+"px");
//$("#pageMathrisPlayQuestions div:nth-child("+i+")").removeClass("moving");
//window.clearInterval(mathrisSetInt[i]);
//qMNew(level, iQuestion);
//}
//
//}

//alert("cem");
}





































/* pageIntro kodu baslangici */
function pageIntroLanguageChange(){
var langID=1; //gameLang=="en" Ingilizce //Hiç bir dil seçili degilse otomatik Ingilizce olacak
langID=findlangID();

var intro1=["Dies<br>Ist<br>Nur<br>Ein<br>Anfang", "This<br>Is<br>Just<br>A<br>Beginning", "Esto<br>Es<br>S&oacute;lo<br>El<br>Comienzo", "Ce<br>N'est<br>Qu'un<br>D&eacute;but", "Questo<br>&Eacute;<br>Solo<br>Un<br>Inizio", "Bu<br>Sadece<br>Bir<br>Ba&#351;lang&#305;&#231;"];
var intro2=["Der<br>Tag<br>Wird<br>Kommen", "The<br>Day<br>Is<br>Coming", "Se<br>Acerca<br>El<br>D&iacute;a", "Le<br>Jour<br>Viendra", "Il<br>Giorno<br>Sta<br>Arrivando", "B&#252;y&#252;k<br>G&#252;n<br>Geliyor"];
var intro3=["Bereiten<br>Sie<br>Sich", "Prepare<br>Yourself", "Prepararse", "Pr&eacute;parez-vous", "Preparatevi", "Haz&#305;rlan&#305;n"];

$("#intro1").html(intro1[langID]);
$("#intro2").html(intro2[langID]);
$("#intro3").html(intro3[langID]);

};

$("#pageIntro").live("pagebeforeshow", function(event, data){
//alert($(window).outerHeight());
//alert($("#pageIntroContent").height());
$("#pageIntroContent").height($(window).outerHeight());
//pageIntroLanguageChange();
})

$("#pageIntro").live("pageshow", function(event, data){


/*$('#intro1').animate({
fontSize: '40px'
}, 5000, function() {
// Animation complete.
$('#intro1').css("font-size","0px");
$('#intro2').animate({
fontSize: '40px'
}, 5000, function() {
// Animation complete.
$('#intro2').css("font-size","0px");
$('#intro3').animate({
fontSize: '40px'
}, 5000, function() {
// Animation complete.
$('#intro3').css("font-size","0px");
$.mobile.changePage( $("#pagePlayers") , { transition: "none"} );
});

});

});*/
setTimeout(function(){
$.mobile.changePage( $("#pagePlayers") , { transition: "none"} );
},3000);

});
/* pageIntro kodu sonu */


/* Page kodu baslangici */
/* Page kodu sonu */


/* Page kodu baslangici */
/* Page kodu sonu */



/* Page kodu baslangici */
/* Page kodu sonu */