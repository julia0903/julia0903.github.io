

$(document).ready(function(){
    $("button").click(function(){
        $.get("ajax.json", function(data, status){
$("#name").html("<b>이름 </b>" + data.name + "<br><b>고향 </b>" + data.home);
            $("#home").html("<br><b>고향 </b>" + data.home);
        });
    });
});

