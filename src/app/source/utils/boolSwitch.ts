import { Database } from '@/types/supabasetype';
import { createClient } from '@supabase/supabase-js';


const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export async function boolSwitch(DecorationItemId:number) {
    try {
        const { data, error } = await supabase
            .from("Decoration_Items")
            .update({is_Purchased:true})
            .eq("ID",DecorationItemId)

        if (error) {
            throw error;
        }
        console.log("tureに変更",data)
        return data;
    } catch (error) {
        console.log("取得エラー", error)
    }
}
