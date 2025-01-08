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
            enlace = 'src/Layouts/Action/Action-es.html'
            DirectionQuiz(enlace)
        }
        else if(pagina.id == "Adventure"){
            enlace = 'src/Layouts/Adventure/Adventure-es.html'
            DirectionQuiz(enlace)
        }
        else if(pagina.id == "Scary"){
            enlace = 'src/Layouts/Scary/Scary-es.html'
            DirectionQuiz(enlace)
        }
        else if(pagina.id == "Mystery"){
            enlace = 'src/Layouts/Mystery/Mystery-es.html'
            DirectionQuiz(enlace)
        }
        else if(pagina.id == "Strategy"){
            enlace = 'src/Layouts/Strategy/Strategy-es.html'
            DirectionQuiz(enlace)
        }
    })
})