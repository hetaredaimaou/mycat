import { supabase } from "@/supabase/supabase.config";

// fromTimeを取得する関数
export async function getFromTime(githubUserId: string): Promise<string> {
	try {
		// 現在のコイン数を取得
		const { data: user, error: fetchError } = await supabase
			.from("Users")
			.select("*")
			.eq("Github_User_ID", githubUserId);

		if (!user) return "";

		return user[0].Updated_At ?? "";
	} catch (err) {
		console.error("例外が発生しました:", err);
		return "";
	}
}
