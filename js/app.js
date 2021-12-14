const form = document.getElementById("form")



maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]








document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault()
    
    let userDay = document.getElementById("day").value
    let userMonth = document.getElementById("month").value
    let userYear = document.getElementById("year").value

    
      


    let male = document.getElementById("male")
    let female = document.getElementById("female") 

    
    let yr = userYear.toString()
    var  firstDigit = yr[0]
    var  secondDigit = yr[1]
    var  thirdDigit = yr[2]
    var  fourthDigit = yr[3]

    var CC = firstDigit + secondDigit
    var YY = thirdDigit + fourthDigit    

    let message = "Your Akan name is:"

    
    if (userDay <= 0 || userDay > 31 ) {
        alertUser()
        return
    } if (userMonth <= 0 || userMonth > 12) {
        alertMonth()
    }  else if( male.checked == true) {
        var birthDay =   ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(userMonth+1)/10)) + userDay ) % 7
        var product = parseInt(birthDay)
        var akanName = maleNames[product]
        if(akanName === undefined) {
            alertUserYear()
        } else {
            document.getElementById("output").innerHTML = message.concat(akanName) 
            document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1600562718259-5cae2c9d2235?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)";
            

        }
           
        
    } if (female.checked == true) {
        var birthDay =   ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(userMonth+1)/10)) + userDay ) % 7
        var product = parseInt(birthDay)
        var akanName = femaleNames[product]
        if(akanName === undefined) {
            alertUserYear()
        } else {
            document.getElementById("output").innerHTML = message.concat(akanName) 
            document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1504173010664-32509aeebb62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=827&q=80)";
            
 }
               
    } 

})


function alertUser() {
  return
  alert("Enter Valid Date")
}

function alertUserMonth () {
  return
  alert("Enter Valid Month")
}

function alertUserYear () {
  return alert("Enter Valid Year")
}
