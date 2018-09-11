counter = 0;
//mdata[counter].rightans=1
mdata = 0;
score = 0;
var nextflag = true;

function end(){
	document.getElementById("Q1").innerHTML = "";
    document.getElementById("Para").innerHTML = "";
    document.getElementById("opt1").innerHTML = "";
    document.getElementById("opt2").innerHTML = "";
    document.getElementById("opt3").innerHTML = "";
    document.getElementById("opt4").innerHTML = "";   
    document.getElementById("opt4").innerHTML = "";   
    var opt=document.getElementById("opti1");
    opt.setAttribute("style","display: none");
    var opt=document.getElementById("opti2");
    opt.setAttribute("style","display: none");
    var opt=document.getElementById("opti3");
    opt.setAttribute("style","display: none");
    var opt=document.getElementById("opti4");
    opt.setAttribute("style","display: none");
    var opt=document.getElementById("first");
    opt.setAttribute("style","display: none");
    
    var opt=document.getElementById("score");
    opt.setAttribute("style","display: block; color: green; position: relative; text-align: center; font-size: x-large;");
    opt.innerHTML = "Congratulations! \n You have scored "+score+" on 30 points."
    
}

function next() {
	var opt=document.getElementsByName("option1");
	for(var i=0; i<opt.length; i++){
		if(opt[i].checked){
			nextflag = false;
		}
		opt[i].disabled = false;
	}
	if(nextflag){
		alert("You didnt select any option.");
		return(null);
	}
	// if(counter==0)	counter++;
	counter = counter + 1;
    var mydata = JSON.parse(data);
	// alert(counter);
	// alert(mydata[counter].trivia);
     
     mdata = mydata;
     //alert(mydata[0].opt2);
    // alert(mydata[0].trivia);
    // alert(mydata[0].ser);
     ques = mydata[counter].ques;
     ser = mydata[counter].ser;
     opt1 = mydata[counter].opt1;
     opt2 = mydata[counter].opt2;
     opt3 = mydata[counter].opt3;
     opt4 = mydata[counter].opt4;
     document.getElementById("Q1").innerHTML = "Question "+ser +":";
     document.getElementById("Para").innerHTML = ques;
     document.getElementById("opt1").innerHTML = opt1;
     document.getElementById("opt2").innerHTML = opt2;
     document.getElementById("opt3").innerHTML = opt3;
     document.getElementById("opt4").innerHTML = opt4;   
     
     var rw = document.getElementById("rw");
     rw.innerHTML = "";
     document.getElementById("Trivia").innerHTML = "";
  
     for(var i=0; i<opt.length; i++)
    	 opt[i].checked=false;
     
     nextflag=true;
     if(counter == 3){
    	 end();
     }
     
     //alert(score);
}	

function submit(){
	var mdata = JSON.parse(data);
	var opt=document.getElementsByName("option1");
	var op;
	for(var i=0; i<opt.length; i++){
		if(opt[i].checked){
			op=opt[i].value;
		}
		opt[i].disabled = true;
	}
	var rw = document.getElementById("rw");
	//alert(mdata[counter].rightans)
	if(op==mdata[counter].rightans){
		rw.innerHTML = "Right Answer";
		rw.setAttribute("style","color: green;");
		score = score + 10;
	}
	else{
		rw.innerHTML = "Wrong Answer";
		rw.setAttribute("style","color: red;");
	}
	
	document.getElementById("Trivia").innerHTML = mdata[counter].trivia;
	
	
}

function removetop() {
	var top = document.getElementById("top");
	top.setAttribute("style","display: block");
	var topbutton = document.getElementById("topbutton");
	topbutton.setAttribute("style","display: none");
	
	var mydata = JSON.parse(data);
    mdata = mydata;
    //alert(mydata[0].opt2);
   // alert(mydata[0].trivia);
   // alert(mydata[0].ser);
    ques = mydata[0].ques;
    ser = mydata[0].ser;
    opt1 = mydata[0].opt1;
    opt2 = mydata[0].opt2;
    opt3 = mydata[0].opt3;
    opt4 = mydata[0].opt4;
    document.getElementById("Q1").innerHTML = "Question "+ser +":";
    document.getElementById("Para").innerHTML = ques;
    document.getElementById("opt1").innerHTML = opt1;
    document.getElementById("opt2").innerHTML = opt2;
    document.getElementById("opt3").innerHTML = opt3;
    document.getElementById("opt4").innerHTML = opt4;   
}