# 🌐 **JavaScript | Aplicação Web**

> Guia introdutório com os principais conceitos de **JavaScript**, **HTML** e **CSS** — ideal para quem está aprendendo desenvolvimento web.

📘 **Documentação:**
[https://www.w3schools.com/js/js_number_methods.asp](https://www.w3schools.com/js/js_number_methods.asp)

---

## ⚙️ **Operadores em JavaScript**

| Operador | Descrição                           | Exemplo                                      |                             |       |     |           |
| -------- | ----------------------------------- | -------------------------------------------- | --------------------------- | ----- | --- | --------- |
| `+`      | Soma                                | `2 + 3 = 5`                                  |                             |       |     |           |
| `-`      | Subtração                           | `10 - 5 = 5`                                 |                             |       |     |           |
| `*`      | Multiplicação                       | `3 * 3 = 9`                                  |                             |       |     |           |
| `/`      | Divisão                             | `20 / 4 = 5`                                 |                             |       |     |           |
| `=`      | Atribuição de valor                 | `x = 10`                                     |                             |       |     |           |
| `==`     | Comparação de valor                 | `5 == '5'` ✅                                |                             |       |     |           |
| `!=`     | Diferente                           | `10 != 5` ✅                                 |                             |       |     |           |
| `        |                                     | `                                            | **OU** lógico (um ou outro) | `true |     | false` ✅ |
| `&&`     | **E** lógico                        | `idade > 10 && idade < 15` ✅                |                             |       |     |           |
| `>`      | Maior que                           | `8 > 3` ✅                                   |                             |       |     |           |
| `<`      | Menor que                           | `4 < 9` ✅                                   |                             |       |     |           |
| `>=`     | Maior ou igual                      | `10 >= 10` ✅                                |                             |       |     |           |
| `<=`     | Menor ou igual                      | `5 <= 8` ✅                                  |                             |       |     |           |
| `!`      | Negação / validação de inexistência | `!nome` (verdadeiro se `nome` estiver vazio) |                             |       |     |           |

---

## 💡 **Variáveis**

| Tipo    | Escopo | Pode alterar? | Descrição                                 |
| ------- | ------ | ------------- | ----------------------------------------- |
| `const` | Bloco  | ❌            | Valor constante, não muda                 |
| `let`   | Bloco  | ✅            | Variável local e mutável                  |
| `var`   | Global | ✅            | Variável global, acessível fora do escopo |

### 🧩 Exemplo de uso

```js
const VALOR_DA_CARNE = 25.0;

VALOR_DA_CARNE = 30; // ❌ Erro, constante não pode mudar

console.log(
  'valor--->',
  VALOR_DA_CARNE,
  `teste ${VALOR_DA_CARNE}`,
  'teste ' + VALOR_DA_CARNE
);

var valorDoBacon = 10;
valorDoBacon = 5;
console.log('bacon', valorDoBacon); // 5

let valorDoPresunto = 7;
valorDoPresunto = 3;
console.log(valorDoPresunto); // 3
```

---

## 🧠 **Funções**

Funções são blocos de código reutilizáveis.

```js
// Função tradicional
function Soma() {
  return 1 + 1;
}

// Arrow function (moderna)
const Soma = () => {
  return 1 + 1;
};

// Arrow function simplificada
() => 1 + 1;
```

---

## 🧮 **Arrays (Listas)**

| Tipo    | Exemplo                                                        |
| ------- | -------------------------------------------------------------- |
| Strings | `['Samuel', 'José']`                                           |
| Números | `[10, 20, 30]`                                                 |
| Misto   | `['José', 30]`                                                 |
| Objetos | `[{ name: 'Samuel', idade: 20 }, { name: 'José', idade: 20 }]` |

📘 **Funções úteis:**

- `parseFloat()` → converte para número decimal
- `Math.round()` → arredonda valores

```js
const pessoas = ['José', 'Samuel'];
console.log(pessoas);
```

---

## ⚖️ **Condicionais (if / else)**

```js
const idade = 17;
const nome = '';

if (idade < 18) {
  console.log('NAO PODE CONTINUAR, MENOR DE IDADE');
}

if (idade >= 18) {
  console.log('DEU BOM');
}

if (!nome) {
  console.log('PRECISA PREENCHER O NOME');
} else {
  console.log('PODE CONTINUAR');
}
```

---

## 🔄 **Loops e Métodos de Iteração**

### 🔁 `map()`

Percorre todos os itens do array e executa algo com cada um.

```js
const nomes = ['Samuel', 'Thais', 'José'];

nomes.map((item) => {
  console.log('item:', item);
});
```

### 🔁 `for`

Percorre um array com contador.

```js
const nomes = ['Samuel', 'Thais', 'José'];

for (let contador = 0; contador < nomes.length; contador++) {
  console.log(nomes[contador]);
}
```

### 🔁 `filter()`

Filtra itens de um array de acordo com uma condição.

```js
const novoArray = nomes.filter((item) => {
  if (item == 'Samuel') {
    console.log('NAO PODE ENTRAR NA APLICAÇÃO');
    return false;
  }
  return true;
});
```

---

## 🌍 **Web: HTML + CSS + JavaScript**

### 🧱 **HTML (Estrutura)**

Linguagem de marcação usada para montar o conteúdo da página.

| Tag             | Descrição                                             |
| --------------- | ----------------------------------------------------- |
| `<input />`     | Caixa de texto para inserir informações               |
| `<button />`    | Botão interativo (cadastro, login, envio, etc.)       |
| `<p></p>`       | Parágrafo de texto                                    |
| `<h1>` - `<h6>` | Títulos (níveis de importância)                       |
| `<span></span>` | Texto em linha                                        |
| `<div></div>`   | Container (caixa) para organizar e estilizar conteúdo |

---

### 🎨 **CSS (Estilo)**

Usado para definir o visual da página.

| Propriedade        | Descrição                                     |
| ------------------ | --------------------------------------------- |
| `width`            | Largura                                       |
| `height`           | Altura                                        |
| `padding`          | Espaçamento interno (retrai dentro da caixa)  |
| `margin`           | Espaçamento externo (empurra outras caixas)   |
| `background-color` | Cor de fundo                                  |
| `color`            | Cor do texto                                  |
| `display`          | Define o comportamento (ex: `flex`, `column`) |

---

### ⚙️ **JavaScript (Comportamento)**

Responsável por lidar com **eventos** e **interações** do usuário:

- Clicar em botões
- Preencher formulários
- Mostrar mensagens
- Alterar conteúdo na tela

---

## 📘 Referência

🔗 [W3Schools - JavaScript Number Methods](https://www.w3schools.com/js/js_number_methods.asp)

---

✨ Feito com 💛 para aprendizado — **JavaScript & Web Essentials** por _Samuel Rodrigues_
