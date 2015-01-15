
	// Méthode qui retourne un objet qui sera utilisé pour le bouton X lorsqu'un projet est sélectionné
	function addXButtom() 
	{
		var dom = document.createElement( 'div' );

		var imageButton=document.createElement("img");
		imageButton.setAttribute('src', 'images/xButton.png');
			

		dom.appendChild( imageButton );
		
		imageButton.style.width = '200px';
		imageButton.style.height = '150px';
		
		dom.style.visibility="hidden";

		
		var object = new THREE.CSS3DObject( dom );

		object.position.x = projetOng.position.x + 250;
		object.position.y = 1000;
		object.position.z = -1900;

		
		object.hiddenObject = function ()
		{
			dom.style.visibility="hidden";
		}
		
		object.showObject = function ()
		{
			dom.style.visibility="visible";
		}
		
		return object;
	}
	
	// Méthode qui retourne l'objet pour l'affichage de mon nom en haut à gauche
	 function addMyNameObject() 
	{
		var dom = document.createElement( 'div' );
		var nameText = document.createElement( 'div' );
		var jobText = document.createElement( 'div' );

		nameText.style.color = "#0080FF";
		nameText.style.fontSize = "105px";
		
		jobText.style.color = "#FFFFFF";
		jobText.style.fontSize = "70px";
		jobText.style.textAlign = "center";
		
		nameText.appendChild(document.createTextNode("PATRICE PEDNEAULT")); 
		nameText.appendChild(document.createElement( 'br' )); 
		
		jobText.appendChild(document.createTextNode("Programmeur|Jeux Video")); 

		nameText.appendChild( jobText );
		dom.appendChild( nameText );
		
		var object = new THREE.CSS3DObject( dom );

		object.position.x = -650;
		object.position.y = 1170;
		object.position.z =-1900;
		
		object.hiddenObject = function ()
		{
			dom.style.visibility="hidden";
		}
		
		object.showObject = function ()
		{
			dom.style.visibility="visible";
		}
		
		return object;
	}
	
	// Méthode qui retourne l'objet contenant l'image bleu de soulignement des onglets
	function addUnderLineOnglet() 
	{
		var image =document.createElement("img");
		var dom = document.createElement( 'div' );

		image.style.width = '1200px';
		image.style.height = '25px';
		
		image.setAttribute('src', 'images/underLine.png');
		dom.appendChild( image );
		
		var object = new THREE.CSS3DObject( dom );

		object.position.x = projetOng.position.x + 420;
		object.position.y = 1100;
		object.position.z =-1900;
		
		object.hiddenObject = function ()
		{
			dom.style.visibility="hidden";
		}
		
		object.showObject = function ()
		{
			dom.style.visibility="visible";
		}
		
		return object;
	}
	
	// Méthode qui retourne un objet qui sera utilisé comme onglet dans la site
	function addNewOnglet(idTypeOnglet) 
	{
	
		var dom = document.createElement( 'div' );
		var text = document.createElement( 'div' );
		var object = new THREE.CSS3DObject( dom );
		
		dom.appendChild( text );
		
		text.style.color = "#FFFFFF";
		text.style.fontSize = "70px";
		text.style.cursor="pointer";
		
		object.position.y = 750;
		object.position.z = -1200;
		
		
		switch(idTypeOnglet) 
		{
			// Projet Onglet
		   case 1:
				{

					text.style.color = "#0080FF";
					text.appendChild(document.createTextNode("Projets")); 

					object.position.x = 100;

					// Si l'onglet est cliqué, on déplace s'il y a lieu la page afficher sur le devant, on change 
					// la couleur du texte de l'onglet pour bleu et on appelle la méthode de chaque onglet pour 
					// désélectionner ceux-ci (unSelect())
					dom.addEventListener( 'click', function ( event ) 
					{
						if(moveFront == null)
						{
							text.style.color = "#0080FF";
							contactOng.unSelect();
							cvOng.unSelect();
							
							// On stock dans la variable la référence contenu dans la variable "frontPage" 
							// ainsi la page sur le devant sera déplacé
							moveOut = frontPage;
						}
						
					}, false );

					object.select = function ()
					{
						text.style.color = "#0080FF";
					}
					
					break;
				}
				
			// C.V Onglet
			case 2:
				{
					text.appendChild(document.createTextNode("C.V")); 

					object.position.x = projetOng.position.x + 220;
					
					// Si l'onglet est cliqué, on déplace s'il y a lieu la page afficher sur le devant pour mettre la page de C.V
					// sur le devant, on change la couleur du texte de l'onglet pour bleu et on appelle la méthode de chaque onglet
					// non sélectionnées pour désélectionner ceux-ci (unSelect())
					dom.addEventListener( 'click', function ( event ) 
					{
						if(moveFront == null)
						{
							if(frontPage != pageCV )
							{
								text.style.color = "#0080FF";
								contactOng.unSelect();
								projetOng.unSelect();
								
								moveFront = pageCV;
								pageCV.showObject();
								
								// On stock dans la variable la référence contenu dans la variable "frontPage" 
								// ainsi la page sur le devant sera déplacé
								moveOut = frontPage;
								outClick = false;
							}
							else
							{
								text.style.color = "#FFFFFF";
								
								// Meme chose que plus haut
								moveOut = frontPage;
								projetOng.select();
							}
						}
					}, false );
					
					break;
				}
				
			// Contact Onglet
			case 3:
				{
					text.appendChild(document.createTextNode("Contact")); 

					object.position.x = projetOng.position.x + 440;


					// Si l'onglet est cliqué, on déplace s'il y a lieu la page afficher sur le devant pour mettre la page de contact
					// sur le devant, on change la couleur du texte de l'onglet pour bleu et on appelle la méthode de chaque onglet
					// non sélectionnées pour désélectionner ceux-ci (unSelect())
					dom.addEventListener( 'click', function ( event ) 
					{
						if(moveFront == null)
						{
							if(frontPage != pagePropos)
							{
								text.style.color = "#0080FF";
								projetOng.unSelect();
								cvOng.unSelect();
							
								moveFront = pagePropos;
								pagePropos.showObject();
								
								// On stock dans la variable la référence contenu dans la variable "frontPage" 
								// ainsi la page sur le devant sera déplacé
								moveOut = frontPage;
								outClick = false;
							}
							else
							{
								text.style.color = "#FFFFFF";
								
								// Meme chose que plus haut
								moveOut = frontPage;
								projetOng.select();
							}
						}
					
					}, false );
					
					break;
				}
		}
	
		object.hiddenObject = function ()
		{
			dom.style.visibility="hidden";
		}

		object.showObject = function ()
		{
			dom.style.visibility="visible";
		}

		object.unSelect = function ()
		{
			text.style.color = "#FFFFFF";
		}
		
		return object;
	};
	
	// Méthode qui retourne un objet contenant le texte de droit qui sera affiché en bas du site
	function addBottomText() 
	{
		var dom = document.createElement( 'div' );
		var text = document.createElement( 'div' );
		var courrielText = document.createElement( 'div' );
		var courriel = document.createElement( 'span' );
		
		text.style.color = "#585858";
		courrielText.style.color = "#585858";
		text.style.fontSize = "35px";
		
		courriel.style.color = "#BDBDBD";
		
		text.appendChild(document.createTextNode("© 2015 Tous droits réservés | Patrice Pedneault")); 
		text.appendChild(document.createElement( 'br' )); 
		
		courrielText.style.marginLeft = "4em";
		courrielText.appendChild(document.createTextNode("Courriel: ")); 
		courriel.innerHTML = 'patrice_pedneassult@live';

		
		courrielText.appendChild( courriel );
		text.appendChild( courrielText );
		dom.appendChild( text );

		var object = new THREE.CSS3DObject( dom );

		object.position.x = 0;
		object.position.y = -1100;
		object.position.z = -1799;
		
		object.hiddenObject = function ()
		{
			dom.style.visibility="hidden";
		}
		
		object.showObject = function ()
		{
			dom.style.visibility="visible";
		}
		
		return object;
	};