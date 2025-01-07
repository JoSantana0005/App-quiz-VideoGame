// Function que dirige al usuario al quiz
function DirectionQuiz(enlace){
    window.location.href = enlace
}
//Paginas
const paginas = document.querySelectorAll('span');
paginas.forEach(pagina =>{
    let enlace;
    pagina.addEventListener('click',()=>{
        if(pagina.id == "Action"){
            enlace = 'src/Layouts/Action/Action.html'
            DirectionQuiz(enlace)
        }
        else if(pagina.id == "Adventure"){
            enlace = 'src/Layouts/Adventure/Adventure.html'
            DirectionQuiz(enlace)
        }
        else if(pagina.id == "Scary"){
            enlace = 'src/Layouts/Scary/Scary.html'
            DirectionQuiz(enlace)
        }
        else if(pagina.id == "Mystery"){
            enlace = 'src/Layouts/Mystery/Mystery.html'
            DirectionQuiz(enlace)
        }
        else if(pagina.id == "Strategy"){
            enlace = 'src/Layouts/Strategy/Strategy.html'
            DirectionQuiz(enlace)
        }
    })
})