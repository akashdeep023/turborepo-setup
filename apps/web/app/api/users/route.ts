import { prisma } from "@repo/database";

export async function GET() {
	try {
		await prisma.$connect();
		const users = await prisma.user.findMany();
		return Response.json({
			message: "All Users!",
			success: true,
			status: 200,
			users,
		});
	} catch (error) {
		return Response.json({
			message: "Error connecting to database",
			success: false,
			status: 500,
		});
	}
}
