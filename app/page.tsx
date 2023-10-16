"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Home() {
	const { data: session } = useSession();
	if (session) {
		return (
			<>
				<div>Logged in Successfully</div>
			</>
		);
	}
	return (
		<>
			<div className="center flex flex-col gap-4">
				<Link href="/api/auth/callback/bungie" className="title btn-0">
					Authinticate with Bungie
				</Link>
			</div>
		</>
	);
}
