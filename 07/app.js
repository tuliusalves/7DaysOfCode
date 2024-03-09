
const somar = (numeroA, numeroB) => {
    numeroA= parseInt(numeroA);
    numeroB= parseInt(numeroB);
    return (numeroA + numeroB);
}

const subtrair = (numeroA, numeroB) => {
    return numeroA - numeroB;
}

const dividir = (numeroA, numeroB) => {
    return numeroA / numeroB;
}

const multiplicar = (numeroA, numeroB) => {
    return numeroA * numeroB;
}

const menu = () => {
    let opcao;
    let numeroA = Number();
    let numeroB = Number();
    do {
        opcao = parseInt(prompt(`Qual operação você deseja executar? 0(Sair) 1(somar) 2(subtrair) 3(dividir) 4(multiplicar)`));
        console.log(opcao);
        switch (opcao) {
            case 0:
                alert(`Atém a próxima.`);
                break;
            case 1:
                numeroA = prompt(`Digite o primeiro número a somar:`);
                numeroB = prompt(`Digite o segundo número a somar:`);
                alert(`O resultado da operação ${somar(numeroA, numeroB)}`);

                if(isNaN(numeroA)|| isNaN(numeroB)){
                    alert("Erro: Digite apenas números.");
                    break;
                }
                break;
            case 2:
                numeroA = prompt(`Digite o primeiro número a sbutrair:`);
                numeroB = prompt(`Digite o segundo número a sbutrair:`);
                alert(`O resultado da operação ${subtrair(numeroA, numeroB)}`);

                if(isNaN(numeroA)|| isNaN(numeroB)){
                    alert("Erro: Digite apenas números.");
                    break;
                }
                break;
            case 3:
                numeroA = prompt(`Digite o primeiro número a dividir:`);
                numeroB = prompt(`Digite o segundo número a dividir:`);
                alert(`O resultado da operação ${dividir(numeroA, numeroB)}`);

                if(isNaN(numeroA)|| isNaN(numeroB)){
                    alert("Erro: Digite apenas números.");
                    break;
                }
                break;
            case 4:
                numeroA = prompt(`Digite o primeiro número a multiplicar:`);
                numeroB = prompt(`Digite o segundo número a multiplicar:`);
                alert(`O resultado da operação ${multiplicar(numeroA, numeroB)}`);

                if(isNaN(numeroA)|| isNaN(numeroB)){
                    alert("Erro: Digite apenas números.");
                    break;
                }
                break;
            default:
                alert(`Até a próxima.`);
        }
    } while (opcao != 0);
}

menu();