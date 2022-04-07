import React, { useState } from "react";
import './App.css';

function App() {

  const [values, setValues] = useState();

  const handleChangeValues = (event) => {
    setValues(prevEvent => ({
      ...prevEvent,
      [event.target.name]: event.target.value,
    }))
  }

  const handleClickButton = () => {
    console.log(values)
  };

  return (
    <div className="app--container">
      <div className="register--container">
        <h1 className="register--title">Seja um franqueado</h1>
        <input
          type='text'
          name='name'
          className='register--input'
          placeholder='Nome completo'
          onChange={handleChangeValues}
        >
        </input>
        <input
          type='email'
          name='email'
          className='register--input'
          placeholder='Email'
          onChange={handleChangeValues}
          >
        </input>
        <input
          type='text'
          name='phone'
          className='register--input'
          placeholder='Telefone'
          onChange={handleChangeValues}
          >
        </input>
        <input
          type='text'
          name='cidade'
          className='register--input'
          placeholder='Cidade'
          onChange={handleChangeValues}
          >
        </input>
        <input
          type='text'
          name='estado'
          className='register--input'
          placeholder='Estado'
          onChange={handleChangeValues}
          >
        </input>
        <div className="divButton">
          <button className='register--button' onClick={() => handleClickButton()}>Quero ser um franqueado</button>
        </div>
      </div>
    </div>
  );
}

export default App;
