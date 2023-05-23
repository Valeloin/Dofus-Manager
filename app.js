$(document).ready(function(){
  var i=1;
 $("#add_row").click(function(){
  $('#addr'+i).html("<td>"+ (i+1) +"</td><td><input name='ID"+i+"' type='text' placeholder='ID' class='square-card input-md'  /></td><td><input  name='Name"+i+"' type='text' placeholder='Name'  class='square-card input-md'></td><td><input  name='Classe"+i+"' type='text' placeholder='Classe'  class='square-card input-md'></td><td><input  name='LVL"+i+"' type='text' placeholder='LVL'  class='square-card input-md'></td><td><input  name='Details"+i+"' type='text' placeholder='Details'  class='square-card input-md'></td>");

  $('#tab_logic').append('<tr id="addr'+(i+1)+'"></tr>');
  i++; 
});
 $("#delete_row").click(function(){
     if(i>1){
     $("#addr"+(i-1)).html('');
     i--;
     }
 });

});


function getValue() {
  // Sélectionner l'élément input et récupérer sa valeur
  var input = document.getElementById("in").value;
  // Afficher la valeur
  alert(input);
}