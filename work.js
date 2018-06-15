
$(document).ready(function(){



    $('#sumbited').click(function(){


$('#container').empty();

     var Yin = parseInt($('#rows').val());
     var Xin =parseInt($('#col').val());
    grid(Yin,Xin);
     });


function grid(Ymax,Xmax){
   var tbrow = "";
   var thead = "<tr> ";


for (var i = 0; i <= Xmax; i++){
    thead+="<td>"+i+"</td>";
  }
  thead+="</tr>";



  $(thead).appendTo('#container');
  for (var y = 1; y <= Ymax; y++) {
    tbrow +='<tr><td>'+y+'</td>'
    for (var x = 1; x <= Xmax; x++) {

          tbrow += '<td>'+y*x+'</td>';
    }

    tbrow+='</tr>'

  }
  $(tbrow).appendTo('#container');

}


});
