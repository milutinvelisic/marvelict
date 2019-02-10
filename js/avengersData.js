$.ajax({
    url : "data/avengersAside.json",
    method : "GET",
    type : "json",
    success: function (avg) {
        avengersAside(avg);
        
    },
    error: function (xhr, status, error) {
        console.log(xhr);
        console.log(status);
        console.log(error);
    }
  });

function avengersAside(avengers){

    let html = "";
  
    for (const a of avengers) {
      html += `
            <li class="sliderBox">
              <div class="boxPhoto">
                <img src="${a.img}" alt="${a.alt}">
              </div>
              <div class="boxInfo">
                <h3>${a.name}</h3>
              </div>
            </li>
      `;
    };
  
    document.getElementById("ubaciAside").innerHTML = html;
  };