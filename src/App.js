import React, { useState } from 'react';
import './App.css';
import { Timer } from './Components/Timer';

function App() {

  const [counter, increment] = useCounter();
  const [timers, setTimers] = useState([
    {
      name: 'Start test',
      duration: 200 * 60
    },
    {
      name: 'New episod of "Vikings"',
      duration: 15
    },
    {
      name: 'New episod of "100"',
      duration: 5
    },
    {
      name: 'Laction about JavaSkript',
      duration: 30 * 60
    }
  ])
  const name = useTextField('');
  const minutes = useTextField('');

  function useTextField(init) {
    const[value, setValue] = useState(init);
    return {
      value,
      onChange: (e) => setValue(e.target.value)
    }
  }

  function useCounter(start = 0) {
    const [counter, setCounter] = useState(start);
    return [counter, () => setCounter(counter + 1)]
  }


  function onSubmitTimerHandler(event) {
    event.preventDefault();
    setTimers(
      [
        ...timers,
        {
          name: name.value,
          duration: parseInt(minutes.value) * 60
        }
      ]
    )
  }

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={increment}>++</button>
      <h1>New Timers</h1>
      <form onSubmit={onSubmitTimerHandler}>
        <input type='text' name='name' {...name}/>
        <input type='number' name='minutes'{...minutes}/>
        <button tupe='submit'>Add new timer</button>
      </form>
      {
        timers.map(
          (timer) => <Timer key={timer.name} name={timer.name} duration={timer.duration} />
        )
      }
      <button onClick={() => {setTimers(timers.slice(1));}}>Remove timer</button>
    </div>
  )
}

export default App;
