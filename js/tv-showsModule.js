function TvShows(){

    let tvShows = [] 

    function getTvShows(){
        $.ajax({
            url : "data/tvshows.json",
            success : function(data) {
                tvShows = data
                popuniTvShowsDole()
                popuniTvShowsGore()
            }
        })
    }

    function popuniTvShowsDole() {
        let html = ""

        for(let tvshow of tvShows) 
        {
            html += showTvShow(tvshow)
        }

        document.getElementById("ubaci").innerHTML = html
        
    }

    function popuniTvShowsGore() {
        let html = ""
        let niz = tvShows.slice(0,6)

        for(let tvshow of niz) 
        {
            html += showGamesGore(tvshow)
        }

        document.getElementById("ubaciGore").innerHTML = html
        
    }

    function showTvShow(tvshow) {
        
       return  `<li class="movieCards klik1" >
                    <img class="moviePhoto" src="${tvshow.img}" alt="${tvshow.alt}">
                    <div class="movieInfo">
                        <h3>${tvshow.title}</h3>
                        <h4>${tvshow['release date']}</h4>
                    </div>
                </li>`

    }

    function showGamesGore(tvshow) {

        return  `<li class="movieCards klik1" data-idg="${tvshow.id}">
                     <img class="moviePhoto1" src="${tvshow.img}" alt="${tvshow.alt}">
                     <div class="movieInfo">
                         <h3>${tvshow.title}</h3>
                         <h4>${tvshow['release date']}</h4>
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
        getTvShows, pretragaGames
    }
}