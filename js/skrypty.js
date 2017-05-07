     $('document').ready(function(){
                
                $('#myToolTip').tooltip();
                
            });

      function validateText(id)
        {
            if($("#"+id).val()==null || $("#"+id).val()=="")
            {
                var div = $("#"+id).closest("div");
                div.addClass("has-error");
                return false;
            }
            else
            {
                var div = $("#"+id).closest("div");
                div.removeClass("has-error");
                return true;   
            }
        }
                
        $(document).ready(
            
            function()
            {
                $("#submitBtn").click(function()
                {
                    if(!validateText("Name"))
                            {
                                return false;
                            }
                    
                    if(!validateText("LName"))
                            {
                                return false;
                            }
                    
                     if(!validateText("Company"))
                            {
                                return false;
                            }
                    
                     if(!validateText("Revenue"))
                            {
                                return false;
                            }
                    
                     if(!validateText("Challenge"))
                            {
                                return false;
                            }
                    
                     if(!validateText("Achieve"))
                            {
                                return false;
                            }
                    
                     if(!validateText("Contribute"))
                            {
                                return false;
                            }
                    
                     if(!validateText("Sam"))
                            {
                                return false;
                            }
                    
                     if(!validateText("Email"))
                            {
                                return false;
                            }
                    
                     if(!validateText("Phone"))
                            {
                                return false;
                            }
                    
                    else
                            {
                                $("form#info-form").submit();
                            }
                });
            }
        );

                       
        
        $(document).ready(function() {
            $('#submitBtn').click(function () {
        /* when the button in the form, display the entered values in the modal */
        $('#Nam').html($('#Name').val());
        $('#Lnam').html($('#LName').val());
        $('#Compan').html($('#Company').val());
        $('#Websit').html($('#Website').val());        
        $('#Revenu').html($('#Revenue').val());
        $('#Challeng').html($('#Challenge').val());
        $('#Achiev').html($('#Achieve').val());
        $('#Contribut').html($('#Contribute').val());
        $('#Question').html($('#Questions').val());
        $('#Emai').html($('#Email').val());
        $('#Phon').html($('#Phone').val());
    });
});

