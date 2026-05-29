function procesarFormulario(event) {
    event.preventDefault();
    
    // simula los datos estructurados que irán vinculados a la API con Express/MongoDB, osea orita nomas seria una caliz
    const datosExpediente = {
        diagnostico: document.getElementById('txt-diagnostico').value,
        objetivos: document.getElementById('txt-objetivos').value,
        ayudante: document.getElementById('select-ayudante').value,
        estatus: document.getElementById('select-estatus').value
    };

    console.log("Objeto listo para ser guardado en la base de datos:", datosExpediente);
    alert("¡Los cambios en el expediente de Ángel Miranda se guardaron con éxito!");
}
