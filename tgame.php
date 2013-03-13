<!DOCTYPE html> 
<html> 
<head> 
<meta charset="utf-8">
<title>tgame</title> 
<meta name="viewport" content="width=device-width, initial-scale=1"> 
<link rel="stylesheet" href="tgame.css" />
<link rel="stylesheet" href="jquery.mobile-1.2.0.min.css" />

<script src="jquery-1.8.3.min.js"></script>
<script src="jquery.mobile-1.2.0.min.js"></script>
<script src="jquery.jqmts.js"></script>

<script src="functions.js"></script>

<!--<script src="phonegap.js"></script>
<script src="cordova-2.2.0.js"></script>-->

<script type="text/javascript">
//Oyunun her yerinde kullanılacak bazı değişkenler
//Veritabanından alınan bilgiler (p = player)
var gameLang="";			//Oyun dili
var gamePlayerID="";		//Oyuncu id

//Oyuncunun seçimleri
var gameMode;				//Oyun modu
var gameOperation=[[]];			//Oyun işlem türü
var gameOCount=[[]];				//Oyuns işlem sayısı
var gameDigit=[[]];				//Oyun hane sayısı
var gameNumber=[[]];				//Oyun sayı türü
var gameDifficulty;			//Oyun zorluğu 0-1-2
var gamelevel;				//Oyun seviyesi



//Oyuncu bilgileri
var pId=new Array(); 		//id
var pName=new Array();		//name
var pFreemode=new Array();	//freemode seviyesi (level)
var pFindout=new Array();	//findout seviyesi (level)
var pMathris=new Array();	//mathris seviyesi (level)
var pMathrix=new Array();	//Mathrix seviyesi (level)
var pShootout=new Array();	//shootout seviyesi (level)

var gameMessage1=new Array();	//Henüz kullanmadım, çok dil için dizi oluşturmak gerek

function startGame(){
//lang="en";
//alert("UPDATE GAME SET language = '" + lang + "' WHERE id = '" + 1 + "'");
////Oynun başlangıcında dil kontrol edilecek.
//if(gameLang==""){
//$.mobile.changePage( $("#pageLang") , { transition: "slide"} );
//}
//else{
//$.mobile.changePage( $("#pagePlayers") , { transition: "slide"} );
//}
}

/* Veritananı bağlantı kodları başlangcı */
//Veritabanı olmadan oyun çalışmayacağı için açılışta ilk yapılacak iş bu olacak.
document.addEventListener("deviceready", onDeviceReady, false);



    // Cordova is ready
    //
    function onDeviceReady() {
		alert("onDeviceReady tamamdır");
        //Veritabanı açılıyor (yoksa yaratılacak)
		var db = window.openDatabase("tGameDB", "1.0", "tGame Crazy Math DB", 1000000);
		
		//Oyunun ilk açılışı ise
		//Veritabanına tablolar oluşturulacak
		db.transaction(createTable, errorCB, successCB);
		
		//Oyunun dili öğrenilecek
		db.transaction(getLangDB, errorCB, successCB);
		db.transaction(getUserInfoDB, errorCB, successCB);
    }
	
	
    // Populate the database 
	//
    function createTable(gameDB) {
		//Tablolar mevcut değilse oluşturulacak (oyun yüklendikten sonra ilk defa açılıyorsa).
         gameDB.executeSql('CREATE TABLE IF NOT EXISTS game (id unique, language)');
		 //gameDB.executeSql('CREATE TABLE IF NOT EXISTS players (id unique, name)');
		 //gameDB.executeSql('CREATE TABLE IF NOT EXISTS levels (id unique, player_id, freemode, findout, mathris, mathrix, shootout)');
		 gameDB.executeSql('CREATE TABLE IF NOT EXISTS players (id unique, name, freemode, findout, mathris, mathrix, shootout)');
		 alert ("veritabanı, game ve players tabloları oluşturuldu");

         //tx.executeSql('DROP TABLE IF EXISTS GAME');
//         tx.executeSql('DROP TABLE IF EXISTS GAME');
//         tx.executeSql('CREATE TABLE IF NOT EXISTS GAME (id unique, language)');
//         tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "First row")');
//         tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Second row")');
    }


