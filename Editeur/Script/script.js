  
  /*____ Manipulation des boutons de l'interface____ */
 
  // menus déroulants
  $('.dropdown-submenu a.menu').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
  
  // bouton Code D 
  $('.codeDanya').hide();
  
  $('#BtnCode').on("click", function(){
     $('.editeur').hide();
     $('.codeDanya').show();
     $("#navEd").hide();
     $("#navFr").hide();
     $("#navIns").hide();
     $("#navCre").hide();
  });
  // bouton Editeur
  
  $('#BtnEd').on("click", function(){
     $('.codeDanya').hide();
     $('.editeur').show();
     $("#navEd").show();
     $("#navFr").show();
     $("#navIns").show();
     $("#navCre").show();
  });
  
// infos bulles 
  $('[data-toggle="tooltip"]').tooltip();
  
/*___ Manipulation des Modals(boites de dialogue)___*/ 
  $(".fichier").click(function(){
  	$("#nomfich").val("");
    $("#choix").html("");
    creerRang();
  	e.preventDefault();
  	$("#modal4").modal();
  });
  
  $(".tabl").click(function(){
  	$("#modal2 #divCol").html("");
    $("#col").val("1");
    $("#lig").val("1");
    creerRang();
  	e.preventDefault();
  	$("#modal2").modal();
  });
  
  $(".posts").click(function(){
  	$("#post").val("1");
    $("#divPost").html("");
    $("#title").val("");
    creerRang();
  	e.preventDefault();
  	$("#modal5").modal();
  });
  
  $(".tabs").click(function(){
  	$("#nbrTabs").val("3"); 
    creerRang();
  	e.preventDefault();
  	$("#modal1").modal();
  });
  
  $(".iframe").click(function(){
    $("#video2").val("");
    $("#width2").val("640");
    $("#height2").val("360");
    $("#legend2").val("");  	
    creerRang();
  	e.preventDefault();
  	$("#modal6").modal();
  });
  
  $(".youtube").click(function(){
    $("#video3").val("");
    $("#width3").val("640");
    $("#height3").val("360");
    $("#legend3").val("");
    creerRang();
  	e.preventDefault();
  	$("#modal7").modal();
  });
  
 $(".image").click(function(){
    $("#Légende").val("");
    $("#photo").val("");
	$("#Longueur").val("400");
	$("#Largeur").val("500");	
    creerRang();
  	e.preventDefault();
  	$("#modal3").modal();
  });
  
  $(".lienIn").click(function(){
  	$("#link2").val(""); 
    $("#text2").val("");   
    creerRang();
  	e.preventDefault();
  	$("#modal9").modal();
  });
  
  $(".lienweb").click(function(){
   	$("#link1").val("");
    $("#text1").val("");     
    creerRang();
  	e.preventDefault();
  	$("#modal8").modal();
  });
  
  $(".signet").click(function(){
  	$("#text3").val("");
    creerRang();
  	e.preventDefault();
  	$("#modal10").modal();
  });
  
  $(".slide").click(function(){
    $('#nbrSlide').val("2");
    $("#insSlide").html(""); 
    creerRang();
  	e.preventDefault();
  	$("#modal11").modal();
  });
  
  $(".colon").click(function(){
  	$('#nbrColonne').val("2");
    creerRang();
  	e.preventDefault();
  	$("#modal12").modal();
  });
 
/********************************************  Fonctions ********************************************************************/
/**_______________________________________________________________________________________________________________________**/

/*___Insertion d'élements à la position du curseur ____*/
// création d'un rang à la position du curseur //  
var range;
var sel;
function creerRang(){
    if(window.getSelection){
    	sel=window.getSelection();
    	if(sel.getRangeAt && sel.rangeCount){
    		range = sel.getRangeAt(0);
    		range.deleteContents();
    	}
    }
}
//insertion d'un contenu html dans un rang // 
function pasteHtmlAtCaret(html,saisie){
	document.getElementById(saisie).focus();
	var el=document.createElement("div");
	el.innerHTML=html;
	var frag=document.createDocumentFragment(),node,lastNode;
	while ((node = el.firstChild)) {
       lastNode = frag.appendChild(node);
    }
    range.insertNode(frag);
    // Preserve the selection
    if (lastNode) {
      range = range.cloneRange();
      range.setStartAfter(lastNode);
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
    }
}
/*__________________Fonctions de formattage du texte________________________*/

/*___________Fonctions execCommand __________*/


function commande(nom, argument){
	
 if (typeof argument === 'undefined') {
        argument = '';
    }
 document.execCommand(nom, false, argument);	
}
//Changer la taille du texte
function TailChx(sel)
{	
	document.execCommand("FontSize", false, sel[sel.selectedIndex].text);

}

//Changer la couleur du texte
function couleur()
{
	 var x=$("#couleur").val();
	 document.execCommand("foreColor", false, x);
}

