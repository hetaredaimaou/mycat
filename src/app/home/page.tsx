"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { Header } from "./_components/Header";
import { Sidebar } from "../components/Sidebar";
import { Stage } from "../components/Stage";
import { LineAndButtons } from "../components/LineAndButtons";
import { fetchCommits } from "../graphql/fetchCommits";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey);

export default function page() {
	const { data: session, status } = useSession();
	const [githubId, setGithubId] = useState<string | null>(null); //追加
	const [loading, setLoading] = useState<boolean>(true); // loading 状態を追加

	const [todayCommits, setTodayCommits] = useState<number | null>(null);
	const [allContributions, setAllContributions] = useState<number>(0);
	const [todayGetCoins, setTodayGetCoins] = useState<number>(0);
	const [allCoins, setAllCoins] = useState<number>(0);

	const githubUsername = session?.user?.name ?? "";

	useEffect(() => {
		if (githubUsername) {
			(async () => {
				try {
					const todayStart = new Date();
					todayStart.setHours(0, 0, 0, 0);

					// 現在時刻を取得
					const now = new Date();

					// GitHubコミットデータを取得
					const todayCommits = await fetchCommits({
						userName: githubUsername,
						fromTime: todayStart,
						toTime: now,
					});
					setTodayCommits(todayCommits);
				} catch (error) {
					console.error("GraphQL取得エラー:", error);
				}
			})();
		}
	}, [githubUsername]);

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

	useEffect(() => {
		// セッションがロード中なら loading 状態を true に設定
		if (status === "loading") {
			setLoading(true);
			return;
		}

		// セッション情報が読み込まれたら loading 状態を false に設定
		setLoading(false);

		console.log("セッション情報", session);
		if (!session || !session.user) {
			return;
		}

		async function fetchGithubUserId() {
			try {
				const response = await fetch(
					`https://api.github.com/users/${githubUsername}`
				);
				const data = await response.json();
				if (response.ok) {
					setGithubId(data.id);
					await insertGithubId(data.id);
				}
			} catch (error) {
				console.log(error);
			}
		}

		fetchGithubUserId();
	}, [session, status]);

	async function insertGithubId(githubId: string) {
		try {
			const { data, error } = await supabase
				.from("Users")
				.select("*")
				.eq("Github_User_ID", githubId);
			console.log(data);

			if (data?.length === 0) {
				const { error: insertError } = await supabase
					.from("Users")
					.insert([
						{
							Github_User_ID: githubId,
							Total_Coins: 0,
							Total_Experience: 0,
							Github_Username:
								session && session.user
									? session.user.name
									: "",
							Updated_At: new Date(),
							Created_At: new Date(),
						},
					]);
				if (insertError) {
					console.log("データ挿入エラー", insertError);
				}
			}
		} catch (error) {
			console.error("データ取得エラー:", error);
		}
	}

	// loading が true のときにローディング画面を表示
	if (loading) {
		return <p>Loading...</p>;
	}

	return (
		<div>
			<Header
				levelAmount={Values.levelAmount}
				levelMeasure="level"
				coinAmount={Values.coinAmount}
				coinMeasure="coin"
			/>
			<Sidebar
				UserName={Side.UserName}
				TodayCoins={Side.TodayCoins}
				TodayCommits={Side.TodayCommits}
			/>
			<div style={{ position: "absolute", top: "121px", left: "22%" }}>
				<LineAndButtons />
			</div>
			<Stage />
		</div>
	);
}
