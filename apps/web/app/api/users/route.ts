import { prisma } from "@repo/database";

export async function GET() {
	try {
		const users = await prisma.user.findMany();
		return Response.json({
			users,
			status: 200,
			message: "Success",
		});
	} catch (error) {
		return Response.json({
			status: 500,
			message: "Error",
		});
	}
}
