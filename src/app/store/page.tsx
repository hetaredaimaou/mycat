"use client";
import { Header } from "../home/_components/Header";
import { Sidebar } from "../components/Sidebar";
import { Stage } from "../components/Stage";
import { LineAndButtons } from "../components/LineAndButtons";
import { PartSelector } from "./_components/PartSelector";
import { Character } from "../components/Character";
import { signIn, signOut, useSession } from "next-auth/react";

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
	const { data: session, status } = useSession();
	const githubUsername = session?.user?.name ?? "";
	return (
		<div>
			<Header
				levelAmount={Values.levelAmount}
				levelMeasure="level"
				coinAmount={Values.coinAmount}
				coinMeasure="coin"
			/>
			<Sidebar
				UserName={githubUsername}
				TodayCoins={Side.TodayCoins}
				TodayCommits={Side.TodayCommits}
			/>
			<div style={{ position: "absolute", top: "121px", left: "22%" }}>
				<LineAndButtons />
			</div>
			<Stage />
			<Character />
			<PartSelector />
		</div>
	);
}
