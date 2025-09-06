import Link from "next/link";

export default function Header() {
	return (
		<div className="flex items-center justify-between gap-2 m-auto container px-20 py-3 shadow-sm">
			<span className="font-bold text-lg">Turborepo Setup</span>
			<span className="underline underline-offset-2 decoration-1">
				<svg
					fill="none"
					viewBox="0 0 24 24"
					height="24"
					width="24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<Link
						href={"https://github.com/akashdeep023/turborepo-setup"}
						target="_blank"
					>
						<path
							xmlns="http://www.w3.org/2000/svg"
							d="M12 2C6.5 2 2 6.5 2 12C2 16.3 4.8 20.1 8.8 21.5C9.3 21.6 9.5 21.3 9.5 21C9.5 20.8 9.5 20 9.5 19.1C7 19.6 6.4 18.5 6.2 18C6.1 17.7 5.6 16.8 5.2 16.6C4.9 16.4 4.4 16 5.2 15.9C6 15.9 6.5 16.6 6.7 16.9C7.6 18.4 9 18 9.6 17.8C9.7 17.2 10 16.7 10.2 16.5C8 16.2 5.7 15.3 5.7 11.5C5.7 10.4 6.1 9.5 6.7 8.8C6.6 8.5 6.2 7.5 6.8 6.1C6.8 6.1 7.6 5.8 9.6 7.1C10.3 6.9 11.2 6.8 12 6.8C12.9 6.8 13.7 6.9 14.5 7.1C16.4 5.8 17.3 6.1 17.3 6.1C17.8 7.5 17.5 8.5 17.4 8.7C18 9.4 18.4 10.3 18.4 11.4C18.4 15.2 16.1 16.1 13.8 16.3C14.2 16.6 14.5 17.2 14.5 18.2C14.5 19.5 14.5 20.6 14.5 21C14.5 21.3 14.7 21.6 15.2 21.5C19.3 20.1 22 16.3 22 12C22 6.5 17.5 2 12 2Z"
							fill="black"
						></path>
					</Link>
				</svg>
			</span>
		</div>
	);
}
