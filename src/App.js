import React, { useState } from "react";
import './App.css';
import encriptMessage from './encriptMessage'


export default () => {
  const [message, setMessage] = useState('')
  const [rotation, setRotation] = useState(13)

  return (
  <div className="App">
    <h3 className="header">Welcome to my Encripting App, type any message and the app will Encript your message by rotating the letters of the Alphabet</h3>
    <p className="encript-message">Encripted Message: <span className="message">{encriptMessage(message, rotation)}</span></p>
    <form className="form">
    <input className="text-input" value={message} onChange={e => setMessage(e.target.value)} />
      <select className="options" onChange={e => setRotation(parseInt(e.target.value))}>
        <option value="0">No Rotation</option>
        <option value="1">ROT-1</option>
        <option value="2">ROT-2</option>
        <option value="3">ROT-3</option>
        <option value="4">ROT-4</option>
        <option value="5">ROT-5</option>
        <option value="6">ROT-6</option>
        <option value="7">ROT-7</option>
        <option value="8">ROT-8</option>
        <option value="9">ROT-9</option>
        <option value="10">ROT-10</option>
        <option value="11">ROT-11</option>
        <option value="12">ROT-12</option>
        <option selected value="13">ROT-13</option>
        <option value="14">ROT-14</option>
        <option value="15">ROT-15</option>
        <option value="16">ROT-16</option>
        <option value="17">ROT-17</option>
        <option value="18">ROT-18</option>
        <option value="19">ROT-19</option>
        <option value="20">ROT-20</option>
        <option value="21">ROT-21</option>
        <option value="22">ROT-22</option>
        <option value="23">ROT-23</option>
        <option value="24">ROT-24</option>
        <option value="25">ROT-25</option>
      </select>
    </form>
  </div>)
} 



