var interval = 1000;
function showCountDown(year,month,day,obj)
{
	var now = new Date();
	var endDate = new Date(year, month-1, day);
	var leftTome=endDate.getTime()-now.getTime();
	var leftsecond = parseInt(leftTome/1000);
	var day1=Math.floor(leftsecond/(60*60*24));
	var hour=Math.floor((leftsecond-day1*24*60*60)/3600);
	var minute=Math.floor((leftsecond-day1*24*60*60-hour*3600)/60);
	var second=Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60);
	function isZero(num){return num < 10 ? "0"+num : num}
	
	var oinput = document.getElementById(obj).getElementsByTagName('li');
	
	var str = ("00"+day1.toString()).substr(-3)+isZero(hour).toString()+isZero(minute).toString()+isZero(second).toString()
	
	for(var i = 0;i < oinput.length;i++){
		
		oinput[i].style.backgroundPosition = "0 " + -str.charAt(i)*185+"px";
	}	

}
window.setInterval(function(){showCountDown(2016,8,30,'count');},interval);
