'use client';
import Image from "next/image";
import { Stage } from './components/Stage';
import { useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { redirect } from 'next/navigation';

export default function page() {
  const { data: session, status } = useSession()

  useEffect(()=>{
    if (status === "authenticated"){
      redirect('/home')
    }
    if (status === "unauthenticated"){
      redirect('/auth')
    }
  },[status])

  return (
    <div>
    <Stage />
    </div>
  );
}
