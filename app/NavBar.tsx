import React from "react";
import Link from "next/link";

export default function NavBar() {
	const fullName = "elsie morales";
	const letters = fullName.split("");
	return (
		<nav className="text-[#ac1f20] font-extrabold leading-6 tracking-wider flex justify-between px-8 py-4 uppercase">
			{/* <Link className="" href="www.elsiemorales.come">
				Elsie Morales
			</Link> */}
			<div className="inline-flex overflow-hidden group cursor-pointer">
				{letters.map((letter, i) => (
					<span
						key={i}
						className={`inline-block
        ${
					i === 0 || i === 6
						? "translate-x-0 opacity-100 -mr-8 transition-all duration-500 ease-out" // E and M: always transition
						: "-translate-x-5 opacity-0 mr-0 transition-none group-hover:transition-all group-hover:duration-500 group-hover:ease-out"
				}
        group-hover:translate-x-0 group-hover:opacity-100 group-hover:mr-2
      `}>
						{letter}
					</span>
				))}
			</div>
			<Link href="/projects">Projects</Link>
		</nav>
	);
}
