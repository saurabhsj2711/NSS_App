<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<!------ Include the above in your HEAD tag ---------->

<link href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-2.1.3.min.js"></script>
<!------ Include the above in your HEAD tag ---------->


<script src="jquery-1.7.1.js" type="text/javascript"></script>  
     <!-- <script>  
         $(document).ready(function () {  
             $("#register").click(function () {  
                 var person = new Object();  
                 person.name = $('#name').val();  
                 person.email = $('#email').val();  
                 person.password = $('#password').val();  
                 person.contact = $('#contactno').val();  
                 person.year = $('#year').val();  
                 person.branch = $('#branch').val();  
                 $.ajax({  
                     url: 'http://localhost:8080/NSS/register',  
                     type: 'POST',  
                     dataType: 'json',  
                     data: person,  
                     success: function (data, textStatus, xhr) {  
                         console.log(data);  
                     },  
                     error: function (xhr, textStatus, errorThrown) {  
                         console.log('Error in Operation');  
                     }  
                     
                 });  
             });  
         });  
    </script>   -->
<script>
$(document).ready(function() {
    var usernameSelected = $('#username');
    var usernameWarning = $('#usernameResult');
  
    usernameSelected.keyup(function() {
        var url= 'http://localhost:8080/NSS/register';
        var formData = {
        'name': $('#name').val(),
        'email':$('#email').val(),
        'password':$('#password').val(),
        'contact':$('#contactno').val(),
        'year':$('#year').val(),
        'branch':$('#branch').val()
      };
  
      $.ajax({
        type: 'POST',
        url: url,
        data: formData,
        dataType: 'JSON',
        encode: true,
        success: function(response, status, xhr) {
          if (response.result) {
            usernameWarning.html("The username you typed has been used!");
          } else {
            usernameWarning.html("You may freely use this username!");
          }
        },
        error: function(xhr, status, error) {
          usernameWarning.html("Something went wrong!");
        }
      });
    });
  });
</script>
<div class="container">
            <form class="form-horizontal" role="form">
                <h2>Registration</h2>
                <div class="form-group">
                    <label for="fullName" class="col-sm-3 control-label">Name</label>
                    <div class="col-sm-9">
                        <input type="text" id="name" placeholder="Full Name" class="form-control" autofocus>
                    </div>
                </div>
                <!-- <div class="form-group">
                    <label for="lastName" class="col-sm-3 control-label">Last Name</label>
                    <div class="col-sm-9">
                        <input type="text" id="lastName" placeholder="Last Name" class="form-control" autofocus>
                    </div>
                </div> -->
                <div class="form-group">
                    <label for="email" class="col-sm-3 control-label">Email* </label>
                    <div class="col-sm-9">
                        <input type="email" id="email" placeholder="Email" class="form-control" name= "email">
                    </div>
                </div>
                <div class="form-group">
                    <label for="password" class="col-sm-3 control-label">Password*</label>
                    <div class="col-sm-9">
                        <input type="password" id="password" placeholder="Password" class="form-control">
                    </div>
                </div>
                <div class="form-group">
                    <label for="password" class="col-sm-3 control-label">Confirm Password*</label>
                    <div class="col-sm-9">
                        <input type="password" id="password" placeholder="Password" class="form-control">
                    </div>
                </div>
                <div class="form-group">
                    <label for="Contactno" class="col-sm-3 control-label">Contact No.*</label>
                    <div class="col-sm-9">
                        <input type="text" id="contactno" class="form-control">
                    </div>
                </div>
                <!-- <div class="form-group">
                    <label for="phoneNumber" class="col-sm-3 control-label">Phone number </label>
                    <div class="col-sm-9">
                        <input type="phoneNumber" id="phoneNumber" placeholder="Phone number" class="form-control">
                        <span class="help-block">Your phone number won't be disclosed anywhere </span>
                    </div>
                </div> -->
                <div class="form-group">
                        <label for="year" class="col-sm-3 control-label">Year* </label>
                    <div class="col-sm-9">
                        <input type="text" id="year"  class="form-control">
                    </div>
                </div>
                 <div class="form-group">
                        <label for="branch" class="col-sm-3 control-label">Branch* </label>
                    <div class="col-sm-9">
                        <input type="text" id="branch" class="form-control">
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-3">Gender</label>
                    <div class="col-sm-6">
                        <div class="row">
                            <div class="col-sm-4">
                                <label class="radio-inline">
                                    <input type="radio" id="femaleRadio" value="Female">Female
                                </label>
                            </div>
                            <div class="col-sm-4">
                                <label class="radio-inline">
                                    <input type="radio" id="maleRadio" value="Male">Male
                                </label>
                            </div>
                        </div>
                    </div>
                </div> <!-- /.form-group -->
                <div class="form-group">
                    <div class="col-sm-9 col-sm-offset-3">
                        <span class="help-block">*Required fields</span>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary btn-block" id="register">Register</button>
            </form> <!-- /form -->
        </div> <!-- ./container -->