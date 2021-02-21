import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Button from './components/Button.jsx'
import Statistic from './components/Statistic.jsx'
import Texts from './components/Statistic.jsx'
import Statistics from './components/Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good+neutral+bad
  const score = good-bad
  const average = score/all
  const positive = good/all*100

  const handleClickGood = () =>{
    setGood(good+1)
  }

  const handleClickNeutral = () =>{
    setNeutral(neutral+1)
  }

  const handleClickBad = () =>{
    setBad(bad+1)
  }

  return (
    <div>
    <h2>Give Feedback</h2>
      <Button text="good" onClick={handleClickGood} />
      <Button text="neutral" onClick={handleClickNeutral}/>
      <Button text="bad" onClick={handleClickBad} />
   
      <Statistics title="Statistics" all={all}>
        <Statistic title="Good:" text={good}/>
        <Statistic title="Neutral:" text={neutral}/>
        <Statistic title="Bad:" text={bad}/>
        <Statistic title="All:" text={all}/>
        <Statistic title="Average:" text={!isNaN(average)?average:0}/>  
        <Statistic title="Positive:" text={!isNaN(positive)?positive:0}/>
      </Statistics>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)