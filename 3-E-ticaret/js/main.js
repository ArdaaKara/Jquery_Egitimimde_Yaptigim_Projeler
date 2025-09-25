$(function () {
    var autoComplete=[
        "Roman",
        "CSS",
        "JavaScript",
        "jQuery",
        "Kişisel Gelişim"
    ];
    $("#tags").autocomplete({
        source:autoComplete
    });
});
$(function () {
    $("#btn_giris").click(function () {
        $("#myUye").modal('show');
    });
});
$(function () {
    $("#btn_kayit").click(function () {
        $("#myUyeol").modal('show');
    });
});
$(function () {
    $("#btn_sifre").click(function () {
        $("#mySifre").modal('show');
        $("#myUyeol").modal('hide');
    });
});
$(function () {
    $("#btn_sepet").click(function () {
        $("#sepet").modal('show');

    });
});
$(function () {
    $("#company").click(function () {
        $("#companyModal").modal('show');

    });
});
$(function () {
    $("#orderedTrash").click(function () {
        $("#orderedTrashModal").modal('show');

    });
});
$(function () {
    $("#orderedEdit").click(function () {
        $("#orderedEditModal").modal('show');

    });
});

$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 70) {
            $("#backTopButton").fadeIn();
        }
        else { $("#backTopButton").fadeOut(); }
    })
    $("#backTopButton").click(function () {
        $("body,html").animate({ scrollTop: 0 }, 300)
    })
})





