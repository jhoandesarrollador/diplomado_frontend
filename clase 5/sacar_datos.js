// buscar un curso es una funcion
//  curso es un objeto


const cursos = ["javascript", "python", "java", "c++", "c#", "php", "ruby", "swift", "kotlin", "go"];



let curso = "javascrit";

function buscarCurso(curso){
    for(let i = 0; i < cursos.length; i++){
        if(cursos[i] === curso){
            return cursos[i];
        }
    }
    return "no se encontro el curso";
}

console.log(buscarCurso(curso));






