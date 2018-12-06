

$(document).ready(function(){
    $("button").click(function(){
        $.get("ajax.json", function(data, status){
$("#demo").html("<b>I'am: </b>" + data.I'am + "<br><b>나는: </b>" + data.나는);
        });
    });
});

