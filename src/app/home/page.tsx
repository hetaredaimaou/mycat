import { Header } from "./_components/Header";
import { Sidebar } from "../components/Sidebar";
import { Stage } from "../components/Stage";
import { gql } from "@apollo/client";
import { client } from "@/graphql/client";

const Values = {
	levelAmount: 5,
	levelMeasure: "level",
	coinAmount: 100,
	coinMeasure: "coin",
};
const Side = {
	UserName: "Amatec",
	TodayCoins: 100,
	TodayCommits: 200,
};

export default async function page() {
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
			username: "masa-massara", // ユーザー名を適切に設定
			from: "2023-01-01T00:00:00Z", // 適切な開始日
			to: "2023-12-31T23:59:59Z", // 適切な終了日
		},
	});

	const totalCommitContributions =
		data?.user?.contributionsCollection?.totalCommitContributions || 0;

	return (
		<div>
			<p
				style={{
					zIndex: "-100",
					position: "absolute",
					top: "0",
					left: "0",
				}}
			>
				<Header
					levelAmount={totalCommitContributions}
					levelMeasure="level"
					coinAmount={Values.coinAmount}
					coinMeasure="coin"
				/>
			</p>
			<p style={{ zIndex: "100" }}>
				<Sidebar
					UserName={Side.UserName}
					TodayCoins={Side.TodayCoins}
					TodayCommits={Side.TodayCommits}
				/>
			</p>

			<p
				style={{
					position: "absolute",
					top: "400px",
					right: "150px",
				}}
			>
				<Stage />
			</p>
		</div>
	);
}
