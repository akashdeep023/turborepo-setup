import { Alert, AlertDescription, AlertTitle } from "@repo/ui/components/alert";
import { Button } from "@repo/ui/components/button";
import { Input } from "@repo/ui/components/input";
import Link from "next/link";

export default async function IndexPage() {
	return (
		<div>
			<h1 className="text-3xl font-bold mb-10">Turborepo Setup</h1>
			<div className="font-medium my-10 flex flex-col gap-2 font-mono">
				<p className="text-lg font-semibold">SETUP WITH-</p>
				<ol className="list-decimal indent-3 ps-10">
					<li>Prisma + PostgreSQL</li>
					<li>Tailwind CSS</li>
					<li>Shadcn UI</li>
					<li>Typescript</li>
					<li>Eslint</li>
				</ol>
				<p className="text-lg font-semibold">APPLICATION-</p>
				<ol className="list-decimal indent-3 ps-10">
					<li>Web - Next.js</li>
					<li>APIs - Node + Express</li>
				</ol>
			</div>
			<Link href={"https://github.com/akashdeep023/turborepo-setup"}>
				<Button
					variant={"outline"}
					className="cursor-pointer rounded-3xl"
				>
					Clone Template
				</Button>
			</Link>
			{/* <Alert>
				<CheckCircle2Icon />
				<AlertTitle>Success! Your changes have been saved</AlertTitle>
				<AlertDescription>
					This is an alert with icon, title and description.
				</AlertDescription>
			</Alert> */}
		</div>
	);
}
