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
	var contenidoInputTitulo = divLista.getElementsByTagName("input")[0].value;
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
}

