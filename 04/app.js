let limiteNumeroAleatorio=10;
let numeroTentativas=3;


function gerarNumeroAleatorior(){
    let numeroSorteado= parseInt(Math.random() * limiteNumeroAleatorio +1 );
    return numeroSorteado;
}

function advinhar(){
    while(numeroTentativas>0){
        let auxiliarAleatorio=gerarNumeroAleatorior();
        console.log(auxiliarAleatorio);
        let chute= prompt('Tente advinhar qual número de 0 à 10 foi sorteado. Digite um número:');
        if(chute!=auxiliarAleatorio){
            numeroTentativas--;
            alert(`Você errou! Tentativas restantes: ${numeroTentativas}`);
            console.log(numeroTentativas);
        }else{
            alert(`Parabéns você advinhou o número sorteado. Fez isso com apenas ${numeroTentativas} tentativas`);
            break;
        }

        if(numeroTentativas==0){
            alert(`Você não tem mais tentativas, reinicie a página para poder jogar novamente.`)
        }

    }
}
