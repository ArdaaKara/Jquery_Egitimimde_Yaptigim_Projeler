
const Urun1 = {
    UrunAdi: "Sefiller - 2 Cilt Takım",
    OrjinalAdi: "Les Misérables",
    hakkinda: "Victor Hugo (1802-1885): Fransız edebiyatının gelmiş geçmiş en büyük yazarlarındandır. Şiirleri, oyunları ve romanları ile tanınır. Romantizm akımının Fransa’daki temsilcisidir. Edebiyat alanındaki devasa başarılarının yanında politik hayatta da etkin bir rol üstlendi; bu nedenle sürgün cezasına çarptırıldı, cezasını tamamlamasına rağmen İmparatorluk yıkılana dek Fransa’ya dönmedi. İlk kez 1862 yılında yayımlanan Sefiller yazarın Notre-Dame’ın Kamburu ile “din”, Deniz İşçileri ile “doğa” konularını işlediği roman üçlemesinin “toplum”u ele alan, en görkemli ayağıdır. Bu destansı roman Fransız toplumundan yola çıkarak, kozmolojik bir bakış ve eşsiz bir duyarlılıkla insanlığa ulaşır. Fantine’in, Cosette’in, Marius’ün, Saint-Denis Sokağı barikatlarının; Paris’in, Javert’in ve Jean Valjean’ın sefaletten sevgiye, felaketten iyiliğe ve karanlıktan aydınlığa uzanan hikâyeleri Hasan Âli Yücel Klasikler Dizisi’nin 250. kitabında okurlarla buluşuyor.",
    foto: "content/picture/sefiller.webp",
    yayinevi: "İş Bankası Kültür Yayınları",
    Fiyat: "700 TL",
    Yazar: "Victor Hugo",
    Cevirmen: "Volkan Yalçıktokul",
    Yil: "2015",
    SayfaSayisi: "1720",
    ISB: 9786053324744,
    kategori: "roman", /* DÜZELTİLECEK KATEGORİ SEKMESİNDE */
    
};
const Siparis1 ={
    SiparisAd: Urun1.UrunAdi,
    SiparisDurum: "Hazirlaniyor",
    SiparisFirma: Urun1.yayinevi,
    SiparisTarih: new Date().toLocaleDateString(),
    SiparisKodu: "0",
    SiparisFiyat: Urun1.Fiyat,

};
document.addEventListener("DOMContentLoaded", function () {
    // Ürün1:Sefiller
    localStorage.setItem("Urun1", JSON.stringify(Urun1));
    localStorage.setItem("Siparis1", JSON.stringify(Siparis1));
    document.getElementById("SefillerAdi").textContent = Urun1.UrunAdi;
    document.getElementById("SefillerAdi2").textContent = Urun1.UrunAdi;
    document.getElementById("SefillerHakkinda").textContent = Urun1.hakkinda
    document.getElementById("SefillerHakkindaA").textContent = Urun1.hakkinda

    document.getElementById("SefillerFoto").src = Urun1.foto;
    document.getElementById("SefillerFotoiki").src = Urun1.foto;
    document.getElementById("SefillerFiyat").textContent = Urun1.Fiyat;
    document.getElementById("SefillerFiyatT").textContent = Urun1.Fiyat;
    document.getElementById("SefillerYayinEvi").textContent = Urun1.yayinevi;
    document.getElementById("SefillerYazar").textContent = Urun1.Yazar;

    
});
$(function(){
            $("#Siparisİptal").click(function(){
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
