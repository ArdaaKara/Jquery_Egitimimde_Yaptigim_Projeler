$(document).ready(function(){
    $("#accordion").accordion();
})
$(function name() {
    $("#tabs").tabs();
})
$(function name() {
    $("resizable").resizable();
})
$(function name() {
    $("#dialog").dialog({
        autoOpen:false
    });
    $("#dialogButton").click(function () {
        $("#dialog").dialog('open');
    });    
})
$(function () {
    var autoComplete=[
        "Html5",
        "css3",
        "js",
        "Jquery",
        "Arda"
    ];
    $("#tags").autocomplete({
        source:autoComplete
    });
});
$(function name() {
    
})

