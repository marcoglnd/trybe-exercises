

# CSS Flexbox

## O que vamos aprender?

É notável o quanto o acesso à Internet se modificou ao longo dos anos e, mais recentemente, como se difundiu especialmente entre dispositivos móveis. Desenvolver páginas e aplicações web não mais é um trabalho focado apenas em um meio, e responsividade tornou-se a palavra da vez.

Até aqui, você viu basicamente quatro tipos diferentes de *layout*: `block`, `inline`, `inline-block` e `position`. Embora essas ferramentas sejam bastante úteis para a definição de uma página web tradicional, elas não possuem a flexibilidade necessária para aplicações mais complexas e responsivas. 

Nesse contexto, em 2017 surgiu o CSS Flexbox como uma ferramenta capaz de dispôr *containers* de maneira mais eficiente, aproveitando melhor o espaço, mesmo quando ele não é pré-definido — entenda um *container* como qualquer elemento HTML que contenha outros elementos, como uma `div`. A ideia principal do Flexbox é permitir que o *container* altere o tamanho dos itens que ele contém, de acordo com a área disponível na página.

A partir desse módulo, você aprenderá como criar *layouts* responsivos utilizando Flexbox. Podemos fazer isso alterando as propriedades relativas ao *container*, quais sejam: `flex-direction`, `flex-wrap`, `flex-flow`, `justify-content`, `align-itens` e `align-content`. Além disso, algumas propriedades aplicáveis aos itens podem nos ajudar, como `align-self`, `order`, `flex-grow`, `flex-shrink` e `flex-basis`. Vamos lá? #vqv

## Você será capaz de:

- Criar páginas responsivas utilizando o CSS Flexbox;
- Mudar as propriedades de um *container*, tornando-o flexível;
- Acessar as propriedades individuais de um item, mudando o seu posicionamento com relação aos demais;
- Dispor elementos diversos em um *layout* de aplicação web de forma mais simples e fluida.

## Porque isso é importante?

Tendo em vista o aumento exponencial de acessos à Internet via celular, uma pessoa desenvolvedora precisa ter em mente conceitos como responsividade na hora de criar aplicações web. Infelizmente, a combinação de propriedades como `display` e `float` é complexo e pouco intuitivo, além de frequentemente causar problemas de *layout* na sua página.

Dessa forma, saber como usar corretamente o Flexbox é uma habilidade fundamental, pois possibilita a manipulação de elementos HTML diversos de maneira fácil e organizada, permitindo que eles ocupem melhor o espaço disponível.

## Conteúdos

### Iniciando o Flexbox

Para começar a usar o Flexbox, você deve criar um *container* e aplicar a ele a propriedade `display: flex`, como no exemplo abaixo:

```
<div class="container"></div>
```

```
.flex-container {
  display: flex;
}
```

Criamos assim um *flex-container*. Elementos filhos de um *flex-container* são chamados de *flex items*. Algumas propriedades do CSS Flexbox são aplicadas aos filhos e outras ao container.

### Propriedades de um *flex-container*

#### Flex Direction

O *layout* criado pelo Flexbox é disposto em dois eixos, chamados de *Flex Axes*. Eles são o *Main Axis* (ou eixo principal) e o *Cross Axis* (eixo transversal), e possuem direção definida pela propriedade `flex-direction`, que aceita os seguintes parâmetros:

- `Row`: valor padrão, dispõe o *Main Axis* na horizontal e o *Cross Axis* na vertical;

<img src="images/row.png" style="zoom:25%;" />

- `Row-reverse`: disposição na horizontal, mas invertendo a ordem dos itens no *Main Axis*;

<img src="images/row-reverse.png" style="zoom:25%;" />

- `Column`: disposição dos *Main Axis* na vertical e do *Cross Axis* na horizontal;

<img src="/Users/marcogalindo/Documents/TRYBE/trybe-exercises/summerjob/images/column.png" style="zoom:25%;" />

- `Column-reverse`: disposição na vertical com inversão da ordem dos itens no *Main Axis*.

<img src="/Users/marcogalindo/Documents/TRYBE/trybe-exercises/summerjob/images/column-reverse.png" style="zoom:25%;" />

