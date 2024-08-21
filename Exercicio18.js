let vv1 = 200
let vv2 = 150
let vv3 = 100
let vn = 50
let vb = 30

let total = vv1 + vv2 + vv3 + vn + vb

let c1 = (vv1 / total) * 100;
let c2 = (vv2 / total) * 100;
let c3 = (vv3 / total) * 100;

let pvn = (vn / total) * 100;
let pvb = (vb / total) * 100;


console.log('número total de eleitores: ' + total);
console.log('Percentual de votos válidos para cada candidato: ')
console.log(' candidato 1 = ' + c1)
console.log(' candidato 2 = ' + c2)
console.log(' candidato 3 = ' + c3)
console.log('Percentual de votos nulos: ' + pvn);
console.log('Percentual de votos em branco: ' + pvb);