//Insertion d'une liste à puces...
function Ins_List_puces(){
	creerRang();
    document.execCommand("insertUnorderedList");
}

//Insertion d'une liste numérotée...
function Ins_List_num() {
	creerRang();
    document.execCommand("insertOrderedList");
}

/*_____ Insertion d'un paragraphe _____*/

idPar=0;
function insert_paragraph(){
	
		idPar++;
		var selection = window.getSelection().getRangeAt(0);
		var selectedText = selection.extractContents();
		if (selectedText.textContent===""){
			creerRang();
			pasteHtmlAtCaret('<p id="par'+idPar+'">inserez un paragraphe</p></br>','saisie');
			
		}else{
		
			var p= document.createElement("p");
			p.appendChild(selectedText);
			selection.insertNode(p);
			p.id = "par"+idPar;
		}
	}
/*_____ insertion d'un titre niveau 1 ______*/ 
function titre1() {
	    creerRang();
		pasteHtmlAtCaret('<h3 class="-titre">Insérez un Titre Niveau 1</h3>','saisie');
}

/*_____ insertion d'un titre niveau 2 ______*/
function titre2(){
	    creerRang();
		pasteHtmlAtCaret('<h4 class="-titre">Insérez un Titre Niveau 2</h4>','saisie');
}

/*_____ insertion d'un titre niveau 3 ________*/
function titre3() {
	creerRang();
	pasteHtmlAtCaret('<h5 class="-titre">Insérez un Titre Niveau 3</h5>','saisie');
}


/*__________ insertion d'un ruban __________*/
function Ins_ruban() {
	    creerRang();
		var code ='<div class="fond"> <div class="ruban"> <h2 class="titRuban">Titre Ruban</h2><div class="ruban_gauche"></div> <div class="ruban_droit"></div></div></div><br /><br /><br /><br/>';
		pasteHtmlAtCaret(code,'saisie');
}

/*__________________________________________ Sections spéciales_______________________________________________*/ 

var d=0,n=0,a=0,o=0,r=0,f=0; //variables pour les id             
/*______________ Définition _________________*/	

function insert_def(){
	creerRang();//creer un rang pour l'insertion d'une définition
    d++;
    var idDef="def"+d;
    pasteHtmlAtCaret("<div contenteditable=\"true\" id=\""+idDef+"\" class=\"definition\"></div><br></br>",'saisie');
    $("#"+idDef).addClass("section");
    // contenu de la définition
	$("#"+idDef).append("<div contenteditable=\"true\" class=\"contenu\"></div");
	$("#"+idDef+" div.contenu").addClass("text-section");
	// entete de la définition
	$("#"+idDef+" div.contenu").prepend("<div contenteditable=\"false\" style=\"background-color:#00c600\"><img src=\"Editeur/icones/def.png\" style=\"vertical-align:middle;\"/>&nbsp;Définition</div><br/><br/>");
	$("#"+idDef+" div.contenu div").addClass("entete-section");
	// rendre la section redimensionnable
	$("#"+idDef).resizable({
		minWidth:200,
		minHeight:60,
		maxWidth:910
	});
}
	
/*______________ Note _________________*/	
	function insert_note(){
		creerRang();
	    n++;
	    var idNote="note"+n;
	    pasteHtmlAtCaret("<div contenteditable=\"true\" id=\""+idNote+"\" class=\"note\"></div><br></br>",'saisie');
	    $("#"+idNote).addClass("section");
		$("#"+idNote).append("<div contenteditable=\"true\" class=\"contenu\"></div");
		$("#"+idNote+" div.contenu").addClass("text-section");
		$("#"+idNote+" div.contenu").prepend("<div contenteditable=\"false\" style=\"background-color:#f9f900\"><img src=\"Editeur/icones/not.png\" style=\"vertical-align:middle;\"/>&nbsp;Note</div><br/><br/>");
		$("#"+idNote+" div.contenu div").addClass("entete-section");
		$("#"+idNote).resizable({
			minWidth:200,
			minHeight:60,
			maxWidth:910
		});
   
}
	
/*______________ Alerte _________________*/	
	function insert_alert(){
        creerRang();
        a++;
	    var idAlt="alt"+a;
	    pasteHtmlAtCaret("<div contenteditable=\"true\" id=\""+idAlt+"\" class=\"alerte\"></div><br></br>",'saisie');
	    $("#"+idAlt).addClass("section");
		$("#"+idAlt).append("<div contenteditable=\"true\" class=\"contenu\"></div");
		$("#"+idAlt+" div.contenu").addClass("text-section");
		$("#"+idAlt+" div.contenu").prepend("<div contenteditable=\"false\" style=\"background-color:#ff0000;color:#ffffff;\"><img src=\"Editeur/icones/alt.png\" style=\"vertical-align:middle;\"/>&nbsp;Attention!</div><br/><br/>");
		$("#"+idAlt+" div.contenu div").addClass("entete-section");
		$("#"+idAlt).resizable({
			minWidth:200,
			minHeight:60,
			maxWidth:910
		});
    
}
	
