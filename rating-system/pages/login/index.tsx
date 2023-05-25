import { User } from "@prisma/client"
import { useRouter } from "next/router"
import { useState } from "react"
import Button from "../../components/Button"
import Card from "../../components/Card"
import Input from "../../components/Input"
import { fetchPost } from "../../utils/fetch/post"
import { setLocalStorage } from "../../utils/local-storage/local-storage"

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
            setLocalStorage('token', result.token);
            router.push('/home')
        }
    }
    
    return (
        <>
            <Card title='Login'>
                <Input type='email' value={email} onChange={handleEmailChange} placeholder='Email' required />
                <Input type='password' value={password} onChange={handlePasswordChange} placeholder='Password' required />
                <Button onClick={handleSubmit}>Submit</Button>
            </Card>
        </>
    )
}

export default Login