import React, { useState } from "react";
import './App.css';
import encriptMessage from './encriptMessage'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import options from './options'


export default () => {
  const [message, setMessage] = useState('')
  const [rotation, setRotation] = useState(13)

  return (
  <div className="App">
    <h3 className="header">Welcome to my Encripting App, type any message and the app will Encript your message by rotating the letters of the Alphabet</h3>
    <p className="encript-message">Encripted Message: <span className="message">{encriptMessage(message, rotation)}</span></p>
    <form className="form">
    <TextField id="outlined-basic" label="Message" value={message} onChange={e => setMessage(e.target.value)}/>
    <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={rotation}
          onChange={e => setRotation(parseInt(e.target.value))}
          helperText="Please select your rotation"
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField> 
    </form>
  </div>)
} 



