/*
Função Anônima: Ela não tem nome e Vamos passar os valores para serem atribuida na variável que foi declarada dentro do escopo 

Essa  Função que retona a soma de dois valores 

function somar(numero1, numero2){
    return numero1 + numero2
}
let resultadoDaSoma = somar(12, 5)
console.log(resultadoDaSoma)

*/
// ----------------------------------------------------------------------
//Funções anônimas - não é passado o nome 

let resultadoDaSoma = function(numero1, numero2){
    return numero1 + numero2
}

console.log("O resultado da soma é:", resultadoDaSoma(12,5))
//Vai imprimir o resultado no console console da função, ela é anônima porque não tem nenhum nome. No console aparece a função. 