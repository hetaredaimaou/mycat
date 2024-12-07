'use client';
import { signIn, signOut, useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey);

export default function page() {
	const { data: session, status } = useSession();
	const [githubId, setGithubId] = useState<string | null>(null); //追加
	const [loading, setLoading] = useState<boolean>(true); // loading 状態を追加

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

		const githubUsername = session.user.name;

		async function fetchGithubUserId() {
			try {
				const response = await fetch(`https://api.github.com/users/${githubUsername}`);
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
							Github_Username: session && session.user ? session.user.name : "",
							Updated_At: new Date(),
							Created_At: new Date(),
						},
					]);
				if (insertError) {
					console.log("データ挿入エラー", insertError);
				}
			}
		} catch (error) {
			console.error('データ取得エラー:', error);
		}
	}

	// loading が true のときにローディング画面を表示
	if (loading) {
		return <p>Loading...</p>;
	}

	return (
		<div>
			<button onClick={() => { signOut({ callbackUrl: "http://localhost:3000" }) }}>Sign Out</button>
			<button onClick={() => { signIn(undefined, { callbackUrl: 'http://localhost:3000/auth' }) }}>Sign In</button>
			<div>
				name: {session && session.user ? session.user.name : ""}
				<br />
				image:
				<img
					src={session?.user?.image || ""}
					alt="icon"
					style={{ width: "100px", height: "100px" }}
				/>
			</div>
			<br />
			Home
		</div>
	);
}
