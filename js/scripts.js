$("#sbmt").click(function(event)
  {
    event.preventDefault();

    var email=$("#contact-email").val();

    if($("#user-name").val()==""){
      alert("Please input name")
    }
    else if($("#contact-email").val()==""){
      alert("Please input email")
    }
    else if($("#message").val()==""){
      alert("Please input your message")
    }
  
    else{
    alert("Hello "+ email + "," + "welcome to delani your messege has been received and is being acted on. Thank you for reaching out to us.");}
  });