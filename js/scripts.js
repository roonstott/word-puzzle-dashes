let stringInput = "Believe you can and you're halfway there. Theodore Roosevelt";

let arrayOfChars = stringInput.split("");

let newArray = [];

function runCode(){
arrayOfChars.forEach(function(char) {
    if (isVowel(char)) {
        newArray.push('-');
    }else{
        newArray.push(char);
    }
    
});
    let newString = newArray.join("");
    return newString;

}



function isVowel(char) {
    if (char ==="a" || char === "e" || char ==="i" || char === "o" || char ==="u") {
        return true;
    } else {
        return false;
    }
};

console.log(runCode());

