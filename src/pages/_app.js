import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Space_Grotesk } from 'next/font/google';

// If loading a variable font, you don't need to specify the font weight
const space = Space_Grotesk({ subsets: ['latin'] });

export default function App({ Component, pageProps, router }) {
	return (
		<div className={space.className}>
			<AnimatePresence mode='wait' initial={false}>
				<Component {...pageProps} key={router.route} />
			</AnimatePresence>
		</div>
	);
}
