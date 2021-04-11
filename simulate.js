const sleepNow = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.3) {
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}
async function markPrimes(number, clicked = false) {
    squares = document.querySelectorAll(".square");
    // mark 1 as non prime
    squares[0].classList.remove("primeNumber");
    squares[0].classList.add("nonPrime");
    squares[0].innerHTML = " ";
    fade(squares[0]);


    for (var i = 2; i * i <= number; i++) {

        if (squares[i - 1].classList.contains("primeNumber")) {
            var billboard = document.getElementById("markPrimesOfNumber");
            billboard.innerHTML = "Now marking Multiples of " + i;
            squares[i - 1].classList.add("current");
            for (var j = i * i; j <= number; j += i) {

                if (squares[j - 1].classList.contains("nonPrime"))
                    continue;
                squares[j - 1].classList.remove("primeNumber");
                squares[j - 1].classList.add("nonPrime");
                squares[j - 1].classList.add("currentMarked");
                squares[j - 1].innerHTML = " ";
                fade(squares[j - 1]);

                document.getElementById('getInstantly').addEventListener("click", function () {
                    clicked = true;
                });
                if (!clicked) {
                    await sleepNow(100);
                }
                squares[j - 1].classList.remove("currentMarked")
            }
            squares[i - 1].classList.remove("current");
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


document.getElementById('getInstantly').addEventListener("click", function () {
    var inputNumber = document.getElementById("textbox").value;

    markPrimes(inputNumber, true);
});

