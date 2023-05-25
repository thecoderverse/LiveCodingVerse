import React from 'react'
import Button from '../../components/Button'
import Card from '../../components/Card'
import Input from '../../components/Input'
import { setLocalStorage } from '../../utils/local-storage/local-storage'
import { User } from '@prisma/client';
import { useRouter } from 'next/router';
import { fetchPost } from '../../utils/fetch/post'

interface UserData {
  name: string;
  email: string;
  password: string;
}

const Signup: React.FC = () => {
  const router = useRouter();
  const [userData, setUserData] = React.useState<UserData>({ name: '', email: '', password: '' });
  const [isEmailValid, setIsEmailValid] = React.useState<boolean>(true);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = <T extends keyof UserData>(field: T, value: UserData[T]): void => {
    if (field === 'email') {
      const isValid = validateEmail(value);
      setIsEmailValid(isValid);
    }
    setUserData((prevUserData) => ({ ...prevUserData, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>): Promise<void> => {
    e.preventDefault();
    if (!isEmailValid) {
      alert('Lütfen geçerli bir e-posta adresi girin.');
      return;
    }
    try {
      const result = await fetchPost<User>('/api/register', { name: userData.name, email: userData.email, password: userData.password } as User)
      if (result && result.id) {
        setLocalStorage('token', result.token);
        router.push('/login');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Card title='Sign Up'>
      <Input type='text' value={userData.name} onChange={(e) => handleChange('name', e.target.value)} placeholder='Name' required />
      <Input type='email' value={userData.email} onChange={(e) => handleChange('email', e.target.value)} placeholder='Email' required />
      <Input type='password' value={userData.password} onChange={(e) => handleChange('password', e.target.value)} placeholder='Password' required />
      <Button onClick={handleSubmit}>Submit</Button>
    </Card>
  )
}

export default Signup;