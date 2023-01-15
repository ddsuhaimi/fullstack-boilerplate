import React, { useState } from "react";
import * as authService from "../services/authService";

type Props = {};

const SignupForm = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  async function signup(email: string, password: string) {
    const signupResponse = await authService.signup(email, password, confirmPassword);
    if (signupResponse.error) {
      const { message } = signupResponse.error;
      alert(message);
    }
    // happy path
  }
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          signup(email, password);
        }}
      >
        <input type="text" name="email" placeholder="youremail@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="password" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignupForm;
