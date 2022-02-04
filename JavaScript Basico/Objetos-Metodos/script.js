// function calcMedia() {
//     return (this.notas[0] + this.notas[1]) /2;
// }

// var aluno = {
//     nome: "Igor",
//     notas: [7,8],

//     media: calcMedia

// }


// console.log(aluno.media());


//OBJETOS CONSTRUTORES

// var calmedia = function (){
//     return (this.nota1 + this.nota2) / 2;
// }

// var turma = [
//     {
//         nome: "igor",
//         nota1: 5,
//         nota2: 8,
//         media: calmedia
//     }
// ]
// var aluno = turma[0];
// console.log(aluno);
// console.log(aluno.media());

//MÉTODO CRIAR ALUNO CONSTRUTORES

// function criarAluno(nome, n1, n2){
//     var alunos = {
//         nome: nome,
//         nota1: n1,
//         nota2: n2,
//         media: function(){
//             return (this.nota1 + this.nota2) / 2;
//         }
//     }
//     return alunos;
// }

//FORMA 2 CHAMANDO COMO OBJETO

function aluno(nome, n1, n2){

    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;
    //DESTA FORMA PRECISO INSTANCIAR O OBJETO >> var a = new aluno("igor", 7, 8);
    this.media = function(){
        return (this.nota1 + this.nota2) /2;
    }
}

// var turma = [
//     criarAluno("Igor", 9, 6),
//     criarAluno("joão",5, 9),
//     criarAluno("Maria", 8, 9)
// ]

//MUDA A FORMA DE CHAMAR

var a = new aluno("igor", 7, 8);

console.log(a.media());
//var aluno = turma[2];

//console.log(aluno);
//console.log(aluno.media());
//UTILIZANDO O FOR PRA LISTAR, PORÉM ESSE FOR É DIFERENTE PORQUE ELE É UM OBJETO COMO QUASE TUDO NO JAVASCRIPT
//FUNÇÕES PODEM SER TRATADAS COMO OBJETOS TBM.
// turma.forEach(function(itens){
//     console.log(itens);
// })

//MÉTODO FOR ANTIGO

// for (var aluno of turma){
//     console.log(aluno.nome +" - "+ aluno.media());
// }

