import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Space_Grotesk } from "next/font/google";
import { usePathname } from "next/navigation";

// If loading a variable font, you don't need to specify the font weight
const space = Space_Grotesk({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
	const pathname = usePathname();
	return (
		<div className={space.className}>
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
			<AnimatePresence mode="wait" initial={true}>
				<Component {...pageProps} key={pathname} />
			</AnimatePresence>
		</div>
	);
}
