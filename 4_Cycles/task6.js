let originalText = "You are the best QA ever";
let encryptedText = "";
let decryptedText = "";

//Алфавит
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let shuffledAlphabet = "qwertyuiopasdfghjklzxcvbnm";

// Шифрование
let index = 0;
while(index < originalText.length){
    let char = originalText[index];
    let isUpperCase = (char >= 'A' && char <= 'Z');
    let lowerChar = char.toLowerCase();

    let found = false;
    let j = 0;

    while (j < alphabet.length){
        if(alphabet[j] === lowerChar){
            let newChar = shuffledAlphabet[j];
            if(isUpperCase){
                newChar = newChar.toUpperCase();
            }
            encryptedText += newChar;
            found = true;
            break;
        }
        j++
    }
    if (!found){
        encryptedText += char;
    }
    index++;
}
console.log(encryptedText);

// Дешифрование
index = 0;
while(index < encryptedText.length){
    let char = encryptedText[index];
    let isUpperCase = (char >= 'A' && char <= 'Z');
    let lowerChar = char.toLowerCase();

    let found = false;
    let j = 0;

    while (j < shuffledAlphabet.length){
        if(shuffledAlphabet[j] === lowerChar){
            let newChar = alphabet[j];
            if(isUpperCase){
                newChar = newChar.toUpperCase();
            }
            decryptedText += newChar;
            found = true;
            break;
        }
        j++
    }
    if (!found){
        decryptedText += char;
    }
    index++;
}
console.log(decryptedText);