Outras propriedades importantes de um *layout* flexível são:

- *Main-Start*/*Main-End*: respectivamente onde começa e termina o *Main Axis*.
- *Main-Size*: comprimento total do *Main Axis*, seja ele a largura, caso esteja disposto na horizontal, ou a altura, se estiver na vertical.
- *Cross-Start*/*Cross-End*: respectivamente o começo e o final do *Cross Axis*.
- *Cross-Size*: comprimento do *Cross Axis*, que será a largura, caso esteja na direção horizontal, ou altura, caso esteja na vertical.

#### Flex Wrap

Os *Flex Items* são agrupados em linhas denominadas *Flex Lines*, definidas pela propriedade `flex-wrap`. As *Flex Lines* podem ser:

- *Single Line*: disposição padrão, na qual todos os itens ficam dispostos na mesma linha. Nesse caso, a propriedade `flex-wrap` é definida como `nowrap`, podendo ocorrer a compressão dos itens, conforme o exemplo abaixo;

<img src="/Users/marcogalindo/Documents/TRYBE/trybe-exercises/summerjob/images/nowrap.png" style="zoom:25%;" />

- *Multi Line*: os itens "quebram" a linha quando ultrapassam o tamanho máximo do *container*. Isso ocorre quando o `flex-wrap` é configurado como `wrap` ou `wrap-reverse` (nesse último, os itens são dispostos de maneira inversa).

<img src="/Users/marcogalindo/Documents/TRYBE/trybe-exercises/summerjob/images/wrap.png" style="zoom:25%;" />

<img src="/Users/marcogalindo/Documents/TRYBE/trybe-exercises/summerjob/images/wrap-reverse.png" style="zoom:25%;" />

#### Flex Flow

Essa propriedade combina tanto o  `flex-direction` quanto o `flex-wrap`, podendo ser usada em substituição para deixar o seu código mais enxuto. Na sua sintaxe, o primeiro valor corresponde ao  `flex-direction` e o segundo ao `flex-wrap`, tal qual o exemplo abaixo:

```
flex-flow: column wrap-reverse;
```

#### Justify-Content

Aqui, você será capaz de ajustar o espaçamento entre os itens de um *container*, de acordo com a disposição do *Main Axis*. Essa propriedade pode receber os seguintes parâmetros:

- `flex-start`: valor padrão, dispõe os itens no ínicio do *Main Axis*;

<img src="images/justify-flex-start.png" style="zoom:25%;" />

- `flex-end`: os itens ficam dispostos ao final do *Main Axis*;

<img src="images/justify-flex-end.png" style="zoom:25%;" />

- `center`: centraliza os itens no meio do eixo principal;

<img src="images/justify-center.png" style="zoom:25%;" />

- `space-between`: os itens são distribuídos igualmente ao longo do eixo, o primeiro se situando no começo e o último ao final;

<img src="images/justify-space-between.png" style="zoom:25%;" />

- `space-evenly`: determina que o espaço entre os itens e os limites do eixo, e entre os próprios itens são iguais;

<img src="images/justify-space-evenly.png" style="zoom:25%;" />

- `space-around`: determina o espaçamento de uma unidade de distância entre os itens e o limite do eixo, e de duas unidades entre os próprios itens.

<img src="images/justify-space-around.png" style="zoom:25%;" />

#### Align-Items

Use essa propriedade quando quiser ajustar os itens com relação ao seu eixo transversal. Ela recebe os seguintes valores:

- `flex-start`: dispõe os itens no ínicio do *Cross Axis*;

<img src="images/align-flex-start.png" style="zoom:25%;" />

- `flex-end`: os itens ficam dispostos ao final do *Cross Axis*;

<img src="images/align-flex-end.png" style="zoom:25%;" />

- `center`: centraliza os itens de acordo com o eixo transversal;

<img src="images/align-center.png" style="zoom:25%;" />

- `baseline`: alinha os itens de acordo com suas *baselines*, ou seja, a linha base do conteúdo dentro deles.

<img src="images/align-baseline.png" style="zoom:25%;" />

