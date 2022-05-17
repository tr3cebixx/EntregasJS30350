let equipo = prompt('cuál es el mejor equipo?\nrojo,\nazul,\nverde.');
while (equipo != 'rojo'){
    alert(`el ${equipo} no es, pichón`);
    equipo = prompt('cuál es el mejor equipo?\nrojo,\nazul,\nverde.');
}

alert(`exaaacto, el ${equipo} es el mejor`);