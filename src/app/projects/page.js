'use client';

import Inner from '@/components/layout/Inner';
import Image from 'next/image';
import { useLayoutEffect, useRef } from 'react';
import { animateLetters, animateImageReveal } from '@/lib/animations';

const TITLE = ['Selected', 'Work'];

export default function Projects() {
	const scopeRef = useRef(null);

	useLayoutEffect(() => {
		if (!scopeRef.current) return;
		animateLetters(scopeRef.current);
		const images = scopeRef.current.querySelectorAll('.js-image');
		images.forEach((_, i) => animateImageReveal(scopeRef.current, `.js-image:nth-of-type(${i + 1})`));
	}, []);

	return (
		<div ref={scopeRef}>
			<h1 className='text-center text-[19vw] xl:text-[15vw] leading-[1.1] tracking-tighter relative z-[1]'>
				{TITLE.map((word) => (
					<span key={word} className='overflow-hidden block'>
						<span className='block'>
							{word.split('').map((l, idx) => (
								<span key={idx} className='inline-block js-letter'>
									{l}
								</span>
							))}
						</span>
					</span>
				))}
			</h1>
			<div className='relative w-[90%] h-[40vw] mt-10 sm:absolute sm:left-10 sm:top-1/2 sm:w-[40vw] sm:h-[40vh] xl:absolute xl:left-20 xl:top-1/2 xl:w-[20vw] xl:h-[60vh] z-0 js-image'>
				<Image src='/projects.jpg' alt='' fill style={{ objectFit: 'cover' }} />
			</div>
			<div className='relative w-[90%] h-[40vw] mt-10 mr-0 ml-auto sm:absolute sm:right-10 sm:top-1/3 sm:w-[40vw] sm:h-[40vh] xl:absolute xl:right-20 xl:top-1/3 xl:w-[20vw] xl:h-[60vh] z-0 js-image'>
				<Image src='/home.jpg' alt='' fill style={{ objectFit: 'cover' }} />
			</div>
		</div>
	);
}
