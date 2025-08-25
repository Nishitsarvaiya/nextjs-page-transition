'use client';

import Inner from '@/components/layout/Inner';
import Image from 'next/image';
import { useLayoutEffect, useRef } from 'react';
import { animateLetters, animateLines, animateImageReveal, animateOpacityIn } from '@/lib/animations';

const TITLE = ['About', 'PixelForge'];

const TEXT = [
	'At PixelForge Studios, founded in 2015, we blend visionary design ',
	'with cutting-edge technology, crafting digital experiences ',
	'that redefine innovation and creativity.',
];

export default function About() {
	const scopeRef = useRef(null);

	useLayoutEffect(() => {
		if (!scopeRef.current) return;
		animateLetters(scopeRef.current);
		animateLines(scopeRef.current);
		animateImageReveal(scopeRef.current);
		animateOpacityIn(scopeRef.current);
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
			<p className='max-w-lg absolute right-5 bottom-5 leading-tight hidden xl:block'>
				{TEXT.map((item, idx) => (
					<span className='block overflow-hidden' key={idx}>
						<span className='block js-line'>{item}</span>
					</span>
				))}
			</p>
			<div className='relative mt-10 h-[70vw] z-0 md:h-[60vh] md:top-1/2 md:w-[50vw] xl:w-[20vw] xl:left-20 md:absolute js-image'>
				<Image src='/about.jpg' alt='' fill style={{ objectFit: 'cover' }} />
			</div>
			<p className='mt-10 px-5 leading-normal md:hidden js-fade'>{TEXT.join('')}</p>
		</div>
	);
}
