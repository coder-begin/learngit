	var newWin;
	var timeId; 
			function closeWin(){
				 newWin.close();
				
				
			}
			function openWin(){
				newWin=open("BOM-test.html","test");
				
				
				
			}
			function closeFatherWin(){
				
				opener.close();//只有ie和谷歌可以使用
				
			}
			function movWin(){
				moveTo(30,30);//只有ie能使用
				
				
				
			}
			function setStatus(){
				
				window.defaultStatus="wowowoow";
				
			}
			function setLocaTime(){
				
				var nowTime=Date();
				var timeshow=nowTime.toLocaleTimeString();
				document.write(timeshow);
				
				
			}
			function setTimer(){
				
				timeId=setTimeout(setLocaTime(),1000);
				
			}
			
			
