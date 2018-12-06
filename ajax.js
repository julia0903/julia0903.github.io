

$(document).ready(function(){
    $("button").click(function(){
        $.get("ajax.json", function(data, status){
$("#demo").html("<b>Iam: </b>" + data.Iam + "<br><b>나는: </b>" + data.나는);
        });
    });
});

