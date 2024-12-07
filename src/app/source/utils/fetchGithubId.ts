import { Database } from '@/types/supabasetype';
import { createClient } from '@supabase/supabase-js';


const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient<Database>(supabaseUrl, supabaseKey);


export async function fetchGithubId() {
    try {
        const { data, error } = await supabase
            .from("Users")
            .select("Github_User_ID")

        if (error) {
            throw error;
        }
        return data || []
    } catch (error) {
        console.log("取得エラー", error)
    }
}