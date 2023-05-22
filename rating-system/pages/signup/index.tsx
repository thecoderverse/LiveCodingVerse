import { User } from '@prisma/client';
import { useRouter } from 'next/router';
import React from 'react';
import { fetchPost } from '../../fetch-helpers/post';

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
    console.log(userData);
    try {
      const result = await fetchPost<User>('/api/user', userData);
      if (result && result.id) {
        router.push('/login');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Rating System</h1>
      <input type="text" value={userData.name} onChange={(e) => handleChange('name', e.target.value)} />
      <input type="email" value={userData.email} onChange={(e) => handleChange('email', e.target.value)} />
      <input type="password" value={userData.password} onChange={(e) => handleChange('password', e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Signup;