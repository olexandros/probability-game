let userHerb = 0;
let userChyslo = 0;
let totalClicked = 0;

let hasStarted = false;
let hasRestarted = false;

let userArr = [];
let compArr = [];

// тестування додавання події (натиск) на кнопки

let startBtn = document.querySelector("#start-btn");
// let restartBtn = document.querySelector("#restart-btn");


if(!hasStarted){
     startBtn.addEventListener("click", start);
} else if(hasStarted) {
     startBtn.addEventListener("click", restart);
}





function addHerb () {

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

function addChyslo () {

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

function start() {

     if(hasStarted){
          restart();
     } else if(!hasStarted){

          let compHerb = 0;
          let compChyslo = 0;
          let compIterations = totalClicked;
          hasStarted = true;

          startBtn.innerText = "Перезапустити"

          // алгоритм, що симулює випадковий вибір комп'ютера
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

          changeContent(false, "user-bg-msg");
          changeContent(false, "comp-bg-msg");

          if(totalClicked === 0){
               // Повідомлення, що для початку треба зробити симуляцію
               changeContent(true, 'comp-msg', 'Спершу потрібно зробити симуляція вручну');
               changeContent(true, 'user-msg', `Натискайте 'Герб' або 'Число' у довільному порядку`);

               changeContent(true, 'user-result-msg', `Немає вхідних даних! `);
               changeContent(true, 'comp-result-msg', `Немає вхідних даних! `);
          } else {
               // Симуляція була розпочата - виведення інформації через повідомлення
               changeContent(true, 'comp-msg', `Герб: ${compHerb}. Число: ${compChyslo}. Відношення %: ${herbPercentComp}/${chysloPercentComp}`);
               changeContent(true, 'user-msg', `Герб: ${userHerb}. Число: ${userChyslo}. Відношення %: ${herbPercentUser}/${chysloPercentUser}`);

               changeContent(true, 'user-result-msg', `Ваша комбінація виглядає так: `);
               changeContent(true, 'comp-result-msg', `А комп'ютерна комбінація така: `);
          }

     }

}


function restart() {
     userHerb = 0;
     userChyslo = 0;
     totalClicked = 0;
     userArr = [];
     compArr = [];
     hasStarted = false;

     startBtn.innerText = "Ще раз розпочати";


     changeContent(true, 'user-msg', `Всього "підкидань": 0`);
     changeContent(false, 'comp-msg');
     changeContent(false, 'user-result');
     changeContent(false, 'comp-result');
     changeContent(false, 'user-result-msg');
     changeContent(false, 'comp-result-msg');
}

function changeContent (toCreate, id, content)  {
     if(toCreate){
          return document.getElementById(id).innerText = content;
     } else {
          return document.getElementById(id).innerText = null;
     }
}

