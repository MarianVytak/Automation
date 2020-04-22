$(document).ready(function(){
    $("input[type=file]").on("change", function(e){
        var name = e.target.value.split( '\\' ).pop();
        var tmp = "";
        if(name.length > 30)
        {
            tmp =  name.substr(0,5);
            tmp += "..." + name.substr(name.length-6,name.length);
        }
        else
        {
            tmp = name;
        }
        $(this).next('.filename').text(tmp);
    })
})