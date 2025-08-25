'use client';

import { animateShellEnter } from '@/lib/animations';
import { Link } from 'next-transition-router';
import { useTransitionRouter } from 'next-view-transitions';
import Image from 'next/image';
import { useLayoutEffect, useRef } from 'react';

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

export default function Inner({ children }) {
	const rootRef = useRef(null);

	useLayoutEffect(() => {
		if (!rootRef.current) return;
		animateShellEnter(rootRef.current);
	}, []);

	return (
		<div ref={rootRef} className='fixed inset-0 overflow-hidden h-screen'>
			<div className='absolute inset-0 h-full w-full overflow-hidden'>
				<div className='w-full h-full relative js-loader-bg' ref={bgRef}>
					<Image src='/loader-bg.jpg' alt='' fill style={{ objectFit: 'cover' }} />
				</div>
			</div>
			{/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] text-background text-center font-light">
				{routes[pathname]}
			</div> */}
			<div className='absolute top-0 left-0 w-full h-full js-clip-mask' ref={clipMaskRef}>
				<div className='w-full h-full bg-background js-clip-down' ref={clipDownRef}>
					<div className='w-full h-full origin-center js-scale' ref={scaleDownRef}>
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
						className='w-full h-full bg-black absolute top-0 left-0 z-20 js-curtain-black'
						ref={curtainBlackRef}
					></div>
					<div
						className='w-full h-full bg-indigo-600 absolute top-0 left-0 z-20 js-curtain-indigo'
						ref={curtainBlueRef}
					></div>
				</div>
			</div>
		</div>
	);
}
