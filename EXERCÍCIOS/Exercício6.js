/*Manipulação de Strings.
Existem algumas formas de manipular string:*/


/*length checa o tamanho da string;

*split separa uma string definindo um limitador;

*replace substitui trechos da string;

*slice retorna só um trecho da string;

*substring retorna trechos de string informando a posição.*/




let MeuNome = "laura leticia oliveira";


console.log (MeuNome.length);
 
console.log (MeuNome.split(" "))

console.log (MeuNome.replace("laura","clara"))


const fruits = ["banana", "laranja", "uva", "abacaxi"]
const citrus = fruits.slice(1,3)

console.log (citrus)


/*let mensagem = "eu sou Pernabucana";

let palavra = mensagem.substring(7);

console.log (palavra); */

