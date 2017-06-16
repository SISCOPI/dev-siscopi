
$(function () {
	$( "#proyectoAccordion" ).accordion();
	$('a[href="#masPro"]').click(function(){
		event.preventDefault();
		$( "#masinfproyecto" ).dialog( "open" );

	}); 
	$('a[href="#proAsociada"]').click(function(){
		event.preventDefault();
		$( "#masinfpropuesta" ).dialog( "open" );

	}); 
	
	
	//dialogos
	$( "#masinfpropuesta" ).dialog({
		autoOpen: false,
		width: 'auto', // overcomes width:'auto' and maxWidth bug
		maxWidth: 1200,
		height: 'auto',
		maxHeight: 600,
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
	
	$( "#masinfproyecto" ).dialog({
		autoOpen: false,
		width: 'auto', // overcomes width:'auto' and maxWidth bug
		maxWidth: 1200,
		height: 'auto',
		maxHeight: 600,
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
		
	//datatables
	$('#tproyectos').DataTable( {
        "pagingType": "full_numbers",
		responsive: true,
		"scrollX": true,
		"language": {
        "sProcessing":    "Procesando...",
        "sLengthMenu":    "Mostrar _MENU_ registros",
        "sZeroRecords":   "No se encontraron resultados",
        "sEmptyTable":    "Ningún dato disponible en esta tabla",
        "sInfo":          "Mostrando registros del _START_ al _END_ de un total de _TOTAL_",
        "sInfoEmpty":     "Mostrando registros del 0 al 0 de un total de 0",
        "sInfoFiltered":  "(filtrado de un total de _MAX_ registros)",
        "sInfoPostFix":   "",
        "sSearch":        "Buscar:",
        "sUrl":           "",
        "sInfoThousands":  ",",
        "sLoadingRecords": "Cargando...",
        "oPaginate": {
            "sFirst":    "Primero",
            "sLast":    "Último",
            "sNext":    "Siguiente",
            "sPrevious": "Anterior"
        },
        "oAria": {
            "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
            "sSortDescending": ": Activar para ordenar la columna de manera descendente"
        }
		}
    });
});