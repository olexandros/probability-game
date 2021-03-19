let userHerb = 0;
let userChyslo = 0;
let totalClicked = 0;

let hasStarted = false;

let userArr = [];
let compArr = [];

const addHerb = () => {

     //якщо знову натиснуто на 'Герб' без перезапуску
     if(hasStarted){
          restart();
     }

     userArr.push('<span class="herb-char">Г</span>');
     userHerb++;
     totalClicked++;
     changeContent(true, 'user-msg', `Всього "підкидань": ${totalClicked}`);
     changeContent(false, 'comp-result');
}

const addChyslo = () => {

     //якщо знову натиснуто на 'Число' без перезапуску
     if(hasStarted){
          restart();
     }

     userArr.push('<span class="chyslo-char">Ч</span>');
     userChyslo++;
     totalClicked++;
     changeContent(true, 'user-msg', `Всього "підкидань": ${totalClicked}`);
     changeContent(false, 'comp-result');
}

const start = () => {
     let compHerb = 0;
     let compChyslo = 0;
     let compIterations = totalClicked;
     hasStarted = true;

     for(let i = 1; i <= compIterations; i++){

          //повертає рандомне число між 0 і 1
          let random = Math.random();

          if(random <= 0.5){
               compArr.push('<span class="herb-char">Г</span>');
               compHerb++;
          }
          else if (random > 0.5){
               compArr.push('<span class="chyslo-char">Ч</span>');
               compChyslo++;
          }
     }


     changeContent(true, 'user-result-msg', `Ваша комбінація виглядає так: `)
     changeContent(true, 'comp-result-msg', `А комп'ютерна комбінація така: `)

     // Виведення масиву Г і Ч на екран 
     document.getElementById('user-result').innerHTML = userArr.join(" ");
     document.getElementById('comp-result').innerHTML = compArr.join(" ");


     // Підрахунок та виведення кількості і відношення
     let herbPercentUser;
     let chysloPercentUser;
     let herbPercentComp;
     let chysloPercentComp;

     herbPercentUser = Math.round((userHerb * 100) / totalClicked);
     chysloPercentUser = Math.round((userChyslo * 100) / totalClicked);
     herbPercentComp = Math.round((compHerb * 100) / totalClicked);
     chysloPercentComp = Math.round((compChyslo * 100) / totalClicked);

     changeContent(true, 'user-msg', `Герб: ${userHerb}. Число: ${userChyslo}. Відношення %: ${herbPercentUser}/${chysloPercentUser}`);

     if(totalClicked === 0){
          changeContent(true, 'comp-msg', 'Спершу потрібно зробити симуляція вручну')
          changeContent(true, 'user-msg', `Натискайте 'Герб' або 'Число' у довільному порядку`);
     } else {
          changeContent(true, 'comp-msg', `Герб: ${compHerb}. Число: ${compChyslo}. Відношення %: ${herbPercentComp}/${chysloPercentComp}`);
          changeContent(true, 'user-msg', `Герб: ${userHerb}. Число: ${userChyslo}. Відношення %: ${herbPercentUser}/${chysloPercentUser}`);
     }
}


const restart = () => {
     userHerb = 0;
     userChyslo = 0;
     totalClicked = 0;
     userArr = [];
     compArr = [];
     hasStarted = false;

     changeContent(true, 'user-msg', `Всього "підкидань": 0`);
     changeContent(false, 'comp-msg');
     changeContent(false, 'user-result');
     changeContent(false, 'comp-result');
}

const changeContent = (toCreate, id, content) => {
     if(toCreate){
          return document.getElementById(id).innerText = content;
     } else {
          return document.getElementById(id).innerText = null;
     }
}

