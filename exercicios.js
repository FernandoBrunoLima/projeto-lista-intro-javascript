// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2;
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt("Digite uma mensagem!");

  console.log(mensagem);
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = Number(prompt("Digite a altura do retângulo:"));
  const largura = Number(prompt("Digite a largura do retângulo:"));
  const area = altura * largura;

  console.log(area);
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt("Insira o ano atual:"));
  const anoNascimento = Number(prompt("Insira o ano de nascimento:"));
  const idade = anoAtual - anoNascimento;

  console.log(idade);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = peso / (altura * altura);

  return imc;
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  const name = prompt("Qual é o seu nome?");
  const age = Number(prompt("Informe a sua idade:"));
  const email = prompt("Informe o seu email: ");
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  console.log(
    `Meu nome é ${name}, tenho ${age} anos, e o meu email é ${email}.`
  );
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const color1 = prompt("Qual sua primeira cor favorita?");
  const color2 = prompt("Qual sua segunda cor favorita?");
  const color3 = prompt("Qual sua terceira cor favorita?");
  const colors = [color1, color2, color3];

  console.log(colors);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

  return string.toUpperCase();
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso;
}
// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0];
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1];
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  array.unshift(array[array.length - 1]);
  array.pop();
  array.push(array[1]);
  array.splice(1, 1);

  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toLowerCase() === string2.toLowerCase();
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const currentYear = Number(prompt("Informe o ano atual:"));
  const birthYear = Number(prompt("Informe seu ano de nascimento:"));
  const rgIssueYear = Number(prompt("Informe a data de emissão do RG"));
  const userAge = currentYear - birthYear;
  const rgYears = currentYear - rgIssueYear;
  let renovationNeeded = false;

  if (userAge <= 20 && rgYears >= 5) renovationNeeded = true;
  if (userAge > 20 && userAge <= 50 && rgYears >= 10) renovationNeeded = true;
  if (userAge > 50 && rgYears >= 15) renovationNeeded = true;

  console.log(renovationNeeded);
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  let isLeapYear = false;
  if (ano % 400 === 0) isLeapYear = true;
  if (ano % 4 === 0 && ano % 100 !== 0) isLeapYear = true;

  return isLeapYear;
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  let applianceValid = false;
  const ageOver18 = prompt("Você tem mais de 18 anos?\nResponda sim ou não:");
  const hasHighSchool = prompt(
    "Você possui ensino médio completo?\nResponda sim ou não:"
  );
  const fullAvailable = prompt(
    "Você possui disponibilidade exclusiva durante os horários do curso?\nResponda sim ou não:"
  );

  if (ageOver18 === "sim" && hasHighSchool === "sim" && fullAvailable === "sim")
    applianceValid = true;

  console.log(applianceValid);
}