// Transaction error callback
    //
    function errorCB(err) {
		//Veritabanına bağlanmakta sorun yaşanması durumu
        alert("Error processing SQL: "+err);
    }

    // Transaction success callback
    //
    function successCB() {
		//Veritabanına başarıyla bağlanılması durumu
        alert("success!");
    }
	
	function(updateCB(){
	//Veritabanında güncelleme yapıldığında, yani bir değer update edildiğinde
	
	}

	function getLangDB(gameDB) {
		//Oyunun daha önce açılıp, dil seçimi yapılıp yapılmadığı bulunuyor.
		//Yapılmadıysa dil seçim sayfasına,
		//aksi halde oyuncu seçim sayfasın yönlendirme yapılıyor.
		gameDB.executeSql('SELECT * FROM game', [], function(gameDB, results) {
		var len = results.rows.length;
		if(len!=1){
		//Dil seçim sayfası açılacak
		$.mobile.changePage( $("#pageLang") , { transition: "slide"} );
		}
		else{
		gameLang=results.rows.item(i).language;
		$.mobile.changePage( $("#pagePlayers") , { transition: "slide"} );
		}
	}, errorCB);
	}
	
	
	
	function gameLangChange(lang){
	//Oyun dili değiştirildiğinde çağrılacak
	//Veritabanındaki dili ve gameLang değişkenini değiştiren kod
	gameLang=lang;
	var db = window.openDatabase("tGameDB", "1.0", "tGame Crazy Math DB", 1000000);
	db.transaction(function(gameDB){
		gameDB.executeSql('SELECT * FROM game', [], function(gameDB, results) {
			var len = results.rows.length;
			if(len==0){
			gameDB.executeSql('INSERT INTO game (id, language) VALUES (1, "'+gameLang+'")');
			}
			else{
			gameDB.executeSql("UPDATE game SET language = '" + gameLang + "' WHERE id = '" + 1 + "'");
			}	
		}, errorCB);
	}, [], updateCB, errorCB);
	
	}
	
	
	function getUserInfoDB(){
	//Kayıtlı oyuncu varsa,
	//oyunculara ait bilgiler alınıp sayfalara ve değişkenlere yazılacak.
	var db = window.openDatabase("tGameDB", "1.0", "tGame Crazy Math DB", 1000000);
	db.transaction(function(gameDB){
	gameDB.executeSql('SELECT * FROM players', [], function(gameDB, results) {
		var len = results.rows.length;
		if(len>0){
		var htmlCode="";

			for(i=0;i<len;i++){
		pId[i]=results.rows.item(i).id;
		pName[i]=results.rows.item(i).name;
		pFreemode[i]=results.rows.item(i).freemode;
		pFindout[i]=results.rows.item(i).findout;
		pMathris[i]=results.rows.item(i).mathris;
		pMathrix[i]=results.rows.item(i).mathrix;
		pShootout[i]=results.rows.item(i).shootout;
		
//		gameLang=results.rows.item(i).language;
htmlCode=htmlCode+'<a href="#" data-role="button" data-icon="star" data-theme="d"'+
'onClick="playerSelect(\''+pId[i]+'\')">'+pName[i]+'</a>'+
'<div class="ui-grid-a">'+
'<div class="ui-block-a">'+
'<div class="ui-grid-a" style="font-weight:bold">'+
'<div class="ui-block-a"><span class="levelSpanFreemode spanLevel">Free Mode</span></div>'+
'<div class="ui-block-b">: '+pFreemode[i]+'</div>'
'<div class="ui-block-a"><span class="levelSpanFindout spanLevel">Find Out</span></div>'+
'<div class="ui-block-b">: '+pFindout[i]+'</div>'+
'<div class="ui-block-a"><span class="levelSpanMathris spanLevel">Mathris</span></div>'+
'<div class="ui-block-b">: '+pMathris[i]+'</div>'+
'<div class="ui-block-a"><span class="levelSpanMathrix spanLevel">Mathrix</span></div>'+
'<div class="ui-block-b">: '+pMathrix[i]+'</div>'+
'<div class="ui-block-a"><span class="levelSpanShootout spanLevel">Shoot Out</span></div>'+
'<div class="ui-block-b">:'+pShootout[i]+'</div>'+
'</div>'+
'</div>'+
'<div class="ui-block-b">'+
'<a href="#" data-role="button" data-icon="delete" data-theme="d"'+
'onClick="playerDelete(\''+pId[i]+'\')"><span class="playerDelSpan">Delete</span></a>'+
'</div>'+
'</div>';
			}
		//htmlcode sayfaya aktarılıyor
		$("#palyers").html(htmlcode);
		}
	}, errorCB);
	
	
	}, [], updateCB, errorCB);
	}



	function gamePlayerCreate(name){
	//Veritabanına yeni bir oyuncu kaydeden kod
	var db = window.openDatabase("tGameDB", "1.0", "tGame Crazy Math DB", 1000000);
	db.transaction(function(gameDB, name){
	gameDB.executeSql('INSERT INTO players (id, name, freemode, findout, mathris, mathrix, shootout) VALUES ("", "'+name+'", 1, 1, 1, 1, 1)');
	}, [], updateCB, errorCB);
	
	}
	
	function gamePlayerDelete(id){
	//Veritabanından bir oyuncu silen kod
	var db = window.openDatabase("tGameDB", "1.0", "tGame Crazy Math DB", 1000000);
	db.transaction(function(gameDB){
	gameDB.executeSql("DELETE FROM players WHERE id='"+id+"'");
	}, [], updateCB, errorCB);
	
	}
	
/* Veritananı bağlantı kodları sonu */



function yerlestir(divId){
var divTop;
divTop = $("#"+divId).position().top;
$("#"+divId).css('top', divTop+10);
//$('#yaz1').css("top", 200);
}
function yerlestir2(){
var divTop;
divTop = $("#yaz1").position().top;
$("#yaz1").css('top', divTop+10);
divTop = $("#yaz2").position().top;
$("#yaz2").css('top', divTop+10);
}
var har;
function baslangic(){
//Hareket başlangıcı
//har=setInterval(yerlestir2,1000);

var h=$("#ana_sayfa").height();
var w=$("#ana_sayfa").width();
var say;
say=parseInt("1")+parseInt("3");
//say=say*1+0;
alert("cem "+say);
//alert(h+" - "+w);
//alert(divTop);
//divTop = $("#yaz1").attr('width');
//alert(divTop);
//yerlestir("yaz1");
//var dbShell = window.openDatabase(database_name, database_version, database_displayname, database_size);

}
function durdur(){
	//alert("cem");
har=window.clearInterval(har)
}

$("#wrongSignPng").live("click", function() {
alert("wrong clicked");									  
});
$("#correctSignPng").live("click", function() {
alert("correct clicked");									  
});

function createQuestion(){

}





</script>
</head> 
<body id="body" onLoad="startGame();"> 











<!-- /Sayfa başlangıcı -->
<!--İlk açılış sayfası olarak burası kullanılacak-->
<div data-role="page" id="page1">
<div data-role="header" data-theme="b" data-position="fixed">
<a href="#" data-role="button" data-icon="arrow-l" data-theme="b" data-iconpos="left" style="width:20%">&nbsp;</a>
<a href="#pageLang" data-role="button" data-icon="arrow-r" data-theme="b" data-iconpos="right" style="width:20%">&nbsp;</a>
<h1>tGame - Crazy Math</h1>
</div><!-- /header -->
<div data-role="content" id="page1Content" align="center">

Crazy Math is loading...

</div>
</div><!-- /page -->



<!-- /Sayfa başlangıcı -->
<!--Program yüklendikten sonraki ilk açılışta dil seçimi yaptıracak sayfa-->
<div data-role="page" id="pageLang">
<div data-role="header" data-theme="b" data-position="fixed">
<a href="#page1" data-role="button" data-icon="arrow-l" data-theme="b" data-iconpos="left" style="width:20%">&nbsp;</a>
<a href="#pagePlayers" data-role="button" data-icon="arrow-r" data-theme="b" data-iconpos="right" style="width:20%">&nbsp;</a>
<h1>tGame - Crazy Math</h1>
</div><!-- /header -->
<div data-role="content" id="page2content" align="center">

<img src="images/de.png" onClick="chooseLang('de');">
<img src="images/en.png" onClick="chooseLang('en');">
<img src="images/es.png" onClick="chooseLang('es');">
<img src="images/fr.png" onClick="chooseLang('fr');">
<img src="images/it.png" onClick="chooseLang('it');">
<img src="images/tr.png" onClick="chooseLang('tr');">

</div>
</div><!-- /page -->





<!-- /Sayfa başlangıcı -->   
<div data-role="page" id="pagePlayers">
<div data-role="header" data-theme="b" data-position="fixed">
<a href="#pageLang" data-role="button" data-icon="arrow-l" data-theme="b" data-iconpos="left" style="width:20%">&nbsp;</a>
<a href="#pageGameModes" data-role="button" data-icon="arrow-r" data-theme="b" data-iconpos="right" style="width:20%">&nbsp;</a>
<h1>tGame - Crazy Math</h1>
</div><!-- /header -->

<div data-role="content" id="pagePlayerscontent">
<label for="langSelect" class="select" style="margin-top:20px; font-weight:bold"><h2 id="langLabel">Language :</h2></label>
<select name="langSelect" id="langSelect" onChange="langChangeSelect();">
   <option value="de">Deutsch</option>
   <option value="en" selected>English</option>
   <option value="es">Espanol</option>   
   <option value="fr">Français</option>
   <option value="it">Italiano</option>
   <option value="tr">Türkçe</option>
</select>
<br>
<h2 id="playersH">Players :</h2>
<div id="palyers">
<a href="#" data-role="button" data-icon="star" data-theme="d" onClick="playerSelect('id')">Oyuncu 1</a>
<div class="ui-grid-a">
<div class="ui-block-a">

<div class="ui-grid-a" style="font-weight:bold">

<div class="ui-block-a"><span class="levelSpanFreemode">Free Mode</span></div>
<div class="ui-block-b">: 1</div>

<div class="ui-block-a"><span class="levelSpanFindout">Find Out</span></div>
<div class="ui-block-b">: 1</div>

<div class="ui-block-a"><span class="levelSpanMathris">Mathris</span></div>
<div class="ui-block-b">: 1</div>

<div class="ui-block-a"><span class="levelSpanMathrix">Mathrix</span></div>
<div class="ui-block-b">: 1</div>

<div class="ui-block-a"><span class="levelSpanShootout">Shoot Out</span></div>
<div class="ui-block-b">: 1</div>
</div>

</div>
<div class="ui-block-b"><a href="#" data-role="button" data-icon="delete" data-theme="d"><span class="playerDelSpan" onClick="playerDelete('id')">Delete</span></a>
</div>
</div>
</div>
    
<br>

<h2 id="newPlayerH">Create New Player :</h2>
<div class="ui-grid-a">
<div class="ui-block-a">
<label for="basic" style="margin-top:10px; font-weight:bold" id="playerNameLabel">Name</label>
</div>
<div class="ui-block-b">
<input type="text" name="name" id="basic" value="" />
</div>
</div>
<a href="#" data-role="button" data-theme="d"><span id="playerCreateSpan">Create</span></a>
</div> 

</div><!-- /page -->








<!-- /Sayfa başlangıcı -->   
<div data-role="page" id="pageGameModes">
<div data-role="header" data-theme="b" data-position="fixed">
<a href="#page1" data-role="button" data-icon="arrow-l" data-theme="b" data-iconpos="left" style="width:20%">&nbsp;</a>
<h1>tGame - Crazy Math</h1>
<a href="#page5" data-role="button" data-icon="arrow-r" data-theme="b" data-iconpos="right" style="width:20%">&nbsp;</a>

</div><!-- /header -->
<div data-role="content" id="page2content">

<a href="#" onClick="gameModeSelect(0);" data-role="button" data-theme="d">Free Mode (MathFree)</a>
<a href="#" onClick="gameModeSelect(1);" data-role="button" data-theme="d">Find-Out(Mathout-MathFind)</a>
<a href="#" onClick="gameModeSelect(2);" data-role="button" data-theme="d">Mathris</a><!--class="ui-disabled"-->
<a href="#" onClick="gameModeSelect(3);" data-role="button" data-theme="d">Mathrix</a>
<a href="#" onClick="gameModeSelect(4);" data-role="button" data-theme="d">Shoot-Out</a>

</div>
</div><!-- /page -->







<!-- /Sayfa başlangıcı -->   
<div data-role="page" id="pageFreeModeLevel">
<div data-role="header" data-theme="b" data-position="fixed">
<a href="#pageGameModes" data-role="button" data-icon="arrow-l" data-theme="b" data-iconpos="left" style="width:20%">&nbsp;</a>
<h1>tGame - Crazy Math</h1>
<a href="#" data-role="button" data-icon="arrow-r" data-theme="b" data-iconpos="right" style="width:20%">&nbsp;</a>
</div><!-- /header -->

<div data-role="content" id="page" align="center">

<fieldset data-role="controlgroup" data-mini="true" data-type="horizontal" >

<input type="radio" name="gHardness" id="easy" value="1" checked />
<label for="easy">Kolay</label>

<input type="radio" name="gHardness" id="moderate" value="2" disabled />
<label for="moderate">Normal</label>

<input type="radio" name="gHardness" id="hard" value="3" disabled />
<label for="hard">Zor</label>

</fieldset>

<br>

<h3>İşlemler (Operations)</h3>
<label><input type="checkbox" name="operation" id="oAdd" data-mini="true" /><span id="spanOAdd">Toplama</span></label>
<label><input type="checkbox" name="operation" id="oSub" data-mini="true" disabled /><span id="spanOSub">Çıkarma</span></label>
<label><input type="checkbox" name="operation" id="oMul" data-mini="true" disabled /><span id="spanOMul">Çarpma</span></label>
<label><input type="checkbox" name="operation" id="oDiv" data-mini="true" disabled /><span id="spanODiv">Bölme</span></label>

<br>

<h3>Sayılar (Numbers)</h3>
<label><input type="checkbox" name="number" id="nInt" data-mini="true" /><span id="spanNInt">Tam Sayılar</span></label>

<label><input type="checkbox" name="number" id="nDec" data-mini="true" disabled /><span id="spanNDec">Ondalık Sayılar</span></label>

<label><input type="checkbox" name="number" id="nRat" data-mini="true" disabled /><span id="spanNRat">Kesirli Sayılar</span></label>

<label><input type="checkbox" name="number" id="nExp" data-mini="true" disabled /><span id="spanNExp">Üslü Sayılar</span></label>

<label><input type="checkbox" name="number" id="nRoo" data-mini="true" disabled /><span id="spanNRoo">Köklü Sayılar</span></label>

<br>

<h3>Hane Sayısı (Digit)</h3>

<label><input type="checkbox" name="digit" id="digit1" data-mini="true" /><span id="spanDigit1">X</span></label>

<label><input type="checkbox" name="digit" id="digit2" data-mini="true" disabled /><span id="spanDigit2">XX</span></label>

<label><input type="checkbox" name="digit" id="digit3" data-mini="true" disabled /><span id="spanDigit3">XXX</span></label>

<label><input type="checkbox" name="digit" id="digit4" data-mini="true" disabled /><span id="spanDigit4">XXXX</span></label>

<label><input type="checkbox" name="digit" id="digit5" data-mini="true" disabled /><span id="spanDigit5">XXXXX</span></label>


<br>

<h3>İşlem sayısı (Operation count)</h3>

<label><input type="checkbox" name="oCount" id="oCount1" data-mini="true" /><span id="spanCount1">
X ? X</span></label>

<label><input type="checkbox" name="oCount" id="oCount2" data-mini="true" disabled /><span id="spanCount2">
X ? X ? X</span></label>

<label><input type="checkbox" name="oCount" id="oCount3" data-mini="true" disabled /><span id="spanCount3">
X ? X ? X ? X</span></label>

<label><input type="checkbox" name="oCount" id="oCount4" data-mini="true" disabled /><span id="spanCount4">
X ? X ? X ? X ? X</span></label>

<label><input type="checkbox" name="oCount" id="oCount5" data-mini="true" disabled /><span id="spanCount5">
X ? X ? X ? X ? X ? X</span></label>



<br>

<h3>İşaret</h3>

<label><input type="checkbox" name="eSign" id="eSign0" data-mini="true" /><span id="spanESign0">=</span></label>

<label><input type="checkbox" name="eSign" id="eSign1" data-mini="true" disabled /><span id="spanESign1">&ne;</span></label>

<label><input type="checkbox" name="eSign" id="eSign2" data-mini="true" disabled /><span id="spanESign2">&gt;</span></label>

<label><input type="checkbox" name="eSign" id="eSign3" data-mini="true" disabled /><span id="spanESign3">&ge;</span></label>

<label><input type="checkbox" name="eSign" id="eSign4" data-mini="true" disabled /><span id="spanESign4">&lt;</span></label>

<label><input type="checkbox" name="eSign" id="eSign5" data-mini="true" disabled /><span id="spanESign5">&le;</span></label>

<br>

<a href="#" onClick="playFreeMode();" data-role="button" data-theme="d">Play</a>

<!--<div class="ui-bar ui-bar-d ui-corner-all">
Bu uygulama, www.ozgurceuc.com sitesinin sunduğu uçuş arama hizmetini mobil olarak kullanabilmenizi sağlamak amacıyla hazırlanmıştır. 
</div>

<div class="content-primary">
<a href="#" data-role="button" data-icon="home" data-theme="d">Ana Sayfa</a>
<a href="#secenekler" data-role="button" data-icon="search" data-theme="d">Arama Sayfası</a>
<a href="#sonuclar" data-role="button" data-icon="grid" data-theme="d" data-iconpos="right">Sonuçlar Sayfası</a>
</div>

<div class="ui-bar ui-bar-d ui-corner-all">
Bu uygulama; www.ozgurceuc.com sunduğu bir hizmettir. İnternet bağlantısı gerektirmektedir.
</div>-->

</div><!-- /content -->
</div><!-- /page -->




<!--Boş sayfa-->
<!-- /Sayfa başlangıcı -->   
<div data-role="page" id="pageFreeModePlay" ><!--style="background-image:url(background.png); background-repeat:no-repeat; background-size:cover; background-position:center center;"-->
<div data-role="header" data-theme="b" data-position="fixed">
<a href="#page1" data-role="button" data-icon="arrow-l" data-theme="b" data-iconpos="left" style="width:20%">&nbsp;</a>
<h1>tGame - Crazy Math</h1>
<a href="#page3" data-role="button" data-icon="arrow-r" data-theme="b" data-iconpos="right" style="width:20%">&nbsp;</a>
</div><!-- /header -->
<!--<img class="pageFreeModePlayImage" src="background.png">-->
<div data-role="content" id="pageFreeModePlayContent">
<input type="range" name="pageFreeModePlaySlider" id="pageFreeModePlaySlider" value="0" min="0" max="100" data-highlight="true" step="1" data-mini="true" disabled />



<div id="pageFreeModePlayQuestion" class="ui-bar ui-bar-d ui-corner-all pageFreeModePlayQuestion">
<!--<table class="equationTable">
<tr>
<td>35<sup>3</sup><hr>25</td>
<td>x</td>
<td>58</td>
<td>+</td>
<td>51</td>
<td valign="top">-</td>
<td>5</td>
<td>&divide;<sup>3</sup>&radic;</td>
<td>2</td>
<td>x-+/</td>
</tr>

</table>
Bu uygulama; www.ozgurceuc.com sunduğu bir hizmettir. İnternet bağlantısı gerektirmektedir.-->
</div>
<a href="#" onClick="playFreeMode();" data-role="button" data-theme="d">Play</a>
</div>
<input type="text" value="" id="playFreeModeAnswer" style="visibility:hidden" disabled>
<div data-role="footer" data-theme="b" data-position="fixed" align="center">

<a href="#" id="playFreeModeWrong" onClick="" data-icon="delete" data-theme="b" data-iconpos="left" style="width:48%">Yanlış</a>
<a href="#" id="playFreeModeRight" onClick="" data-icon="check" data-theme="b" data-iconpos="right" style="width:48%">Doğru</a>

</div><!-- /navbar --> 
</div><!-- /page -->
















<!-- /Sayfa başlangıcı -->   
<div data-role="page" id="pageFindOutLevel">
<div data-role="header" data-theme="b" data-position="fixed">
<a href="#pageGameModes" data-role="button" data-icon="arrow-l" data-theme="b" data-iconpos="left" style="width:20%">&nbsp;</a>
<h1>tGame - Crazy Math</h1>
<a href="#" data-role="button" data-icon="arrow-r" data-theme="b" data-iconpos="right" style="width:20%">&nbsp;</a>
</div><!-- /header -->

<div data-role="content" id="pageFindOutLevelContent" align="center">


<fieldset data-role="controlgroup" data-mini="true" data-type="horizontal" >

<input type="radio" name="gHardness" id="easy" value="1" />
<label for="easy">Kolay</label>

<input type="radio" name="gHardness" id="moderate" value="2" checked="checked" />
<label for="moderate">Normal</label>

<input type="radio" name="gHardness" id="hard" value="3" />
<label for="hard">Zor</label>

</fieldset>

<br>
<h3>Level</h3>
<a href="#" onClick="playFindOut(1)" data-role="button" data-theme="d" id="level1" >1</a>
<a href="#" onClick="playFindOut(2)" data-role="button" data-theme="d" id="level2" >2</a>
<a href="#" onClick="playFindOut(3)" data-role="button" data-theme="d" id="level3" >3</a>

</div><!-- /content -->
</div><!-- /page -->





<!--Boş sayfa-->
<!-- /Sayfa başlangıcı -->   
<div data-role="page" id="pageFindOutPlay">
<div data-role="header" data-theme="b" data-position="fixed">
<a href="#page1" data-role="button" data-icon="arrow-l" data-theme="b" data-iconpos="left" style="width:20%">&nbsp;</a>
<h1>tGame - Crazy Math</h1>
<a href="#page3" data-role="button" data-icon="arrow-r" data-theme="b" data-iconpos="right" style="width:20%">&nbsp;</a>
</div><!-- /header -->

<div data-role="content" id="pageFindOutPlayContent">
<input type="range" name="pageFindOutPlaySlider" id="pageFindOutPlaySlider" value="0" min="0" max="100" data-highlight="true" step="1" data-mini="true" disabled />


<!--<img class="pageFreeModePlayImage" src="background.png">-->
<div id="pageFindOutPlayQuestion" class="ui-bar ui-bar-d ui-corner-all pageFindOutPlayQuestion">

</div>
<a href="#" onClick="playFindOut();" data-role="button" data-theme="d">Play</a>
</div>
<input type="text" value="" id="playFreeModeAnswer" style="visibility:hidden" disabled>
<div data-role="footer" data-theme="b" data-position="fixed" align="center">
<table width="100%" style="margin:0px;">
<tr>
<td><a href="#" id="playFindOutEq" onClick="" data-role="button" data-theme="b">=</a></td>
<td><a href="#" id="playFindOutNotEq" onClick="" data-role="button" data-theme="b">&ne;</a></td>
<td><a href="#" id="playFindOutBig" onClick="" data-role="button" data-theme="b">&gt;</a></td>
<td><a href="#" id="playFindOutEqBig" onClick="" data-role="button" data-theme="b">&ge;</a></td>
<td><a href="#" id="playFindOutLess" onClick="" data-role="button" data-theme="b">&lt;</a></td>
<td><a href="#" id="playFindOutEqLess" onClick="" data-role="button" data-theme="b">&le;</a></td>
</tr></table>
</div><!-- /navbar --> 
</div><!-- /page -->






<!-- /Sayfa başlangıcı -->   
<div data-role="page" id="pageMathrisLevel">
<div data-role="header" data-theme="b" data-position="fixed">
<a href="#pageGameModes" data-role="button" data-icon="arrow-l" data-theme="b" data-iconpos="left" style="width:20%">&nbsp;</a>
<h1>tGame - Crazy Math</h1>
<a href="#" data-role="button" data-icon="arrow-r" data-theme="b" data-iconpos="right" style="width:20%">&nbsp;</a>
</div><!-- /header -->

<div data-role="content" id="pageMathrisLevelContent" align="center">


<fieldset data-role="controlgroup" data-mini="true" data-type="horizontal" >

<input type="radio" name="gHardness" id="easy" value="1" />
<label for="easy">Kolay</label>

<input type="radio" name="gHardness" id="moderate" value="2" checked="checked" />
<label for="moderate">Normal</label>

<input type="radio" name="gHardness" id="hard" value="3" />
<label for="hard">Zor</label>

</fieldset>

<br>
<h3>Level</h3>
<a href="#" onClick="playMathris(1, null)" data-role="button" data-theme="d" id="level1" >1</a>
<a href="#" onClick="playMathris(2,'')" data-role="button" data-theme="d" id="level2" >2</a>
<a href="#" onClick="playMathris(3,'')" data-role="button" data-theme="d" id="level3" >3</a>

</div><!-- /content -->
</div><!-- /page -->





<!--Boş sayfa-->
<!-- /Sayfa başlangıcı -->   
<div data-role="page" id="pageMathrisPlay">
<div data-role="header" data-theme="b" data-position="fixed">
<a href="#page1" data-role="button" data-icon="arrow-l" data-theme="b" data-iconpos="left" style="width:20%">&nbsp;</a>
<h1>tGame - Crazy Math</h1>
<a href="#page3" data-role="button" data-icon="arrow-r" data-theme="b" data-iconpos="right" style="width:20%">&nbsp;</a>
</div><!-- /header -->

<div data-role="content" id="pageMathrisPlayContent" >

<input type="range" name="pageShootOutPlaySlider" id="pageMathrisPlaySlider" value="0" min="0" max="100" data-highlight="true" step="1" data-mini="true" disabled />

<div id="pageMathrisPlayQuestions2" style="margin:0px; padding:0px 0px; height:400px; overflow:hidden; background-color:#35F">

<!--<img class="pageFreeModePlayImage" src="background.png">-->
<div id="pageMathrisPlayQuestions" style="margin:0px; padding:0px 0px; height:300px; overflow:hidden; border:2; border-color:#006; background-color:#09F; position:relative;">


<!--Sorular buraya gelecek-->
</div>
</div>
</div>

</div><!-- /page -->








<!-- /Sayfa başlangıcı -->   
<div data-role="page" id="pageMathrixLevel">
<div data-role="header" data-theme="b" data-position="fixed">
<a href="#pageGameModes" data-role="button" data-icon="arrow-l" data-theme="b" data-iconpos="left" style="width:20%">&nbsp;</a>
<h1>tGame - Crazy Math</h1>
<a href="#" data-role="button" data-icon="arrow-r" data-theme="b" data-iconpos="right" style="width:20%">&nbsp;</a>
</div><!-- /header -->

<div data-role="content" id="pageMathrixLevelContent" align="center">


<fieldset data-role="controlgroup" data-mini="true" data-type="horizontal" >

<input type="radio" name="gHardness" id="easy" value="1" />
<label for="easy">Kolay</label>

<input type="radio" name="gHardness" id="moderate" value="2" checked="checked" />
<label for="moderate">Normal</label>

<input type="radio" name="gHardness" id="hard" value="3" />
<label for="hard">Zor</label>

</fieldset>

<br>
<h3>Level</h3>
<a href="#" onClick="playMathrix(1)" data-role="button" data-theme="d" id="level1" >1</a>
<a href="#" onClick="playMathrix(2)" data-role="button" data-theme="d" id="level2" >2</a>
<a href="#" onClick="playMathrix(3)" data-role="button" data-theme="d" id="level3" >3</a>

</div><!-- /content -->
</div><!-- /page -->





<!--Boş sayfa-->
<!-- /Sayfa başlangıcı -->   
<div data-role="page" id="pageMathrixPlay">
<div data-role="header" data-theme="b" data-position="fixed">
<a href="#page1" data-role="button" data-icon="arrow-l" data-theme="b" data-iconpos="left" style="width:20%">&nbsp;</a>
<h1>tGame - Crazy Math</h1>
<a href="#page3" data-role="button" data-icon="arrow-r" data-theme="b" data-iconpos="right" style="width:20%">&nbsp;</a>
</div><!-- /header -->

<div data-role="content" id="pageMathrixPlayContent" style="margin:0px; padding:0px" >
<div data-role="content">
<input type="range" name="pageMathrixPlaySlider" id="pageMathrixPlaySlider" value="0" min="0" max="100" data-highlight="true" step="1" data-mini="true" disabled />
</div>

<!--<img class="pageFreeModePlayImage" src="background.png">-->
<div id="pageMathrixPlayQuestionsView" style="margin:0px; padding:0px 0px; height:300px; overflow:hidden">
<div id="pageMathrixPlayQuestions" style="margin:0px; padding:0px 5px; position:relative;">

<!--Sorular buraya gelecek-->
</div>



</div>
</div>

</div><!-- /page -->



















<!-- /Sayfa başlangıcı -->   
<div data-role="page" id="pageShootOutLevel">
<div data-role="header" data-theme="b" data-position="fixed">
<a href="#pageGameModes" data-role="button" data-icon="arrow-l" data-theme="b" data-iconpos="left" style="width:20%">&nbsp;</a>
<h1>tGame - Crazy Math</h1>
<a href="#" data-role="button" data-icon="arrow-r" data-theme="b" data-iconpos="right" style="width:20%">&nbsp;</a>
</div><!-- /header -->

<div data-role="content" id="pageShootOutLevelContent" align="center">


<fieldset data-role="controlgroup" data-mini="true" data-type="horizontal" >

<input type="radio" name="gHardness" id="easy" value="1" />
<label for="easy">Kolay</label>

<input type="radio" name="gHardness" id="moderate" value="2" checked="checked" />
<label for="moderate">Normal</label>

<input type="radio" name="gHardness" id="hard" value="3" />
<label for="hard">Zor</label>

</fieldset>

<br>
<h3>Level</h3>
<a href="#" onClick="playShootOut(1)" data-role="button" data-theme="d" id="level1" >1</a>
<a href="#" onClick="playShootOut(2)" data-role="button" data-theme="d" id="level2" >2</a>
<a href="#" onClick="playShootOut(3)" data-role="button" data-theme="d" id="level3" >3</a>

</div><!-- /content -->
</div><!-- /page -->





<!--Boş sayfa-->
<!-- /Sayfa başlangıcı -->   
<div data-role="page" id="pageShootOutPlay">
<div data-role="header" data-theme="b" data-position="fixed">
<a href="#page1" data-role="button" data-icon="arrow-l" data-theme="b" data-iconpos="left" style="width:20%">&nbsp;</a>
<h1>tGame - Crazy Math</h1>
<a href="#page3" data-role="button" data-icon="arrow-r" data-theme="b" data-iconpos="right" style="width:20%">&nbsp;</a>
</div><!-- /header -->

<div data-role="content" id="pageShootOutPlayContent" >

<input type="range" name="pageShootOutPlaySlider" id="pageShootOutPlaySlider" value="0" min="0" max="100" data-highlight="true" step="1" data-mini="true" disabled />


<!--<img class="pageFreeModePlayImage" src="background.png">-->
<div id="pageShootOutPlayQuestions" style="margin:0px; padding:0px 0px; height:300px; overflow:hidden; border:2; border-color:#006; background-color:#09F">


<!--Sorular buraya gelecek-->

</div>
</div>

</div><!-- /page -->



















<!-- /Sayfa başlangıcı -->   
<div data-role="page" id="page3">

<div data-role="header" data-theme="b" data-position="fixed">
<a href="#page5" data-role="button" data-icon="arrow-l" data-theme="b" data-iconpos="left" style="width:20%">&nbsp;</a>
<h1>tGame - Crazy Math</h1>
<a href="#page2" data-role="button" data-icon="arrow-r" data-theme="b" data-iconpos="right" style="width:20%">&nbsp;</a>

</div><!-- /header -->
    
<br>
<div data-role="content" id="ana_sayfa2_icerik">


<div id="divQuestion" class="ui-bar ui-bar-d ui-corner-all">
2<sup>3</sup>+4<sub>5</sub>&radic;3 &le; &ge; &ne; &asymp;
</div>




</div><!-- /content -->
<div data-role="footer" data-theme="b" data-position="fixed" style="height:100px">
<a href="#" data-role="button" data-icon="delete" data-theme="b" data-iconpos="left" style="width:20%">&nbsp;</a>

<a href="#sonuclar" data-role="button" data-icon="check" data-theme="b" data-iconpos="right" style="width:20%" style="text-align:right; height:50px">&nbsp;</a>
</div>
</div><!-- /page -->











































<!--Boş sayfa-->
<!-- /Sayfa başlangıcı -->   
<div data-role="page" id="page20">

<div data-role="header" data-theme="b" data-position="fixed">
<a href="#page1" data-role="button" data-icon="arrow-l" data-theme="b" data-iconpos="left" style="width:20%">&nbsp;</a>
<h1>tGame - Crazy Math</h1>
<a href="#page3" data-role="button" data-icon="arrow-r" data-theme="b" data-iconpos="right" style="width:20%">&nbsp;</a>

</div><!-- /header -->
<div data-role="content" id="page2content">

</div>
</div><!-- /page -->




</body>
</html>
