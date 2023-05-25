import Button from "../../components/Button"
import Card from "../../components/Card"
import Input from "../../components/Input"
import { setLocalStorage } from "../../utils/local-storage/local-storage"
import { User } from "@prisma/client";
import { useRouter } from "next/router";
import React from 'react';
import { fetchPost } from "../../utils/fetch/post"

interface UserData {
  email: string;
  password: string;
}

const Login = () => {
  const router = useRouter();
  const [userData, setUserData] = React.useState<UserData>({ email: "", password: "" });

  const handleChange = <T extends keyof UserData>(
    field: T,
    value: UserData[T]
  ): void => {
    setUserData({ ...userData, [field]: value });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLButtonElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      const result = await fetchPost<User>('/api/login', { email: userData.email, password: userData.password } as User)
      if (result && result.id) {
        setLocalStorage('token', result.token);
        router.push("/home");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Card title='Login'>
        <Input type='email' value={userData.email} onChange={(e) => handleChange("email", e.target.value)} placeholder='Email' required />
        <Input type='password' value={userData.password} onChange={(e) => handleChange("password", e.target.value)} placeholder='Password' required />
        <Button onClick={handleSubmit}>Submit</Button>
      </Card>
    </>
  )
}

export default Login;