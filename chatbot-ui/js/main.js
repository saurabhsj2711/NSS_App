function loadHome() {
    $("#content").load("html/home.html");
}

function loadContact()
{
    $("#content").load("html/contact.html");
}

function loadRegister(){
    $("#content").load("html/register.html");
}



function loadBots(bots) {
    //make $.ajax call 
    /*var resp = {
        "bots": [{"id":"1", "name": "My buddy", "description":"This is your friendly chatbot"},
        {"id":"2", "name": "My buddy 2", "description":"This is another your friendly chatbot"}]
    }*/



	alert(bots);
	alert( bots[0]);
alert( bots["description"]);
    for(var i=0; i<bots.length;i++) {
        bot = bots[i];
        var x = "<div class='xs-3'><div class='card' style='width: 18rem;'><div class='card-body'><h5 class='card-title' id='1'>" + bot["name"] + "</h5><p class='card-text'>" + bot["description"] + "</p><a href='#' id='chat' class='btn btn-primary'>Chat</a></div></div></div>"
        $("#botList").append(x);
    }
    
}

////////////////////////////// Ajax Call //////////////////////////////////////
function ajaxCall()
{
	var resp = [];
	$.ajax({  
		    url: 'http://localhost:8080/NSS/getAllEvents',  
		    type: 'GET',  
		    dataType: 'json',  
		    success: function(data, textStatus, xhr) {  
		        console.log(JSON.stringify(data));  
			
			
				resp.push(JSON.stringify(data));
			alert(JSON.parse(resp));
				loadBots(JSON.parse(resp));
		    },  
		    error: function(xhr, textStatus, errorThrown) {  
		        console.log('Error in Database');   
		    }  
		});
	
}

$(document).ready(function() {

	
    loadHome();

    $("#navHome").click(function() {
        loadHome();
    });

    $("#navBots").click(function() {
        $("#content").load("html/bots.html", ajaxCall);
    });

    $("#navContact").click(function() {
        loadContact();
    });
    
    $("#navRegister").click(function() {
        loadRegister();
    });

   $("#navLogin").click(function() {
        loadRegister();
    });

    $(document).on('click', '#chat', function() {
       alert($(this).text()); 
    });
})
