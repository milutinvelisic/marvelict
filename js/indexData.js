$.ajax({
    url : "data/indexFeed.json",
    method : "GET",
    type : "json",
    success: function (feed) {
        indexFeed(feed);
        
    },
    error: function (xhr, status, error) {
        console.log(xhr);
        console.log(status);
        console.log(error);
    }
  });

  $.ajax({
    url : "data/stanLeeCards.json",
    method : "GET",
    type : "json",
    success: function (feed) {
        stanLeeCards(feed);
        
    },
    error: function (xhr, status, error) {
        console.log(xhr);
        console.log(status);
        console.log(error);
    }
  });

  function indexFeed(feed){

    let html = "";
    
    for (const f of feed) {
      html += `
        <li>
          <div class="feedCardsBlocks">
            <div class="feedCardsBlocksContent">
                <div class="feedCardsBlocksContentPic">
                  <img src="${f.img}" alt="${f.alt}">
                </div>
                <div class="feedCardsBlocksContentInfo">
                  <p class="cardsHeader">${f.category}</p>
                  <p class="feedCardsP">
                     ${f.title}
                  </p>
                  <p class="feedCardsP">
                      ${f.text}
                  </p>
                  <p class="cardsFooter">
                     ${f.feedTime}
                  </p>
                </div>
            </div>
          </div>
        </li>
      `;
    };
  
    document.getElementById("feedCards").innerHTML = html;
  };

  function stanLeeCards(stan){

    let html = "";
  
    for (const s of stan) {
      
      html += `
      <li>
          <div class="sliderSets">
            <div class="sliderSetsItems">
                <a href="#">
                  <div class="setPhoto">
                      <img src="${s.img}" alt="${s.alt}" />
                  </div>
                  <div class="setInfo">
                      <h3>${s.title}</h3>
                      <p>${s.text}</p>
                  </div>
                </a>
            </div>
          </div>
      </li>
      `;
  
    }
  
    document.getElementById("sliderSets").innerHTML = html;
  };