const Animal = {
    especie: "Cachorro",
    som: "Latido",

    fazerBarulho() {
        return "O Animal da espécie " +  this.especie + " faz um " + this.som;
    }
};

console.log(Animal.fazerBarulho());

let config = {
    tema: "escuro",
    volume: 50,

    verTema() {
       console.log(this.tema);
    },

    verVolume () {
        console.log(this.volume);
    }
};

config.verTema();
config.verVolume();

console.log(config);

config.idioma = "Pt-Br";
config.volume = 100;

delete config.tema;

console.log(config);

const contador = {
    valorAtual: 0,

    incrementar(quantidade) {
       return this.valorAtual += quantidade;
    }
};

contador.incrementar(5);
console.log(contador.valorAtual);

function criarProduto (nome, preco) {
    return {
        nomeDoProduto: nome,
        valor: preco
    }
}

const estoque = [
    criarProduto("Hamud", 20),
    criarProduto("Habibi", 30)
];

console.log(estoque);

