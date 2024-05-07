// let regex1 = /[a-c]/
// let regex2 = new RegExp('[a-c]')

// let emri = "jcoders"
// console.log(regex1.exec(emri))


// let text = "London, Spain, Paris";
// let result = text.match("ain");
// console.log(result)


// let text = "E hwnw";
// let result = text.replaceAll("w", "ë");
// console.log(result)

function checkEmail(){
    let result = document.querySelector('.result')
    var emailInput = document.getElementById("email").value;
    if(/^\+383\s\d{2}\s\d{3}\s\d{3}$/.test(emailInput)){
        result.innerHTML = "Phone Number is valid"
        result.style.color = 'green'
    }
    else{
      
        result.innerHTML = "Phone Number is invalid"
        result.style.color = 'red'
    
    }
}