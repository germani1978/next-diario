"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "@/firebase/firebase";

function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Registrar = (event) => {

    event.preventDefault();

    const auth = getAuth(app);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Exito");
        router.push("/diario")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });

  };

  const handleEmail = (event) => {
    const value = event.target.value;
    setEmail(value)
  }
  const handlePassword = (event) => {
    const value = event.target.value;
    setPassword(value)
  }

  return (
    // contenedor
    <div className="h-screen bg-slate-200 font-serif flex flex-col justify-center items-center text-black">
      <div className="titulo p-4">
        <h1 className="text-5xl">Sign In</h1>
      </div>

      {/* formulario */}
      <form
        className="mx-auto p-4 bg-slate-300 rounded text-left w-72 md:w-96"
        onSubmit={Registrar}
      >
        {/* imput email */}
        <div>
          <p className="mb-1">Email</p>
          <input
            type="email"
            className="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Escriba su correo.."
            onChange={handleEmail}
          />
        </div>

        {/* imput password */}
        <div className="mt-4 mb-4">
          <p className="mb-1">Contrasena</p>
          <input
            type="password"
            className="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Escriba su contrasena.."
            onChange={handlePassword}
          />
        </div>

        {/* boton */}
        <div className="btn-enviar pt-3 text-center">
          <button className="btn btn-primary font-sans">Enviar</button>
        </div>
      </form>

      {/* ir al signin */}
      <div className="p-4">
        <a
          className="text-blue-600 hover:text-blue-800 hover:underline"
          href="http://"
        >
          Ya tienes cuenta
        </a>
      </div>
    </div>
  );
}

export default SignIn;
