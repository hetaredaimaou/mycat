// import { Database } from '@/types/supabasetype';
// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
// const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
// const supabase = createClient<Database>(supabaseUrl, supabaseKey);

//  export async function coinLogic() {
//   try {
//       const { data, error } = await supabase
//           .from("Users")
//           .update({
//             "Total-Coins": supabase.raw("?? - ?", ["Total-Coins", 2]),  // 現在の値から 2 を引く
//           })
//           .eq("GitHub-User-ID", githubUserId);
//   }
// }
import { Database } from "@/types/supabasetype";
import { createClient } from "@supabase/supabase-js";

// Supabase クライアントの初期化
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

// 自分のコインを取得する関数
export async function coinLogic(githubUserId: string) {
  console.log("hogeS");

  try {
    // 現在のコイン数を取得
    const { data: user, error: fetchError } = await supabase
      .from("Users")
      .select("*")
      .eq("Github_User_ID", githubUserId);
  } catch (err) {
    console.error("例外が発生しました:", err);
  }
}


