

$(document).ready(function(){
    $("button").click(function(){
        $.get("ajax_info.txt", function(data, status){
$("#demo").html("<b>" + data + "<b>");
        });
    });
});