/*______________ Observation _________________*/	
	function insert_obs(){
	    creerRang();
		  o++;
	    var idObs="obs"+o;
	    pasteHtmlAtCaret("<div contenteditable=\"true\" id=\""+idObs+"\" class=\"observation\"></div><br></br>",'saisie');
	    $("#"+idObs).addClass("section");
		$("#"+idObs).append("<div contenteditable=\"true\" class=\"contenu\"></div");
		$("#"+idObs+" div.contenu").addClass("text-section");
		$("#"+idObs+" div.contenu").prepend("<div contenteditable=\"false\" style=\"background-color:#939393;color:#ffffff;\"><img src=\"Editeur/icones/obs.png\" style=\"vertical-align:middle;\"/>&nbsp;Observation</div><br/><br/>");
		$("#"+idObs+" div.contenu div").addClass("entete-section");
		$("#"+idObs).resizable({
			minWidth:200,
			minHeight:60,
			maxWidth:910
		});
    
}
	
	
/*______________ Règle _________________*/	
	function insert_regle(){
        creerRang();
   	    r++;
	    var idReg="reg"+r;
	    pasteHtmlAtCaret("<div contenteditable=\"true\" id=\""+idReg+"\" class=\"regle\"></div><br></br>",'saisie');
	    $("#"+idReg).addClass("section");
		$("#"+idReg).append("<div contenteditable=\"true\" class=\"contenu\"></div");
		$("#"+idReg+" div.contenu").addClass("text-section");
		$("#"+idReg+" div.contenu").prepend("<div contenteditable=\"false\" style=\"background-color:#cb0000;color:#efef00;\"><img src=\"Editeur/icones/reg.png\"style=\"vertical-align:middle;\"/>&nbsp;Règle</div><br/><br/>");
		$("#"+idReg+" div.contenu div").addClass("entete-section");
		$("#"+idReg).resizable({
			minWidth:200,
			minHeight:60,
			maxWidth:910
		});
}
	
/*______________ Forme _________________*/	
function insert_form(){
  	    creerRang();
        f++;
	    var idFrm="frm"+f;
	    pasteHtmlAtCaret("<div contenteditable=\"true\" id=\""+idFrm+"\" class=\"forme\"></div><br></br>",'saisie');
	    $("#"+idFrm).addClass("section");
	    $("#"+idFrm).css("padding","2px");
	    $("#"+idFrm).css("border","1px solid black");
		$("#"+idFrm).append("<div  class=\"contenu\"></div");
		$("#"+idFrm+" div.contenu").addClass("text-section");
		$("#"+idFrm+" div.contenu").css("background","white");
		$("#"+idFrm+" div.contenu").prepend("<div  style=\"background-color:#f5f5f5;\"><img src=\"Editeur/icones/frm.png\" style=\"vertical-align:middle;\"/>&nbsp;Forme</div><br/><br/>");
		$("#"+idFrm+" div.contenu div").addClass("entete-section");
		$("#"+idFrm+" div.contenu div").css("border","none");
		$("#"+idFrm).resizable({
			minWidth:200,
			minHeight:60,
			maxWidth:910
		});
}	

/*__________________________________________ Insertion de Tabs____________________________________________________*/

var numTab1=0;// variables pour les id des tabs
var numTab2=0;

/*_________________ Tabs simples ____________________*/
function insert_tabs1(){
	creerRang(); // création d'un rang pour l'insertion des tabs
    numTab1++;
    var i= $("#nbrTabs").val();
    var idTab="tabs1"+numTab1;
    // création du div qui va contenir les tabs
	pasteHtmlAtCaret("<div contenteditable=\"true\" id =\""+idTab+"\" class=\"tabs1\"></div><br></br><br></br>",'saisie');
	$("#"+idTab).addClass("css-tabs");
	$("#"+idTab).prepend("<div contenteditable=\"true\" class=\"groupe\"></div>");
    
    // création des onglets et leurs contenus
	for (j=1;j<=i;j++){
	  $("#"+idTab).append("<div contenteditable=\"true\" class=\"entete-tab\"><div>Onglet"+j+"</div></div>");
	  $("#"+idTab).append("<div class=\"contenu-tab\" contenteditabe=\"true\">Contenu "+j+"</div>");
	};
	
	// css des tabs
    $("#"+idTab+" div.entete-tab").resizable(); //permettre la redimension des onglets
	$("#"+idTab+" div.entete-tab").appendTo("#"+idTab+" div.groupe");
	$("#"+idTab+" div.entete-tab").addClass("css-entete-tab");
	$("#"+idTab+" div.contenu-tab").addClass("css-contenu-tab");
	$("#"+idTab+" div.contenu-tab:gt(0)").hide();
	$("#"+idTab+" div.entete-tab").css("background","#5ba4a4");
	$("#"+idTab+" div.entete-tab").first().css("background","#ffffff");
    
    // au clique sur un onglet
	var $onglets=$("#"+idTab+" div.entete-tab");
	$("#"+idTab+" div.entete-tab").click(function(){
		$onglets.css("background","#5ba4a4");
		$("#"+idTab+" div.contenu-tab").hide();		
		var k= $(this).index();
		$("#"+idTab+" div.contenu-tab:eq("+k+")").show();
		$(this).css("background","#ffffff");
		});
	  // redimentionner le contenu des tabs 
	  $(".contenu-tab").resizable({
			minWidth:550,
			minHeight:60,
			maxWidth:910
	    });	    	
}

