import NextAuth from "next-auth";
import BungieProvider from "next-auth/providers/bungie";

const handler = NextAuth({
	providers: [
		BungieProvider({
			clientId: process.env.BUNGIE_CLIENT_ID,
			clientSecret: process.env.BUNGIE_SECRET,
			headers: {
				"X-API-Key": process.env.BUNGIE_API_KEY,
			},
		}),
	],
});

export { handler as GET, handler as POST };
