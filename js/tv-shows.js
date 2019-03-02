window.onload = function(){
  $('.popUp').hide();
    var headerForma = document.getElementById("headerForma");
    headerForma.style.visibility= 'hidden';

    var pozivanje = document.getElementById("signIn");
    pozivanje.addEventListener("click" , pozivanjeForme);
    
    document.getElementById("search").addEventListener("keyup", pretragaSerija);
    document.getElementById("search").addEventListener("keyup", proveraSearch);
    document.getElementById("sort").addEventListener("change", sortirajSerije);
    document.getElementById("filter").addEventListener("change", filtrirajSerije);

    localStorage.getItem("username");
    
    if(localStorage.getItem("username")){
      document.getElementById("pozivanje").innerHTML = "WELCOME " +localStorage.getItem("username");
    document.querySelector(".search .logo2").innerHTML = "<a href='index.html'>LOGOUT</a>";
    document.querySelector(".search .logo3").innerHTML = "<a href='index.html'>LOGOUT</a>";
    pozivanje.removeEventListener("click" , pozivanjeForme);
  }
  document.querySelector(".search .logo2").addEventListener("click" , function () {
    localStorage.removeItem("username");
  })

  document.querySelector(".search .logo3").addEventListener("click" , function () {
    localStorage.removeItem("username");
  })
}
var serije = dohvatiSve(serije);
window.addEventListener("load", hederLista);
window.addEventListener("load" , footerListe);
window.addEventListener("load" , footerInfoSlika);
window.addEventListener("load" , slikeNewsBlock);
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

var elementiNizNews = document.querySelectorAll(".newsBlockPhoto1");
function slikeNewsBlock(){
  var brojacSlika = 1;
  for(var i = 0; i<elementiNizNews.length; i++){
    elementiNizNews[i].style.backgroundImage= "url('img/nbcs"+ (brojacSlika++) +".jpg')";
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

  let regSearch = /^[A-z]{1,25}[':]*[A-z]*(\s)*[A-z]*(\s)*$/;

  if(regSearch.test(search.value)){
      search.style.borderBottom = "2px solid #000"
  }else if((search.value == " ") || (search.value == "")){
      search.style.borderBottom = "2px solid #000"
  }
  else{
      search.style.borderBottom = "2px solid #ff0000"
  }

}

function sortirajSerije(){
  let klik = this.value;

    if(klik == "latest"){
        serije.sort((a, b) => b.year - a.year);
    }
    tvShowsGalerija(serije);

    if(klik == "oldest"){
      serije.sort((a, b) => a.year - b.year);
    }
    tvShowsGalerija(serije);

    if(klik == "a-z"){
      serije.sort(function(a,b){
            if (a.alt < b.alt) 
            return -1 
        if (a.alt > b.alt)
            return 1
        return 0
        });
    }
    tvShowsGalerija(serije);

    if(klik == "z-a"){
      serije.sort(function(a,b){
            if (a.alt > b.alt) 
            return -1 
        if (a.alt < b.alt)
            return 1
        return 0
        });
    }
    tvShowsGalerija(serije);

    if(klik == "0"){
      serije.sort(function(a,b){
          if (a.id < b.id) 
          return -1 
      if (a.id > b.id)
          return 1
      return 0
      })
      
    }
    tvShowsGalerija(serije)
}

function filtrirajSerije(){
  let klik = this.value;

    const filtriraniFilmovi1 = serije.filter(function(x){
        if(x.phase == klik){
            return x;
        }
    });
    tvShowsGalerija(filtriraniFilmovi1);

    const filtriraniFilmovi2 = serije.filter(function(y){
        if(y.phase == klik){
            return y;
        }
    });
    tvShowsGalerija(filtriraniFilmovi2);

    const filtriraniFilmovi3 = serije.filter(function(z){
        if(z.phase == klik){
            return z;
        }
    });
    tvShowsGalerija(filtriraniFilmovi3);

    if("0" == klik){
      tvShowsGalerija(serije);
    }
}

///////////// jQuery /////////////////
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
})

let module = TvShows()
module.getTvShows()


function tvShowsGalerija(serije){

  let html = ""

  for (const s of serije) {
    html += `
          <li class="movieCards klik1" data-ids="${s.id}">
            <img class="moviePhoto" src="${s.img}" alt="${s.alt}">
            <div class="movieInfo">
                <h3>${s.title}</h3>
                <h4>${s['release date']}</h4>
            </div>
      </li>
    `;
  }

  document.getElementById("ubaci").innerHTML = html

}

