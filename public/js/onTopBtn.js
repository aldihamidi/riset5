// Ambil tombolnya
 var mybutton = document.getElementById("onTopBtn");

 // Ketika user scrolls ke bawah 100px dari puncak atas halaman, tombolnya muncul
 window.onscroll = function() {
     scrollFunction()
 };

 function scrollFunction() {
     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
         mybutton.style.display = "block";
     } else {
         mybutton.style.display = "none";
     }
 }

 // Kalo tombolnya diklik, Langsung ke atas
 function topFunction() {
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
 }