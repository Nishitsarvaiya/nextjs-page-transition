import Image from "next/image";

const TITLE = ["About", "PixelForge"];

const TEXT = [
	"At PixelForge Studios, founded in 2015, we blend visionary design ",
	"with cutting-edge technology, crafting digital experiences ",
	"that redefine innovation and creativity.",
];

export default function About() {
	return (
		<main className="fixed inset-0 overflow-hidden h-screen pt-32">
			<h1 className="text-center text-[15vw] leading-none">
				{TITLE.map((word) => (
					<div key={word}>
						{word.split("").map((l, idx) => (
							<span key={idx}>{l}</span>
						))}
					</div>
				))}
			</h1>
			<p className="max-w-lg absolute right-5 bottom-5">
				{TEXT.map((line, idx) => (
					<span className="block" key={idx}>
						{line}
					</span>
				))}
			</p>
			<div className="relative">
				<Image src="/home.jpg" alt="" fill style={{ objectFit: "center" }} />
			</div>
		</main>
	);
}