function dohvatiSve(serije){
  return [
    {
        "id" : 17,
        "img" : "img/s17.jpg", 
        "alt" : "agent carter",
        "title" : "Marvel's Agent Carter",
        "release date" : "2016",
        "popUpDescription" : "Dedicated to the fight against new Atomic Age threats in the wake of World War II, Peggy must now journey from New York City to Los Angeles for her most dangerous assignment yet. But even as she discovers new friends, a new home – perhaps even a new love – she's about to find out that the bright lights of the post-war Hollywood mask a more sinister threat to everyone she is sworn to protect.",
        "mainPhoto" : "img/s17.jpg",
        "filmovi": {
            "slika1" : "img/mc5.jpg",
            "slika2" : "img/mc8.jpg",
            "slika3" : "img/mc11.jpg"
        },
        "year" : 2016,
        "phase" : "phase3"
    },
    {
        "id" : 1,
        "img" : "img/s21.jpg",
        "alt" : "agents of shield",
        "title" : "Marvel's Agents of S.H.I.E.L.D.",
        "release date" : "2019",
        "popUpDescription" : "AGENTS OF S.H.I.E.L.D. <br/><br/>“Marvel’s Agents of S.H.I.E.L.D.” stars Clark Gregg, Ming-Na Wen, Chloe Bennet, Iain De Caestecker, Elizabeth Henstridge, Henry Simmons, Natalia Cordova-Buckley and Jeff Ward.",
        "mainPhoto" : "img/s21.jpg",
        "filmovi": {
            "slika1" : "img/mc5.jpg",
            "slika2" : "img/mc8.jpg",
            "slika3" : "img/mc11.jpg"
        },
        "year" : 2019,
        "phase" : "phase3"
    },
    {
        "id" : 2,
        "img" : "img/s20.jpg",
        "alt" : "avengers",
        "title" : "Marvel's Avengers",
        "release date" : "2018",
        "popUpDescription" : "The Black Panther must decide his loyalties. Is he an Avenger first or King of Wakanda? As the mysterious Shadow Council rises to challenge Wakanda, T’Challa teams up with his sister Shuri to go on missions that no other Avenger can. It’s a globe-trotting journey of espionage and mystery as old foes resurface and new friends are made. In the end, Black Panther must balance defending his home and stopping threats before they start. Is he a sword or shield? Only he can decide.",
        "mainPhoto" : "img/s20.jpg",
        "filmovi": {
            "slika1" : "img/mc5.jpg",
            "slika2" : "img/mc8.jpg",
            "slika3" : "img/mc11.jpg"
        },
        "year" : 2018,
        "phase" : "phase3"
    },
    {
        "id" : 3,
        "img" : "img/s5.jpg",
        "alt" : "cloak and dagger",
        "title" : "Marvel's Cloak and Dagger",
        "release date" : "2019",
        "popUpDescription" : "Marvel’s Cloak & Dagger is the story of Tandy Bowen (Olivia Holt) and Tyrone Johnson (Aubrey Joseph) – two teenagers from very different backgrounds, who find themselves burdened and awakened to newly acquired superpowers which are mysteriously linked to one another. The only constant in their lives is danger and each other.",
        "mainPhoto" : "img/s5.jpg",
        "filmovi": {
            "slika1" : "img/mc5.jpg",
            "slika2" : "img/mc8.jpg",
            "slika3" : "img/mc11.jpg"
        },
        "year" : 2019,
        "phase" : "phase3"
    },
    {
        "id" : 4,
        "img" : "img/s1.jpg",
        "alt" : "daredevil",
        "title" : "Marvel's Daredevil",
        "release date" : "2018",
        "popUpDescription" : "Missing for months, Matt Murdock reemerges a broken man, putting into question his future as both vigilante Daredevil and lawyer Matthew Murdock. But when his archenemy Wilson Fisk is released from prison, Matt must choose between hiding from the world, or embracing his destiny as a hero.",
        "mainPhoto" : "img/s1.jpg",
        "filmovi": {
            "slika1" : "img/mc5.jpg",
            "slika2" : "img/mc8.jpg",
            "slika3" : "img/mc11.jpg"
        },
        "year" : 2018,
        "phase" : "phase3"
    },
    {
        "id" : 5,
        "img" : "img/s19.jpg", 
        "alt" : "the defenders",
        "title" : "Marvel's The Defenders",
        "release date" : "2017",
        "popUpDescription" : "Marvel’s The Defenders follows Daredevil AKA Matt Murdock (Charlie Cox), Jessica Jones (Krysten Ritter), Luke Cage (Mike Colter) and Iron Fist AKA Danny Rand (Finn Jones), a quartet of singular heroes with one common goal – to save New York City. This is the story of four solitary figures, burdened with their own personal challenges, who reluctantly realize they just might be stronger when teamed together.",
        "mainPhoto" : "img/s19.jpg",
        "filmovi": {
            "slika1" : "img/mc5.jpg",
            "slika2" : "img/mc8.jpg",
            "slika3" : "img/mc11.jpg"
        },
        "year" : 2017,
        "phase" : "phase3"
    },
    {
        "id" : 6,
        "img" : "img/s7.jpg",
        "alt" : "the gifted",
        "title" : "The gifted",
        "release date" : "2018",
        "popUpDescription" : "Will you fight for what's right? Stand with the Mutant Underground's Lauren Strucker, Reed Strucker, Caitlin Strucker, Thunderbird, Blink, and Eclipse. Or are you tired of mutants living in the shadows? The Inner Circle's Polaris, Andy Strucker, Esme Frost, and Reeva Payge understands your plight. Season 2 of The Gifted airs Tuesday nights on FOX.",
        "mainPhoto" : "img/s7.jpg",
        "filmovi": {
            "slika1" : "img/mc5.jpg",
            "slika2" : "img/mc8.jpg",
            "slika3" : "img/mc11.jpg"
        },
        "year" : 2018,
        "phase" : "phase2"
    },
    {
        "id" : 7,
        "img" : "img/s8.jpg",
        "alt" : "guardians of the galaxy",
        "title" : "Marvel's Guardians of the Galaxy",
        "release date" : "2018",
        "popUpDescription" : "Breakout! The Guardians of the Galaxy begin their next adventure as they encounter new friends and old foes alike. They gain fame and fortune after arresting Thanos, but are quickly back on their heels after being framed by the Collector. They’ll travel to new universes, stage a massive sting operation inside the Nova Corps, an expose a Secret Invasion years in the making. A little bad and a little good – all in a day’s work.",
        "mainPhoto" : "img/s8.jpg",
        "filmovi": {
            "slika1" : "img/mc5.jpg",
            "slika2" : "img/mc8.jpg",
            "slika3" : "img/mc11.jpg"
        },
        "year" : 2018,
        "phase" : "phase2"
    },
    {
        "id" : 8,
        "img" : "img/s9.jpg",
        "alt" : "inhumans",
        "title" : "Marvel's Inhumans",
        "release date" : "2017",
        "popUpDescription" : "Marvel’s Inhumans explores the epic adventure of the royal family including Black Bolt, the enigmatic, commanding King of the Inhumans, with a voice so powerful that the slightest whisper can destroy a city. After the Royal Family is splintered by a military coup, they barely escape to Hawaii and are greeted with surprising interactions with the lush world around them. Now they must find a way to reunite with each other and return to their home before their way of life is destroyed forever.",
        "mainPhoto" : "img/s9.jpg",
        "filmovi": {
            "slika1" : "img/mc5.jpg",
            "slika2" : "img/mc8.jpg",
            "slika3" : "img/mc11.jpg"
        },
        "year" : 2017,
        "phase" : "phase2"
    },
    {
        "id" : 9,
        "img" : "img/s10.jpg",
        "alt" : "iron fist",
        "title" : "Marvel's Iron Fist",
        "release date" : "2018",
        "popUpDescription" : "Danny Rand and Colleen Wing are trying to keep the peace among the many warring gangs. With the help of Misty Knight, they discover that the crime ring in the city goes far deeper than they had ever anticipated and hanging up their swords is no longer an option. Davos returns to NYC after finding his home of K’un-Lun gone. Blaming Danny for its tragic fate, Davos swears to avenge their lost city and reignites a sibling rivalry over the duties linked with wielding the legendary Iron Fist.",
        "mainPhoto" : "img/s10.jpg",
        "filmovi": {
            "slika1" : "img/mc5.jpg",
            "slika2" : "img/mc8.jpg",
            "slika3" : "img/mc11.jpg"
        },
        "year" : 2018,
        "phase" : "phase2"
    },
    {
        "id" : 10,
        "img" : "img/s11.jpg", 
        "alt" : "jessica jones",
        "title" : "Marvel's Jessica Jones",
        "release date" : "2018",
        "popUpDescription" : "After a tragic childhood accident leaves Jessica Jones with incredible strength, she attempts to rebuild her life in New York City as a private investigator, where she is often drawn into cases involving people with extraordinary abilities.",
        "mainPhoto" : "img/s11.jpg",
        "filmovi": {
            "slika1" : "img/mc5.jpg",
            "slika2" : "img/mc8.jpg",
            "slika3" : "img/mc11.jpg"
        },
        "year" : 2018,
        "phase" : "phase2"
    },
    {
        "id" : 11,
        "img" : "img/s18.jpg", 
        "alt" : "Legion",
        "title" : "Legion",
        "release date" : "2019",
        "popUpDescription" : "Who else but the son of Professor Charles Xavier could possess multiple personalities, spontaneously mutate, or reconstruct reality on a psychic whim? Explore the cerebral conundrum of David Haller, the dangerously unstable mutant known as Legion.",
        "mainPhoto" : "img/s18.jpg",
        "filmovi": {
            "slika1" : "img/mc5.jpg",
            "slika2" : "img/mc8.jpg",
            "slika3" : "img/mc11.jpg"
        },
        "year" : 2019,
        "phase" : "phase2"
    },
    {
        "id" : 12,
        "img" : "img/s12.jpg", 
        "alt" : "luke cage",
        "title" : "Marvel's Luke Cage",
        "release date" : "2018",
        "popUpDescription" : "After a sabotaged experiment leaves him with super strength and unbreakable skin, Luke Cage (Mike Colter) became a fugitive trying to rebuild his life in modern day Harlem, New York City. Now Cage is a free man and reluctant hero struggling to keep Harlem safe in a town where everyone knows his name.",
        "mainPhoto" : "img/s12.jpg",
        "filmovi": {
            "slika1" : "img/mc5.jpg",
            "slika2" : "img/mc8.jpg",
            "slika3" : "img/mc11.jpg"
        },
        "year" : 2018,
        "phase" : "phase1"
    },
    {
        "id" : 13,
        "img" : "img/s13.jpg", 
        "alt" : "rising",
        "title" : "Marvel Rising",
        "release date" : "2018",
        "popUpDescription" : "Marvel Rising: Secret Warriors is a long-anticipated event, bringing together Marvel’s newest and beloved characters that have garnered major fan excitement over the last few years. Powered teens Ms. Marvel, Squirrel Girl, Quake, Patriot, America Chavez, and Inferno join forces as an unlikely, but formidable crew of aspiring heroes. When a threat no one could have expected bears down on the Marvel Universe, this ragtag, untrained band of teens have no choice but to rise together.",
        "mainPhoto" : "img/s13.jpg",
        "filmovi": {
            "slika1" : "img/mc5.jpg",
            "slika2" : "img/mc8.jpg",
            "slika3" : "img/mc11.jpg"
        },
        "year" : 2018,
        "phase" : "phase1"
    },
    {
        "id" : 14,
        "img" : "img/s14.jpg", 
        "alt" : "the punisher",
        "title" : "Marvel's The Punisher",
        "release date" : "2019",
        "popUpDescription" : "Former marine-turned-vigilante Frank Castle (Jon Bernthal) has been living a quiet life on the road until he suddenly becomes embroiled in the attempted murder of a young girl (Giorgia Whigham). As he is drawn into the mystery surrounding her and those in pursuit of the information she holds, Castle attracts a new target on his back as new and old enemies force him to confront whether he should accept his destiny and embrace a life as “The Punisher.”",
        "mainPhoto" : "img/s14.jpg",
        "filmovi": {
            "slika1" : "img/mc5.jpg",
            "slika2" : "img/mc8.jpg",
            "slika3" : "img/mc11.jpg"
        },
        "year" : 2019,
        "phase" : "phase1"
    },
    {
        "id" : 15,
        "img" : "img/s15.jpg", 
        "alt" : "runaways",
        "title" : "Marvel's Runaways",
        "release date" : "2018",
        "popUpDescription" : "Runaways have left their homes (and evil parents) behind and now have to learn to live on their own. Our kids begin to realize, for better or worse, they're stuck with each other. And it's up to them to take down Pride once and for all.",
        "mainPhoto" : "img/s15.jpg",
        "filmovi": {
            "slika1" : "img/mc5.jpg",
            "slika2" : "img/mc8.jpg",
            "slika3" : "img/mc11.jpg"
        },
        "year" : 2018,
        "phase" : "phase1"
    },
    {
        "id" : 16,
        "img" : "img/s16.jpg", 
        "alt" : "spider-man",
        "title" : "Marvel's Spider-man",
        "release date" : "2018",
        "popUpDescription" : "It’s now Peter Parker’s “sophomore year” and he’s no longer an inexperienced new superhero nor a brand new student at the intimidating Horizon High. But his foes are also no longer inexperienced and his ever-growing Rogue’s Gallery is now again focused on taking Spider-Man down. Picking up where Season One left off, the stakes are much higher in both Peter's personal life and super hero life. Peter must balance working at the Daily Bugle to afford tuition at Horizon High with surviving Doc Ock.",
        "mainPhoto" : "img/s16.jpg",
        "filmovi": {
            "slika1" : "img/mc5.jpg",
            "slika2" : "img/mc8.jpg",
            "slika3" : "img/mc11.jpg"
        },
        "year" : 2018,
        "phase" : "phase1"
    }   
]
}