import { anim, clipDown, clipMask, curtainUp, delayedScaleDown, maskZoomOut, scaleDown } from "@/lib/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = {
	"/": "PixelForge",
	"/about": "About",
	"/projects": "Work",
};

export default function Inner({ children }) {
	const pathname = usePathname();

	return (
		<motion.div className="fixed inset-0 overflow-hidden h-screen">
			<motion.div className="absolute inset-0 h-full w-full overflow-hidden">
				<motion.div {...anim(maskZoomOut)} className="w-full h-full relative">
					<Image src="/loader-bg.jpg" alt="" fill style={{ objectFit: "cover" }} />
				</motion.div>
			</motion.div>
			{/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] text-background text-center font-light">
				{routes[pathname]}
			</div> */}
			<motion.div {...anim(clipMask)} className="absolute top-0 left-0 w-full h-full">
				<motion.div {...anim(clipDown)} className="w-full h-full bg-background">
					<motion.div {...anim(scaleDown)} className="w-full h-full origin-center">
						<header className="fixed top-0 left-0 w-full z-10">
							<div className="container mx-auto px-5">
								<div className="flex items-center justify-between py-8">
									<div className="text-sm">PixelForge</div>
									<div className="flex items-center gap-10 justify-end">
										<Link href="/" className="text-base">
											Home
										</Link>
										<Link href="/about" className="text-base">
											About
										</Link>
										<Link href="/projects" className="text-base">
											Projects
										</Link>
									</div>
								</div>
							</div>
						</header>
						<main className="fixed inset-0 overflow-hidden h-screen pt-32">{children}</main>
					</motion.div>
					<motion.div
						{...anim(curtainUp, 0.15)}
						className="w-full h-full bg-black absolute top-0 left-0 z-20"></motion.div>
					<motion.div
						{...anim(curtainUp, 0.35)}
						className="w-full h-full bg-indigo-600 absolute top-0 left-0 z-20"></motion.div>
				</motion.div>
			</motion.div>
		</motion.div>
	);
}
