import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [currDisplay, setcurrDisplay] = useState<string>("0")

  useEffect(() => {
    if (currDisplay.length === 2 && currDisplay[0] === "0" && currDisplay[1] !== "." && currDisplay[1] !== "+" && currDisplay[1] !== "-" && currDisplay[1] !== "*" && currDisplay[1] !== "/") {
      // console.log(3 + 5 * 6 - 2 / 4);
      setcurrDisplay(currDisplay[1])
    }
  }, [currDisplay])

  function handleEquals(e: any) {
    console.log();
    const result = eval?.(`"use strict";(${currDisplay})`)
    return setcurrDisplay(result)
  }

  return (
    <div className="App">
      <div id='calculator'>
        <div id='display'>{currDisplay}</div>
        <div id='buttons'>
          <div id='numbers'>
            <button id='zero' onClick={() => setcurrDisplay(currDisplay + "0")}>0</button>
            <button id='one' onClick={() => setcurrDisplay(currDisplay + "1")}>1</button>
            <button id='two' onClick={() => setcurrDisplay(currDisplay + "2")}>2</button>
            <button id='three' onClick={() => setcurrDisplay(currDisplay + "3")}>3</button>
            <button id='four' onClick={() => setcurrDisplay(currDisplay + "4")}>4</button>
            <button id='five' onClick={() => setcurrDisplay(currDisplay + "5")}>5</button>
            <button id='six' onClick={() => setcurrDisplay(currDisplay + "6")}>6</button>
            <button id='seven' onClick={() => setcurrDisplay(currDisplay + "7")}>7</button>
            <button id='eight' onClick={() => setcurrDisplay(currDisplay + "8")}>8</button>
            <button id='nine' onClick={() => setcurrDisplay(currDisplay + "9")}>9</button>
          </div>
          <div id='operators'>
            <button id='add' onClick={() => setcurrDisplay(currDisplay + "+")}>+</button>
            <button id='subtract' onClick={() => setcurrDisplay(currDisplay + "-")}>-</button>
            <button id='multiply' onClick={() => setcurrDisplay(currDisplay + "*")}>*</button>
            <button id='divide' onClick={() => setcurrDisplay(currDisplay + "/")}>/</button>
          </div>
          <div id='other'>
            <button id='equals' onClick={handleEquals}>=</button>
            <button id='decimal' onClick={() => setcurrDisplay(currDisplay + ".")}>.</button>
            <button id='clear' onClick={() => setcurrDisplay("0")}>clear</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
