import { useState } from 'react'

function App() {
  const [a, setA] = useState(null)
  const [b, setB] = useState(null)
  const [result, setResult] = useState(0)

  return (
    <div>
      <Header/>
      <Numbers a={a} setA={setA} b={b} setB={setB}/>
      <Math a={a} b={b} setA={setA} setB={setB} setResult={setResult}/>
      <Result result={result}/>
    </div>
  )
}

function Header(){
  return <h1>calculator</h1>
}

function Numbers({a, b, setA, setB}){
  return(
    <div>
      <input type="number" value={a} onChange={(e) => setA(Number(e.target.value))}/>
      <input type="number" value={b} onChange={(e) => setB(Number(e.target.value))}/>
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
    setResult(a / b)
  }
  function Clear(){
    setA(0)
    setB(0)
    setResult(0)
  }

  return(
    <div>
      <button onClick={Tambah}>tambah</button>
      <button onClick={Kurang}>kurang</button>
      <button onClick={Kali}>kali</button>
      <button onClick={Bagi}>bagi</button>
      <button onClick={Clear}>clear</button>
    </div>
  )
}

function Result({result}){
  return <h1>Result: {result}</h1>
}

export default App
