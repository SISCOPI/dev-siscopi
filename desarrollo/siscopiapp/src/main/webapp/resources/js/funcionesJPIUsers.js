
function masInfUser(){
	$("#dialog-borrar" ).dialog( "open" );
}

$(function () {
	$("#fechahoy").text(fechaActual());
	var selectedRow;
	$.datepicker.setDefaults($.datepicker.regional['es-MX']);
	$("#isemestre").datepicker();
	$("#fsemestre").datepicker();
	$("#ieva1").datepicker();
	$("#ieva2").datepicker();
	$("#ieva3").datepicker();
	$("#ievaf").datepicker();
	
	$("#feva1").datepicker();
	$("#feva2").datepicker();
	$("#feva3").datepicker();
	$("#fevaf").datepicker();
	
	//acciones tabla resultados búsqueda de usuarios
	$('a[href="#buscarU"]').click(function(){
		event.preventDefault();
		$( "#buscaUD" ).dialog( "open" );

	}); 
	$('a[href="#borrarU"]').click(function(){
		event.preventDefault();
		$( "#dialog-borrar" ).dialog( "open" );
	});
	$('a[href="#modificarU"]').click(function(){
		event.preventDefault();
		selectedRow = $(this).parent().parent();
		var arrDU=new Array();
		console.log( selectedRow ); //just to see what the row looks like
		var td = selectedRow.children('td');
		for (var i = 0; i < td.length; ++i) {
			console.log(i + ': ' + td.eq(i).text());
			arrDU.push(td.eq(i).text());
		}
		var nombreArr=arrDU[1].split(" ")
		var nombres=nombreArr[0];
		var aps=nombreArr[1];
		var ams=nombreArr[2];
		var emails=arrDU[3];
		$("#nombreMU").val(nombres);
		$("#apMU").val(aps);
		$("#amMU").val(ams);
		$("#emailMU").val(emails);
		$( "#modifU" ).dialog( "open" );
	});
	
	//dialogo mas información búsqueda de usuarios
	$( "#buscaUD" ).dialog({
		autoOpen: false,
		width: 'auto', // overcomes width:'auto' and maxWidth bug
		maxWidth: 1200,
		height: 'auto',
		modal: true,
		fluid: true, //new option
		resizable: false,
		buttons: [
					{
						text: "Aceptar",
						click: function() {
								$( this ).dialog( "close" );
							}
					}
				]
		});
	$( "#dialog-borrar" ).dialog({
		  title: '¡Importante!',
		  resizable: false,
		  height: "auto",
		  width: 400,
		  modal: true,
		  autoOpen: false,
		  buttons : [
			{
				text  : 'Cancelar', 
                click : function() {
                             $(this).dialog('close')
                         }, 
                class: 'button-acepta'
            },
			{
				text  : 'Aceptar', 
                click : function() {
                             $(this).dialog('close')
                         }, 
                class: 'button-acepta'
            }
			]
		});
		
		$( "#dialog-modificar" ).dialog({
		  title: '¡Importante!',
		  resizable: false,
		  height: "auto",
		  width: 400,
		  modal: true,
		  autoOpen: false,
		  buttons : [
			{
				text  : 'Cancelar', 
                click : function() {
                             $(this).dialog('close')
                         }, 
                class: 'button-acepta'
            },
			{
				text  : 'Aceptar', 
                click : function() {
							 
                             $(this).dialog('close')
							 $( "#confirma" ).dialog( "open" );
							 
                         }, 
                class: 'button-acepta'
            }
			]
		});

		$( "#confirmaAltaUser" ).dialog({
		  title: '¡Importante!',
		  resizable: false,
		  height: "auto",
		  width: 400,
		  modal: true,
		  autoOpen: false,
		  buttons : [
			{
				text  : 'Cancelar', 
                click : function() {
                             $(this).dialog('close')
                         }, 
                class: 'button-acepta'
            },
			{
				text  : 'Aceptar', 
                click : function() {
                             $(this).dialog('close')
                         }, 
                class: 'button-acepta'
            }
			]
		});
//dialogo modificar búsqueda de usuarios
	$( "#modifU" ).dialog({
			autoOpen: false,
			width: 'auto', // overcomes width:'auto' and maxWidth bug
			maxWidth: 1200,
			height: 'auto',
			modal: true,
			fluid: true, //new option
			resizable: false,
			  buttons : [
				{
					text  : 'Cancelar', 
					click : function() {
								 $(this).dialog('close')
							 }, 
					class: 'button-acepta'
				},
				{
					text  : 'Aceptar', 
					click : function() {
								$( "#dialog-modificar" ).dialog( "open" );
							 }, 
					class: 'button-acepta'
				}
				]
		});
			
	//botones eventos
	$('#altaUsuario').click(function(){
		 $( "#confirmaAltaUser" ).dialog( "open" );
		
	});
});

function salir(){
	$(".section" ).hide();
	$("#fechasG" ).hide();
	$("#iniciodiv" ).show();
	
}
