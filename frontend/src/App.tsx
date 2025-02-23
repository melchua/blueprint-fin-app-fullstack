import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('/api/')
      .then(res => res.json())
      .then(data => setMessage(data.message))
  }, [])

  return (
    <>
      <div>
        here we go again
        <Button>Click me</Button>
        <h1 className="text-amber-500 text-4xl font-bold">{message}</h1>
      </div>
    </>
  )
}

export default App
