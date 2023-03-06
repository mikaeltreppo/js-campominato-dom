let entranceDom = document.getElementById('entrance');
let buttonDom = document.getElementById('buttonStartGame');
let pointsDom = document.getElementById('points');
let initializationDom = document.getElementById('initialization');
let welcomeDom = document.getElementById('welcome');

initializationDom.addEventListener('click', function () {
    entranceDom.classList.remove('d-none');
    welcomeDom.classList.add('d-none');
})

//array contenente numeri casuali pc
let mineLocation = [];
// creaziine numeri casuali computer
let casualRandomNumber;

for (let i = 0; i < 16; i++) {
    casualRandomNumber = createNumberPc(1, 100);
    function createNumberPc(min, max) {
        let casualNumber = Math.floor(Math.random() * (max - min) + min);
        return casualNumber;
    }
    if (!mineLocation.includes(casualRandomNumber)) {
        mineLocation.push(casualRandomNumber);
    }
    else {
        i--
    }
}


console.log(casualRandomNumber);
console.log(mineLocation);
//creo un event listener sull click per far si che se la casella con il n segnato ha lo stesso numero di array[i] diventa rossa e si ferma il gioco

let points = 0
pointsDom.innerHTML = points;

function explosion(num, box) {
    for (let i = 0; i < mineLocation.length; i++) {
        if (num == parseInt(mineLocation[i])) {
            box.classList.add('bg_red');
            alert('Game over!');
            return;
        }
    }
    points++;
    pointsDom.innerHTML = points;
}



//riparte il gioco
buttonDom.addEventListener('click',
    function () {
        location.reload();
    });

//creato numero all'interno e box e sfondo blu
for (let i = 1; i <= 100; i++) {
    let boxCreated = createBox();
    let num = i;
    entranceDom.append(boxCreated);
    boxCreated.innerHTML = num;
    boxCreated.addEventListener('click',
        function () {
            console.log(num)
            boxCreated.classList.toggle('bg_blue');
            explosion(num, boxCreated)
        })
}

//funzione creare caselle
function createBox() {
    let newBox = document.createElement('div')
    newBox.classList.add('boxFinished');
    return newBox;
}
