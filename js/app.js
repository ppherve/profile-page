$(document).ready(function(){
	$('body').on('click','a', function()
          {
              $('.cache').hide();
              var val =$(this).attr('href');
              $(val).show();

          });


  $.getJSON("http://vps227573.ovh.net/u-4.json",function(data){  //recupere les donnees ds le lien,les attribue à l'argument data//
		var result = $('[elt]');									//liste ls balises qui ont l'attribut 'elt' et les met ds la variable ' result' sous forme de tableau//  
		for(var i = 0; i < result.length; i++){						// for: boucle. demarre valeur 0,tant que la longueur du tableau n'est pas atteinte, execution code//
			var attribut = $ (result[i]).attr("elt");				//le $ va chercher un element HTML(DOM), charge 1er element de 'result', passe en revue les elements qui possedent l'attribut 'elt'//
    // .attr('elt') = est une methode = qui renvoie la valeur de l'attribut, par ex 'first_name' ici //
    //la valeur de l'attribut a ete recuperé et conservé dans la variable 'attribut'// 
			var valeur = data[attribut];// =affection LIRE de droite à gauche , dc on recupere la valeur correspond à la CLEF [attribut] qui se trouve dans DATA
    // par ex : si attribut = "first_name" cela renverra à la valeur " hervé "
			$(result[i]).html(valeur);// affecter la valeur (valeur ) à l'element 'html' conservé dans le resultat [i]
//par ex ; pr l 'element' avc l attribut 'elt' = first_name il va inserer la valeur ' karine' entre les balises 'elt'//
		};

	});

// un OBJET  est definit par des acollades, et les donnees sont entre "" et sont des associations "clef" : "valeur", //
 
  });