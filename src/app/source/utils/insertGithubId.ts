import { supabase } from "@/supabase/supabase.config";

interface Session {
	user: {
		name?: string;
	};
}

export async function insertGithubId(githubId: string, session: Session) {
	try {
		const { data, error } = await supabase
			.from("Users")
			.select("*")
			.eq("Github_User_ID", githubId);

		if (data?.length === 0) {
			const { error: insertError } = await supabase.from("Users").insert([
				{
					Github_User_ID: parseInt(githubId), // stringをnumberに変換
					Total_Coins: 0,
					Total_Experience: 0,
					Github_Username:
						session && session.user && session.user.name
							? session.user.name
							: "",
					Updated_At: new Date().toISOString(), // DateをISO文字列に変換
					Created_At: new Date().toISOString(), // DateをISO文字列に変換
				},
			]);
			if (insertError) {
				console.log("データ挿入エラー", insertError);
				throw insertError;
			}
		}
	} catch (error) {
		throw error;
	}
}
