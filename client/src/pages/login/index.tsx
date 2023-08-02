"use client";

//import Link from "next/link";
import { useState, useRef } from "react";

//not for logged
export default function Login() {
  //const [isLogged, setIsLogged] = useState<boolean>(true);
  const [isRegistered, setIsRegistered] = useState<boolean>(true);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

	//if (!isRegistered) //no register (+token)
    
	//login
    //register

    nullRefValues();
  };

  const nullRefValues = () => {

      ((emailRef?.current) as any).value = null;
      ((passwordRef?.current) as any).value = null;

    }
    


  return (
    <div>
      <div>
        <button onClick={() => setIsRegistered(true)}>Have an account</button>
        <button onClick={() => setIsRegistered(false)}>A new user</button>
      </div>
      <div></div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input placeholder="email" ref={emailRef} type="email" required />
        <input
          placeholder="password"
          ref={passwordRef}
		  required
		  type="password"
        />
        <button type="submit">{isRegistered ? "Login" : "Sign up"}</button>
      </form>

      {/* <div>
        <Link href="/cart">To all products</Link>
      </div> */}
    </div>
  );
}
