
	// M�thode qui retourne un objet qui pourra �tre utilis� pour l'affichage du C.V ou de
	// la page "contact" 
	function addPageInfo(idPage) 
	{
		var dom = document.createElement( 'div' );
		var divPage = document.createElement( 'div' );
		
		var blueTitle;

		var textElement;
		var text;

		if(idPage == 1)
		{
			textElement = document.createElement( 'cvDiv' );
			
			blueTitle = document.createElement( 'titleBlueInfo' );
			blueTitle.appendChild(document.createTextNode("Comp�tences professionnelles"));  
			textElement.appendChild(blueTitle);
			
			textElement.appendChild(document.createElement( 'br' )); 
			textElement.appendChild(document.createElement( 'br' )); 
			
			text = document.createElement( 'tabInfo' );
			text.appendChild(document.createTextNode("- Travaillant")); 
			text.appendChild(document.createElement( 'br' ));  
			textElement.appendChild(text);
			
			text = document.createElement( 'tabInfo' );
			text.appendChild(document.createTextNode("- Pers�v�rant")); 
			text.appendChild(document.createElement( 'br' ));  
			textElement.appendChild(text);
			
			text = document.createElement( 'tabInfo' );
			text.appendChild(document.createTextNode("- Autonome")); 
			text.appendChild(document.createElement( 'br' ));  
			textElement.appendChild(text);
			
			text = document.createElement( 'tabInfo' );
			text.appendChild(document.createTextNode("- Responsable")); 
			text.appendChild(document.createElement( 'br' ));  
			textElement.appendChild(text);
			
			text = document.createElement( 'tabInfo' );
			text.appendChild(document.createTextNode("- Esprit d'�quipe")); 
			text.appendChild(document.createElement( 'br' ));  
			textElement.appendChild(text);
			
			textElement.appendChild(document.createElement( 'br' )); 
			
			
			blueTitle = document.createElement( 'titleBlueInfo' );
			blueTitle.appendChild(document.createTextNode("Formations"));  
			textElement.appendChild(blueTitle);
			
			textElement.appendChild(document.createElement( 'br' )); 
			textElement.appendChild(document.createElement( 'br' )); 
			
			text = document.createElement( 'tabInfo' );
			text.appendChild(document.createTextNode("- Baccalaur�at en Conception de Jeux Vid�o (2013-2015 (attendu))")); 
			text.appendChild(document.createElement( 'br' ));  
			textElement.appendChild(text);
			
			text = document.createElement( 'sousInfo' );
			text.appendChild(document.createTextNode("UQAC, Universit� du Qu�bec � Chicoutimi")); 
			text.appendChild(document.createElement( 'br' ));  
			textElement.appendChild(text);
			
			textElement.appendChild(document.createElement( 'br' )); 
			
			text = document.createElement( 'tabInfo' );
			text.appendChild(document.createTextNode("- DEC Informatique de gestion (2009-2012)")); 
			text.appendChild(document.createElement( 'br' ));  
			textElement.appendChild(text);
			
			text = document.createElement( 'sousInfo' );
			text.appendChild(document.createTextNode("C�gep de Chicoutimi")); 
			text.appendChild(document.createElement( 'br' ));  
			textElement.appendChild(text);
			
			textElement.appendChild(document.createElement( 'br' )); 
			
			text = document.createElement( 'tabInfo' );
			text.appendChild(document.createTextNode("- Dipl�me d'�tudes secondaires (2004-2009)")); 
			text.appendChild(document.createElement( 'br' ));  
			textElement.appendChild(text);
			
			text = document.createElement( 'sousInfo' );
			text.appendChild(document.createTextNode("�cole Secondaire Charles-Gravel, Chicoutimi")); 
			text.appendChild(document.createElement( 'br' ));  
			textElement.appendChild(text);
			
			textElement.appendChild(document.createElement( 'br' )); 
			
			blueTitle = document.createElement( 'titleBlueInfo' );
			blueTitle.appendChild(document.createTextNode("Exp�riences Professionnelles"));  
			textElement.appendChild(blueTitle);
			
			textElement.appendChild(document.createElement( 'br' )); 
			textElement.appendChild(document.createElement( 'br' )); 
			
			text = document.createElement( 'tabInfo' );
			text.appendChild(document.createTextNode("-Ferme Pedneault & Fils (2006-Pr�sentement)")); 
			text.appendChild(document.createElement( 'br' ));  
			textElement.appendChild(text);
			
			text = document.createElement( 'sousInfo' );
			text.appendChild(document.createTextNode("Travail en tout genre sur une ferme  (418) 592-7915")); 
			text.appendChild(document.createElement( 'br' ));  
			textElement.appendChild(text);
			
			textElement.appendChild(document.createElement( 'br' )); 
			
			blueTitle = document.createElement( 'titleBlueInfo' );
			blueTitle.appendChild(document.createTextNode("Langages"));  
			textElement.appendChild(blueTitle);
			
			textElement.appendChild(document.createElement( 'br' )); 
			textElement.appendChild(document.createElement( 'br' )); 
			
			text = document.createElement( 'tabInfo' );
			text.appendChild(document.createTextNode("- Francais & Anglais")); 
			text.appendChild(document.createElement( 'br' ));  
			textElement.appendChild(text);
			
			text = document.createElement( 'tabInfo' );
			text.appendChild(document.createTextNode("- Langages de programmation: C++,C#,Java,UnrealScript,JavaScript,WebGL")); 
			text.appendChild(document.createElement( 'br' ));  
			textElement.appendChild(text);
			
			text = document.createElement( 'tabInfo' );
			text.appendChild(document.createTextNode("- Connaissance des outils: Visual Studio, Eclipse, Unreal Engine 3 & 4, Unity 3D, Perforce")); 
			text.appendChild(document.createElement( 'br' ));  
			textElement.appendChild(text);
			
			textElement.appendChild(document.createElement( 'br' )); 
			
			blueTitle = document.createElement( 'titleBlueInfo' );
			blueTitle.appendChild(document.createTextNode("Loisirs et champs d'int�r�t"));  
			textElement.appendChild(blueTitle);
			
			textElement.appendChild(document.createElement( 'br' )); 
			textElement.appendChild(document.createElement( 'br' )); 
			
			text = document.createElement( 'tabInfo' );
			text.appendChild(document.createTextNode("- Jeux vid�o")); 
			text.appendChild(document.createElement( 'br' ));  
			textElement.appendChild(text);
			
			text = document.createElement( 'tabInfo' );
			text.appendChild(document.createTextNode("- Technologie en g�n�ral")); 
			text.appendChild(document.createElement( 'br' ));  
			textElement.appendChild(text);
			
			text = document.createElement( 'tabInfo' );
			text.appendChild(document.createTextNode("- S�ries t�l�vis�es")); 
			text.appendChild(document.createElement( 'br' ));  
			textElement.appendChild(text);
			
			dom.style.visibility="hidden";
		}
		else if(idPage == 2)
		{
			var accueilRef;
			var accueilMyName;
			var lien;
		
			textElement = document.createElement( 'contactDiv' );
			text = document.createElement( 'div' );
			accueilRef = document.createElement( 'div' );
			accueilMyName = document.createElement( 'div' );
			
			accueilMyName.style.fontStyle="italic";
			
			text.style.width = '1620px';
			text.style.height = '460px';
			text.style.fontSize = "45px";

						
			accueilMyName.style.color = "#FFFFFF";
			
			accueilRef.style.width = '1620px';
			accueilRef.style.height = '460px';
			accueilRef.style.fontSize = "40px";
			accueilRef.style.marginTop = "120px";
			
			blueTitle = document.createElement( 'titleBlueInfo' );
			blueTitle.style.fontSize = "45px";
			blueTitle.appendChild(document.createTextNode("Bienvenue sur mon site"));  
			textElement.appendChild(blueTitle);
			
			text.appendChild(document.createElement( 'br' )); 
			text.appendChild(document.createElement( 'br' ));  	
			text.appendChild(document.createTextNode("Mon nom est Patrice Pedneault et j'en suis pr�sentement � ma derni�re session � l'Universit� du Qu�bec "+
																					"� Chicoutimi en Baccalaur�at en Conception de Jeux Vid�o. Pour la fin de mes �tudes, je suis pr�sentement � la recherche "+
																					"d'un stage pour le mois de mai dans une entreprise de jeux vid�o. J'adore tout ce qui touche � la programmation " +
																					"et au monde du jeu vid�o.")); 

			text.appendChild(document.createElement( 'br' ));  
			text.appendChild(document.createElement( 'br' ));
			
			text.appendChild(document.createTextNode("Vous trouverez sur ce site mon curriculum vitae et les informations pour me rejoindre. Vous retrouvez dans l'onglet "+
																				   "'Projets' les vid�os des projets que j'ai r�alis� au fil des ann�es ."));

			text.appendChild(document.createElement( 'br' ));  
			text.appendChild(document.createElement( 'br' ));
			
			text.appendChild(document.createTextNode("De plus, il est bon de souligner que le site ci-pr�sent "+
																				   "a �t� fait par moi-m�me en WebGL et Javascript.")); 																				   

			text.appendChild(document.createElement( 'br' )); 
			text.appendChild(document.createElement( 'br' ));  
			
			text.appendChild(document.createTextNode("Merci et bonne navigation")); 
			text.appendChild(document.createElement( 'br' ));  
			text.appendChild(document.createElement( 'br' ));  
			
			
			accueilMyName.appendChild(document.createTextNode("Patrice Pedneault")); 
			text.appendChild(accueilMyName);
			
			text.appendChild(document.createElement( 'br' )); 
			text.appendChild(document.createElement( 'br' )); 
			text.appendChild(document.createElement( 'br' )); 			


			blueTitle = document.createElement( 'titleBlueInfo' );
			blueTitle.style.fontSize = "45px";
			blueTitle.appendChild(document.createTextNode("Pour plus d'information sur moi ou pour me rejoindre"));  
			text.appendChild(blueTitle);
			
			
			text.appendChild(document.createElement( 'br' )); 
			text.appendChild(document.createElement( 'br' )); 
			
			text.appendChild(document.createTextNode("- Email: patrice_pedneault@live.ca"));
			text.appendChild(document.createElement( 'br' )); 
			
			text.appendChild(document.createTextNode("- T�l�phone: 581-235-2903 "));
			text.appendChild(document.createElement( 'br' )); 
			
			
			text.appendChild(document.createTextNode("- Linkedin: "));
			
			lien = document.createElement( 'a' );
			lien.innerHTML = 'www.linkedin.com';
			lien.setAttribute('title', 'Linkedin');
			lien.setAttribute('target', 'newwindow1');
			lien.setAttribute('href', 'https://ca.linkedin.com/pub/patrice-pedneault/a7/2ab/42a');
			text.appendChild(lien);
			

			text.appendChild(document.createElement( 'br' )); 
			
			text.appendChild(document.createTextNode("- GitHub: "));
			
			lien = document.createElement( 'a' );
			lien.innerHTML = 'www.github.com';
			lien.setAttribute('title', 'GitHub');
			lien.setAttribute('target', 'newwindow2');
			lien.setAttribute('href', 'https://github.com/PatricePedneault?tab=repositories');
			text.appendChild(lien);
			
			accueilRef.appendChild(document.createTextNode( " ( Librairie utilis�e: " ));
			
			lien = document.createElement( 'a' );
			lien.style.textDecoration="none";
			lien.innerHTML = 'three.js';
			lien.style.color = "#424242";
			lien.setAttribute('target', 'newwindow3');
			lien.setAttribute('title', 'http://threejs.org/');
			lien.setAttribute('href', 'http://threejs.org/');	
			accueilRef.appendChild(lien);
			
			accueilRef.appendChild(document.createTextNode(". Id�e bas� sur: ")); 
			
			lien = document.createElement( 'a' );
			lien.style.textDecoration="none";
			lien.style.color = "#424242";
			lien.innerHTML = 'exemple';
			lien.setAttribute('target', 'newwindow4');
			lien.setAttribute('title', 'http://threejs.org/examples/');
			lien.setAttribute('href', 'http://threejs.org/examples/');	
			accueilRef.appendChild(lien);
			
			accueilRef.appendChild(document.createTextNode(". Aide design: ")); 
			
			lien = document.createElement( 'a' );
			lien.style.textDecoration="none";
			lien.style.color = "#424242";
			lien.setAttribute('target', 'newwindow5');
			lien.innerHTML = 'Jahanzaib Chughtai ';
			lien.setAttribute('title', 'http://jzchughtai.dunked.com/');
			lien.setAttribute('href', 'http://jzchughtai.dunked.com/');	
			accueilRef.appendChild(lien);
			accueilRef.appendChild(document.createTextNode(" )")); 
			
			
			text.appendChild(accueilRef);
			
			textElement.appendChild(text);
			
		}
		
		textElement.appendChild(document.createElement( 'br' ));  	
		textElement.appendChild(document.createElement( 'br' ));  	
		
	
		divPage.style.width = '1800px';
		divPage.style.height = '1675px';
		divPage.style.backgroundRepeat="repeat-y";
		divPage.style.backgroundSize="1800px 1675px"
		divPage.style.backgroundImage="url('images/pageoOngletBackground.png')";
		divPage.appendChild( textElement );
		dom.appendChild( divPage );

		var object = new THREE.CSS3DObject( dom );
	
		// Positionnement hors de l'�cran au d�part
		object.position.x = 0;
		object.position.y = -2200;
		object.position.z = -1701;
		object.onFront = false;
		
		dom.addEventListener( 'click', function ( event ) 
		{
			outClick = false;
		}, false );
		
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