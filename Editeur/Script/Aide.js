//****** Modal Aide ******//
/*___________________________*/
/*__________________________*/
var accueil="<h3>Introduction à l'inferface</h3><br/><h4>Page d'Accueil</h4>La page d'accueil de l'éditeur Danya contient notamment une petite description sur ce dernier, ";
accueil+="elle vous permet de choisir entre utiliser une version html simplifiée (en cas de connexion bas débit) ou la version";
accueil+=" par défaut qui n'est autre qu'une interface réalisée avec le Framework \"bootstrap\".";
/*__________________________*/
var menu="<h4> Barre de menus </h4>• le menu Edition de l'éditeur Danya contient les différentes fonctions d'édition qui vont vous permettre d'annuler une opération,";
 menu+=" de la rétablir, de copier, couper et coller du texte sur la zone de saisie.<br/><br/>";
 menu+="• le menu Format : son contenu est très utile lorsque vous éditez des pages web : vous pourrez insérer des paragraphes, ";
 menu+="titres, rubans, disposer le contenu en colonnes et appliquer différents formats (mettre en gras, en italique ou souligné";
 menu+=" et aligner le texte à gauche, à droite ou au centre), comme vous pourrez insérer des listes à puces ou numérotées.<br/><br/>";
 menu+="• le menu insertion : des images, des tableaux, des liens (internes, externes et signets), des vidéos"; 
 menu+="(iFrame et YouTube) et des posts peuvent être insérés dans votre article, comme vous pourrez télécharger des fichiers ";
 menu+="à partir de votre ordinateur ou à partir d'un lien externe. Toutes ces fonctionnalités vont être expliquées en détail dans ce tutoriel.<br/><br/>";
 menu+="• le menu Création : ce menu contient différentes fonctionnalités qui vont vous permettre la création de zones personnalisées pour";
 menu+=" l'insertion d'une définition, une alerte, une note, une observation, une règle et une forme ; comme vous pourrez créer des slides qui";
 menu+=" ne sont autre qu'un défilement d'image et un menu sous forme de Tabs(onglets).";
