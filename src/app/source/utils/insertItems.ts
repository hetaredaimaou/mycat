import { Database } from '@/types/supabasetype';
import { createClient } from '@supabase/supabase-js';
import item from "../../theme/item.json"
import { json } from 'stream/consumers';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient<Database>(supabaseUrl, supabaseKey);


export async function insertItems(id:number,githubid:number) {
    const jsondata = item.find( item=> item.iD === id);
    try {
        const{data:data1,error:error1} = await supabase
            .from("Users_Decoration_Items")
            .insert({ID:jsondata?.iD,User_ID:githubid,Decoration_Item_ID:jsondata?.iD}
            )
        
        const { data:data2, error:error2 } = await supabase
            .from("Decoration_Items")
            .insert({ID:jsondata?.iD,Name:jsondata?.Name,Category:jsondata?.Category,Price:jsondata?.Price,Part:jsondata?.Part,is_Purchased:jsondata?.is_Purchased})

        if (error2) {
            throw error2;
        }
        return data2|| []
    } catch (error) {
        console.log("取得エラー", error)
    }
}