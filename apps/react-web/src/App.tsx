import { useState } from 'react'
import { Button } from "@workspace/ui/components/button";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <header className="text-4xl font-bold text-blue-600 mb-4">Welcome to My App</header>
        <Button size="sm">Button</Button>
      </div>
    </>
  )
}

export default App
