/*
	Theory by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

(function($) {

	// Breakpoints.
		skel.breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

	// Off-Canvas Navigation.

		// Navigation Panel.
			$(
				'<div id="navPanel">' +
					$('#nav').html() +
					'<a href="#navPanel" class="close"></a>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left'
				});

		// Fix: Remove transitions on WP<10 (poor/buggy performance).
			if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
				$('#navPanel')
					.css('transition', 'none');

	});

})(jQuery);

$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBfRW-YYR7PlxaAPpF0m146ys_oPofI-FY",
    authDomain: "cam-servicios.firebaseapp.com",
    databaseURL: "https://cam-servicios.firebaseio.com",
    projectId: "cam-servicios",
    storageBucket: "cam-servicios.appspot.com",
    messagingSenderId: "184890645319"
  };
  firebase.initializeApp(config);
  var db = firebase.firestore();
// Add a new document in collection "cities"
function EnviarPedido() {

var Nombre = document.Pedido.name.value;
var RIF = document.Pedido.RIF.value;
var Direccion = document.Pedido.Direccion.value;
var email = document.Pedido.email.value;
var Telefono = document.Pedido.Telefono.value;
var SDWEB = document.Pedido.SDWeb.value;
var SPWEB = document.Pedido.SPWeb.value;
var SMWEB = document.Pedido.SMWeb.value;
if (SDWEB =="--Servicio Web--") {
	SDWEB = "";
}
	if (SPWEB =="--Servicio Programacion Web--") {
		SPWEB = "";
	}
		if (SMWEB =="--Servicio Branding--") {
			SMWEB = "";
		}
var Servicios = SDWEB+' '+ SPWEB+' '+ SMWEB;
var Comentarios= document.Pedido.comments.value;
var docRef = db.collection("Pedidos").doc(Nombre);
var dataen ='name='+Nombre+'&RIF=' + RIF+'&Direccion=' + Direccion+'&email=' +email+'&Telefono=' +Telefono +'&comments='+ Comentarios;

docRef.get().then(function(doc) {
    if (doc.exists) {
        alert('Ya has enviado una solicitud de servicio');
    } else {
      
        // doc.data() will be undefined in this case
        db.collection("Pedidos").doc(Nombre).set({
    Nombre:Nombre,
    RIF:RIF,
    Direccion:Direccion,
    email:email,
    Telefono:Telefono,
    Servicios:Servicios,
    Especificaciones:Comentarios,
    Porcentaje:"0%",
    Pago:"Sin definir",
    Desarrollo:"Sin empezar",
    Link:"Aún no creado",
    Fecha:"Sin definir,"

})
.then(function() {
    console.log("Document successfully written!");
    alert('Pedido solicitado con exito');
})
.catch(function(error) {
    console.error("Error writing document: ", error);
    alert('Hubo un error en el envío del pedido');
});
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
    alert('Hubo un error en el envío del pedido');
});
  return false;
}
//Consulta A la Base de Datos
i = ["NombreS","Desarrollo","Pago","Porcentaje","Link","Fecha"];
function consultar() {
            document.getElementById(i[0]).innerHTML = " ";
            document.getElementById(i[1]).innerHTML = " ";
            document.getElementById(i[2]).innerHTML = " ";
            document.getElementById(i[3]).innerHTML = " ";
            document.getElementById(i[4]).innerHTML = " ";
            document.getElementById(i[5]).innerHTML = " ";
var RIFC = document.getElementById('RIFC').value;

db.collection("Pedidos").where("RIF", "==", RIFC)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            console.log(doc);
             // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            var A = doc.data();
            Condicion = A.Nombre;
            alert(Condicion);
            document.getElementById(i[0]).innerHTML = A.Nombre;
            document.getElementById(i[1]).innerHTML = A.Desarrollo;
            document.getElementById(i[2]).innerHTML = A.Pago;
            document.getElementById(i[3]).innerHTML = A.Porcentaje;
            document.getElementById(i[4]).innerHTML = A.Link;
            document.getElementById(i[5]).innerHTML = A.Fecha;
           
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
           
    });
    window.setTimeout(function Validar0() {
    
      
      if (document.getElementById(i[0]).value == undefined) {
        alert('El RIF ingresado no se encuentra registrado en nuestras solicitudes');
      }
      },5000);
      
      
    }
  if (screen.width <= 500 ) {
    document.getElementById("contact").setAttribute("class", "0");
  }        


	