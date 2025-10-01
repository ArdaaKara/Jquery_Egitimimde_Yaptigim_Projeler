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
// NAVBAR
document.addEventListener("DOMContentLoaded", () => {
    const navbarHTML = `
            <nav class="navbar navbar-expand-md navbar-dark bg-black  fixed-top">
                <a class="navbar-brand" href="index.html">Logo</a>
                <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse"
                    data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item ">
                            <a class="nav-link active" href="index.html">Anasayfa<span
                                    class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item dropdown nav-link ">Kategoriler
                            <ul class="dropdown-content nav-link">
                                <li><a href="">Edebiyat</a></li>
                                <li><a href="">Roman</a></li>
                                <li><a href="">Kişisel Gelişim</a></li>
                                <li><a href="">Çocuk ve Gençlik</a></li>
                                <li><a href="">Araştırma - Tarih</a></li>
                                <li><a href="">Yabancı Dilde Kitaplar</a></li>
                                <li><a href="">Felsefe Kitapları</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Yardım</a>
                        </li>
                        <li class="nav-item dropdown">
                        <li class="nav-item dropdown nav-link ">Diller
                            <ul class="dropdown-content nav-link">
                                <li><a href="">EN</a></li>
                                <li><a href="">TR</a></li>
                                <li><a href="">GE</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0 search_container  ">
                        <li class="nav-item">
                            <form class="form-inline my-2 my-lg-0 ">
                                <input class="form-control mr-sm-2 my-sm-0  " type="text" id="tags"
                                    placeholder="Aradığınız ürün, kategori veya markayı yazınız.">
                                <button class="btn btn-outline-success my-2 my-sm-0 " id="search_button"
                                    type="submit"><span class="fas fa-search"></span></button>
                            </form>
                        </li>
                    </ul>
                    <ul class="navbar-nav navbar-right mr-5">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false"><span id="nav_icon1"
                                    class="fas fa-user"></span></a>
                            <div class="dropdown-menu" aria-labelledby="dropdownId">
                                <a class="dropdown-item" href="#" id="btn_giris">Giriş yap</a>
                                <a class="dropdown-item" href="#" id="btn_kayit">Kayıt ol</a>
                                <a class="dropdown-item" href="#" id=""><span
                                        class="fas fa-user-astronaut"></span>Profilim</a>
                                <a class="dropdown-item" href="#"><span class="fas fa-door-open"></span> Çıkış </a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false"><span id="nav_icon2"
                                    class="fas fa-shopping-basket"></span><span
                                    class="badge badge-percent">(2)</span></a>
                            <div class="dropdown-menu" aria-labelledby="dropdownId">
                                <a class="dropdown-item" href="#" id="btn_sepet">Sepet</a>
                                <a class="dropdown-item" href="ordered.html" id="">Siparislerim</a>
                            </div>
                        </li>
                        <!-- <div style="display: none;"> -->
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false"><span id="nav_icon3"
                                    class="fas fa-info-circle"></span>
                                Bilgiler</a>
                            <div class="dropdown-menu" aria-labelledby="dropdownId">
                                <a class="dropdown-item" href="ordered.html">Siparişlerim</a>
                                <a class="dropdown-item" href="books.html">Kitaplar</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
    `;
    const navbarContainer = document.getElementById("navbar");

    if (navbarContainer) {
        navbarContainer.innerHTML = navbarHTML;
    }
});
// footer
document.addEventListener("DOMContentLoaded", () => {
    const FooterHTML = `
            <footer class="fixed-bottom44 bg-black" style=" color: white; text-align: center; ">
        <div class="row44">
            <div class="row">
                <div class="col-4" style="margin-top: 80px;"><!-- Sol taraf -->
                    <h3>Bağlantılar</h3>
                    <ul class="list-unstyled">
                        <li class="mb-2"><a href="index.html">Anasayfa</a></li>
                        <li class="mb-2"><a href="#">Yardım</a></li>
                        <li class="mb-2"><a href="#">Profilim</a></li>
                    </ul>
                </div>
                <div class="col-4" style="margin-top: 50px;"><!-- Orta taraf -->
                    <h3>Hakkımızda</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolores
                        minus nihil laboriosam accusamus architecto. Eos cumque dicta quas earum odio perferendis odit
                        sed unde, fugit fuga harum illum voluptatum!</p>
                </div>
                <div class="col-4" style="margin-top: 80px;"><!-- Sağ taraf -->
                    <h3>İletişim</h3>
                    <p>Email: info@hotmail.com<br>Phone: +0555 555 55 55<br>Adress: İzmir/Turkey</p>
                </div>
                <div class="fixed-bottom44 " style=" background-color: black;">
                    <a href="" style="margin-right: 20px;" class="gradient-link"><span
                            class="fab fa-instagram"></span><span>instagram</span></a>
                    <a href="" class="gradient-link-linkedn"><span class="fab fa-linkedin"></span>
                        <span>Linkedin</span></a><br>
                    <label for="">Design by ARDA KARA © 2025</label>
                </div>
            </div>
    </footer>
    `;
    const FooterContainer = document.getElementById("footer");

    if (FooterContainer) {
        FooterContainer.innerHTML = FooterHTML;
    }
});
// sepet modal start
/* document.addEventListener("DOMContentLoaded", () => {
    const SepetModalHTML = `
           <div class="modal fade" id="sepet" role="dialog" style=" z-index: 9999; backdrop-filter: blur(10px);">
        <div class="modal-dialog ">
            <div class="modal-content">
                <div class="modal-header">
                    <button class="btn-close" data-bs-dismiss="modal"
                        aria-label="Kapat"></button><!-- kapatma butonu -->
                </div>
                <div class="modal-body"></div>
                <!-- div.container>h3{Uye Grisi}+form>(div.form-group>label+input.form-control)*3 -->
                <div class="container">
                    <h3 style="text-align: center; margin-top: 0; ">SEPETİM</h3>
                    <form action="">
                        <!--  -->
                        <div class="card mb-3 mt-3" style="max-width: 540px;">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img style="width: 100%; height: 250px; object-fit: contain; " id="kitapFoto2"
                                        class="img-fluid rounded-start" alt="...">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title" id="kitapAdi2"></h5>
                                        <p id="kitapHakkinda2" class="card-text ellipsed"></p>
                                    </div>
                                    <label for="" class="ml-4" id="kitapFiyat"></label>
                                </div>
                            </div>
                            <!--  -->
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="https://placehold.co/600x700" class="img-fluid rounded-start" alt="...">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">SEFİLER</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a
                                            natural lead-in to additional content. This content is a little bit longer.
                                            <i class="fa-bold fa-lg ">250 TL</i>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--  -->
                    </form>
                </div>
                <div class="modal-footer"><button class="btn btn-primary" style="width: 100%;"
                        data-dismiss="modal">SATIN AL</button></div>
            </div>
        </div>
    </div>
    `;

    const SepetModalContainer = document.getElementById("sepet");

    if (SepetModalContainer) {
        SepetModalContainer.innerHTML = SepetModalHTML;
    }
}); */
// sepet modal end

