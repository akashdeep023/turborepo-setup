import { Button } from "@repo/ui/components/button";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@repo/ui/components/card";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<section className="flex flex-col items-center justify-center text-center pt-12 pb-5 px-6">
				<h1 className="text-5xl font-bold tracking-tight mb-6 flex items-center gap-2">
					Welcome to{" "}
					<span className="text-blue-600">Turborepo Setup</span>
					<svg
						fill="none"
						viewBox="0 0 24 24"
						height="40"
						width="40"
						xmlns="http://www.w3.org/2000/svg"
						className="dark:invert-100 -rotate-90"
					>
						<path
							xmlns="http://www.w3.org/2000/svg"
							d="M18.8061 12.9187C19.1275 12.853 19.4348 12.7487 19.7231 12.6109C21.0698 11.9671 22 10.5922 22 9C22 6.79086 20.2092 5 18 5C16.8153 5 15.7498 5.51635 15.0188 6.33309C14.6505 6.74461 14.6855 7.37681 15.097 7.74513C15.5085 8.11346 16.1407 8.07844 16.5091 7.66691C16.8767 7.25616 17.4078 7.00001 18 7C18.069 7 18.1373 7.0035 18.2045 7.01033C18.4734 7.03764 18.7266 7.11823 18.9533 7.24139C19.5768 7.58007 20 8.24061 20 9C20 9.82843 19.4963 10.5392 18.7785 10.8428C18.5392 10.944 18.2762 11 18.0001 11H18H3C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H18H18C18.2762 13 18.5458 12.972 18.8061 12.9187ZM5 10H10.5H10.5L10.5162 9.99995C10.5969 9.99944 10.6768 9.99509 10.7556 9.98709C12.0163 9.85908 13 8.79442 13 7.5C13 6.11929 11.8807 5 10.5 5C9.75951 5 9.09317 5.32323 8.63683 5.83309C8.26851 6.24461 8.30353 6.87681 8.71505 7.24513C9.12658 7.61346 9.75878 7.57844 10.1271 7.16691C10.2201 7.06303 10.352 7.00001 10.5 7C10.7761 7 11 7.22386 11 7.5C11 7.77614 10.7762 7.99999 10.5 8H10.5H5C4.44772 8 4 8.44772 4 9C4 9.55228 4.44772 10 5 10ZM16.5 14L8 14C7.44771 14 7 14.4477 7 15C7 15.5523 7.44771 16 8 16L16.5 16C16.7762 16 17 16.2239 17 16.5C17 16.7761 16.7761 17 16.5 17C16.352 17 16.2201 16.937 16.1271 16.8331C15.7588 16.4216 15.1266 16.3865 14.7151 16.7549C14.3035 17.1232 14.2685 17.7554 14.6368 18.1669C15.0932 18.6768 15.7595 19 16.5 19C17.8807 19 19 17.8807 19 16.5C19 15.2056 18.0163 14.1409 16.7556 14.0129C16.6768 14.0049 16.5969 14.0006 16.5162 14.0001L16.5 14Z"
							fill="#0D0D0D"
						></path>
					</svg>
				</h1>
				<p className="text-lg max-w-2xl mb-8 text-muted-foreground">
					This is a modern web + API setup using Turborepo, Prisma,
					PostgreSQL, Tailwind, and Shadcn UI. Everything is wired and
					ready to build amazing apps.
				</p>
				<Link
					href={"https://github.com/akashdeep023/turborepo-setup"}
					target="_blank"
				>
					<Button
						variant={"outline"}
						className="cursor-pointer rounded-3xl"
					>
						Clone Template REPO
						<svg
							fill="none"
							viewBox="0 0 24 24"
							height="24"
							width="24"
							xmlns="http://www.w3.org/2000/svg"
							className="dark:invert-100"
						>
							<path
								xmlns="http://www.w3.org/2000/svg"
								d="M12.2929 5.29289C12.6834 4.90237 13.3166 4.90237 13.7071 5.29289L19.7071 11.2929C19.8946 11.4804 20 11.7348 20 12C20 12.2652 19.8946 12.5196 19.7071 12.7071L13.7071 18.7071C13.3166 19.0976 12.6834 19.0976 12.2929 18.7071C11.9024 18.3166 11.9024 17.6834 12.2929 17.2929L16.5858 13L5 13C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11L16.5858 11L12.2929 6.70711C11.9024 6.31658 11.9024 5.68342 12.2929 5.29289Z"
								fill="#0D0D0D"
							></path>
						</svg>
					</Button>
				</Link>
			</section>
			<section className="pt-12 pb-6 px-6">
				<div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
					<Card className="shadow-lg">
						<CardHeader>
							<CardTitle className="text-xl">
								⚡ Fast Development
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p>
								Turborepo speeds up builds and keeps your apps
								and packages organized in a monorepo.
							</p>
						</CardContent>
					</Card>

					<Card className="shadow-lg">
						<CardHeader>
							<CardTitle className="text-xl">
								🗄️ Database Ready
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p>
								Prisma + PostgreSQL is integrated for type-safe
								queries and a reliable backend.
							</p>
						</CardContent>
					</Card>

					<Card className="shadow-lg">
						<CardHeader>
							<CardTitle className="text-xl">
								🎨 Beautiful UI
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p>
								Tailwind CSS + Shadcn UI provides modern,
								accessible, and reusable components out of the
								box.
							</p>
						</CardContent>
					</Card>
				</div>
			</section>
			<section className="py-12 w-full rounded-2xl px-6 flex justify-center gap-4">
				<Link href={"/api"} target="_blank">
					<Button
						variant="secondary"
						size="lg"
						className="rounded-full cursor-pointer"
					>
						Next.js API
						<svg
							fill="none"
							viewBox="0 0 24 24"
							height="24"
							width="24"
							xmlns="http://www.w3.org/2000/svg"
							className="dark:invert-100"
						>
							<path
								xmlns="http://www.w3.org/2000/svg"
								d="M12.2929 5.29289C12.6834 4.90237 13.3166 4.90237 13.7071 5.29289L19.7071 11.2929C19.8946 11.4804 20 11.7348 20 12C20 12.2652 19.8946 12.5196 19.7071 12.7071L13.7071 18.7071C13.3166 19.0976 12.6834 19.0976 12.2929 18.7071C11.9024 18.3166 11.9024 17.6834 12.2929 17.2929L16.5858 13L5 13C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11L16.5858 11L12.2929 6.70711C11.9024 6.31658 11.9024 5.68342 12.2929 5.29289Z"
								fill="#0D0D0D"
							></path>
						</svg>
					</Button>
				</Link>
				<Link
					href={
						process.env.NEXT_PUBLIC_NODE_API ||
						"https://github.com/akashdeep023/turborepo-setup"
					}
					target="_blank"
				>
					<Button
						variant="secondary"
						size="lg"
						className="rounded-full cursor-pointer"
					>
						Node + Express API
						<svg
							fill="none"
							viewBox="0 0 24 24"
							height="24"
							width="24"
							xmlns="http://www.w3.org/2000/svg"
							className="dark:invert-100"
						>
							<path
								xmlns="http://www.w3.org/2000/svg"
								d="M12.2929 5.29289C12.6834 4.90237 13.3166 4.90237 13.7071 5.29289L19.7071 11.2929C19.8946 11.4804 20 11.7348 20 12C20 12.2652 19.8946 12.5196 19.7071 12.7071L13.7071 18.7071C13.3166 19.0976 12.6834 19.0976 12.2929 18.7071C11.9024 18.3166 11.9024 17.6834 12.2929 17.2929L16.5858 13L5 13C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11L16.5858 11L12.2929 6.70711C11.9024 6.31658 11.9024 5.68342 12.2929 5.29289Z"
								fill="#0D0D0D"
							></path>
						</svg>
					</Button>
				</Link>
			</section>
			<section className="py-16 w-full rounded-2xl px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center">
				<h2 className="text-3xl font-bold mb-4">
					Ready to start building?
				</h2>
				<p className="mb-6">
					Everything is set up — Web, API, and database. Time to
					create something amazing!
				</p>
				<Link
					href={"https://github.com/akashdeep023/turborepo-setup"}
					target="_blank"
				>
					<Button
						variant="secondary"
						size="lg"
						className="rounded-full cursor-pointer"
					>
						Get Started
						<svg
							fill="none"
							viewBox="0 0 24 24"
							height="24"
							width="24"
							xmlns="http://www.w3.org/2000/svg"
							className="dark:invert-100"
						>
							<path
								xmlns="http://www.w3.org/2000/svg"
								d="M12.2929 5.29289C12.6834 4.90237 13.3166 4.90237 13.7071 5.29289L19.7071 11.2929C19.8946 11.4804 20 11.7348 20 12C20 12.2652 19.8946 12.5196 19.7071 12.7071L13.7071 18.7071C13.3166 19.0976 12.6834 19.0976 12.2929 18.7071C11.9024 18.3166 11.9024 17.6834 12.2929 17.2929L16.5858 13L5 13C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11L16.5858 11L12.2929 6.70711C11.9024 6.31658 11.9024 5.68342 12.2929 5.29289Z"
								fill="#0D0D0D"
							></path>
						</svg>
					</Button>
				</Link>
			</section>
		</>
	);
}
