import { useState } from 'react';
import axios from 'axios';

import './App.css';

function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000', {username, password})
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    });
  };

  return (
  <div className="App">
    <h1>Connect4</h1>
    <form onSubmit={handleSubmit}>
      <label>
        Username:&nbsp;
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label>
        Password:&nbsp;
        <input type="text" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
   </div>
  );
  
}

export default App;
