import { gql } from "@apollo/client";
import { client } from "./client";

const { data } = await client.query({
	query: gql`
		query ($username: String!, $from: DateTime!, $to: DateTime!) {
			user(login: $username) {
				contributionsCollection(from: $from, to: $to) {
					totalCommitContributions
				}
			}
		}
	`,
	variables: {
		username: "example-username", // ユーザー名を適切に設定
		from: "2023-01-01T00:00:00Z", // 適切な開始日
		to: "2023-12-31T23:59:59Z", // 適切な終了日
	},
});
