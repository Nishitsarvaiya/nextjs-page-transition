import '@/styles/globals.css';
import { Space_Grotesk } from 'next/font/google';
import { Providers } from './providers';

const space = Space_Grotesk({ subsets: ['latin'] });

export const metadata = {
	title: 'PixelForge Studios',
	description: 'Leading design studio specializing in website development and digital services',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={space.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
