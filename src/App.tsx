import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [currDisplay, setcurrDisplay] = useState<Number>(0)
  return (
    <div className="App">
      <div id='calculator'>
        <div id='display'>0</div>
        <div id='buttons'>
          <div id='numbers'>
            <button className='0'>0</button>
            <button className='1'>1</button>
            <button className='2'>2</button>
            <button className='3'>3</button>
            <button className='4'>4</button>
            <button className='5'>5</button>
            <button className='6'>6</button>
            <button className='7'>7</button>
            <button className='8'>8</button>
            <button className='9'>9</button>
          </div>
          <div id='operators'>
            <button className='add'>+</button>
            <button className='subtract'>-</button>
            <button className='multiply'>*</button>
            <button className='divide'>/</button>
          </div>
          <div id='other'>
            <button className='equals'>=</button>
            <button className='decimal'>.</button>
            <button className='clear'>clear</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
