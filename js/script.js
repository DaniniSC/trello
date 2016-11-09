function anadirLista() { //se ejecuta al hacer click en el botón de html AÑADIR LISTA
	//rescatar elementos de html
	var divTablero = document.getElementById("tablero");
	//crear nuevos elementos
	var crearDivLista = document.createElement("div");
	var crearInputTitulo = document.createElement("input");
	var crearBtnGuardarLista = document.createElement("button");
	var nodoGuardarLista = document.createTextNode("Guardar lista");
	//hijos
	divTablero.appendChild(crearDivLista);
	crearDivLista.appendChild(crearInputTitulo);
	crearDivLista.appendChild(crearBtnGuardarLista);
	crearBtnGuardarLista.appendChild(nodoGuardarLista);
	//atributos
	crearDivLista.setAttribute("class", "lista col-md-4 col-sm-4");
	crearBtnGuardarLista.setAttribute("onclick", "guardarLista()");
}

function guardarLista() {
	//rescatar elementos de html
	var divLista = document.getElementById("tablero").lastChild;
	var inputTitulo = divLista.getElementsByTagName("input")[0];
	var contenidoInputTitulo = divLista.getElementsByTagName("input")[0].value;
	var btnInputTitulo = divLista.getElementsByTagName("button")[0];
	//crear nuevos elementos
	var crearh3 = document.createElement("h3");
	var crearBtnAnadirTarea = document.createElement("button");
	var crearDivTareas = document.createElement("div");
	var nodoInputTitulo = document.createTextNode(contenidoInputTitulo);
	var nodoAnadirTarea = document.createTextNode("Añadir Tarea");
	//hijos
	divLista.appendChild(crearh3);
	crearh3.appendChild(nodoInputTitulo);
	divLista.appendChild(crearBtnAnadirTarea);
	divLista.appendChild(crearDivTareas);
	crearBtnAnadirTarea.appendChild(nodoAnadirTarea);
	//atributos	
	crearDivTareas.setAttribute("class", "tareas");
	crearBtnAnadirTarea.setAttribute("onclick", "anadirTarea()");
	inputTitulo.setAttribute("class", "hidden");
	btnInputTitulo.setAttribute("class", "hidden");
}

function anadirTarea() {
	//rescatar elementos de html
	var divLista = document.getElementById("tablero").lastChild;
	var divTareas = divLista.lastChild;
	//crear nuevos elementos
	var crearTextarea = document.createElement("textarea");
	var crearBtnGuardarTarea = document.createElement("button");
	var nodoGuardarTarea = document.createTextNode("Guardar Tarea");
	//hijos
	divTareas.appendChild(crearTextarea);
	divTareas.appendChild(crearBtnGuardarTarea);
	crearBtnGuardarTarea.appendChild(nodoGuardarTarea);
	//atributos
	crearBtnGuardarTarea.setAttribute("onclick", "guardarTarea()");
	btnAnadirTarea.setAttribute("class", "hidden");
}

function guardarTarea() {
	//rescatar elementos de html
	var divLista = document.getElementById("tablero").lastChild;
	var divTareas = divLista.lastChild;
	var textareaTarea = divTareas.getElementsByTagName("textarea")[0];
	var contenidoTextarea = textareaTarea.value;
	var btnTextareaTarea = divTareas.getElementsByTagName("button")[0];
	//crear nuevos elementos
	var crearDivTareaNueva = document.createElement("div");
	var crearCheckbox = document.createElement("input");
	var crearh4 = document.createElement("h4");
	var crearBtnAnadirTarea = document.createElement("button");
	var nodoh4 = document.createTextNode(contenidoTextarea);
	var nodoAnadirTarea = document.createTextNode("Añadir Tarea");
	//hijos
	divTareas.appendChild(crearDivTareaNueva);
	crearDivTareaNueva.appendChild(crearCheckbox);
	crearDivTareaNueva.appendChild(crearh4);
	crearDivTareaNueva.appendChild(crearBtnAnadirTarea);
	crearh4.appendChild(nodoh4);
	crearBtnAnadirTarea.appendChild(nodoAnadirTarea);
	//atributos
	crearDivTareaNueva.setAttribute("class", "tareaNueva");
	crearCheckbox.setAttribute("type", "checkbox");
	crearCheckbox.setAttribute("class", "pull-left media-middle");
	crearh4.setAttribute("class", "pull-left");
	crearBtnAnadirTarea.setAttribute("onclick", "anadirTarea()");
	crearBtnAnadirTarea.setAttribute("class", "pull-right");
	textareaTarea.classList.add("oculto");
	btnTextareaTarea.setAttribute("class", "hidden");

}