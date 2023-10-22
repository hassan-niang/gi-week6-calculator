// const n1 = document.getElementById(`1`)
// const n2 = document.getElementById(`2`)
// const n3 = document.getElementById(`3`)
// const n4 = document.getElementById(`4`) 
// const n5 = document.getElementById(`5`) 
// const n6 = document.getElementById(`6`) 
// const n7 = document.getElementById(`7`) 
// const n8 = document.getElementById(`8`) 
// const n9 = document.getElementById(`9`) 
// const n0 = document.getElementById(`0`) 
const equal = document.getElementById("equals"); 
// const add = document.getElementById(`add`) 
// const sub = document.getElementById(`sub`) 
// const div = document.getElementById(`divide`) 
// const multi = document.getElementById(`multi`)  

// const num = document.querySelectorAll("#1, #2, #3, #4, #5, #6, #7, #8, #9, #0")
// const opp = document.querySelectorAll("#equals, #add, #sub, #divide, #multi") 



// equal.addEventListener(`click`, e => { 
    
// }) 


//This is the logoc behind the buttons. 

const btnlist = document.querySelectorAll("button").onkeyup 
const btnArray = [...btnlist];
btnArray.forEach(btn => btn.addEventListener(`click`, e => { 
   let screen = []
    if (e.target.id == "1"){
        screen.push() } 
    if (e.target.id == "2"){
        console.log("2") } 
    if (e.target.id == "3"){
        console.log("3") } 
    if (e.target.id == "4"){
     console.log("4") } 
    if (e.target.id == "5"){
        console.log("5") } 
    if (e.target.id == "6"){
        console.log("6") }
    if (e.target.id == "7"){
        console.log("7") }   
    if (e.target.id == "8"){
        console.log("8") }  
    if (e.target.id == "9"){
        console.log("9") } 
    if (e.target.id == "add"){
        console.log("+") } 
    if (e.target.id == "sub"){
        console.log("-") } 
    if (e.target.id == "multi"){
        console.log("*") }  
    if (e.target.id == "divide"){
        console.log("/")} 
    if (e.target.id == "del"){
        console.log("Delete") } 
    if (e.target.id == "clear"){
        console.log("a/c") }  
    if (e.target.id == "deci"){
        console.log(".") } 
    if (e.target.id.key == "equals"){
        console.log("=") } 
    }));
let finalOutput = false;
let inputValue = input.innerhtml;
let lastNum = inputValue[inputValue.length - 1];

if (finalOutput === false) {
    input.innerHTML += e.target.innerHTML;
  } else if (resultDisplayed === true && lastNum === "+" || lastNum === "-" || lastNum === "×" || lastNum === "÷") {
    finalOutput = false;
    input.innerHTML += e.target.innerHTML;
  } else {
    finalOutput = false;
    input.innerHTML = "";
    input.innerHTML += e.target.innerHTML;
  }











// btnlist[0].addEventListener(`click`, e => {
//     console.log(e.srcElement.id);

// })

// let out = function (num, opp, num){

// }

// console.log(out)