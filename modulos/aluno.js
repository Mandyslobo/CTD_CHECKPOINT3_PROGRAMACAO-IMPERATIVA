let Curso = require("./curso");

const Aluno = function(nome, qtdFaltas, notas){
    this.nome = nome,
    this.qtdFaltas = qtdFaltas,
    this.notas = notas,

  calculaMedia = function (notas) {
    let soma = 0;

    for (i = 0; i < notas.length; i++) {
      let notaAux = notas[i];
      soma = soma + notaAux;
    }

    return soma / notas.length
  }

  falta = function (aluno) {
    let maisFalta = aluno.qtdFaltas + 1;
    aluno.qtdFaltas = maisFalta;
    return;
  };
};

module.exports  = Aluno;