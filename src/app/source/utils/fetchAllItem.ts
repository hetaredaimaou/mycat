import { Database } from '@/types/supabasetype';
import { createClient } from '@supabase/supabase-js';
import { fetchGithubId } from './fetchGithubId';
import {fetchIdByGithubId} from "./fetchUserItem"
import { useEffect, useState } from 'react';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

const githubIdData = await fetchGithubId() //github_user_id
const githubUserId = githubIdData[0].Github_User_ID; //ここまではいけてる
console.log("githubuserid",githubUserId)

const githubid = await fetchIdByGithubId(githubUserId) //user_decoration_itemのdecoration_id
const githubidString = githubid.map(item => item.Decoration_Item_ID?.toString() || "").join(',');
console.log("githubstring",githubidString)

        // Decoration_Itemsからデータを取得

export async function fetchAllItem() {
    try {
        const { data, error } = await supabase
            .from("Decoration_Items")
            .select("Name")
            .eq("ID",githubidString)
        if (error) {
            console.log("error",error)
        }
        return data || []
    } catch (error) {
        console.log("取得エラー", error)
    }
}