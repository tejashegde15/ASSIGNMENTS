function call(){
	var val=document.getElementById("lis").innerHTML
	var newval=val+"<li>"+document.getElementById("inp").value+"</li>";
	document.getElementById("lis").innerHTML=newval;
	
}





function newElement() {
	  
	  var li = document.createElement("li");
	  li.className="lis";
	  var inputValue = document.getElementById("inp").value;
	  var inputTime = document.getElementById("time").value;
	  var t = document.createTextNode(inputValue);
	  li.appendChild(t);
	  
	  var nowh=new Date().getHours();
	  var nowm=new Date().getMinutes();
	  var present=nowh*3600 + nowm*60;
	 
	  console.log(inputTime);
	  
	  var givt=inputTime.split(":");
	 
	  var givs=Number(givt[0])*3600+Number(givt[1])*60;
	  
	  var dist=givs-present;
	  
	  if((dist<=0)||(inputTime=="")){
		  alert("Time already elapsed.")
		  exit;
	  }
	  else{
		  document.getElementById("lis").appendChild(li);
	  document.getElementById("inp").value = "";

	  var span = document.createElement("SPAN");
	  var txt = document.createTextNode(inputTime+"  "+"\u00D7");
	  span.className = "close";
	  span.appendChild(txt);
	  li.appendChild(span);
	  
	
	  
	  var close = document.getElementsByClassName("close");
	  for (i = 0; i < close.length; i++) {
	    close[i].onclick = function() {
	      var div = this.parentElement;
	      div.style.display = "none";
	    }
	  }
	  
	  if(dist<0){
		  alert("Time already passed");
	  }
	  setTimeout(function(){
		  alert("Remainder for your event:-"+inputValue);
		 
	  },dist*1000)
	}
}


var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


