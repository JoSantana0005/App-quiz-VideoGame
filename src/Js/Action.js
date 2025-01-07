// Variables
const Answers = document.querySelectorAll('.Answer');
const Question = document.getElementById('Question');
const ContainerAnswer = document.querySelectorAll('.Answer');
const SubmitAnswer = document.getElementById('SubmitAnswer');
const contQuestions = document.getElementById('Cont');
const RangeInput = document.getElementById('Range--question');
let contaQuestion = 1;
let rangeInput = 1;
let correct = 0;
let incorrect = 0;
let answerClick = false;
const enlace = '../../../index.html';
const MainContainer = document.getElementsByClassName('MainContainer')[0];
const Volver = document.getElementById('Volver');

// Function para volver a la pagina de inicio

function RouteHome(enlace){
    window.location.href = enlace;
}
// evento que te devuelve a home

Volver.addEventListener('click',()=>{
    if(Volver){
        RouteHome(enlace);
    }else{
        console.log("No existen tal pagina");
    }
})
// Function para colocar las respuestas en los contenedores

function AnswerSpan(data,index){
    const QuestionActual = data[index];
    QuestionActual.answers.forEach((answer,cont) =>{
        if(cont <= Answers.length){
            Answers[cont].innerHTML = answer
            // Almaceno la respuesta correcta en data-index
            Answers[cont].setAttribute('data-index',cont);
            console.log(Answers[cont].innerHTML)
        }
    })
}
// Function para validar la respuesta correcta

function CorrectAnswer(correctAnswer){
    ContainerAnswer.forEach((element) =>{
        element.addEventListener('click',()=>{
            answerClick = true;
            const SelectContainer = parseInt(element.getAttribute('data-index'));
            if(SelectContainer == correctAnswer){
                alert('correct answer')
                element.classList.toggle('correct');
                correct++;
                
            }else{
                alert('incorrect answer');
                element.classList.toggle('incorrect');
                incorrect++;
            }
            // Desabilito las demas respuestas
            ContainerAnswer.forEach((el)=>{
                if(el !== element){
                    el.classList.add('disabled')
                    el.computedStyleMap.pointerEvents = 'none';
                }
            })
        })
    })
}
// Function para quitar los estilos

function removestyle(){
    ContainerAnswer.forEach((element) =>{
        element.classList.remove('correct');
        element.classList.remove('incorrect');
        element.classList.remove('disabled');
    })
}
// Function para colocar el panel del resultado del quiz
function PanelResult(){
    
    MainContainer.innerHTML = `<section class="Results">
        <div class="Correct">
            <p>Your correct questions:</p>
            <span>${correct}</span>
        </div>
        <div class="Incorrect">
            <p>Your incorrect questions:</p>
            <span>${incorrect}</span>
        </div>
        <div class="Buttons">
            <button id="Back--Home">Back in the start</button>
        </div>
    </section>`
    
    // Funcion para volver a la pagina de inicio
    const Back_home = document.getElementById('Back--Home');
    Back_home.addEventListener('click',()=>{
        if(Back_home){
            RouteHome(enlace);
        }else{
            console.log("No existen tal boton");
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
        // Index para ir aumentado el index de las preguntas
        let index = 0
        
        // Colocar la pregunta en la etiqueta p
        const ListQuestions = data.questions;
        Question.innerHTML = ListQuestions[index].question;

        // Parte para colocar las respuestas en las celdas
        AnswerSpan(ListQuestions,index);

        // Parte para seleccionar una pregunta
        CorrectAnswer(ListQuestions[index].correct_answer);
        // Evento para el boton de la respuesta
        SubmitAnswer.addEventListener('click',()=>{
            
            if(!answerClick){
                alert('please select a answers');
                return;
            }
            
            index++;
            contaQuestion++;
            rangeInput++;
            
            // Limpio los classList
            removestyle();
            
            // Aumentamos el contador del span donde esta 1 of 10
            if(contaQuestion <= 10 && rangeInput <= 10 && index < ListQuestions.length){
    
                contQuestions.textContent = `Question ${contaQuestion} of 10`;
                RangeInput.value = rangeInput;
                Question.innerHTML = ListQuestions[index].question
                AnswerSpan(ListQuestions,index);
            
            }else{
                MainContainer.innerHTML = '';
                PanelResult();
            }
        })
    }
);
