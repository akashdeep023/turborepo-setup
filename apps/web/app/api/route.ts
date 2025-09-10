export async function GET() {
	return Response.json({
		status: 200,
		message: "Success",
		usersUrl: "/api/users",
	});
}
