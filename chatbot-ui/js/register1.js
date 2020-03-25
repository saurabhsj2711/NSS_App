function loadRegister(){
    $("#content").load("html/register.html");
}

function loadLogin(){
    $("#content").load("html/login.html");
}

function acceptForm()
{

	alert("Ajax fuction ...");
   var nm = document.getElementById('name').value;
   var pss = document.getElementById('password').value;
   var eml = document.getElementById('email').value;
   var year = document.getElementById('year').value;
   var cnt = document.getElementById('contactno').value;
   var branch = document.getElementById('branch').value;
   
   var ar = new Array(nm,pss,eml,year,cnt,branch);
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

        $.ajax({
           type: "POST",
           url: "http://localhost:8080/NSS/register",
            contentType: "application/json;charset=utf-8",
           dataType: "text",
           success: function(data) {  
                alert(data + nm +" Successfully Registered");  
            },  
            error: function() {  
                alert('Error in Database');  
            }  ,

           data: sendInfo
       });
         
};


function validate()
{
           var nm = document.getElementById('name').value;
   	   var pss = document.getElementById('password').value;
           var eml = document.getElementById('email').value;
	   var year = document.getElementById('year').value;
	   var cnt = document.getElementById('contactno').value;
	   var branch = document.getElementById('branch').value;
   
           

           //Validation of Name text field
                if(nm == null || nm == "")
                {
                alert("Name cannot be Empty !!!");
                return false;
                }
       			
               
            //Validation of Password
                var r;
                if (pss.match(/[a-z]/g) && pss.match(/[A-Z]/g) && pss.match(/[0-9]/g) && pss.match(/[^a-zA-Z\d]/g) && pss.length>=8 )
                {
                r= 1;
                }
                else
                {
                r =0;
                }
                if (r==0)
                {
alert("Invalid Format !!!!,\n    Password must contain   att least 1 uppercase , lowecase , digit, special character  of minimum size 8");        
		return false;
                }
		

            //Validation of Email-id

                var atposition=eml.indexOf("@");  
                var dotposition=eml.lastIndexOf(".");  
                if (atposition < 1 || dotposition<atposition+2 || dotposition+2>=eml.length){  
                alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);                  
		return false;
               
                }


            //validation of Year
                if(year == 0 || year == "-")
                {
                alert("Year  has not been selected !!!");               
		return false;

                }
               
            //Validation of Contact
                if(cnt == null || cnt== "") {
                alert("Error: Cell number must not be null.");              
		return false;
               
                }

                if(cnt.length != 10) {
                alert("Phone number must be 10 digits.");              
		return false;
               
                }

		
	//validation of Branch
                if(branch == 0 || branch == "-")
                {
                alert("Branch  has not been selected !!!");
		return false;

                }

alert("Validation Done");
 acceptForm();

}

/////////////////////////login Validate //////////////////////////////////////

function loginValidate()
{
	   var eml = document.getElementById('loginEmail').value;
   	   var pss = document.getElementById('loginPassword').value;


	alert(email+"logged in successfully");
}


/////////////////////////////////////////////////////////////////////////////



$(document).ready(function() {

    
       	    
             $("#navRegister").click(function() {
       
             		loadRegister();
     	     });


	    $("#register").click(function(){

		
		            validate();

				
		

	    });

	    $("#navLogin").click(function() {
       
             		loadLogin();
     	     });

  })
