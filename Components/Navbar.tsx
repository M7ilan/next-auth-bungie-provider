"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

function NavbarElements() {
	return (
		<>
			<Link href="/" className="btn-click">
				Home
			</Link>
			<hr className="md:hidden w-full" />
		</>
	);
}

export default function Navbar() {
	const [openMenu, setOpenMenu] = useState(false);

	return (
		<>
			<div className="container-0 flex justify-between items-center mb-32">
				<Logo />
				<div className="md:flex hidden gap-8 items-center">
					<NavbarElements />
				</div>
				<div className="flex md:hidden gap-8 items-center">
					{!openMenu ? (
						<svg
							onClick={() => {
								setOpenMenu(!openMenu);
							}}
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={2.5}
							stroke="currentColor"
							className="w-10 h-10"
						>
							<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
						</svg>
					) : (
						<svg
							onClick={() => {
								setOpenMenu(!openMenu);
							}}
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={2.5}
							stroke="currentColor"
							className="w-10 h-10"
						>
							<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					)}
				</div>
			</div>
			<div className={`absolute w-full bg-white dark:bg-OpenColor-gray-9 z-10 flex flex-col p-4 gap-4 items-center border-b-2 ${openMenu ? "transform translate-y-0 opacity-100" : "transform -translate-y-5 opacity-0 pointer-events-none"}`}>
				<NavbarElements />
			</div>
		</>
	);
}
