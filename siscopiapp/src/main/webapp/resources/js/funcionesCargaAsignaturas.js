//funcionesCargaAsignaturas


function altaAsignatura(){
	validaHorario();
	
}
function validaHorario(){
	
}
function anteriorSiguiente(valor){
	event.preventDefault(); 
	//console.log("anteriorsiguiente:"+valor);
	
	
	if(parseInt(valor)==0){
		$("#altaAsignaturaAplica").hide();
		$("#altaAsignatura").show();
	}
	if(parseInt(valor)==1){
		console.log("aplica");
		copiarValores();
		$("#altaAsignatura").hide();
		$("#altaAsignaturaAplica").show();
	}
	
	if(parseInt(valor)==3){
		$(".section" ).hide();
		$("#dinamico").load("cargaAsignaturas.html")
		$("#dinamico").show();
	}
	if(parseInt(valor)==4){
		$(".section" ).hide();
		$("#dinamico").load("cargaAsignaturas.html")
		$("#dinamico").show();
		$("#confirmaCA").dialog( "open" );
	}
	
}

function copiarValores(){
	$("#lclavea").text($("#clave").val());
	$("#lasignatura").text($("#asignaturan").val());
	$("#lgrupoa").text($("#grupo").val());
	
	$("#lnombrep").text($("#nombrep").val());
	$("#lapp").text($("#ap").val());
	$("#lamp").text($("#am").val());
}
function addAula(){
	console.log("add aula");
	cellsel.text($("#aula").val());
	cellsel="";
}
$(function () {
	console.log("fecha actual:"+fechaActual());
	$("#fechahoy2").text(fechaActual());
	$( "#aulaD" ).dialog({
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
							isHighlighted=false;
							$(cellsel).toggleClass("highlighted", isHighlighted);
                             $(this).dialog('close');
							 
                         }, 
                class: 'button-acepta'
            },
			{
				text  : 'Aceptar', 
                click : function() {
							addAula();
                            $(this).dialog('close');
                         }, 
                class: 'button-acepta'
            }
			]
		});
	
	$( "#confirmaCA" ).dialog({
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
								$( this ).dialog('close')
							}
					}
				]
		});
		
		
	
});



