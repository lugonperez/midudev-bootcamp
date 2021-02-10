import React from 'react'
import ReactDOM from 'react-dom'
import HeaderComponent from './components/Header'
import ContentComponent from './components/Content'
import TotalComponent from './components/Total'

const App = () => {
  const contents = [
    {part:'Fundamentals of React', exercises:10},
    {part:'Using props to pass data', exercises:7}, 
    {part:'State of a component', exercises:14}]

  return (
    <div>
      <HeaderComponent course='Half Stack application development'/>
      {contents.map((content,i)=>
        <ContentComponent part={content.part} exercises={content.exercises} key={i}/>
      )}
      
       <TotalComponent propTotal={contents.reduce((acc,obj)=>acc+obj.exercises, 0)}/>

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))