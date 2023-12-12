// let temperature = 16
// if(temperature<20){
//     console.log("it's cold outside")
// }else{
//     console.log("it's hot outside")
// }

// let score = 199
// let life = 3
// console.log("Welcome to the Game")
// if(score>99){
//     console.log("you got a +1Life")
//     score-= 100
//     life++
// }else{
//     console.log("Score not enough")
// }
// console.log(`Your score is ${score} and your life left are ${life}`);

// //short hands

// let balance = 500
// if(balance>100) console.log("Balance is above 500");
//             //OR
// if(balance>100) 
//     console.log("Balance is above 500"),
//     console.log("Balance is above 500"),
//     console.log("Balance is above 500")

// // Rating system for PizzaHut    

// let getStar_fromUser = "2"
// let star = parseInt(getStar_fromUser)
// if(star==1) console.log("poor")
// else if(star==2) {
//     console.log("poor");
// }
// else if(star==3) {
//     console.log("avg");
// }
// else if(star==4) {
//     console.log("great");
// }
// else if(star==5) {
//     console.log("awesome");
// }
// else if(star==6) {
//     console.log("delicious");
// }
// else{
//     console.log("I don't know that rating");
// }


// Login System

const email = ""

if(email){
    console.log("Enter your password")
}
else{
    console.log("Enter your Email")
}

console.log(Boolean(email))



// if user provide email,password,then allow login, else ask for it

const email_1 = "rjjgnjd"
const password ="799797"

if(email_1){
    if(password){
        console.log("Welcome to the app");
    }
    else{
        console.log("Enter your password");
    }
}else{
    console.log("Enter email");
}
//allow user to signIn with google or Github
const GoogleLoginToken =""
const GithubLoginToken =""

if(GoogleLoginToken || GithubLoginToken){
    console.log("Welcome to the app");
}else{
    console.log("Please Login to view yuor Account");
}


let age = 18;
let willGetLicense = false;
willGetLicense = (age >= 18) ? true : false;
console.log(willGetLicense);

