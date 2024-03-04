let tecnologiaBackEnd;
let tecnologiaFrontEnd;
let respostaTecnologias='ok';
let especializacao;
let tecnologias= [];

let ramoProgramacao= prompt("Qual área de programação você quer seguir, Front-End ou Back-End?");
ramoProgramacao = ramoProgramacao.toLowerCase();


if(ramoProgramacao=="back-end"){
    tecnologiaBackEnd= prompt("Deseja aprender 'C#' ou 'Java' ?");
    tecnologiaBackEnd= tecnologiaBackEnd.toLowerCase();
    tecnologias.unshift(tecnologiaBackEnd);
}else if (ramoProgramacao=="front-end") {
    tecnologiaFrontEnd=prompt("Deseja aprender 'Vue' ou 'React'");
    tecnologiaFrontEnd= tecnologiaFrontEnd.toLocaleLowerCase();
    tecnologias.unshift(tecnologiaFrontEnd);
} else {
    alert("Opção inválida, escolha apenas entre 'Back-End' ou 'Front-End'");
    
}

especializacao= prompt("Deseja se especializar em 'Front-End', 'Back-End' ou deseja ser um 'FullStack'?");
especializacao= especializacao.toLowerCase();

if(especializacao=='back-end'|| especializacao=='front-end'){
    alert(`Você decidiu se especializar em :${especializacao}`);
}else if( especializacao=='fullstack'){
    alert(`Você decidiu ser um:${especializacao}front-end`);
}else{
    alert("Você digitou um opção inválida!");
    close();
}

while(respostaTecnologias =="ok"){
    let auxTecnologia;
    auxTecnologia= prompt("Quais são as tecnologias nas quais você gostaria de se especializar?");
    auxTecnologia= auxTecnologia.toLowerCase();
    tecnologias.unshift(auxTecnologia);

    respostaTecnologias= prompt("Tem mais alguma tecnologia que você gostaria de aprender?")
    respostaTecnologias= respostaTecnologias.toLowerCase();
}

alert(`Você escolheu a área ${ramoProgramacao}. Você pretende ser um profissional: ${especializacao} \n 
As tecnologias que você deseja aprender são: ${tecnologias}`);
