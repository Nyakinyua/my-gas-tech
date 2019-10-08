/*$(document).ready (function(){
    $(".btn-login").submit(function(e) {
        e.preventDefault();
        var email=$("#loginFormEmail").val();
        var password=$("#loginFormPassword").val();

        if (email === "") {
            alert("please input email")
        }
        else if(password === "" && password.length < 8){
            alert("password must be atleast 8 characters")
        }
        else{
            alert("login successful")
        }
    });

    
    var selectLocation=new Array();
    location_price["none"]=0;
    locaton_price["Mathare"]=50;
    location_price["Starehe"]=30;
    location_price["Kamukunji"]=20;
    location_price["makadara"]=40;
    location_price["Embakasi West"]=70;
    location_price["Embakasi East"]=30;
    location_price["Embakasi North"]=40;
    location_Price["embakasi south"]=80;
    location_price["Ruaraka"]=50;
    location_price["Kasarani"]=30;
    location_price["Roysambu"]=40;
    location_price["Kibra"]=20;
    location_price["lang'ata"]=60;
    location_price["Dagoretti North"]=90;
    location_Price["Dagoretti+=South"]=40;
    location_price["westlands"]=80;

function calculateTotal(){


    function getLocationPrice(){
        var locationPrice=0;
        var joy= document.forms["#gasform"];
        var selectedLocation=theForm.elements["location1"];

        location = 
        selectLocation[selectedLocation.value];
        return location;
        
    }

    alert(LocationPrice)*/
//}














//     function ("#gasform"){
//     var gasLocationPrice=0;
//     var theForm = document.forms["gasform"];
//     var selectedLocation = theForm.elements["location"];
//     gasLocationPrice = selectLocation[selectedLocation.value];
//     //finally we return locationPrice
//     return gasLocationPrice;
// } 
//   alert(gasLocationPrice)

//});
var filling_prices= new Array();
filling_prices["None"]=0;
filling_prices["Lemon"]=5;
filling_prices["Custard"]=5;
filling_prices["Fudge"]=7;
filling_prices["Mocha"]=8;
filling_prices["Raspberry"]=10;

function getFillingPrice()
{
    var cakeFillingPrice=0;
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["cakeform"];
    //Get a reference to the select id="filling"
     var selectedFilling = theForm.elements["filling"];
 
    //set cakeFilling Price equal to value user chose
    //For example filling_prices["Lemon".value] would be equal to 5
    cakeFillingPrice = filling_prices[selectedFilling.value];
 
    //finally we return cakeFillingPrice
    return cakeFillingPrice;
}