/*____________________________*/
var outil="<h4>Barre d’outils </h4><br/>Sur cette barre qui se trouve entre la barre de menus et la zone de saisie vous trouverez toutes les fonctionnalités";
outil+=" qu'un utilisateur voulant créer une page web est susceptible d'utiliser fréquemment, on y trouve en outre celles qui permettent";
outil+=" le formatage du texte ainsi qu'un bouton permettant de changer la taille du texte et une palette de couleur afin de changer sa couleur.";
outil+="Vous pourrez aussi à partir de cette barre d'outils insérer des images, des liens, des vidéos Youtube et des tableaux.<br/>";
outil+="<b>Remarque</b> : Toutes les icones de la barre d'outils sont parlantes, une info bulle décrivant la fonction de l'icône apparaitra des lors que vous faites passer la souris au-dessus de cette dernière.";
/*_____________________________*/
var bouton="<h4>Les boutons (Code D, Enregistrer et Editeur)</h4><br/>Vous aurez certainement constaté la présence d'un bouton « Code D » en bas (à droite) de l'interface de l'éditeur,";
bouton+=" ce n'est autre qu'un bouton qui va vous permettre de faire la traduction des éléments que vous créez sur la zone de";
bouton+=" saisie vers le langage D et de le visualiser.<br/>";
bouton+="Une fois que vous avez cliqué sur ce bouton, vous aurez a la place de la zone de saisie une page contenant de langage D,";
bouton+=" et à la place du bouton « Code D » apparaitront deux autres boutons : « Enregistrer » et « Editeur »<br/>";
bouton+="Le clique sur le bouton Enregistrer va sauvegarder le code D de votre article dans un fichier texte, et le bouton Editeur vous permettra de revenir à la zone de saisie de votre article.";
/*_____________________________*/
var parg="<h4>Insertion d'un paragraphe</h4><br/>Placez votre curseur ou vous souhaitez l'insérer, et cliquez sur l'icône Paragraphe (P) à partir de la barre d'outil";
parg+=" ou du menu Format, une phrase contenant \"insérez un paragraphe\" apparaitra à la position de votre curseur,";
parg+=" remplacez cette petite phrase par votre paragraphe.Comme vous pouvez tout simplement ecrire du texte, le selectionner, puis";
parg+=" cliquer sur l'icône paragraphe. ";
/*____________________________*/
var rub="<h4>Insertion d'un ruban</h4><br/>Le ruban est l'une des fonctionnalités ajoutées par la plateforme Danya, il se concrétise sous forme d'un large ruban";
rub+=" de couleur verte pouvant contenir un titre. Vous pourrez l'insérer à la position de votre curseur en cliquant sur ";
rub+="l'icône Titres ( T ) de la barre d'outils ou à partir du menu Format et choisir \"Titre Ruban\".";
/*____________________________*/
var titres="<h4>Insertion de titres</h4><br/>L’éditeur Danya vous donne la possibilité d'insérer 3 niveaux de titre, et cela en cliquant sur l'icône";
titres+=" Titres(T) de la barre d'outil ou à partir du menu Format et choisir le niveau de titre à insérer.";
/*____________________________*/
var list="<h4>Insertion d'une liste</h4><br/>Il Ya deux manières de créer une liste :<br/>";
list+="•	le clique sur le bouton liste numérotée ou liste à puces de la barre d'outils (ou à partir du menu Format) ";
list+="va insérer un numéro ou une puce, et vous pourrez des lors commencer à créer votre liste.<br/>";
list+="•	si vous souhaiter rendre du contenu déjà existant sous forme de liste, vous n'avez qu'à positionner votre curseur";
list+=" au début de la ligne et de cliquer sur le bouton liste.<br/>";
list+="  <b> Remarque</b> : pour mettre fin à une liste et continuer à taper le texte principal :<br/>";
list+="•	Placez le curseur à la fin du dernier élément de la liste et appuyez sur Entrée deux fois de suite<br/>";
list+="•	Pour convertir un ou plusieurs éléments d'une liste en texte principal : Placez le curseur dans l'élément de";
list+=" liste et cliquez sur le bouton liste à puces si c'est une liste à puces ou liste numérotée sinon.";
/*______________________________*/
var mise="<h4>Mettre en forme le texte</h4><br/> Sélectionnez le texte à formater et dans la barre d'outils ou le menu Format choisissez l'une des options suivantes :<br/>";
mise+=" •Couleur : permet de sélectionner une couleur dans la palette et l'appliquer Au texte.<br/>";
mise+=" •Taille : permet de sélectionner une taille de police parmi les 7 et l’appliquer au texte.<br/>";
mise+="•Gras, Italique ou souligné : permet de mettre le texte sélectionné en gras, en italique ou en souligné.";
/*_____________________________*/
var posit="<h4>Positionner le texte</h4><br/>Pour changer la position de votre texte :<br/>placez le curseur dans le texte ou sélectionnez le, vous";
posit+=" pourrez l'aligner à gauche, à droite ou au centre de votre zone de saisie.";
/*_____________________________*/
var tabo="<h4>Ajouter des tableaux</h4><br/>Vous pouvez insérer un tableau à la position de votre curseur, à partir de la barre d'outils ou du menu";
tabo+=" insertion. Une Modal vous apparaitra vous demandant d'entrer le nombre de lignes et de colonne de votre";
tabo+=" tableau, comme vous pourrez définir la largeur de chaque colonnes en %.";
/*______________________________*/
var pict="<h4>Ajouter des images</h4><br/>Cliquez sur l'icône qui représente une image à partir de la barre d'outils ou du menu insertion, une modal";
pict+=" vous apparaitra vous demandant d'importer une image à partir de votre ordinateur vous pourrez aussi définir sa";
pict+=" longueur, sa largeur, ainsi que sa position et éventuellement une légende pour votre image.";
/*_______________________________*/
var lienInt="<h4>Liens internes</h4><br/>Vous pouvez créer des liens vers des pages de votre ordinateur pour cela choisissez \"Lien interne\" à ";
lienInt+="partir du menu insertion, une boite de dialogue vous apparaitra, dans le nom de la page entrez le chemin ";
lienInt+="relatif de la page ou vous voulez faire le lien, choisissez le type de la page (HTML, HTM) et le texte du lien";
lienInt+=" à afficher";
/*________________________________*/
var lienExt="<h4>Liens externes</h4><br/>Ce n'est autre qu'un lien vers une page web, vous devez alors entrer l'URL de la page web et le texte à ";
lienExt+="afficher pour le lien ";
/*_______________________________*/
var sig="<h4>Signets</h4><br/>Les signets ne sont autres que des Ancres ou des liens vers la même page. Cet éditeur vous permet l'insertion de ";
sig+="signets vers des paragraphes sur votre page. Pour créer un signet vers un paragraphe vous devez suivre les étapes ";
sig+="suivantes :<br/>";
sig+="    1. cliquez sur l'icône signet de la barre d’outils ou à partir du menu insertion, une boite de dialogue apparaitra vous demandant d'entrer le texte du signet, puis cliquez sur ok.<br/>";
sig+="    2. positionnez votre curseur ou vous voulez insérer le signet.<br/>";
sig+="    3. double-cliquez sur le paragraphe pour lequel vous voulez insérer le signet, après cela vous verrez apparaitre le lien du signet à l'endroit où vous avez positionné votre curseur,";
sig+="    le clique sur ce lien va provoquer un scroll down de votre page vers l'endroit où se trouve votre paragraphe.";
/*________________________________*/
var video="<h4>Iframe et Youtube</h4><br/>L’éditeur Danya vous donne la possibilité d'ajouter des vidéos iframes et youTube à vos pages.";
video+="Pour les iframes qui sont des vidéos à partir d'autres sites web et les vidéos youtube le concept est le même,";
video+=" il suffit juste d'entrer l'URL de la vidéo, définir sa longueur et sa largeur et éventuellement une légende pour votre vidéo, puis cliquez sur ok pour charger la vidéo sur votre page.";
/*_______________________________*/
var fich="<h4>Télécharger des fichiers</h4><br/>Cette fonction permet de télécharger un fichier local à partir de votre ordinateur ou un fichier externe.";
fich+="Vous pourrez insérer un fichier à partir du menu insertion, une modal vous apparaitra vous demandant d'entrer ";
fich+="le nom de votre fichier, définir si c'est un fichier local ou externe. Dans le cas d'un fichier local vous devez";
fich+=" l'importe à partir de votre ordinateur, et si c'est un fichier externe vous devez définir l'URL de la page qui le contient, le fichier apparaitra sur votre page sous forme d'un lien.";
/*_______________________________*/
var psts="<h4>Insertion de posts</h4><br/>Un poste est un lien vers un article interne ou un site externe, sous forme d'une petite icone avec du texte. Cette ";
psts+="fonctionnalité vous permettra l'insertion de plusieurs posts et cela à partir du menu insertion, l'article qui va ";
psts+="contenir les posts sera caractérisé par un titre, le nombre de posts qu'il va contenir et les icones en liens qui ne";
psts+=" sont autre que des images que l'utilisateur doit importer à partir de son ordinateur.";
/*_______________________________*/
var sect="<h4>Création de sections personnalisées</h4><br/>L’éditeur Danya offre la possibilité d'insérer des sections qui permettent de formater un texte d’une manière";
sect+=" particulière. Ainsi à partir du menu Création vous pourrez insérer une définition, une alerte, une observation, une";
sect+=" note, une règle mais aussi une forme qui va vous permettre en outre de créer d'autres sections en définissant leurs";
sect+=" titres et leurs contenus<br/>";
sect+="<b> Remarque</b> : ces sections peuvent être redimensionnées à volonté par l'utilisateur, une petite    flèche apparait lorsque vous faites passer la sourie sur les bordures de la section, vous n'aurez plus qu'à tirer sur cette flèche pour changer ses dimensions.";
/*_______________________________*/
var sliide="<h4>Création de Slides</h4><br/>Cette fonctionnalité va vous permettre de faire défiler une suite d'images en spécifiant un lien vers un article";
sliide+=" pour chaque image. Cliquez sur \"Slides\" à partir du menu création, dans la boite de dialogue spécifiez le nombre";
sliide+=" d'images à insérer puis cliquez sur \"importer les images\", vous devez des lors importer les images une par une";
sliide+=" et définir le lien vers un article pour chacune.";
/*_______________________________*/
var taab="<h4>Création de Tabs</h4><br/>Les Tabs ne sont autres qu'un menu à onglets qui peut contenir au maximum 8 onglets, cet éditeur permet l'insertion";
taab+=" de deux types de Tabs :<br/>*des Tabs simples.<br/> *des Tabs animés : l'animation se déclenche lorsque vous faites passer le curseur";
taab+=" au-dessus des onglets.<br/>La largeur des onglets comme la longueur de leur contenu peuvent être modifiés en tirant sur la petite";
taab+=" flèche qui apparait lorsque vous faites passer le curseur sur les bordures des Tabs.";
/*_________________________________*/
var lgD="<h4>Langage D</h4><br/>cet éditeur permet la création d’articles visuels, et de générer leur code en langage D.";
lgD+="Le langage D est un langage crée par Mr DAHAK Fouad dans le but de créer des articles sur la plateforme Danya, il est notamment destiné à des utilisateurs"
lgD+=" qui ne maitrisent pas le langage HTML et CSS vu que sa syntaxe est très facile et intuitive.";
/*________________________________*/

