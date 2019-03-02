window.onload = function() {
    // $('.popUp').hide();
    var headerForma = document.getElementById("headerForma");
    headerForma.style.visibility= 'hidden';

    var pozivanje = document.getElementById("signIn");
    pozivanje.addEventListener("click" , pozivanjeForme);

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

let module = Games()
module.getGames()

function pretragaGames(){
    const unos = this.value;
    
    module.pretragaGames(unos)
}

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
function slikeNewsBlock(){
    var elementiNizNews = document.querySelectorAll(".newsBlockPhoto1");
    var brojacSlika = 1;
    for(var i = 0; i<elementiNizNews.length; i++){
        elementiNizNews[i].style.backgroundImage= "url('img/nbcs"+ (brojacSlika++) +".jpg')";
    }
}
  
function pozivanjeForme(){
    var headerForma = document.getElementById("headerForma");
    headerForma.style.visibility === 'hidden' ? headerForma.style.visibility='initial' : headerForma.style.visibility='hidden';
}

document.getElementById("search").addEventListener("keyup", pretragaSerija);
// document.getElementById("search").addEventListener("keyup", pretragaGames); // zasto ovo ne radi
document.getElementById("search").addEventListener("keyup", proveraSearch);
document.getElementById("sort").addEventListener("change", sortirajGames);
document.getElementById("filter").addEventListener("change", filtrirajGames);

var games = dohvatiSve(games);

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
    url : "data/games.json",
    method : "GET",
    type : "json",
    success: function (games) {
        gamesGalerija(games);
    },
    error: function (xhr, status, error) {
        console.log(xhr);
        console.log(status);
        console.log(error);
        
    }
  });

function gamesGalerija(games){

    let html = "";

    for (const g of games) {
        html += `
            <li class="movieCards klik1" data-idg="${g.id}">
                <img class="moviePhoto" src="${g.img}" alt="${g.alt}">
                <div class="movieInfo">
                    <h3>${g.title}</h3>
                    <h4>${g['release date']}</h4>
                </div>
        </li>
        `;
    };

    document.getElementById("ubaci").innerHTML = html;


};

