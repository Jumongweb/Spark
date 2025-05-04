import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChatInput from './components/ChatInput'
import ChatResponse from './components/ChatResponse'
import { fetchChatResponse } from './services/api'

function App() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleQuestionSubmit = async (question) => {
    setLoading(true);
    setResponse(null);

    try{
      const apiResponse = await fetchChatResponse(question);
      setResponse(apiResponse);
      console.log("Received:", apiResponse);
    } catch (error){
      alert("Failed to get response");
      console.error("Error:", error);
      setError(error.response?.data?.message || "Failed to get response");
    } finally {
      setLoading(false);
    }

  }

  return (
    <div className='App'>
      <header className='bg-primary text-white text-center py-4'>
        <h1>Jumong ChatBot</h1>
      </header>

      <ChatInput onSubmit={handleQuestionSubmit} />
      
      { loading && <h1>Loading...</h1>}

      <ChatResponse response={response} />
    </div>
  )
}

export default App
