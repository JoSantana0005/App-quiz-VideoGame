// evento que te devuelve a home
const Volver = document.getElementById('Volver');
Volver.addEventListener('click',()=>{
    const enlace = '../../../index.html';
    if(Volver){
        window.location.href = enlace
    }else{
        console.log("No existen tal pagina");
    }
})
// Conexion al Json
const Json_Adventure = fetch('../../../JSON/Adventure.json').then(
    respuesta =>{
        try{
            if(respuesta.ok){
                console.log("Se conecto al Json exitosamente");
                return respuesta.json();
            }else{
                console.log("No se conecto al json");
            }
        }catch(e){
            console.log(`Hubo un error: ${e}`)
        }
    }
).then(
    data =>{
        
    }
)