//make gas order
// function updateTotal($form)
// {  
//     var total = 0;

//     var selectedGasSize = $form.find('select[name="gassize"]:selected').data('price');
//     if (!isNaN(selectedGasSize))
//     {
//         total += selectedGasSize;
//     }
//     var action = $form.find('input[name="gas"] option:checked').data('price');
//     if (!isNaN(action))
//     {
//         total += action;
//     }
//     var gasType1 = $form.find('input[name="gas-type"] option:checked').data('price');
//     if (!isNaN(gasType1))
//     {
//         total += gasType1;
//     }
    
    
//     $form.find('input[name="total"]').val(total);
// }
// //delivery option
// var checkVal=$()


// $(function() {
//     $('#gasform1 select[name="gassize"]').change(function () {
//         var $form = $(this).closest('form');
//         updateTotal($form);
//     });

//     $('#gasform1 input[name="gas"]').change(function () {
//         var $form = $(this).closest('form');
//         updateTotal($form);
//     });
//     $('#gasform1 input[name="gas-type"]').change(function () {
//         var $form = $(this).closest('form');
//         updateTotal($form);
//     });
// });

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
});


















