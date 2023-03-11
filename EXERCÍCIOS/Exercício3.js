/*Concatenação
Tradicional: Através do + conseguimos unir textos com variaveis.

Template string: Através do da crase envolvendo toda a frase, adicionando as variaveis dentro do ${} conseguimos unir textos e variáveis.*/


const nomePais = "Brasil";
const capitalPais= "Pernanbuco";
const quantidadeEstados = 26;


// Tradicional
console.log("Eu me chamo Laura e moro no " + nomePais + " que tem " + capitalPais + " como uma das capitais. Aqui sou muito feliz pois tenho "+ quantidadeEstados + " estados para desbravar!");



// Template String
console.log(`Eu me chamo Laura e moro no ${nomePais} que tem ${capitalPais} como capital. Aqui sou muito feliz pois tenho ${quantidadeEstados} estados para desbravar!`);