- `stretch`: valor padrão, estica os itens para que cubram o *container* de acordo com o *Cross Axis*.

#### Align-Content

O espaço ao redor dos itens de um *container* podem ser ajustado através desta propriedade, a qual recebe os parâmetros a seguir:

- `normal`: valor inicial, onde as linhas estão organizadas na sua posição padrão;

<img src="images/align-content-normal.png" style="zoom:25%;" />

- `flex-start`: as linhas ficam dispostas no início do *container*;

<img src="images/align-content-flex-start.png" style="zoom:25%;" />

- `flex-end`: aqui, dispomos as linhas ao final do *container*;

<img src="images/align-content-flex-end.png" style="zoom:25%;" />

- `center`: posiciona as linhas no meio do *container*;

<img src="images/align-content-center.png" style="zoom:25%;" />

- `space-between`: o espaço entre as linhas é distribuído igualmente, a primeira linha ficando posicionada no começo do *container* e a última ao final;

<img src="images/align-content-space-between.png" style="zoom:25%;" />

- `space-evenly`: o espaçamento é o mesmo, tanto entre as linhas e o limite do *container*, quanto entre as próprias linhas;

<img src="images/align-content-space-evenly.png" style="zoom:25%;" />

- `space-around`: o espaçamento é de uma unidade entre as linhas e o limite do *container*, e de duas unidades entre as próprias linhas;

<img src="images/align-content-space-around.png" style="zoom:25%;" />

- `stretch`: alonga as linhas para que ocupem o espaço vazio disponível.

### Propriedades de um *flex-item*

Assim como o Flexbox consegue atribuir características flexíveis a um *container*, algumas propriedades se aplicam aos itens que ficam dentro dele. São elas:

#### Align-Self

Essa propriedade alinha um determinado item de acordo com o eixo transversal da linha onde se encontra. Seu valor padrão é `auto`, situação onde herda o `align-items` definido para o *container* onde se encontra. Os outros valores são os mesmos usados para o `align-items` — `stretch`, `flex-start`, `flex-end`, `center` e `baseline`. No exemplo abaixo, podemos ver a caixa número 2 alinhada ao final e ao centro do *container* através da propriedade `align-items`.

<img src="images/align-self-flex-end.png" style="zoom:25%;" />

<img src="images/align-self-center.png" style="zoom:25%;" />

#### Order

Permite ordenar itens dentro de um *container*. Por padrão, todos os itens recebem o valor 0 e são ordenados de acordo com sua marcação no HTML. Por exemplo, o item que recebe o parâmetro 1 se situará ao final do *container*, enquanto o que recebe -1 se posiciona no início, tal qual a caixa 4 no exemplo abaixo.

<img src="images/order.png" style="zoom:25%;" />

#### Flex-Basis

Define o tamanho base de um item no *container* antes do espaço restante ser distribuído, normalmente através de uma unidade de medida. Seu valor padrão é `auto`, ou seja, mantendo a flexibilidade do item. Já quando o valor é `content`, o item se ajusta ao tamanho do conteúdo que está dentro dele. Na ilustração abaixo, a caixa 2 recebeu a propriedade `flex-basis` com valor de `300px`, por isso ficou maior com relação às demais.

<img src="images/flex-basis.png" style="zoom:25%;" />

#### Flex-Shrink

Define o quanto um item será comprimido com relação aos demais, caso o *container* onde ele se encontra seja diminuído. Seu valor padrão é 1 e quanto maior, mais ele encolhe, como a caixa 2 no exemplo abaixo.

<img src="images/shrink.png" style="zoom:25%;" />

#### Flex-Grow

Define o quanto de espaço vago será ocupado por um item. Seu valor padrão é 0, e quanto maior, mais aquele determinado item aumentará com relação aos outros, tal qual a caixa 2 no exemplo abaixo.

<img src="images/grow.png" style="zoom:25%;" />

#### Flex

Propriedade onde se passam, respectivamente, os valores de `flex-grow`, `flex-shrink` e `flex-basis`, onde o segundo e o terceiro parâmetro são opcionais. Seu valor padrão é `0 1 auto`.

## Exercícios

### Parte 1

