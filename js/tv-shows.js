window.onload = function(){
    
    var headerForma = document.getElementById("headerForma");
    headerForma.style.visibility= 'hidden';

    var pozivanje = document.getElementById("signIn");
    pozivanje.addEventListener("click" , pozivanjeForme);

    

}
window.addEventListener("load", hederLista);
window.addEventListener("load" , footerListe);
window.addEventListener("load" , footerInfoSlika);
window.addEventListener("load" , slikeNewsBlock);
window.addEventListener("load" , slikeGornjeGalerijeShowsGore);
window.addEventListener("load" , slikeGornjeGalerijeShowsDole);
window.addEventListener("load" , slikeGamesGore);
window.addEventListener("load" , slikeGamesDole);
window.addEventListener("load" , slikeGamesNews);
function hederLista(){
    
    var niz=[ "explore.html",  "movies.html", "tv-shows.html", "games.html", ];
    var niz1=[ "explore ",  "movies", "tv shows", "games", ];
    
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
    headerForma.style.visibility === 'hidden' ? headerForma.style.visibility='initial' : headerForma.style.visibility='hidden';
}

var elementiGoreNiz = document.querySelectorAll(".gs1");
function slikeGornjeGalerijeShowsGore(){
  var brojacSlika = 1;
  for(var i = 0; i<elementiGoreNiz.length; i++){
    elementiGoreNiz[i].style.backgroundImage= "url('img/s"+ (brojacSlika++) +".jpg')";
  }
}

var elementiDoleNiz = document.querySelectorAll(".s1");
function slikeGornjeGalerijeShowsDole(){
  var brojacSlika = 1;
  for(var i = 0; i<elementiDoleNiz.length; i++){
    elementiDoleNiz[i].style.backgroundImage= "url('img/s"+ (brojacSlika++) +".jpg')";
  }
}

var elementiNizNews = document.querySelectorAll(".newsBlockPhoto1");
function slikeNewsBlock(){
  var brojacSlika = 1;
  for(var i = 0; i<elementiNizNews.length; i++){
    elementiNizNews[i].style.backgroundImage= "url('img/nbcs"+ (brojacSlika++) +".jpg')";
  }
}

var elementiNizGamesG = document.querySelectorAll(".gg");
function slikeGamesGore(){
    var brojacSlika = 1;
    for(var i = 0; i<elementiNizGamesG.length; i++){
        elementiNizGamesG[i].style.backgroundImage= "url('img/gg"+ (brojacSlika++) +".jpg')";
    }
}

var elementiNizGamesD = document.querySelectorAll(".gg1");
function slikeGamesDole(){
    var brojacSlika = 1;
    for(var i = 0; i<elementiNizGamesD.length; i++){
        elementiNizGamesD[i].style.backgroundImage= "url('img/gg"+ (brojacSlika++) +".jpg')";
    }
}

var elementiNizGamesNews = document.querySelectorAll(".newsGames");
function slikeGamesNews(){
    var brojacSlika = 1;
    for(var i = 0; i<elementiNizGamesNews.length; i++){
        elementiNizGamesNews[i].style.backgroundImage= "url('img/ggn"+ (brojacSlika++) +".jpg')";
    }
}

$(document).ready(function(){
    
    $(function(){
      $(".movieCards").hover(
        function(){
        $(this).find(".moviePhoto").stop( true, true ).animate({
          marginTop : "-=5px"
        },200)
      },
        function(){
          $(this).find(".moviePhoto").stop( true, true ).animate({
            marginTop : "+=5px"
          },200)
        })
    });
    
    $(function(){
      $(".movieCards").hover(
        function(){
        $(this).find(".moviePhoto1").stop( true, true ).animate({
          marginTop : "-=5px"
        },200)
      },
        function(){
          $(this).find(".moviePhoto1").stop( true, true ).animate({
            marginTop : "+=5px"
          },200)
        })
    });

    $('#newsBlockNone').hide();
	$('.showmore').click(function(){
		if(($('#newsBlockNone')).is(':visible')){
      $('#newsBlockNone').slideUp(500);
      $('#showMore').show();
      $('.showmore').html('<h4>Show more</h4>');
		}
		else{
      $('#newsBlockNone').slideDown(500);
      $('.showmore').html('<h4>Show Less</h4>');
    }
	});
});