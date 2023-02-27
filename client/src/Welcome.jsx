import './App.css';

function WelcomePage(props) {
  return (
    <>
      <h1>Welcome to the game, {props.username}</h1>
    </>
  );
}

export default WelcomePage;

