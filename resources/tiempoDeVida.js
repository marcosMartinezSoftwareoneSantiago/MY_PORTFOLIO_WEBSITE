let d = new Date();
const hora=3;
const dia=30;
const mes=0;
const ano=1995;


var anos= d.getFullYear() - ano;
var meses= d.getMonth() - mes;
var dias= d.getDate() - dia;
var horas=d.getHours()-hora;

if(horas<=0){
  dias--;
  horas= 24 + horas; //horas will be a negative number
}

if(dias <0){
  meses--;
  if(meses==-1){
    meses=0;
    anos--;
  }
  switch(meses){
    case 0:
    case 2:
    case 4:
    case 6:
    case 7:
    case 9:
    case 11:
      dias=31+ dias; //dias will be a negative number
      break;
    case 3:
    case 5:
    case 8:
    case 10:
      dias=30+ dias; //dias will be a negative number
      break;
    case 1:
      dias=28+ dias; //dias will be a negative number
  }
}
footer.innerHTML=`<p>Hace ${horas} horas, ${dias} dias, ${meses} meses y ${anos} años que nací.</p>`;