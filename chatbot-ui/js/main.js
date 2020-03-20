function loadHome() {
    $("#content").load("html/home.html");
}

function loadContact()
{
    $("#content").load("html/contact.html");
}

/*function loadRegister()
{
    $("#content").load("js/register1.js");
}*/


function loadBots() {
    //make $.ajax call 
    var resp = {
        "bots": [{"id":"1", "name": "My buddy", "description":"This is your friendly chatbot"},
        {"id":"2", "name": "My buddy 2", "description":"This is another your friendly chatbot"}]
    }
    bots = resp['bots']
    for(var i=0; i<bots.length;i++) {
        bot = bots[i];
        var x = "<div class='xs-4'><div class='card' style='width: 18rem;'><div class='card-body'><h5 class='card-title' id='"+ bot["id"] +  "'>" + bot["name"] + "</h5><p class='card-text'>" + bot["description"] + "</p><a href='#' id='chat' class='btn btn-primary'>Chat</a></div></div></div>"
        $("#botList").append(x);
    }
    
}

$(document).ready(function() {

    loadHome();

    $("#navHome").click(function() {
        loadHome();
    });

    $("#navBots").click(function() {
        $("#content").load("html/bots.html", loadBots);
    });

    $("#navContact").click(function() {
        loadContact();
    });
    
    /*$("#navRegister").click(function() {
        loadRegister();
    });*/

    $(document).on('click', '#chat', function() {
       alert($(this).text()); 
    });
})
