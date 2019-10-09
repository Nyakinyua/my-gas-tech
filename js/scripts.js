// function GAS()                                    
// { 
//     var name = document.forms["RegForm"]["Name"];               
//     var email = document.forms["RegForm"]["EMail"];    
//     var phone = document.forms["RegForm"]["Telephone"];  
//     var what =  document.forms["RegForm"]["Subject"];  
//     var password = document.forms["RegForm"]["Password"];  
//     var address = document.forms["RegForm"]["Address"];  
   
//     if (name.value == "")                                  
//     { 
//         window.alert("Please enter your name."); 
//         name.focus(); 
//         return false; 
//     } 
   
//     if (address.value == "")                               
//     { 
//         window.alert("Please enter your address."); 
//         name.focus(); 
//         return false; 
//     } 
       
//     if (email.value == "")                                   
//     { 
//         window.alert("Please enter a valid e-mail address."); 
//         email.focus(); 
//         return false; 
//     } 
   
//     if (email.value.indexOf("@", 0) < 0)                 
//     { 
//         window.alert("Please enter a valid e-mail address."); 
//         email.focus(); 
//         return false; 
//     } 
   
//     if (email.value.indexOf(".", 0) < 0)                 
//     { 
//         window.alert("Please enter a valid e-mail address."); 
//         email.focus(); 
//         return false; 
//     } 
   
//     if (phone.value == "")                           
//     { 
//         window.alert("Please enter your telephone number."); 
//         phone.focus(); 
//         return false; 
//     } 
   
//     if (password.value == "")                        
//     { 
//         window.alert("Please enter your password"); 
//         password.focus(); 
//         return false; 
//     } 
   
//     if (what.selectedIndex < 1)                  
//     { 
//         alert("Please enter your course."); 
//         what.focus(); 
//         return false; 
//     } 
   
//     return true; 
// }



function updateTotal($form)
{
   var total = 0;
   var selectedgas = $form.find('input[name="selectedgas"]:checked').data('price');
   if (!isNaN(selectedgas))
   {
       total += selectedgas;
   }
   var selectedaction=$form.find('input[name="selectedoption"]:checked').data('price');
   if (!isNaN(selectedaction))
   {
       total += selectedaction;
   }
   var filling = $form.find('select[name="filling"] option:selected').data('price');
   if (!isNaN(filling))
   {
       total += filling;
   }
   $form.find('input[name="total"]').val(total);
}
$(function() {
   $('#gasform1 input[name="selectedgas"]').change(function () {
       var $form = $(this).closest('form');
       updateTotal($form);
   });
   $('#gasform1 input[name="selectedoption"]').change(function (){
       var $form= $(this).closest('form');
       updateTotal($form);
   });
   $('#gasform1 select[name="filling"]').change(function () {
       var $form = $(this).closest('form');
       updateTotal($form);
   });

   $("#deliver").click(function(){
     alert("Your order will be delivered within 30min")
   })
});
