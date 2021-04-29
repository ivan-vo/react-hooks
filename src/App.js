import React, { useState } from 'react';
import './App.css';
import { Timer,useTimerUp } from './Components/Timer';
import TimerForm from './Components/TimerForm';

function App() {

  const [counter, increment] = useCounter();
  const [timers, setTimers] = useState([
    {
      name: 'Start test',
      duration: 5 * 60
    },
    {
      name: 'New episod of "Vikings"',
      duration: 15 * 60
    }
  ])

  function useCounter(start = 0) {
    const [counter, setCounter] = useState(start);
    return [counter, () => setCounter(counter + 1)]
  }
  function removeTimer() {
    let timers_ = timers.slice();
    timers_.shift();
    setTimers(timers_)
  }

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={increment}>++</button>
      {
        timers.map(
          (timer, i) => <Timer key={i} name={timer.name} duration={timer.duration} />
        )
      }
      <button onClick={removeTimer}>Remove timer</button>
      <p>You watch this site: {useTimerUp()}</p>
      <TimerForm />
    </div>
  )
}

export default App;
