import Footer from "../components/footer";
import Header from "../components/header";
import "./globals.css";
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<Header />
				<main className="flex flex-col items-center justify-between min-h-[80vh] p-24">
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
