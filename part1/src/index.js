import React from 'react'
import ReactDOM from 'react-dom'
import HeaderComponent from './components/Header'
import ContentComponent from './components/Content'
import TotalComponent from './components/Total'

const App = () => {
  const course='Half Stack application development'
  const parts = [
    {name:'Fundamentals of React', exercises:10},
    {name:'Using props to pass data', exercises:7}, 
    {name:'State of a component', exercises:14}]

    const total = parts.reduce((acc,obj)=>acc+obj.exercises, 0)

  return (
    <div>
      <HeaderComponent course={course} />
      {parts.map((part,i)=>
        <ContentComponent part={part.name} exercises={part.exercises} key={i}/>
      )}
      
       <TotalComponent propTotal={total}/>

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))