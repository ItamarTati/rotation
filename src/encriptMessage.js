import findEncriptedIndexOfLetter from './findEncriptedIndexOfLetter'
function encriptMessage(string, rotation){
    let encriptedMessage = ''
    for(let index = 0; index < string.length; index++){
        let letter = string[index]
        let rotatedLetter = findEncriptedIndexOfLetter(letter, rotation)
        encriptedMessage += rotatedLetter
    }
    return encriptedMessage
  }

export default encriptMessage