Para começar, crie um arquivo HTML e um arquivo CSS, utilize o código abaixo e siga as instruções.

```
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Flexbox Parte 1</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <section class="section">
​   <header class="header">ORGANIZANDO AS CAIXAS</header>
    <div class="number-container">
      <div class="number" id="four">4</div>
      <div class="number" id="five">5</div>
      <div class="number" id="six">6</div>
      <div class="number" id="one">1</div>
      <div class="number" id="two">2</div>
      <div class="number" id="three">3</div>
​   </div>
  </section>
</body>
</html>
```

```
body {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.section {
  max-width: 700px;
  margin: 0 auto;
}

.number-container {
  display: flex;
}

.header {
  background-color: black;
  padding: 10px;
  margin-bottom: 20px;
  color: #fafafa;
  text-align: center;
}

.number {
	display: flex;
  width: 200px;
  height: 200px;
  border-radius: 10px;
  font-size: 30px;
}

#one {
  background-color: tomato;
}

#two {
  background-color: aquamarine;
}

#three {
  background-color: firebrick;
}

#four {
  background-color: goldenrod;
}

#five {
  background-color: lightgreen;
}

#six {
  background-color: steelblue;
}
```

#### 1 - Faça com que os números dentro das caixas fiquem centralizados tanto na vertical quanto na horizontal.

Sua página deverá estar similar à imagem abaixo.

![](images/Parte 1 - Exercício 1.png)

#### 2 - Usando as propriedades do Flexbox, faça com que as caixas desçam uma linha. Também dê espaçamento entre elas.

Sua página deverá ficar similar à imagem abaixo:

![](images/Parte 1 - Exercício 2.png)

#### 3 - Utilizando apenas UMA propriedade Flexbox, organize as caixas de modo que fiquem em ordem crescente (da esquerda para a direita e de cima para baixo). 

Sua página deverá ficar igual à imagem abaixo:

![](images/Parte 1 - Exercício 3.png)

#### 4 - Agora refaça o exercício anterior, dessa vez utilizando a propriedade Order.

### Parte 2

Para esse exercício, copie os blocos de códigos a seguir respectivamente no seu arquivo HTML e CSS.

```
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Flexbox Parte 2</title>
  <link rel="stylesheet" href="parte2.css">
</head>
<body>
  <section class="section">
    <header class="header">ORGANIZANDO AS CAIXAS PARTE II</header>
    <div class="number-container">
      <div class="number" id="boxA">A</div>
      <div class="number" id="boxB">B</div>
      <div class="number" id="boxC">C</div>
      <div class="number" id="boxD">D</div>
    </div>
  </section>
</body>
</html>
```

```
body {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.section {
  max-width: 700px;
  margin: 0 auto;
}

.number-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.header {
  background-color: black;
  padding: 10px;
  margin-bottom: 20px;
  color: #fafafa;
  text-align: center;
}

.number {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
  border-radius: 10px;
  font-size: 30px;
  margin: 10px;
}

#boxA {
  background-color: wheat;
}

#boxB {
  background-color: paleturquoise;
}

#boxC {
  background-color: limegreen;
}

#boxD {
  background-color: lightcoral;
}
```

#### 1 - Utilizando uma das propriedades referentes aos Flex-Items, faça com que as caixas A e D cresçam com relação às outras. O seu arquivo HTML se assemelhe à imagem abaixo.

![](images/Parte 2 - Exercício 1.png)

#### 2 - Agora mude um pouco o layout e faça com que a caixa B e C se tornem maiores que as outras, dessa vez utilizando outra propriedade de Flex-Items (lembre-se que temos mais de uma maneira de chegar ao mesmo resultado). Sua página deverá ficar como a imagem abaixo:

![](images/Parte 2 - Exercício 2.png)

### Bônus

Para a parte final dos seus exercícios, você vai utilizar seus conhecimentos sobre Flexbox para estilizar um site sobre ursos — e quem não gosta de ursos, certo? Fique a vontade para aplicar também o que aprendeu em outros módulos. 

Antes de iniciarmos, copie os códigos HTML e CSS abaixo.

