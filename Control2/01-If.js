let temperature = 16
if(temperature<20){
    console.log("it's cold outside")
}else{
    console.log("it's hot outside")
}

let score = 199
let life = 3
console.log("Welcome to the Game")
if(score>99){
    console.log("you got a +1Life")
    score-= 100
    life++
}else{
    console.log("Score not enough")
}
console.log(`Your score is ${score} and your life left are ${life}`)