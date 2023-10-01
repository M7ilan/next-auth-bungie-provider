import Link from "next/link";

export default function Home() {
	return (
		<>
			<div className="center flex flex-col gap-4">
				<Link href="/api/auth/callback/bungie" className="title btn-0">Authinticate with Bungie</Link>
			</div>
		</>
	);
}
