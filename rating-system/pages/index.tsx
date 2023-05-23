import React from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { RootState } from '../store';
import { setUser } from '../store/actions/user';

interface UserData {
  name: string;
  email: string;
  password: string;
}

const Index = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state: RootState) => state.user.user);
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

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (!isEmailValid) {
      alert('Lütfen geçerli bir e-posta adresi girin.');
      return;
    }
    dispatch(setUser(userData.name, userData.email, userData.password));
  };

  return (
    <div>
      <h1>Rating System</h1>
      {user && (
        <div>
          user: {user.name}
          <br />
          email: {user.email}
          <br />
          password: {user.password}
        </div>
      )}
      <input type="text" value={userData.name} onChange={(e) => handleChange('name', e.target.value)} />
      <input type="email" value={userData.email} onChange={(e) => handleChange('email', e.target.value)} />
      <input type="password" value={userData.password} onChange={(e) => handleChange('password', e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Index;