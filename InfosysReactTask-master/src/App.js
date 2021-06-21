import React, { useState } from 'react';
import './style.css';

const App = () => {
  const [data, setData] = useState('');
  const [show, setShow] = useState(false);
  const [color, setColor] = useState('');

  const formDesign = () => {
    const handleForm = e => {
      e.preventDefault();
      setData(e.target.value);
    };

    const handleSubmit = e => {
      e.preventDefault();
      console.log({ color });
      if (data === '' || color === '') {
        alert('Please Enter the name or select colors...!');
      } else {
        setShow(true);
      }
    };

    const handleRadio = e => {
      e.preventDefault();
      setColor(e.target.value);
    };

    return (
      <>
        <form onSubmit={handleSubmit}>
          <label> Enter a name: </label>
          <input type="text" name="name" onChange={handleForm} /> <br />
          <input
            id="red"
            type="radio"
            name="color"
            value="red"
            onChange={handleRadio}
          />
          <label for="red">red</label>
          <input
            id="green"
            type="radio"
            name="color"
            value="green"
            onChange={handleRadio}
          />
          <label for="green">green</label>
          <input
            id="blue"
            type="radio"
            name="color"
            value="blue"
            onChange={handleRadio}
          />
          <label for="blue">blue</label>
          <br />
          <button>Submit</button>
        </form>
      </>
    );
  };

  return (
    <>
      <h1>Hello</h1>
      {formDesign()}
      {show && (
        <div>
          <h3>
            {`Hello `}
            <span style={{ color: color }}>{data}</span>
          </h3>
        </div>
      )}
    </>
  );
};

export default App;
