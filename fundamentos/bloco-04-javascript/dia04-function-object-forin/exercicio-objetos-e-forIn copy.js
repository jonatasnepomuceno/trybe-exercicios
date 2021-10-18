let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//Exe 1
console.log('Bem-vinda', info.personagem);

//Exe 2
info['recorrente'] = 'Sim'

console.log(info);

//Exe 3
for (let key in info) {
  console.log(key);
}

//Exe 4
for (let key in info) {
  console.log(info[key]);
}

//Exe 5
let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

for (let key in info || key in info2) {
  console.log(info[key], 'e', info2[key]);
}
