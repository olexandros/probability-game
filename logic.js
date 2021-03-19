let userHerb = 0;
let userChyslo = 0;
let totalClicked = 0;

let userArr = [];
let compArr = [];

const addHerb = () => {
     userArr.push('Г');
     userHerb++;
     totalClicked++;
     changeContent(true, 'current', `Всього "підкидань": ${totalClicked}`);
     changeContent(false, 'comp-result');
}

const addChyslo = () => {
     userArr.push('Ч');
     userChyslo++;
     totalClicked++;
     changeContent(true, 'current', `Всього "підкидань": ${totalClicked}`);
     changeContent(false, 'comp-result');
}

const start = () => {
     let compHerb = 0;
     let compChyslo = 0;
     let compIterations = totalClicked;

     for(let i = 1; i <= compIterations; i++){
          //повертає рандомне число між 0 і 1
          let random = Math.random();

          if(random <= 0.5){
               compArr.push('Г');
               compHerb++;
          }
          else if (random > 0.5){
               compArr.push('Ч');
               compChyslo++;
          }
     }

     if(totalClicked === 0){
          changeContent(true, 'comp-msg', 'Спершу потрібно зробити симуляція вручну')
     } else {
          changeContent(true, 'comp-msg',`Герб: ${compHerb}. Число: ${compChyslo}` )
     }

     changeContent(true, 'user-result', userArr.join(" "));
     changeContent(true, 'comp-result', compArr.join(" "));
}


const restart = () => {
     userHerb = 0;
     userChyslo = 0;
     totalClicked = 0;

     changeContent(false, 'comp-msg');
     changeContent(false, 'current');
     changeContent(false, 'user-result');
}

const changeContent = (toCreate, id, content) => {
     if(toCreate){
          return document.getElementById(id).innerText = content;
     } else {
          return document.getElementById(id).innerText = null;
     }
}