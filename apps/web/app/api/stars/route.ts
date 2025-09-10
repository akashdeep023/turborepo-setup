import { NextResponse } from "next/server";

export async function GET() {
	const res = await fetch(
		"https://api.github.com/repos/akashdeep023/turborepo-setup",
		{
			headers: {
				Accept: "application/vnd.github+json",
				Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
			},
			next: { revalidate: 60 },
		}
	);

	if (!res.ok) {
		return NextResponse.json({ stars: 0 });
	}

	const data = await res.json();
	return NextResponse.json({ stars: data.stargazers_count });
}
