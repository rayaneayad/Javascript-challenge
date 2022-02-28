
let moyenneDauphins1 = (96 + 108 + 89) / 3;
let moyenneDauphins2 = (97 + 112 + 101) / 3;
let moyenneDauphins3 = (97 + 112 + 101) / 3;
let moyenneKoalas1 = (88 + 91 + 110) / 3;
let moyenneKoalas2 = (109 + 95 + 123) / 3;
let moyenneKoalas3 = (109 + 95 + 106) / 3;

const resultDauphins = (moyenneDauphins1 + moyenneDauphins2 + moyenneDauphins3) /3;
const resultKoalas = (moyenneKoalas1 + moyenneKoalas2 + moyenneKoalas3) /3;

const winD = resultDauphins > resultDauphins;
const winK = resultKoalas > resultDauphins;

if (resultDauphins < 100  || resultKoalas < 100)
{
  document.write("Pas de gagnant.")
}


if (winD){
  document.write("Les dauphins sont vainceurs !!!");
}

else {
  document.write("Les Koalas sont vainceurs !!!");
  document.write('<br/>');
  document.write(parseInt(resultDauphins) + (' - ') + parseInt(resultKoalas) );
}
