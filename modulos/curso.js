let Estudantes = require('./estudantes');

let curso = {
    nomeDoCurso : 'Português',
    notaDeAprovacao: 7,
    faltaMaximas: 5,
    listaDeEstudantes: Estudantes,

    adicionaAluno: function(aluno){
        this.listaDeEstudantes.push(aluno)
    },

    resultadoAluno: function(aluno){

        if(aluno.qtdFaltas === curso.faltaMaximas && calculaMedia(aluno.notas) > this.notaDeAprovacao + (this.notaDeAprovacao * 10)/100  ){
            return `Passou, mas excedeu o limite de faltas: ` + true;
        }

        if(calculaMedia(aluno.notas) >= this.notaDeAprovacao && aluno.qtdFaltas < this.faltaMaximas){
            return `Aprovou: ` + true
        }else{
            return `Reprovou: ` + false
        }
    },

    verificaAlunos: function(){
        this.listaDeEstudantes.forEach(item => {
            console.log( item.nome + ' - ' + this.resultadoAluno(item))
        })
    }

}

module.exports = curso;