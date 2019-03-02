function Games(){

    let games = [] 

    function getGames(){
        $.ajax({
            url : "data/games.json",
            success : function(data) {
                games = data
                popuniGamesDole()
                popuniGamesGore()
            }
        })
    }

    function popuniGamesDole() {
        let html = ""

        for(let game of games) 
        {
            html += showGames(game)
        }

        document.getElementById("ubaci").innerHTML = html
        
    }

    function popuniGamesGore() {
        let html = ""
        let niz = games.slice(0,6)

        for(let game of niz) 
        {
            html += showGamesGore(game)
        }

        document.getElementById("ubaciGore").innerHTML = html
        
    }

    function showGames(game) {
        
       return  `<li class="movieCards klik1" >
                    <img class="moviePhoto" src="${game.img}" alt="${game.alt}">
                    <div class="movieInfo">
                        <h3>${game.title}</h3>
                        <h4>${game['release date']}</h4>
                    </div>
                </li>`

    }

    function showGamesGore(game) {

        return  `<li class="movieCards klik1" data-idg="${game.id}">
                     <img class="moviePhoto1" src="${game.img}" alt="${game.alt}">
                     <div class="movieInfo">
                         <h3>${game.title}</h3>
                         <h4>${game['release date']}</h4>
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
        getGames, pretragaGames
    }
}
