var filmovi = dohvatiSve(filmovi);

$.ajax({
    url : "data/movies.json",
    method : "GET",
    type : "json",
    success: function (filmovi) {
        moviesGalerija(filmovi);
        moviesGalerijaGore(filmovi);
    },
    error: function (xhr, status, error) {
        console.log(xhr);
        console.log(status);
        console.log(error);
    }
  });

  function moviesGalerija(filmovi){

    let html = "";
  
    for (const f of filmovi) {
      html += `
            <li class="movieCards klik1">
            
              <img class="moviePhoto" src="${f.img}" alt="${f.alt}">
              <div class="movieInfo">
                  <h3>${f.title}</h3>
                  <h4>${f['release date']}</h4>
              </div>
            
        </li>
      `;
    };
  
    document.getElementById("ubaci").innerHTML = html;

    // var dugme1 = document.querySelector(".klik1");
    // var dugme11 = document.querySelectorAll(".klik1");

    // console.log(dugme1);
    

    $blok = $(".klik1");

    $('.klik1').click(function(){
        console.log($blok);
        // $(this).$blok.fadeIn();
    });
    
  };

$('.popUp').hide();
$dugme = $(".klik2");
$dugme.click(function(){
    $('.popUp').fadeOut();
});

  function moviesGalerijaGore(film){
    let html = "";
    let niz = film.slice(0,6);
    for (const f of niz) {
      html += `
            <li class="movieCards">
            <a href="#">
              <img class="moviePhoto" src="${f.img}" alt="${f.alt}">
              <div class="movieInfo">
                  <h3>${f.title}</h3>
                  <h4>${f['release date']}</h4>
              </div>
            </a>
        </li>
      `;
    };
  
    document.getElementById("ubaciGore").innerHTML = html;
  }
  //////////////////////////////////////////////////////////////////////////////

  document.getElementById("search").addEventListener("keyup", pretragaFilmova);
  document.getElementById("search").addEventListener("keyup", proveraSearch);

  // document.getElementById("sort").addEventListener("change", sortirajFilmove);

function pretragaFilmova(){

  const unos = this.value;

  const filtriraniNiz = filmovi.filter( function(x) {

    if(x.title.toLowerCase().indexOf(unos.trim().toLowerCase()) != -1){
      return x;
    }
    
  });
  moviesGalerija(filtriraniNiz);
  
}

function sortirajFilmove(){
  
}

/////////////// Regularni izrazi ////////////////

function proveraSearch(){

    let search = document.getElementById("search");

    let regSearch = /^[A-z]{1,25}(\s)*$/;

    if(regSearch.test(search.value)){
        search.style.borderBottom = "2px solid #000"
    }else if((search.value == " ") || (search.value == "")){
        search.style.borderBottom = "2px solid #000"
    }
    else{
        search.style.borderBottom = "2px solid #ff0000"
    }

};
////////////////////// PopUp //////////////////////
$(document).ready(function(){

    // $('.popUp').hide();
    
    // $dugme = $(".klik2");
    // $dugme.click(function(){
    //     $('.popUp').fadeOut();
    // });


})

function dohvatiSve(filmovi){
  return [
    {
        "id" : 1,
        "img" : "img/mc1.jpg",
        "alt" : "spiderman",
        "title" : "Spider-Man: Far From Home",
        "release date" : "Jul 5, 2019"
    },
    {
        "id" : 2,
        "img" : "img/mc2.jpg",
        "alt" : "avengers endgame",
        "title" : "Avengers: Endgame",
        "release date" : "Jul 5, 2019"
    },
    {
        "id" : 3,
        "img" : "img/mc3.jpg",
        "alt" : "captain marvel",
        "title" : "Captain Marvel",
        "release date" : "Jul 5, 2019"
    },
    {
        "id" : 4,
        "img" : "img/mc4.jpg",
        "alt" : "ant-man and wasp",
        "title" : "Ant-man and Wasp",
        "release date" : "Jul 5, 2019"
    },
    {
        "id" : 5,
        "img" : "img/mc5.jpg", 
        "alt" : "avengers infinity war",
        "title" : "Avengers: Infinity War",
        "release date" : "Jul 5, 2019"
    },
    {
        "id" : 6,
        "img" : "img/mc6.jpg",
        "alt" : "black panther",
        "title" : "Black Panther",
        "release date" : "Jul 5, 2019"
    },
    {
        "id" : 7,
        "img" : "img/mc7.jpg",
        "alt" : "ragnarok",
        "title" : "Thor: Ragnarok",
        "release date" : "2017"
    },
    {
        "id" : 8,
        "img" : "img/mc8.jpg", 
        "alt" : "spiderman",
        "title" : "Spider-Man: Homecoming",
        "release date" : "2017"
    },
    {
        "id" : 9,
        "img" : "img/mc9.jpg",
        "alt" : "gotg",
        "title" : "Guardians of the Galaxy Vol. 2",
        "release date" : "2017"
    },
    {
        "id" : 10,
        "img" : "img/mc10.jpg",
        "alt" : "doctor strange",
        "title" : "Doctor Strange",
        "release date" : "2016"
    },
    {
        "id" : 11,
        "img" : "img/mc11.jpg", 
        "alt" : "captain america: civil war",
        "title" : "Captain America: Civil War",
        "release date" : "2016"
    },
    {
        "id" : 12,
        "img" : "img/mc12.jpg", 
        "alt" : "ant-man",
        "title" : "Ant-man",
        "release date" : "2015"
    },
    {
        "id" : 13,
        "img" : "img/mc13.jpg", 
        "alt" : "avengers: age of ultron",
        "title" : "Avengers: Age of Ultron",
        "release date" : "2015"
    },
    {
        "id" : 14,
        "img" : "img/mc14.jpg", 
        "alt" : "gotg",
        "title" : "Guardians of the Galaxy",
        "release date" : "2014"
    },
    {
        "id" : 15,
        "img" : "img/mc15.jpg", 
        "alt" : "captain america: the winter soldier",
        "title" : "Captain America: The Winter Soldier",
        "release date" : "2015"
    },
    {
        "id" : 16,
        "img" : "img/mc16.jpg", 
        "alt" : "thor",
        "title" : "Thor: The Dark World",
        "release date" : "2013"
    },
    {
        "id" : 17,
        "img" : "img/mc17.jpg", 
        "alt" : "iron man",
        "title" : "Iron Man 3",
        "release date" : "2013"
    },
    {
        "id" : 18,
        "img" : "img/mc18.jpg", 
        "alt" : "the avengers",
        "title" : "The Avengers",
        "release date" : "2012"
    },
    {
        "id" : 19,
        "img" : "img/mc19.jpg", 
        "alt" : "captain america: the first avenger",
        "title" : "Captain America: The First Avenger",
        "release date" : "2011"
    },
    {
        "id" : 20,
        "img" : "img/mc20.jpg", 
        "alt" : "thor",
        "title" : "Thor",
        "release date" : "2011"
    },
    {
        "id" : 21,
        "img" : "img/mc21.jpg", 
        "alt" : "iron man",
        "title" : "Iron Man 2",
        "release date" : "2010"
    },
    {
        "id" : 22,
        "img" : "img/mc22.jpg", 
        "alt" : "hulk",
        "title" : "The Incredible Hulk",
        "release date" : "2008"
    },
    {
        "id" : 23,
        "img" : "img/mc23.jpg", 
        "alt" : "iron man",
        "title" : "Iron Man ",
        "release date" : "2008"
    }
]
}