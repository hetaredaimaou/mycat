"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { Header } from "./_components/Header";
import { Sidebar } from "../components/Sidebar";
import { Stage } from "../components/Stage";
import { LineAndButtons } from "../components/LineAndButtons";
import { fetchCommits } from "../graphql/fetchCommits";
import { Character } from "../components/Character";
import { supabase } from "@/supabase/supabase.config";
import { fetchGithubId } from "../source/utils/fetchgithubId";
import { fetchMyCoins } from "../source/utils/fetchMyCoins";
import { fetchMyLevels } from "../source/utils/fetchMyLevels";
import { getFromTime } from "../source/utils/getFromTime";

export default function page() {
	const { data: session, status } = useSession();
	const [githubId, setGithubId] = useState<string | null>(null); //追加
	const [loading, setLoading] = useState<boolean>(true); // loading 状態を追加

	const [todayCommits, setTodayCommits] = useState<number | null>(null);
	const [levels, setLevels] = useState<number>(0);
	const [todayGetCoins, setTodayGetCoins] = useState<number>(0);
	const [coins, setCoins] = useState<number>(0);

	const githubUsername = session?.user?.name ?? "";

	useEffect(() => {
		const fetchData = async () => {
			try {
				if (!githubUsername) return;

				const id = await fetchGithubId(githubUsername);
				setGithubId(id);

				if (id) {
					const coins = await fetchMyCoins(id);
					setCoins(coins);

					const levels = await fetchMyLevels(id);
					setLevels(levels);
				}

				const fromTime = await getFromTime(id);
				console.log("👩‍👩‍👧‍👦", fromTime);

				const toTime = new Date().toISOString();
				const recentCommits = await fetchCommits({
					userName: githubUsername,
					fromTime: fromTime,
					toTime: toTime,
				});

				const prevCommits = await fetchMyLevels(id);
				const commits = recentCommits + prevCommits;

				setTodayCommits(commits); // 必要に応じてコミット数を状態に保存
			} catch (error) {
				console.error("データ取得中のエラー:", error);
			}
		};
		fetchData();
	}, [githubUsername]);

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
						fromTime: todayStart.toISOString(),
						toTime: now.toISOString(),
					});
					setTodayCommits(todayCommits);
				} catch (error) {
					console.error("GraphQL取得エラー:", error);
				}
			})();
		}
	}, [githubUsername]);

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
							Github_User_ID: parseInt(githubId), // githubIdを数値に変換
							Total_Coins: 0,
							Total_Experience: 0,
							Github_Username: session?.user?.name || "", // オプショナルチェイニングを使用
							Updated_At: new Date().toISOString(), // ISO形式に変換
							Created_At: new Date().toISOString(), // ISO形式に変換
						},
					]);
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
				levelAmount={levels}
				levelMeasure="level"
				coinAmount={coins}
				coinMeasure="coin"
			/>
			<Sidebar
				UserName={githubUsername}
				TodayCoins={todayCommits ?? 0}
				TodayCommits={todayCommits ?? 0}
			/>
			<div style={{ position: "absolute", top: "121px", left: "22%" }}>
				<LineAndButtons />
			</div>
			<Character />
			<Stage />
		</div>
	);
}
