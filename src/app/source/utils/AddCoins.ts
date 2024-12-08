import { Database } from "@/types/supabasetype";
import { createClient } from "@supabase/supabase-js";
import { coinLogic } from "./getMyCoin";

// Supabase クライアントの初期化
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export async function AddCoins(githubUserId: string, UserCoins: number) {
  try {
    // coinLogic で現在のユーザーデータを取得
    const userData = await coinLogic(githubUserId);

    if (!userData) {
      console.error("ユーザーデータが見つかりません。");
      return;
    }

    // 新しいコイン数を計算
    const newTotalCoins = userData + UserCoins;

    // ユーザーのコイン数を更新
    const { data, error } = await supabase
      .from("Users")
      .update({ "Total_Coins": newTotalCoins })
      .eq("Github_User_ID", githubUserId);

    if (error) {
      console.error("コイン数の更新中にエラーが発生しました:", error.message);
      return;
    }

    console.log("コイン数を更新しました:", newTotalCoins);
  } catch (err) {
    console.error("例外が発生しました:", err);
  }
}
