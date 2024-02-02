const submit = document.getElementById('submit');
const main = document.getElementById('main');
const thanks = document.getElementById('thanks');

const voteResults = document.getElementById('voteResult');
var number = document.querySelectorAll('.number');


number.forEach((rate) =>{
    rate.addEventListener("click", () =>{
        voteResults.innerHTML = rate.innerHTML;
    })
});

submit.addEventListener("click", () => {
    thanks.classList.remove("hidden");
    main.classList.add("hidden");
});


function orangeColor(){

    var allNumbers = document.querySelectorAll(".number");
    for (var i = 0; i < allNumbers.length; i++){
        allNumbers[i].classList.remove('orange');
    }

    this.classList.toggle("orange");
}

for(var i = 0; i < number.length; i++){
    number[i].addEventListener('click', orangeColor);
}
