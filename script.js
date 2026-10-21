// Mensagem inicial da atividade.
console.log("Meu primeiro script foi executado!");
console.log("Painel de Estudos");
console.log("A atividade começou");
console.log(10 + 5);

const nomeAluno = "Pedro";
const curso = "Engenharia de Software";
let quantidadeTarefas = 3;

console.log(quantidadeTarefas);
quantidadeTarefas = 5;
console.log(quantidadeTarefas);

var exemploAntigo = "Declaração utilizada em códigos antigos";
console.log(exemploAntigo);

const tituloPainel = "Painel de Estudos";
const totalMaterias = 4;
const painelAtivo = true;
const observacao = null;

console.log(tituloPainel);
console.log(totalMaterias);
console.log(painelAtivo);
console.log(observacao);

const nota1 = 7;
const nota2 = 8;
const horasPorDia = 2;
const diasDeEstudo = 5;

const somaNotas = nota1 + nota2;
const diferencaNotas = nota2 - nota1;
const horasNaSemana = horasPorDia * diasDeEstudo;
const media = somaNotas / 2;
const aprovado = media >= 6;

console.log(somaNotas);
console.log(diferencaNotas);
console.log(horasNaSemana);
console.log(media);
console.log(aprovado);

const mensagem = `O aluno ${nomeAluno} está no curso de ${curso} e possui ${quantidadeTarefas} tarefas.`;
console.log(mensagem);

let notaTeste = 4;

if (notaTeste >= 6) {
  console.log("Aprovado");
} else {
  console.log("Precisa revisar");
}

notaTeste = 8;

if (notaTeste >= 6) {
  console.log("Aprovado");
} else {
  console.log("Precisa revisar");
}

const horasPorSessao = 3;
const sessoes = 4;
const metaHoras = 10;
let horasEstudadas = horasPorSessao * sessoes;
const horasQueFaltam = metaHoras - horasEstudadas;

console.log(`Estudo da semana: ${sessoes} sessões de ${horasPorSessao}h. Total: ${horasEstudadas}h.`);

if (horasEstudadas >= metaHoras) {
  console.log("Meta de estudo batida");
} else {
  console.log(`Ainda faltam ${horasQueFaltam}h para a meta`);
}
