window.onload = function(){
    
    var headerForma = document.getElementById("headerForma");
    headerForma.style.visibility= 'hidden';

    var pozivanje = document.getElementById("signIn");
    pozivanje.addEventListener("click" , pozivanjeForme);
    
    document.getElementById("search").addEventListener("keyup", pretragaSerija);
    document.getElementById("search").addEventListener("keyup", proveraSearch);
}
var serije = dohvatiSve(serije);
window.addEventListener("load", hederLista);
window.addEventListener("load" , footerListe);
window.addEventListener("load" , footerInfoSlika);
window.addEventListener("load" , slikeNewsBlock);
window.addEventListener("load" , slikeGornjeGalerijeShowsGore);
window.addEventListener("load" , slikeGornjeGalerijeShowsDole);
// window.addEventListener("load" , slikeGamesGore);
// window.addEventListener("load" , slikeGamesDole);
window.addEventListener("load" , slikeGamesNews);
function hederLista(){
    
    var niz=[ "explore.html",  "movies.html", "tv-shows.html", "games.html" ];
    var niz1=[ "explore ",  "movies", "tv shows", "games" ];
    
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

// var elementiNizGamesD = document.querySelectorAll(".gg1");
// function slikeGamesDole(){
//     var brojacSlika = 1;
//     for(var i = 0; i<elementiNizGamesD.length; i++){
//         elementiNizGamesD[i].style.backgroundImage= "url('img/gg"+ (brojacSlika++) +".jpg')";
//     }
// }

var elementiNizGamesNews = document.querySelectorAll(".newsGames");
function slikeGamesNews(){
    var brojacSlika = 1;
    for(var i = 0; i<elementiNizGamesNews.length; i++){
        elementiNizGamesNews[i].style.backgroundImage= "url('img/ggn"+ (brojacSlika++) +".jpg')";
    }
}

function pretragaSerija(){

  const unos = this.value;
  
  const filtriraniNiz = serije.filter( function(x) {

    if(x.title.toLowerCase().indexOf(unos.trim().toLowerCase()) != -1){
      return x;
    }
    
  });  
  tvShowsGalerija(filtriraniNiz);
}

function proveraSearch(){

  let search = document.getElementById("search");

  let regSearch = /^[A-z]{1,25}$/;

  if(regSearch.test(search.value)){
      search.style.borderBottom = "2px solid #000"
  }else if((search.value == " ") || (search.value == "")){
      search.style.borderBottom = "2px solid #000"
  }
  else{
      search.style.borderBottom = "2px solid #ff0000"
  }

};

///////////// jQuery /////////////////
    
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
  
  $.ajax({
    url : "data/tvshows.json",
    method : "GET",
    type : "json",
    success: function (serije) {
        tvShowsGalerija(serije);
        tvShowsGalerijaGore(serije);
    },
    error: function (xhr, status, error) {
        console.log(xhr);
        console.log(status);
        console.log(error);
        
    }
  });

  

function tvShowsGalerija(serije){

  let html = "";

  for (const s of serije) {
    html += `
          <li class="movieCards">
          <a href="#">
            <img class="moviePhoto" src="${s.img}" alt="${s.alt}">
            <div class="movieInfo">
                <h3>${s.title}</h3>
                <h4>${s['release date']}</h4>
            </div>
          </a>
      </li>
    `;
  };

  document.getElementById("ubaci").innerHTML = html;
};

function tvShowsGalerijaGore(serije){

  let html = "";
  let niz = serije.slice(0,6);

  for (const g of niz) {
    html += `
          <li class="movieCards">
          <a href="#">
            <img class="moviePhoto" src="${g.img}" alt="${g.alt}">
            <div class="movieInfo">
                <h3>${g.title}</h3>
                <h4>${g['release date']}</h4>
            </div>
          </a>
      </li>
    `;
  };

  document.getElementById("ubaciGore").innerHTML = html;
};


function dohvatiSve(serije){
  return [
    {
        "id" : 17,
        "img" : "img/s17.jpg", 
        "alt" : "agent carder",
        "title" : "Marvel's Agent Carter",
        "release date" : "Jul 5, 2019"
    },
    {
        "id" : 1,
        "img" : "img/s21.jpg",
        "alt" : "agents of shield",
        "title" : "Marvel's Agents of S.H.I.E.L.D.",
        "release date" : "Jul 5, 2019"
    },
    {
        "id" : 2,
        "img" : "img/s20.jpg",
        "alt" : "avengers",
        "title" : "Marvel's Avengers",
        "release date" : "Jul 5, 2019"
    },
    {
        "id" : 3,
        "img" : "img/s5.jpg",
        "alt" : "cloak and dagger",
        "title" : "Marvel's Cloak and Dagger",
        "release date" : "Jul 5, 2019"
    },
    {
        "id" : 4,
        "img" : "img/s1.jpg",
        "alt" : "daredevil",
        "title" : "Marvel's Daredevil",
        "release date" : "Jul 5, 2019"
    },
    {
        "id" : 5,
        "img" : "img/s19.jpg", 
        "alt" : "the defenders",
        "title" : "Marvel's The Defenders",
        "release date" : "Jul 5, 2019"
    },
    {
        "id" : 6,
        "img" : "img/s7.jpg",
        "alt" : "the gifted",
        "title" : "The gifted",
        "release date" : "Jul 5, 2019"
    },
    {
        "id" : 7,
        "img" : "img/s8.jpg",
        "alt" : "gotg",
        "title" : "Marvel's Guardians of the Galaxy",
        "release date" : "Jul 5, 2019"
    },
    {
        "id" : 8,
        "img" : "img/s9.jpg",
        "alt" : "inhumans",
        "title" : "Marvel's Inhumans",
        "release date" : "Jul 5, 2019"
    },
    {
        "id" : 9,
        "img" : "img/s10.jpg",
        "alt" : "iron fist",
        "title" : "Marvel's Iron Fist",
        "release date" : "Jul 5, 2019"
    },
    {
        "id" : 10,
        "img" : "img/s11.jpg", 
        "alt" : "jessica jones",
        "title" : "Marvel's Jessica Jones",
        "release date" : "Jul 5, 2019"
    },
    {
        "id" : 11,
        "img" : "img/s18.jpg", 
        "alt" : "Legion",
        "title" : "Legion",
        "release date" : "Jul 5, 2019"
    },
    {
        "id" : 12,
        "img" : "img/s12.jpg", 
        "alt" : "luke cage",
        "title" : "Marvel's Luke Cage",
        "release date" : "Jul 5, 2019"
    },
    {
        "id" : 13,
        "img" : "img/s13.jpg", 
        "alt" : "rising",
        "title" : "Marvel Rising",
        "release date" : "Jul 5, 2019"
    },
    {
        "id" : 14,
        "img" : "img/s14.jpg", 
        "alt" : "the punisher",
        "title" : "Marvel's The Punisher",
        "release date" : "Jul 5, 2019"
    },
    {
        "id" : 15,
        "img" : "img/s15.jpg", 
        "alt" : "runaways",
        "title" : "Marvel's Runaways",
        "release date" : "Jul 5, 2019"
    },
    {
        "id" : 16,
        "img" : "img/s16.jpg", 
        "alt" : "spider-man",
        "title" : "Marvel's Spider-man",
        "release date" : "Jul 5, 2019"
    }   
]
}