/*_________________ Tabs animés ____________________*/

function insert_tabs2(){
    numTab2++;
    var i= $("#nbrTabs").val();
    var idTab="tabs2"+numTab2;
	pasteHtmlAtCaret("<div contenteditable=\"true\" id =\""+idTab+"\" class=\"tabs2\"></div><br></br><br></br>",'saisie');
	$("#"+idTab).addClass("css-tabs");
	$("#"+idTab).prepend("<div contenteditable=\"true\" class=\"groupe\"></div>");
	
	for (j=1;j<=i;j++){
	  $("#"+idTab).append("<div contenteditable=\"true\" class=\"entete-tab\" style=\"z-index:"+(i-j+1)+"\"><div>Onglet"+j+"</div></div>");
	  $("#"+idTab).append("<div class=\"contenu-tab\" contenteditabe=\"true\">Contenu"+j+"</div>");
	};
	
	$("#"+idTab+" div.entete-tab").resizable();
	$("#"+idTab+" div.entete-tab").appendTo("#"+idTab+" div.groupe");
    $("#"+idTab+" div.groupe").append("<div class=\"anim\"></div>");
    $("#"+idTab+" div.anim").addClass("anim-tab");
	$("#"+idTab+" div.entete-tab").addClass("css-entete-tab");
	$("#"+idTab+" div.contenu-tab").addClass("css-contenu-tab");
	$("#"+idTab+" div.contenu-tab:gt(0)").hide();
	$("#"+idTab+" div.entete-tab").css("background","#5ba4a4");
	$("#"+idTab+" div.entete-tab").first().css("background","#ffffff");
	
	
	// animation lors du passage du pointeur au dessus des tabs
	$("#"+idTab+" div.entete-tab").mouseenter(function(){
	   var couleur=$(this).css("background-color");
       $(this).css("bottom","10px");  
       var idx=$(this).css("z-index");  
       $("#"+idTab+" div.anim").css("z-index",idx);
    });
    
    $("#"+idTab+" div.groupe").mouseenter(function(){
       $("#"+idTab+" div.anim").css("background-color","#5ba4a4");
       $("#"+idTab+" div.anim").css("top","0px");
    });
   
    $("#"+idTab+" div.entete-tab").mouseleave(function(){
       $(this).css("bottom","0px");
       $("#"+idTab+" div.anim").css("z-index","0");  
    });
    
    $("#"+idTab+" div.groupe").mouseleave(function(){
       $("#"+idTab+" div.anim").css("background-color","#ffffff");
       $("#"+idTab+" div.anim").css("top","10px");
    });
    
    // au clique sur un onglet
	var $onglets=$("#"+idTab+" div.entete-tab");
	$("#"+idTab+" div.entete-tab").click(function(){
		$onglets.css("background","#5ba4a4");
		$("#"+idTab+" div.contenu-tab").hide();
		var k= $(this).index();
		$("#"+idTab+" div.contenu-tab:eq("+k+")").show();
		$(this).css("background","#ffffff");
	});
	
	// redimentionner le contenu des tabs 
    $(".contenu-tab").resizable({
			minWidth:550,
			minHeight:60,
			maxWidth:910
	});	  
}

/*___________ choix du type de tabs à inserer ____________*/
$("#okTabs").click(function(){
  	insert_tabs();   
 });
 
 var tab1,tab2;
 $("input#tabs1-input").click(function(){
 	tab1=true;
 	tab2=false;
 });
 $("input#tabs2-input").click(function(){
 	tab2=true;
 	tab1=false;
 });	
function insert_tabs(){
  if(tab1){
   	insert_tabs1();
   }
   if(tab2){
   	insert_tabs2();
   }
}

/*_____________________________________________ Insertion d'un tableau __________________________________________________*/

