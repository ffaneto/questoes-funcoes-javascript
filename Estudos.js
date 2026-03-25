
function podeVotar (idade) {
    if (idade >= 16) {
        return "Você pode votar";
    } else {
        return "Você não pode votar";
    }
}

console.log(podeVotar(16))

console.log("---")



function somarNumerosPares (numeros) {
    let soma = 0;

    for (let i = 0; i < numeros.length ; i ++) {
        if (numeros[i] %2 === 0) {
            soma += numeros[i];
        }
    }

    return soma;
}

console.log(somarNumerosPares([1, 2, 3, 4, 5, 6])); // Saída esperada: 12 (2 + 4 + 6)

function classificarTemperaturas (temperaturas) {
    let temperaturasString = [];

    for (let i = 0; i < temperaturas.length ; i++) {
        if (temperaturas[i] < 10) {
            temperaturasString.push("Frio");
        } else if (temperaturas[i] >= 10 && temperaturas[i] <= 25) {
            temperaturasString.push("Agradável");
        } else {
            temperaturasString.push("Quente");
        }

    }

    return temperaturasString;

}

console.log(classificarTemperaturas([5, 15, 28, 10, 25, -2, 30]));


console.log("---")

function avaliarAlunos (listaDeAlunos) {

    let resultado = {
        aprovados: [],
        reprovados: []
    };

    for (let i = 0; i < listaDeAlunos.length; i++) {
        let alunoAtual = listaDeAlunos[i];

        if (alunoAtual.nota >= 7.0) {
            resultado.aprovados.push(alunoAtual.nome); // resultado.aprovados.push(listaDeAlunos[i].nome);
        } else {
            resultado.reprovados.push(alunoAtual.nome); // resultado.reprovados.push(listaDeAlunos[i].nome);
        }
    }

    return resultado;
}

const turmaA = [
    { nome: "Alice", nota: 8.5 },
    { nome: "Bruno", nota: 6.0 },
    { nome: "Carla", nota: 9.0 },
    { nome: "Daniel", nota: 7.0 },
    { nome: "Eva", nota: 5.5 }
];

console.log(avaliarAlunos(turmaA));
/* Saída esperada:
{
  aprovados: ["Alice", "Carla", "Daniel"],
  reprovados: ["Bruno", "Eva"]
}
*/

console.log("---")

function contagemRegressiva (inicio, parada) {

    for (let i = inicio; i > parada; i--) {
        console.log(i);
        if(i === 50) {
            break;
        }
    }
    return "Fim da contagem";
}

console.log(contagemRegressiva(120,10))

console.log("---")

function analisarSequenciaDeVotos  (sequencia) {

   let totalVotos = 0;
   let mediaIdade = 0;
   let votoMaisJovem = Infinity;
   let somaIdades = 0;


    for (let i = 0; i < sequencia.length; i++) {
        let eleitorAtual = sequencia[i];

        if (eleitorAtual < 16) {
            break;
        }

        totalVotos++;
        somaIdades += eleitorAtual;

        if (eleitorAtual < votoMaisJovem) {
            votoMaisJovem = eleitorAtual;
        }
    }

    if (totalVotos ===0) {
        return {
            totalVotos: 0,
            mediaIdade : 0,
            votoMaisJovem: 0
        };
    }

    return {
        totalVotos: totalVotos,
        mediaIdade: somaIdades / totalVotos,
        votoMaisJovem: votoMaisJovem
    };

}

console.log(analisarSequenciaDeVotos([30, 20, 16, 70, 80]));


function buscarNoVetor(array, target) {
    let i = 0;

    while (i < array.length) {
        if (array[i] === target) {
            return i;
        }
        i++;
    }
    return -1;
}

console.log(arrayInteiros([1,2,3,4], 4));

function buscaOrdenadaMelhorada (array, target) {
    let i =0;
    while (i < array.length && array[i] <= target) {
        if (array[i] === target) {
            return "Alvo encontrado no índice: " + i;
        }
        i++;
    }

    return "Alvo não encontrado";
}

console.log(buscaOrdenadaMelhorada([1, 3, 5, 7, 9], 5))


for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("---")

for (let i = 10; i >= 1 ; i--) {
    console.log(i);
}