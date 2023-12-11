let getStar_fromUser = "2"
let star = parseInt(getStar_fromUser)

switch(star){
    case 1:
        console.log("poor");
        break;
    case 2:  
        console.log("avg");
        break;
    case 3:  
        console.log("good");
        break; 
    case 4:  
        console.log("awesome");
        break;  
    default:
        console.log("I don't know that rating");
} 