/* $(function () {
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
}); */
$(function(){
            $("#btn_giris").click(function(){
                $("#myUye").modal('show');
            });
        });
$(function(){
            $("#btn_kayit").click(function(){
                $("#myUyeol").modal('show');
            });
        });
$(function(){
            $("#btn_sifre").click(function(){
                $("#mySifre").modal('show');
                $("#myUyeol").modal('hide');
                
                
            });
        });
        
