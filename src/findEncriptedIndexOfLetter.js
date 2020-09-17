export default function findEncriptedIndexOfLetter(character, rotationNumber){
    let isCapital = false 
    if (/[^A-Za-z]/.test(character)) return character
    if (character === character.toUpperCase()){
        isCapital = true
        character = character.toLowerCase()
    } 
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    for(let index = 0; index < alphabet.length; index++){
        let letter = alphabet[index]
        if (letter === character){
            if(index + rotationNumber > 25) rotationNumber = rotationNumber - 26
            return isCapital ? alphabet[index + rotationNumber].toUpperCase() : alphabet[index + rotationNumber]
        }
    }
  }