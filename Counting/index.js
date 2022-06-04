//document.getElementById("count-el").innerText = 5

let counting = document.getElementById("count-el")
 let saving = document.getElementById("save-el")
console.log(counting)

let count = 0

console.log(saving)

 function increment(){
     count += + 1
     counting.textContent = count
     console.log(count)
 }
 
 function save() {
     let saved = count + " - "
     saving.textContent += saved
     counting.textContent = 0
     count  = 0
     console.log(count)
  }


//  let username = "Frontpage"

//  let message = "You have three new notifications"
//  console.log(message)

//  let messageToUser = message + ", " + username
//  console.log(messageToUser)

// let name = "Adebayo Oluwademilade Israel"

// let greeting = "Hi, my name is " 
// let myGreeting = greeting + name
// //console.log(myGreeting)

// console.log(4 + 5) // 9
// console.log("2" +"4") //24
// console.log("5" + 1) // 51
// console.log(183 + "100") //183100

 
 let firstName = "Oluwademilade"
 let lastName = "Adebayo"

 let fullName = firstName + " " + lastName
 //console.log(fullName)

let name = "Linda"
let greeting= "Hi there"

function greet() {
console.log(greeting + ", " + name + "!")
}
greet()

let myPoints = 3
// Create two functions, add3Points () and remove1Point(),
// and then add/remove points to/from the myPoints variable

function add3Points (){
 ( myPoints += 3)
}

function remove1Point (){
 (myPoints -= 1)
}
add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()
// Call the functions so that the line below logs out 10
console.log(myPoints)

