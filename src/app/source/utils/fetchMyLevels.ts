import { supabase } from "@/supabase/supabase.config";
import { Database } from "@/types/supabasetype";
import { createClient } from "@supabase/supabase-js";

// 自分のコインを取得する関数
export async function fetchMyLevels(githubUserId: string): Promise<number> {
	console.log("hogeS");

	try {
		// 現在のコイン数を取得
		const { data: user, error: fetchError } = await supabase
			.from("Users")
			.select("*")
			.eq("Github_User_ID", githubUserId);

		if (!user) return 0;
		return user[0].Total_Experience ?? 0;
	} catch (err) {
		console.error("例外が発生しました:", err);
		return 0;
	}
}
