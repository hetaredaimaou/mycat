import React from "react";
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	gql,
	useQuery,
} from "@apollo/client";

const client = new ApolloClient({
	uri: "https://api.github.com/graphql",
	cache: new InMemoryCache(),
	headers: {
		Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
	},
	ssrMode: true,
});

type Props = {
	username: string;
	from: string;
	to: string;
};

const GET_COMMIT_COUNT = gql`
	query ($username: String!, $from: DateTime!, $to: DateTime!) {
		user(login: $username) {
			contributionsCollection(from: $from, to: $to) {
				totalCommitContributions
			}
		}
	}
`;

const CommitCount = ({ username, from, to }: Props) => {
	const { loading, error, data } = useQuery(GET_COMMIT_COUNT, {
		variables: { username, from, to },
	});

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	return (
		<div>
			<p>
				{username}さんのコミット数:{" "}
				{data.user.contributionsCollection.totalCommitContributions}
			</p>
		</div>
	);
};

const App = () => {
	const username = "masa-massara";
	const from = "2024-01-01T00:00:00Z";
	const to = "2024-12-31T23:59:59Z";

	return (
		<ApolloProvider client={client}>
			<CommitCount username={username} from={from} to={to} />
		</ApolloProvider>
	);
};

export default App;
