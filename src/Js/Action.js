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
