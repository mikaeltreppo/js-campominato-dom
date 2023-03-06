let entranceDom = document.getElementById('entrance');
let buttonDom = document.getElementById('buttonStartGame');

//array contenente numeri casuali pc
let mineLocation = []
// creaziine numeri casuali computer
let casualRandomNumber = createNumberPc(1,100);
function createNumberPc (min, max){
   let casualNumber = Math.floor(Math.random() * (max - min) + min );
   return casualNumber;
}
console.log(casualRandomNumber);
//push nell array il numero casuale generato
mineLocation.push(casualRandomNumber);
console.log(mineLocation);


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
        })
}

//funzione creare caselle
function createBox() {
    let newBox = document.createElement('div')
    newBox.classList.add('boxFinished');
    return newBox;
}
