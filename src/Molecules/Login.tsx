import { useState } from 'react'
import '../App.css'
import Button from '../Components/Button'
import Text from '../Components/Text'
import { TextField } from '../Components/TextField'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function Login() {
  let navigate = useNavigate()
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(event: React.FormEvent) {
    if (password.length == 0 && user.length == 0) {
      alert('Insert username and password')
    } else {
      navigate('home', { replace: true })
    }
    event.preventDefault()
  }

  return (
    <div className="App">
      <form>
        <p>
          <Text>Insert your credentials</Text>
        </p>
        <p>
          <TextField
            text={user}
            handler={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUser(e.target.value)
            }
          />
        </p>
        <p>
          <TextField
            text={password}
            handler={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
        </p>
        <p>
          <Button type="submit" handler={handleSubmit}>
            Login
          </Button>
        </p>
      </form>
    </div>
  )
}

export default Login
