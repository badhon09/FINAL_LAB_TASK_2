

function validate(){  
    var name=document.f1.name.value;  
    var passwordlength=document.f1.password.value.length;
    var email = document.f1.email.value; 
    var status=false; 
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    
    if(name==""){  
    document.getElementById("namelocation").innerHTML=  
    " Please enter your name";  
    status=false;
    }else{  
     status=true;
    }  

     
       

        if(email==mailformat)
        {
        status= true;
            }
        else
        {
            document.getElementById("emaillocation").innerHTML=  
            " Please enter valid email";  

         status = false;
}



    if(passwordlength<6){  
    document.getElementById("passwordlocation").innerHTML=  
    "  Password must be greater than 6";  
    status=false; 
    }
      return status;  
    }  