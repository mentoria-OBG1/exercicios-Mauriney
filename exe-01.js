// EXERCÍCIO 1

let nome = 'Mauriney';
let mentor = 'Germano';


if (nome || mentor === true){
  console.log('Aluno: ' + nome, 'mentor: ' + mentor);
}

let x = 1;
let y = '1'; 
if (x !== y){
  console.log('Os valores comparados são: '+ x,'é um inteiro e ' +y, 'é um string')
} else {
  console.log('São valores iguais')
}
