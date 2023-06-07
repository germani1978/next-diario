'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/navigation";
import { getAuth } from "firebase/auth";
import app from "@/firebase/firebase";

function Cargando() {

  const router = useRouter();


    useEffect(() => {
        const auth = getAuth(app);
        const unsubscribe = auth.onAuthStateChanged((user) => {
          console.log(user);
          if (user) {
            router.push("/diario")
          } else {
            router.push("/login");
          }
        });
        return unsubscribe;
      }, [router]);  

  return (
    <div className='h-screen bg-slate-200'>
        <div className='flex justify-center items-center h-full'>
            <p className='text-3xl'>Cargando</p>
        </div>
    </div>
  )
}

export default Cargando