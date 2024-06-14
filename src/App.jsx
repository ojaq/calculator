import { useState } from 'react'
import './App.css'

function App() {
  const [a, setA] = useState(null)
  const [b, setB] = useState(null)
  const [result, setResult] = useState(0)

  return (
    <div className="container">
      <Header/>
      <Numbers a={a} setA={setA} b={b} setB={setB}/>
      <Math a={a} b={b} setA={setA} setB={setB} setResult={setResult}/>
      <Result result={result}/>
    </div>
  )
}

function Header(){
  return <h1>Calculator</h1>
}

function Numbers({a, b, setA, setB}){
  return(
    <div>
      <input placeholder='first number' type="number" value={a} onChange={(e) => setA(Number(e.target.value))}/> 
      <input placeholder='second number' type="number" value={b} onChange={(e) => setB(Number(e.target.value))}/>
    </div>
  )
}

function Math({a, b, setA, setB, setResult}){
  function Tambah(){
    setResult(a + b)
  }
  function Kurang(){
    setResult(a - b)
  }
  function Kali(){
    setResult(a * b)
  }
  function Bagi(){
    if (b !== 0) {
      setResult(a / b)
    } else {
      alert("Division by zero is not allowed!")
      setResult(0)
    }
  }
  function Clear(){
    setA(0)
    setB(0)
    setResult(0)
  }

  return(
    <div className='margin'>
      <button onClick={Tambah}>+</button>
      <button onClick={Kurang}>-</button>
      <button onClick={Kali}>*</button>
      <button onClick={Bagi}>/</button>
      <button className="clear" onClick={Clear}>C</button>
    </div>
  )
}

function Result({result}){
  return <h1>Result: {result}</h1>
}

export default App
