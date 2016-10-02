var newWin;
var timeId;


function closeWin() {
	newWin.close();

}

function openWin() {
	newWin = open("BOM-test.html", "test");

}

function closeFatherWin() {

	opener.close(); //只有ie和谷歌可以使用

}

function movWin() {
	moveTo(30, 30); //只有ie能使用

}

function setStatus() {

	window.defaultStatus = "wowowoow";

}


function setLocaTime() {

	var nowTime = Date();
	document.getElementById("spaninner").innerHTML=nowTime;
			
}

function setTimer() {

	 var timeId = setInterval("setLocaTime()", 100);

}
function getBrowName(){
	var browerName= navigator.userAgent;
	var getBrower;
	if(browerName.indexOf("Firefox")!=-1){
		getBrower="火狐浏览器";
		
	}
	else if(browerName.indexOf("Chrome")!=-1){
		getBrower="谷歌浏览器";
	}
	else if(browerName.indexOf("NET")!=-1){
		getBrower="IE浏览器";
		
	}
	else {
		getBrower="不知名浏览器";
	
	}
	document.getElementById("spaninner").innerHTML="你的浏览器是:"+getBrower;
}

function docInfo(){
	with(document){
		bgColor="white";//背景色
		fgColor="yellow"//前景色
		linkColor="burlywood";//没有访问
		alinkColor="chocolate";//正在访问
		vlinkColor="darkseagreen";//访问过的
		
	}
	
	
}
var picID=document.getElementById("pic");
function nextPic(){

//	var getPicName=picID.src.substr(0,1);
var img= document.images[0];
switch(getPicName){
		case 1:picID.src="/img/2.jpg";
		break;
		case 2:picID.src="/img/3.jpg";
		break;
		case 3:picID.src="/img/1.jpg";
		break;
	
	}
	
	
	
}
