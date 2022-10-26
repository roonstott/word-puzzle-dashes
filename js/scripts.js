let stringInput = "Believe you can and you're halfway there. Theodore Roosevelt";

let arrayOfChars = stringInput.split("");

let newArray = [];

function runCode() {
    arrayOfChars.forEach(function (char) {
        if (isVowel(char)) {
            newArray.push('-');
        } else {
            newArray.push(char);
        }

    });
    let newString = newArray.join("");
    return newString;

}

function isVowel(char) {
  let isTrue;
  let vowelArray = ['a', 'e', 'i', 'o', 'u'];
  char = char.toLowerCase();
  vowelArray.forEach(function (element) {
    if (element === char) {
      isTrue = true;
    } 
  });
return isTrue;
};



console.log(runCode());

