// Variables
const Answers = document.querySelectorAll('.Answer');
const Question = document.getElementById('Question');
const ContainerAnswer = document.querySelectorAll('.Container');
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
        // Index para ir aumentado el index de las preguntas
        let index = 0
        
        // Colocar la pregunta en la etiqueta p
        const ListQuestions = data.questions;
        Question.innerHTML = ListQuestions[index].question;

        // Parte para colocar las respuestas en las celdas
        const QuestionActual = ListQuestions[index];
        console.log(QuestionActual)
        QuestionActual.answers.forEach((info,cont)=>{
            if(cont <= Answers.length){
                Answers[cont].innerHTML = info;
            }
        })

        // Parte para seleccionar una pregunta
        ContainerAnswer.forEach((element) =>{
            element.addEventListener('click',()=>{
                if(element.className == 'active'){
                    element.classList.remove('active');
                }else{
                    element.classList.toggle('active');
                }
            })
        })

        

    }
);
