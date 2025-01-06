
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
const quest = document.getElementById('Question');
// Function para colocar las respuestas en cada celda
function AnwerSpan(data,index){
    const Quests = data[index]
    console.log(Quests)
    const Answers = document.querySelectorAll('.Answer');
    Quests.answers.forEach((answer,cont)=>{
        if(cont <= Answers.length){
            Answers[cont].innerHTML = answer
        }
    })
}
// Conexion del Json
const Action = fetch("../../../JSON/Action.json").then(
    respuesta => {
        try{
            if(respuesta.ok){
                console.log("Se conecto exitosamente al Json");
                return respuesta.json();
            }else{
                console.log("No se conecto")
            }
        }catch(e){
            console.error(`Hubo un error ${e}`);
        }
    }
).then(
    data => {
        let index = 0
        const Questions = data.questions
        quest.innerHTML = Questions[index].question
        AnwerSpan(data.questions,index)
    }
);
