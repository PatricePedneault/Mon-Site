	var camera, scene, renderer;
	var player;
	var nbVideo;
	var auto = true;
	var divTextShow;
	var imageToClone;
	
	var pageCV,pagePropos;
	var xButtomInter;

	var moveOut,frontPage,moveFront;
	var projetOng,contactOng,cvOng;
	
	var myNameText,copyrightText;
	var underLine;
	
	var outClick;
	
	var refDomProjectFront;
	
	var camLastY;
	var videoCanBack;
	
	var objectMovieList =[];


	init();
	animate();
	
	function init() 
	{
		camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight , 1, 5000 );
		camera.position.y = - 25;
		
		moveOut = null;
		moveFront = null;
		nbVideo  = 0;
		
		scene = new THREE.Scene();
		
		renderer = new THREE.CSS3DRenderer();
		renderer.setSize( window.innerWidth, window.innerHeight );
		renderer.domElement.style.position = 'absolute';
		renderer.domElement.style.top = 0;
		document.getElementById( 'container' ).appendChild( renderer.domElement );

		takeQueryVideo();

		// Event lorsque l'utilisateur clique dans la fenêtre
		document.body.addEventListener( 'click', function ( event ) 
		{
			// True si un quelconque projet est bien correctement positionné devant et peut revenir à sa position initial
			// False si un projet quelconque est en mouvement
			if (videoCanBack)
			{
				auto = true;
				
				// Clone du titre du projet affiché, celui-ci a été supprimé pour mettre le texte descriptif du projet, on fait donc un clone du contenu de la 
				// variable "imageToClone" pour le remettre à la bonne place
				var titleProjectClone = imageToClone.cloneNode(true);
				titleProjectClone.id = "textClone";
				
				// On cache le texte descriptif
				refDomProjectFront.childNodes[0].style.visibility="hidden";
				
				// On replace le titre du jeu
				refDomProjectFront.childNodes[0].parentNode.insertBefore(titleProjectClone,refDomProjectFront.childNodes[0].nextSibling);
				
				if(player !== undefined) 
				{
					player.parentNode.removeChild( player );
					player = undefined;
				}	
				
				// On replace tout à leur place d'origine
				for (var i = 0; i < objectMovieList.length; i++) 
				{
					objectMovieList[i].position.z = -1900;
					objectMovieList[i].position.x = objectMovieList[i].originalX ;
				}
				
				showInterface();
				showAllVideo();
				
			

				new TWEEN.Tween( camera.position )
						.to( { x: 0, y: - 25 }, 0 )
						.easing( TWEEN.Easing.Exponential.Out )
						.start(); 
						
			}		// Vrai si une page est affiché ( C.V ou contact) ainsi on remet sur le devant les projets 
			else if(frontPage != null && outClick == true)
			{
				projetOng.select();
				moveOut = frontPage;
				
				if(frontPage == pageCV)
				{
					cvOng.unSelect();
				}
				else
				{
					contactOng.unSelect();
				}
			}
			else
			{
				outClick = true;
			}
			
		}, false );
		

		window.addEventListener( 'resize', onWindowResize, false );
		onWindowResize();
	}

	// Fonction qui fait la requêt des vidéos ( sur youtube )
	function takeQueryVideo( ) 
	{
	
		var request = new XMLHttpRequest();
		request.addEventListener( 'load', onData, false );
		
		request.open( 'GET', 'https://gdata.youtube.com/feeds/api/videos?'+
		'v=2'+
		'&author=UCVygdjnKMIInZIZfXbYQKFA'+
		'&alt=json'+
		'&max-results=4',
		 true );
		request.send( null );

	}
	
	// Méthode appelé pour ajouter le contenu à la scène, projet, onglet etc
	function onData( event ) 
	{

		var data = JSON.parse( event.target.responseText );
		var entries = data.feed.entry;
		
		// For qui ajoute les projets en fonction du nombre de video retourné par la requête à youtube
		for ( var i = 0; i < entries.length; i ++ ) 
		{
			( function ( data, time ) {

				setTimeout( function () {

					
					var video =addProject( data );
					scene.add( video);
					objectMovieList.push(video);

				}, time );

			} )( entries[ i ], i * 15 );
		
		}
			
		// On ajoute un projet vide ( sans video )
		var ubiProjet = addEmptyProjet(4);
		scene.add( ubiProjet);
		objectMovieList.push(ubiProjet);
		
		// On demande les object des pages de C.V et Contact
		pageCV 		= addPageInfo(1);
		pagePropos 	= addPageInfo(2);
		
		// On demande les objects pour les onglets Projets, C.V et Contact
		projetOng = addNewOnglet(1);
		cvOng = addNewOnglet(2);
		contactOng = addNewOnglet(3);

		// On demande les objects des autres information de l'interface ( mon nom,texte des droits etc)
		xButtomInter = addXButtom();
		underLine = addUnderLineOnglet();
		myNameText = addMyNameObject();
		copyrightText = addBottomText();
		
		// On ajoute tout à la scène
		scene.add(contactOng);
		scene.add(projetOng);
		scene.add(cvOng);
		
		scene.add(pagePropos);
		scene.add(pageCV);
		
		scene.add(xButtomInter);
		scene.add(myNameText);
		scene.add(underLine);
		scene.add(copyrightText);
	}

	// Fonction qui permet de bouger les vidéos des projets ( lors de la sélection)
	function move( delta )
	{
		for ( var i = 0; i < scene.children.length; i ++ ) 
		{
			var object = scene.children[ i ];
			
			// Seul les projets on une variable "idPosition" ainsi seulement eu auront un mouvement, le if 
			// permet donc de bouger seulement les projets ( if car tous les éléments de la scènes seront bougé sinon)
			if(object.idPosition != undefined)
			{
				object.position.z += delta;
				
				if ( object.position.z > 0 ) 
				{
					object.position.z -= 5000;
				}
				else if ( object.position.z < - 5000 ) 
				{
					object.position.z += 5000;
				}
			}

		}

	}

	// Fonction qui est appelé lorsque l'on veut cacher tous les projets qui ne sont pas sélectionné ou que
	// la video n'est pas sur play
	function hiddenUnplayedVideo()
	{
		for (var i = 0; i < objectMovieList.length; i++) 
		{
			
			if(objectMovieList[i].playing == false)
			{
				objectMovieList[i].hiddenObject();
			}
		}
		
		// Affiche le bouton "X"
		xButtomInter.showObject();
		
	}
	
	// Fonction contraire de celle plus haut, cette méthode permet de mettre la variable "playing" à false sur la video qui est sur play
	// , affiche tous les projets  et cache le bouton X
	function	showAllVideo()
	{
		for (var i = 0; i < objectMovieList.length; i++) 
		{
			if(objectMovieList[i].playing == true)
			{
				objectMovieList[i].playing = false;
				
			}
			
			objectMovieList[i].showObject();
		}
		xButtomInter.hiddenObject();
	}

	// Méthode appelé lorsque la fenêtre du browser subit un "resize" alors on recalcul la projection pour que tout soit encore bien visible
	// sur la scène
	function onWindowResize()
	{

		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize( window.innerWidth, window.innerHeight );
	}
	
	// Fonction qui est appelé pour tout cacher l'interface, comme par exemple lorsqu'un projet est sélectionné
	function hiddenInterface()
	{
		cvOng.hiddenObject();
		myNameText.hiddenObject();
		projetOng.hiddenObject();
		cvOng.hiddenObject();
		contactOng.hiddenObject();
		underLine.hiddenObject();
		copyrightText.hiddenObject();
		pageCV.hiddenObject();
		pagePropos.hiddenObject();
	}
	
	// Fonction qui est appelé pour tout faire afficher l'interface, comme par exemple lorsqu'un projet est désélectionné
	function showInterface()
	{
		cvOng.showObject();
		myNameText.showObject();
		projetOng.showObject();
		cvOng.showObject();
		contactOng.showObject();	
		underLine.showObject();
		copyrightText.showObject();
		pageCV.showObject();
		pagePropos.showObject();
	}

	// Méthode appelé en boucle pour faire les anim
	function animate() 
	{
		requestAnimationFrame( animate );
		TWEEN.update();

		if ( auto === true ) 
		{
			camLastY = camera.position.y;
			videoCanBack =false;
			
			// Si la variable "moveOut" n'est pas égale a null alors une page doit être déplacé
			// hors de l'écran, alors on l'a déplace de -50 à chaque appelle jusqu'a plus petit que -2200
			if(moveOut != null)
			{
				if(moveOut.position.y > -2200)
				{
					moveOut.position.y -= 50;
				}
				else
				{
					moveOut.position.y = -2200;
					moveOut.hiddenObject();
					moveOut = null;
					frontPage = null;
					
				}	
			}
			
			// Si la variable "moveFront" n'est pas égale a null alors une page doit être déplacé
			// devant  l'écran, alors on l'a déplace de +50 à chaque appelle jusqu'a 0
			if(moveFront != null && moveOut == null)
			{
				if(moveFront.position.y < 0)
				{
					moveFront.position.y += 50;
				}
				else
				{
					frontPage = moveFront;
					moveFront = null;
				}	
			}

		}
		else
		{
			// Si vrai alors le projet est bien déplacé ( ne se déplace pu car la position y est la meme que la dernière appelle de la méthode)
			//	devant l'écran et l'animation est terminer, ainsi le projet pourra revenir à sa position initial si l'utilisateur le désire
			if(camera.position.y == camLastY)
			{
				videoCanBack = true;
			}
			else
			{
				camLastY = camera.position.y;
			}
			
		}

		renderer.render( scene, camera );
		
	}
