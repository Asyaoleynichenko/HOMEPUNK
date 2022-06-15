$( function() {
   $( "#accordion" ).accordion({
     collapsible: true
   });
 } );
 $("#head").click(function(){
     $("#grid2").css("display", "block");
     $("#head").css("display", "none");
 });
