
function salir(opcion){
	if(opcion==1){
	window.location = "index.html";
	}
	if(opcion==2){
	window.location = "indexjpi.html";
	}
	if(opcion==3){
	window.location = "indexProfesor.html";
	}
}

function fechaActual(){
	var f = new Date();
	var fh= f.getDate()+"/"+(f.getMonth() +1)+"/"+f.getFullYear();
	return fh;
}

//function ponerFechaActual(){
//	var f = new Date();
//	 var fh= f.getDate()+"/"+(f.getMonth() +1)+"/"+f.getFullYear();
//	 
//	 document.getElementById("fechahoy").innerHTML = fh;
//}


function siguiente(opcion){
	
	event.preventDefault(); 
	if(parseInt(opcion)==6){
	$("#altaProyecto" ).load("altaProyectoP.html");	
	}
	if(parseInt(opcion)==0){
	$("#altaProyecto").load("altaProyecto.html");
	}
	if(parseInt(opcion)==1){
	$("#altaProyecto").load("altaProyecto2.html");
	}
	if(parseInt(opcion)==2){
	$("#altaProyecto" ).load("altaProyecto3.html");	
	}
	if(parseInt(opcion)==3){
	$("#altaProyecto" ).load("altaProyecto4.html");	
	}
	if(parseInt(opcion)==4){
	$("#altaProyecto" ).load("altaProyecto5.html");	
	}
	if(parseInt(opcion)==5){
	$("#altaProyecto" ).load("altaProyecto5.html");	
	}
	
}

function siguiente2(opcion, titulo){
	if(parseInt(opcion)==0){
	$("#altaProyecto").load("altaProyecto.html");
	$("#titulo").val(titulo);
	}
}

function cargaHoras(){
	var horas= new Array("00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00","24:00");
	var hora="";
	for(i=0;i< horas.length;i++) {
		hora = horas[i];

		$('#thorario tbody').append('<tr><td class="text-center text-size-16">'+hora+'</td><td class="hora"></td><td class="hora"></td><td class="hora"></td><td class="hora"></td><td class="hora"></td><td class="hora"></td></tr>')
	}
}
$(function() {
	$("#fechahoy").text(fechaActual());
//	$( "#confirma" ).dialog({
//			autoOpen: false,
//			width: 'auto', // overcomes width:'auto' and maxWidth bug
//			maxWidth: 600,
//			height: 'auto',
//			modal: true,
//			fluid: true, //new option
//			resizable: false,
//			buttons : [
//			{
//				text  : 'Aceptar', 
//                click : function() {
//                             $(this).dialog('close')
//							 $("#modifU").dialog('close')
//                         }, 
//                class: 'button-acepta'
//            }
//			],
//			create:function () {
//				$(this).closest(".ui-dialog").find(".ui-button:first").addClass("acepta");
//				}
//	});

//resize dialog

	// on window resize run function
	$(window).resize(function () {
		fluidDialog();
	});

	// catch dialog if opened within a viewport smaller than the dialog width
	$(document).on("dialogopen", ".ui-dialog", function (event, ui) {
		fluidDialog();
	});

	
	function fluidDialog() {
    var $visible = $(".ui-dialog:visible");
    // each open dialog
    $visible.each(function () {
        var $this = $(this);
        var dialog = $this.find(".ui-dialog-content").data("ui-dialog");
        // if fluid option == true
        if (dialog.options.fluid) {
            var wWidth = $(window).width();
            // check window width against dialog width
            if (wWidth < (parseInt(dialog.options.maxWidth) + 50))  {
                // keep dialog from filling entire screen
                $this.css("max-width", "90%");
            } else {
                // fix maxWidth bug
                $this.css("max-width", dialog.options.maxWidth + "px");
            }
            //reposition dialog
            dialog.option("position", dialog.options.position);
        }
    });

}
});