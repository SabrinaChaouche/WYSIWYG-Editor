function conversion(){
		$("#code").html($("#saisie").html());
		var stack = [];
		var a = document.getElementById("code");
		var br = a.querySelectorAll("br");
		$(br).remove();		
		var child = a.firstElementChild;
		
		while((child)||(stack!=='')){
			while(child){
				stack.push(child);
				child = child.firstElementChild;
			}
			child = stack.pop();
			var x = child.nextElementSibling;
			
			
			if (child.tagName.toLowerCase()==='p'){
				var parent = $(child).parent();
				var align = $(child).attr("align");
				
				if(align){
					var alignement ="";
					if (align ==="left") alignement = "g";
					else if (align ==="right") alignement = "d";
					else if (align ==="center") alignement = "c";
					else if (align ==="justify") alignement = "j";
					
					var grandparent = $(parent).attr("id");
					if(grandparent === "code") $(child).replaceWith("-p["+(child.innerHTML)+"|"+alignement+"]<br>");
					else $(child).replaceWith("-getp["+(child.innerHTML)+"|"+alignement+"]");
					
				}else{
					 if ($(parent).attr("id") ==="code") $(child).replaceWith("-p["+(child.innerHTML)+"]<br>");
					 else $(child).replaceWith("-getp["+(child.innerHTML)+"]");
				}
			}
			else if(((child.tagName.toLowerCase()==='b')&&(!($(child).hasClass("pic"))))||(child.tagName.toLowerCase()==='strong')){
				$(child).replaceWith("-g["+child.innerHTML+"]");
			}else if(((child.tagName.toLowerCase()==='i')&&(!($(child).hasClass("pic"))))||(child.tagName.toLowerCase()==='em')){
				$(child).replaceWith("-i["+child.innerHTML+"]");
			}else if (child.tagName.toLowerCase()==='u'){
				$(child).replaceWith("-s["+child.innerHTML+"]");
			}else if (child.tagName.toLowerCase()==='font'){
				var color = child.color;
				var size = child.size;
				
				if(color!==""){
					if(size!==""){
						$(child).replaceWith("<div class='new'>-couleur["+child.innerHTML+"|"+child.color+"]</div>");
					}else{
						$(child).replaceWith("-couleur["+child.innerHTML+"|"+child.color+"]");
					}
				}
				if(size!==""){
					if(color!=""){
						var div =$(".new");
						$(div).replaceWith("-taille["+div.html()+"|"+size+"]");
					}else $(child).replaceWith("-taille["+child.innerHTML+"|"+child.size+"]");
				}
				
			}else if(child.tagName.toLowerCase()==='ul'){
				var liste = $(child).children();
				var parent = $(child).parent().attr("id");
				
				var danyaliste = "";
				if (liste.length ===1){
					if(parent ==="code") danyaliste += "-puce["+liste[0].innerHTML+"]<br>";
					else danyaliste += "-getpuce["+liste[0].innerHTML+"]<br>";
				}else{
					for (var i = 0; i<liste.length; i++){
						if(i===0){
							if(parent ==="code") danyaliste += "-puce["+liste[i].innerHTML+"|";
							else danyaliste += "-getpuce["+liste[i].innerHTML+"|";
						}else if (i===(liste.length - 1)){
							danyaliste +=  liste[i].innerHTML+"]<br>";
						}else{
							danyaliste +=  liste[i].innerHTML+"|";
						}
					}
				}
				$(child).replaceWith(danyaliste);
			}else if(child.tagName.toLowerCase()==='ol'){
				var liste = $(child).children();
				var parent = $(child).parent().attr("id");
				
				var danyaliste = "";
				if (liste.length ===1){
					if(parent ==="code") danyaliste += "-num["+liste[0].innerHTML+"]<br>";
					else danyaliste += "-getnum["+liste[0].innerHTML+"]<br>";
				}else{
					for (var i = 0; i<liste.length; i++){
						if(i===0){
							if(parent ==="code") danyaliste += "-num["+liste[i].innerHTML+"|";
							else danyaliste += "-getnum["+liste[i].innerHTML+"|";
						}else if (i===(liste.length - 1)){
							danyaliste +=  liste[i].innerHTML+"]<br>";
						}else{
							danyaliste +=  liste[i].innerHTML+"|";
						}
					}
				}
				$(child).replaceWith(danyaliste);
			}else if((child.tagName.toLowerCase()==='table')&&($(child).hasClass("tableau"))){
				
				var nbcol = child.rows[0].cells.length;
			    var tab_danya = '';
			   
					for (var i = 0, row; row = child.rows[i]; i++) {
						if (row.cells.length ===1){
							if (i === 0){
									tab_danya += '-entetetable['+row.cells[0].innerHTML+':'+row.cells[0].style.width+']<br>';
							}else{
									tab_danya += '-lignetable['+row.cells[0].innerHTML+']<br>';
							}
						}else{
							if (i === 0){
								for (var j = 0, col; col = row.cells[j]; j++) {
									var taille = parseInt(col.style.width);
									if (j === 0){
										tab_danya += '-entetetable['+col.innerHTML+':'+taille+'|';
									}
									else{
										if(j === (nbcol-1)){
											tab_danya += col.innerHTML+':'+taille+']<br>';
										}
										else tab_danya += col.innerHTML+':'+taille+'|';
									}                              
								}
						   }
						   else{
							   for (var j = 0, col; col = row.cells[j]; j++) {
								   if (j === 0){
										tab_danya += '-lignetable['+col.innerHTML+'|';
									}
									else{
										if(j === (nbcol-1)){
											tab_danya += col.innerHTML+']<br>';
										}
										else tab_danya += col.innerHTML+'|';
									}
								}
						   }
						}
					}
					if($(child).parent().attr("id") ==="code"){
						tab_danya += '-affichertable<br>';
						$(child).replaceWith(tab_danya);
					}
					else{
						var inser = child;
						while(inser.parentElement.id !== "code"){
							
							inser = inser.parentElement;
						}
						$(inser).before(tab_danya);
						$(child).replaceWith('-gettable<br>');
					}
			}else if((child.tagName.toLowerCase()==='div')&&($(child).hasClass("definition"))){
				var supprim = child.firstElementChild.firstElementChild;
				
				$(supprim).remove();
				$(child).replaceWith("-definition["+child.textContent+"]<br>");
			}else if((child.tagName.toLowerCase()==='div')&&($(child).hasClass("note"))){
				var supprim = child.firstElementChild.firstElementChild;
				
				$(supprim).remove();
				$(child).replaceWith("-note["+child.textContent+"]<br>");
			}else if((child.tagName.toLowerCase()==='div')&&($(child).hasClass("alerte"))){
				var supprim = child.firstElementChild.firstElementChild;
				
				$(supprim).remove();
				$(child).replaceWith("-alerte["+child.textContent+"]<br>");
			}else if((child.tagName.toLowerCase()==='div')&&($(child).hasClass("observation"))){
				var supprim = child.firstElementChild.firstElementChild;
				
				$(supprim).remove();
				$(child).replaceWith("-observation["+child.textContent+"]<br>");
			}else if((child.tagName.toLowerCase()==='div')&&($(child).hasClass("regle"))){
				var supprim = child.firstElementChild.firstElementChild;
				
				$(supprim).remove();
				$(child).replaceWith("-regle["+child.textContent+"]<br>");
			}else if((child.tagName.toLowerCase()==='div')&&($(child).hasClass("forme"))){
				var supprim = child.firstElementChild.firstElementChild;
				var entete = $(supprim).text();
				$(supprim).remove();
				$(child).replaceWith("-form["+child.textContent+"|"+entete+"]<br>");
			}else if((child.tagName.toLowerCase()==="a")&&($(child).hasClass("fichier"))){
				var href = child.href;
				var nom = child.textContent;
				var telecharger = '-telecharger['+href+'|'+nom+']<br>';
				$(child).replaceWith(telecharger);
			}else if ($(child).hasClass("post")){
				
				var cells = child.querySelectorAll('td');
				
				var taille = cells.length;
				var post = "";
				for (var i = 0 ; i<taille ; i++){
					var p = cells[i].lastElementChild.firstElementChild.textContent;
					
					var href = cells[i].lastElementChild.href;
					
					var img = cells[i].firstElementChild.src;
					
					post += "-post["+p+"|"+href+"|"+img+"]<br>";
					
				}
				var text = child.firstElementChild.firstElementChild.textContent;
				post += "-afficherpost["+text+"]<br>";
				$(child).replaceWith(post);
			}else if($(child).hasClass("-titre")){
				
				var align = $(child).attr("align");
				var nom = child.tagName.toLowerCase();
	
				if (align){
					if (align ==="left"){
						if (nom==="h3"){
							$(child).replaceWith("-titre["+child.innerHTML+"|g]<br>");
						}else if (nom==="h4"){
							$(child).replaceWith("-titre2["+child.innerHTML+"|g]<br>");
						}else if (nom==="h5"){
							$(child).replaceWith("-titre3["+child.innerHTML+"|g]<br>");
						}
					}else if (align==="right"){
						if (nom==="h3"){
							$(child).replaceWith("-titre["+child.innerHTML+"|d]<br>");
						}else if (nom==="h4"){
							$(child).replaceWith("-titre2["+child.innerHTML+"|d]<br>");
						}else if (nom==="h5"){
							$(child).replaceWith("-titre3["+child.innerHTML+"|d]<br>");
						}
					}else if (align==="center"){
						if (nom==="h3"){
							$(child).replaceWith("-titre["+child.innerHTML+"|c]<br>");
						}else if (nom==="h4"){
							$(child).replaceWith("-titre2["+child.innerHTML+"|c]<br>");
						}else if (nom==="h5"){
							$(child).replaceWith("-titre3["+child.innerHTML+"|c]<br>");
						}
					}else if (align==="justify"){
						if (nom==="h3"){
							$(child).replaceWith("-titre["+child.innerHTML+"|j]<br>");
						}else if (nom==="h4"){
							$(child).replaceWith("-titre2["+child.innerHTML+"|j]<br>");
						}else if (nom==="h5"){
							$(child).replaceWith("-titre3["+child.innerHTML+"|j]<br>");
						}
					}
				  }else{
						if (nom==="h3"){
							$(child).replaceWith("-titre["+child.innerHTML+"]<br>");
						}else if (nom==="h4"){
							$(child).replaceWith("-titre2["+child.innerHTML+"]<br>");
						}else if (nom==="h5"){
							$(child).replaceWith("-titre3["+child.innerHTML+"]<br>");
						}
				  }
			  }else if($(child).hasClass("fond")){
				var contenu = child.firstElementChild.firstElementChild.textContent;
				$(child).replaceWith("-ruban["+contenu+"]<br>");
			  }else if ((child.tagName.toLowerCase()==="table")&&($(child).hasClass("picture"))){
				var cells = child.querySelectorAll('td');
				var align = cells[0].align;
				var img = cells[0].firstElementChild;
								
				var legende = cells[1].textContent;
				
				var codeimg = "";
				if($(child).parent().attr("id") ==="code")	codeimg="-image[";
				else codeimg ="-getimage[";
				codeimg += img.src;
				if (legende!==""){
					codeimg += "|"+legende;
				}
				codeimg += "|"+img.width+"|"+img.height+"|";
				if (align ==="left"){
					codeimg += "g]<br>";
				}else if (align==="right"){
					codeimg += "d]<br>"
				}else if (align==="center"){
					codeimg += "c]<br>"
				}
				$(child).replaceWith(codeimg);
			  }else if ($(child).hasClass("tabs1")){
					var enfants = $(child).children()[0];
					enfants = $(enfants).children();
					var contenu = $(child).children();
					var tabsdanya = "";
					for (var i = 0 ; i<enfants.length; i++){
						tabsdanya += "-tabs["+enfants[i].firstElementChild.textContent+"|"+contenu[i+1].textContent+"]<br>";
					}
					tabsdanya +="-affichertabs1<br>";
					$(child).replaceWith(tabsdanya);
			  }else if ($(child).hasClass("tabs2")){
					var enfants = $(child).children()[0];
					enfants = $(enfants).children();
					var contenu = $(child).children();
					var tabsdanya = "";
					
					for (var i = 0 ; i<(enfants.length - 1); i++){
						
						tabsdanya += "-tabs["+enfants[i].firstElementChild.textContent+"|"+contenu[i+1].textContent+"]<br>";
						
					}
					tabsdanya +="-affichertabs2<br>";
					$(child).replaceWith(tabsdanya);
			  }else if ($(child).hasClass("slid")){
				var elements = child.querySelectorAll('a');
				var taille = elements.length;
				var slidedanya ="";
				for(var i = 2; i<taille; i++){
					slidedanya += "-slide["+elements[i].firstElementChild.src+"|"+elements[i].href+"]<br>";
				}
				slidedanya +="-afficherslide<br>";
				$(child).replaceWith(slidedanya);
			  }else if($(child).hasClass("youtube")){
				
				var youtubeWidth = $(child).attr("width");
				var youtubeHeight = $(child).attr("height");
				var youtubeSRC = $(child).attr("src");
				var youtubeID = youtubeSRC.substring(32);
				var youtubeLegende = "";
				if($(child.nextElementSibling).hasClass("youtubeLegend")){
					youtubeLegende = child.nextElementSibling.textContent;
					x = child.nextElementSibling.nextElementSibling;
				}
				var langageD3 = "";
				if($(child).parent().attr("id")==="code") langageD3 = "-youtube[";
				
				else langageD2 = "-getyoutube[";
				
				if (youtubeID){
					if (youtubeLegende){
					  if (youtubeWidth){
						  if (youtubeHeight){
							  langageD3 += youtubeID + "|" + youtubeLegende + "|" + youtubeWidth + "|" + youtubeHeight + "]<br>";
						  }
						  else {
							  langageD3 +=  youtubeID + "|" + youtubeLegende + "|" + youtubeWidth +  "]<br>";
						  }
					  } 
					  else {
						  if (youtubeHeight){
							  langageD3 +=  youtubeID + "|" + youtubeLegende + "|" + youtubeHeight + "]<br>";
						  }
						  else {
							  langageD3 +=  youtubeID + "|" + youtubeLegende + "]<br>";
						  }  
					  }
					} 
					
					else{
						if (youtubeWidth){
							if (youtubeHeight){
								langageD3 +=  youtubeID  + "|" + youtubeWidth + "|" + youtubeHeight + "]<br>";
							}
							else {
								langageD3 +=  youtubeID  + "|" + youtubeWidth  + "]<br>";
							}
						  } 
						  else {
							if (youtubeHeight){
								langageD3 +=  youtubeID  + "|" + youtubeHeight + "]<br>";
							}
							else {
								langageD3 +=  youtubeID + "]<br>";
							}  
						  }
					   }
					  
					}
					if($(child.nextElementSibling).hasClass("youtubeLegend")){
						$(child.nextElementSibling).remove();
					}
					$(child).replaceWith(langageD3);
				  
			  }else if ($(child).hasClass("colonne")){
				var colonnes = child.querySelectorAll('td');
				var colonnesdanya = "-colonnes["+colonnes.length;
				for (var i = 0 ; i < colonnes.length ; i++){
					
					if (i === (colonnes.length - 1)){
							colonnesdanya += "|"+colonnes[i].textContent+"]<br>";
					}else{
						colonnesdanya += "|"+colonnes[i].textContent;
					}
				}
				$(child).replaceWith(colonnesdanya); 
			  }else if ($(child).hasClass("iFrame")){
				
				var iFrameWidth = $(child).attr("width");
				var iFrameHeight = $(child).attr("height");
				var iFrameSRC = $(child).attr("src");
				var iFrameLegende ="";
				
				if($(child.nextElementSibling).hasClass("iFrameLegend")){
					iFrameLegende = child.nextElementSibling.textContent;
					x = child.nextElementSibling.nextElementSibling;
				}
				var langageD2 ="";
				
				if($(child).parent().attr("id")==="code") langageD2 = "-iframe[";
				
				else langageD2 = "-getiframe[";
				
				if ( iFrameSRC ){
					if (iFrameLegende){
					  if (iFrameWidth ){
						  if (iFrameHeight){
							  langageD2 +=  iFrameSRC + "|" + iFrameLegende + "|" + iFrameWidth + "|" + iFrameHeight + "]<br>";
						  }
						  else {
							  langageD2 +=  iFrameSRC + "|" + iFrameLegende + "|" + iFrameWidth +  "]<br>";
						  }
					  } 
					  else {
						  if (iFrameHeight){
							  langageD2 +=  iFrameSRC + "|" + iFrameLegende + "|" + iFrameHeight + "]<br>";
						  }
						  else {
							  langageD2 +=  iFrameSRC + "|" + iFrameLegende + "]<br>";
						  }  
					  }
					}
					  
					else{
						if (iFrameWidth){
							if (iFrameHeight){
								langageD2 +=  iFrameSRC  + "|" + iFrameWidth + "|" + iFrameHeight + "]<br>";
							}
							else {
								langageD2 +=  iFrameSRC  + "|" + iFrameWidth  + "]<br>";
							}
						  } 
						  else {
							if (iFrameHeight){
								langageD2 += iFrameSRC  + "|" + iFrameHeight + "]<br>";
							}
							else {
								langageD2 += iFrameSRC + "]<br>";
							}  
						  }
					} 
				}
				if($(child.nextElementSibling).hasClass("iFrameLegend")){
						$(child.nextElementSibling).remove();
					}
					$(child).replaceWith(langageD2);
			  }else if ($(child).hasClass("siteLink")){
				 var siteLink = $(child).attr("href");
				 var texte = child.textContent;
				 var langageD5 = "-lvm[" + texte + "|" + siteLink + "]<br>";
				 $(child).replaceWith(langageD5);
			  }else if ($(child).hasClass("webLink")){
				 var webLink = $(child).attr("href");
				 var texte = child.textContent;
				 var langageD4 = "-lvu[" + texte + "|" + webLink + "]<br>";
				 $(child).replaceWith(langageD4);
			  }else if ($(child).hasClass("redirectionLink")){
				var texte = $(child).text();
				var redirect = $(child).attr("href");
				var redirection = redirect.substring(1);
				var langageD6 = "-lvs[" + texte + "|" + redirection + "]";
				$(child).replaceWith(langageD6);
			  }
			
			
			child = x;	
		}	
}
