import { useState } from 'react'
import { FaDatabase } from 'react-icons/fa';
import { SiOpenai } from "react-icons/si";
import './App.css'

function App() {
  const [generatedQuery, setGeneratedQuery] = useState("")
  const [stringToBeInterpreted, setStringToBeInterpreted] = useState("")

  const fetchGeneratedQuery = async () => {
    const generate = await fetch('http://localhost:3005/generate-sql', {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify({query: stringToBeInterpreted}),
    })
    
    const result = await generate.json()
    return result.result
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const result = await fetchGeneratedQuery()
    setGeneratedQuery(result)
  }


  return (
    <div>
      <h1 className="title"> <SiOpenai/> SQL Generator <FaDatabase/></h1>

      <form onSubmit={onSubmit}>
        <input
        type="text"
        placeholder="Enter a query..."
        className="input-field" 
        value={stringToBeInterpreted}
        onChange={(e)=>setStringToBeInterpreted(e.target.value)}
        />
        <button>Generate</button>
      </form>

      <p className="query">{generatedQuery}</p>
    </div>
  )
}

export default App
