import { User } from "@prisma/client"
import { useRouter } from "next/router"
import { useState } from "react"
import { fetchPost } from "../../fetch-helpers/post"

const Login = () => {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const result = await fetchPost<User>('/api/login', { email, password } as User)
        if (result && result.id) {
            router.push('/home')
        }
    }
    
    return (
        <>
            <h1>Login</h1>
            <form>
                <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
                <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}

export default Login