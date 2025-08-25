'use client';
import { anim, image, letter, line, opacity } from '@/lib/animations';
import { motion } from 'framer-motion';
import Image from 'next/image';
const TITLE = ['About', 'PixelForge'];

const TEXT = [
	'At PixelForge Studios, founded in 2015, we blend visionary design ',
	'with cutting-edge technology, crafting digital experiences ',
	'that redefine innovation and creativity.',
];

export default function About() {
	return (
		<main>
			<h1 className='text-center text-[19vw] xl:text-[15vw] leading-[1.1] tracking-tighter relative z-[1]'>
				{TITLE.map((word) => (
					<span key={word} className='overflow-hidden block'>
						<span className='block'>
							{word.split('').map((l, idx) => (
								<motion.span {...anim(letter, idx)} key={idx} className='inline-block'>
									{l}
								</motion.span>
							))}
						</span>
					</span>
				))}
			</h1>
			<p className='max-w-lg absolute right-5 bottom-5 leading-tight hidden xl:block'>
				{TEXT.map((item, idx) => (
					<span className='block overflow-hidden' key={idx}>
						<motion.span className='block' {...anim(line, idx)}>
							{item}
						</motion.span>
					</span>
				))}
			</p>
			<motion.div
				className='relative mt-10 h-[70vw] z-0 md:h-[60vh] md:top-1/2 md:w-[50vw] xl:w-[20vw] xl:left-20 md:absolute'
				{...anim(image)}
			>
				<Image src='/about.jpg' alt='' fill style={{ objectFit: 'cover' }} />
			</motion.div>
			<motion.p {...anim(opacity)} className='mt-10 px-5 leading-normal md:hidden'>
				{TEXT.join('')}
			</motion.p>
		</main>
	);
}
