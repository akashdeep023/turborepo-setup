import "dotenv/config";

import { prisma } from "@repo/database";
import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
	res.status(200).json({
		message: "Hello World!",
		success: true,
		status: 200,
		users: "/users",
	});
});

app.get("/users", async (req: Request, res: Response) => {
	const users = await prisma.user.findMany();
	res.status(200).json({
		message: "All Users!",
		success: true,
		status: 200,
		users,
	});
});

app.use((req: Request, res: Response) => {
	res.status(404).json({ message: "Not Found", success: false, status: 404 });
});

const port = process.env.PORT;

app.listen(port, () => console.log(`Server is running on port ${port}`));
