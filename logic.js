let userHerb = 0;
let userChyslo = 0;
let totalClicked = 0;

const addHerb = () => {
     userHerb++;
     totalClicked++;
     changeContent(true, 'current', `Всього "підкидань": ${totalClicked}`);
}

const addChyslo = () => {
     userChyslo++;
     totalClicked++;
     changeContent(true, 'current', `Всього "підкидань": ${totalClicked}`);
}

const startComp = () => {
     let compHerb = 0;
     let compChyslo = 0;
     let compIterations = totalClicked;

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

     changeContent(true, 'comp-result',`Герб: ${compHerb}. Число: ${compChyslo}` )
     // document.getElementById('comp-result').innerText = `Герб: ${compHerb}. Число: ${compChyslo}`;
}


const restart = () => {
     userHerb = 0;
     userChyslo = 0;
     totalClicked = 0;

     changeContent(false, 'comp-result');
     changeContent(false, 'current');
}

const changeContent = (toCreate, id, content) => {
     if(toCreate){
          return document.getElementById(id).innerText = content;
     } else {
          return document.getElementById(id).innerText = null;
     }
}