import React, { useState } from "react";

function encriptMessage(string, rotation){
  let encriptedMessage = ''
  for(let index = 0; index < string.length; index++){
      let letter = string[index]
      let rotatedLetter = findEncriptedIndexOfLetter(letter, rotation)
      encriptedMessage += rotatedLetter
  }
  return encriptedMessage
}

function findEncriptedIndexOfLetter(character, rotationNumber){
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

export default () => {
  const [message, setMessage] = useState('')
  const [rotation, setRotation] = useState(13)

  return (
  <div>
    <p>{encriptMessage(message, rotation)}</p>
    <form>
    <input value={message} onChange={e => setMessage(e.target.value)} />
      <select onChange={e => setRotation(parseInt(e.target.value))}>
        <option value= "11" >11</option>
        <option value="12">12</option>
        <option selected value="13">ROT-13</option>
        <option value="14">14</option>
      </select>
    </form>
  </div>)
} 



