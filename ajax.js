

$(document).ready(function(){
    $("button").click(function(){
        $.get("ajax.json", function(data, status){
$("#name").html("<b>이름 </b>" + data.name);
            $("#home").html("<br><b>고향 </b>" + data.home);
        });
    });
});

