$(function isEmployee(){
     var isEmployee = localStorage.getItem('userState');
     console.log("im herer"+isEmployee);
     if (isEmployee == '4'){
       var div1 = document.getElementById("dis-add");
       div1.disabled = true;
       var div2 = document.getElementById("dis-submit");
       div2.disabled = true;
       document.getElementById("warn_form").innerHTML="Only employers are allowed to add/submit forms!";
     }
   });

$(document).ready(function($){
    $('.my-form:last .add-box').click(function(){
        var label;
        label = $('#optional_label').val();
        console.log("value: " + label);
        var n = $('.text-box').length;
        if( 2 < n ) {
            alert('Max number of fields that can be added is 2');
            return false;
        }
        var box_html = $('<p class="text-box"><label id = "added_label" for="optional_' + n + '"> <span class="box-number">' + label + '</span></label><br> <input type="text" name="boxes[]" value="" placeholder = "Enter here" id="box' + n + '" required/> <button type="button" class="btn btn-danger remove-box">Remove</button></p>');
        box_html.hide();
        $('.my-form:first .addField:last').before(box_html);
        box_html.fadeIn('slow');
        $('#optional_label').val("");
        return false;
    });
    $('.my-form .save-form').click(function(){
        var color;
        color = $('#jscolor').val();
        var num = $('#box-number').length;
        var fields = [];
        for (i=0; i<num; ++i) fields.push(label[i]);
        var form = {color: color , fields: fields};

        $.ajax({
            url: "/api/form/create",
            template: {
                object: form
            },
            admin_id: {
                object: form
            },
            success: function( result ) {

            }
});

    });
});

$('.my-form').on('click', '.remove-box', function(){
    $(this).parent().css( 'background-color', '#FF6C6C' );
    $(this).parent().fadeOut("slow", function() {
        $(this).remove();
        $('.box-number').each(function(index){
            $("#box2").attr("id", "box1");
            $("#added_label").attr("for", "optional_1");
        });
    });
    return false;
});
