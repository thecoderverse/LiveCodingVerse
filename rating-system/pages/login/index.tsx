import { User } from "@prisma/client";
import { useRouter } from "next/router";
import React from 'react';
import { fetchPost } from "../../fetch-helpers/post";

interface UserData {
  email: string;
  password: string;
}

const Login = () => {
  const router = useRouter();
  const [userData, setUserData] = React.useState<UserData>({email: "", password: ""});

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
    console.log(userData);
    try {
      const result = await fetchPost<User>("/api/login", userData);
      if (result && result.id) {
        router.push("/home");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <h1>Login</h1>
      <form>
        <input
          type="email"
          value={userData.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />
        <input
          type="password"
          value={userData.password}
          onChange={(e) => handleChange("password", e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </>
  );
};

export default Login;