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
$(function(){
            $("#btn_login").click(function(){
                $("#myUye").modal('show');
            });
        })
$(function(){
            $("#iletisim").click(function(){
                
                $("#iletisimm_").modal('show');
            });
        })
/* form validation jquery */
$(function(){
        $("#btnSubmit").click(function(){
            var email,phone,password;
            email=$("#user_email").val();
            email=jQuery.trim(email);
            phone=$("#user_phone").val();
            phone=$.trim(phone);
            password=$("#user_password").val();
            if (email=="") {
                $("#validation_email").html("Email Boş Geçilemez")
            }
            else if (validation_email(email)==false) {
                $("#validation_email").html("Email'i uygun formatta giriniz")
            }
            if (phone=="") {
                $("#validation_phone").html("Numaranız Boş Geçilemez")
            }
            else if ($.isNumeric(phone)==false) {
                $("#validation_phone").html("Sayı Girmelisiniz")
            }
            else if (validatePhone(phone)==false) {
                    $("#validation_email").html("Numaranızı uygun formatta giriniz")           
            }
            if (password=="") {
                $("#validation_password").html("Şifreniz Boş Geçilemez")
            }
            function validateEmail(email) {
                var regex=/^(?!\.)(?!.*\.\.)([a-z0-9_'+\-\.]*)[a-z0-9_'+\-]@([a-z0-9][a-z0-9\-]*\.)+[a-z]{2,}$/i;
                return regex.test(email);
            }
            function validatePhone(telephoneNumber){
                const phone=/^\+90\d{10}$/;
                var changeValue=phone.replace(/\D/g, "");
                return phone.test(changeValue);
            }
        });
});
$(function () {
    $("#picture_1 ").tooltip();
    $("#btn_tooltip ").tooltip();
})