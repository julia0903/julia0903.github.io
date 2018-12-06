

$(document).ready(function(){
    $("button").click(function(){
        $.get("1.txt", function(data, status){
            alert("Data: " + data + "\nStatus: " + status);
        });
    });
});
