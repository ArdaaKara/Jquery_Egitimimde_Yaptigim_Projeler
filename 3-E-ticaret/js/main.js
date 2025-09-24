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
$(function(){
            $("#btn_sepet").click(function(){
                $("#sepet").modal('show');
                  
            });
        });
$(function(){
            $("#company").click(function(){
                $("#companyModal").modal('show');
                  
            });
        });
$(function(){
            $("#orderedTrash").click(function(){
                $("#orderedTrashModal").modal('show');
                  
            });
        });
$(function(){
            $("#orderedEdit").click(function(){
                $("#orderedEditModal").modal('show');
                  
            });
        });
        
