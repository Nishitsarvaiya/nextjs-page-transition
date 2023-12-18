import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const routes = {
	'/': 'PixelForge',
	'/about': 'About',
	'/projects': 'Work',
};

export default function Inner({ children }) {
	const pathname = usePathname();
	const anim = (variants) => ({ initial: 'initial', animate: 'enter', exit: 'exit', variants });

	const clipDown = {
		initial: {
			clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
		},
		enter: {
			clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
			transition: { duration: 1.2, ease: [0.6, 0.01, 0.1, 0.96] },
		},
		exit: {
			clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
		},
	};

	const scaleDown = {
		initial: {
			clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
		},
		exit: {
			scale: 0.5,
			clipPath: 'polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)',
			transition: { duration: 1.6, ease: [0.6, 0.01, 0.1, 0.96] },
		},
	};

	return (
		<motion.div className='fixed inset-0 overflow-hidden h-screen bg-foreground'>
			<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-bold text-background'>
				{routes[pathname]}
			</div>
			<motion.div {...anim(scaleDown)} className='absolute top-0 left-0 w-full h-full'>
				<motion.div {...anim(clipDown)} className='w-full h-full bg-background'>
					<header className='fixed top-0 left-0 w-full z-10'>
						<div className='container mx-auto px-5'>
							<div className='flex items-center justify-between py-8'>
								<div className='text-sm'>PixelForge</div>
								<div className='flex items-center gap-10 justify-end'>
									<Link href='/' className='text-base'>
										Home
									</Link>
									<Link href='/about' className='text-base'>
										About
									</Link>
									<Link href='/projects' className='text-base'>
										Projects
									</Link>
								</div>
							</div>
						</div>
					</header>
					<main className='fixed inset-0 overflow-hidden h-screen pt-32'>{children}</main>
				</motion.div>
			</motion.div>
		</motion.div>
	);
}
