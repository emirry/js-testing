const isPangram = function(text) {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    // const lettersArray = letters.split('');
    const textArray = text.split('');
    const lettersObject = {};

    textArray.forEach((letter) => {
        if (lettersObject[letter]) {
            lettersObject[letter] += 1;
        }
        else {
            lettersObject[letter] = 1;
        }
    });

    for (const letter of letters) {
        if (!lettersObject[letter]) {
            return false;
        }
    }

    return true;
    // const letters = 'abcdefghijklmnopqrstuvwxyz'
    // const lettersArray = letters.split('');
    // // console.log(lettersArray)
    // const textArray = text.split('');
    // // const textArray = text.replace(/ /g, '').split('');
    // // console.log(textArray);
    // for (let i = 0; i < letters.length; i++){
    //     if (!textArray[i].includes(lettersArray[i])) {
    //         return false;
    //     }  
    // }
    // // if (text.match(/[a-z]/)){
    // //     return true
    // // }
    // return true;

};
// console.log(isPangram('the quick brown fox jumps over the lazy dog'))

module.exports = isPangram;
