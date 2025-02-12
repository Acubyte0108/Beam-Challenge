import { useState } from 'react'
import { Button } from '@workspace/ui/components/button'
import { BeamButton } from "@workspace/ui/components/beam-components/index"
import BeamLogo from "@workspace/ui/assets/icons/Beam_logo_light.svg"

type Post = {
  id: number
  title: string
  body: string
  image?: string
}

function App() {
  const [posts, setPosts] = useState<Post[]>([])
  const [error, setError] = useState<string | null>(null)

  const API_URL = `${import.meta.env.VITE_API_BASE_URL}/api/posts`

  async function fetchPosts() {
    setError(null)
    try {
      const res = await fetch(API_URL)
      if (!res.ok) {
        throw new Error(`Fetch failed with status ${res.status}`)
      }
      const data = await res.json()
      if (data.data) {
        setPosts(data.data) 
      } else {
        setPosts([])
      }
    } catch (err: any) {
      setError(err.message)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <header className="text-4xl font-bold text-red-600 mb-4">
        Welcome to My App
      </header>
      <p className="text-lg mb-4">Test fetching from Nextjs app</p>

      <BeamLogo />

      {/* <BeamButton>Beam Button</BeamButton> */}

      <Button size="sm" onClick={fetchPosts}>
        Fetch Posts
      </Button>

      {error && (
        <p className="text-red-500 mt-4">
          Error: {error}
        </p>
      )}

      {posts.length > 0 && (
        <div className="mt-6 flex flex-col gap-4">
          {posts.map((post) => (
            <div key={post.id} className="p-4 border border-gray-200 rounded-md">
              <h2 className="font-bold text-xl mb-2">{post.title}</h2>
              <p>{post.body}</p>
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="mt-2 w-full h-auto"
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default App