//remettre la modal des tableaux a son état initial apres insertion
$(function(){
 $("#larCol").click(function(){
 	$("#modal2 #divCol").html("");
 	var nbCol=$("#col").val();
 	for(i=0;i<nbCol;i++){
 	  $("#modal2 #divCol").append("<legend><h5>Largeur de la colonnes N°"+(i+1)+" <b>(en %)<b/></h5><input class=\"largeur\" type=\"number\" value='"+Math.round(100/nbCol)+"' min=\"1\" required/></legend>");
 	}
 	$("#modal2").modal('show');
})                       
                       
// au clique sur le bouton "ok" de la modal (confirmer l'insertion du tableau)
 $("#okTab").click(
         function() { 
         	            var o = [];
                        var inputs = document.getElementsByClassName('largeur');
                        var taille = inputs.length;
 	                    
 	                    
                        var x = parseInt($('#col').val());
                        var y = parseInt($('#lig').val());
                        var i = 0;
                        var j = 0;
                        var k = 0;
                        var wid = 100/x;
                        if (taille ===0){
                        	for( k = 0; k < x; k++){
                          		  o.push(wid);
                        	}
                        }else{
	                        for( k = 0; k < x; k++){
	                          	  o.push(parseInt(inputs[k].value));
	                        }	
                        }
                        
                        $("#modal2 #divCol").html("");
                        //generer l'entete du tableau
                        var tab = "<table class=\"tableau\" > <thead> <tr class=\"entete\">";
                        for (j = 0 ; j < x ; j++){
                                tab += "<th class='cel' style='border: 1px solid black; height:30px ; padding: 5px ;overflow: auto ; width:"+o[j]+"%;'></th>";
                        }
                        tab += "</tr></thead><tbody>";
                        //generer le courps du tableau
                        for(i = 1 ; i < y ; i++){
                                tab += "<tr class=\"coul\">";
                                for(j = 0; j < x ; j++){
                                        tab +="<td class='cel' style='border: 1px solid black; height:30px ; padding: 5px ;overflow: auto ; width:"+o[j]+"%;'></td>";
                                }
                                tab +="</tr>";
                        }
                        tab +="</tbody></table><br>";
                        
                        //mettre le tableau généré dans l'editeur d'article
                        pasteHtmlAtCaret(tab,'saisie'); 
                        //coller les cellules du tableau et le faire occuper tout l'espace de travail
                        $('.tableau').css({
                                borderCollapse: 'collapse',
                                width: '100%'	
                        });
                        
                        //couleur quand on passe au dessus d'une ligne
                        $('.coul').hover(function(){
                                $(this).css('background-color' , '#D5DAE0');
                        },function(){
                            $(".coul").css('background-color', '#F8F8F8');
                        });
                        
                        //couleur par défaut des lignes
                        $(".coul").css('background-color', '#F8F8F8');
                        //couleur par défaut de l'entete
                        $('.entete').css('background-color' , '#D5DAE0');
                });

});

//inserer des input pour récuperer la taille des colonnes
$(function(){
    $("#validate").click(function(){
    var inp_long = '';
    var x = parseInt($('#col').val());
    for(var i = 0; i < x ; i++){
        inp_long += "<input class='largeur' type='number' min='1' value='"+(100/x)+"' /> ";
    }
    $("#ins_inp").html(inp_long);});
});


/*_______________________________________ Insertion de posts ______________________________________________________*/
var p=0;
// insertion des inputs pour importer les images des posts dans la modal posts
$("#choixPost").click(function(){
	$("#divPost").html("");
    var input = '';
    var x = parseInt($('#post').val());
    for(var i = 0; i < x ; i++){
        input += "<div class='field'><input class='link' type='text' placeholder='Lien' required /><input class='txt' type='text' placeholder='Titre' required /><input class='file' type='file' accept='image/*' required/></div><br>";
    }
    $("#divPost").html(input);
});

