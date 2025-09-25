
const Kitaplar = {
    "sefiller": {
        UrunAdi: "Sefiller - 2 Cilt Takım",
        OrjinalAdi: "Les Misérables",
        hakkinda: "Victor Hugo (1802-1885): ...",
        foto: "https://www.nezih.com.tr/sefiller-2-cilt-takim-58232-150020-58-O.jpg",
        yayinevi: "İş Bankası Kültür Yayınları",
        Fiyat: "700 TL",
        Yazar: "Victor Hugo",
        Cevirmen: "Volkan Yalçıktokul",
        Yil: "2015",
        SayfaSayisi: "1720",
        ISB: 9786053324744,
        kategori: "roman",
    },
    // başka kitaplar
};
/* const Siparis1 ={
    SiparisAd: Urun1.UrunAdi,
    SiparisDurum: "Hazirlaniyor",
    SiparisFirma: Urun1.yayinevi,
    SiparisTarih: new Date().toLocaleDateString(),
    SiparisKodu: "0",
    SiparisFiyat: Urun1.Fiyat,

}; */

$(function () {
    $("#Siparisİptal").click(function () {
        Siparis1.SiparisDurum = "İptal Edildi";
        localStorage.setItem("Siparis1", JSON.stringify(Siparis1));
        $("#SiparisDurum").text(Siparis1.SiparisDurum)
    });
});
$("#Siparisİptal").click(function () {
    Siparis1.SiparisDurum = "İptal Edildi";
    $("#SiparisDurum").text(Siparis1.SiparisDurum);
    $(this).prop("disabled", true).text("İptal Edildi");
});
/*  */
// 📝 localStorage’a veriyi kaydet
localStorage.setItem("sefiller", JSON.stringify(Kitaplar["sefiller"]));

// 📤 Veriyi sayfaya yazdıran fonksiyon
function kitapYukle(id) {
    const kitap = JSON.parse(localStorage.getItem(id));
    if (!kitap) {
        alert("Kitap bulunamadı!");
        return;
    }

    // Güvenli erişim için yardımcı fonksiyon
    function safeSet(id, value) {
        const el = document.getElementById(id);
        if (el) el.textContent = value;
    }

    function safeSetSrc(id, value) {
        const el = document.getElementById(id);
        if (el) el.src = value;
    }

    safeSet("kitapAdi", kitap.UrunAdi);
    safeSet("kitapAdi2", kitap.UrunAdi);
    safeSet("kitapAdi3", kitap.UrunAdi);
    safeSet("orjinalAdi", kitap.OrjinalAdi);
    safeSet("kitapHakkinda", kitap.hakkinda);
    safeSet("kitapHakkinda2", kitap.hakkinda);
    safeSet("kitapYazar", kitap.Yazar);
    safeSet("kitapCevirmen", kitap.Cevirmen);
    safeSet("kitapYayinevi", kitap.yayinevi);
    safeSet("kitapYil", kitap.Yil);
    safeSet("kitapSayfa", kitap.SayfaSayisi);
    safeSet("kitapFiyat", kitap.Fiyat);
    safeSetSrc("kitapFoto", kitap.foto);
    safeSetSrc("kitapFoto2", kitap.foto);
}

// Sayfa yüklendiğinde çalıştır
window.onload = function () {
    kitapYukle("sefiller");
};

