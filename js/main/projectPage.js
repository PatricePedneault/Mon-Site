	// Méthode qui retourne un objet qui permet l'affichage de projet avec video
	function addProject( entry ) 
	{
		// Division pour l'affichage du titre du projet
		var textTitleProjet =document.createElement("div");
		textTitleProjet.style.fontSize = "80px";
		textTitleProjet.style.textAlign = "center";
		textTitleProjet.style.color = "#FFFFFF";
		textTitleProjet.id = "textClone";
		
		// Division pour l'affichage du type de projet ( ex: Projet etudiant)
		var textTypeProjet =document.createElement("div");					
		textTypeProjet.style.textAlign = "center";
		textTypeProjet.appendChild(document.createTextNode("Projet Etudiant")); 
		textTypeProjet.style.fontSize = "50px";
		textTypeProjet.style.color = "#848484";

		// Division pour la description du projet
		var divDescripProject = document.createElement( 'div' );
		divDescripProject.style.backgroundColor= "black";
		divDescripProject.align = 'left';
		divDescripProject.id = "divInfoGame";
		divDescripProject.style.visibility="hidden";
		
		// Element qui contiendra le texte descriptif du projet
		var textProject = document.createElement( 'gameInfo' );
		
		// Element qui contiendra le titre en bleu du projet
		var titleProject = document.createElement( 'titleGame' );
		titleProject.align = 'right';
		
		// Division principal
		var dom = document.createElement( 'div' );
		dom.style.width = '960px';
		dom.style.height = '960px';	
		dom.style.position = "absolute";
		dom.style.zIndex="1"
		
		// Bouton play de la video
		var button = document.createElement( 'img' );
		button.style.position = 'absolute';
		button.style.left = ( (960 -80) / 2 ) + 'px';
		button.style.top = '950px';
		button.style.visibility = 'visible';
		button.style.WebkitFilter = 'grayscale()';
		button.src = 'data:image/png;base64,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';
		
		// On regarde le nom des projets pour savoir quel texte ajout 
		if(entry.title.$t== "Sail Trailer")
		{
			titleProject.appendChild(document.createTextNode("Sail")); 
			textProject.appendChild(titleProject); 			
			textProject.appendChild(document.createElement( 'br' )); 
			
			textProject.appendChild(document.createTextNode("Projet réalisé dans le cadre du cours Atelier 1 production d'un jeu vidéo."+
														   " L'équipe était constituée d'artistes du centre NAD et de programmeurs"+ 
														   " de l'UQAC.  La production a été faite en moins de 15 semaines sur Unreal"+
														   " Engine 3. Le jeu présente une jeune fille et un poisson marin qui doivent s'entraider tout au long du niveau pour parvenir à la fin."));  
			textProject.appendChild(document.createElement( 'br' ));  
			textProject.appendChild(document.createElement( 'br' )); 
		

			textProject.appendChild(document.createTextNode("Tâches:"));  
			textProject.appendChild(document.createElement( 'br' ));

			textProject.appendChild(document.createTextNode("- Caméra"));  
			textProject.appendChild(document.createElement( 'br' ));

			textProject.appendChild(document.createTextNode("- Création d'éléments kismet pour la gestion de la caméra"));  
			textProject.appendChild(document.createElement( 'br' )); 	

			textProject.appendChild(document.createTextNode("- Contrôle du bateau et du robot"));  
			textProject.appendChild(document.createElement( 'br' ));		

			textProject.appendChild(document.createTextNode("- Déplacement du bateau et du robot"));  
			textProject.appendChild(document.createElement( 'br' ));		
			
			textProject.appendChild(document.createTextNode("- Animation du poisson"));  
			textProject.appendChild(document.createElement( 'br' ));
			textProject.appendChild(document.createElement( 'br' ));  
			textProject.appendChild(document.createElement( 'br' ));	
			textProject.appendChild(document.createElement( 'br' ));
			
			divDescripProject.appendChild( textProject );
			dom.appendChild( divDescripProject );
						
			textTitleProjet.appendChild(document.createTextNode("SAIL - 2014")); 
			textTitleProjet.appendChild(textTypeProjet);
			
			dom.appendChild(textTitleProjet);
		}
		else if (entry.title.$t== "Escape Vector Trailer")
		{
			titleProject.appendChild(document.createTextNode("Escape Vector")); 
			textProject.appendChild(titleProject); 			
			textProject.appendChild(document.createElement( 'br' )); 
			
			textProject.appendChild(document.createTextNode("Projet réalisé dans le cadre du cours Atelier 2 production d'un jeu vidéo. "+
															"L'équipe était constituée d'artistes du centre NAD et de programmeurs de "+ 
															" l'UQAC. La production a été faite en moins de 15 semaines sur Unreal Engine 4."+
															" Dans Escape Vector le joueur évolu sur une planète étrangère où il doit"+
															" protéger un vaisseau transportant des civils . Pour réussir, celui-ci devra se "+
															"déplacer de plate-forme en plate-forme pour ainsi libérer le chemin des ennemis qui obstrue le passage ou ceux qui s'accrochent au convoit."));  
			textProject.appendChild(document.createElement( 'br' )); 
			textProject.appendChild(document.createElement( 'br' )); 			

			textProject.appendChild(document.createTextNode("Tâches:"));  
			textProject.appendChild(document.createElement( 'br' ));

			textProject.appendChild(document.createTextNode("- Création des ennemis dit 'Leecher' (Déplacement,intelligence artificielle )"));  
			textProject.appendChild(document.createElement( 'br' ));

			textProject.appendChild(document.createTextNode("- Caméra ( ex: changement de FOV)"));  
			textProject.appendChild(document.createElement( 'br' )); 	

			textProject.appendChild(document.createTextNode("- 'Respawn' et 'checkpoint' du joueur"));  
			textProject.appendChild(document.createElement( 'br' ));		

			textProject.appendChild(document.createTextNode("- Accrochage du joueur au vaisseau"));  
			textProject.appendChild(document.createElement( 'br' ));		
			
			textProject.appendChild(document.createTextNode("- Travail sur les mécaniques du vaisseau (socket pour accrochage, activation des nids d'ennemis)"));  		
			
			divDescripProject.appendChild( textProject );
			dom.appendChild( divDescripProject );
			
			textTitleProjet.appendChild(document.createTextNode("ESCAPE VECTOR - 2014")); 
			


			textTitleProjet.appendChild(textTypeProjet);
			dom.appendChild(textTitleProjet);
		}
		else if (entry.title.$t== "Meta Warrior Trailer")
		{
			dom.style.zIndex="-1"
			
			titleProject.appendChild(document.createTextNode("Meta Warrior")); 
			textProject.appendChild(titleProject); 			
			textProject.appendChild(document.createElement( 'br' )); 
			
			textProject.appendChild(document.createTextNode("Meta Warrior est un projet personnel que nous avons développé en collaboration avec des "+
															"artistes du centre NAD. Meta Warrior est un jeu en 2.5D, beat 'em up, combat où l'on incarne un "+
															"ancien militaire qui a un désir de vengeance."));  
			textProject.appendChild(document.createElement( 'br' ));  
			textProject.appendChild(document.createElement( 'br' ));  
			textProject.appendChild(document.createElement( 'br' ));
			textProject.appendChild(document.createElement( 'br' ));
			textProject.appendChild(document.createElement( 'br' )); 			

			textProject.appendChild(document.createTextNode("Tâches:"));  
			textProject.appendChild(document.createElement( 'br' ));

			textProject.appendChild(document.createTextNode("- Caméra déplacement"));  
			textProject.appendChild(document.createElement( 'br' ));

			textProject.appendChild(document.createTextNode("- Caméra animation"));  
			textProject.appendChild(document.createElement( 'br' )); 	

			textProject.appendChild(document.createTextNode("- Vague d'ennemis"));  
			textProject.appendChild(document.createElement( 'br' ));		

			textProject.appendChild(document.createTextNode("- Page de chargement"));  
			textProject.appendChild(document.createElement( 'br' ));		
			
			textProject.appendChild(document.createTextNode("- Menu (Principal,Pause. GameOver)."));  
			textProject.appendChild(document.createElement( 'br' ));			
			
			divDescripProject.appendChild( textProject );
			dom.appendChild( divDescripProject );
			

			textTitleProjet.appendChild(document.createTextNode("META WARRIOR - 2014")); 
			textTitleProjet.appendChild(textTypeProjet);
			
			dom.appendChild(textTitleProjet);
		}
		
		var image = document.createElement( 'img' );
		image.id = "youtubeImg";
		image.style.position = 'absolute';
		image.style.width = '960px';
		image.style.height = '720px';
		image.src = entry.media$group.media$thumbnail[ 2 ].url;
		dom.appendChild( image );

		dom.appendChild( button );


		var blocker = document.createElement( 'div' );
		blocker.style.position = 'absolute';
		blocker.style.width = '960px';
		blocker.style.height = '720px';
		blocker.style.background = 'rgba(0,0,0,0.5)';
		blocker.style.cursor = 'pointer';
		dom.appendChild( blocker );
		
		nbVideo++;

		// Méthode qui retourne un objet qui pourra être placé dans la scène
		var object = new THREE.CSS3DObject( dom );

		object.playing = false;
		object.idPosition = nbVideo;
		
		// Positionnement du projet en fonction du nombre de projet
		object.position.x = 500 - (((nbVideo%2))*1000);
		object.position.y = 800-(Math.floor(nbVideo/3) * 950);
		object.position.z =-1900;
		
		object.originalX = object.position.x;
		
		button.style.visibility = 'visible';

		blocker.addEventListener( 'mouseover', function () {

			button.style.WebkitFilter = '';
			blocker.style.background = 'rgba(0,0,0,0)';

		}, false );

		blocker.addEventListener( 'mouseout', function () {

			button.style.WebkitFilter = 'grayscale()';
			blocker.style.background = 'rgba(0,0,0,0.75)';

		}, false );
		
		// Appelé lorsque l'utilisateur clique sur le texte descriptif du projet
		// On met donc la variable "videoCanBack" à false pour que le projet ne retourne pas
		// à sa position initial
		dom.addEventListener( 'click', function ( event ) 
		{
			videoCanBack = false;
		}, false );

		// Event lorsque l'utilisateur clique sur le projet
		blocker.addEventListener( 'click', function ( event ) 
		{
			event.stopPropagation();
			
			button.style.visibility = 'hidden';

			// On cache toute l'interface
			hiddenInterface();
			
			// On place le bouton X
			xButtomInter.position.x = object.position.x + 1250;
			xButtomInter.position.y = object.position.y + 250;
			
			auto = false;

			if ( player !== undefined ) {

				player.parentNode.removeChild( player );
				player = undefined;

			}

			// On paramètre la video/player 
			player = document.createElement( 'iframe' );
			player.style.position = 'absolute';
			player.style.width = '960px';
			player.style.height = '720px';
			player.style.border = '0px';
			player.src = 'http://www.youtube.com/embed/' + entry.id.$t.split( ':' ).pop() + '?rel=0&autoplay=1&controls=1&showinfo=0';
			player.empty = false;
			
			this.appendChild( player );
			
			object.playing = true;
			
			// On stock dans la variable "imageToClone" la division qui contient le titre du projet, pour par la suite remplacer
			// cette division par le texte descriptif du projet
			imageToClone = dom.childNodes[1].cloneNode(true);
			
			// On supprime le titre du projet
			dom.childNodes[1].remove();
			divDescripProject.style.visibility="visible";
			
			// On stock dans la variable une référence sur le projet sélectionné
			refDomProjectFront = dom;
			
			var prev = object.position.z + 800;

			// On déplace la camera
			new TWEEN.Tween( camera.position )
				.to( { x: object.position.x, y: object.position.y - 105 }, 0 )
				.easing( TWEEN.Easing.Exponential.Out )
				.start();

			// On déplace le projet à afficher
			new TWEEN.Tween( { value: prev } )
				.to( { value: 0  }, 1000 )
				.onUpdate( function () {
					move( this.value - prev );
					prev = this.value;
		
				} )
				.easing( TWEEN.Easing.Exponential.Out )
				.start();
				
				// On appelle la méthode qui permet de cacher tous les projets non afficher
				hiddenUnplayedVideo();

		}, false );

		// Méthode pour cacher la division dom
		object.hiddenObject = function ()
		{
			dom.style.visibility="hidden";
			button.style.visibility = 'hidden';
		}
		
		// Méthode pour afficher la division dom
		object.showObject = function ()
		{
			dom.style.visibility="visible";
			button.style.visibility = 'visible';
		}
		
		return object;

	};
	
	// Méthode qui retourne un projet sans video mais contenant une image et un texte descriptif
	function addEmptyProjet(idRecu) 
	{
		var textTitleProjet =document.createElement("div");
		var textTypeProjet =document.createElement("div");
		
		textTitleProjet.style.fontSize = "80px";
		textTypeProjet.style.fontSize = "50px";
		textTypeProjet.style.color = "#848484";
		
		var divDescripProject = document.createElement( 'div' );
		divDescripProject.style.backgroundColor= "black";
		divDescripProject.align = 'left';
		divDescripProject.id = "divInfoGame";
		divDescripProject.style.visibility="hidden";
		
		var textProject = document.createElement( 'gameInfo' );
		
		var titleProject = document.createElement( 'titleGame' );
		titleProject.align = 'right';
		

		var dom = document.createElement( 'div' );
		dom.style.width = '960px';
		dom.style.height = '960px';

		
		titleProject.appendChild(document.createTextNode("Concours Ubisoft ( en cours )")); 
		textProject.appendChild(titleProject); 			
		textProject.appendChild(document.createElement( 'br' )); 
		textProject.appendChild(document.createElement( 'br' )); 
		
		
		textProject.appendChild(document.createTextNode("Concours universitaire organisé par Ubisoft Montréal pour l'hiver 2015. L'objectif du "+
														"concours est de créer en 10 semaines un prototype de jeu vidéo 3D qui doit répondre "+
														"à des critères (thème, contrainte) bien précis. Le tout est fait avec une équipe multidisciplinaire de 8 membres."));  
		textProject.appendChild(document.createElement( 'br' ));  
		textProject.appendChild(document.createElement( 'br' )); 
		textProject.appendChild(document.createElement( 'br' ));			

		textProject.appendChild(document.createTextNode("Équipe constituée: "));  
		textProject.appendChild(document.createElement( 'br' ));

		textProject.appendChild( document.createTextNode("- 4 programmeurs de l'Université du Québec à Chicoutimi"));  
		textProject.appendChild(document.createElement( 'br' ));

		textProject.appendChild(document.createTextNode("- 4 artistes du centre NAD"));  
		textProject.appendChild(document.createElement( 'br' )); 	 
		textProject.appendChild(document.createElement( 'br' )); 	
		textProject.appendChild(document.createElement( 'br' )); 	
		textProject.appendChild(document.createElement( 'br' )); 	
		
		divDescripProject.appendChild( textProject );
		
		
		dom.appendChild( divDescripProject );
					
		textTitleProjet.style.textAlign = "center";
		textTitleProjet.appendChild(document.createTextNode("UBISOFT MTL - 2015")); 
		textTitleProjet.style.color = "#FFFFFF";
		textTitleProjet.id = "textClone";
		
		textTypeProjet.style.textAlign = "center";
		textTypeProjet.appendChild(document.createTextNode("Concours Ubisoft")); 
		textTitleProjet.appendChild(textTypeProjet);
		dom.appendChild(textTitleProjet);
		
		
		var image = document.createElement( 'img' );
		image.id = "youtubeImg";
		image.style.position = 'absolute';
		image.style.width = '960px';
		image.style.height = '600px';
		image.style.marginTop = "32px";
		image.src = "images/ubiProjet.png";
		dom.appendChild( image );

		var blocker = document.createElement( 'div' );
		blocker.style.position = 'absolute';
		blocker.style.width = '960px';
		blocker.style.height = '720px';
		blocker.style.background = 'rgba(0,0,0,0.5)';
		blocker.style.cursor = 'pointer';
		dom.appendChild( blocker );
		

		var object = new THREE.CSS3DObject( dom );

		object.playing = false;
		
		if(idRecu == undefined)
		{
			nbVideo++
			object.idPosition = nbVideo;
		}
		else
		{
			object.idPosition = idRecu;
		}
		
		object.position.x = 500 - (((object.idPosition%2))*1000);
		object.position.z = -1900;
		object.position.y = 1000-(Math.floor(object.idPosition/3) * 1150);
		object.originalX = object.position.x;


		object.hiddenObject = function ()
		{
			dom.style.visibility="hidden";
		}
		
		object.showObject = function ()
		{
			dom.style.visibility="visible";
		}
		
		blocker.addEventListener( 'mouseover', function () 
		{
			if(object.playing == false)
			{
				blocker.style.background = 'rgba(0,0,0,0)';
			}

		}, false );

		blocker.addEventListener( 'mouseout', function () 
		{
			if(object.playing == false)
			{
				blocker.style.background = 'rgba(0,0,0,0.75)';
			}

		}, false );

		
		// Appelé lorsque l'utilisateur clique sur le texte descriptif du projet
		// On met donc la variable "videoCanBack" à false pour que le projet ne retourne pas
		// à sa position initial
		dom.addEventListener( 'click', function ( event ) 
		{
			videoCanBack = false;
		}, false );
		
		// Semblable à la méthode plus haut qui retourne un projet contenant une video
		blocker.addEventListener( 'click', function ( event ) 
		{
			if(object.playing == false)
			{
				event.stopPropagation();
				hiddenInterface();
				
				auto = false;
			
				object.playing = true;
				
				imageToClone = dom.childNodes[1].cloneNode(true);
				
				dom.childNodes[1].remove();
				divDescripProject.style.visibility="visible";
				refDomProjectFront = dom;
				
				xButtomInter.position.x = object.position.x + 1250;
				xButtomInter.position.y = object.position.y + 250;
				
				var prev = object.position.z + 800;
				
				blocker.style.background = 'rgba(0,0,0,0.75)';

				new TWEEN.Tween( camera.position )
					.to( { x: object.position.x, y: object.position.y - 105 }, 0 )
					.easing( TWEEN.Easing.Exponential.Out )
					.start();

				new TWEEN.Tween( { value: prev } )
					.to( { value: 0  }, 1000 )
					.onUpdate( function () {
						move( this.value - prev );
						prev = this.value;
			
					} )
					.easing( TWEEN.Easing.Exponential.Out )
					.start();
					
					hiddenUnplayedVideo();
			}
		}, false );
		
		return object;

	};	