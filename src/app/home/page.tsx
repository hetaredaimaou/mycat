'use client';
import {signIn,signOut,useSession} from "next-auth/react";

export default function page() {
	const {data:session,status} = useSession();
	if (!session || !session.user) {
		return <p>You are not signed in</p>;
	  }
	return <div>
		 <button onClick={()=>{signOut()}}>Sign Out</button>
		 <button onClick={()=>{signIn(undefined,{callbackUrl:'http://localhost:3000/auth'})}}>Sing In</button>
		 name:{session.user.name ||""} <br />
          image:
          <img
            src={session.user.image || ""}
            alt="icon"
            style={{ width: "100px", height: "100px" }}
          />
          <br />
		Home</div>;
}
