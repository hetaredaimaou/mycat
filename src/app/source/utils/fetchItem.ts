import { supabase } from "@/supabase/supabase.config";

export async function fetchItem() {
	try {
		const { data, error } = await supabase
			.from("Decoration_Items")
			.select("*");

		if (error) {
			throw error;
		}
		return data || [];
	} catch (error) {
		console.log("取得エラー", error);
	}
}

await fetchItem();
