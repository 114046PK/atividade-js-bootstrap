# Painel de Estudos

**Nome do projeto:** Painel de Estudos
**Tema:** acompanhamento de estudos (notas, tarefas e horas estudadas)
**Aluno:** Pedro
**RGM:** (coloque seu RGM aqui)

## Interface criada

A interface é uma tela simples de painel de estudos. No topo tem uma barra de navegação com o nome do projeto, logo abaixo uma apresentação com título e descrição, depois três cards com a média das notas, as tarefas pendentes e as horas de estudo. Em seguida tem um alerta com uma mensagem de aprovação, um botão e um rodapé. Os valores mostrados na tela são os mesmos que aparecem no Console, vindos do `script.js`.

## Componentes Bootstrap utilizados

- `container`, `row` e `col` (layout responsivo)
- `navbar`
- `card`
- `badge`
- `button`
- `alert`
- `footer`

## Diferença entre `let`, `const` e `var`

- `const`: guarda um valor que não muda. Usei para o nome do aluno, o curso, as notas e a meta de horas.
- `let`: guarda um valor que pode mudar depois. Usei em `quantidadeTarefas` (de 3 para 5), em `notaTeste` e em `horasEstudadas`.
- `var`: forma antiga de declarar variáveis. Está no código só para mostrar que conheço. Hoje se prioriza `let` e `const` porque o `var` tem escopo mais confuso, pode ser redeclarado sem dar erro e isso causa bugs difíceis de achar.

### Por que cada variável foi criada assim

- `nomeAluno`, `curso`: `const`, porque não mudam.
- `quantidadeTarefas`: `let`, porque o número de tarefas muda.
- `nota1`, `nota2`, `horasPorDia`, `diasDeEstudo`: `const`, porque são valores fixos do cálculo.
- `notaTeste`: `let`, porque troquei o valor para testar o `if` e o `else`.
- `horasEstudadas`: `let`, porque é um valor que pode ser atualizado.
- `exemploAntigo`: `var`, só para demonstrar.

## Tipos de dados utilizados

- **string:** `nomeAluno`, `curso`, `tituloPainel`
- **number:** `quantidadeTarefas`, `totalMaterias`, `nota1`, `media`
- **boolean:** `painelAtivo`, `aprovado`
- **null:** `observacao`

## Condição com `if/else`

Criei uma condição para verificar se o aluno foi aprovado: se a nota for maior ou igual a 6, mostra "Aprovado", senão mostra "Precisa revisar". Testei os dois caminhos mudando o valor de `notaTeste` (primeiro 4 e depois 8). No desafio final, também usei um `if/else` para ver se a meta de horas de estudo foi batida.

## Maior dificuldade encontrada

(Escreva aqui com suas palavras. Exemplo: entender quando usar `let` e quando usar `const`.)

## Como a dificuldade foi resolvida

(Escreva aqui como você resolveu. Exemplo: testei no Console do navegador, mudando os valores e vendo o que acontecia.)
