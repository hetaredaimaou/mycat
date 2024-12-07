'use client';

import { useState, useEffect } from "react";
import { createClient } from '@supabase/supabase-js';


const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey);


export async function fetchItem(){
    try{
        const { data, error } = await supabase
            .from("Decoration_Items")
            .select("*");

        if (error){
            throw error;
        }
        return data || []
    }catch(error){
        console.log("取得エラー",error)
    }
}