$("#par").click(function(){
	$("#accueil").prepend(parg);
});
$("#rub").click(function(){
	$("#accueil").prepend(rub);
});

$("#tit").click(function(){
	$("#accueil").prepend(titres);
});
$("#lst").click(function(){
	$("#accueil").prepend(list);
});

$("#F").click(function(){
	$("#accueil").prepend(mise);
});

$("#Ps").click(function(){
	$("#accueil").prepend(posit);
});

$("#tbl").click(function(){
	$("#accueil").prepend(tabo);
});
$("#mg").click(function(){
	$("#accueil").prepend(pict);
});
$("#lkIn").click(function(){
	$("#accueil").prepend(lienInt);
});
$("#lkEx").click(function(){
	$("#accueil").prepend(lienExt);
});
$("#Sg").click(function(){
	$("#accueil").prepend(sig);
});
$("#vd").click(function(){
	$("#accueil").prepend(video);
});
$("#fc").click(function(){
	$("#accueil").prepend(fich);
});

$("#pstA").click(function(){
	$("#accueil").prepend(psts);
});
$("#sec").click(function(){
	$("#accueil").prepend(sect);
});
$("#sld").click(function(){
	$("#accueil").prepend(sliide);
});
$("#tabA").click(function(){
	$("#accueil").prepend(taab);
});
$("#D").click(function(){
	$("#accueil").prepend(lgD);
});

$("#aide").click(function(){
	$("#accueil").html(accueil);
	$("#accueil").append(menu);
	$("#accueil").append(outil);	
	$("#accueil").append(bouton);
	
});