```
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Flexbox Bônus</title>
  <link rel="stylesheet" href="bonus.css">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<body>
  <main class="main">
    <header class="header">
      <h1>Ursos.com</h1>
      <div class="menu">
        <a href="#" class="links">Home</a>
        <a href="#" class="links">Mais Ursos</a>
        <a href="#" class="links">Sobre</a>
        <a href="#" class="links">Contato</a>
      </div>
    </header>
    <section class="section">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima asperiores unde, dicta, vitae minus ut exercitationem sint quam adipisci quasi quos fugit, sunt vel provident quas ipsum nemo. Explicabo, incidunt.
      </p>
      <img src="https://placebear.com/300/200" alt="placebear">
      <img src="https://placebear.com/200/200" alt="placebear">
      <img src="https://placebear.com/200/200" alt="placebear">
      <img src="https://placebear.com/300/200" alt="placebear">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi sapiente dolores vero. Sunt, cupiditate minus culpa commodi obcaecati animi fugiat et veritatis quos optio quae expedita adipisci, natus in labore!
      </p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas facilis maxime numquam pariatur reprehenderit laborum necessitatibus amet quam voluptate, placeat est libero sunt neque adipisci odio nihil nemo aliquid obcaecati? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas facilis maxime numquam pariatur reprehenderit laborum necessitatibus amet quam voluptate, placeat est libero sunt neque adipisci odio nihil nemo aliquid obcaecati?</p>
      <img src="https://placebear.com/200/300" alt="placebear">
    </section>
    <footer class="footer">
      <h3>Fale conosco</h3>
      <span class="material-icons">call</span><p>Telefone: (12) 3456-7890</p>
      <span class="material-icons">email</span><p>Email: ursos@ursos.com</p>
      <span class="material-icons">location_on</span><p>Endereço: Rua Dos Ursos, 123</p>
      <p>Todos os direitos reservados</p>
    </footer>
  </main>
</body>
</html>
```

```
* {
  margin: 0;
}

body {
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background-color: navajowhite;
}

.main {
  max-width: 600px;
  margin: 5vh auto;
  background-color: #fafafa;
  border: 1px solid black;
}

.header {
  background-color: goldenrod;
}

.links {
  background: rgb(0, 0, 0, 0.1);
  border-radius: 5px;
  width: 100px;
  display: inline-block;
  padding: 10px;
  color: black;
  text-decoration: none;
}

.section {
  padding: 20px;
  text-align: justify;
}

.footer {
  background-color: goldenrod;
}
```

#### 1 - Organize o menu superior de modo que os links fiquem um ao lado do outro, com espaçamento entre eles e as bordas. Seu site deve ficar parecido com a imagem abaixo.

![](images/Parte Bônus - Exercício 1.png)

#### 2 - Disponha as quatro primeiras imagens em forma de galeria, tal qual na imagem abaixo.

![](images/Parte Bônus - Exercício 2.png)

#### 3 - Posicione a última imagem do lado esquerdo do último parágrafo, como na imagem abaixo.

![](images/Parte Bônus - Exercício 3.png)

#### 4 - Organize a parte final da página de modo que fiquei semelhante à imagem abaixo

![](images/Parte Bônus - Exercício 4.png)

## Gabarito

### Parte 1

#### Exercício 1

```
body {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.section {
  max-width: 700px;
  margin: 0 auto;
}

.number-container {
  display: flex;
}

.header {
  background-color: black;
  padding: 10px;
  margin-bottom: 20px;
  color: #fafafa;
  text-align: center;
}

.number {
	display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border-radius: 10px;
  font-size: 30px;
}

#one {
  background-color: tomato;
}

#two {
  background-color: aquamarine;
}

#three {
  background-color: firebrick;
}

#four {
  background-color: goldenrod;
}

#five {
  background-color: lightgreen;
}

#six {
  background-color: steelblue;
}
```

#### Exercício 2

```
body {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.section {
  max-width: 700px;
  margin: 0 auto;
}

.number-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.header {
  background-color: black;
  padding: 10px;
  margin-bottom: 20px;
  color: #fafafa;
  text-align: center;
}

.number {
	display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border-radius: 10px;
  font-size: 30px;
}

#one {
  background-color: tomato;
}

#two {
  background-color: aquamarine;
}

#three {
  background-color: firebrick;
}

#four {
  background-color: goldenrod;
}

#five {
  background-color: lightgreen;
}

#six {
  background-color: steelblue;
}
```

