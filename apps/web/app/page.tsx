import { Alert, AlertDescription, AlertTitle } from "@repo/ui/components/alert";
import { Button } from "@repo/ui/components/button";
import { Input } from "@repo/ui/components/input";

export default async function IndexPage() {
	return (
		<div>
			<h1 className="text-3xl font-bold mb-10">Turborepo Setup</h1>
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
