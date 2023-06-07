"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAuth } from "firebase/auth";
import app from "@/firebase/firebase";

function Diario() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        setUser(user);
      } else {
        router.push("/login");
      }
    });
    return unsubscribe;
  }, [router]);

  const logout = (event) => {
    console.log("click");
    getAuth(app).signOut();
  };

  return (
    <div className="diario h-screen bg-slate-200 text-center  font-serif">
      <div className="div-titulo pt-4">
        <h1 className="text-5xl">Diario</h1>
      </div>
      <div className="div-fecha pt-3 text-xl">
        <p>Fecha : 14/03/23</p>
      </div>
      <div className="editor-textarea container pt-4 max-w-7xl h-3/5">
        <textarea
          className="h-full form-control"
          name="editor"
          id="editor"
        ></textarea>
      </div>
      <div className="btn-enviar pt-3">
        <button className="btn btn-primary font-sans">Enviar</button>
      </div>
      <div className="btn-enviar pt-3">
        <button className="btn btn-warning font-sans" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Diario;
