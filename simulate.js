const sleepNow = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

async function markPrimes(number) {

    squares = document.querySelectorAll(".square");
    // mark 1 as non prime
    squares[0].classList.remove("primeNumber");
    squares[0].classList.add("nonPrime");
    squares[0].innerHTML = " ";


    for (var i = 2; i <= number / 2; i++) {

        if (squares[i - 1].classList.contains("primeNumber")) {
            
            for (var j = 2 * i; j <= number; j += i) {
                squares[j - 1].classList.remove("primeNumber");
                squares[j - 1].classList.add("nonPrime");
                squares[j - 1].innerHTML = " ";
                await sleepNow(500);
            }
        }
    }


}
function createSquares(number = 20) {

    rootElement = document.getElementById("container");
    rootElement.innerHTML = "";
    for (var i = 1; i <= number; i++) {
        var newDiv = document.createElement("div");

        document.getElementById("container").appendChild(newDiv);
        newDiv.innerHTML += i;

        newDiv.classList.add("square");
        newDiv.classList.add("primeNumber")
    }
}

createSquares();
var button = document.getElementById("start");

button.addEventListener("click", function name() {

    var inputNumber = document.getElementById("textbox").value;
    createSquares(inputNumber);

});

var mark = document.getElementById("markprimes");

mark.addEventListener("click", function name(params) {
    var inputNumber = document.getElementById("textbox").value;

    markPrimes(inputNumber);
})


