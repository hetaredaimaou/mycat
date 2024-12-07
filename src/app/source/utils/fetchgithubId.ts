import { error } from "console";

export async function fetchItem(githubUsername:string) {
    if (!githubUsername){
        throw error
    }

    try{
        const response = await fetch(
            `https://api.github.com/users/${githubUsername}`
        );
        const data = await response.json();
        return data;
    }catch(error){
        console.log(error);
        throw error;
    }
}