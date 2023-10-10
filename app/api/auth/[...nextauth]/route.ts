import NextAuth from "next-auth";
import BungieProvider from "next-auth/providers/bungie";

const handler = NextAuth({
	secret: process.env.NEXTAUTH_SECRET,
	providers: [
		BungieProvider({
			clientId: process.env.BUNGIE_CLIENT_ID,
			clientSecret: process.env.BUNGIE_CLIENT_SECRET,
			headers: {
				"X-API-Key": process.env.BUNGIE_API_KEY,
			},
		}),
	],
});

export { handler as GET, handler as POST };
