import { prisma } from "@repo/database";

export default async function IndexPage() {
	const users = await prisma.user.findMany();

	return (
		<div>
			<h1>Turborepo Setup</h1>
			<h3>Users | Count: {users.length}</h3>
			<pre>{JSON.stringify(users, null, 2)}</pre>
		</div>
	);
}
