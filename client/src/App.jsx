import { useState } from 'react'
import { FaDatabase } from 'react-icons/fa';
import { SiOpenai } from "react-icons/si";
import Loading from './Loading';
import './App.css'

const BASE_URL = import.meta.env.VITE_RENDER_API_URL || 'http://localhost:3005'

function App() {
  const [generatedQuery, setGeneratedQuery] = useState("")
  const [stringToBeInterpreted, setStringToBeInterpreted] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const fetchGeneratedQuery = async () => {
    setIsLoading(true)
    const generate = await fetch(`${BASE_URL}/generate-sql`, {
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
    setIsLoading(false)
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

      {isLoading ?
      <Loading /> :
      <p className="query">{generatedQuery}</p>}
    </div>
  )
}

export default App