#### Exercício 3

```
body {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.section {
  max-width: 700px;
  margin: 0 auto;
}

.number-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap-reverse;
}

.header {
  background-color: black;
  padding: 10px;
  margin-bottom: 20px;
  color: #fafafa;
  text-align: center;
}

.number {
	display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border-radius: 10px;
  font-size: 30px;
}

#one {
  background-color: tomato;
}

#two {
  background-color: aquamarine;
}

#three {
  background-color: firebrick;
}

#four {
  background-color: goldenrod;
}

#five {
  background-color: lightgreen;
}

#six {
  background-color: steelblue;
}
```

#### Exercício 4

```
body {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.section {
  max-width: 700px;
  margin: 0 auto;
}

.number-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.header {
  background-color: black;
  padding: 10px;
  margin-bottom: 20px;
  color: #fafafa;
  text-align: center;
}

.number {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border-radius: 10px;
  font-size: 30px;
}

#one {
  background-color: tomato;
}

#two {
  background-color: aquamarine;
}

#three {
  background-color: firebrick;
}

#four {
  background-color: goldenrod;
  order: 1;
}

#five {
  background-color: lightgreen;
  order: 1;
}

#six {
  background-color: steelblue;
  order: 1;
}
```



### Parte 2

#### Exercício 1

```
body {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.section {
  max-width: 700px;
  margin: 0 auto;
}

.number-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.header {
  background-color: black;
  padding: 10px;
  margin-bottom: 20px;
  color: #fafafa;
  text-align: center;
}

.number {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
  border-radius: 10px;
  font-size: 30px;
  margin: 10px;
}

#boxA {
  background-color: wheat;
  flex-grow: 1;
}

#boxB {
  background-color: paleturquoise;
}

#boxC {
  background-color: limegreen;
}

#boxD {
  background-color: lightcoral;
  flex-grow: 1;
}
```

#### Exercício 2

```
body {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.section {
  max-width: 700px;
  margin: 0 auto;
}

.number-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.header {
  background-color: black;
  padding: 10px;
  margin-bottom: 20px;
  color: #fafafa;
  text-align: center;
}

.number {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
  border-radius: 10px;
  font-size: 30px;
  margin: 10px;
}

#boxA {
  background-color: wheat;
}

#boxB {
  background-color: paleturquoise;
  flex: 1 0 auto;
}

#boxC {
  background-color: limegreen;
  flex: 1 0 auto;
}

#boxD {
  background-color: lightcoral;
}
```

### Bônus

#### Exercício 1

```
* {
  margin: 0;
}

body {
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background-color: navajowhite;
}

.main {
  max-width: 600px;
  margin: 5vh auto;
  background-color: #fafafa;
  border: 1px solid black;
}

.menu {
  display: flex;
  padding: 20px;
  justify-content: space-between;
}

.header {
  background-color: goldenrod;
}

.links {
  background: rgb(0, 0, 0, 0.1);
  border-radius: 5px;
  width: 100px;
  display: inline-block;
  padding: 10px;
  color: black;
  text-decoration: none;
}

.section {
  padding: 20px;
  text-align: justify;
}

.footer {
  background-color: goldenrod;
}
```

#### Exercício 2

