import React, { useState } from "react";
import * as authService from "../services/authService";

type Props = {};

const LoginForm = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function login(email: string, password: string) {
    const loginResponse = await authService.login(email, password);
    if (loginResponse.error) {
      const { message } = loginResponse.error;
      alert(message);
    }
    // happy path
  }
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          login(email, password);
        }}
      >
        <input type="text" name="email" placeholder="youremail@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" name="email" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
