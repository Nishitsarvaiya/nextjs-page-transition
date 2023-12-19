import Inner from "@/components/layout/Inner";
import Image from "next/image";
import { motion } from "framer-motion";
import { anim, image, letter, line, opacity } from "@/lib/animations";

const TITLE = ["PixelForge", "Studios"];

const TEXT = [
	"PixelForge Studios is a leading design studio founded in 2015 by ",
	"tech visionaries. Specializing in top-tier website development and ",
	"a wide range of digital services, the studio is renowned for its ",
	"innovation and client-focused approach.",
];

export default function Home() {
	return (
		<Inner>
			<h1 className="text-center text-[19vw] xl:text-[15vw] leading-[1.1] relative z-[1]">
				{TITLE.map((word) => (
					<span key={word} className="overflow-hidden block">
						<span className="block">
							{word.split("").map((l, idx) => (
								<motion.span {...anim(letter, idx)} key={idx} className="inline-block">
									{l}
								</motion.span>
							))}
						</span>
					</span>
				))}
			</h1>
			<p className="max-w-lg absolute right-5 bottom-5 leading-tight hidden xl:block">
				{TEXT.map((item, idx) => (
					<span className="block overflow-hidden" key={idx}>
						<motion.span className="block" {...anim(line, idx)}>
							{item}
						</motion.span>
					</span>
				))}
			</p>
			<motion.div
				className="relative mt-10 h-[70vw] z-0 md:h-[60vh] md:top-1/2 md:w-[50vw] xl:w-[20vw] xl:left-20 md:absolute"
				{...anim(image)}>
				<Image src="/home.jpg" alt="" fill style={{ objectFit: "cover" }} />
			</motion.div>
			<motion.p {...anim(opacity)} className="mt-10 px-5 leading-normal md:hidden">
				{TEXT.join("")}
			</motion.p>
		</Inner>
	);
}
