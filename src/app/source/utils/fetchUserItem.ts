import { Database } from '@/types/supabasetype';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient<Database>(supabaseUrl, supabaseKey);


export async function fetchIdByGithubId(githubUserId: number) { //呼び出しもとでgithubUserIdを入れると帰ってくる
    try {
      const { data, error } = await supabase
        .from("Users_Decoration_Items")
        .select("Decoration_Item_ID")
        .eq("User_ID", githubUserId); // ここで Github_User_ID に一致するレコードを取得
  
      if (error) {
        throw error;
      }
  
      return data || []; // データがない場合は空の配列を返す
    } catch (error) {
      console.log("取得エラー", error);
      return []; // エラー時にも空の配列を返す
    }
  }