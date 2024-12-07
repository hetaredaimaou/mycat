"use client";
// import { signIn, signOut, useSession } from "next-auth/react";
// import { redirect } from "next/dist/server/api-utils";
import { Header } from "./_components/Header";
import { Sidebar } from "../components/Sidebar";
import { Stage } from "../components/Stage";

const Values = {
  levelAmount: 5,
  levelMeasure: "level",
  coinAmount: 100,
  coinMeasure: "coin",
};
const Side = {
  UserName: "Amatec",
  TodayCoins: 100,
  TodayCommits: 200,
};

export default function page() {
  // const { data: session, status } = useSession();
  // if (!session || !session.user) {
  //   return <p>You are not signed in</p>;
  // }
  return (
    <div>
      <p style={{ zIndex: "-100", position: "absolute", top: "0", left: "0" }}>
        <Header
          levelAmount={Values.levelAmount}
          levelMeasure='level'
          coinAmount={Values.coinAmount}
          coinMeasure='coin'
        />
      </p>
      <p style={{ zIndex: "100" }}>
        <Sidebar
          UserName={Side.UserName}
          TodayCoins={Side.TodayCoins}
          TodayCommits={Side.TodayCommits}
        />
      </p>

      <p
        style={{
          position: "absolute",
          top: "400px",
          right: "150px",
        }}
      >
        <Stage />
      </p>
    </div>
  );
}
