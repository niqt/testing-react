import React, { useState, useEffect } from 'react'
import './App.css'
import Button from './Components/Button'
import Text from './Components/Text'
import { TextField } from './Components/TextField'
import ReactDOM from 'react-dom'
import getRequest from './Api/Client'

function App() {
  const initialName = 'niqt'
  const [nick, setNick] = useState(initialName)
  const [name, setName] = useState('')

  async function fetchUser() {
    try {
      const user = await getRequest(`/users/${nick}`)
      setName(user.data.name)
    } catch (error) {
      //Log errors
    }
  }

  function handleSubmit(event: React.FormEvent) {
    if (nick.length == 0) {
      alert('Insert the nickname')
    } else {
      fetchUser()
    }
    event.preventDefault()
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <div className="App">
      <form>
        <p>
          <Text>Insert your nick name</Text>
        </p>
        <p>
          <TextField
            text={nick}
            handler={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNick(e.target.value)
            }
          />
        </p>
        <p>
          <TextField
            text={name}
            handler={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />
        </p>
        <p>
          <Button type="submit" handler={handleSubmit}>
            Search
          </Button>
        </p>
      </form>
    </div>
  )
}

export default App
