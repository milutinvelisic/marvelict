window.onload = function(){
    
    var headerForma = document.getElementById("headerForma");
    headerForma.style.display="none";

    var pozivanje = document.getElementById("signIn");
    pozivanje.addEventListener("click" , pozivanjeForme);
}
window.addEventListener("load", hederLista);
window.addEventListener("load" , footerListe);
window.addEventListener("load" , footerInfoSlika);

function hederLista(){
    
    var niz=["explore.html",  "movies.html", "tv-shows.html", "games.html"];
    var niz1=["explore",  "movies", "tv shows", "games"];
    
    var divLista = document.getElementById("headerDown");
    var ispis = "<ul class='HDList'>";
    for(var i = 0; i < 4; i++ ){
        ispis += "<li><a href='"+ niz[i] +"'>"+ niz1[i] +"</a></li>";
    }
    ispis += "</ul>";
    divLista.innerHTML = ispis;
}

function footerListe(){
    var lista = [
        "about marvel",
        "marvel fans",
        "careers",
        "internships"
    ]
    var divLista = document.getElementById("footer-links-primary");
    var ispis = "<ul id='footer-links1'>";
    for(var i = 0; i < lista.length; i++ ){
        ispis += "<li><a href='#'>"+ lista[i] +"</a></li>";
    }
    ispis += "</ul>";
    divLista.innerHTML = ispis;
    ////////////////////////////////////////////////////////////////////////
    var lista1 = [
        "style.scss",
        "sitemap",
        "author",
        "documentation"
    ]
    var lista11 = [
        "css/style.scss",
        "sitemap.xml",
        "porfolio.html",
        "documentation.pdf"
      ]
      var divLista1 = document.getElementById("footer-links-secondary");
      var ispis1 = "<ul id='footer-links2'>";
      for(var i = 0; i < lista1.length; i++ ){
          ispis1 += "<li><a href="+ lista11[i] +">"+ lista1[i] +"</a></li>";
      }
    ispis1 += "</ul>";
    divLista1.innerHTML = ispis1;
    ////////////////////////////////////////////////////////////////////////
    var lista2 = [
        "<span class='fa fa-facebook'></span>",
        "<span class='fa fa-instagram'></span>",
        "<span class='fa fa-twitter'></span>"
    ]
    var divLista2 = document.getElementById("footer-follow-list");
    var ispis2 = "<ul id='footer-follow-list-links1'>";
    for(var i = 0; i < lista2.length; i++ ){
        ispis2 += "<li><a href='#'>"+ lista2[i] +"</a></li>";
    }
    ispis2 += "</ul>";
    divLista2.innerHTML = ispis2;
    ////////////////////////////////////////////////////////////////////////
    var lista3 = [
        "<span class='fa fa-pinterest'></span>",
        "<span class='fa fa-youtube'></span>",
        "<span class='fa fa-snapchat'></span>"
    ]
    var divLista2 = document.getElementById("footer-follow-list");
    var ispis2 = "<ul id='footer-follow-list-links2'>";
    for(var i = 0; i < lista3.length; i++ ){
        ispis2 += "<li><a href='#'>"+ lista3[i] +"</a></li>";
    }
    ispis2 += "</ul>";
    divLista2.innerHTML += ispis2;
}

function footerInfoSlika(){
    var infoSlika = document.getElementById("footer-promo-pic1");
    var slika = document.createElement("img");
    slika.setAttribute("src" , "img/formh.png");
    infoSlika.appendChild(slika);

    var infoSlika1 = document.getElementById("footer-promo-pic2");
    var slika1 = document.createElement("img");
    slika1.setAttribute("src" , "img/footerinfoslika.png");
    infoSlika1.appendChild(slika1);
}
function pozivanjeForme(){
    var headerForma = document.getElementById("headerForma");
    headerForma.style.display === 'none' ? headerForma.style.display='table' : headerForma.style.display='none';
}
$(document).ready(function(){

    $.ajax({
        url : "data/gotgAside.json",
        method : "GET",
        type : "json",
        success: function (gotg) {
            gotgAside(gotg);
            
        },
        error: function (xhr, status, error) {
            console.log(xhr);
            console.log(status);
            console.log(error);
            
        }
      });

      $.ajax({
        url : "data/f4Aside.json",
        method : "GET",
        type : "json",
        success: function (f4) {
            f4Aside(f4);
            
        },
        error: function (xhr, status, error) {
            console.log(xhr);
            console.log(status);
            console.log(error);
            
        }
      });

    function gotgAside(gotg){

        let html = "";
        
        for (const g of gotg) {
            html += `
                <li class="sliderBox">
                    <div class="boxPhoto">
                    <img src="${g.img}" alt="${g.alt}">
                    </div>
                    <div class="boxInfo">
                    <h3>${g.name}</h3>
                    </div>
                </li>
            `;
        };
    
    document.getElementById("ubaciAside").innerHTML = html;
    };

    function f4Aside(f4){

        let html = "";
        
        for (const f of f4) {
            html += `
                <li class="sliderBox">
                    <div class="boxPhoto">
                    <img src="${f.img}" alt="${f.alt}">
                    </div>
                    <div class="boxInfo">
                    <h3>${f.name}</h3>
                    </div>
                </li>
            `;
        };
    
    document.getElementById("ubaciAside").innerHTML = html;
    };

});