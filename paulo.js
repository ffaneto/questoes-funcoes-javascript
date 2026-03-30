// Exercício 1

let Carro = {
    marca: "Toyota",
    modelo: "Corolla",
    cor: "Branco",

    exibirInfo() {
        return ("Marca: " + this.marca + ", Modelo: " + this.modelo + ", Cor: " + this.cor).toString();
    }
};

console.log(Carro.exibirInfo());

// Exercício 2 

let Pessoa = {
    nome: "Ana",
    idade: 25
};

Pessoa.cidade = "Itaporanga";

console.log(Pessoa);

Pessoa.idade = 30;

console.log(Pessoa);

delete Pessoa.nome;

console.log(Pessoa);

let Calculadora = {

    sum(n1, n2) {
        this.soma = n1 + n2;
        return this.soma;
    }
}

Calculadora.sum(2, 5);
console.log(Calculadora.soma);


/*
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

*/

function criarLivro (titulo, autor, paginas) {
    return {
        titulo,
        autor,
        paginas
    }
}

let livros = [
    criarLivro("Rapariga", "Teu Pai",40)
];

console.log(livros);

class Objeto { 
    #atributo1; 
    #atributo2; 

    constructor(atributo1 = "Desconhecido", atributo2 = 0) {
        this.#atributo1 = atributo1;
        this.#atributo2 = atributo2;
    }

    concatenarAtributos () { 
        console.log("Atributo 1: "+ this.#atributo1 +", Atributo 2: "+ this.#atributo2);
        
    }
}

const objeto1 = new Objeto();
objeto1.concatenarAtributos();
const objeto2 = new Objeto("Rapariga Mansa", 12);
objeto2.concatenarAtributos();


/*  Public Class Objeto {
     private String atributo1;
     private int atributo2;

    public Objeto() {}

     public Objeto(String atributo1, int atributo2) {
        this.atributo1 = atributo1;
        this.atributo2 = atributo2;
     }

     public void concatecarAtributos() {
        System.out.prinln(this.atributo1 + this.atributo2);    
        }
     }
*/ 

/*
    import package.*;

    Public class Main {
        public static void main(String [] args) {
            Objeto objeto1 = new Objeto();
            Objeto objeto2 = new Objeto("Rapariga Mansa", 12);

            System.out.println(objeto2.concatenarAtributos());
        }
    
    }
*/