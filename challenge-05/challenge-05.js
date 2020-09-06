/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = [1, 10, 5, 20, 550, 'Felipe'];
//

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
 function myFunction(arr) {
   return arr;
 }
 myFunction(['arroz', 'batata doce', 'inhame']);
// ['arroz', 'batata doce', 'inhame']
    

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
myFunction(['arroz', 'batata doce', 'inhame'])[1];
// 'batata doce'

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myValueFunction(arr, num) {
  return num ? arr[num] : arr;
}

// 

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var aNewArray = [
                  NaN,
                  { nome: 'Felipe', idade: 36 },
                  function(x, y) { return x + y },
                  'Av. Presidente Vargas',
                  30,
                  [{nome: 'fernanda', idade: 26},{nome: 'tiago', idade: 17}],
                  false
                 ]
// 

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
myValueFunction(aNewArray);
// aNewArray = [
//                NaN,
//                { nome: 'Felipe', idade: 36 },
//                function(x, y) { return x + y },
//                'Av. Presidente Vargas',
//                30,
//                [{nome: 'fernanda', idade: 26},{nome: 'tiago', idade: 17}],
//                false
//               ]

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(book) {
  var obj = {book1: 'As aventuras de Alice', book2: 'Gato sem botas', book3: 'história de fé'}
}
//

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?
