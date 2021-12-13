const form = document.getElementById("form")
let maleNames =  ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
let femaleNames =  ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]


document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault()


let userDay =document.getElementById("day").value
let userMonth =document.getElementById("month").value
let userYear =document.getElementById("year").value


let male = document.getElementById("male")
let female = document.getElementById("female")


//alert functions
function alertUser() {
  alert("Enter Valid Date")
}

function alertMonth() {
  alert("Enter a valid Month")
}

function alertUserYear {
  alert ("enter valid Year")
}