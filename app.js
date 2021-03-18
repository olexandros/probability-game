let herb = 0;
let chyslo = 0;
let total = 0;

const addHerb = () => {
     herb++;
     total++;
     document.getElementById('current').innerText = `Всього "підкидань": ${total}`;
     console.log('Herb');
}

const addChyslo = () => {
     chyslo++;
     total++;
     document.getElementById('current').innerText = `Всього "підкидань": ${total}`;
     console.log('Chyslo');
}


