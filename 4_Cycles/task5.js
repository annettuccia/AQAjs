let encryptedMessage = "Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr";
let decryptedMessage = "";
let i = 0;

while(i < encryptedMessage.length){
    if(encryptedMessage[i-1] === 'b' || encryptedMessage[i] === 'r' && encryptedMessage[i] === 'b' || encryptedMessage[i+1] === 'r'){
        i++;
        continue;
    }
    decryptedMessage += encryptedMessage[i];
    i++;
}

console.log(decryptedMessage);