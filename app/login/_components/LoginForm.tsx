'use client';

import axiosWithCredentials from "@/app/lib/axiosWithCredentials";
import { useState } from "react";

export default function LoginForm() {
  /**
   * TODO useActionStateをやってみる
   */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage(null);

    const formdata = new FormData();
    formdata.append("email", email);
    formdata.append("password", password);

    try {
      const res = await axiosWithCredentials.post("/api/login", {
        email,
        password,
      });

      if (res.status === 200) {
        console.log("Success!");
      }
    } catch  {
      setErrorMessage('エラーが発生しました。 もう一度お試しください。');
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
    >
      <label>
        Email:
        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Submit</button>

      {errorMessage && <p>{errorMessage}</p>}
    </form>
  );
}