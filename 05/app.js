let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];

let resposta = '';

function listaDeCompras() {
    do {
        resposta = prompt(`Você deseja adicionar comida a sua lista de compra?`).toLowerCase();

        if (resposta == 'sim') {
            let produto = prompt(`Digite o produto que deseja inserir na lista de compras`);
            let categoria = prompt(`A qual produtooria de alimentos pertence esse produto. ("Frutas", "Laticínios","Congelados","Doces")`).toLowerCase();
            if (categoria == 'frutas') {
                frutas.unshift(produto);
                console.log(frutas);
            } else if (categoria == 'laticínios') {
                laticinios.unshift(produto);
                console.log(laticinios);
            } else if (categoria == 'congelados') {
                congelados.unshift(produto);
                console.log(congelados);
            } else if (categoria == 'doces') {
                doces.unshift(produto);
                console.log(doces)
            } else {
                alert(`Categoria digitada inválida.`);
            }
        }else{
            alert(`Lista de compras:\n Frutas: ${frutas} \n Laticínios: ${laticinios} \n Congelados: ${congelados} \n Doces: ${doces}`);
        }
    } while (resposta =='sim');

}

listaDeCompras();

const listaFrutas = document.getElementById("container__frutas");
const listaLaticinios = document.getElementById("container__laticinios");
const listaCongelados = document.getElementById("container__congelados");
const listaDoces = document.getElementById("container__doces");

for(let i=0; i<frutas.length; i++){
    const item = document.createElement("li");
    item.textContent= frutas[i];
    listaFrutas.appendChild(item);
}
for(let i=0; i<laticinios.length; i++){
    const item = document.createElement("li");
    item.textContent= laticinios[i];
    listaLaticinios.appendChild(item);
}
for(let i=0; i<congelados.length; i++){
    const item = document.createElement("li");
    item.textContent= congelados[i];
    listaCongelados.appendChild(item);
}
for(let i=0; i<doces.length; i++){
    const item = document.createElement("li");
    item.textContent= doces[i];
    listaDoces.appendChild(item);
}