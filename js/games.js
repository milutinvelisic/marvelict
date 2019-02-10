document.getElementById("search").addEventListener("keyup", pretragaSerija);
document.getElementById("search").addEventListener("keyup", proveraSearch);
var games = dohvatiSve(games);
$.ajax({
    url : "data/games.json",
    method : "GET",
    type : "json",
    success: function (games) {
        gamesGalerija(games);
        gamesGalerijaGore(games);        
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
  
    document.getElementById("ubaci").innerHTML = html;
  };
  
  function gamesGalerijaGore(games){
  
    let html = "";
    let niz = games.slice(0,6);
  
    for (const g of niz) {
      html += `
            <li class="movieCards">
            <a href="#">
              <img class="moviePhoto1" src="${g.img}" alt="${g.alt}">
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

  function pretragaSerija(){

    const unos = this.value;
    
    const filtriraniNiz = games.filter( function(x) {
  
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
  
  };


function dohvatiSve(games){
    return [
        {
            "id" : 16,
            "img" : "img/gg16.png", 
            "alt" : "ultimate alliance",
            "title" : "Marvel Ultimate Alliance",
            "release date" : "2019"
        },
        {
            "id" : 1,
            "img" : "img/gg1.jpg",
            "alt" : "battle lines",
            "title" : "Marvel Battle Lines",
            "release date" : "2018"
        },
        {
            "id" : 2,
            "img" : "img/gg2.jpg",
            "alt" : "spiderman",
            "title" : "Marvel's Spider-Man",
            "release date" : "2018"
        },
        {
            "id" : 3,
            "img" : "img/gg4.jpg",
            "alt" : "powers united vr",
            "title" : "Marvel Powers United VR",
            "release date" : "2018"
        },
        {
            "id" : 4,
            "img" : "img/gg5.jpg",
            "alt" : "contest of champions",
            "title" : "Marvel Contest of Champions",
            "release date" : "2018"
        },
        {
            "id" : 5,
            "img" : "img/gg6.jpg", 
            "alt" : "future fight",
            "title" : "Marvel Future Fight",
            "release date" : "2017"
        },
        {
            "id" : 6,
            "img" : "img/gg3.jpg",
            "alt" : "strike force",
            "title" : "Marvel Strike Force",
            "release date" : "2017"
        },
        {
            "id" : 7,
            "img" : "img/gg7.jpg",
            "alt" : "puzzle quest",
            "title" : "Marvel Puzzle Quest",
            "release date" : "2017"
        },
        {
            "id" : 8,
            "img" : "img/gg8.jpg",
            "alt" : "avengers academy",
            "title" : "Marvel Avengers Academy",
            "release date" : "2016"
        },
        {
            "id" : 9,
            "img" : "img/gg9.jpg",
            "alt" : "spiderman-man unlimited",
            "title" : "Marvel Spider-Man Unlimited",
            "release date" : "2016"
        },
        {
            "id" : 10,
            "img" : "img/gg10.jpg", 
            "alt" : "lego marvel super heroes 2",
            "title" : "LEGO Marvel Super Heroes 2",
            "release date" : "2016"
        },
        {
            "id" : 11,
            "img" : "img/gg11.jpg", 
            "alt" : "marvel cs capcom: infinite",
            "title" : "Marvel vs. Capcom: Infinite",
            "release date" : "2016"
        },
        {
            "id" : 12,
            "img" : "img/gg12.jpg", 
            "alt" : "gotg",
            "title" : "Marvel's Guardians of the Galaxy: The Telltale Series",
            "release date" : "2016"
        },
        {
            "id" : 13,
            "img" : "img/gg13.jpg", 
            "alt" : "pinball",
            "title" : "Marvel Pinball",
            "release date" : "2015"
        },
        {
            "id" : 14,
            "img" : "img/gg14.jpg", 
            "alt" : "lego marvel's avengers",
            "title" : "LEGO Marvel's Avengers",
            "release date" : "2015"
        },
        {
            "id" : 15,
            "img" : "img/gg15.jpg", 
            "alt" : "lego marvel super heroes",
            "title" : "LEGO Marvel Super Heroes",
            "release date" : "2014"
        }
    ]
  }