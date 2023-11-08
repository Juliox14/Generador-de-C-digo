function mostrarCampos(tipoConsulta) 
{
   // Limpiar el contenedor de campos de entrada
   document.getElementById("inputFields").innerHTML = "";

   if (tipoConsulta === 'SELECT') {
       // Mostrar campos para consulta SELECT
       var camposSelect = document.createElement("input");
       camposSelect.setAttribute("type", "text");
       camposSelect.setAttribute("placeholder", "Campos a seleccionar (separados por coma)");
       document.getElementById("inputFields").appendChild(camposSelect);

       var condicionesSelect = document.createElement("input");
       condicionesSelect.setAttribute("type", "text");
       condicionesSelect.setAttribute("placeholder", "Condiciones (opcional)");
       document.getElementById("inputFields").appendChild(condicionesSelect);
   } else if (tipoConsulta === 'INSERT') {
       // Mostrar campos para consulta INSERT
       var tablaInsert = document.createElement("input");
       tablaInsert.setAttribute("type", "text");
       tablaInsert.setAttribute("placeholder", "Nombre de la tabla");
       document.getElementById("inputFields").appendChild(tablaInsert);

       var camposInsert = document.createElement("input");
       camposInsert.setAttribute("type", "text");
       camposInsert.setAttribute("placeholder", "Campos (separados por coma)");
       document.getElementById("inputFields").appendChild(camposInsert);

       var valoresInsert = document.createElement("input");
       valoresInsert.setAttribute("type", "text");
       valoresInsert.setAttribute("placeholder", "Valores (separados por coma)");
       document.getElementById("inputFields").appendChild(valoresInsert);
   } else if (tipoConsulta === 'UPDATE') {
       // Mostrar campos para consulta UPDATE
       var tablaUpdate = document.createElement("input");
       tablaUpdate.setAttribute("type", "text");
       tablaUpdate.setAttribute("placeholder", "Nombre de la tabla");
       document.getElementById("inputFields").appendChild(tablaUpdate);

       var camposUpdate = document.createElement("input");
       camposUpdate.setAttribute("type", "text");
       camposUpdate.setAttribute("placeholder", "Campos a actualizar (separados por coma)");
       document.getElementById("inputFields").appendChild(camposUpdate);

       var valoresUpdate = document.createElement("input");
       valoresUpdate.setAttribute("type", "text");
       valoresUpdate.setAttribute("placeholder", "Nuevos valores (separados por coma)");
       document.getElementById("inputFields").appendChild(valoresUpdate);

       var condicionesUpdate = document.createElement("input");
       condicionesUpdate.setAttribute("type", "text");
       condicionesUpdate.setAttribute("placeholder", "Condiciones (opcional)");
       document.getElementById("inputFields").appendChild(condicionesUpdate);
   } else if (tipoConsulta === 'DELETE') {
       // Mostrar campos para consulta DELETE
       var tablaDelete = document.createElement("input");
       tablaDelete.setAttribute("type", "text");
       tablaDelete.setAttribute("placeholder", "Nombre de la tabla");
       document.getElementById("inputFields").appendChild(tablaDelete);

       var condicionesDelete = document.createElement("input");
       condicionesDelete.setAttribute("type", "text");
       condicionesDelete.setAttribute("placeholder", "Condiciones (opcional)");
       document.getElementById("inputFields").appendChild(condicionesDelete);
   }
}