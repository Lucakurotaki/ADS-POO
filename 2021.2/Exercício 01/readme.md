# Exercício 01

## Q01.

<p>a)Não compila, pois ao inicializar let a com 10, que é do tipo number, a variável passa a suportar apenas atribuições do tipo number.</p>
<p>b)Compila, pois a variável b é declarado como sendo do tipo any, ou seja, suporta atribuições de qualquer tipo, e também não houve mudança de tipo ao atribuir 2, mesmo sem ser do tipo any, não haveria problemas.</p>

<p>c)Compila, porque a variável c é declarada como sendo do tipo number, é inicializado com 10, que é um number, e recebe o valor 2, que também é number.</p>

## Q02.

<p>a)3</p>
<p>b)12</p>
<p>c)NaN</p>

## Q03.

<p>a)Arquivo "Estados.ts"</p>

``` typescript
enum Estados {"PI","CE","MA"}

for (let i = 0; i < 3; i++){
    console.log(Estados[i]);
}
```

<p>b)Ao executar o seguinte código, imprimiu os valores, ao invés de índices.</p>

``` typescript
enum Estados {"PI","CE","MA"}

for (let i = 0; i < 3; i++){
    let e: Estados = Estados[i]
    console.log(e);
}
```

## Q05.

<p>Arquivo "exibir.ts"</p>
