let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018

if(boughtTesla && isUSCitizen){
    longOfBoughtTesla = currentYear - boughtTesla;
    if(longOfBoughtTesla >= 4){
        console.log(prompt("would you like an upgrade?"));
    }else{
        console.log(prompt("are you satisfied with the car?"));
    }
}else if(boughtTesla && !isUSCitizen){
    console.log(prompt("would like to move to the US?"));
}else {
    console.log(prompt("are you interested in buying Tesla?"));
}
