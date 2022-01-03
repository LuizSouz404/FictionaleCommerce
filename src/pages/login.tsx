import { FormEvent, useState } from "react"
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState('');

  const {loginUser} = useAuth();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    loginUser({email})
  }

  return (
    <div>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="email" value={email} onChange={event => setEmail(event.target.value)}/>
        <button type="submit"></button>
      </form>
    </div>
  )
} 