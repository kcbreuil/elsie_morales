"use client";
import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const TestimonialCarousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isAnimating, setIsAnimating] = useState(false);

	const testimonials = [
		{
			id: 1,
			name: "Thomas Winkelmann",
			role: "Co-Founder, A Hundred Years & The Hundred Years School / Senior Advisor, SYPartners",
			content:
				"Working with Elsie on complex multi-layered projects has been a joyful experience. Her ability to handle multiple dimensions of a project intellectually is quite hard to find in the industry and makes creative collaborations with her fulfilling and effective. Elsie is driven, in an elegant and genuine way. I am a big fan.",
		},
		{
			id: 2,
			name: "Sarah Chen",
			role: "CEO, TechFlow",
			content:
				"This product completely transformed how we handle our daily operations. The results exceeded all our expectations and continue to drive incredible value for our team.",
		},
		{
			id: 3,
			name: "Marcus Rodriguez",
			role: "Designer, Creative Studio",
			content:
				"Outstanding quality and attention to detail. Working with this team has been an absolute pleasure from start to finish, delivering results that consistently exceed expectations.",
		},
		{
			id: 4,
			name: "Emily Watson",
			role: "Marketing Director",
			content:
				"The innovative approach and seamless execution made all the difference. I couldn't be happier with the outcome and the lasting impact on our business.",
		},
	];

	const nextTestimonial = () => {
		if (isAnimating) return;
		setIsAnimating(true);
		setCurrentIndex((prev) => (prev + 1) % testimonials.length);
		setTimeout(() => setIsAnimating(false), 300);
	};

	const prevTestimonial = () => {
		if (isAnimating) return;
		setIsAnimating(true);
		setCurrentIndex(
			(prev) => (prev - 1 + testimonials.length) % testimonials.length
		);
		setTimeout(() => setIsAnimating(false), 300);
	};

	// const goToTestimonial = (index) => {
	// 	if (isAnimating || index === currentIndex) return;
	// 	setIsAnimating(true);
	// 	setCurrentIndex(index);
	// 	setTimeout(() => setIsAnimating(false), 300);
	// };

	// // Auto-advance carousel every 6 seconds
	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		if (!isAnimating) {
	// 			nextTestimonial();
	// 		}
	// 	}, 6000);
	// 	return () => clearInterval(interval);
	// }, [isAnimating]);

	return (
		<div className="w-full flex items-center justify-center">
			<div className="max-w-4xl mx-auto relative ">
				{/* Main testimonial container */}
				<div className="relative flex items-center justify-between h-[300px]">
					{/* Left Arrow */}
					<button
						onClick={prevTestimonial}
						className="flex-shrink-0 cursor-pointer w-12 h-12 flex items-center justify-center text-[#ac1f20] hover:text-[#ac1f20]/30 transition-colors duration-200 mr-8 md:mr-16"
						disabled={isAnimating}>
						<ArrowLeft size={48} strokeWidth={1.5} />
					</button>

					{/* Testimonial Content */}
					<div
						className={`flex-1 transition-all duration-300 ease-in-out ${
							isAnimating
								? "opacity-0 transform translate-y-4"
								: "opacity-100 transform translate-y-0"
						}`}>
						<div className=" mx-auto">
							<p className="mb-2">
								&quot;{testimonials[currentIndex].content}&quot;
							</p>

							<div className="font-semibold text-black">
								<h4 className="">{testimonials[currentIndex].name}</h4>
								<p className="">{testimonials[currentIndex].role}</p>
							</div>
						</div>
					</div>

					{/* Right Arrow */}
					<button
						onClick={nextTestimonial}
						className="flex-shrink-0 cursor-pointer w-12 h-12 flex items-center justify-center text-[#ac1f20] hover:text-[#ac1f20]/30 transition-colors duration-200 ml-8 md:ml-16"
						disabled={isAnimating}>
						<ArrowRight size={48} strokeWidth={1.5} />
					</button>
				</div>

				{/* Dot indicators */}
				{/* <div className="flex justify-center space-x-3 mt-12">
					{testimonials.map((_, index) => (
						<button
							key={index}
							className={`w-2 h-2 rounded-full transition-all duration-200 ${
								index === currentIndex
									? "bg-red-500"
									: "bg-gray-300 hover:bg-gray-400"
							}`}
						/>
					))}
				</div> */}
			</div>
		</div>
	);
};

export default TestimonialCarousel;