```
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Flexbox Bônus</title>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="bonus.css">
</head>
<body>
  <main class="main">
    <header class="header">
      <h1>Ursos.com</h1>
      <div class="menu">
        <a href="#" class="links">Home</a>
        <a href="#" class="links">Mais Ursos</a>
        <a href="#" class="links">Sobre</a>
        <a href="#" class="links">Contato</a>
      </div>
    </header>
    <section class="section">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima asperiores unde, dicta, vitae minus ut exercitationem sint quam adipisci quasi quos fugit, sunt vel provident quas ipsum nemo. Explicabo, incidunt.
      </p>
      <div class="gallery">
        <img src="https://placebear.com/300/200" alt="placebear">
        <img src="https://placebear.com/200/200" alt="placebear">
        <img src="https://placebear.com/200/200" alt="placebear">
        <img src="https://placebear.com/300/200" alt="placebear">
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi sapiente dolores vero. Sunt, cupiditate minus culpa commodi obcaecati animi fugiat et veritatis quos optio quae expedita adipisci, natus in labore!
      </p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas facilis maxime numquam pariatur reprehenderit laborum necessitatibus amet quam voluptate, placeat est libero sunt neque adipisci odio nihil nemo aliquid obcaecati?</p>
      <img src="https://placebear.com/200/300" alt="placebear">
    </section>
    <footer class="footer">
      <h3>Fale conosco</h3>
      <span class="material-icons">call</span><p>Telefone: (12) 3456-7890</p>
      <span class="material-icons">email</span><p>Email: ursos@ursos.com</p>
      <span class="material-icons">location_on</span><p>Endereço: Rua Dos Ursos, 123</p>
      <p>Todos os direitos reservados</p>
    </footer>
  </main>
</body>
</html>
```



```
* {
  margin: 0;
}

body {
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background-color: navajowhite;
}

.main {
  max-width: 600px;
  margin: 5vh auto;
  background-color: #fafafa;
  border: 1px solid black;
}

.menu {
  display: flex;
  padding: 20px;
  justify-content: space-between;
}

.header {
  background-color: goldenrod;
}

.links {
  background: rgb(0, 0, 0, 0.1);
  border-radius: 5px;
  width: 100px;
  display: inline-block;
  padding: 10px;
  color: black;
  text-decoration: none;
}

.section {
  padding: 20px;
  text-align: justify;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.gallery img {
  margin: 10px;
}

.footer {
  background-color: goldenrod;
}
```

#### Exercício 3

```
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Flexbox Bônus</title>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="bonus.css">
</head>
<body>
  <main class="main">
    <header class="header">
      <h1>Ursos.com</h1>
      <div class="menu">
        <a href="#" class="links">Home</a>
        <a href="#" class="links">Mais Ursos</a>
        <a href="#" class="links">Sobre</a>
        <a href="#" class="links">Contato</a>
      </div>
    </header>
    <section class="section">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima asperiores unde, dicta, vitae minus ut exercitationem sint quam adipisci quasi quos fugit, sunt vel provident quas ipsum nemo. Explicabo, incidunt.
      </p>
      <div class="gallery">
        <img src="https://placebear.com/300/200" alt="placebear">
        <img src="https://placebear.com/200/200" alt="placebear">
        <img src="https://placebear.com/200/200" alt="placebear">
        <img src="https://placebear.com/300/200" alt="placebear">
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi sapiente dolores vero. Sunt, cupiditate minus culpa commodi obcaecati animi fugiat et veritatis quos optio quae expedita adipisci, natus in labore!
      </p>
      <div class="last-section">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas facilis maxime numquam pariatur reprehenderit laborum necessitatibus amet quam voluptate, placeat est libero sunt neque adipisci odio nihil nemo aliquid obcaecati? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas facilis maxime numquam pariatur reprehenderit laborum necessitatibus amet quam voluptate, placeat est libero sunt neque adipisci odio nihil nemo aliquid obcaecati?</p>
        <img src="https://placebear.com/200/300" alt="placebear">
      </div>
    </section>
    <footer class="footer">
      <h3>Fale conosco</h3>
      <span class="material-icons">call</span><p>Telefone: (12) 3456-7890</p>
      <span class="material-icons">email</span><p>Email: ursos@ursos.com</p>
      <span class="material-icons">location_on</span><p>Endereço: Rua Dos Ursos, 123</p>
      <p>Todos os direitos reservados</p>
    </footer>
  </main>
</body>
</html>
```

