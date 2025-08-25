'use client';

import { playEnterAnimations, playExitAnimations, transition, transition2 } from '@/lib/animations';
import { animate, stagger } from 'framer-motion/dom';
import { Link, TransitionRouter } from 'next-transition-router';
import Image from 'next/image';
import { useRef } from 'react';

const routes = [
	{
		id: 0,
		title: 'Home',
		url: '/',
	},
	{
		id: 1,
		title: 'About',
		url: '/about',
	},
	{
		id: 2,
		title: 'Work',
		url: '/projects',
	},
];

export function Providers({ children }) {
	const bgRef = useRef(null);
	const clipMaskRef = useRef(null);
	const contentRef = useRef(null);
	const curtainBlueRef = useRef(null);
	const curtainBlackRef = useRef(null);

	return (
		<TransitionRouter
			enter={(next) =>
				playEnterAnimations(
					next,
					bgRef.current,
					clipMaskRef.current,
					[curtainBlackRef.current, curtainBlueRef.current],
					contentRef.current
				)
			}
			leave={(next) =>
				playExitAnimations(
					next,
					bgRef.current,
					clipMaskRef.current,
					[curtainBlackRef.current, curtainBlueRef.current],
					contentRef.current
				)
			}
		>
			<div className='fixed inset-0 overflow-hidden h-screen'>
				<div className='absolute inset-0 h-full w-full overflow-hidden'>
					<div className='w-full h-full relative js-loader-bg' ref={bgRef}>
						<Image src='/loader-bg.jpg' alt='' fill style={{ objectFit: 'cover' }} />
					</div>
				</div>
				<div className='absolute top-0 left-0 w-full h-full js-clip-mask' ref={clipMaskRef}>
					<div className='w-full h-full bg-background js-clip-down'>
						<div className='w-full h-full origin-center js-scale' ref={contentRef}>
							<header className='fixed top-0 left-0 w-full z-10'>
								<div className='container mx-auto px-5'>
									<div className='flex items-center justify-between py-8'>
										<div className='text-sm'>PixelForge</div>
										<div className='flex items-center gap-10 justify-end'>
											{routes.map((route) => (
												<Link href={route.url} className='text-base' key={route.id}>
													{route.title}
												</Link>
											))}
										</div>
									</div>
								</div>
							</header>
							<main className='fixed inset-0 overflow-hidden h-screen pt-32'>{children}</main>
						</div>
						<div
							className='w-full h-full bg-[#97866f] absolute top-0 left-0 z-20 js-curtain-black'
							style={{ clipPath: 'inset(100% 0% 0% 0%)' }}
							ref={curtainBlackRef}
						></div>
						<div
							className='w-full h-full bg-[#834b3a] absolute top-0 left-0 z-20 js-curtain-indigo'
							style={{ clipPath: 'inset(100% 0% 0% 0%)' }}
							ref={curtainBlueRef}
						></div>
					</div>
				</div>
			</div>
		</TransitionRouter>
	);
}
