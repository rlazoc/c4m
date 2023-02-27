import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Route, Routes } from 'react-router-dom';

import './App.css';
import WelcomePage from './Welcome';

function App(props) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

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
        navigate('/welcome');
    })
    .catch((error) => {
        console.log(error);
    });
  };

  return (
  <div className="App">
    <Routes>
      <Route path="/welcome" element={ <WelcomePage {...props} username={username} /> } />
      <Route path="/" element={ <h1>Welcome to the game</h1> } />
    </Routes>

    <form onSubmit={handleSubmit} action="/welcome">
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
