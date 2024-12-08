export async function fetchGithubId(githubUsername: string): Promise<string> {
	if (!githubUsername) {
		return "";
	}

	try {
		const response = await fetch(
			`https://api.github.com/users/${githubUsername}`
		);
		const data: string = await response.json();
		return data;
	} catch (error) {
		console.log(error);
		throw error;
	}
}