function pretragaSerija(){

    const unos = this.value

    const filtriraniNiz = games.filter( function(x) {

        if(x.title.toLowerCase().indexOf(unos.trim().toLowerCase()) != -1){
        return x;
        }
        
    })
    gamesGalerija(filtriraniNiz)
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

function sortirajGames(){
    let klik = this.value;

    if(klik == "latest"){
        games.sort((a, b) => b.year - a.year);
    }
    gamesGalerija(games);

    if(klik == "oldest"){
        games.sort((a, b) => a.year - b.year);
    }
    gamesGalerija(games);

    if(klik == "a-z"){
        games.sort(function(a,b){
            if (a.alt < b.alt) 
            return -1 
        if (a.alt > b.alt)
            return 1
        return 0
        });
    }
    gamesGalerija(games);

    if(klik == "z-a"){
        games.sort(function(a,b){
            if (a.alt > b.alt) 
            return -1 
        if (a.alt < b.alt)
            return 1
        return 0
        });
    }
    gamesGalerija(games);

    if(klik == "0"){
        games.sort(function(a,b){
            if (a.id < b.id) 
            return -1 
        if (a.id > b.id)
            return 1
        return 0
        })
        
    }
    gamesGalerija(games)
}

function filtrirajGames(){
    let klik = this.value;
  
      const filtriraniFilmovi1 = games.filter(function(x){
          if(x.phase == klik){
              return x;
          }
      });
      gamesGalerija(filtriraniFilmovi1);
  
      const filtriraniFilmovi2 = games.filter(function(y){
          if(y.phase == klik){
              return y;
          }
      });
      gamesGalerija(filtriraniFilmovi2);
  
      const filtriraniFilmovi3 = games.filter(function(z){
          if(z.phase == klik){
              return z;
          }
      });
      gamesGalerija(filtriraniFilmovi3);
  
      if("0" == klik){
        gamesGalerija(games);
      }
  }

function dohvatiSve(games){
    return [
        {
            "id" : 16,
            "img" : "img/gg16.png", 
            "alt" : "ultimate alliance",
            "title" : "Marvel Ultimate Alliance",
            "release date" : "2019",
            "popUpDescription" : "Coming Summer 2019. The MARVEL ULTIMATE ALLIANCE series returns for the first time in 10 years—with a new action RPG—exclusively on the Nintendo Switch™ system! Assemble your ultimate team of Marvel Super Heroes from a huge cast including the Avengers, the Guardians of the Galaxy, the X-Men, and more! Team up with friends to prevent galactic devastation at the hands of the mad cosmic tyrant Thanos and his ruthless warmasters, The Black Order.",
            "mainPhoto" : "img/gg16.png",
            "filmovi": {
                "slika1" : "img/mc5.jpg",
                "slika2" : "img/mc8.jpg",
                "slika3" : "img/mc11.jpg"
            },
            "year" : 2019,
            "phase" : "phase3"
        },
        {
            "id" : 1,
            "img" : "img/gg1.jpg",
            "alt" : "battle lines",
            "title" : "Marvel Battle Lines",
            "release date" : "2018",
            "popUpDescription" : "The Cosmic Cube has been shattered, plunging the Marvel Universe into chaos! Now, you must join forces with Super Heroes and Villains, including the Avengers, the Guardians of the Galaxy, Spider-Man, and more, to collect the shards and restore the universe. Collect over 100 of your favorite Marvel character playing cards including Captain America, Thor, Daredevil, Venom, Doctor Strange and Thanos. Available on iOS and Android.",
            "mainPhoto" : "img/gg1.jpg",
            "filmovi": {
                "slika1" : "img/mc5.jpg",
                "slika2" : "img/mc8.jpg",
                "slika3" : "img/mc11.jpg"
            },
            "year" : 2018,
            "phase" : "phase3"
        },
        {
            "id" : 2,
            "img" : "img/gg2.jpg",
            "alt" : "spiderman",
            "title" : "Marvel's Spider-Man",
            "release date" : "2018",
            "popUpDescription" : "Sony Interactive Entertainment, Insomniac Games, and Marvel have teamed up to create a brand-new and authentic Spider-Man adventure. This isn’t the Spider-Man you’ve met or ever seen before. This is an experienced Peter Parker who’s more masterful at fighting big crime in New York City. At the same time, he’s struggling to balance his chaotic personal life and career while the fate of millions of New Yorkers rest upon his shoulders.",
            "mainPhoto" : "img/gg2.jpg",
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
            "img" : "img/gg4.jpg",
            "alt" : "powers united vr",
            "title" : "Marvel Powers United VR",
            "release date" : "2018",
            "popUpDescription" : "Unleash your rage and smash foes in VR! Lock 'n load your favorite plasma cannons, or take to the skies with powerful photon blasts. Hulk, Rocket Raccoon, Captain Marvel, and a powerful roster of Marvel’s greatest heroes are ready for battle. Suit up, power up, and team up with friends to engage in immersive, explosive co-op fights from across the Marvel Universe. Be the hero and unleash your powers now!",
            "mainPhoto" : "img/gg4.jpg",
            "filmovi": {
                "slika1" : "img/mc5.jpg",
                "slika2" : "img/mc8.jpg",
                "slika3" : "img/mc11.jpg"
            },
            "year" : 2018,
            "phase" : "phase3"
        },
        {
            "id" : 4,
            "img" : "img/gg5.jpg",
            "alt" : "contest of champions",
            "title" : "Marvel Contest of Champions",
            "release date" : "2018",
            "popUpDescription" : "Iron Man vs. Captain America! Hulk vs. Wolverine! Drax vs. Deadpool! The greatest battles in Marvel history are in your hands! The greedy Elder of the Universe known as The Collector has summoned you to a brawl of epic proportions against a line-up of vile villains including Thanos, Kang the Conqueror, and many more! Experience the ultimate free-to-play fighting game on your mobile device… Contest of Champions! Who's on your team?",
            "mainPhoto" : "img/gg5.jpg",
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
            "img" : "img/gg6.jpg", 
            "alt" : "future fight",
            "title" : "Marvel Future Fight",
            "release date" : "2017",
            "popUpDescription" : "Players will have access to some of the most beloved Marvel characters including the Avengers, Spider-Man, Daredevil, and the Guardians of the Galaxy, complete with their signature moves and abilities that will allow players to build their own unstoppable team in the fight against well-known villains such as Loki, Doctor Octopus, and Ultron.",
            "mainPhoto" : "img/gg6.jpg",
            "filmovi": {
                "slika1" : "img/mc5.jpg",
                "slika2" : "img/mc8.jpg",
                "slika3" : "img/mc11.jpg"
            },
            "year" : 2017,
            "phase" : "phase2"
        },
        {
            "id" : 6,
            "img" : "img/gg3.jpg",
            "alt" : "strike force",
            "title" : "Marvel Strike Force",
            "release date" : "2017",
            "popUpDescription" : "Marvel and FoxNext Games team up to bring you “MARVEL Strike Force”! Heroes and villains alike will need to forget their differences and battle side-by-side against one of the biggest threats the world has ever seen: Ultimus. With the Kree Warlord’s sights set on Earth, players will take control of S.T.R.I.K.E.—our primary line of defense against threats like him—put a squad together, and take the fight to Ultimus and his armies.",
            "mainPhoto" : "img/gg3.jpg",
            "filmovi": {
                "slika1" : "img/mc5.jpg",
                "slika2" : "img/mc8.jpg",
                "slika3" : "img/mc11.jpg"
            },
            "year" : 2017,
            "phase" : "phase2"
        },
        {
            "id" : 7,
            "img" : "img/gg7.jpg",
            "alt" : "puzzle quest",
            "title" : "Marvel Puzzle Quest",
            "release date" : "2017",
            "popUpDescription" : "The best in match-3 puzzle gameplay meets Marvel's biggest Super Heroes and Super Villains in the most epic puzzle adventure game out on your phone, tablet and PC! Marvel Puzzle Quest combines your favorite Marvel characters with deep RPG leveling, player-vs-player tournaments, Alliances, and much more. It's time to unleash your inner Super Hero and wage war against your enemies.",
            "mainPhoto" : "img/gg7.jpg",
            "filmovi": {
                "slika1" : "img/mc5.jpg",
                "slika2" : "img/mc8.jpg",
                "slika3" : "img/mc11.jpg"
            },
            "year" : 2017,
            "phase" : "phase2"
        },
        {
            "id" : 8,
            "img" : "img/gg8.jpg",
            "alt" : "avengers academy",
            "title" : "Marvel Avengers Academy",
            "release date" : "2016",
            "popUpDescription" : "Experience the Avengers as you’ve never seen them before! Build the ultimate Super Hero academy, and play as your favorite Avengers characters reimagined as students developing their superpowers. Customize your dream campus, unlock your favorite heroes and villains, navigate their social lives, and go on epic missions.",
            "mainPhoto" : "img/gg8.jpg",
            "filmovi": {
                "slika1" : "img/mc5.jpg",
                "slika2" : "img/mc8.jpg",
                "slika3" : "img/mc11.jpg"
            },
            "year" : 2016,
            "phase" : "phase2"
        },
        {
            "id" : 9,
            "img" : "img/gg9.jpg",
            "alt" : "spiderman-man unlimited",
            "title" : "Marvel Spider-Man Unlimited",
            "release date" : "2016",
            "popUpDescription" : "Enjoy the thrill of swinging, running, and fighting through a chaotic New York on the brink of destruction, as the formidable Sinister Six attempt to gain unlimited power by opening a malevolent dimensional rift to our world. It's up to Peter Parker and iconic Spider-Man variations such as Iron Spider-Man, Spider-Man Noir, Future Foundation Spider-Man and Ben Reilly Spider-Man to team up and stop them!",
            "mainPhoto" : "img/gg9.jpg",
            "filmovi": {
                "slika1" : "img/mc5.jpg",
                "slika2" : "img/mc8.jpg",
                "slika3" : "img/mc11.jpg"
            },
            "year" : 2016,
            "phase" : "phase2"
        },
        {
            "id" : 10,
            "img" : "img/gg10.jpg", 
            "alt" : "lego marvel super heroes 2",
            "title" : "LEGO Marvel Super Heroes 2",
            "release date" : "2016",
            "popUpDescription" : "Bringing together iconic Marvel Super Heroes and Super Villains from different eras and realities, this branching storyline transports players into a cosmic battle across a myriad of Marvel locations ripped from time and space into the incredible open hub world of Chronopolis. Packed with signature LEGO humor for fans of all ages, gamers will go head-to-head with the time-travelling Kang the Conqueror through many imaginative settings in this fun-filled journey spanning the Marvel Universe.",
            "mainPhoto" : "img/gg10.jpg",
            "filmovi": {
                "slika1" : "img/mc5.jpg",
                "slika2" : "img/mc8.jpg",
                "slika3" : "img/mc11.jpg"
            },
            "year" : 2016,
            "phase" : "phase1"
        },
        {
            "id" : 11,
            "img" : "img/gg11.jpg", 
            "alt" : "marvel cs capcom infinite",
            "title" : "Marvel vs. Capcom: Infinite",
            "release date" : "2016",
            "popUpDescription" : "Marvel vs. Capcom: Infinite features a variety of exciting and accessible single player modes and rich multi-player content for new players and longtime fans alike. In addition to single player Arcade, Training, and Mission modes, a visually stunning and immersive cinematic Story Mode puts players at the center of both universes as they battle for supremacy against powerful forces and a new villain.",
            "mainPhoto" : "img/gg11.jpg",
            "filmovi": {
                "slika1" : "img/mc5.jpg",
                "slika2" : "img/mc8.jpg",
                "slika3" : "img/mc11.jpg"
            },
            "year" : 2016,
            "phase" : "phase1"
        },
        {
            "id" : 12,
            "img" : "img/gg12.jpg", 
            "alt" : "gotg",
            "title" : "Marvel's Guardians of the Galaxy: The Telltale Series",
            "release date" : "2016",
            "popUpDescription" : "Marvel’s Guardians of the Galaxy: The Telltale Series delivers a brand new story of the universe's unlikeliest heroes, the rag-tag band of outlaws who go by the names Star-Lord, Gamora, Drax, Rocket, and Groot. In the wake of an epic battle, the Guardians discover an artifact of unspeakable power. Each of the Guardians has a reason to desire this relic, as does a ruthless enemy who is the last of her kind, and who will stop at nothing to tear it from their hands.",
            "mainPhoto" : "img/gg12.jpg",
            "filmovi": {
                "slika1" : "img/mc5.jpg",
                "slika2" : "img/mc8.jpg",
                "slika3" : "img/mc11.jpg"
            },
            "year" : 2016,
            "phase" : "phase1"
        },
        {
            "id" : 13,
            "img" : "img/gg13.jpg", 
            "alt" : "pinball",
            "title" : "Marvel Pinball",
            "release date" : "2015",
            "popUpDescription" : "Whether it's the Avengers, the Guardians of the Galaxy, Ant-Man, or any of your other favorite Marvel heroes and villains, enjoy pinball action on Zen Studios' digital tables!",
            "mainPhoto" : "img/gg13.jpg",
            "filmovi": {
                "slika1" : "img/mc5.jpg",
                "slika2" : "img/mc8.jpg",
                "slika3" : "img/mc11.jpg"
            },
            "year" : 2015,
            "phase" : "phase1"
        },
        {
            "id" : 14,
            "img" : "img/gg14.jpg", 
            "alt" : "lego marvel's avengers",
            "title" : "LEGO Marvel's Avengers",
            "release date" : "2015",
            "popUpDescription" : "Avengers Assemble! The best-selling LEGO® Marvel videogame franchise returns with a new action-packed Super Hero adventure. Join the LEGO Marvel’s Avengers team and experience the first console videogame featuring characters and storylines from the critically-acclaimed film Marvel’s The Avengers, the blockbuster sequel Marvel’s Avengers: Age of Ultron, and more. Play as the most powerful Super Heroes in their quest to save the world!",
            "mainPhoto" : "img/gg14.jpg",
            "filmovi": {
                "slika1" : "img/mc5.jpg",
                "slika2" : "img/mc8.jpg",
                "slika3" : "img/mc11.jpg"
            },
            "year" : 2015,
            "phase" : "phase1"
        },
        {
            "id" : 15,
            "img" : "img/gg15.jpg", 
            "alt" : "lego marvel super heroes",
            "title" : "LEGO Marvel Super Heroes",
            "release date" : "2014",
            "popUpDescription" : "LEGO® Marvel Super Heroes features an original story spanning the entire Marvel Universe. Players take control of Iron Man, Spider-Man, the Hulk, Captain America, Wolverine and many more Marvel characters as they unite to stop Loki and a host of other Marvel villains from assembling a super-weapon capable of destroying the world. Players chase down Cosmic Bricks as they travel across LEGO Manhattan and visit key locations from the Marvel Universe like the Avengers’ Helicarrier, Stark Tower, Aste",
            "mainPhoto" : "img/gg15.jpg",
            "filmovi": {
                "slika1" : "img/mc5.jpg",
                "slika2" : "img/mc8.jpg",
                "slika3" : "img/mc11.jpg"
            },
            "year" : 2014,
            "phase" : "phase1"
        }
    ]
  }