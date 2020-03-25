
$(document).ready(function() {

  

    $("#login").click(function() {
       
             validateLogin();


     });

    
})

function loadStorage(){
    $("#content").load("html/localStorage.html");
}

function validateLogin()
{
            var lunm = document.getElementById('uname').value;
            var lpss = document.getElementById('psw').value;
            

           //Validation of UserName text field 
                if(lunm == null || lunm == "")
                {
                alert("Username Cannot be Empty ");
                return false;
                }
        
                
            //validation of password
                if(lpss == null || lpss == "")
                {
                alert("password  cannot be Empty !!!");
                return false;
		}

       
		loginValidate();

}

function loginValidate()
{
    var lunm = document.getElementById('uname').value;
    var lpss = document.getElementById('psw').value;
            
   var ar = new Array(lunm,lpss);
   var obj = { 
        email : lunm,
        password:lpss
    };
        
        var sendInfo = JSON.stringify(obj);
            
        console.log(sendInfo);
       

        $.ajax({
           type: "POST",
           url: "http://localhost:8080/NSS/login",
            contentType: "application/json;charset=utf-8",
           dataType: "text",
           success: function(data) {  
           			if(data == 0)
           			{
           				 alert(" Sorry No Data Found \n Username & Password not matched !!!");  
            	
           			} 
           			else
           			{
           				alert("Login Success...");
					storeData();
           			}
               },  
            error: function() {  
                alert('Error in Database');  
            }  ,

           data: sendInfo
	});
}

function storeData()
{
		localStorage.username = document.getElementById("uname").value;
		alert(localStorage.username);
		loadStorage();
}

         

