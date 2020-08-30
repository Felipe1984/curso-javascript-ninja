# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(x, y){
return x + y;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var anyvar = soma(5, 2) + 10;

// Qual o valor atualizado dessa variável?
anyvar;
// 17

// Declare uma nova variável, sem valor.
var noValue;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function addVal(){
  if(noValue === undefined){
    noValue = 1;
  } else {
    ++noValue;
  }
  
  return 'O valor da variável agora é ' + noValue;
}

// Invoque a função criada acima.
addVal();
addVal();

// Qual o retorno da função? (Use comentários de bloco).
/* O valor da variável agora é 1
 * O valor da variável agora é 2
 */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
functio calc(w, x, y){
  if(w === undefined || x === undefined || y === undefined){
    return 'Preencha todos os valores corretamente!';
  }
    return w * x * y + 2;
}

// Invoque a função criada acima, passando só dois números como argumento.
calc(10, 2)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 'Preencha todos os valores corretamente';

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
calc(25, 68, 223);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//379102

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function myFunction(w, x, y){
  if(w !== undefined  && x === undefined && y === undefined) {
    return w;
  } else if(w !== undefined && x !== undefined && y === undefined) {
    return w + x;
  } else if(w !== undefined && x !== undefined && y !== undefined) {
    return (w + x) / y;
  } else if(w === undefined && x === undefined && y === undefined) {
    return false;
  } else {
    return null;
  }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
myFunction();
// false
myFunction(3);
// 3
myFunction(3, 5);
// 8
myFunction(100, 20, 40);
// 3

```
