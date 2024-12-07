'use client';
import { signIn, signOut, useSession} from "next-auth/react";

export default function page(){
    const { data: session, status } = useSession();
    return(
        <>
        <button onClick={()=>{signIn(undefined,{ callbackUrl:'http://localhost:3000/home'})}}>Sign In</button>
        </>
    )
}