```
* {
  margin: 0;
}

body {
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background-color: navajowhite;
}

.main {
  max-width: 600px;
  margin: 5vh auto;
  background-color: #fafafa;
  border: 1px solid black;
}

.menu {
  display: flex;
  padding: 20px;
  justify-content: space-between;
}

.header {
  background-color: goldenrod;
}

.links {
  background: rgb(0, 0, 0, 0.1);
  border-radius: 5px;
  width: 100px;
  display: inline-block;
  padding: 10px;
  color: black;
  text-decoration: none;
}

.section {
  padding: 20px;
  text-align: justify;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.gallery img {
  margin: 10px;
}

.last-section {
  display: flex;
  padding: 10px;
  justify-content: space-between;
}

.last-section p {
  display: inline-block;
  max-width: 50%;
  order: 1;
}

.footer {
  background-color: goldenrod;
}

```

#### Exercício 4

```
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Flexbox Bônus</title>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="bonus.css">
</head>
<body>
  <main class="main">
    <header class="header">
      <h1>Ursos.com</h1>
      <div class="menu">
        <a href="#" class="links">Home</a>
        <a href="#" class="links">Mais Ursos</a>
        <a href="#" class="links">Sobre</a>
        <a href="#" class="links">Contato</a>
      </div>
    </header>
    <section class="section">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima asperiores unde, dicta, vitae minus ut exercitationem sint quam adipisci quasi quos fugit, sunt vel provident quas ipsum nemo. Explicabo, incidunt.
      </p>
      <div class="gallery">
        <img src="https://placebear.com/300/200" alt="placebear">
        <img src="https://placebear.com/200/200" alt="placebear">
        <img src="https://placebear.com/200/200" alt="placebear">
        <img src="https://placebear.com/300/200" alt="placebear">
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi sapiente dolores vero. Sunt, cupiditate minus culpa commodi obcaecati animi fugiat et veritatis quos optio quae expedita adipisci, natus in labore!
      </p>
      <div class="last-section">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas facilis maxime numquam pariatur reprehenderit laborum necessitatibus amet quam voluptate, placeat est libero sunt neque adipisci odio nihil nemo aliquid obcaecati? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas facilis maxime numquam pariatur reprehenderit laborum necessitatibus amet quam voluptate, placeat est libero sunt neque adipisci odio nihil nemo aliquid obcaecati?</p>
        <img src="https://placebear.com/200/300" alt="placebear">
      </div>
    </section>
    <footer class="footer">
      <h3>Fale conosco</h3>
      <div class="footer-icons">
        <div class="telephone">
          <span class="material-icons">call</span><p>Telefone: (12) 3456-7890</p>
        </div>
        <div class="email">
          <span class="material-icons">email</span><p>Email: ursos@ursos.com</p>
        </div>
        <div class="location">
          <span class="material-icons">location_on</span><p>Endereço: Rua Dos Ursos, 123</p>
        </div>
      </div>
      <p>Todos os direitos reservados</p>
    </footer>
  </main>
</body>
</html>
```

```
* {
  margin: 0;
}

body {
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background-color: navajowhite;
}

.main {
  max-width: 600px;
  margin: 5vh auto;
  background-color: #fafafa;
  border: 1px solid black;
}

.menu {
  display: flex;
  padding: 20px;
  justify-content: space-between;
}

.header {
  background-color: goldenrod;
}

.links {
  background: rgb(0, 0, 0, 0.1);
  border-radius: 5px;
  width: 100px;
  display: inline-block;
  padding: 10px;
  color: black;
  text-decoration: none;
}

.section {
  padding: 20px;
  text-align: justify;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.gallery img {
  margin: 10px;
}

.last-section {
  display: flex;
  padding: 10px;
  justify-content: space-between;
}

.last-section p {
  display: inline-block;
  max-width: 50%;
  order: 1;
}

.footer {
  background-color: goldenrod;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer h3 {
  margin-bottom: 10px;
}

.footer-icons {
  margin-bottom: 10px;
}

.telephone, .email, .location {
  display: flex;
}
```



## Recursos adicionais

[A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

[Flexbox Froggy](https://flexboxfroggy.com/)

[Flexbox Defense](http://www.flexboxdefense.com/)

[Learn Flexbox](https://eneax.github.io/learn-flexbox/)

[MDN Web Docs - Conceitos básicos de Flexbox](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)

[W3Schools - CSS Flexbox](https://www.w3schools.com/css/css3_flexbox.asp)









