import { useEffect, useState } from 'react'

function App() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    fetch('/api/')
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage('Could not reach the backend'))
  }, [])

  return (
    <div>
      <h1>Il mio assistente d'italiano</h1>
      <p>{message}</p>
    </div>
  )
}

export default App