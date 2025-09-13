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
			<body className="w-full">
				<Header />
				<main className="flex flex-col items-center justify-between min-h-[80vh] pb-4 px-4 md:pb-8 md:px-8">
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
