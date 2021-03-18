let herb = 0;
let chyslo = 0;
let total = 0;

const addHerb = () => {
     herb++;
     total++;
     document.getElementById('current').innerText = `Всього "підкидань": ${total}`;
}

const addChyslo = () => {
     chyslo++;
     total++;
     document.getElementById('current').innerText = `Всього "підкидань": ${total}`;
}

const startComp = () => {
     let compHerb = 0;
     let compChyslo = 0;
     let compIterations = total;

     for(let i = 0; i <= compIterations; i++){
          //повертає рандомне число між 0 і 1
          let random = Math.random();

          if(random <= 0.5){
               compHerb++;
          }
          else if (random > 0.5){
               compChyslo++;
          }
     }

     document.getElementById('comp-result').innerText = `Герб: ${compHerb}. Число: ${compChyslo}`;
}
