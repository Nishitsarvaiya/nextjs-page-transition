import Image from "next/image";

const TITLE = ["Selected", "Work"];

export default function Projects() {
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
			<div className="relative">
				<Image src="/home.jpg" alt="" fill style={{ objectFit: "center" }} />
			</div>
		</main>
	);
}
