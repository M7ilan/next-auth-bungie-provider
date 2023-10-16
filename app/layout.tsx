import "./globals.css";
import Navbar from "@Components/Navbar";
import Footer from "@Components/Footer";
import Providers from "./Provider";
import { getServerSession } from "next-auth";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import SessionProvider from "@Components/SessionProvider";
export const metadata: Metadata = {
	title: "Next Auth Bungie Provider",
	description: "Next Auth Bungie Provider Example App",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const session = await getServerSession();

	return (
		<html>
			<body className="bg-white text-OpenColor-gray-7 dark:bg-OpenColor-gray-9 dark:text-OpenColor-gray-1">
				<Toaster position="top-center" reverseOrder={false} />
				<Providers>
					<SessionProvider session={session}>
						<Navbar />
						<main>{children}</main>
						<Footer />
					</SessionProvider>
				</Providers>
			</body>
		</html>
	);
}