// au clique sur le bouton "ok" de la modal (confirmer l'insertion des posts) 
$(function(){
 $("#okPost").click(
         function() {
                        //récuperer les propriétés des posts
                        var k;
                        var text='';
                        var inputs = document.getElementsByClassName('field');
                        var o = [];
                        
                        var taille = inputs.length;
                        for( k = 0; k < taille; k++){
                            o.push(inputs[k]);
                        }
                        text +='<table align="center" contenteditable="false"><tr>';
                        for(k = 0; k<taille ; k++){
                            var i = o[k].firstChild;
                            text += '<td align="center" width="110px" class="wp-caption" style="padding-top:5px; display:inline-block;">';
                            while(i){
                                    if($(i).is(".txt")){
                                        text +='<div style="line-height:16px; vertical-align:top; padding: 0px; margin: 0px; margin-right:10px;" align="center" font:inherit;>'+i.value+'</div></a></td>';
                                    }
                                    else
                                        if($(i).is(".link")){
                                            text += '<a href="'+i.value+'">';
                                        }
                                i = i.nextElementSibling;
                            }
                        }
                        text += '</tr></table>';
                       // insertion des images pour les posts 
                        var a = document.getElementsByClassName('file');
                        var id = inser_post(text);
                        var psts = document.getElementById(id);
						var mm = psts.querySelectorAll('td');
                        k = 0;                     
                        while(mm){
                            
                            
                            var ab = mm[k];
                            ins_im(ab,a[k]);
                            k++; 

                        } 
                           // importer une image pour un post
                           function ins_im(ab,a){
                                var reader = new FileReader();
                                var imgElement;


                                reader.onload = function(){

                                    imgElement = document.createElement('img');
                                    imgElement.style.width = '70px';
                                    imgElement.style.height = '70px';
                                    imgElement.src = reader.result;

                                    $(ab).prepend(imgElement);
                                };

                                reader.readAsDataURL(a.files[0]);
                            } 
                 
         });
           
           // insertion des posts a la position du curseur
           function inser_post(text){
           p++;
           var ttle = $("#title").val().toString();
           
           
           var idPst="post"+p;
           $("#saisie").append("<div contenteditable=\"true\" style='border-radius:10px 10px 0px 0px; height:169px;' id=\""+idPst+"\"></div><br>");
           $("#"+idPst).addClass("post");
           $("#"+idPst).css("padding","2px");
           $("#"+idPst).css("border","1px solid black");
           $("#"+idPst).append("<div contenteditable=\"true\" class=\"contenu\"></div");
           $("#"+idPst+" div.contenu").addClass("text-section");
           $("#"+idPst+" div.contenu").prepend("<div contenteditable=\"true\" style=\"background-color:#4D5055; height:52px;\"><img src=\"Editeur/icones/pst.png\" style=\"vertical-align:middle;\"/>"+ttle+"</div>");
           $("#"+idPst+" div.contenu div").addClass("entete-section");
           $("#"+idPst+" div.contenu div").css("border","none");
           
           var fils = document.getElementById(idPst).firstElementChild;
           $(fils).append(text);
           return idPst;
 };
  
});

/*____________________________________ Télécharger (inserer)un fichier _____________________________________________________*/
var ddl=0;
// modification des champs de la modal fichier lors du choix du type de fichier
$(function(){
   $("#liens").click(function(){
       $("#choix").html("<input id='URL' type='text' placeholder='URL' required />");
       
   });
   $("#local").click(function(){
       $("#choix").html("<input id='loc' type='file'  required />");
   });
});
// au clique sur le bouton "ok" de la modal fichier (confirmation de l'insertion du fichier)
$(function(){
   $("#okFich").click(function(){
       var idDdl = "ddl"+ddl;
       ddl++;
       // récupération des propriétés du fichier
       var nom = $("#nomfich").val();
       var link = document.getElementById("choix").firstElementChild;
       var type = link.type;
       
       // dans le cas d'un fichier externe
       if (type === 'text'){
           var href = $("#URL").val();
           var b = '<div contenteditable="false"><a id="'+idDdl+'" class="fichier" href="'+href+'" download target="_blank">'+nom+'</a></div>';
           pasteHtmlAtCaret(b,'saisie');
       }
       // dans le cas d'un fichier local
       else{
           if(type === 'file'){
              lien_file(link,nom,idDdl);
           }
           
       }
   }) ;
   
   // insertion d'un fichier local
   function lien_file(link,nom,idDdl){
              var reader = new FileReader();
              reader.onload = function(){
                  var b = '<div contenteditable=\"false\"><a  class="fichier" id="'+idDdl+'" href="'+reader.result+'" download target="_blank">'+nom+'</a></div><br/>';
                  pasteHtmlAtCaret(b,'saisie');
              };
              reader.readAsDataURL(link.files[0]);
   }
});

/*________________________________________ Insertion d'une image ____________________________________________________*/

var idimage=0;// variable pour les id

// au clique sur le bouton "ok" de la modal image (confirmation de l'insertion de l'image)
$(function() {
	$("#okImage").click(function(){
		
		idimage++;
		// récupération des proprietés de l'image
		var legende = $("#Légende").val();
		var longueur = parseInt($("#Longueur").val());
		var largeur = parseInt($("#Largeur").val());
		var position = $("#position").val();
        
		var img = '<table class ="picture" border="0" align="' + position + '">' + '<tr>' + '<td border="0" align="' + position + '">' + '<img id="img'+idimage+'" alt="' + legende + '"/>' + '</td>' + '</tr>' + '<tr>' + '<td align="center">' + '<b class="pic">' + '<i class="pic">' + legende + '</i>' + '</b>' + '</td>' + '</tr>' + '</table>';
		img = img + '</i>' + '</b>' + '</td>' + '</tr>' + '</table>'+'<br/>';
		// importation et insertion de l'image à la position de curseur
		pasteHtmlAtCaret(img,'saisie');
		var i = document.querySelector("#photo");
		if (i.files && i.files[0]) {
			var reader = new FileReader();
			reader.onload = function(e) {
				$("#img"+idimage).attr('src', e.target.result).width(largeur).height(longueur);
			};
			reader.readAsDataURL(i.files[0]);
		}
	});	
});

