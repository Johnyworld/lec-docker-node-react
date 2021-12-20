import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {

  const [list, setList] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    axios.get('/api/values').then(res => {
      console.log(res);
      setList(res.data)      
    });
  }, []);

  const onChange = e => {
    setValue(e.target.value);
  }

  const onSubmit = e => {
    e.preventDefault();
    axios.post('/api/value', { value }).then(res => {
      console.log(res);
      if (res.data.success) {
        setList([...list, res.data])
        
      } else {
        alert('Failed to send data to database');
      }
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>

          <ul>
            { list && list.map((list, i) => (
              <li key={i}>{list.value}</li>
            ))}
          </ul>

          <form onSubmit={onSubmit}>
            <input type='text' value={value} onChange={onChange} placeholder='입력해주세요...'></input>
            <button type='submit'>확인</button>
          </form>
        </div> 
      </header>
    </div>
  );
}

export default App;
