import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';
function App() {
  return (
    <>
      <Player />
      <div id='challenges'>

      <TimerChallenge title="Easy" challengeDuration={1}/>
      <TimerChallenge title="Medium" challengeDuration={5}/>
      <TimerChallenge title="Hard" challengeDuration={10}/>
      <TimerChallenge title="Unbeatable" challengeDuration={15}/>
      </div>
    </>
  );
}

export default App;
