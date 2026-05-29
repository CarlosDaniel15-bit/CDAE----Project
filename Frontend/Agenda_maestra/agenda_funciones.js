// simular los cambios que se van haciendo en la base de datos, de acuerdo a lo del usuario vaya meneando
function cambiarEstado(alumno, nuevoEstado) {
    console.log(`Actualizando estado de la cita para ${alumno} a: ${nuevoEstado}`);
    alert(`La sesión de ${alumno} ha sido marcada como: ${nuevoEstado.toUpperCase()}`);
}

document.getElementById('filtro-fecha').addEventListener('change', (e) => {
    console.log(`Consultando agenda para el día: ${e.target.value}`);
});
