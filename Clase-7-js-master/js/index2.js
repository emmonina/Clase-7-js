window.addEventListener ('load', function () {
    let divTabla = document.getElementById ('divTabla');
    let tabla = crearTabla (autos);
    divTabla.appendChild (tabla);
});



function crearTabla(arr) {
    
let tabla = document.createElement ('table');

let encabezado =document.createElement('tr');

for (prop in arr[0]) { 
let th = document.createElement ('th');
th.textContent = prop;
th.setAttribute ('background', 'red');

encabezado.appendChild (th);

}

tabla.appendChild (encabezado); 

for ( let i=0;  i < arr.length; i++)
{
let fila = document.createElement ('tr');

for (prop in arr [i]) {
let celda = document.createElement ('td');
celda.textContent =  arr [i] [prop];
fila.appendChild(celda);
if (i % 2) {celda.setAttribute ('style', 'backgroung: rgb (200.200,200)');}

}
    
tabla.appendChild(fila);

}

tabla.setAttribute ('border','red');


return tabla;
}