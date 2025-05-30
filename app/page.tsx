// import Image from "next/image";
import Link from "next/link";
import NavBar from "./NavBar";
import TestimonialCarousel from "./Testimonials";

export default function Home() {
	const offerings = {
		"story and strategy": [
			"Brand Messaging & Voice",
			"Narrative Frameworks",
			"Grant Writing & Proposals",
			"Impact Reporting",
		],
		"RESEARCH-LED DESIGN": [
			"Editorial Design & Layout",
			"Presentation Design",
			"Design Consulting",
		],
		"EDITING & REFINEMENT": ["Copyediting & Proofreading", "Sensitivity Reads"],
	};
	const clients = {
		"SELECT CLIENTS": [
			"AARP",
			"Atlassian",
			"Blackbird Labs",
			"Brooklyn Museum",
			"Commissioner",
			"Condé Nast",
			"Crowdsmart.ai",
			"Design Miami",
			"MAP Fund",
			"National YoungArts Foundation",
			"Sephora",
			"Spotify",
			"Starbucks",
			"Together Live",
		],
	};

	return (
		<>
			<NavBar />
			<main className="mx-8">
				<section className="grid grid-cols-6">
					<p className="col-start-1 md:col-start-3 col-end-5 row-start-1">
						I’m a design and strategy consultant who helps purpose-driven
						organizations{" "}
						<span className="text-[#ac1f20] font-semibold">
							make their impact visible.
						</span>
						<br />
						<br />
						My work lives at the intersection of strategy, storytelling, and
						design—guiding teams to distill complexity into clear, compelling
						materials that build influence, deepen engagement, and support
						meaningful growth.
					</p>
					<article className="flex flex-col row-start-2 col-start-1 col-end-3 md:col-end-3">
						{Object.entries(offerings).map(([category, items]) => (
							<ul key={category}>
								<li className="font-semibold uppercase mt-4 mb-2 text-[#ac1f20]">
									{category}
								</li>
								{items.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						))}
					</article>
					<article className="col-start-1 md:col-start-3 row-start-3">
						{Object.entries(clients).map(([category, items]) => (
							<ul key={category}>
								<li className="font-semibold uppercase mt-4 mb-2 text-[#ac1f20]">
									{category}
								</li>
								{items.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						))}
					</article>
					<article className="flex flex-col col-start-1 row-start-4">
						<span className="uppercase red-heading mt-4 mb-2">Contact</span>
						<Link href="elsiemorales.com">em@elsiemorales.com</Link>
						<Link href="elsiemorales.com">LinkedIn</Link>
					</article>
					<article className="row-start-5 col-span-full">
						<TestimonialCarousel />
					</article>
				</section>
				<span className="fixed top-1/2 right-0 rotate-90 red-heading translate-x-10">
					Making impact visible.
				</span>
			</main>
			<footer className="px-8 py-4 flex items-start gap-4">
				<Link href="elsiemorales.com">em@elsiemorales.com</Link>
				<Link href="elsiemorales.com">LinkedIn</Link>
				<Link href="elsiemorales.com">Substack</Link>
			</footer>
		</>
	);
}
