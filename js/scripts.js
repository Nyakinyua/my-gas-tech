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
     alert("Your order will be delivered within 30min stay updated will deliver soon")
   })
});
