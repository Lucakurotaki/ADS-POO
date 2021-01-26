<h2>Exercícios 01</h2>

## Q01.
Não, pois os atributos, mesmo não sendo inicializados, recebem um valor padrão. Como o atributo "quantReservas é do tipo int, automaticamente possui o valor 0. Logo, não haverá problemas na compilação.

## Q02.
O código não será compilado, pois não há construtores com parâmetros na classe.

## Q03.
O resultado da execução é 0, pois a variável "a" da expressão "a=a+b" no constutor não faz referência ao atributo "a" declarado no corpo da classe, logo, o valor do atributo "a" permanece 0.

## Q04.
Da forma como está, a primeira variável "valor" não referencia o atributo da classe, e sim, está relacionado ao parâmentro do construtor. Para que o código funcione, deve substituir a expressão "valor = valor+valor" por "this.valor  = valor+valor".

## Q05.
O erro da compilação ocorre devido à falta de argumento do parâmetro ao chamar o construtor Raio. Para que funcione, é necessário inserir o valor "10" entre os parênteses do construtor, em vez de utilizar a expressão "r.volume = 10".

## Q06.
a)Ambos os "prints" resultaram em 90, pois ao executar a expressão "c1=c2", os dois objetos se tornam um só, sendo referido para o mesmo espaço da memória. Consequentemente, ao sacar 10, tanto "c1" quanto "c2" apontam para o mesmo saldo, no caso, 90, assim como a transferência de 50 não ocorre na prática. b)Passa a ter o mesmo endereço do "c2" na memória. Dessa forma, passa a compartilhar todas as alterações do objeto "c2".

## Q07.
Arquivos “Jogador.java” e "TestaJogador.java"

## Q08.
Arquivos “Conta.java” e "TestaConta.java"

## Q09.
Arquivos "Produto.java" e "TestaProduto.java"

## Encapsulamentp.
O encapsulamento tem como função ocultar e proteger as informações de uma classe, especificamente atributos e métodos. Através dele, é possiver ter maior controle sobre o acesso a esses dois itens supracitados. Com o encapulamento, os métodos ficam mais isolados, o que permite esse maior controle.