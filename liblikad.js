$(function(){
	var koond = [{"eesti":"Aasa-verikireslane","ladina":"Zygaena lonicerae","url":["http://liblikad.loodus.ee/pildid/3368_080709aa027.jpg"]},{"eesti":"Admiral","ladina":"Vanessa atalanta","url":["http://liblikad.loodus.ee/pildid/3378_080907aa187.jpg","http://liblikad.loodus.ee/pildid/3379_090804aa387.jpg","http://liblikad.loodus.ee/pildid/2652_vanessa_atalanta_Xf.jpg"]},{"eesti":"Aruheina-viirgpunnpea","ladina":"Thymelicus sylvestris","url":["http://liblikad.loodus.ee/pildid/3377_130630aa130.jpg","http://liblikad.loodus.ee/pildid/3376_130630aa112.jpg"]},{"eesti":"Haavalumik","ladina":"Limenitis populi","url":["http://liblikad.loodus.ee/pildid/3391_110617aa294.jpg","http://liblikad.loodus.ee/pildid/3392_050702aa003.jpg","http://liblikad.loodus.ee/pildid/2701_limenitis_populi_Xm.jpg"]},{"eesti":"Harilik kannikesetäpik","ladina":"Boloria (Clossiana) selene","url":["http://liblikad.loodus.ee/pildid/3399_080709aa175.jpg","http://liblikad.loodus.ee/pildid/2746_boloria_selene_Xm.jpg"]},{"eesti":"Harilik lottsuru","ladina":"Hemaris tityus","url":["http://liblikad.loodus.ee/pildid/3365_970614ut166.jpg"]},{"eesti":"Harilik sinepiliblikas","ladina":"Leptidea sinapis","url":["http://liblikad.loodus.ee/pildid/3350_virnaperhonen_tunn.jpg"]},{"eesti":"Harilik taevastiib","ladina":"Polyommatus amandus","url":["http://liblikad.loodus.ee/pildid/3369_110617aa311.jpg","http://liblikad.loodus.ee/pildid/3370_080724aa210.jpg"]},{"eesti":"Harilik tumesilmik","ladina":"Lasiommata maera","url":["http://liblikad.loodus.ee/pildid/2706_lasiommata_maera_Xm.jpg","http://liblikad.loodus.ee/pildid/3395_120701aa115.jpg"]},{"eesti":"Harilik tõmmusilmik","ladina":"Erebia ligea","url":["http://liblikad.loodus.ee/pildid/2722_erebia_ligea_Xfm.jpg","http://liblikad.loodus.ee/pildid/3396_100710aa023.jpg"]},{"eesti":"Harilik viirgpunnpea","ladina":"Thymelicus lineola","url":["http://liblikad.loodus.ee/pildid/2644_thymelicus_lineola_Xf.jpg"]},{"eesti":"Helmika-aasasilmik","ladina":"Coenonympha glycerion","url":["http://liblikad.loodus.ee/pildid/2736_coenonympha_glycerion_Xm.jpg","http://liblikad.loodus.ee/pildid/2735_coenonympha_glycerion_Xf.jpg"]},{"eesti":"Hõbetäpik","ladina":"Argynnis (Mesoacidalia) aglaja","url":["http://liblikad.loodus.ee/pildid/2760_argynnis_aglaja_Xf.jpg"]},{"eesti":"Kesasilmik","ladina":"Maniola jurtina","url":["http://liblikad.loodus.ee/pildid/2690_maniola_jurtina_Xm.jpg","http://liblikad.loodus.ee/pildid/2689_maniola_jurtina_Xf.jpg"]},{"eesti":"Kevadsinitiib","ladina":"Celastrina argiolus","url":["http://liblikad.loodus.ee/pildid/2738_celastrina_argiolus_Xm.jpg","http://liblikad.loodus.ee/pildid/2737_celastrina_argiolus_Xf.jpg"]},{"eesti":"Kimalas-lottsuru","ladina":"Hemaris fuciformis","url":["http://liblikad.loodus.ee/pildid/3367_120525aa264.jpg","http://liblikad.loodus.ee/pildid/3366_120525aa269.jpg"]},{"eesti":"Koerliblikas","ladina":"Aglais urticae","url":["http://liblikad.loodus.ee/pildid/3406_080711aa266.jpg","http://liblikad.loodus.ee/pildid/2770_aglais_urticae_XJ.jpg"]},{"eesti":"Koiduliblikas","ladina":"Anthocharis cardamines","url":["http://liblikad.loodus.ee/pildid/2767_anthocharis_cardamines_Xm.jpg","http://liblikad.loodus.ee/pildid/2766_anthocharis_cardamines_Xf.jpg"]},{"eesti":"Kollakas aasasilmik","ladina":"Coenonympha pamphilus","url":["http://liblikad.loodus.ee/pildid/2734_coenonympha_pamphilus_Xm.jpg"]},{"eesti":"Kollatähn-pajuliblikas","ladina":"Nymphalis polychloros","url":["http://liblikad.loodus.ee/pildid/2682_nymphalis_polychloros_Xm.jpg"]},{"eesti":"Lapsuliblikas","ladina":"Gonepteryx rhamni","url":["http://liblikad.loodus.ee/pildid/2712_gonepteryx_rhamni_Xm.jpg","http://liblikad.loodus.ee/pildid/2711_gonepteryx_rhamni_Xf.jpg"]},{"eesti":"Leek-kuldtiib","ladina":"Lycaena phlaeas","url":["http://liblikad.loodus.ee/pildid/2694_lycaena_phlaeas_Xm.jpg","http://liblikad.loodus.ee/pildid/3390_090804aa275.jpg"]},{"eesti":"Leinaliblikas","ladina":"Nymphalis antiopa","url":["http://liblikad.loodus.ee/pildid/2683_nymphalis_antiopa_Xm.jpg","http://liblikad.loodus.ee/pildid/3389_050925aa081.jpg"]},{"eesti":"Luhatäpik","ladina":"Brenthis ino","url":["http://liblikad.loodus.ee/pildid/3398_090708aa042.jpg","http://liblikad.loodus.ee/pildid/2744_brenthis_ino_Xf.jpg"]},{"eesti":"Mesika-sinitiib","ladina":"Plebeius (Plebeius) idas","url":["http://liblikad.loodus.ee/pildid/2667_plebejus_idas_Xm.jpg","http://liblikad.loodus.ee/pildid/2666_plebejus_idas_Xf.jpg"]},{"eesti":"Mustlaik-apollo","ladina":"Parnassius mnemosyne","url":["http://liblikad.loodus.ee/pildid/3385_130530aa278.jpg","http://liblikad.loodus.ee/pildid/2674_parnassius_mnemosyne_Xf.jpg"]},{"eesti":"Musttähn-kuldpunnpea","ladina":"Carterocephalus silvicola","url":["http://liblikad.loodus.ee/pildid/2740_carterocephalus_silvicola_Xm.jpg","http://liblikad.loodus.ee/pildid/2739_carterocephalus_silvicola_Xf.jpg"]},{"eesti":"Naeriliblikas","ladina":"Pieris napi","url":["http://liblikad.loodus.ee/pildid/3384_060527aa125.jpg","http://liblikad.loodus.ee/pildid/3383_040721aa086.jpg","http://liblikad.loodus.ee/pildid/2673_pieris_napi_Xm.jpg"]},{"eesti":"Niidu-sinepiliblikas","ladina":"Leptidea juvernica","url":["http://liblikad.loodus.ee/pildid/3351_tummavirnaperhonen_tunn.jpg"]},{"eesti":"Niidupunnpea","ladina":"Ochlodes sylvanus","url":["http://liblikad.loodus.ee/pildid/3387_080710aa028.jpg","http://liblikad.loodus.ee/pildid/2680_ochlodes_sylvanus_Xm.jpg"]},{"eesti":"Niidutäpik","ladina":"Argynnis (Argyronome) laodice","url":["http://liblikad.loodus.ee/pildid/2759_argynnis_laodice_Xm.jpg","http://liblikad.loodus.ee/pildid/3401_140717aa290.jpg"]},{"eesti":"Nõgeseliblikas","ladina":"Araschnia levana","url":["http://liblikad.loodus.ee/pildid/2790_araschania_levana_II_Xf.jpg","http://liblikad.loodus.ee/pildid/2789_araschia_levana_I_Xf.jpg"]},{"eesti":"Ogasäär-sinitiib","ladina":"Plebeius aquilo","url":["http://liblikad.loodus.ee/pildid/2671_plebejus_argus_Xm.jpg","http://liblikad.loodus.ee/pildid/2670_plebejus_argus_Xf.jpg"]},{"eesti":"Ohakaliblikas","ladina":"Vanessa cardui","url":["http://liblikad.loodus.ee/pildid/3397_090816aa083.jpg","http://liblikad.loodus.ee/pildid/2724_cynthia_cardui_Xa.jpg"]},{"eesti":"Orasheinasilmik","ladina":"Pararge aegeria","url":["http://liblikad.loodus.ee/pildid/2676_pararge_aegeria_Xm.jpg"]},{"eesti":"Pisi-sinitiib","ladina":"Cupido (Cupido) minimus","url":["http://liblikad.loodus.ee/pildid/2725_cupido_minimus_Xf.jpg"]},{"eesti":"Põhja-tõmmusilmik","ladina":"Erebia embla","url":["http://liblikad.loodus.ee/pildid/2723_erebia_embla_Xm.jpg"]},{"eesti":"Põualiblikas","ladina":"Aporia crataegi","url":["http://liblikad.loodus.ee/pildid/3403_110610aa111.jpg","http://liblikad.loodus.ee/pildid/2762_aporia_crataegi_Xm.jpg"]},{"eesti":"Päevapaabusilm","ladina":"Inachis io","url":["http://liblikad.loodus.ee/pildid/3371_990728aa005.jpg","http://liblikad.loodus.ee/pildid/3373_090816aa057.jpg","http://liblikad.loodus.ee/pildid/3372_090816aa002.jpg"]},{"eesti":"Päevasuru","ladina":"Macroglossum stellatarum","url":["https://c1.staticflickr.com/7/6102/6226118878_5fd184d117_b.jpg","https://pixabay.com/static/uploads/photo/2013/06/16/22/52/macroglossum-stellatarum-porcellus-139759_960_720.jpg"]},{"eesti":"Pääsusaba","ladina":"Papilio machaon","url":["http://liblikad.loodus.ee/pildid/2677_papilio_machaon_Xm.jpg","http://liblikad.loodus.ee/pildid/3386_020510aa029.jpg"]},{"eesti":"Raba-võiliblikas","ladina":"Colias palaeno","url":["http://liblikad.loodus.ee/pildid/2729_colias_palaeno_Xm.jpg","http://liblikad.loodus.ee/pildid/2728_colias_palaeno_Xf.jpg"]},{"eesti":"Rabasilmik","ladina":"Oeneis (Oeneis) jutta","url":["http://liblikad.loodus.ee/pildid/2679_oeneis_jutta_Xfm.jpg"]},{"eesti":"Ristikheina-taevastiib","ladina":"Polyommatus icarus","url":["https://upload.wikimedia.org/wikipedia/commons/4/4c/Common_Blue_%28Polyommatus_icarus%29.jpg","https://upload.wikimedia.org/wikipedia/commons/0/0f/Polyommatus_icarus_Miko%C5%82%C3%B3w.jpg"]},{"eesti":"Rohekireslane","ladina":"Adscita statices","url":["http://www.naturspaziergang.de/Nachtfalter/Zygaenidae/Zygaenidae_Fotos/Adscita_statices_Rhoen.jpg"]},{"eesti":"Rohetiib","ladina":"Callophrys rubi","url":["http://liblikad.loodus.ee/pildid/2768_callophrys_rubi_Xm.jpg","http://liblikad.loodus.ee/pildid/2742_callophrys_rubi_Xf.jpg"]},{"eesti":"Rohetäpik","ladina":"Argynnis (Argynnis) paphia","url":["http://liblikad.loodus.ee/pildid/3400_990728aa020.jpg","http://liblikad.loodus.ee/pildid/2757_argynnis_paphia_Xm.jpg"]},{"eesti":"Rohusilmik","ladina":"Aphantopus hyperantus","url":["http://liblikad.loodus.ee/pildid/3404_080709aa284.jpg","http://liblikad.loodus.ee/pildid/2763_aphantopus_hyperantus_Xfm.jpg"]},{"eesti":"Sootäpik","ladina":"Boloria (Boloria) aquilonaris","url":["http://liblikad.loodus.ee/pildid/2750_boloria_aquilonaris_Xm.jpg"]},{"eesti":"Suur-kapsaliblikas","ladina":"Pieris brassicae","url":["http://liblikad.loodus.ee/pildid/2774_pieris_brassicae_Xm.jpg","http://liblikad.loodus.ee/pildid/2773_pieris_brassicae_Xf.jpg"]},{"eesti":"Suur-kiirgliblikas","ladina":"Apatura iris","url":["http://liblikad.loodus.ee/pildid/3405_100710aa020.jpg","http://liblikad.loodus.ee/pildid/2764_apatura_iris_Xm.jpg"]},{"eesti":"Suur-kuldtiib","ladina":"Lycaena dispar","url":["http://liblikad.loodus.ee/pildid/2699_lycaena_dispar_Xm.jpg","http://liblikad.loodus.ee/pildid/2698_lycaena_dispar_Xf.jpg"]},{"eesti":"Suur-mosaiikliblikas","ladina":"Euphydryas maturna","url":["http://liblikad.loodus.ee/pildid/2719_euphydryas_maturna_Xfm.jpg"]},{"eesti":"Suur-pärlmuttertäpik","ladina":"Argynnis (Fabriciana) adippe","url":["http://liblikad.loodus.ee/pildid/3402_090816aa097.jpg","http://liblikad.loodus.ee/pildid/2761_argynnis_adippe_Xm.jpg"]},{"eesti":"Suur-verikireslane","ladina":"Zygaena filipendulae","url":["https://upload.wikimedia.org/wikipedia/commons/e/eb/Zygaena_filipendulae_Hiiumaa.jpg"]},{"eesti":"Sõõrsilmik","ladina":"Lopinga achine","url":["http://liblikad.loodus.ee/pildid/2700_lopinga_achine_Xm.jpg"]},{"eesti":"Teelehe-mosaiikliblikas","ladina":"Euphydryas aurinia","url":["http://liblikad.loodus.ee/pildid/2720_euphydryas_aurinia_Xm.jpg"]},{"eesti":"Toominga-kannustiib","ladina":"Satyrium pruni","url":["http://liblikad.loodus.ee/pildid/2653_satyrium_pruni_Xfm.jpg"]},{"eesti":"Tähnik-sinitiib","ladina":"Phengaris arionides","url":["http://insecta.pro/images/1024/28745.jpg","http://insecta.pro/images/1024/21062.jpg"]},{"eesti":"Valgetähn-pajuliblikas","ladina":"Nymphalis xanthomelas","url":["http://liblikad.loodus.ee/pildid/2681_nymphalis_xanthomelas_Xm.jpg","http://liblikad.loodus.ee/pildid/3388_140329aa134.jpg"]},{"eesti":"Valgetäpp-kuldtiib","ladina":"Lycaena virgaureae","url":["http://liblikad.loodus.ee/pildid/2693_lycaena_virgaureae_Xm.jpg","http://liblikad.loodus.ee/pildid/2692_lycaena_virgaureae_Xf.jpg"]},{"eesti":"Varane kannikesetäpik","ladina":"Boloria (Clossiana) euphrosyne","url":["http://liblikad.loodus.ee/pildid/2748_boloria_euphrosyne_Xm.jpg"]},{"eesti":"Varane tumesilmik","ladina":"Lasiommata petropolitana","url":["http://liblikad.loodus.ee/pildid/2705_lasiommata_petropolitana_Xfm.jpg"]},{"eesti":"Vareskaera-aasasilmik","ladina":"Coenonympha hero","url":["http://liblikad.loodus.ee/pildid/3375_940625ut487.jpg","http://liblikad.loodus.ee/pildid/3374_100615aa127.jpg"]},{"eesti":"Väike-kapsaliblikas","ladina":"Pieris rapae","url":["http://liblikad.loodus.ee/pildid/2672_pieris_rapae_Xf.jpg"]},{"eesti":"Väike-kiirgliblikas","ladina":"Apatura ilia","url":["http://liblikad.loodus.ee/pildid/2765_apatura_ilia_Xm.jpg"]},{"eesti":"Väike-kärbtiib","ladina":"Polygonia c-album","url":["http://liblikad.loodus.ee/pildid/3381_100523aa195.jpg","http://liblikad.loodus.ee/pildid/2663_polygonia_c-album_Xf.jpg"]},{"eesti":"Väike-pärlmuttertäpik","ladina":"Argynnis (Fabriciana) niobe","url":["http://liblikad.loodus.ee/pildid/2758_argynnis_niobe_Xm.jpg"]},{"eesti":"Väike-täpikpunnpea","ladina":"Pyrgus malvae","url":["http://liblikad.loodus.ee/pildid/2654_pyrgus_malvae_Xm.jpg","http://liblikad.loodus.ee/pildid/3380_020519ut190.jpg"]},{"eesti":"Väikelumik","ladina":"Limenitis camilla","url":["http://liblikad.loodus.ee/pildid/3394_020615ut268.jpg","http://liblikad.loodus.ee/pildid/3393_020615ut269.jpg","http://liblikad.loodus.ee/pildid/2702_limenitis_camilla_Xfm.jpg"]}];
  var buttons = document.getElementsByClassName("answer");
  var correctAnswer;
  var scoreDiv = document.getElementsByClassName("score");
  var langEst = document.getElementById("est");
  //var langLatin = document.getElementById("latin"); Currently not in use
  var score = 0;
  var answeredQuestions = 0;
  var ndx=0;
  
  function shuffle(a) {
		var j, x, i;
		for (i = a.length; i; i -= 1) {
			j = Math.floor(Math.random() * i);
			x = a[i - 1];
			a[i - 1] = a[j];
			a[j] = x;
		}
	}
               
  function assignCorrectAnswer() {
    correctAnswer = buttons[Math.floor(Math.random() * buttons.length)];
  }
  
  function newQuestion(){
    shuffle(koond);
    var url = koond[3].url[Math.round(Math.random() * (koond[3].url.length-1))];
		$(".answer").css("background-color",'');
    $("#forward").css({"border": "2px solid #707B7C", "background-color": "#ddd", "color": "#bbb", "cursor": "default", "box-shadow": "none"});
    $(".answer").css("cursor", "pointer");
    $(".answer").html('');
    assignCorrectAnswer();
    for (var i = 0; i < buttons.length; i++) {
      $(buttons[i]).html(koond[i].eesti);
    }
    $(correctAnswer).html(koond[3].eesti);
    $("#testImg").attr("src", url);
    oneClickPerTurn();
  }

  /*function newLatinQuestion(){
    shuffle(koond);
    var url = koond[3].url[Math.round(Math.random() * (koond[3].url.length-1))];
		$(".answer").css("background-color",'');
    $("#forward").css({"border": "2px solid #707B7C", "background-color": "#ddd", "color": "#bbb", "cursor": "default", "box-shadow": "none"});
    $(".answer").css("cursor", "pointer");
    $(".answer").html('');
    assignCorrectAnswer();
    for (var i = 0; i < buttons.length; i++) {
      $(buttons[i]).html(koond[i].ladina);
    }
    $(correctAnswer).html(koond[3].ladina);
    $("#testImg").attr("src", url);
    oneClickPerTurn();
  }*/

  function oneClickPerTurn() {
    for (var i = 0; i < buttons.length; i++) {
      $(buttons[i]).on("click", guess);
    }
    $("#forward").off("click"); //To avoid adding points by skipping questions
  }

  function begin() {
    if (this == langEst){
      $("#hideShow").show();
      $(".answer").show();
      $(".score").show();
      $("#est").css("display", "none");
      $("#forward").show();
      newQuestion();
    } else{
      $("#hideShow").show();
      $(".answer").show();
      $(".score").show();
      $("#est").css("display", "none");
      $("#forward").show();
      newLatinQuestion();
    }
  }

  function guess() {
    if (this == correctAnswer){
      score++;
      answeredQuestions++;
      $(".score").html("Punktid: " + score + " / " + answeredQuestions);
      $(correctAnswer).css('background-color','#2ECC71');
      $("#forward").css({"border": "2px solid #000", "color": "#424949", "cursor": "pointer", "box-shadow": "2px 2px 7px #444"});
      $(".answer").css("cursor", "default");
      $(buttons).off("click"); //To avoid getting multiple points on one turn
      $("#forward").on("click", newQuestion); //For further development - how to determine if next question should be in est or in latin?
    } else {
      answeredQuestions++;
      $(".score").html("Punktid: " + score + " / " + answeredQuestions);
      $(correctAnswer).css('background-color','#2ECC71');
      $(this).css('background-color','#E74C3C');
      $("#forward").css({"border": "2px solid #000", "color": "#424949", "cursor": "pointer", "box-shadow": "2px 2px 7px #444"});
      $(".answer").css("cursor", "default");
      $(buttons).off("click");
      $("#forward").on("click", newQuestion);
    }
  }

  function toggleAnswer(){
			$(".answer").toggle();
	}

$("#est").on("click", begin);
//$("#latin").on("click", begin);
//$("#forward").on("click", oneClickPerTurn);
$("#hideShow").on("click", toggleAnswer);
	});