
// place for showing errors

// var name = document.getElementById("nam").innerHTML;
//    var phone = document.getElementById("val-num").innerHTML;

// input made
var nameInput = document.getElementById("name");
var phoneInput = document.getElementById("num");


// conditioned patterns
 var userpat = /^[A-Z][a-zA-Z0-9-_][^(?|#|*|@|&|\.\ )]{7,20}$/;
 var phonepat = /^[+][1][\-]\d{3}[\-]\d{4}[\-]\d{3}$/;


// function checkName(){

    

//     if(nameInput.value.trim() == "" ){
//        name = "you must enter the name";  
//        nameInput.style.border ="2px solid red"; 
//     } 
//     else if(userpat.test(nameInput.value.trim()) == false ){
//         name = "Atleast one uppercase ,of 8 letters, no spaces , no Special symbol";  
//         nameInput.style.border ="2px solid red";     
//     }
//     else{    
//         nameInput.style.border ="2px solid green"; 
//         document.getElementById("nam").innerHTML = "Valid"; 
//     }
// }

// function checkPhone(){

//     if(phoneInput.value.trim() == "" ){
//        document.getElementById("val-num").innerHTML = "you must enter the Phone-number";  
//        nameInput.style.border ="2px solid red";
//     }
//    else if(phonepat.test(phoneInput.value.trim()) == false ){
//         document.getElementById("val-num").innerHTML = "Phone Number invalid";  
//         phoneInput.style.border ="2px solid red";
//       nameInput.style.border ="2px solid green";     
//      }  
//      else{   
//         phoneInput.style.border ="2px solid green"; 
//         document.getElementById("val-num").innerHTML = "Valid"; 
//     }
// }


// input made
var nameInput = document.getElementById("name");
var phoneInput = document.getElementById("num");
var emailInput = document.getElementById("email");
var passInput = document.getElementById("password");


// conditioned patterns
 var userpat = /^[a-zA-Z0-9-_][^(?|#|*|@|&|\.\ )]{7,20}$/;
 var phonepat = /^[+][1][\-]\d{3}[\-]\d{4}[\-]\d{3}$/;
 var emailpat =  /^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z0-9]){1,}$/;
 var passpat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[*&^%$#@+])[a-zA-Z0-9+*&^%#@]{1,20}$/;



// Name Validation 

$(document).ready(function(){
  $("#name").keyup(function(){
    
    if(nameInput.value.trim() == "" ){
      document.getElementById("nam").innerHTML = "you must enter the name";  
      document.getElementById("nam").style.color = "red";
       nameInput.style.border ="2px solid red"; 
    } 
    else if(userpat.test(nameInput.value.trim()) == false ){
      document.getElementById("nam").innerHTML= "Atleast one uppercase ,of 8 letters, no spaces , no Special symbol";
       document.getElementById("nam").style.color = "red";  
        nameInput.style.border ="2px solid red";     
    }
    else{    
        nameInput.style.border ="2px solid green"; 
        document.getElementById("nam").innerHTML = "Valid";
        document.getElementById("nam").style.color = "green";  
    }
  });
});



// Number Validation

$(document).ready(function(){
  $("#num").keyup(function(){
    
   
    if(phoneInput.value.trim() == "" ){
       document.getElementById("val-num").innerHTML = "you must enter the Phone-number";  
        document.getElementById("val-num").style.color = "red";  
       nameInput.style.border ="2px solid red";
    }
   else if(phonepat.test(phoneInput.value.trim()) == false ){
        document.getElementById("val-num").innerHTML = "Phone Number invalid";
        document.getElementById("val-num").style.color = "red";  
        phoneInput.style.border ="2px solid red";
      nameInput.style.border ="2px solid green";     
     }  
     else{   
        phoneInput.style.border ="2px solid green"; 
        document.getElementById("val-num").innerHTML = "Valid"; 
         document.getElementById("val-num").style.color = "green";  
    }
  });
});


// Email Validation

$(document).ready(function(){
  $("#email").keyup(function(){
    
   
    if(emailInput.value.trim() == "" ){
       document.getElementById("val-email").innerHTML = "You must enter the Email";  
        document.getElementById("val-email").style.color = "red";  
       emailInput.style.border ="2px solid red";
    }
   else if(emailpat.test(emailInput.value.trim()) == false ){
        document.getElementById("val-email").innerHTML = "Email is invalid";
        document.getElementById("val-email").style.color = "red";  
        emailInput.style.border ="2px solid red";
        // emailInput.style.border ="2px solid green";     
     }  
     else{   
        emailInput.style.border ="2px solid green"; 
        document.getElementById("val-email").innerHTML = "Valid"; 
         document.getElementById("val-email").style.color = "green";  
    }
  });
});


// Password  Validation

$(document).ready(function(){
  $("#password").keyup(function(){
    
   
    if(passInput.value.trim() == "" ){
       document.getElementById("val-pass").innerHTML = "You must enter the Password";  
        document.getElementById("val-pass").style.color = "red";  
       passInput.style.border ="2px solid red";
    }
   else if(passpat.test(passInput.value.trim()) == false ){
        document.getElementById("val-pass").innerHTML = "Password must contain a Special Symbol ,uppercase and a number";
        document.getElementById("val-pass").style.color = "red";  
        passInput.style.border ="2px solid red";
      // passInput.style.border ="2px solid green";     
     }  
     else{   
        passInput.style.border ="2px solid green"; 
        document.getElementById("val-pass").innerHTML = "Valid"; 
         document.getElementById("val-pass").style.color = "green";  

    }
  });
});




// Reset

$(document).ready(function(){
  $("#set").click(function(){
      document.getElementById("val-num").innerHTML = " ";
    document.getElementById("nam").innerHTML = " ";
    document.getElementById("val-email").innerHTML = ""; 
    document.getElementById("val-pass").innerHTML = "";
    document.getElementById("nam").style.color = "";
    document.getElementById("val-num").style.color ="";
    passInput.style.border ="";
    emailInput.style.border ="";
    nameInput.style.border ="";
    phoneInput.style.border ="";
    });
});



