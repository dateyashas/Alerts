$('#selectlist').change(function(e){
    //console.log($('#selectlist').val());
   let selectedVal = $('#selectlist :selected').text();
   console.log("You selected " + selectedVal );

   if(selectedVal == 'Red') {
       
       $('#myalert').removeClass('d-none');
       $('#colorPlace').text(selectedVal);
       $('#myalert').addClass('alert-danger');
       $('#myalert').removeClass('alert-success');
       $('#myalert').removeClass('alert-dark');
   }
   
   if(selectedVal == 'Green') {
    
    $('#myalert').removeClass('d-none');
    $('#colorPlace').text(selectedVal);
    $('#myalert').addClass('alert-success');
    $('#myalert').removeClass('alert-danger');
    $('#myalert').removeClass('alert-dark');
     
}

if(selectedVal == 'Blue') {
    
    $('#myalert').removeClass('d-none');
    $('#colorPlace').text(selectedVal);
    $('#myalert').addClass('alert-dark');
    $('#myalert').removeClass('alert-success');
    $('#myalert').removeClass('alert-danger');
     
}
})

