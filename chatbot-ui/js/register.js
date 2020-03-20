
    
<script>

function loadRegister()
{
	$("#content").load("html/register.html");
}

function makecall(sendInfo)
{
	$.ajax({
           type: "POST",
           url: "http://localhost:8080/NSS/register",
            contentType: "application/json;charset=utf-8",
           dataType: "text",
	   data: sendInfo,
           success: function(data) {  
                alert(data + nm +" Successfully Registered");  
            },  
            error: function() {  
                alert('Error in Database');  
            }  ,

		
       });
}

function validateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true);
  }
    alert("You have entered an invalid email address!");
    return (false);
}

function checkPassword(inputtxt) 
{ 
var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
if(inputtxt.value.match(decimal)) 
{ 
return true;
}
 
alert('8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character');
return false;

} 

function phoneNumber(inputtxt)
{
  var phoneno = /^\d{10}$/;
  if((inputtxt.value.match(phoneno)))
        {
      return true;
        }
      else
        {
        alert("enter valid number");
        return false;
        }
}


$(document).ready(function(){

alert("dom ready");

loadRegister();


alert("now register");

		$("#register").click(function(){

             //////////////////Validate name text field ////////////////////////
			 var nm = document.getElementById('name').value;

			if (nm == "")
				{
				alert("Please input a Value");
				return false;
				}

	/////////////////  Validate password /////////////////////////////////
		   var pss = document.getElementById('password').value;

			if (empt == "")
				{
				alert("Please input a Value");
				return false;
				}

			checkPassword(pss);
			

	////////////////// validate Email id //////////////////////////////
		   var eml = document.getElementById('email').value;
			validateEmail(eml);
		   	
	//////////////////// Validate year ///////////////////////////////
		   var year = document.getElementById('year').value;

	////////////////// Validate conatact number /////////////////////
		   var cnt = document.getElementById('contactno').value;
			phoneNumber(cnt);

	/////////////////// Validate branch //////////////////////////
		   var branch = document.getElementById('branch').value;



		alert("we have done all validations");
		   
		  
		   var obj = { 
			name :nm,
			email:eml,
			password:pss,
			contact :cnt,
			year :year,
			branch:branch
			};

			var sendInfo = JSON.stringify(obj);
			    
			console.log(sendInfo);

			makecall(sendInfo);
			
			 alert("done");

		       

		    });

    
});

</script>
