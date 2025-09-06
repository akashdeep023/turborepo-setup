export const dynamic = "force-dynamic";
import { prisma } from "@repo/database";

export default async function IndexPage() {
	const users = await prisma.user.findMany();

	return (
		<div>
			<h1 className="text-3xl font-bold mb-10">Turborepo Setup</h1>
			<h3 className="text-xl font-semibold">
				Users | Count: <span className="font-mono">{users.length}</span>
			</h3>
			<pre>{JSON.stringify(users, null, 2)}</pre>
		</div>
	);
}