/*______________________________________Insertion d'une Iframe________________________________________________________*/

// au clique sur le bouton "ok" de la modal Iframe (confirmation de l'insertion de l'iframe)
$(function(){
    $("#okIframe").click(function(){
    // récupération des propriétés de l'Iframe   
    URLpage = $("#video2").val();
    frameWidth = $("#width2").val();
    frameHeight = $("#height2").val();
    frameLegend = $("#legend2").val();
    
    // insertion de l'Iframe à la position du curseur
    if ((URLpage != "") && (URLpage.indexOf("vimeo") != -1)){
                frameSRC = "https://player.vimeo.com/video/" + URLpage.substring(18);
                pasteHtmlAtCaret("<iframe class=\"iFrame\"  width='"+frameWidth+"' height='"+frameHeight+"' src='"+frameSRC+"' frameborder=\"0\" allowfullscreen></iframe>",'saisie');       
        }
        else if (URLpage != ""){
                pasteHtmlAtCaret("<iframe class=\"iFrame\" width='"+frameWidth+"' height='"+frameHeight+"' src='"+URLpage+"' frameborder=\"0\" allowfullscreen></iframe>",'saisie');        
        }
        if (frameLegend != "") {
            pasteHtmlAtCaret("<legend class=\"iFrameLegend\" style=\"width:"+frameWidth+"px;\"><h4 style=\"width:"+frameWidth+"px ;text-align:center;\"> "+frameLegend+"</h4></legend><br/><br/>",'saisie');
        }

    });
});

/*______________________________________Insertion d'une video Youtube___________________________________________________*/

// au clique sur le bouton "ok" de la modal Youtube (confirmation de l'insertion de la video YouTube)
$(function (){        
 $("#okYoutube").click(function() {
    // récupération des propriétés de la video Youtube
    URLpage = $("#video3").val();
    youTubeID = URLpage.substring(32,43);
    youTubeSRC = "https://www.youtube.com/embed/" + youTubeID;
    youTubeWidth = $("#width3").val();
    youTubeHeight = $("#height3").val();
    youTubeLegend = $("#legend3").val();
    // insertion de la video Youtube a la position du curseur
    if (youTubeSRC != ""){
            pasteHtmlAtCaret("<iframe class=\"youtube\" width='"+youTubeWidth+"' height='"+youTubeHeight+"' src='"+youTubeSRC+"' frameborder=\"0\" allowfullscreen></iframe>",'saisie');
            }     
    if (youTubeLegend != "") {
            pasteHtmlAtCaret("<legend class=\"youtubeLegend\" style=\"width:"+youTubeWidth+"px;\"><h4 style=\"width:"+youTubeWidth+"px ;text-align:center;\">"+youTubeLegend+"</h4></legend><br/><br/>",'saisie');
            }     
  });       
});

                                                                              
/*_____________________________________________Lien Vers Une Page Web___________________________________________________*/

// au clique sur le bouton "ok" de la modal Lien externe (confirmation de l'insertion du lien)
$(function(){
    $("#okLienWeb").click(function(){
    	    // récuperer les propriétés du lien
            var webLink = $("#link1").val();
            var webText = $("#text1").val();
            
            // insertion du lien
            if ((webLink != "") && (webText != "")){
               pasteHtmlAtCaret("<a class=\"webLink\" contenteditable=\"false\" href='"+webLink+"' target=\"_blank\">"+webText+"</a><br/>",'saisie');
            }     
});
});

/*_____________________________________________Lien Vers Une Page interne___________________________________________________*/
// au clique sur le bouton "ok" de la modal Lien interne (confirmation de l'insertion du lien)
$(function(){
    $("#okLienInterne").click(function(){
    	    // récuperer les propriétés du lien
            var interLink = $("#link2").val() + "." + $("#selection5").val();
            var interText = $("#text2").val();
            // insertion du lien a la position du curseur
            if ((interLink != "") && (interText != "")){
                pasteHtmlAtCaret("<a class=\"siteLink\" contenteditable=\"false\" href='"+interLink+"' target=\"_blank\">"+interText+"</a><br/>",'saisie');
            }
   
 });
});

/*__________________________________________________________Signet_________________________________________________________*/

// au clique sur le bouton "ok" de la modal Signet (confirmation de l'insertion du signet)
$("#okSignet").click(function(){
        
        var id = "#";
        var texte = $("#text3").val(); 
        // insertion du signet au double clique sur un paragraphe    
        $("p").dblclick(function(){
        	// récuperer l'id du paragraphe
            id += $(this).attr("id");           
            if ((id != "#") && (texte != "")){
                    pasteHtmlAtCaret("<a contenteditable=\"false\" class=\"redirectionLink\" href= '" +id+ "'> "+texte+" </a>",'saisie');
                    // scroll down de la page lors du clique sur le text du signet
                    $('a[href^="#"]').click(function(){
                        var myAnchor = $(this).attr("href");
                        $('html,"#saisie"').animate({
                        scrollTop:$(myAnchor).offset().top
                        }, 'slow');
                        return false;
                    });  
             }    
        });
         
});


