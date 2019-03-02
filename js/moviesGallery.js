var filmovi = dohvatiSve(filmovi);

let module = Movies()

module.getMovies()

$('.popUp').hide();
    $.ajax({
        url : "data/movies.json",
        method : "GET",
        type : "json",
        success: function (filmovi) {
            moviesGalerija(filmovi);
            // moviesGalerijaGore(filmovi);
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
            <li class="movieCards klik1" data-idf="${f.id}">
            
              <img class="moviePhoto" src="${f.img}" alt="${f.alt}">
              <div class="movieInfo">
                  <h3>${f.title}</h3>
                  <h4>${f['release date']}</h4>
              </div>
            
        </li>
      `;
    };
  
    document.getElementById("ubaci").innerHTML = html;
    
    $('.klik1').click(function(){
        moviesPopUp($(this).attr("data-idf"));
    });
    
}
//////////////////////////////////////////////////////////////////////////////

document.getElementById("search").addEventListener("keyup", pretragaFilmova);
document.getElementById("search").addEventListener("keyup", proveraSearch);

document.getElementById("sort").addEventListener("change", sortirajFilmove);
document.getElementById("filter").addEventListener("change", filterFilmova);

function moviesPopUp(idf){

    $.ajax({
        url : "data/movies.json",
        method : "GET",
        type : "json",
        success: function (data) {
           var film;
           for (const d of data) {
               if(d.id == idf){
                   film = d;
                   break;
               }
           }
           prikaziPop(film);
        },
        error: function (xhr, status, error) {
            console.log(xhr);
            console.log(status);
            console.log(error);
        }
      });

}

function prikaziPop(f){
    let html = "";

        html += `
        <div class="popUp" data-id="${f.id}">
        <div class="smallPopLeft">
           <div class="smallPopText">
              <p>${f.popUpDescription}</p>
           </div>
           <div class="smallPopRelatedMovies">
              <p>related movies</p>
              <div class="relatedMoviesPics">
                 <img src="${f.filmovi.slika1}" alt="">
                 <img src="${f.filmovi.slika2}" alt="">
                 <img src="${f.filmovi.slika3}" alt="">
              </div>
           </div>
           <div class="smallPopDate">
              <p class="rdate">release date</p>
              <p class="date">${f["release date"]}</p>
           </div>
        </div>
        <div class="smallPopRight">
           <img src="${f.mainPhoto}" alt="slika">
        </div>
        <span class="fa fa-times klik2"></span>
     </div>
        `;
   

    document.getElementById("popUp").innerHTML = html;
    $(".popUp").fadeIn("slow");
   
    $dugme = $(".klik2");
    $dugme.click(function(){
        $('.popUp').fadeOut();
    });

}

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

    let klik = this.value;

    if(klik == "latest"){
        filmovi.sort((a, b) => b.year - a.year);
    }
    moviesGalerija(filmovi);

    if(klik == "oldest"){
        filmovi.sort((a, b) => a.year - b.year);
    }
    moviesGalerija(filmovi);

    if(klik == "a-z"){
        filmovi.sort(function(a,b){
            if (a.alt < b.alt) 
            return -1 
        if (a.alt > b.alt)
            return 1
        return 0
        });
    }
    moviesGalerija(filmovi);

    if(klik == "z-a"){
        filmovi.sort(function(a,b){
            if (a.alt > b.alt) 
            return -1 
        if (a.alt < b.alt)
            return 1
        return 0
        });
    }
    moviesGalerija(filmovi)

    if(klik == "0"){
        filmovi.sort(function(a,b){
            if (a.id < b.id) 
            return -1 
        if (a.id > b.id)
            return 1
        return 0
        })
        
    }
    moviesGalerija(filmovi);
}

function filterFilmova(){
    let klik = this.value;

    const filtriraniFilmovi1 = filmovi.filter(function(x){
        if(x.phase == klik){
            return x;
        }
    });
    moviesGalerija(filtriraniFilmovi1);

    const filtriraniFilmovi2 = filmovi.filter(function(y){
        if(y.phase == klik){
            return y;
        }
    });
    moviesGalerija(filtriraniFilmovi2);

    const filtriraniFilmovi3 = filmovi.filter(function(z){
        if(z.phase == klik){
            return z;
        }
    });
    moviesGalerija(filtriraniFilmovi3);

    const filtriraniFilmovi4 = filmovi.filter(function(p){
        if(p.phase == klik){
            return p;
        }
    });
    moviesGalerija(filtriraniFilmovi4);

    if("0" == klik){
        moviesGalerija(filmovi);
    }
}

/////////////// Regularni izrazi ////////////////

function proveraSearch(){

    let search = document.getElementById("search");

    let regSearch = /^[A-z]{1,25}[':]*[A-z]*(\s)*[A-z]*(\s)*[A-z]*$/;

    if(regSearch.test(search.value)){
        search.style.borderBottom = "2px solid #000"
    }else if((search.value == " ") || (search.value == "")){
        search.style.borderBottom = "2px solid #000"
    }
    else{
        search.style.borderBottom = "2px solid #ff0000"
    }

}

$(document).ready(function(){

})

function dohvatiSve(filmovi){
  return [
    {
        "id" : 1,
        "img" : "img/mc1.jpg",
        "alt" : "spiderman",
        "title" : "Spider-man far from home",
        "release date" : "2019",
        "popUpDescription" : " Peter Parker returns in Spider-Man: Far From Home, the next chapter of the Spider-Man: Homecoming series! Our friendly neighborhood Super Hero decides to join his best friends Ned, MJ, and the rest of the gang on a European vacation. However, Peter’s plan to leave super heroics behind for a few weeks are quickly scrapped when he begrudgingly agrees to help Nick Fury uncover the mystery of several elemental creature attacks, creating havoc across the continent!",
        "mainPhoto" : "img/mc1.jpg",
        "filmovi": {
            "slika1" : "img/mc5.jpg",
            "slika2" : "img/mc8.jpg",
            "slika3" : "img/mc11.jpg"
        },
        "year" : 2019,
        "phase" : "phase4"
    },
    {
        "id" : 2,
        "img" : "img/mc2.jpg",
        "alt" : "avengers endgame",
        "title" : "Avengers: Endgame",
        "release date" : "2019",
        "popUpDescription" : "AVENGERS: ENDGAME <br/><br/> Release Date: April 26, 2019",
        "mainPhoto" : "img/mc2.jpg",
        "filmovi": {
            "slika1" : "img/mc5.jpg",
            "slika2" : "img/mc13.jpg",
            "slika3" : "img/mc18.jpg"
        },
        "year" : 2019,
        "phase" : "phase4"
    },
    {
        "id" : 3,
        "img" : "img/mc3.jpg",
        "alt" : "captain marvel",
        "title" : "Captain Marvel",
        "release date" : "2019",
        "popUpDescription" : "In Theaters March 8th, 2019. Directed by Anna Boden and Ryan Fleck. Starring: Brie Larson (Captain Marvel), Samuel L Jackson (Nick Fury), Ben Mendelsohn (Talos), Clark Gregg (Phil Coulson), and Lashana Lynch (Maria Rambeau).",
        "mainPhoto" : "img/mc3.jpg",
        "filmovi": {
            "slika1" : "img/mc1.jpg",
            "slika2" : "img/mc2.jpg",
            "slika3" : "img/mc5.jpg"
        },
        "year" : 2019,
        "phase" : "phase4"
    },
    {
        "id" : 4,
        "img" : "img/mc4.jpg",
        "alt" : "ant-man and wasp",
        "title" : "Ant-man and Wasp",
        "release date" : "2018",
        "popUpDescription" : "From the Marvel Cinematic Universe comes a new chapter featuring heroes with the astonishing ability to shrink: “Ant-Man and The Wasp.” In the aftermath of “Captain America: Civil War,” Scott Lang (Paul Rudd) grapples with the consequences of his choices as both a Super Hero and a father. As he struggles to rebalance his home life with his responsibilities as Ant-Man, he’s confronted by Hope van Dyne (Evangeline Lilly) and Dr. Hank Pym (Michael Douglas) with an urgent new mission. Scott must once again put on the suit and learn to fight alongside The Wasp as the team works together to uncover secrets from their past.",
        "mainPhoto" : "img/mc4.jpg",
        "filmovi": {
            "slika1" : "img/mc2.jpg",
            "slika2" : "img/mc11.jpg",
            "slika3" : "img/mc12.jpg"
        },
        "year" : 2018,
        "phase" : "phase4"
    },
    {
        "id" : 5,
        "img" : "img/mc5.jpg", 
        "alt" : "avengers infinity war",
        "title" : "Avengers: Infinity War",
        "release date" : "2018",
        "popUpDescription" : "An unprecedented cinematic journey ten years in the making and spanning the entire Marvel Cinematic Universe, Marvel Studios' 'Avengers: Infinity War' brings to the screen the ultimate, deadliest showdown of all time. As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
        "mainPhoto" : "img/mc5.jpg",
        "filmovi": {
            "slika1" : "img/mc16.jpg",
            "slika2" : "img/mc22.jpg",
            "slika3" : "img/mc4.jpg"
        },
        "year" : 2018,
        "phase" : "phase4"
    },
    {
        "id" : 6,
        "img" : "img/mc6.jpg",
        "alt" : "black panther",
        "title" : "Black Panther",
        "release date" : "2018",
        "popUpDescription" : "Marvel Studios’ “Black Panther” follows T’Challa who, after the death of his father, the King of Wakanda, returns home to the isolated, technologically advanced African nation to succeed to the throne and take his rightful place as king. But when a powerful old enemy reappears, T’Challa’s mettle as king—and Black Panther—is tested when he is drawn into a formidable conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his allies and release the full power of Black Panther to defeat his foes and secure the safety of his people and their way of life.",
        "mainPhoto" : "img/mc6.jpg",
        "filmovi": {
            "slika1" : "img/mc2.jpg",
            "slika2" : "img/mc5.jpg",
            "slika3" : "img/mc11.jpg"
        },
        "year" : 2018,
        "phase" : "phase4"
    },
    {
        "id" : 7,
        "img" : "img/mc7.jpg",
        "alt" : "ragnarok",
        "title" : "Thor: Ragnarok",
        "release date" : "2017",
        "popUpDescription" : "Thor is imprisoned on the other side of the universe without his mighty hammer and finds himself in a race against time to get back to Asgard to stop Ragnarok—the destruction of his homeworld and the end of Asgardian civilization—at the hands of an all-powerful new threat, the ruthless Hela. But first he must survive a deadly gladiatorial contest that pits him against his former ally and fellow Avenger—the Incredible Hulk!",
        "mainPhoto" : "img/mc7.jpg",
        "filmovi": {
            "slika1" : "img/mc13.jpg",
            "slika2" : "img/mc16.jpg",
            "slika3" : "img/mc20.jpg"
        },
        "year" : 2017,
        "phase" : "phase4"
    },
    {
        "id" : 8,
        "img" : "img/mc8.jpg", 
        "alt" : "spiderman",
        "title" : "Spider-Man: Homecoming",
        "release date" : "2017",
        "popUpDescription" : "A young Peter Parker/Spider-Man (Tom Holland), who made his sensational debut in Captain America: Civil War, begins to navigate his newfound identity as the web-slinging super hero in Spider-Man: Homecoming. Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May (Marisa Tomei), under the watchful eye of his new mentor Tony Stark (Robert Downey, Jr.). Peter tries to fall back into his normal daily routine – distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man – but when the Vulture (Michael Keaton) emerges as a new villain, everything that Peter holds most important will be threatened.",
        "mainPhoto" : "img/mc8.jpg",
        "filmovi": {
            "slika1" : "img/mc1.jpg",
            "slika2" : "img/mc5.jpg",
            "slika3" : "img/mc11.jpg"
        },
        "year" : 2017,
        "phase" : "phase4"
    },
    {
        "id" : 9,
        "img" : "img/mc9.jpg",
        "alt" : "gotg",
        "title" : "Guardians of the Galaxy Vol. 2",
        "release date" : "2017",
        "popUpDescription" : "Set to the backdrop of ‘Awesome Mixtape #2,’ Marvel’s Guardians of the Galaxy Vol. 2 continues the team’s adventures as they traverse the outer reaches of the cosmos. The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill’s true parentage. Old foes become new allies and fan-favorite characters from the classic comics will come to our heroes’ aid as the Marvel cinematic universe continues to expand.",
        "mainPhoto" : "img/mc9.jpg",
        "filmovi": {
            "slika1" : "img/mc2.jpg",
            "slika2" : "img/mc5.jpg",
            "slika3" : "img/mc14.jpg"
        },
        "year" : 2017,
        "phase" : "phase3"
    },
    {
        "id" : 10,
        "img" : "img/mc10.jpg",
        "alt" : "doctor strange",
        "title" : "Doctor Strange",
        "release date" : "2016",
        "popUpDescription" : "From Marvel Studios comes “Doctor Strange,” the story of world-famous neurosurgeon Dr. Stephen Strange whose life changes forever after a horrific car accident robs him of the use of his hands. When traditional medicine fails him, he is forced to look for healing, and hope, in an unlikely place—a mysterious enclave known as Kamar-Taj. He quickly learns that this is not just a center for healing but also the front line of a battle against unseen dark forces bent on destroying our reality. Before long Strange—armed with newly acquired magical powers—is forced to choose whether to return to his life of fortune and status or leave it all behind to defend the world as the most powerful sorcerer in existence.",
        "mainPhoto" : "img/mc10.jpg",
        "filmovi": {
            "slika1" : "img/mc2.jpg",
            "slika2" : "img/mc5.jpg",
            "slika3" : "img/mc4.jpg"
        },
        "year" : 2016,
        "phase" : "phase3"
    },
    {
        "id" : 11,
        "img" : "img/mc11.jpg", 
        "alt" : "captain america civil war",
        "title" : "Captain America: Civil War",
        "release date" : "2016",
        "popUpDescription" : "Marvel’s 'Captain America: Civil War' finds Steve Rogers leading the newly formed team of Avengers in their continued efforts to safeguard humanity. But after another incident involving the Avengers results in collateral damage, political pressure mounts to install a system of accountability, headed by a governing body to oversee and direct the team. The new status quo fractures the Avengers, resulting in two camps—one led by Steve Rogers and his desire for the Avengers to remain free to defend humanity without government interference, and the other following Tony Stark’s surprising decision to support government oversight and accountability.",
        "mainPhoto" : "img/mc11.jpg",
        "filmovi": {
            "slika1" : "img/mc13.jpg",
            "slika2" : "img/mc15.jpg",
            "slika3" : "img/mc18.jpg"
        },
        "year" : 2016,
        "phase" : "phase3"
    },
    {
        "id" : 12,
        "img" : "img/mc12.jpg", 
        "alt" : "antman",
        "title" : "Ant-man",
        "release date" : "2015",
        "popUpDescription" : "The next evolution of the Marvel Cinematic Universe brings a founding member of The Avengers to the big screen for the first time with Marvel Studios 'Ant-Man.' Armed with the astonishing ability to shrink in scale but increase in strength, master thief Scott Lang must embrace his inner-hero and help his mentor, Doctor Hank Pym, protect the secret behind his spectacular Ant-Man suit from a new generation of towering threats. Against seemingly insurmountable obstacles, Pym and Lang must plan and pull off a heist that will save the world.",
        "mainPhoto" : "img/mc12.jpg",
        "filmovi": {
            "slika1" : "img/mc4.jpg",
            "slika2" : "img/mc5.jpg",
            "slika3" : "img/mc11.jpg"
        },
        "year" : 2015,
        "phase" : "phase3"
    },
    {
        "id" : 13,
        "img" : "img/mc13.jpg", 
        "alt" : "avengers age of ultron",
        "title" : "Avengers: Age of Ultron",
        "release date" : "2015",
        "popUpDescription" : "Marvel Studios presents “Avengers: Age of Ultron,” the epic follow-up to the biggest Super Hero movie of all time. When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth’s Mightiest Heroes, including Iron Man, Captain America, Thor, The Incredible Hulk, Black Widow and Hawkeye, are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to the Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure.",
        "mainPhoto" : "img/mc13.jpg",
        "filmovi": {
            "slika1" : "img/mc15.jpg",
            "slika2" : "img/mc17.jpg",
            "slika3" : "img/mc18.jpg"
        },
        "year" : 2015,
        "phase" : "phase2"
    },
    {
        "id" : 14,
        "img" : "img/mc14.jpg", 
        "alt" : "guardians of the galaxy",
        "title" : "Guardians of the Galaxy",
        "release date" : "2014",
        "popUpDescription" : "An action-packed, epic space adventure, Marvel's 'Guardians of the Galaxy,' expands the Marvel Cinematic Universe into the cosmos, where brash adventurer Peter Quill finds himself the object of an unrelenting bounty hunt after stealing a mysterious orb coveted by Ronan, a powerful villain with ambitions that threaten the entire universe. To evade the ever-persistent Ronan, Quill is forced into an uneasy truce with a quartet of disparate misfits--Rocket, a gun-toting raccoon; Groot, a tree-like humanoid; the deadly and enigmatic Gamora; and the revenge-driven Drax the Destroyer. But when Quill discovers the true power of the orb and the menace it poses to the cosmos, he must do his best to rally his ragtag rivals for a last, desperate stand--with the galaxy's fate in the balance.",
        "mainPhoto" : "img/mc14.jpg",
        "filmovi": {
            "slika1" : "img/mc2.jpg",
            "slika2" : "img/mc5.jpg",
            "slika3" : "img/mc9.jpg"
        },
        "year" : 2014,
        "phase" : "phase2"
    },
    {
        "id" : 15,
        "img" : "img/mc15.jpg", 
        "alt" : "captain america the winter soldier",
        "title" : "Captain America: The Winter Soldier",
        "release date" : "2014",
        "popUpDescription" : "After the cataclysmic events in New York with The Avengers, Marvel's 'Captain America: The Winter Soldier,' finds Steve Rogers, aka Captain America, living quietly in Washington, D.C. and trying to adjust to the modern world. But when a S.H.I.E.L.D. colleague comes under attack, Steve becomes embroiled in a web of intrigue that threatens to put the world at risk. Joining forces with the Black Widow, Captain America struggles to expose the ever-widening conspiracy while fighting off professional assassins sent to silence him at every turn. When the full scope of the villainous plot is revealed, Captain America and the Black Widow enlist the help of a new ally, the Falcon. However, they soon find themselves up against an unexpected and formidable enemy--the Winter Soldier.",
        "mainPhoto" : "img/mc15.jpg",
        "filmovi": {
            "slika1" : "img/mc13.jpg",
            "slika2" : "img/mc18.jpg",
            "slika3" : "img/mc19.jpg"
        },
        "year" : 2014,
        "phase" : "phase2"
    },
    {
        "id" : 16,
        "img" : "img/mc16.jpg", 
        "alt" : "thor the dark world",
        "title" : "Thor: The Dark World",
        "release date" : "2013",
        "popUpDescription" : "In the aftermath of Marvel's 'Thor' and 'Marvel's The Avengers,' Thor fights to restore order across the cosmos...but an ancient race led by the vengeful Malekith returns to plunge the universe back into darkness. Faced with an enemy that even Odin and Asgard cannot withstand, Thor must embark on his most perilous and personal journey yet, one that will reunite him with Jane Foster and force him to sacrifice everything to save us all.",
        "mainPhoto" : "img/mc16.jpg",
        "filmovi": {
            "slika1" : "img/mc7.jpg",
            "slika2" : "img/mc13.jpg",
            "slika3" : "img/mc20.jpg"
        },
        "year" : 2013,
        "phase" : "phase2"
    },
    {
        "id" : 17,
        "img" : "img/mc17.jpg", 
        "alt" : "iron man 3",
        "title" : "Iron Man 3",
        "release date" : "2013",
        "popUpDescription" : "Marvel's 'Iron Man 3' pits brash-but-brilliant industrialist Tony Stark/Iron Man against an enemy whose reach knows no bounds. When Stark finds his personal world destroyed at his enemy's hands, he embarks on a harrowing quest to find those responsible. This journey, at every turn, will test his mettle. With his back against the wall, Stark is left to survive by his own devices, relying on his ingenuity and instincts to protect those closest to him. As he fights his way back, Stark discovers the answer to the question that has secretly haunted him: does the man make the suit or does the suit make the man",
        "mainPhoto" : "img/mc17.jpg",
        "filmovi": {
            "slika1" : "img/mc18.jpg",
            "slika2" : "img/mc21.jpg",
            "slika3" : "img/mc23.jpg"
        },
        "year" : 2013,
        "phase" : "phase2"
    },
    {
        "id" : 18,
        "img" : "img/mc18.jpg", 
        "alt" : "the avengers",
        "title" : "The Avengers",
        "release date" : "2012",
        "popUpDescription" : "Marvel Studios presents in association with Paramount Pictures 'Marvel's The Avengers'--the super hero team up of a lifetime, featuring iconic Marvel super heroes Iron Man, the Incredible Hulk, Thor, Captain America, Hawkeye and Black Widow. When an unexpected enemy emerges that threatens global safety and security, Nick Fury, Director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins.",
        "mainPhoto" : "img/mc18.jpg",
        "filmovi": {
            "slika1" : "img/mc19.jpg",
            "slika2" : "img/mc20.jpg",
            "slika3" : "img/mc21.jpg"
        },
        "year" : 2012,
        "phase" : "phase1"
    },
    {
        "id" : 19,
        "img" : "img/mc19.jpg", 
        "alt" : "captain america the first avenger",
        "title" : "Captain America: The First Avenger",
        "release date" : "2011",
        "popUpDescription" : "Marvel's 'Captain America: The First Avenger' focuses on the early days of the Marvel Universe when Steve Rogers volunteers to participate in an experimental program that turns him into the Super Soldier known as Captain America.",
        "mainPhoto" : "img/mc19.jpg",
        "filmovi": {
            "slika1" : "img/mc18.jpg",
            "slika2" : "img/mc15.jpg",
            "slika3" : "img/mc13.jpg"
        },
        "year" : 2011,
        "phase" : "phase1"
    },
    {
        "id" : 20,
        "img" : "img/mc20.jpg", 
        "alt" : "thor",
        "title" : "Thor",
        "release date" : "2011",
        "popUpDescription" : "As the son of Odin, king of the Norse gods, Thor will soon inherit the throne of Asgard from his aging father. However, on the day that he is to be crowned, Thor reacts with brutality when the gods' enemies, the Frost Giants, enter the palace in violation of their treaty. As punishment, Odin banishes Thor to Earth. While Loki, Thor's brother, plots mischief in Asgard, Thor, now stripped of his powers, faces his greatest threat.",
        "mainPhoto" : "img/mc20.jpg",
        "filmovi": {
            "slika1" : "img/mc18.jpg",
            "slika2" : "img/mc16.jpg",
            "slika3" : "img/mc13.jpg"
        },
        "year" : 2011,
        "phase" : "phase1"
    },
    {
        "id" : 21,
        "img" : "img/mc21.jpg", 
        "alt" : "iron man 2",
        "title" : "Iron Man 2",
        "release date" : "2010",
        "popUpDescription" : "With the world now aware that he is Iron Man, billionaire inventor Tony Stark faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts and 'Rhodey' Rhodes by his side, Tony must forge new alliances and confront a powerful new enemy.",
        "mainPhoto" : "img/mc21.jpg",
        "filmovi": {
            "slika1" : "img/mc23.jpg",
            "slika2" : "img/mc18.jpg",
            "slika3" : "img/mc17.jpg"
        },
        "year" : 2010,
        "phase" : "phase1"
    },
    {
        "id" : 22,
        "img" : "img/mc22.jpg", 
        "alt" : "incredible hulk",
        "title" : "The Incredible Hulk",
        "release date" : "2008",
        "popUpDescription" : "In this new beginning, scientist Bruce Banner desperately hunts for a cure to the gamma radiation that poisoned his cells and unleashes the unbridled force of rage within him: The Hulk. Living in the shadows--cut off from a life he knew and the woman he loves, Betty Ross--Banner struggles to avoid the obsessive pursuit of his nemesis, General Thunderbolt Ross and the military machinery that seeks to capture him and brutally exploit his power. As all three grapple with the secrets that led to the Hulk's creation, they are confronted with a monstrous new adversary known as the Abomination, whose destructive strength exceeds even the Hulk's own. One scientist must make an agonizing final choice: accept a peaceful life as Bruce Banner or find heroism in the creature he holds inside--The Incredible Hulk.",
        "mainPhoto" : "img/mc22.jpg",
        "filmovi": {
            "slika1" : "img/mc23.jpg",
            "slika2" : "img/mc18.jpg",
            "slika3" : "img/mc13.jpg"
        },
        "year" : 2008,
        "phase" : "phase1"
    },
    {
        "id" : 23,
        "img" : "img/mc23.jpg", 
        "alt" : "iron man",
        "title" : "Iron Man ",
        "release date" : "2008",
        "popUpDescription" : "2008's Iron Man tells the story of Tony Stark, a billionaire industrialist and genius inventor who is kidnapped and forced to build a devastating weapon. Instead, using his intelligence and ingenuity, Tony builds a high-tech suit of armor and escapes captivity. When he uncovers a nefarious plot with global implications, he dons his powerful armor and vows to protect the world as Iron Man.",
        "mainPhoto" : "img/mc23.jpg",
        "filmovi": {
            "slika1" : "img/mc21.jpg",
            "slika2" : "img/mc18.jpg",
            "slika3" : "img/mc17.jpg"
        },
        "year" : 2008,
        "phase" : "phase1"
    }
]
}