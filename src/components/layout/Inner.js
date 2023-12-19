import { anim, clipDown, scaleDown } from "@/lib/animations";
import { motion } from "framer-motion";
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
		<motion.div className="fixed inset-0 overflow-hidden h-screen bg-foreground">
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] text-background text-center font-light">
				{routes[pathname]}
			</div>
			<motion.div {...anim(scaleDown)} className="absolute top-0 left-0 w-full h-full">
				<motion.div {...anim(clipDown)} className="w-full h-full bg-background">
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
			</motion.div>
		</motion.div>
	);
}
