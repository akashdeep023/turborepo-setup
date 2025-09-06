export const dynamic = "force-dynamic";
import { prisma } from "@repo/database";
import { Alert, AlertDescription, AlertTitle } from "@repo/ui/components/alert";
import { Button } from "@repo/ui/components/button";
import { Input } from "@repo/ui/components/input";

export default async function IndexPage() {
	const users = await prisma.user.findMany();

	return (
		<div>
			<h1 className="text-3xl font-bold mb-10">Turborepo Setup</h1>
			<h3 className="text-xl font-semibold">
				Users | Count: <span className="font-mono">{users.length}</span>
			</h3>
			<pre>{JSON.stringify(users, null, 2)}</pre>
			<Input type="email" placeholder="Email" />
			<Button variant={"outline"}>Button</Button>
			<Alert>
				{/* <CheckCircle2Icon /> */}
				<AlertTitle>Success! Your changes have been saved</AlertTitle>
				<AlertDescription>
					This is an alert with icon, title and description.
				</AlertDescription>
			</Alert>
		</div>
	);
}
