

$(document).ready(function(){
    $("button").click(function(){
        $.get("ajax.json", function(data, status){
$("#demo").html("<b>이름 </b>" + data.name + "<br><b>고향 </b>" + data.home);
        });
    });
});

