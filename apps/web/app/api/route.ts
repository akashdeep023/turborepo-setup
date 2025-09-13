export async function GET() {
	return Response.json({
		message: "Hello World!",
		success: true,
		status: 200,
		usersUrl: "/api/users",
	});
}
