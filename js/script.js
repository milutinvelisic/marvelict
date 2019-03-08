window.onload = function() {
	let url = window.location.href;

	if (url.indexOf('index.html') != -1) {
		hederLista();
		footerListe();
		footerInfoSlika();
		slajderSlike();
		indexAjax();

		var headerForma = document.getElementById('headerForma');
		headerForma.style.visibility = 'hidden';

		var pozivanje = document.getElementById('signIn');
		pozivanje.addEventListener('click', pozivanjeForme);

		localStorage.getItem('username');

		if (localStorage.getItem('username')) {
			document.getElementById('pozivanje').innerHTML = 'WELCOME ' + localStorage.getItem('username');
			document.querySelector('.search .logo2').innerHTML = "<a href='index.html'>LOGOUT</a>";
			document.querySelector('.search .logo3').innerHTML = "<a href='index.html'>LOGOUT</a>";
			pozivanje.removeEventListener('click', pozivanjeForme);
		}
		document.querySelector('.search .logo2').addEventListener('click', function() {
			localStorage.removeItem('username');
		});

		document.querySelector('.search .logo3').addEventListener('click', function() {
			localStorage.removeItem('username');
		});

		function hederLista() {
			var niz = [ 'explore.html', 'movies.html', 'tv-shows.html', 'games.html' ];
			var niz1 = [ 'explore', 'movies', 'tv shows', 'games' ];

			var divLista = document.getElementById('headerDown');
			var ispis = "<ul class='HDList'>";
			for (var i = 0; i < niz.length; i++) {
				ispis += "<li><a href='" + niz[i] + "'>" + niz1[i] + '</a></li>';
			}
			ispis += '</ul>';
			divLista.innerHTML = ispis;
		}

		function footerListe() {
			var lista = [ 'about marvel', 'marvel fans', 'careers', 'internships' ];
			var divLista = document.getElementById('footer-links-primary');
			var ispis = "<ul id='footer-links1'>";
			for (var i = 0; i < lista.length; i++) {
				ispis += "<li><a href='#'>" + lista[i] + '</a></li>';
			}
			ispis += '</ul>';
			divLista.innerHTML = ispis;
			////////////////////////////////////////////////////////////////////////
			var lista1 = [ 'scss', 'sitemap', 'author', 'documentation' ];
			var lista11 = [ 'css/style.scss', 'sitemap.xml', 'porfolio.html', 'documentation.pdf' ];
			var divLista1 = document.getElementById('footer-links-secondary');
			var ispis1 = "<ul id='footer-links2'>";
			for (var i = 0; i < lista1.length; i++) {
				ispis1 += '<li><a href=' + lista11[i] + '>' + lista1[i] + '</a></li>';
			}
			ispis1 += '</ul>';
			divLista1.innerHTML = ispis1;
			////////////////////////////////////////////////////////////////////////
			var lista2 = [
				"<span class='fa fa-facebook'></span>",
				"<span class='fa fa-instagram'></span>",
				"<span class='fa fa-twitter'></span>"
			];
			var divLista2 = document.getElementById('footer-follow-list');
			var ispis2 = "<ul id='footer-follow-list-links1'>";
			for (var i = 0; i < lista2.length; i++) {
				ispis2 += "<li><a href='#'>" + lista2[i] + '</a></li>';
			}
			ispis2 += '</ul>';
			divLista2.innerHTML = ispis2;
			////////////////////////////////////////////////////////////////////////
			var lista3 = [
				"<span class='fa fa-pinterest'></span>",
				"<span class='fa fa-youtube'></span>",
				"<span class='fa fa-snapchat'></span>"
			];
			var divLista2 = document.getElementById('footer-follow-list');
			var ispis2 = "<ul id='footer-follow-list-links2'>";
			for (var i = 0; i < lista3.length; i++) {
				ispis2 += "<li><a href='#'>" + lista3[i] + '</a></li>';
			}
			ispis2 += '</ul>';
			divLista2.innerHTML += ispis2;
		}

		function footerInfoSlika() {
			var infoSlika = document.getElementById('footer-promo-pic1');
			var slika = document.createElement('img');
			slika.setAttribute('src', 'img/formh.png');
			infoSlika.appendChild(slika);

			var infoSlika1 = document.getElementById('footer-promo-pic2');
			var slika1 = document.createElement('img');
			slika1.setAttribute('src', 'img/footerinfoslika.png');
			infoSlika1.appendChild(slika1);
		}

		function pozivanjeForme() {
			var headerForma = document.getElementById('headerForma');
			headerForma.style.visibility === 'hidden'
				? (headerForma.style.visibility = 'initial')
				: (headerForma.style.visibility = 'hidden');
		}

		function slikeNewsBlock() {
			let elementiNizNews = document.querySelectorAll('.newsBlockPhoto');
			let brojacSlika = 1;
			for (let i = 0; i < elementiNizNews.length; i++) {
				elementiNizNews[i].style.backgroundImage = "url('img/nbc" + brojacSlika++ + ".jpg')";
			}
		}

		function slajderSlike() {
			let slajderBlok = document.querySelectorAll('.slide');
			let brojacSlika = 1;
			for (let i = 0; i < slajderBlok.length; i++) {
				slajderBlok[i].style.backgroundImage = "url('img/slajder0" + brojacSlika++ + ".jpg')";
			}
		}

		function indexAjax() {
			$.ajax({
				url: 'data/indexFeed.json',
				method: 'GET',
				type: 'json',
				success: function(feed) {
					indexFeed(feed);
				},
				error: function(xhr, status, error) {
					console.log(xhr);
					console.log(status);
					console.log(error);
				}
			});

			$.ajax({
				url: 'data/stanLeeCards.json',
				method: 'GET',
				type: 'json',
				success: function(feed) {
					stanLeeCards(feed);
				},
				error: function(xhr, status, error) {
					console.log(xhr);
					console.log(status);
					console.log(error);
				}
			});

			function indexFeed(feed) {
				let html = '';

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
				}

				document.getElementById('feedCards').innerHTML = html;
			}

			function stanLeeCards(stan) {
				let html = '';

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

				document.getElementById('sliderSets').innerHTML = html;
			}
		}

		$(document).ready(function() {
			slideShow();

			function slideShow() {
				var trenutni = $('#novislajder .aktivna');
				var sledeci = trenutni.next().length ? trenutni.next() : trenutni.parent().children(':first');
				trenutni.removeClass('aktivna').fadeOut();
				sledeci.addClass('aktivna').fadeIn();
				setTimeout(slideShow, 4000);
			}

			$(function() {
				$('.movieCards').hover(
					function() {
						$(this).find('.moviePhoto').stop(true, true).animate(
							{
								marginTop: '-=5px'
							},
							200
						);
					},
					function() {
						$(this).find('.moviePhoto').stop(true, true).animate(
							{
								marginTop: '+=5px'
							},
							200
						);
					}
				);
			});

			$(function() {
				$('.movieCards').hover(
					function() {
						$(this).find('.moviePhoto1').stop(true, true).animate(
							{
								marginTop: '-=5px'
							},
							200
						);
					},
					function() {
						$(this).find('.moviePhoto1').stop(true, true).animate(
							{
								marginTop: '+=5px'
							},
							200
						);
					}
				);
			});

			$('#newsBlockNone').hide();
			$('.showmore').click(function() {
				// sakriti/prikazati blok
				if ($('#newsBlockNone').is(':visible')) {
					$('#newsBlockNone').slideUp(500);
					$('#showMore').show();
					$('.showmore').html('<h4>Show more</h4>');
				} else {
					$('#newsBlockNone').slideDown(500);
					$('.showmore').html('<h4>Show Less</h4>');
				}
			});
		});
	} else if (url.indexOf('explore.html') != -1) {
		hederLista();
		footerListe();
		footerInfoSlika();

		var headerForma = document.getElementById('headerForma');
		headerForma.style.visibility = 'hidden';

		var pozivanje = document.getElementById('signIn');
		pozivanje.addEventListener('click', pozivanjeForme);

		localStorage.getItem('username');

		if (localStorage.getItem('username')) {
			document.getElementById('pozivanje').innerHTML = 'WELCOME ' + localStorage.getItem('username');
			document.querySelector('.search .logo2').innerHTML = "<a href='index.html'>LOGOUT</a>";
			document.querySelector('.search .logo3').innerHTML = "<a href='index.html'>LOGOUT</a>";
			pozivanje.removeEventListener('click', pozivanjeForme);
		}
		document.querySelector('.search .logo2').addEventListener('click', function() {
			localStorage.removeItem('username');
		});

		document.querySelector('.search .logo3').addEventListener('click', function() {
			localStorage.removeItem('username');
		});

		function hederLista() {
			var niz = [ 'explore.html', 'movies.html', 'tv-shows.html', 'games.html' ];
			var niz1 = [ 'explore', 'movies', 'tv shows', 'games' ];

			var divLista = document.getElementById('headerDown');
			var ispis = "<ul class='HDList'>";
			for (var i = 0; i < niz.length; i++) {
				ispis += "<li><a href='" + niz[i] + "'>" + niz1[i] + '</a></li>';
			}
			ispis += '</ul>';
			divLista.innerHTML = ispis;
		}

		function footerListe() {
			var lista = [ 'about marvel', 'marvel fans', 'careers', 'internships' ];
			var divLista = document.getElementById('footer-links-primary');
			var ispis = "<ul id='footer-links1'>";
			for (var i = 0; i < lista.length; i++) {
				ispis += "<li><a href='#'>" + lista[i] + '</a></li>';
			}
			ispis += '</ul>';
			divLista.innerHTML = ispis;
			////////////////////////////////////////////////////////////////////////
			var lista1 = [ 'scss', 'sitemap', 'author', 'documentation' ];
			var lista11 = [ 'css/style.scss', 'sitemap.xml', 'porfolio.html', 'documentation.pdf' ];
			var divLista1 = document.getElementById('footer-links-secondary');
			var ispis1 = "<ul id='footer-links2'>";
			for (var i = 0; i < lista1.length; i++) {
				ispis1 += '<li><a href=' + lista11[i] + '>' + lista1[i] + '</a></li>';
			}
			ispis1 += '</ul>';
			divLista1.innerHTML = ispis1;
			////////////////////////////////////////////////////////////////////////
			var lista2 = [
				"<span class='fa fa-facebook'></span>",
				"<span class='fa fa-instagram'></span>",
				"<span class='fa fa-twitter'></span>"
			];
			var divLista2 = document.getElementById('footer-follow-list');
			var ispis2 = "<ul id='footer-follow-list-links1'>";
			for (var i = 0; i < lista2.length; i++) {
				ispis2 += "<li><a href='#'>" + lista2[i] + '</a></li>';
			}
			ispis2 += '</ul>';
			divLista2.innerHTML = ispis2;
			////////////////////////////////////////////////////////////////////////
			var lista3 = [
				"<span class='fa fa-pinterest'></span>",
				"<span class='fa fa-youtube'></span>",
				"<span class='fa fa-snapchat'></span>"
			];
			var divLista2 = document.getElementById('footer-follow-list');
			var ispis2 = "<ul id='footer-follow-list-links2'>";
			for (var i = 0; i < lista3.length; i++) {
				ispis2 += "<li><a href='#'>" + lista3[i] + '</a></li>';
			}
			ispis2 += '</ul>';
			divLista2.innerHTML += ispis2;
		}

		function footerInfoSlika() {
			var infoSlika = document.getElementById('footer-promo-pic1');
			var slika = document.createElement('img');
			slika.setAttribute('src', 'img/formh.png');
			infoSlika.appendChild(slika);

			var infoSlika1 = document.getElementById('footer-promo-pic2');
			var slika1 = document.createElement('img');
			slika1.setAttribute('src', 'img/footerinfoslika.png');
			infoSlika1.appendChild(slika1);
		}

		function pozivanjeForme() {
			var headerForma = document.getElementById('headerForma');
			headerForma.style.visibility === 'hidden'
				? (headerForma.style.visibility = 'initial')
				: (headerForma.style.visibility = 'hidden');
		}
	} else if (url.indexOf('avengers.html') != -1) {
		hederLista();
		footerListe();
		footerInfoSlika();
		avengersAjax();

		var headerForma = document.getElementById('headerForma');
		headerForma.style.visibility = 'hidden';

		var pozivanje = document.getElementById('signIn');
		pozivanje.addEventListener('click', pozivanjeForme);

		localStorage.getItem('username');

		if (localStorage.getItem('username')) {
			document.getElementById('pozivanje').innerHTML = 'WELCOME ' + localStorage.getItem('username');
			document.querySelector('.search .logo2').innerHTML = "<a href='index.html'>LOGOUT</a>";
			document.querySelector('.search .logo3').innerHTML = "<a href='index.html'>LOGOUT</a>";
			pozivanje.removeEventListener('click', pozivanjeForme);
		}
		document.querySelector('.search .logo2').addEventListener('click', function() {
			localStorage.removeItem('username');
		});

		document.querySelector('.search .logo3').addEventListener('click', function() {
			localStorage.removeItem('username');
		});

		function hederLista() {
			var niz = [ 'explore.html', 'movies.html', 'tv-shows.html', 'games.html' ];
			var niz1 = [ 'explore', 'movies', 'tv shows', 'games' ];

			var divLista = document.getElementById('headerDown');
			var ispis = "<ul class='HDList'>";
			for (var i = 0; i < niz.length; i++) {
				ispis += "<li><a href='" + niz[i] + "'>" + niz1[i] + '</a></li>';
			}
			ispis += '</ul>';
			divLista.innerHTML = ispis;
		}

		function footerListe() {
			var lista = [ 'about marvel', 'marvel fans', 'careers', 'internships' ];
			var divLista = document.getElementById('footer-links-primary');
			var ispis = "<ul id='footer-links1'>";
			for (var i = 0; i < lista.length; i++) {
				ispis += "<li><a href='#'>" + lista[i] + '</a></li>';
			}
			ispis += '</ul>';
			divLista.innerHTML = ispis;
			////////////////////////////////////////////////////////////////////////
			var lista1 = [ 'scss', 'sitemap', 'author', 'documentation' ];
			var lista11 = [ 'css/style.scss', 'sitemap.xml', 'porfolio.html', 'documentation.pdf' ];
			var divLista1 = document.getElementById('footer-links-secondary');
			var ispis1 = "<ul id='footer-links2'>";
			for (var i = 0; i < lista1.length; i++) {
				ispis1 += '<li><a href=' + lista11[i] + '>' + lista1[i] + '</a></li>';
			}
			ispis1 += '</ul>';
			divLista1.innerHTML = ispis1;
			////////////////////////////////////////////////////////////////////////
			var lista2 = [
				"<span class='fa fa-facebook'></span>",
				"<span class='fa fa-instagram'></span>",
				"<span class='fa fa-twitter'></span>"
			];
			var divLista2 = document.getElementById('footer-follow-list');
			var ispis2 = "<ul id='footer-follow-list-links1'>";
			for (var i = 0; i < lista2.length; i++) {
				ispis2 += "<li><a href='#'>" + lista2[i] + '</a></li>';
			}
			ispis2 += '</ul>';
			divLista2.innerHTML = ispis2;
			////////////////////////////////////////////////////////////////////////
			var lista3 = [
				"<span class='fa fa-pinterest'></span>",
				"<span class='fa fa-youtube'></span>",
				"<span class='fa fa-snapchat'></span>"
			];
			var divLista2 = document.getElementById('footer-follow-list');
			var ispis2 = "<ul id='footer-follow-list-links2'>";
			for (var i = 0; i < lista3.length; i++) {
				ispis2 += "<li><a href='#'>" + lista3[i] + '</a></li>';
			}
			ispis2 += '</ul>';
			divLista2.innerHTML += ispis2;
		}

		function footerInfoSlika() {
			var infoSlika = document.getElementById('footer-promo-pic1');
			var slika = document.createElement('img');
			slika.setAttribute('src', 'img/formh.png');
			infoSlika.appendChild(slika);

			var infoSlika1 = document.getElementById('footer-promo-pic2');
			var slika1 = document.createElement('img');
			slika1.setAttribute('src', 'img/footerinfoslika.png');
			infoSlika1.appendChild(slika1);
		}

		function pozivanjeForme() {
			var headerForma = document.getElementById('headerForma');
			headerForma.style.visibility === 'hidden'
				? (headerForma.style.visibility = 'initial')
				: (headerForma.style.visibility = 'hidden');
		}

		function avengersAjax() {
			$.ajax({
				url: 'data/avengersAside.json',
				method: 'GET',
				type: 'json',
				success: function(avg) {
					avengersAside(avg);
				},
				error: function(xhr, status, error) {
					console.log(xhr);
					console.log(status);
					console.log(error);
				}
			});

			function avengersAside(avengers) {
				let html = '';

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
				}

				document.getElementById('ubaciAside').innerHTML = html;
			}
		}
	} else if (url.indexOf('fantastic-four.html') != -1) {
		hederLista();
		footerListe();
		footerInfoSlika();
		f4Ajax();

		var headerForma = document.getElementById('headerForma');
		headerForma.style.visibility = 'hidden';

		var pozivanje = document.getElementById('signIn');
		pozivanje.addEventListener('click', pozivanjeForme);

		localStorage.getItem('username');

		if (localStorage.getItem('username')) {
			document.getElementById('pozivanje').innerHTML = 'WELCOME ' + localStorage.getItem('username');
			document.querySelector('.search .logo2').innerHTML = "<a href='index.html'>LOGOUT</a>";
			document.querySelector('.search .logo3').innerHTML = "<a href='index.html'>LOGOUT</a>";
			pozivanje.removeEventListener('click', pozivanjeForme);
		}
		document.querySelector('.search .logo2').addEventListener('click', function() {
			localStorage.removeItem('username');
		});

		document.querySelector('.search .logo3').addEventListener('click', function() {
			localStorage.removeItem('username');
		});

		function hederLista() {
			var niz = [ 'explore.html', 'movies.html', 'tv-shows.html', 'games.html' ];
			var niz1 = [ 'explore', 'movies', 'tv shows', 'games' ];

			var divLista = document.getElementById('headerDown');
			var ispis = "<ul class='HDList'>";
			for (var i = 0; i < niz.length; i++) {
				ispis += "<li><a href='" + niz[i] + "'>" + niz1[i] + '</a></li>';
			}
			ispis += '</ul>';
			divLista.innerHTML = ispis;
		}

		function footerListe() {
			var lista = [ 'about marvel', 'marvel fans', 'careers', 'internships' ];
			var divLista = document.getElementById('footer-links-primary');
			var ispis = "<ul id='footer-links1'>";
			for (var i = 0; i < lista.length; i++) {
				ispis += "<li><a href='#'>" + lista[i] + '</a></li>';
			}
			ispis += '</ul>';
			divLista.innerHTML = ispis;
			////////////////////////////////////////////////////////////////////////
			var lista1 = [ 'scss', 'sitemap', 'author', 'documentation' ];
			var lista11 = [ 'css/style.scss', 'sitemap.xml', 'porfolio.html', 'documentation.pdf' ];
			var divLista1 = document.getElementById('footer-links-secondary');
			var ispis1 = "<ul id='footer-links2'>";
			for (var i = 0; i < lista1.length; i++) {
				ispis1 += '<li><a href=' + lista11[i] + '>' + lista1[i] + '</a></li>';
			}
			ispis1 += '</ul>';
			divLista1.innerHTML = ispis1;
			////////////////////////////////////////////////////////////////////////
			var lista2 = [
				"<span class='fa fa-facebook'></span>",
				"<span class='fa fa-instagram'></span>",
				"<span class='fa fa-twitter'></span>"
			];
			var divLista2 = document.getElementById('footer-follow-list');
			var ispis2 = "<ul id='footer-follow-list-links1'>";
			for (var i = 0; i < lista2.length; i++) {
				ispis2 += "<li><a href='#'>" + lista2[i] + '</a></li>';
			}
			ispis2 += '</ul>';
			divLista2.innerHTML = ispis2;
			////////////////////////////////////////////////////////////////////////
			var lista3 = [
				"<span class='fa fa-pinterest'></span>",
				"<span class='fa fa-youtube'></span>",
				"<span class='fa fa-snapchat'></span>"
			];
			var divLista2 = document.getElementById('footer-follow-list');
			var ispis2 = "<ul id='footer-follow-list-links2'>";
			for (var i = 0; i < lista3.length; i++) {
				ispis2 += "<li><a href='#'>" + lista3[i] + '</a></li>';
			}
			ispis2 += '</ul>';
			divLista2.innerHTML += ispis2;
		}

		function footerInfoSlika() {
			var infoSlika = document.getElementById('footer-promo-pic1');
			var slika = document.createElement('img');
			slika.setAttribute('src', 'img/formh.png');
			infoSlika.appendChild(slika);

			var infoSlika1 = document.getElementById('footer-promo-pic2');
			var slika1 = document.createElement('img');
			slika1.setAttribute('src', 'img/footerinfoslika.png');
			infoSlika1.appendChild(slika1);
		}

		function pozivanjeForme() {
			var headerForma = document.getElementById('headerForma');
			headerForma.style.visibility === 'hidden'
				? (headerForma.style.visibility = 'initial')
				: (headerForma.style.visibility = 'hidden');
		}

		function f4Ajax() {
			$.ajax({
				url: 'data/f4Aside.json',
				method: 'GET',
				type: 'json',
				success: function(f4) {
					f4Aside(f4);
				},
				error: function(xhr, status, error) {
					console.log(xhr);
					console.log(status);
					console.log(error);
				}
			});

			function f4Aside(f4) {
				let html = '';

				for (const f of f4) {
					html += `
                        <li class="sliderBox">
                            <div class="boxPhoto">
                            <img src="${f.img}" alt="${f.alt}">
                            </div>
                            <div class="boxInfo">
                            <h3>${f.name}</h3>
                            </div>
                        </li>
                    `;
				}

				document.getElementById('ubaciAside').innerHTML = html;
			}
		}
	} else if (url.indexOf('gotg.html') != -1) {
		hederLista();
		footerListe();
		footerInfoSlika();
		gotgAjax();

		var headerForma = document.getElementById('headerForma');
		headerForma.style.visibility = 'hidden';

		var pozivanje = document.getElementById('signIn');
		pozivanje.addEventListener('click', pozivanjeForme);

		localStorage.getItem('username');

		if (localStorage.getItem('username')) {
			document.getElementById('pozivanje').innerHTML = 'WELCOME ' + localStorage.getItem('username');
			document.querySelector('.search .logo2').innerHTML = "<a href='index.html'>LOGOUT</a>";
			document.querySelector('.search .logo3').innerHTML = "<a href='index.html'>LOGOUT</a>";
			pozivanje.removeEventListener('click', pozivanjeForme);
		}
		document.querySelector('.search .logo2').addEventListener('click', function() {
			localStorage.removeItem('username');
		});

		document.querySelector('.search .logo3').addEventListener('click', function() {
			localStorage.removeItem('username');
		});

		function hederLista() {
			var niz = [ 'explore.html', 'movies.html', 'tv-shows.html', 'games.html' ];
			var niz1 = [ 'explore', 'movies', 'tv shows', 'games' ];

			var divLista = document.getElementById('headerDown');
			var ispis = "<ul class='HDList'>";
			for (var i = 0; i < niz.length; i++) {
				ispis += "<li><a href='" + niz[i] + "'>" + niz1[i] + '</a></li>';
			}
			ispis += '</ul>';
			divLista.innerHTML = ispis;
		}

		function footerListe() {
			var lista = [ 'about marvel', 'marvel fans', 'careers', 'internships' ];
			var divLista = document.getElementById('footer-links-primary');
			var ispis = "<ul id='footer-links1'>";
			for (var i = 0; i < lista.length; i++) {
				ispis += "<li><a href='#'>" + lista[i] + '</a></li>';
			}
			ispis += '</ul>';
			divLista.innerHTML = ispis;
			////////////////////////////////////////////////////////////////////////
			var lista1 = [ 'scss', 'sitemap', 'author', 'documentation' ];
			var lista11 = [ 'css/style.scss', 'sitemap.xml', 'porfolio.html', 'documentation.pdf' ];
			var divLista1 = document.getElementById('footer-links-secondary');
			var ispis1 = "<ul id='footer-links2'>";
			for (var i = 0; i < lista1.length; i++) {
				ispis1 += '<li><a href=' + lista11[i] + '>' + lista1[i] + '</a></li>';
			}
			ispis1 += '</ul>';
			divLista1.innerHTML = ispis1;
			////////////////////////////////////////////////////////////////////////
			var lista2 = [
				"<span class='fa fa-facebook'></span>",
				"<span class='fa fa-instagram'></span>",
				"<span class='fa fa-twitter'></span>"
			];
			var divLista2 = document.getElementById('footer-follow-list');
			var ispis2 = "<ul id='footer-follow-list-links1'>";
			for (var i = 0; i < lista2.length; i++) {
				ispis2 += "<li><a href='#'>" + lista2[i] + '</a></li>';
			}
			ispis2 += '</ul>';
			divLista2.innerHTML = ispis2;
			////////////////////////////////////////////////////////////////////////
			var lista3 = [
				"<span class='fa fa-pinterest'></span>",
				"<span class='fa fa-youtube'></span>",
				"<span class='fa fa-snapchat'></span>"
			];
			var divLista2 = document.getElementById('footer-follow-list');
			var ispis2 = "<ul id='footer-follow-list-links2'>";
			for (var i = 0; i < lista3.length; i++) {
				ispis2 += "<li><a href='#'>" + lista3[i] + '</a></li>';
			}
			ispis2 += '</ul>';
			divLista2.innerHTML += ispis2;
		}

		function footerInfoSlika() {
			var infoSlika = document.getElementById('footer-promo-pic1');
			var slika = document.createElement('img');
			slika.setAttribute('src', 'img/formh.png');
			infoSlika.appendChild(slika);

			var infoSlika1 = document.getElementById('footer-promo-pic2');
			var slika1 = document.createElement('img');
			slika1.setAttribute('src', 'img/footerinfoslika.png');
			infoSlika1.appendChild(slika1);
		}

		function pozivanjeForme() {
			var headerForma = document.getElementById('headerForma');
			headerForma.style.visibility === 'hidden'
				? (headerForma.style.visibility = 'initial')
				: (headerForma.style.visibility = 'hidden');
		}

		function gotgAjax() {
			$.ajax({
				url: 'data/gotgAside.json',
				method: 'GET',
				type: 'json',
				success: function(gotg) {
					gotgAside(gotg);
				},
				error: function(xhr, status, error) {
					console.log(xhr);
					console.log(status);
					console.log(error);
				}
			});

			function gotgAside(gotg) {
				let html = '';

				for (const g of gotg) {
					html += `
                        <li class="sliderBox">
                            <div class="boxPhoto">
                            <img src="${g.img}" alt="${g.alt}">
                            </div>
                            <div class="boxInfo">
                            <h3>${g.name}</h3>
                            </div>
                        </li>
                    `;
				}
				document.getElementById('ubaciAside').innerHTML = html;
			}
		}
	} else if (url.indexOf('movies.html') != -1) {
		hederLista();
		footerListe();
		footerInfoSlika();
		slikeNewsBlock();

		var headerForma = document.getElementById('headerForma');
		headerForma.style.visibility = 'hidden';

		var pozivanje = document.getElementById('signIn');
		pozivanje.addEventListener('click', pozivanjeForme);

		localStorage.getItem('username');

		if (localStorage.getItem('username')) {
			document.getElementById('pozivanje').innerHTML = 'WELCOME ' + localStorage.getItem('username');
			document.querySelector('.search .logo2').innerHTML = "<a href='index.html'>LOGOUT</a>";
			document.querySelector('.search .logo3').innerHTML = "<a href='index.html'>LOGOUT</a>";
			pozivanje.removeEventListener('click', pozivanjeForme);
		}
		document.querySelector('.search .logo2').addEventListener('click', function() {
			localStorage.removeItem('username');
		});

		document.querySelector('.search .logo3').addEventListener('click', function() {
			localStorage.removeItem('username');
		});

		function hederLista() {
			var niz = [ 'explore.html', 'movies.html', 'tv-shows.html', 'games.html' ];
			var niz1 = [ 'explore', 'movies', 'tv shows', 'games' ];

			var divLista = document.getElementById('headerDown');
			var ispis = "<ul class='HDList'>";
			for (var i = 0; i < niz.length; i++) {
				ispis += "<li><a href='" + niz[i] + "'>" + niz1[i] + '</a></li>';
			}
			ispis += '</ul>';
			divLista.innerHTML = ispis;
		}

		function footerListe() {
			var lista = [ 'about marvel', 'marvel fans', 'careers', 'internships' ];
			var divLista = document.getElementById('footer-links-primary');
			var ispis = "<ul id='footer-links1'>";
			for (var i = 0; i < lista.length; i++) {
				ispis += "<li><a href='#'>" + lista[i] + '</a></li>';
			}
			ispis += '</ul>';
			divLista.innerHTML = ispis;
			////////////////////////////////////////////////////////////////////////
			var lista1 = [ 'scss', 'sitemap', 'author', 'documentation' ];
			var lista11 = [ 'css/style.scss', 'sitemap.xml', 'porfolio.html', 'documentation.pdf' ];
			var divLista1 = document.getElementById('footer-links-secondary');
			var ispis1 = "<ul id='footer-links2'>";
			for (var i = 0; i < lista1.length; i++) {
				ispis1 += '<li><a href=' + lista11[i] + '>' + lista1[i] + '</a></li>';
			}
			ispis1 += '</ul>';
			divLista1.innerHTML = ispis1;
			////////////////////////////////////////////////////////////////////////
			var lista2 = [
				"<span class='fa fa-facebook'></span>",
				"<span class='fa fa-instagram'></span>",
				"<span class='fa fa-twitter'></span>"
			];
			var divLista2 = document.getElementById('footer-follow-list');
			var ispis2 = "<ul id='footer-follow-list-links1'>";
			for (var i = 0; i < lista2.length; i++) {
				ispis2 += "<li><a href='#'>" + lista2[i] + '</a></li>';
			}
			ispis2 += '</ul>';
			divLista2.innerHTML = ispis2;
			////////////////////////////////////////////////////////////////////////
			var lista3 = [
				"<span class='fa fa-pinterest'></span>",
				"<span class='fa fa-youtube'></span>",
				"<span class='fa fa-snapchat'></span>"
			];
			var divLista2 = document.getElementById('footer-follow-list');
			var ispis2 = "<ul id='footer-follow-list-links2'>";
			for (var i = 0; i < lista3.length; i++) {
				ispis2 += "<li><a href='#'>" + lista3[i] + '</a></li>';
			}
			ispis2 += '</ul>';
			divLista2.innerHTML += ispis2;
		}

		function footerInfoSlika() {
			var infoSlika = document.getElementById('footer-promo-pic1');
			var slika = document.createElement('img');
			slika.setAttribute('src', 'img/formh.png');
			infoSlika.appendChild(slika);

			var infoSlika1 = document.getElementById('footer-promo-pic2');
			var slika1 = document.createElement('img');
			slika1.setAttribute('src', 'img/footerinfoslika.png');
			infoSlika1.appendChild(slika1);
		}

		function pozivanjeForme() {
			var headerForma = document.getElementById('headerForma');
			headerForma.style.visibility === 'hidden'
				? (headerForma.style.visibility = 'initial')
				: (headerForma.style.visibility = 'hidden');
		}
		var filmovi = dohvatiSve(filmovi);

		let module = Movies();

		module.getMovies();

		$('.popUp').hide();
		$.ajax({
			url: 'data/movies.json',
			method: 'GET',
			type: 'json',
			success: function(filmovi) {
				moviesGalerija(filmovi);
				// moviesGalerijaGore(filmovi);
			},
			error: function(xhr, status, error) {
				console.log(xhr);
				console.log(status);
				console.log(error);
			}
		});

		function moviesGalerija(filmovi) {
			let html = '';

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
			}

			document.getElementById('ubaci').innerHTML = html;

			$('.klik1').click(function() {
				moviesPopUp($(this).attr('data-idf'));
			});
		}
		//////////////////////////////////////////////////////////////////////////////

		document.getElementById('search').addEventListener('keyup', pretragaFilmova);
		document.getElementById('search').addEventListener('keyup', proveraSearch);

		document.getElementById('sort').addEventListener('change', sortirajFilmove);
		document.getElementById('filter').addEventListener('change', filterFilmova);

		function moviesPopUp(idf) {
			$.ajax({
				url: 'data/movies.json',
				method: 'GET',
				type: 'json',
				success: function(data) {
					var film;
					for (const d of data) {
						if (d.id == idf) {
							film = d;
							break;
						}
					}
					prikaziPop(film);
				},
				error: function(xhr, status, error) {
					console.log(xhr);
					console.log(status);
					console.log(error);
				}
			});
		}

		function prikaziPop(f) {
			let html = '';

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
              <p class="date">${f['release date']}</p>
           </div>
        </div>
        <div class="smallPopRight">
           <img src="${f.mainPhoto}" alt="slika">
        </div>
        <span class="fa fa-times klik2"></span>
     </div>
        `;

			document.getElementById('popUp').innerHTML = html;
			$('.popUp').fadeIn('slow');

			$dugme = $('.klik2');
			$dugme.click(function() {
				$('.popUp').fadeOut();
			});
		}

		function pretragaFilmova() {
			const unos = this.value;

			const filtriraniNiz = filmovi.filter(function(x) {
				if (x.title.toLowerCase().indexOf(unos.trim().toLowerCase()) != -1) {
					return x;
				}
			});
			moviesGalerija(filtriraniNiz);
		}

		function sortirajFilmove() {
			let klik = this.value;

			if (klik == 'latest') {
				filmovi.sort((a, b) => b.year - a.year);
			}
			moviesGalerija(filmovi);

			if (klik == 'oldest') {
				filmovi.sort((a, b) => a.year - b.year);
			}
			moviesGalerija(filmovi);

			if (klik == 'a-z') {
				filmovi.sort(function(a, b) {
					if (a.alt < b.alt) return -1;
					if (a.alt > b.alt) return 1;
					return 0;
				});
			}
			moviesGalerija(filmovi);

			if (klik == 'z-a') {
				filmovi.sort(function(a, b) {
					if (a.alt > b.alt) return -1;
					if (a.alt < b.alt) return 1;
					return 0;
				});
			}
			moviesGalerija(filmovi);

			if (klik == '0') {
				filmovi.sort(function(a, b) {
					if (a.id < b.id) return -1;
					if (a.id > b.id) return 1;
					return 0;
				});
			}
			moviesGalerija(filmovi);
		}

		function filterFilmova() {
			let klik = this.value;

			const filtriraniFilmovi1 = filmovi.filter(function(x) {
				if (x.phase == klik) {
					return x;
				}
			});
			moviesGalerija(filtriraniFilmovi1);

			const filtriraniFilmovi2 = filmovi.filter(function(y) {
				if (y.phase == klik) {
					return y;
				}
			});
			moviesGalerija(filtriraniFilmovi2);

			const filtriraniFilmovi3 = filmovi.filter(function(z) {
				if (z.phase == klik) {
					return z;
				}
			});
			moviesGalerija(filtriraniFilmovi3);

			const filtriraniFilmovi4 = filmovi.filter(function(p) {
				if (p.phase == klik) {
					return p;
				}
			});
			moviesGalerija(filtriraniFilmovi4);

			if ('0' == klik) {
				moviesGalerija(filmovi);
			}
		}

		/////////////// Regularni izrazi ////////////////

		function proveraSearch() {
			let search = document.getElementById('search');

			let regSearch = /^[A-z]{1,25}[':]*[A-z]*(\s)*[A-z]*(\s)*[A-z]*$/;

			if (regSearch.test(search.value)) {
				search.style.borderBottom = '2px solid #000';
			} else if (search.value == ' ' || search.value == '') {
				search.style.borderBottom = '2px solid #000';
			} else {
				search.style.borderBottom = '2px solid #ff0000';
			}
		}

		function slikeNewsBlock() {
			let elementiNizNews = document.querySelectorAll('.newsBlockPhoto');
			let brojacSlika = 1;
			for (let i = 0; i < elementiNizNews.length; i++) {
				elementiNizNews[i].style.backgroundImage = "url('img/nbc" + brojacSlika++ + ".jpg')";
			}
		}

		$(document).ready(function() {
			$(function() {
				$('.movieCards').hover(
					function() {
						$(this).find('.moviePhoto').stop(true, true).animate(
							{
								marginTop: '-=5px'
							},
							200
						);
					},
					function() {
						$(this).find('.moviePhoto').stop(true, true).animate(
							{
								marginTop: '+=5px'
							},
							200
						);
					}
				);
			});

			$(function() {
				$('.movieCards').hover(
					function() {
						$(this).find('.moviePhoto1').stop(true, true).animate(
							{
								marginTop: '-=5px'
							},
							200
						);
					},
					function() {
						$(this).find('.moviePhoto1').stop(true, true).animate(
							{
								marginTop: '+=5px'
							},
							200
						);
					}
				);
			});

			$('#newsBlockNone').hide();
			$('.showmore').click(function() {
				// sakriti/prikazati blok
				if ($('#newsBlockNone').is(':visible')) {
					$('#newsBlockNone').slideUp(500);
					$('#showMore').show();
					$('.showmore').html('<h4>Show more</h4>');
				} else {
					$('#newsBlockNone').slideDown(500);
					$('.showmore').html('<h4>Show Less</h4>');
				}
			});
		});

		function dohvatiSve(filmovi) {
			return [
				{
					id: 1,
					img: 'img/mc1.jpg',
					alt: 'spiderman',
					title: 'Spider-man far from home',
					'release date': '2019',
					popUpDescription:
						' Peter Parker returns in Spider-Man: Far From Home, the next chapter of the Spider-Man: Homecoming series! Our friendly neighborhood Super Hero decides to join his best friends Ned, MJ, and the rest of the gang on a European vacation. However, Peter’s plan to leave super heroics behind for a few weeks are quickly scrapped when he begrudgingly agrees to help Nick Fury uncover the mystery of several elemental creature attacks, creating havoc across the continent!',
					mainPhoto: 'img/mc1.jpg',
					filmovi: {
						slika1: 'img/mc5.jpg',
						slika2: 'img/mc8.jpg',
						slika3: 'img/mc11.jpg'
					},
					year: 2019,
					phase: 'phase4'
				},
				{
					id: 2,
					img: 'img/mc2.jpg',
					alt: 'avengers endgame',
					title: 'Avengers: Endgame',
					'release date': '2019',
					popUpDescription: 'AVENGERS: ENDGAME <br/><br/> Release Date: April 26, 2019',
					mainPhoto: 'img/mc2.jpg',
					filmovi: {
						slika1: 'img/mc5.jpg',
						slika2: 'img/mc13.jpg',
						slika3: 'img/mc18.jpg'
					},
					year: 2019,
					phase: 'phase4'
				},
				{
					id: 3,
					img: 'img/mc3.jpg',
					alt: 'captain marvel',
					title: 'Captain Marvel',
					'release date': '2019',
					popUpDescription:
						'In Theaters March 8th, 2019. Directed by Anna Boden and Ryan Fleck. Starring: Brie Larson (Captain Marvel), Samuel L Jackson (Nick Fury), Ben Mendelsohn (Talos), Clark Gregg (Phil Coulson), and Lashana Lynch (Maria Rambeau).',
					mainPhoto: 'img/mc3.jpg',
					filmovi: {
						slika1: 'img/mc1.jpg',
						slika2: 'img/mc2.jpg',
						slika3: 'img/mc5.jpg'
					},
					year: 2019,
					phase: 'phase4'
				},
				{
					id: 4,
					img: 'img/mc4.jpg',
					alt: 'ant-man and wasp',
					title: 'Ant-man and Wasp',
					'release date': '2018',
					popUpDescription:
						'From the Marvel Cinematic Universe comes a new chapter featuring heroes with the astonishing ability to shrink: “Ant-Man and The Wasp.” In the aftermath of “Captain America: Civil War,” Scott Lang (Paul Rudd) grapples with the consequences of his choices as both a Super Hero and a father. As he struggles to rebalance his home life with his responsibilities as Ant-Man, he’s confronted by Hope van Dyne (Evangeline Lilly) and Dr. Hank Pym (Michael Douglas) with an urgent new mission. Scott must once again put on the suit and learn to fight alongside The Wasp as the team works together to uncover secrets from their past.',
					mainPhoto: 'img/mc4.jpg',
					filmovi: {
						slika1: 'img/mc2.jpg',
						slika2: 'img/mc11.jpg',
						slika3: 'img/mc12.jpg'
					},
					year: 2018,
					phase: 'phase4'
				},
				{
					id: 5,
					img: 'img/mc5.jpg',
					alt: 'avengers infinity war',
					title: 'Avengers: Infinity War',
					'release date': '2018',
					popUpDescription:
						"An unprecedented cinematic journey ten years in the making and spanning the entire Marvel Cinematic Universe, Marvel Studios' 'Avengers: Infinity War' brings to the screen the ultimate, deadliest showdown of all time. As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
					mainPhoto: 'img/mc5.jpg',
					filmovi: {
						slika1: 'img/mc16.jpg',
						slika2: 'img/mc22.jpg',
						slika3: 'img/mc4.jpg'
					},
					year: 2018,
					phase: 'phase4'
				},
				{
					id: 6,
					img: 'img/mc6.jpg',
					alt: 'black panther',
					title: 'Black Panther',
					'release date': '2018',
					popUpDescription:
						'Marvel Studios’ “Black Panther” follows T’Challa who, after the death of his father, the King of Wakanda, returns home to the isolated, technologically advanced African nation to succeed to the throne and take his rightful place as king. But when a powerful old enemy reappears, T’Challa’s mettle as king—and Black Panther—is tested when he is drawn into a formidable conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his allies and release the full power of Black Panther to defeat his foes and secure the safety of his people and their way of life.',
					mainPhoto: 'img/mc6.jpg',
					filmovi: {
						slika1: 'img/mc2.jpg',
						slika2: 'img/mc5.jpg',
						slika3: 'img/mc11.jpg'
					},
					year: 2018,
					phase: 'phase4'
				},
				{
					id: 7,
					img: 'img/mc7.jpg',
					alt: 'ragnarok',
					title: 'Thor: Ragnarok',
					'release date': '2017',
					popUpDescription:
						'Thor is imprisoned on the other side of the universe without his mighty hammer and finds himself in a race against time to get back to Asgard to stop Ragnarok—the destruction of his homeworld and the end of Asgardian civilization—at the hands of an all-powerful new threat, the ruthless Hela. But first he must survive a deadly gladiatorial contest that pits him against his former ally and fellow Avenger—the Incredible Hulk!',
					mainPhoto: 'img/mc7.jpg',
					filmovi: {
						slika1: 'img/mc13.jpg',
						slika2: 'img/mc16.jpg',
						slika3: 'img/mc20.jpg'
					},
					year: 2017,
					phase: 'phase4'
				},
				{
					id: 8,
					img: 'img/mc8.jpg',
					alt: 'spiderman',
					title: 'Spider-Man: Homecoming',
					'release date': '2017',
					popUpDescription:
						'A young Peter Parker/Spider-Man (Tom Holland), who made his sensational debut in Captain America: Civil War, begins to navigate his newfound identity as the web-slinging super hero in Spider-Man: Homecoming. Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May (Marisa Tomei), under the watchful eye of his new mentor Tony Stark (Robert Downey, Jr.). Peter tries to fall back into his normal daily routine – distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man – but when the Vulture (Michael Keaton) emerges as a new villain, everything that Peter holds most important will be threatened.',
					mainPhoto: 'img/mc8.jpg',
					filmovi: {
						slika1: 'img/mc1.jpg',
						slika2: 'img/mc5.jpg',
						slika3: 'img/mc11.jpg'
					},
					year: 2017,
					phase: 'phase4'
				},
				{
					id: 9,
					img: 'img/mc9.jpg',
					alt: 'gotg',
					title: 'Guardians of the Galaxy Vol. 2',
					'release date': '2017',
					popUpDescription:
						'Set to the backdrop of ‘Awesome Mixtape #2,’ Marvel’s Guardians of the Galaxy Vol. 2 continues the team’s adventures as they traverse the outer reaches of the cosmos. The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill’s true parentage. Old foes become new allies and fan-favorite characters from the classic comics will come to our heroes’ aid as the Marvel cinematic universe continues to expand.',
					mainPhoto: 'img/mc9.jpg',
					filmovi: {
						slika1: 'img/mc2.jpg',
						slika2: 'img/mc5.jpg',
						slika3: 'img/mc14.jpg'
					},
					year: 2017,
					phase: 'phase3'
				},
				{
					id: 10,
					img: 'img/mc10.jpg',
					alt: 'doctor strange',
					title: 'Doctor Strange',
					'release date': '2016',
					popUpDescription:
						'From Marvel Studios comes “Doctor Strange,” the story of world-famous neurosurgeon Dr. Stephen Strange whose life changes forever after a horrific car accident robs him of the use of his hands. When traditional medicine fails him, he is forced to look for healing, and hope, in an unlikely place—a mysterious enclave known as Kamar-Taj. He quickly learns that this is not just a center for healing but also the front line of a battle against unseen dark forces bent on destroying our reality. Before long Strange—armed with newly acquired magical powers—is forced to choose whether to return to his life of fortune and status or leave it all behind to defend the world as the most powerful sorcerer in existence.',
					mainPhoto: 'img/mc10.jpg',
					filmovi: {
						slika1: 'img/mc2.jpg',
						slika2: 'img/mc5.jpg',
						slika3: 'img/mc4.jpg'
					},
					year: 2016,
					phase: 'phase3'
				},
				{
					id: 11,
					img: 'img/mc11.jpg',
					alt: 'captain america civil war',
					title: 'Captain America: Civil War',
					'release date': '2016',
					popUpDescription:
						"Marvel’s 'Captain America: Civil War' finds Steve Rogers leading the newly formed team of Avengers in their continued efforts to safeguard humanity. But after another incident involving the Avengers results in collateral damage, political pressure mounts to install a system of accountability, headed by a governing body to oversee and direct the team. The new status quo fractures the Avengers, resulting in two camps—one led by Steve Rogers and his desire for the Avengers to remain free to defend humanity without government interference, and the other following Tony Stark’s surprising decision to support government oversight and accountability.",
					mainPhoto: 'img/mc11.jpg',
					filmovi: {
						slika1: 'img/mc13.jpg',
						slika2: 'img/mc15.jpg',
						slika3: 'img/mc18.jpg'
					},
					year: 2016,
					phase: 'phase3'
				},
				{
					id: 12,
					img: 'img/mc12.jpg',
					alt: 'antman',
					title: 'Ant-man',
					'release date': '2015',
					popUpDescription:
						"The next evolution of the Marvel Cinematic Universe brings a founding member of The Avengers to the big screen for the first time with Marvel Studios 'Ant-Man.' Armed with the astonishing ability to shrink in scale but increase in strength, master thief Scott Lang must embrace his inner-hero and help his mentor, Doctor Hank Pym, protect the secret behind his spectacular Ant-Man suit from a new generation of towering threats. Against seemingly insurmountable obstacles, Pym and Lang must plan and pull off a heist that will save the world.",
					mainPhoto: 'img/mc12.jpg',
					filmovi: {
						slika1: 'img/mc4.jpg',
						slika2: 'img/mc5.jpg',
						slika3: 'img/mc11.jpg'
					},
					year: 2015,
					phase: 'phase3'
				},
				{
					id: 13,
					img: 'img/mc13.jpg',
					alt: 'avengers age of ultron',
					title: 'Avengers: Age of Ultron',
					'release date': '2015',
					popUpDescription:
						'Marvel Studios presents “Avengers: Age of Ultron,” the epic follow-up to the biggest Super Hero movie of all time. When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth’s Mightiest Heroes, including Iron Man, Captain America, Thor, The Incredible Hulk, Black Widow and Hawkeye, are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to the Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure.',
					mainPhoto: 'img/mc13.jpg',
					filmovi: {
						slika1: 'img/mc15.jpg',
						slika2: 'img/mc17.jpg',
						slika3: 'img/mc18.jpg'
					},
					year: 2015,
					phase: 'phase2'
				},
				{
					id: 14,
					img: 'img/mc14.jpg',
					alt: 'guardians of the galaxy',
					title: 'Guardians of the Galaxy',
					'release date': '2014',
					popUpDescription:
						"An action-packed, epic space adventure, Marvel's 'Guardians of the Galaxy,' expands the Marvel Cinematic Universe into the cosmos, where brash adventurer Peter Quill finds himself the object of an unrelenting bounty hunt after stealing a mysterious orb coveted by Ronan, a powerful villain with ambitions that threaten the entire universe. To evade the ever-persistent Ronan, Quill is forced into an uneasy truce with a quartet of disparate misfits--Rocket, a gun-toting raccoon; Groot, a tree-like humanoid; the deadly and enigmatic Gamora; and the revenge-driven Drax the Destroyer. But when Quill discovers the true power of the orb and the menace it poses to the cosmos, he must do his best to rally his ragtag rivals for a last, desperate stand--with the galaxy's fate in the balance.",
					mainPhoto: 'img/mc14.jpg',
					filmovi: {
						slika1: 'img/mc2.jpg',
						slika2: 'img/mc5.jpg',
						slika3: 'img/mc9.jpg'
					},
					year: 2014,
					phase: 'phase2'
				},
				{
					id: 15,
					img: 'img/mc15.jpg',
					alt: 'captain america the winter soldier',
					title: 'Captain America: The Winter Soldier',
					'release date': '2014',
					popUpDescription:
						"After the cataclysmic events in New York with The Avengers, Marvel's 'Captain America: The Winter Soldier,' finds Steve Rogers, aka Captain America, living quietly in Washington, D.C. and trying to adjust to the modern world. But when a S.H.I.E.L.D. colleague comes under attack, Steve becomes embroiled in a web of intrigue that threatens to put the world at risk. Joining forces with the Black Widow, Captain America struggles to expose the ever-widening conspiracy while fighting off professional assassins sent to silence him at every turn. When the full scope of the villainous plot is revealed, Captain America and the Black Widow enlist the help of a new ally, the Falcon. However, they soon find themselves up against an unexpected and formidable enemy--the Winter Soldier.",
					mainPhoto: 'img/mc15.jpg',
					filmovi: {
						slika1: 'img/mc13.jpg',
						slika2: 'img/mc18.jpg',
						slika3: 'img/mc19.jpg'
					},
					year: 2014,
					phase: 'phase2'
				},
				{
					id: 16,
					img: 'img/mc16.jpg',
					alt: 'thor the dark world',
					title: 'Thor: The Dark World',
					'release date': '2013',
					popUpDescription:
						"In the aftermath of Marvel's 'Thor' and 'Marvel's The Avengers,' Thor fights to restore order across the cosmos...but an ancient race led by the vengeful Malekith returns to plunge the universe back into darkness. Faced with an enemy that even Odin and Asgard cannot withstand, Thor must embark on his most perilous and personal journey yet, one that will reunite him with Jane Foster and force him to sacrifice everything to save us all.",
					mainPhoto: 'img/mc16.jpg',
					filmovi: {
						slika1: 'img/mc7.jpg',
						slika2: 'img/mc13.jpg',
						slika3: 'img/mc20.jpg'
					},
					year: 2013,
					phase: 'phase2'
				},
				{
					id: 17,
					img: 'img/mc17.jpg',
					alt: 'iron man 3',
					title: 'Iron Man 3',
					'release date': '2013',
					popUpDescription:
						"Marvel's 'Iron Man 3' pits brash-but-brilliant industrialist Tony Stark/Iron Man against an enemy whose reach knows no bounds. When Stark finds his personal world destroyed at his enemy's hands, he embarks on a harrowing quest to find those responsible. This journey, at every turn, will test his mettle. With his back against the wall, Stark is left to survive by his own devices, relying on his ingenuity and instincts to protect those closest to him. As he fights his way back, Stark discovers the answer to the question that has secretly haunted him: does the man make the suit or does the suit make the man",
					mainPhoto: 'img/mc17.jpg',
					filmovi: {
						slika1: 'img/mc18.jpg',
						slika2: 'img/mc21.jpg',
						slika3: 'img/mc23.jpg'
					},
					year: 2013,
					phase: 'phase2'
				},
				{
					id: 18,
					img: 'img/mc18.jpg',
					alt: 'the avengers',
					title: 'The Avengers',
					'release date': '2012',
					popUpDescription:
						"Marvel Studios presents in association with Paramount Pictures 'Marvel's The Avengers'--the super hero team up of a lifetime, featuring iconic Marvel super heroes Iron Man, the Incredible Hulk, Thor, Captain America, Hawkeye and Black Widow. When an unexpected enemy emerges that threatens global safety and security, Nick Fury, Director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins.",
					mainPhoto: 'img/mc18.jpg',
					filmovi: {
						slika1: 'img/mc19.jpg',
						slika2: 'img/mc20.jpg',
						slika3: 'img/mc21.jpg'
					},
					year: 2012,
					phase: 'phase1'
				},
				{
					id: 19,
					img: 'img/mc19.jpg',
					alt: 'captain america the first avenger',
					title: 'Captain America: The First Avenger',
					'release date': '2011',
					popUpDescription:
						"Marvel's 'Captain America: The First Avenger' focuses on the early days of the Marvel Universe when Steve Rogers volunteers to participate in an experimental program that turns him into the Super Soldier known as Captain America.",
					mainPhoto: 'img/mc19.jpg',
					filmovi: {
						slika1: 'img/mc18.jpg',
						slika2: 'img/mc15.jpg',
						slika3: 'img/mc13.jpg'
					},
					year: 2011,
					phase: 'phase1'
				},
				{
					id: 20,
					img: 'img/mc20.jpg',
					alt: 'thor',
					title: 'Thor',
					'release date': '2011',
					popUpDescription:
						"As the son of Odin, king of the Norse gods, Thor will soon inherit the throne of Asgard from his aging father. However, on the day that he is to be crowned, Thor reacts with brutality when the gods' enemies, the Frost Giants, enter the palace in violation of their treaty. As punishment, Odin banishes Thor to Earth. While Loki, Thor's brother, plots mischief in Asgard, Thor, now stripped of his powers, faces his greatest threat.",
					mainPhoto: 'img/mc20.jpg',
					filmovi: {
						slika1: 'img/mc18.jpg',
						slika2: 'img/mc16.jpg',
						slika3: 'img/mc13.jpg'
					},
					year: 2011,
					phase: 'phase1'
				},
				{
					id: 21,
					img: 'img/mc21.jpg',
					alt: 'iron man 2',
					title: 'Iron Man 2',
					'release date': '2010',
					popUpDescription:
						"With the world now aware that he is Iron Man, billionaire inventor Tony Stark faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts and 'Rhodey' Rhodes by his side, Tony must forge new alliances and confront a powerful new enemy.",
					mainPhoto: 'img/mc21.jpg',
					filmovi: {
						slika1: 'img/mc23.jpg',
						slika2: 'img/mc18.jpg',
						slika3: 'img/mc17.jpg'
					},
					year: 2010,
					phase: 'phase1'
				},
				{
					id: 22,
					img: 'img/mc22.jpg',
					alt: 'incredible hulk',
					title: 'The Incredible Hulk',
					'release date': '2008',
					popUpDescription:
						"In this new beginning, scientist Bruce Banner desperately hunts for a cure to the gamma radiation that poisoned his cells and unleashes the unbridled force of rage within him: The Hulk. Living in the shadows--cut off from a life he knew and the woman he loves, Betty Ross--Banner struggles to avoid the obsessive pursuit of his nemesis, General Thunderbolt Ross and the military machinery that seeks to capture him and brutally exploit his power. As all three grapple with the secrets that led to the Hulk's creation, they are confronted with a monstrous new adversary known as the Abomination, whose destructive strength exceeds even the Hulk's own. One scientist must make an agonizing final choice: accept a peaceful life as Bruce Banner or find heroism in the creature he holds inside--The Incredible Hulk.",
					mainPhoto: 'img/mc22.jpg',
					filmovi: {
						slika1: 'img/mc23.jpg',
						slika2: 'img/mc18.jpg',
						slika3: 'img/mc13.jpg'
					},
					year: 2008,
					phase: 'phase1'
				},
				{
					id: 23,
					img: 'img/mc23.jpg',
					alt: 'iron man',
					title: 'Iron Man ',
					'release date': '2008',
					popUpDescription:
						"2008's Iron Man tells the story of Tony Stark, a billionaire industrialist and genius inventor who is kidnapped and forced to build a devastating weapon. Instead, using his intelligence and ingenuity, Tony builds a high-tech suit of armor and escapes captivity. When he uncovers a nefarious plot with global implications, he dons his powerful armor and vows to protect the world as Iron Man.",
					mainPhoto: 'img/mc23.jpg',
					filmovi: {
						slika1: 'img/mc21.jpg',
						slika2: 'img/mc18.jpg',
						slika3: 'img/mc17.jpg'
					},
					year: 2008,
					phase: 'phase1'
				}
			];
		}

		function Movies() {
			let movies = [];

			function getMovies() {
				$.ajax({
					url: 'data/movies.json',
					success: function(data) {
						movies = data;
						popuniMoviesGore();
					}
				});
			}

			function popuniMoviesGore() {
				let html = '';
				let niz = movies.slice(0, 6);

				for (let movie of niz) {
					html += showMoviesGore(movie);
				}

				document.getElementById('ubaciGore').innerHTML = html;
			}

			function showMoviesGore(movie) {
				return `<li class="movieCards klik1" data-idf="${movie.id}">
                             <img class="moviePhoto1" src="${movie.img}" alt="${movie.alt}">
                             <div class="movieInfo">
                                 <h3>${movie.title}</h3>
                                 <h4>${movie['release date']}</h4>
                             </div>
                         </li>`;
			}

			function pretragaGames(unos) {
				games = games.filter(function(x) {
					if (x.title.toLowerCase().indexOf(unos.toLowerCase()) != -1) {
						return x;
					}
				});
				popuniGamesDole(games); // zasto ovo nece da se refresuje
				// console.log(games); // niz se posle filtera ne vrati na pocetno stanje
			}

			return {
				getMovies,
				pretragaGames
			};
		}
	} else if (url.indexOf('tv-shows.html') != -1) {
		hederLista();
		footerListe();
		footerInfoSlika();
		slikeNewsBlock();

		var serije = dohvatiSve(serije);

		let module = TvShows();
		module.getTvShows();

		var headerForma = document.getElementById('headerForma');
		headerForma.style.visibility = 'hidden';

		var pozivanje = document.getElementById('signIn');
		pozivanje.addEventListener('click', pozivanjeForme);

		localStorage.getItem('username');

		document.getElementById('search').addEventListener('keyup', pretragaSerija);
		document.getElementById('search').addEventListener('keyup', proveraSearch);
		document.getElementById('sort').addEventListener('change', sortirajSerije);
		document.getElementById('filter').addEventListener('change', filtrirajSerije);

		if (localStorage.getItem('username')) {
			document.getElementById('pozivanje').innerHTML = 'WELCOME ' + localStorage.getItem('username');
			document.querySelector('.search .logo2').innerHTML = "<a href='index.html'>LOGOUT</a>";
			document.querySelector('.search .logo3').innerHTML = "<a href='index.html'>LOGOUT</a>";
			pozivanje.removeEventListener('click', pozivanjeForme);
		}
		document.querySelector('.search .logo2').addEventListener('click', function() {
			localStorage.removeItem('username');
		});

		document.querySelector('.search .logo3').addEventListener('click', function() {
			localStorage.removeItem('username');
		});

		function hederLista() {
			var niz = [ 'explore.html', 'movies.html', 'tv-shows.html', 'games.html' ];
			var niz1 = [ 'explore', 'movies', 'tv shows', 'games' ];

			var divLista = document.getElementById('headerDown');
			var ispis = "<ul class='HDList'>";
			for (var i = 0; i < niz.length; i++) {
				ispis += "<li><a href='" + niz[i] + "'>" + niz1[i] + '</a></li>';
			}
			ispis += '</ul>';
			divLista.innerHTML = ispis;
		}

		function footerListe() {
			var lista = [ 'about marvel', 'marvel fans', 'careers', 'internships' ];
			var divLista = document.getElementById('footer-links-primary');
			var ispis = "<ul id='footer-links1'>";
			for (var i = 0; i < lista.length; i++) {
				ispis += "<li><a href='#'>" + lista[i] + '</a></li>';
			}
			ispis += '</ul>';
			divLista.innerHTML = ispis;
			////////////////////////////////////////////////////////////////////////
			var lista1 = [ 'scss', 'sitemap', 'author', 'documentation' ];
			var lista11 = [ 'css/style.scss', 'sitemap.xml', 'porfolio.html', 'documentation.pdf' ];
			var divLista1 = document.getElementById('footer-links-secondary');
			var ispis1 = "<ul id='footer-links2'>";
			for (var i = 0; i < lista1.length; i++) {
				ispis1 += '<li><a href=' + lista11[i] + '>' + lista1[i] + '</a></li>';
			}
			ispis1 += '</ul>';
			divLista1.innerHTML = ispis1;
			////////////////////////////////////////////////////////////////////////
			var lista2 = [
				"<span class='fa fa-facebook'></span>",
				"<span class='fa fa-instagram'></span>",
				"<span class='fa fa-twitter'></span>"
			];
			var divLista2 = document.getElementById('footer-follow-list');
			var ispis2 = "<ul id='footer-follow-list-links1'>";
			for (var i = 0; i < lista2.length; i++) {
				ispis2 += "<li><a href='#'>" + lista2[i] + '</a></li>';
			}
			ispis2 += '</ul>';
			divLista2.innerHTML = ispis2;
			////////////////////////////////////////////////////////////////////////
			var lista3 = [
				"<span class='fa fa-pinterest'></span>",
				"<span class='fa fa-youtube'></span>",
				"<span class='fa fa-snapchat'></span>"
			];
			var divLista2 = document.getElementById('footer-follow-list');
			var ispis2 = "<ul id='footer-follow-list-links2'>";
			for (var i = 0; i < lista3.length; i++) {
				ispis2 += "<li><a href='#'>" + lista3[i] + '</a></li>';
			}
			ispis2 += '</ul>';
			divLista2.innerHTML += ispis2;
		}

		function footerInfoSlika() {
			var infoSlika = document.getElementById('footer-promo-pic1');
			var slika = document.createElement('img');
			slika.setAttribute('src', 'img/formh.png');
			infoSlika.appendChild(slika);

			var infoSlika1 = document.getElementById('footer-promo-pic2');
			var slika1 = document.createElement('img');
			slika1.setAttribute('src', 'img/footerinfoslika.png');
			infoSlika1.appendChild(slika1);
		}

		function pozivanjeForme() {
			var headerForma = document.getElementById('headerForma');
			headerForma.style.visibility === 'hidden'
				? (headerForma.style.visibility = 'initial')
				: (headerForma.style.visibility = 'hidden');
		}

		function slikeNewsBlock() {
			let elementiNizNews = document.querySelectorAll('.newsBlockPhoto');
			let brojacSlika = 1;
			for (let i = 0; i < elementiNizNews.length; i++) {
				elementiNizNews[i].style.backgroundImage = "url('img/nbc" + brojacSlika++ + ".jpg')";
			}
		}

		function dohvatiSve(serije) {
			return [
				{
					id: 17,
					img: 'img/s17.jpg',
					alt: 'agent carter',
					title: "Marvel's Agent Carter",
					'release date': '2016',
					popUpDescription:
						"Dedicated to the fight against new Atomic Age threats in the wake of World War II, Peggy must now journey from New York City to Los Angeles for her most dangerous assignment yet. But even as she discovers new friends, a new home – perhaps even a new love – she's about to find out that the bright lights of the post-war Hollywood mask a more sinister threat to everyone she is sworn to protect.",
					mainPhoto: 'img/s17.jpg',
					filmovi: {
						slika1: 'img/mc5.jpg',
						slika2: 'img/mc8.jpg',
						slika3: 'img/mc11.jpg'
					},
					year: 2016,
					phase: 'phase3'
				},
				{
					id: 1,
					img: 'img/s21.jpg',
					alt: 'agents of shield',
					title: "Marvel's Agents of S.H.I.E.L.D.",
					'release date': '2019',
					popUpDescription:
						'AGENTS OF S.H.I.E.L.D. <br/><br/>“Marvel’s Agents of S.H.I.E.L.D.” stars Clark Gregg, Ming-Na Wen, Chloe Bennet, Iain De Caestecker, Elizabeth Henstridge, Henry Simmons, Natalia Cordova-Buckley and Jeff Ward.',
					mainPhoto: 'img/s21.jpg',
					filmovi: {
						slika1: 'img/mc5.jpg',
						slika2: 'img/mc8.jpg',
						slika3: 'img/mc11.jpg'
					},
					year: 2019,
					phase: 'phase3'
				},
				{
					id: 2,
					img: 'img/s20.jpg',
					alt: 'avengers',
					title: "Marvel's Avengers",
					'release date': '2018',
					popUpDescription:
						'The Black Panther must decide his loyalties. Is he an Avenger first or King of Wakanda? As the mysterious Shadow Council rises to challenge Wakanda, T’Challa teams up with his sister Shuri to go on missions that no other Avenger can. It’s a globe-trotting journey of espionage and mystery as old foes resurface and new friends are made. In the end, Black Panther must balance defending his home and stopping threats before they start. Is he a sword or shield? Only he can decide.',
					mainPhoto: 'img/s20.jpg',
					filmovi: {
						slika1: 'img/mc5.jpg',
						slika2: 'img/mc8.jpg',
						slika3: 'img/mc11.jpg'
					},
					year: 2018,
					phase: 'phase3'
				},
				{
					id: 3,
					img: 'img/s5.jpg',
					alt: 'cloak and dagger',
					title: "Marvel's Cloak and Dagger",
					'release date': '2019',
					popUpDescription:
						'Marvel’s Cloak & Dagger is the story of Tandy Bowen (Olivia Holt) and Tyrone Johnson (Aubrey Joseph) – two teenagers from very different backgrounds, who find themselves burdened and awakened to newly acquired superpowers which are mysteriously linked to one another. The only constant in their lives is danger and each other.',
					mainPhoto: 'img/s5.jpg',
					filmovi: {
						slika1: 'img/mc5.jpg',
						slika2: 'img/mc8.jpg',
						slika3: 'img/mc11.jpg'
					},
					year: 2019,
					phase: 'phase3'
				},
				{
					id: 4,
					img: 'img/s1.jpg',
					alt: 'daredevil',
					title: "Marvel's Daredevil",
					'release date': '2018',
					popUpDescription:
						'Missing for months, Matt Murdock reemerges a broken man, putting into question his future as both vigilante Daredevil and lawyer Matthew Murdock. But when his archenemy Wilson Fisk is released from prison, Matt must choose between hiding from the world, or embracing his destiny as a hero.',
					mainPhoto: 'img/s1.jpg',
					filmovi: {
						slika1: 'img/mc5.jpg',
						slika2: 'img/mc8.jpg',
						slika3: 'img/mc11.jpg'
					},
					year: 2018,
					phase: 'phase3'
				},
				{
					id: 5,
					img: 'img/s19.jpg',
					alt: 'the defenders',
					title: "Marvel's The Defenders",
					'release date': '2017',
					popUpDescription:
						'Marvel’s The Defenders follows Daredevil AKA Matt Murdock (Charlie Cox), Jessica Jones (Krysten Ritter), Luke Cage (Mike Colter) and Iron Fist AKA Danny Rand (Finn Jones), a quartet of singular heroes with one common goal – to save New York City. This is the story of four solitary figures, burdened with their own personal challenges, who reluctantly realize they just might be stronger when teamed together.',
					mainPhoto: 'img/s19.jpg',
					filmovi: {
						slika1: 'img/mc5.jpg',
						slika2: 'img/mc8.jpg',
						slika3: 'img/mc11.jpg'
					},
					year: 2017,
					phase: 'phase3'
				},
				{
					id: 6,
					img: 'img/s7.jpg',
					alt: 'the gifted',
					title: 'The gifted',
					'release date': '2018',
					popUpDescription:
						"Will you fight for what's right? Stand with the Mutant Underground's Lauren Strucker, Reed Strucker, Caitlin Strucker, Thunderbird, Blink, and Eclipse. Or are you tired of mutants living in the shadows? The Inner Circle's Polaris, Andy Strucker, Esme Frost, and Reeva Payge understands your plight. Season 2 of The Gifted airs Tuesday nights on FOX.",
					mainPhoto: 'img/s7.jpg',
					filmovi: {
						slika1: 'img/mc5.jpg',
						slika2: 'img/mc8.jpg',
						slika3: 'img/mc11.jpg'
					},
					year: 2018,
					phase: 'phase2'
				},
				{
					id: 7,
					img: 'img/s8.jpg',
					alt: 'guardians of the galaxy',
					title: "Marvel's Guardians of the Galaxy",
					'release date': '2018',
					popUpDescription:
						'Breakout! The Guardians of the Galaxy begin their next adventure as they encounter new friends and old foes alike. They gain fame and fortune after arresting Thanos, but are quickly back on their heels after being framed by the Collector. They’ll travel to new universes, stage a massive sting operation inside the Nova Corps, an expose a Secret Invasion years in the making. A little bad and a little good – all in a day’s work.',
					mainPhoto: 'img/s8.jpg',
					filmovi: {
						slika1: 'img/mc5.jpg',
						slika2: 'img/mc8.jpg',
						slika3: 'img/mc11.jpg'
					},
					year: 2018,
					phase: 'phase2'
				},
				{
					id: 8,
					img: 'img/s9.jpg',
					alt: 'inhumans',
					title: "Marvel's Inhumans",
					'release date': '2017',
					popUpDescription:
						'Marvel’s Inhumans explores the epic adventure of the royal family including Black Bolt, the enigmatic, commanding King of the Inhumans, with a voice so powerful that the slightest whisper can destroy a city. After the Royal Family is splintered by a military coup, they barely escape to Hawaii and are greeted with surprising interactions with the lush world around them. Now they must find a way to reunite with each other and return to their home before their way of life is destroyed forever.',
					mainPhoto: 'img/s9.jpg',
					filmovi: {
						slika1: 'img/mc5.jpg',
						slika2: 'img/mc8.jpg',
						slika3: 'img/mc11.jpg'
					},
					year: 2017,
					phase: 'phase2'
				},
				{
					id: 9,
					img: 'img/s10.jpg',
					alt: 'iron fist',
					title: "Marvel's Iron Fist",
					'release date': '2018',
					popUpDescription:
						'Danny Rand and Colleen Wing are trying to keep the peace among the many warring gangs. With the help of Misty Knight, they discover that the crime ring in the city goes far deeper than they had ever anticipated and hanging up their swords is no longer an option. Davos returns to NYC after finding his home of K’un-Lun gone. Blaming Danny for its tragic fate, Davos swears to avenge their lost city and reignites a sibling rivalry over the duties linked with wielding the legendary Iron Fist.',
					mainPhoto: 'img/s10.jpg',
					filmovi: {
						slika1: 'img/mc5.jpg',
						slika2: 'img/mc8.jpg',
						slika3: 'img/mc11.jpg'
					},
					year: 2018,
					phase: 'phase2'
				},
				{
					id: 10,
					img: 'img/s11.jpg',
					alt: 'jessica jones',
					title: "Marvel's Jessica Jones",
					'release date': '2018',
					popUpDescription:
						'After a tragic childhood accident leaves Jessica Jones with incredible strength, she attempts to rebuild her life in New York City as a private investigator, where she is often drawn into cases involving people with extraordinary abilities.',
					mainPhoto: 'img/s11.jpg',
					filmovi: {
						slika1: 'img/mc5.jpg',
						slika2: 'img/mc8.jpg',
						slika3: 'img/mc11.jpg'
					},
					year: 2018,
					phase: 'phase2'
				},
				{
					id: 11,
					img: 'img/s18.jpg',
					alt: 'Legion',
					title: 'Legion',
					'release date': '2019',
					popUpDescription:
						'Who else but the son of Professor Charles Xavier could possess multiple personalities, spontaneously mutate, or reconstruct reality on a psychic whim? Explore the cerebral conundrum of David Haller, the dangerously unstable mutant known as Legion.',
					mainPhoto: 'img/s18.jpg',
					filmovi: {
						slika1: 'img/mc5.jpg',
						slika2: 'img/mc8.jpg',
						slika3: 'img/mc11.jpg'
					},
					year: 2019,
					phase: 'phase2'
				},
				{
					id: 12,
					img: 'img/s12.jpg',
					alt: 'luke cage',
					title: "Marvel's Luke Cage",
					'release date': '2018',
					popUpDescription:
						'After a sabotaged experiment leaves him with super strength and unbreakable skin, Luke Cage (Mike Colter) became a fugitive trying to rebuild his life in modern day Harlem, New York City. Now Cage is a free man and reluctant hero struggling to keep Harlem safe in a town where everyone knows his name.',
					mainPhoto: 'img/s12.jpg',
					filmovi: {
						slika1: 'img/mc5.jpg',
						slika2: 'img/mc8.jpg',
						slika3: 'img/mc11.jpg'
					},
					year: 2018,
					phase: 'phase1'
				},
				{
					id: 13,
					img: 'img/s13.jpg',
					alt: 'rising',
					title: 'Marvel Rising',
					'release date': '2018',
					popUpDescription:
						'Marvel Rising: Secret Warriors is a long-anticipated event, bringing together Marvel’s newest and beloved characters that have garnered major fan excitement over the last few years. Powered teens Ms. Marvel, Squirrel Girl, Quake, Patriot, America Chavez, and Inferno join forces as an unlikely, but formidable crew of aspiring heroes. When a threat no one could have expected bears down on the Marvel Universe, this ragtag, untrained band of teens have no choice but to rise together.',
					mainPhoto: 'img/s13.jpg',
					filmovi: {
						slika1: 'img/mc5.jpg',
						slika2: 'img/mc8.jpg',
						slika3: 'img/mc11.jpg'
					},
					year: 2018,
					phase: 'phase1'
				},
				{
					id: 14,
					img: 'img/s14.jpg',
					alt: 'the punisher',
					title: "Marvel's The Punisher",
					'release date': '2019',
					popUpDescription:
						'Former marine-turned-vigilante Frank Castle (Jon Bernthal) has been living a quiet life on the road until he suddenly becomes embroiled in the attempted murder of a young girl (Giorgia Whigham). As he is drawn into the mystery surrounding her and those in pursuit of the information she holds, Castle attracts a new target on his back as new and old enemies force him to confront whether he should accept his destiny and embrace a life as “The Punisher.”',
					mainPhoto: 'img/s14.jpg',
					filmovi: {
						slika1: 'img/mc5.jpg',
						slika2: 'img/mc8.jpg',
						slika3: 'img/mc11.jpg'
					},
					year: 2019,
					phase: 'phase1'
				},
				{
					id: 15,
					img: 'img/s15.jpg',
					alt: 'runaways',
					title: "Marvel's Runaways",
					'release date': '2018',
					popUpDescription:
						"Runaways have left their homes (and evil parents) behind and now have to learn to live on their own. Our kids begin to realize, for better or worse, they're stuck with each other. And it's up to them to take down Pride once and for all.",
					mainPhoto: 'img/s15.jpg',
					filmovi: {
						slika1: 'img/mc5.jpg',
						slika2: 'img/mc8.jpg',
						slika3: 'img/mc11.jpg'
					},
					year: 2018,
					phase: 'phase1'
				},
				{
					id: 16,
					img: 'img/s16.jpg',
					alt: 'spider-man',
					title: "Marvel's Spider-man",
					'release date': '2018',
					popUpDescription:
						"It’s now Peter Parker’s “sophomore year” and he’s no longer an inexperienced new superhero nor a brand new student at the intimidating Horizon High. But his foes are also no longer inexperienced and his ever-growing Rogue’s Gallery is now again focused on taking Spider-Man down. Picking up where Season One left off, the stakes are much higher in both Peter's personal life and super hero life. Peter must balance working at the Daily Bugle to afford tuition at Horizon High with surviving Doc Ock.",
					mainPhoto: 'img/s16.jpg',
					filmovi: {
						slika1: 'img/mc5.jpg',
						slika2: 'img/mc8.jpg',
						slika3: 'img/mc11.jpg'
					},
					year: 2018,
					phase: 'phase1'
				}
			];
		}

		function TvShows() {
			let tvShows = [];

			function getTvShows() {
				$.ajax({
					url: 'data/tvshows.json',
					success: function(data) {
						tvShows = data;
						popuniTvShowsDole();
						popuniTvShowsGore();
					}
				});
			}

			function popuniTvShowsDole() {
				let html = '';

				for (let tvshow of tvShows) {
					html += showTvShow(tvshow);
				}

				document.getElementById('ubaci').innerHTML = html;
			}

			function popuniTvShowsGore() {
				let html = '';
				let niz = tvShows.slice(0, 6);

				for (let tvshow of niz) {
					html += showGamesGore(tvshow);
				}

				document.getElementById('ubaciGore').innerHTML = html;
			}

			function showTvShow(tvshow) {
				return `<li class="movieCards klik1" >
                            <img class="moviePhoto" src="${tvshow.img}" alt="${tvshow.alt}">
                            <div class="movieInfo">
                                <h3>${tvshow.title}</h3>
                                <h4>${tvshow['release date']}</h4>
                            </div>
                        </li>`;
			}

			function showGamesGore(tvshow) {
				return `<li class="movieCards klik1" data-idg="${tvshow.id}">
                             <img class="moviePhoto1" src="${tvshow.img}" alt="${tvshow.alt}">
                             <div class="movieInfo">
                                 <h3>${tvshow.title}</h3>
                                 <h4>${tvshow['release date']}</h4>
                             </div>
                         </li>`;
			}

			function pretragaGames(unos) {
				games = games.filter(function(x) {
					if (x.title.toLowerCase().indexOf(unos.toLowerCase()) != -1) {
						return x;
					}
				});
				popuniGamesDole(games); // zasto ovo nece da se refresuje
				// console.log(games); // niz se posle filtera ne vrati na pocetno stanje
			}

			return {
				getTvShows,
				pretragaGames
			};
		}

		function pretragaSerija() {
			const unos = this.value;

			const filtriraniNiz = serije.filter(function(x) {
				if (x.title.toLowerCase().indexOf(unos.trim().toLowerCase()) != -1) {
					return x;
				}
			});
			tvShowsGalerija(filtriraniNiz);
		}

		function proveraSearch() {
			let search = document.getElementById('search');

			let regSearch = /^[A-z]{1,25}[':]*[A-z]*(\s)*[A-z]*(\s)*$/;

			if (regSearch.test(search.value)) {
				search.style.borderBottom = '2px solid #000';
			} else if (search.value == ' ' || search.value == '') {
				search.style.borderBottom = '2px solid #000';
			} else {
				search.style.borderBottom = '2px solid #ff0000';
			}
		}

		function sortirajSerije() {
			let klik = this.value;

			if (klik == 'latest') {
				serije.sort((a, b) => b.year - a.year);
			}
			tvShowsGalerija(serije);

			if (klik == 'oldest') {
				serije.sort((a, b) => a.year - b.year);
			}
			tvShowsGalerija(serije);

			if (klik == 'a-z') {
				serije.sort(function(a, b) {
					if (a.alt < b.alt) return -1;
					if (a.alt > b.alt) return 1;
					return 0;
				});
			}
			tvShowsGalerija(serije);

			if (klik == 'z-a') {
				serije.sort(function(a, b) {
					if (a.alt > b.alt) return -1;
					if (a.alt < b.alt) return 1;
					return 0;
				});
			}
			tvShowsGalerija(serije);

			if (klik == '0') {
				serije.sort(function(a, b) {
					if (a.id < b.id) return -1;
					if (a.id > b.id) return 1;
					return 0;
				});
			}
			tvShowsGalerija(serije);
		}

		function filtrirajSerije() {
			let klik = this.value;

			const filtriraniFilmovi1 = serije.filter(function(x) {
				if (x.phase == klik) {
					return x;
				}
			});
			tvShowsGalerija(filtriraniFilmovi1);

			const filtriraniFilmovi2 = serije.filter(function(y) {
				if (y.phase == klik) {
					return y;
				}
			});
			tvShowsGalerija(filtriraniFilmovi2);

			const filtriraniFilmovi3 = serije.filter(function(z) {
				if (z.phase == klik) {
					return z;
				}
			});
			tvShowsGalerija(filtriraniFilmovi3);

			if ('0' == klik) {
				tvShowsGalerija(serije);
			}
		}

		function tvShowsGalerija(serije) {
			let html = '';

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

			document.getElementById('ubaci').innerHTML = html;
		}
		$(document).ready(function() {
			$(function() {
				$('.movieCards').hover(
					function() {
						$(this).find('.moviePhoto').stop(true, true).animate(
							{
								marginTop: '-=5px'
							},
							200
						);
					},
					function() {
						$(this).find('.moviePhoto').stop(true, true).animate(
							{
								marginTop: '+=5px'
							},
							200
						);
					}
				);
			});

			$(function() {
				$('.movieCards').hover(
					function() {
						$(this).find('.moviePhoto1').stop(true, true).animate(
							{
								marginTop: '-=5px'
							},
							200
						);
					},
					function() {
						$(this).find('.moviePhoto1').stop(true, true).animate(
							{
								marginTop: '+=5px'
							},
							200
						);
					}
				);
			});

			$('#newsBlockNone').hide();
			$('.showmore').click(function() {
				// sakriti/prikazati blok
				if ($('#newsBlockNone').is(':visible')) {
					$('#newsBlockNone').slideUp(500);
					$('#showMore').show();
					$('.showmore').html('<h4>Show more</h4>');
				} else {
					$('#newsBlockNone').slideDown(500);
					$('.showmore').html('<h4>Show Less</h4>');
				}
			});
		});
	} else if (url.indexOf('games.html') != -1) {
		hederLista();
		footerListe();
		footerInfoSlika();
		slikeNewsBlock();

		let module = Games();
		module.getGames();
		var games = dohvatiSve(games);

		var headerForma = document.getElementById('headerForma');
		headerForma.style.visibility = 'hidden';

		var pozivanje = document.getElementById('signIn');
		pozivanje.addEventListener('click', pozivanjeForme);

		localStorage.getItem('username');

		if (localStorage.getItem('username')) {
			document.getElementById('pozivanje').innerHTML = 'WELCOME ' + localStorage.getItem('username');
			document.querySelector('.search .logo2').innerHTML = "<a href='index.html'>LOGOUT</a>";
			document.querySelector('.search .logo3').innerHTML = "<a href='index.html'>LOGOUT</a>";
			pozivanje.removeEventListener('click', pozivanjeForme);
		}
		document.querySelector('.search .logo2').addEventListener('click', function() {
			localStorage.removeItem('username');
		});

		document.querySelector('.search .logo3').addEventListener('click', function() {
			localStorage.removeItem('username');
		});

		document.getElementById('search').addEventListener('keyup', pretragaSerija);
		// document.getElementById("search").addEventListener("keyup", pretragaGames); // zasto ovo ne radi
		document.getElementById('search').addEventListener('keyup', proveraSearch);
		document.getElementById('sort').addEventListener('change', sortirajGames);
		document.getElementById('filter').addEventListener('change', filtrirajGames);

		function hederLista() {
			var niz = [ 'explore.html', 'movies.html', 'tv-shows.html', 'games.html' ];
			var niz1 = [ 'explore ', 'movies', 'tv shows', 'games' ];

			var divLista = document.getElementById('headerDown');
			var ispis = "<ul class='HDList'>";
			for (var i = 0; i < 4; i++) {
				ispis += "<li><a href='" + niz[i] + "'>" + niz1[i] + '</a></li>';
			}
			ispis += '</ul>';
			divLista.innerHTML = ispis;
		}

		function footerListe() {
			var lista = [ 'about marvel', 'marvel fans', 'careers', 'internships' ];
			var divLista = document.getElementById('footer-links-primary');
			var ispis = "<ul id='footer-links1'>";
			for (var i = 0; i < lista.length; i++) {
				ispis += "<li><a href='#'>" + lista[i] + '</a></li>';
			}
			ispis += '</ul>';
			divLista.innerHTML = ispis;
			////////////////////////////////////////////////////////////////////////
			var lista1 = [ 'style.scss', 'sitemap', 'author', 'documentation' ];
			var lista11 = [ 'css/style.scss', 'sitemap.xml', 'porfolio.html', 'documentation.pdf' ];
			var divLista1 = document.getElementById('footer-links-secondary');
			var ispis1 = "<ul id='footer-links2'>";
			for (var i = 0; i < lista1.length; i++) {
				ispis1 += '<li><a href=' + lista11[i] + '>' + lista1[i] + '</a></li>';
			}
			ispis1 += '</ul>';
			divLista1.innerHTML = ispis1;
			////////////////////////////////////////////////////////////////////////
			var lista2 = [
				"<span class='fa fa-facebook'></span>",
				"<span class='fa fa-instagram'></span>",
				"<span class='fa fa-twitter'></span>"
			];
			var divLista2 = document.getElementById('footer-follow-list');
			var ispis2 = "<ul id='footer-follow-list-links1'>";
			for (var i = 0; i < lista2.length; i++) {
				ispis2 += "<li><a href='#'>" + lista2[i] + '</a></li>';
			}
			ispis2 += '</ul>';
			divLista2.innerHTML = ispis2;
			////////////////////////////////////////////////////////////////////////
			var lista3 = [
				"<span class='fa fa-pinterest'></span>",
				"<span class='fa fa-youtube'></span>",
				"<span class='fa fa-snapchat'></span>"
			];
			var divLista2 = document.getElementById('footer-follow-list');
			var ispis2 = "<ul id='footer-follow-list-links2'>";
			for (var i = 0; i < lista3.length; i++) {
				ispis2 += "<li><a href='#'>" + lista3[i] + '</a></li>';
			}
			ispis2 += '</ul>';
			divLista2.innerHTML += ispis2;
		}

		function footerInfoSlika() {
			var infoSlika = document.getElementById('footer-promo-pic1');
			var slika = document.createElement('img');
			slika.setAttribute('src', 'img/formh.png');
			infoSlika.appendChild(slika);

			var infoSlika1 = document.getElementById('footer-promo-pic2');
			var slika1 = document.createElement('img');
			slika1.setAttribute('src', 'img/footerinfoslika.png');
			infoSlika1.appendChild(slika1);
		}

		function slikeNewsBlock() {
			var elementiNizNews = document.querySelectorAll('.newsBlockPhoto1');
			var brojacSlika = 1;
			for (var i = 0; i < elementiNizNews.length; i++) {
				elementiNizNews[i].style.backgroundImage = "url('img/nbcs" + brojacSlika++ + ".jpg')";
			}
		}

		function pozivanjeForme() {
			var headerForma = document.getElementById('headerForma');
			headerForma.style.visibility === 'hidden'
				? (headerForma.style.visibility = 'initial')
				: (headerForma.style.visibility = 'hidden');
		}

		function Games() {
			let games = [];

			function getGames() {
				$.ajax({
					url: 'data/games.json',
					success: function(data) {
						games = data;
						popuniGamesDole();
						popuniGamesGore();
					}
				});
			}

			function popuniGamesDole() {
				let html = '';

				for (let game of games) {
					html += showGames(game);
				}

				document.getElementById('ubaci').innerHTML = html;
			}

			function popuniGamesGore() {
				let html = '';
				let niz = games.slice(0, 6);

				for (let game of niz) {
					html += showGamesGore(game);
				}

				document.getElementById('ubaciGore').innerHTML = html;
			}

			function showGames(game) {
				return `<li class="movieCards klik1" >
                            <img class="moviePhoto" src="${game.img}" alt="${game.alt}">
                            <div class="movieInfo">
                                <h3>${game.title}</h3>
                                <h4>${game['release date']}</h4>
                            </div>
                        </li>`;
			}

			function showGamesGore(game) {
				return `<li class="movieCards klik1" data-idg="${game.id}">
                             <img class="moviePhoto1" src="${game.img}" alt="${game.alt}">
                             <div class="movieInfo">
                                 <h3>${game.title}</h3>
                                 <h4>${game['release date']}</h4>
                             </div>
                         </li>`;
			}

			function pretragaGames(unos) {
				games = games.filter(function(x) {
					if (x.title.toLowerCase().indexOf(unos.toLowerCase()) != -1) {
						return x;
					}
				});
				popuniGamesDole(games); // zasto ovo nece da se refresuje
				// console.log(games); // niz se posle filtera ne vrati na pocetno stanje
			}

			return {
				getGames,
				pretragaGames
			};
		}

		function dohvatiSve(games) {
			return [
				{
					id: 16,
					img: 'img/gg16.png',
					alt: 'ultimate alliance',
					title: 'Marvel Ultimate Alliance',
					'release date': '2019',
					popUpDescription:
						'Coming Summer 2019. The MARVEL ULTIMATE ALLIANCE series returns for the first time in 10 years—with a new action RPG—exclusively on the Nintendo Switch™ system! Assemble your ultimate team of Marvel Super Heroes from a huge cast including the Avengers, the Guardians of the Galaxy, the X-Men, and more! Team up with friends to prevent galactic devastation at the hands of the mad cosmic tyrant Thanos and his ruthless warmasters, The Black Order.',
					mainPhoto: 'img/gg16.png',
					filmovi: {
						slika1: 'img/mc5.jpg',
						slika2: 'img/mc8.jpg',
						slika3: 'img/mc11.jpg'
					},
					year: 2019,
					phase: 'phase3'
				},
				{
					id: 1,
					img: 'img/gg1.jpg',
					alt: 'battle lines',
					title: 'Marvel Battle Lines',
					'release date': '2018',
					popUpDescription:
						'The Cosmic Cube has been shattered, plunging the Marvel Universe into chaos! Now, you must join forces with Super Heroes and Villains, including the Avengers, the Guardians of the Galaxy, Spider-Man, and more, to collect the shards and restore the universe. Collect over 100 of your favorite Marvel character playing cards including Captain America, Thor, Daredevil, Venom, Doctor Strange and Thanos. Available on iOS and Android.',
					mainPhoto: 'img/gg1.jpg',
					filmovi: {
						slika1: 'img/mc5.jpg',
						slika2: 'img/mc8.jpg',
						slika3: 'img/mc11.jpg'
					},
					year: 2018,
					phase: 'phase3'
				},
				{
					id: 2,
					img: 'img/gg2.jpg',
					alt: 'spiderman',
					title: "Marvel's Spider-Man",
					'release date': '2018',
					popUpDescription:
						'Sony Interactive Entertainment, Insomniac Games, and Marvel have teamed up to create a brand-new and authentic Spider-Man adventure. This isn’t the Spider-Man you’ve met or ever seen before. This is an experienced Peter Parker who’s more masterful at fighting big crime in New York City. At the same time, he’s struggling to balance his chaotic personal life and career while the fate of millions of New Yorkers rest upon his shoulders.',
					mainPhoto: 'img/gg2.jpg',
					filmovi: {
						slika1: 'img/mc5.jpg',
						slika2: 'img/mc8.jpg',
						slika3: 'img/mc11.jpg'
					},
					year: 2018,
					phase: 'phase3'
				},
				{
					id: 3,
					img: 'img/gg4.jpg',
					alt: 'powers united vr',
					title: 'Marvel Powers United VR',
					'release date': '2018',
					popUpDescription:
						"Unleash your rage and smash foes in VR! Lock 'n load your favorite plasma cannons, or take to the skies with powerful photon blasts. Hulk, Rocket Raccoon, Captain Marvel, and a powerful roster of Marvel’s greatest heroes are ready for battle. Suit up, power up, and team up with friends to engage in immersive, explosive co-op fights from across the Marvel Universe. Be the hero and unleash your powers now!",
					mainPhoto: 'img/gg4.jpg',
					filmovi: {
						slika1: 'img/mc5.jpg',
						slika2: 'img/mc8.jpg',
						slika3: 'img/mc11.jpg'
					},
					year: 2018,
					phase: 'phase3'
				},
				{
					id: 4,
					img: 'img/gg5.jpg',
					alt: 'contest of champions',
					title: 'Marvel Contest of Champions',
					'release date': '2018',
					popUpDescription:
						"Iron Man vs. Captain America! Hulk vs. Wolverine! Drax vs. Deadpool! The greatest battles in Marvel history are in your hands! The greedy Elder of the Universe known as The Collector has summoned you to a brawl of epic proportions against a line-up of vile villains including Thanos, Kang the Conqueror, and many more! Experience the ultimate free-to-play fighting game on your mobile device… Contest of Champions! Who's on your team?",
					mainPhoto: 'img/gg5.jpg',
					filmovi: {
						slika1: 'img/mc5.jpg',
						slika2: 'img/mc8.jpg',
						slika3: 'img/mc11.jpg'
					},
					year: 2018,
					phase: 'phase3'
				},
				{
					id: 5,
					img: 'img/gg6.jpg',
					alt: 'future fight',
					title: 'Marvel Future Fight',
					'release date': '2017',
					popUpDescription:
						'Players will have access to some of the most beloved Marvel characters including the Avengers, Spider-Man, Daredevil, and the Guardians of the Galaxy, complete with their signature moves and abilities that will allow players to build their own unstoppable team in the fight against well-known villains such as Loki, Doctor Octopus, and Ultron.',
					mainPhoto: 'img/gg6.jpg',
					filmovi: {
						slika1: 'img/mc5.jpg',
						slika2: 'img/mc8.jpg',
						slika3: 'img/mc11.jpg'
					},
					year: 2017,
					phase: 'phase2'
				},
				{
					id: 6,
					img: 'img/gg3.jpg',
					alt: 'strike force',
					title: 'Marvel Strike Force',
					'release date': '2017',
					popUpDescription:
						'Marvel and FoxNext Games team up to bring you “MARVEL Strike Force”! Heroes and villains alike will need to forget their differences and battle side-by-side against one of the biggest threats the world has ever seen: Ultimus. With the Kree Warlord’s sights set on Earth, players will take control of S.T.R.I.K.E.—our primary line of defense against threats like him—put a squad together, and take the fight to Ultimus and his armies.',
					mainPhoto: 'img/gg3.jpg',
					filmovi: {
						slika1: 'img/mc5.jpg',
						slika2: 'img/mc8.jpg',
						slika3: 'img/mc11.jpg'
					},
					year: 2017,
					phase: 'phase2'
				},
				{
					id: 7,
					img: 'img/gg7.jpg',
					alt: 'puzzle quest',
					title: 'Marvel Puzzle Quest',
					'release date': '2017',
					popUpDescription:
						"The best in match-3 puzzle gameplay meets Marvel's biggest Super Heroes and Super Villains in the most epic puzzle adventure game out on your phone, tablet and PC! Marvel Puzzle Quest combines your favorite Marvel characters with deep RPG leveling, player-vs-player tournaments, Alliances, and much more. It's time to unleash your inner Super Hero and wage war against your enemies.",
					mainPhoto: 'img/gg7.jpg',
					filmovi: {
						slika1: 'img/mc5.jpg',
						slika2: 'img/mc8.jpg',
						slika3: 'img/mc11.jpg'
					},
					year: 2017,
					phase: 'phase2'
				},
				{
					id: 8,
					img: 'img/gg8.jpg',
					alt: 'avengers academy',
					title: 'Marvel Avengers Academy',
					'release date': '2016',
					popUpDescription:
						'Experience the Avengers as you’ve never seen them before! Build the ultimate Super Hero academy, and play as your favorite Avengers characters reimagined as students developing their superpowers. Customize your dream campus, unlock your favorite heroes and villains, navigate their social lives, and go on epic missions.',
					mainPhoto: 'img/gg8.jpg',
					filmovi: {
						slika1: 'img/mc5.jpg',
						slika2: 'img/mc8.jpg',
						slika3: 'img/mc11.jpg'
					},
					year: 2016,
					phase: 'phase2'
				},
				{
					id: 9,
					img: 'img/gg9.jpg',
					alt: 'spiderman-man unlimited',
					title: 'Marvel Spider-Man Unlimited',
					'release date': '2016',
					popUpDescription:
						"Enjoy the thrill of swinging, running, and fighting through a chaotic New York on the brink of destruction, as the formidable Sinister Six attempt to gain unlimited power by opening a malevolent dimensional rift to our world. It's up to Peter Parker and iconic Spider-Man variations such as Iron Spider-Man, Spider-Man Noir, Future Foundation Spider-Man and Ben Reilly Spider-Man to team up and stop them!",
					mainPhoto: 'img/gg9.jpg',
					filmovi: {
						slika1: 'img/mc5.jpg',
						slika2: 'img/mc8.jpg',
						slika3: 'img/mc11.jpg'
					},
					year: 2016,
					phase: 'phase2'
				},
				{
					id: 10,
					img: 'img/gg10.jpg',
					alt: 'lego marvel super heroes 2',
					title: 'LEGO Marvel Super Heroes 2',
					'release date': '2016',
					popUpDescription:
						'Bringing together iconic Marvel Super Heroes and Super Villains from different eras and realities, this branching storyline transports players into a cosmic battle across a myriad of Marvel locations ripped from time and space into the incredible open hub world of Chronopolis. Packed with signature LEGO humor for fans of all ages, gamers will go head-to-head with the time-travelling Kang the Conqueror through many imaginative settings in this fun-filled journey spanning the Marvel Universe.',
					mainPhoto: 'img/gg10.jpg',
					filmovi: {
						slika1: 'img/mc5.jpg',
						slika2: 'img/mc8.jpg',
						slika3: 'img/mc11.jpg'
					},
					year: 2016,
					phase: 'phase1'
				},
				{
					id: 11,
					img: 'img/gg11.jpg',
					alt: 'marvel cs capcom infinite',
					title: 'Marvel vs. Capcom: Infinite',
					'release date': '2016',
					popUpDescription:
						'Marvel vs. Capcom: Infinite features a variety of exciting and accessible single player modes and rich multi-player content for new players and longtime fans alike. In addition to single player Arcade, Training, and Mission modes, a visually stunning and immersive cinematic Story Mode puts players at the center of both universes as they battle for supremacy against powerful forces and a new villain.',
					mainPhoto: 'img/gg11.jpg',
					filmovi: {
						slika1: 'img/mc5.jpg',
						slika2: 'img/mc8.jpg',
						slika3: 'img/mc11.jpg'
					},
					year: 2016,
					phase: 'phase1'
				},
				{
					id: 12,
					img: 'img/gg12.jpg',
					alt: 'gotg',
					title: "Marvel's Guardians of the Galaxy: The Telltale Series",
					'release date': '2016',
					popUpDescription:
						"Marvel’s Guardians of the Galaxy: The Telltale Series delivers a brand new story of the universe's unlikeliest heroes, the rag-tag band of outlaws who go by the names Star-Lord, Gamora, Drax, Rocket, and Groot. In the wake of an epic battle, the Guardians discover an artifact of unspeakable power. Each of the Guardians has a reason to desire this relic, as does a ruthless enemy who is the last of her kind, and who will stop at nothing to tear it from their hands.",
					mainPhoto: 'img/gg12.jpg',
					filmovi: {
						slika1: 'img/mc5.jpg',
						slika2: 'img/mc8.jpg',
						slika3: 'img/mc11.jpg'
					},
					year: 2016,
					phase: 'phase1'
				},
				{
					id: 13,
					img: 'img/gg13.jpg',
					alt: 'pinball',
					title: 'Marvel Pinball',
					'release date': '2015',
					popUpDescription:
						"Whether it's the Avengers, the Guardians of the Galaxy, Ant-Man, or any of your other favorite Marvel heroes and villains, enjoy pinball action on Zen Studios' digital tables!",
					mainPhoto: 'img/gg13.jpg',
					filmovi: {
						slika1: 'img/mc5.jpg',
						slika2: 'img/mc8.jpg',
						slika3: 'img/mc11.jpg'
					},
					year: 2015,
					phase: 'phase1'
				},
				{
					id: 14,
					img: 'img/gg14.jpg',
					alt: "lego marvel's avengers",
					title: "LEGO Marvel's Avengers",
					'release date': '2015',
					popUpDescription:
						'Avengers Assemble! The best-selling LEGO® Marvel videogame franchise returns with a new action-packed Super Hero adventure. Join the LEGO Marvel’s Avengers team and experience the first console videogame featuring characters and storylines from the critically-acclaimed film Marvel’s The Avengers, the blockbuster sequel Marvel’s Avengers: Age of Ultron, and more. Play as the most powerful Super Heroes in their quest to save the world!',
					mainPhoto: 'img/gg14.jpg',
					filmovi: {
						slika1: 'img/mc5.jpg',
						slika2: 'img/mc8.jpg',
						slika3: 'img/mc11.jpg'
					},
					year: 2015,
					phase: 'phase1'
				},
				{
					id: 15,
					img: 'img/gg15.jpg',
					alt: 'lego marvel super heroes',
					title: 'LEGO Marvel Super Heroes',
					'release date': '2014',
					popUpDescription:
						'LEGO® Marvel Super Heroes features an original story spanning the entire Marvel Universe. Players take control of Iron Man, Spider-Man, the Hulk, Captain America, Wolverine and many more Marvel characters as they unite to stop Loki and a host of other Marvel villains from assembling a super-weapon capable of destroying the world. Players chase down Cosmic Bricks as they travel across LEGO Manhattan and visit key locations from the Marvel Universe like the Avengers’ Helicarrier, Stark Tower, Aste',
					mainPhoto: 'img/gg15.jpg',
					filmovi: {
						slika1: 'img/mc5.jpg',
						slika2: 'img/mc8.jpg',
						slika3: 'img/mc11.jpg'
					},
					year: 2014,
					phase: 'phase1'
				}
			];
		}

		function pretragaSerija() {
			const unos = this.value;

			const filtriraniNiz = games.filter(function(x) {
				if (x.title.toLowerCase().indexOf(unos.trim().toLowerCase()) != -1) {
					return x;
				}
			});
			gamesGalerija(filtriraniNiz);
		}

		function proveraSearch() {
			let search = document.getElementById('search');

			let regSearch = /^[A-z]{1,25}[':]*[A-z]*(\s)*[A-z]*(\s)*$/;

			if (regSearch.test(search.value)) {
				search.style.borderBottom = '2px solid #000';
			} else if (search.value == ' ' || search.value == '') {
				search.style.borderBottom = '2px solid #000';
			} else {
				search.style.borderBottom = '2px solid #ff0000';
			}
		}

		function sortirajGames() {
			let klik = this.value;

			if (klik == 'latest') {
				games.sort((a, b) => b.year - a.year);
			}
			gamesGalerija(games);

			if (klik == 'oldest') {
				games.sort((a, b) => a.year - b.year);
			}
			gamesGalerija(games);

			if (klik == 'a-z') {
				games.sort(function(a, b) {
					if (a.alt < b.alt) return -1;
					if (a.alt > b.alt) return 1;
					return 0;
				});
			}
			gamesGalerija(games);

			if (klik == 'z-a') {
				games.sort(function(a, b) {
					if (a.alt > b.alt) return -1;
					if (a.alt < b.alt) return 1;
					return 0;
				});
			}
			gamesGalerija(games);

			if (klik == '0') {
				games.sort(function(a, b) {
					if (a.id < b.id) return -1;
					if (a.id > b.id) return 1;
					return 0;
				});
			}
			gamesGalerija(games);
		}

		function filtrirajGames() {
			let klik = this.value;

			const filtriraniFilmovi1 = games.filter(function(x) {
				if (x.phase == klik) {
					return x;
				}
			});
			gamesGalerija(filtriraniFilmovi1);

			const filtriraniFilmovi2 = games.filter(function(y) {
				if (y.phase == klik) {
					return y;
				}
			});
			gamesGalerija(filtriraniFilmovi2);

			const filtriraniFilmovi3 = games.filter(function(z) {
				if (z.phase == klik) {
					return z;
				}
			});
			gamesGalerija(filtriraniFilmovi3);

			if ('0' == klik) {
				gamesGalerija(games);
			}
		}

		function gamesGalerija(games) {
			let html = '';

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
			}

			document.getElementById('ubaci').innerHTML = html;
		}

		function pretragaGames() {
			const unos = this.value;

			module.pretragaGames(unos);
		}

		$(document).ready(function() {
			$(function() {
				$('.movieCards').hover(
					function() {
						$(this).find('.moviePhoto').stop(true, true).animate(
							{
								marginTop: '-=5px'
							},
							200
						);
					},
					function() {
						$(this).find('.moviePhoto').stop(true, true).animate(
							{
								marginTop: '+=5px'
							},
							200
						);
					}
				);
			});

			$(function() {
				$('.movieCards').hover(
					function() {
						$(this).find('.moviePhoto1').stop(true, true).animate(
							{
								marginTop: '-=5px'
							},
							200
						);
					},
					function() {
						$(this).find('.moviePhoto1').stop(true, true).animate(
							{
								marginTop: '+=5px'
							},
							200
						);
					}
				);
			});

			$('#newsBlockNone').hide();
			$('.showmore').click(function() {
				if ($('#newsBlockNone').is(':visible')) {
					$('#newsBlockNone').slideUp(500);
					$('#showMore').show();
					$('.showmore').html('<h4>Show more</h4>');
				} else {
					$('#newsBlockNone').slideDown(500);
					$('.showmore').html('<h4>Show Less</h4>');
				}
			});

			$.ajax({
				url: 'data/games.json',
				method: 'GET',
				type: 'json',
				success: function(games) {
					gamesGalerija(games);
				},
				error: function(xhr, status, error) {
					console.log(xhr);
					console.log(status);
					console.log(error);
				}
			});
		});
	} else if (url.indexOf('register.html') != -1) {
		var signInDugme = document.getElementById('dugmenceeeeee');
		signInDugme.addEventListener('click', proveracontinue);

		var signInDugme2 = document.getElementById('povratak');
		signInDugme2.addEventListener('click', proveracontinue1);

		selectMonth();
		selectDay();
		selectYear();
		proveracontinue();
		proveracontinue1();

		function selectMonth() {
			var niz = [
				'Month',
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December'
			];

			var ubacivanje = document.getElementById('selectMonth');
			var ispis = "<select id='selektMesec' class='regselect'>";
			for (var i = 0; i < niz.length; i++) {
				ispis += "<option value='" + i + "'>" + niz[i] + '</option>';
			}
			ispis += '</select>';
			ubacivanje.innerHTML += ispis;
		}

		function selectDay() {
			var ubacivanje = document.getElementById('selectDay');
			var ispis = "<select id='selektDan' class='regselect'>";
			ispis += "<option value='0'>Day</option>";
			for (var i = 1; i < 32; i++) {
				ispis += "<option value='" + i + "'>" + i + '</option>';
			}
			ispis += '</select>';
			ubacivanje.innerHTML += ispis;
		}

		function selectYear() {
			var ubacivanje = document.getElementById('selectYear');
			var ispis = "<select id='selektyear' class='regselect'>";
			ispis += "<option value='0'>Year</option>";
			for (var i = 2018; i >= 1918; i--) {
				ispis += "<option value='" + i + "'>" + i + '</option>';
			}
			ispis += '</select>';
			ubacivanje.innerHTML += ispis;
		}
		var datum = new Date();
		var danas = datum.getFullYear();

		var proveraGreske = 0;

		function proveracontinue() {
			var godinaeror = document.getElementById('registerYear-error');
			var meseceror = document.getElementById('registerMonth-error');
			var daneror = document.getElementById('registerDay-error');
			var sakriti = document.getElementById('sakriti');
			var prikazati = document.getElementById('prikazati');
			var konacnaForma = document.getElementById('pravaForma');

			if (danas - selektyear.options[selektyear.selectedIndex].value < 18) {
				sakriti.style.display = 'none';
				prikazati.style.display = 'block';
			} else if (selektyear.value == 0) {
				godinaeror.textContent = 'Year has not been filled in.';
				selektyear.style.outline = '2px solid #eb2328';
			} else {
				godinaeror.textContent = '';
				selektyear.style.outline = '0px solid #000';
				sakriti.style.display = 'none';
				konacnaForma.style.display = 'block';
			}
			////////////////////////////////////////////////////////////
			if (selektMesec.value == 0) {
				meseceror.textContent = 'Month has not been filled in.';
				selektMesec.style.outline = '2px solid #eb2328';
			} else {
				meseceror.textContent = '';
				selektMesec.style.outline = '0px solid #000';
			}
			//////////////////////////////////////////////////////
			if (selektDan.value == 0) {
				daneror.textContent = 'Day has not been filled in.';
				selektDan.style.outline = '2px solid #eb2328';
			} else {
				daneror.textContent = '';
				selektDan.style.outline = '0px solid #000';
			}
			///////////////////////////////////////////////////////
		}

		function proveracontinue1() {
			let fname = document.getElementById('fname').value.trim();
			let lname = document.getElementById('lname').value.trim();
			let user = document.getElementById('username').value.trim();
			let email = document.getElementById('email').value.trim();
			let pass = document.getElementById('password').value.trim();
			let repass = document.getElementById('repassword').value.trim();

			let fname1 = document.getElementById('fname');
			let lname1 = document.getElementById('lname');
			let user1 = document.getElementById('username');
			let email1 = document.getElementById('email');
			let pass1 = document.getElementById('password');
			let repass1 = document.getElementById('repassword');
			let validno = 0;
			let proveralozinke = repass.search(pass);

			let regFname = /^[A-Z][a-z]{2,12}$/;
			let regLname = /^([A-Z][a-z]{2,12})+$/;
			let regUser = /^[A-z][a-z]{2,}/;
			let regEmail = /^(([A-z]{4,})|([a-z]{2,11}\.[a-z]{2,13}\.[1-9][0-9]*[0-9]*\.[1-9][0-9]))\@(ict.edu.rs|gmail.com|yahoo.com|hotmail.com|eunet.rs)$/;
			let regPass = /^\d{5,12}$/;

			if (!regFname.test(fname)) {
				fname1.style.border = '2px solid #eb2328';
				validno = 1;
			} else if (fname == '') {
				fname1.style.border = '2px solid #eb2328';
				validno = 1;
			} else {
				fname1.style.border = 'none';
				validno = 0;
			}

			if (!regLname.test(lname)) {
				lname1.style.border = '2px solid #eb2328';
				validno = 1;
			} else if (lname == '') {
				lname1.style.border = '2px solid #eb2328';
				validno = 1;
			} else {
				lname1.style.border = 'None';
				validno = 0;
			}

			if (!regUser.test(user)) {
				user1.style.border = '2px solid #eb2328';
				validno = 1;
			} else if (user == '') {
				user1.style.border = '2px solid #eb2328';
				validno = 1;
			} else {
				user1.style.border = 'none';
				validno = 0;
			}

			if (!regEmail.test(email)) {
				email1.style.border = '2px solid #eb2328';
				validno = 1;
			} else if (email == '') {
				email1.style.border = '2px solid #eb2328';
				validno = 1;
			} else {
				email1.style.border = 'none';
				validno = 0;
			}

			if (!regPass.test(pass)) {
				pass1.style.border = '2px solid #eb2328';
				validno = 1;
			} else if (pass == '') {
				pass1.style.border = '2px solid #eb2328';
				validno = 1;
			} else {
				pass1.style.border = 'none';
				validno = 0;
			}

			if (!regPass.test(repass)) {
				repass1.style.border = '2px solid #eb2328';
				validno = 1;
			} else if (repass == '') {
				repass1.style.border = '2px solid #eb2328';
				validno = 1;
			} else {
				repass1.style.border = 'none';
				validno = 0;
			}

			if (proveralozinke < 0 && proveralozinke != 1) {
				repass1.style.border = '2px solid #eb2328';
				validno = 1;
			} else {
				repass1.style.border = 'none';
				validno = 0;
			}
			console.log(validno);

			// if (validno == 0) {
			//     alert("tu")
			//     window.location.href = "index.html"
			// }
		}
	} else if (url.indexOf('singin.html') != -1) {
		let signInDugme = document.getElementById('dugmenceeeeee');
		signInDugme.addEventListener('click', proveraSignIn);

		function proveraSignIn() {
			let username = document.getElementById('username');
			let password = document.getElementById('password');
			let validnoUser = true;
			let validnoPass = true;

			let regUsername = /^[A-zšđčćž]{3,}(\d)*$/;
			let regPassword = /^[a-z]{5,}(\d)+/;

			if (regUsername.test(username.value)) {
				document.getElementById('username-error').textContent = '';
				validnoUser = true;
				localStorage.setItem('username', username.value);
			} else {
				document.getElementById('username-error').textContent = 'Wrong username';
				validnoUser = false;
			}

			if (regPassword.test(password.value)) {
				document.getElementById('password-error').textContent = '';
				validnoPass = true;
			} else {
				document.getElementById('password-error').textContent = 'Wrong password';
				validnoPass = false;
			}

			if (validnoUser && validnoPass) {
				window.location.href = 'index.html';
				// alert("pera")
			} else {
				return false;
			}

			console.log(localStorage.getItem('username'));
		}
	} else {
		hederLista();
		footerListe();
		footerInfoSlika();
		slajderSlike();
		indexAjax();

		var headerForma = document.getElementById('headerForma');
		headerForma.style.visibility = 'hidden';

		var pozivanje = document.getElementById('signIn');
		pozivanje.addEventListener('click', pozivanjeForme);

		localStorage.getItem('username');

		if (localStorage.getItem('username')) {
			document.getElementById('pozivanje').innerHTML = 'WELCOME ' + localStorage.getItem('username');
			document.querySelector('.search .logo2').innerHTML = "<a href='index.html'>LOGOUT</a>";
			document.querySelector('.search .logo3').innerHTML = "<a href='index.html'>LOGOUT</a>";
			pozivanje.removeEventListener('click', pozivanjeForme);
		}
		document.querySelector('.search .logo2').addEventListener('click', function() {
			localStorage.removeItem('username');
		});

		document.querySelector('.search .logo3').addEventListener('click', function() {
			localStorage.removeItem('username');
		});

		function hederLista() {
			var niz = [ 'explore.html', 'movies.html', 'tv-shows.html', 'games.html' ];
			var niz1 = [ 'explore', 'movies', 'tv shows', 'games' ];

			var divLista = document.getElementById('headerDown');
			var ispis = "<ul class='HDList'>";
			for (var i = 0; i < niz.length; i++) {
				ispis += "<li><a href='" + niz[i] + "'>" + niz1[i] + '</a></li>';
			}
			ispis += '</ul>';
			divLista.innerHTML = ispis;
		}

		function footerListe() {
			var lista = [ 'about marvel', 'marvel fans', 'careers', 'internships' ];
			var divLista = document.getElementById('footer-links-primary');
			var ispis = "<ul id='footer-links1'>";
			for (var i = 0; i < lista.length; i++) {
				ispis += "<li><a href='#'>" + lista[i] + '</a></li>';
			}
			ispis += '</ul>';
			divLista.innerHTML = ispis;
			////////////////////////////////////////////////////////////////////////
			var lista1 = [ 'scss', 'sitemap', 'author', 'documentation' ];
			var lista11 = [ 'css/style.scss', 'sitemap.xml', 'porfolio.html', 'documentation.pdf' ];
			var divLista1 = document.getElementById('footer-links-secondary');
			var ispis1 = "<ul id='footer-links2'>";
			for (var i = 0; i < lista1.length; i++) {
				ispis1 += '<li><a href=' + lista11[i] + '>' + lista1[i] + '</a></li>';
			}
			ispis1 += '</ul>';
			divLista1.innerHTML = ispis1;
			////////////////////////////////////////////////////////////////////////
			var lista2 = [
				"<span class='fa fa-facebook'></span>",
				"<span class='fa fa-instagram'></span>",
				"<span class='fa fa-twitter'></span>"
			];
			var divLista2 = document.getElementById('footer-follow-list');
			var ispis2 = "<ul id='footer-follow-list-links1'>";
			for (var i = 0; i < lista2.length; i++) {
				ispis2 += "<li><a href='#'>" + lista2[i] + '</a></li>';
			}
			ispis2 += '</ul>';
			divLista2.innerHTML = ispis2;
			////////////////////////////////////////////////////////////////////////
			var lista3 = [
				"<span class='fa fa-pinterest'></span>",
				"<span class='fa fa-youtube'></span>",
				"<span class='fa fa-snapchat'></span>"
			];
			var divLista2 = document.getElementById('footer-follow-list');
			var ispis2 = "<ul id='footer-follow-list-links2'>";
			for (var i = 0; i < lista3.length; i++) {
				ispis2 += "<li><a href='#'>" + lista3[i] + '</a></li>';
			}
			ispis2 += '</ul>';
			divLista2.innerHTML += ispis2;
		}

		function footerInfoSlika() {
			var infoSlika = document.getElementById('footer-promo-pic1');
			var slika = document.createElement('img');
			slika.setAttribute('src', 'img/formh.png');
			infoSlika.appendChild(slika);

			var infoSlika1 = document.getElementById('footer-promo-pic2');
			var slika1 = document.createElement('img');
			slika1.setAttribute('src', 'img/footerinfoslika.png');
			infoSlika1.appendChild(slika1);
		}

		function pozivanjeForme() {
			var headerForma = document.getElementById('headerForma');
			headerForma.style.visibility === 'hidden'
				? (headerForma.style.visibility = 'initial')
				: (headerForma.style.visibility = 'hidden');
		}

		function slikeNewsBlock() {
			let elementiNizNews = document.querySelectorAll('.newsBlockPhoto');
			let brojacSlika = 1;
			for (let i = 0; i < elementiNizNews.length; i++) {
				elementiNizNews[i].style.backgroundImage = "url('img/nbc" + brojacSlika++ + ".jpg')";
			}
		}

		function slajderSlike() {
			let slajderBlok = document.querySelectorAll('.slide');
			let brojacSlika = 1;
			for (let i = 0; i < slajderBlok.length; i++) {
				slajderBlok[i].style.backgroundImage = "url('img/slajder0" + brojacSlika++ + ".jpg')";
			}
		}

		function indexAjax() {
			$.ajax({
				url: 'data/indexFeed.json',
				method: 'GET',
				type: 'json',
				success: function(feed) {
					indexFeed(feed);
				},
				error: function(xhr, status, error) {
					console.log(xhr);
					console.log(status);
					console.log(error);
				}
			});

			$.ajax({
				url: 'data/stanLeeCards.json',
				method: 'GET',
				type: 'json',
				success: function(feed) {
					stanLeeCards(feed);
				},
				error: function(xhr, status, error) {
					console.log(xhr);
					console.log(status);
					console.log(error);
				}
			});

			function indexFeed(feed) {
				let html = '';

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
				}

				document.getElementById('feedCards').innerHTML = html;
			}

			function stanLeeCards(stan) {
				let html = '';

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

				document.getElementById('sliderSets').innerHTML = html;
			}
		}

		$(document).ready(function() {
			slideShow();

			function slideShow() {
				var trenutni = $('#novislajder .aktivna');
				var sledeci = trenutni.next().length ? trenutni.next() : trenutni.parent().children(':first');
				trenutni.removeClass('aktivna').fadeOut();
				sledeci.addClass('aktivna').fadeIn();
				setTimeout(slideShow, 4000);
			}

			$(function() {
				$('.movieCards').hover(
					function() {
						$(this).find('.moviePhoto').stop(true, true).animate(
							{
								marginTop: '-=5px'
							},
							200
						);
					},
					function() {
						$(this).find('.moviePhoto').stop(true, true).animate(
							{
								marginTop: '+=5px'
							},
							200
						);
					}
				);
			});

			$(function() {
				$('.movieCards').hover(
					function() {
						$(this).find('.moviePhoto1').stop(true, true).animate(
							{
								marginTop: '-=5px'
							},
							200
						);
					},
					function() {
						$(this).find('.moviePhoto1').stop(true, true).animate(
							{
								marginTop: '+=5px'
							},
							200
						);
					}
				);
			});

			$('#newsBlockNone').hide();
			$('.showmore').click(function() {
				// sakriti/prikazati blok
				if ($('#newsBlockNone').is(':visible')) {
					$('#newsBlockNone').slideUp(500);
					$('#showMore').show();
					$('.showmore').html('<h4>Show more</h4>');
				} else {
					$('#newsBlockNone').slideDown(500);
					$('.showmore').html('<h4>Show Less</h4>');
				}
			});
		});
	}
};
