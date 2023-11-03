var swiper = new Swiper(".swiper", { speed: 1200, slidesPerView: "auto", grabCursor: !0, spaceBetween: 0, loop: !0, parallax: !0, centeredSlides: !0, autoplay: { delay: 3500, disableOnInteraction: !1 } });
mediumZoom(document.querySelectorAll(".main-single-content img"), { margin: 20 });
var swiper_ads = new Swiper(".swiper-ads", { speed: 1200, slidesPerView: "auto", grabCursor: !0, spaceBetween: 0, loop: !0, parallax: !0, centeredSlides: !0, autoplay: { delay: 3500, disableOnInteraction: !1 } });


const floatAdsDivs = document.querySelectorAll(".float-ads");
const exitFloatAds = document.querySelectorAll(".exit-ads");

for(let i = 0; i < exitFloatAds.length; i++){
    exitFloatAds[i].addEventListener("click", function(){
        exitFloatAds[i].parentElement.classList.add("hidden-ads");
    });
}
var tw = new Date();
if (tw.getTimezoneOffset() == 0) (a=tw.getTime() + ( 7 *60*60*1000))
else (a=tw.getTime());
tw.setTime(a);
var tahun= tw.getFullYear ();
var hari= tw.getDay ();
var bulan= tw.getMonth ();
var tanggal= tw.getDate ();
var hariarray=new Array("Dimanche,","Lundi,","Mardi,","Mercredi,","Jeudi,","Vendredi,","Samedi,");
var bulanarray=new Array("Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre");
document.getElementById("tanggalwaktu").innerHTML = hariarray[hari]+" "+tanggal+" "+bulanarray[bulan]+" "+tahun;
