import { coinLogic } from "./getMyCoin";
import { Database } from "@/types/supabasetype";
import { createClient } from "@supabase/supabase-js";

// Supabase クライアントの初期化
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

// コインを減らす関数
export async function reduceCoins(githubUserId: string,itemCost:number) {
  try {
    // 現在のコイン数を取得
    const myCoin: number = await coinLogic(githubUserId);

    if (myCoin === null || myCoin < 2) {
      console.error("コインが不足しているため減算できません。");
      return;
    }

    // SQL クエリでコインを減算
    const newTotal = myCoin - itemCost;

    const { data, error: updateError } = await supabase
      .from("Users")
      .update({ Total_Coins: newTotal }) // コイン数を減算
      .eq("Github_User_ID", githubUserId);

    if (updateError) {
      console.error("コイン更新エラー:", updateError.message);
      return;
    }

    console.log("更新後のコイン数:", newTotal);
  } catch (err) {
    console.error("例外が発生しました:", err);
  }
}

// 関数のテスト
// reduceCoins();
