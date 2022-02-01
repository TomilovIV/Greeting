const paragraph = document.querySelector(".paragraph")

const greeting = "Hello, " + prompt("What is your first name?") + " " + prompt("And the last name?") + "!"
const greetingArr = greeting.split("")

const symbols = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
const symbolsArr = symbols.split("")

const switchingDelay = 250
const symbolsAmount = 5

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

let textForParagraph = ""

function functionForTextTwo() {
  paragraph.innerHTML = textForParagraph + symbolsArr[randomInteger(0, symbolsArr.length - 1)]
}

function functionForTextThree(a) {
  textForParagraph += greetingArr[a]
  paragraph.innerHTML = textForParagraph
}

function functionForTextOne(a) {
  for (i = 0; i <= symbolsAmount; i++) {
    if (i < symbolsAmount) {
      setTimeout(functionForTextTwo, switchingDelay / (symbolsAmount + 1) * i)
    } else {
      setTimeout(functionForTextThree, switchingDelay / (symbolsAmount + 1) * i, a)
    }
  }
}

function functionForTextFour() {
  textForParagraph = ""
  paragraph.innerHTML = textForParagraph
}

for (i = 0; i < greetingArr.length; i++) {
  setTimeout(functionForTextOne, switchingDelay * i, i)
  setTimeout(functionForTextFour, switchingDelay * greetingArr.length + 1000)
}