import React from "react";
import Link from "next/link";

export default function NavBar() {
	return (
		<nav className="text-[#ac1f20] font-extrabold leading-6 tracking-wider flex justify-between px-8 py-4 uppercase">
			<Link href="www.elsiemorales.come">Elsie Morales</Link>
			<Link href="/projects">Projects</Link>
		</nav>
	);
}