/*___________________________________________________ Inserer des Slides __________________________________________________*/
// insertion des inputs dans la modal Slide pour récuperer les informations sur les images a importer 
$(function(){
    $("#validSlide").click(function(){
    var input = '';
    var x = parseInt($('#nbrSlide').val());
    if(x>0){
        for(var i = 0; i < x ; i++){
            input += "<div class='fieldSlide'><input class='link' type='text' placeholder='Lien' required='' /><input class='file' type='file' accept='image/*' required=''/></div><br>";
        }
    
    $("#insSlide").html(input);
    }  
});
});

// au clique sur le bouton "ok" de la modal Slide (confirmation de l'insertion des slides)
$(function(){
    $("#okSlide").click(function(){
    slide1("#insSlide");   
    });
});

var numSlid=0;// variable pour les id 
// fonction qui insere les slides a la position du curseur 
function slide1(input){
    numSlid++;
    var inputs = document.getElementsByClassName('fieldSlide');
    var taille=inputs.length;
    var idSlide="Slid"+numSlid;
    var k="<div id=\""+idSlide+"\" class=\"slid\" contenteditable=\"false\" ></div><br/>";
    if($(input).html()!=""){
        pasteHtmlAtCaret(k,'saisie');
        // inserer les images avec leurs liens pour les slides 
        for(var i=0;i<taille;i++){
            var lien=inputs[i].firstElementChild.value;
           
            var image=inputs[i].lastElementChild;
	    var slide = "<a href='"+lien+"'><img src='";
            ins_imslide(image,slide);
            
	    
        }
        $("#"+idSlide).append("<br/>");
	show(idSlide); 
    }
    // fonction qui importe une image locale 
	function ins_imslide(image,slide){
		if (image.files && image.files[0]) {
              var reader= new FileReader();
              reader.onload = function (e) {
	       	  $("#"+idSlide).append(slide+e.target.result +"' alt='yourimage'/></a>");
            };
            reader.readAsDataURL(image.files[0]);	
            }	
	}
} 
// reinitialisation des champs de la modal apres annulation de l'insertion
$("#annulSlide").click(function(){
   $('#nbrSlide').val("2");
   $("#insSlide").html("");
});

// fonction pour faire défiler les images du slide
function show(slideShow){
	
            $("#"+slideShow).append("<div class=\"prev\"><a href=\"#\">PRECEDANT </a>  </div><div class=\"next\"> <a href=\"#\" > SUIVANT </a></div> ");
            $("#"+slideShow+" > a:gt(0)").hide();

            $("#"+slideShow+"  .next").click(function(){
                var $imgSuivante = $("#"+slideShow+" > a:visible").next("a");
                if ($imgSuivante.length < 1 ) $imgSuivante = $("#"+slideShow+" > a:first");
                $("#"+slideShow+" > a:visible").fadeOut();
                $imgSuivante.fadeIn();
               
                return false;
            });
            $("#"+slideShow+"  .prev").click(function(){
                var $imgSuivante = $("#"+slideShow+" > a:visible").prev("a");
                if ($imgSuivante.length < 1 ) $imgSuivante = $("#"+slideShow+" > a:last");
                $("#"+slideShow+" > a:visible").fadeOut();
                $imgSuivante.fadeIn();
                return false;
            });
          // défilement automatique des slides 
          function auto(){
                $("#"+slideShow+" .next").trigger("click");
            }
           setInterval(auto,5000);    
}


/*_____________________________________________ Disposer en colonnes _______________________________________________________*/

// au clique sur le bouton "ok" de la modal colonnes 
$(function(){
    $("#okColonne").click(function(){
    colonne($("#nbrColonne").val());
    });
});
var numCol=0;
// fonction qui insere les colonnes a la position du curseur
function colonne(nbr){
    numCol++;
    var idColonne="Colon"+numCol;
    var k="<div id=\""+idColonne+"\" class=\"colonne\" ></div><br/>";
    pasteHtmlAtCaret(k,'saisie');
    var j=0;
    var tabCol = "<table class=\"tabCol\"> <tbody> <tr>";
    for (j = 0 ; j < nbr ; j++){
            tabCol += "<td style=' padding: 5px ;overflow: auto; width:"+(100/nbr)+"%;'></td>";
    }
    tabCol += "</tr></tbody><tbody>";
    $("#"+idColonne).html(tabCol);
    
}


/*___________________________________________________________________________________________________________________________*/
/*___________________________________________________________________________________________________________________________*/