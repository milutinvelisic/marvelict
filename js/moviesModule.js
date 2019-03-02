function Movies(){

    let movies = [] 

    function getMovies(){
        $.ajax({
            url : "data/movies.json",
            success : function(data) {
                movies = data
                popuniMoviesGore()
            }
        })
    }
    

    function popuniMoviesGore() {
        let html = ""
        let niz = movies.slice(0,6)

        for(let movie of niz) 
        {
            html += showMoviesGore(movie)
        }

        document.getElementById("ubaciGore").innerHTML = html
        
    }


    function showMoviesGore(movie) {

        return  `<li class="movieCards klik1" data-idf="${movie.id}">
                     <img class="moviePhoto1" src="${movie.img}" alt="${movie.alt}">
                     <div class="movieInfo">
                         <h3>${movie.title}</h3>
                         <h4>${movie['release date']}</h4>
                     </div>
                 </li>`
    }

    function pretragaGames(unos){
        
        
        games = games.filter( function(x) {
           
                    
            if(x.title.toLowerCase().indexOf(unos.toLowerCase()) != -1){
            return x;
            }
            
        })
        popuniGamesDole(games) // zasto ovo nece da se refresuje
        // console.log(games); // niz se posle filtera ne vrati na pocetno stanje
        
    }

    return {
        getMovies, pretragaGames
    }
}