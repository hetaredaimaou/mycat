export async function fetchGithubId(githubUsername: string): Promise<string> {
	if (!githubUsername) {
		return "";
	}

	try {
		const response = await fetch(
			`https://api.github.com/users/${githubUsername}`
		);
		const data = await response.json();
		return data.id;
	} catch (error) {
		console.log(error);
		throw error;
	}
}
