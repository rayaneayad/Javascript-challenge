const bernardTaille1 = (1.69);
const bernardTaille2 = (1.88);
const bernardPoids1 = (78);
const bernardPoids2 = (95);
const marcelTaille1 = (1.88);
const marcelTaille2 = (1.76);
const marcelPoids1 = (95);
const marcelPoids2 = (85);

const bernardImc = bernardPoids1 / (bernardTaille1*bernardTaille1);
const bernardImc2 = bernardPoids2 / (bernardTaille2*bernardTaille2);
const marcelImc = marcelPoids1 / (marcelTaille1*marcelTaille1);
const marcelImc2 = marcelPoids2 / (marcelTaille2*marcelTaille2);



if (bernardHigherIMC = bernardImc > marcelImc ){
  document.write("Bernard a un IMC" + " (" + bernardImc  + ") " + "plus élevé que Marcel" + " (" + marcelImc + ").");
}

else {
  document.write("Marcel a un IMC plus élevé que Bernard");
}

if(bernardImc < 28 || bernardImc2 < 28){
  document.write('<br/>');
  document.write("Bernard : insuffisance pondérale.");
}

if(marcelImc > 25 || bernardImc2 > 25){
  document.write('<br/>');
  document.write("Marcel : Surpoids.");
}

