'use client';
import { anim, image, letter } from '@/lib/animations';
import { motion } from 'framer-motion';
import Image from 'next/image';
const TITLE = ['Selected', 'Work'];

export default function Projects() {
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
			<motion.div
				className='relative w-[90%] h-[40vw] mt-10 sm:absolute sm:left-10 sm:top-1/2 sm:w-[40vw] sm:h-[40vh] xl:absolute xl:left-20 xl:top-1/2 xl:w-[20vw] xl:h-[60vh] z-0'
				{...anim(image)}
			>
				<Image src='/projects.jpg' alt='' fill style={{ objectFit: 'cover' }} />
			</motion.div>
			<motion.div
				className='relative w-[90%] h-[40vw] mt-10 mr-0 ml-auto sm:absolute sm:right-10 sm:top-1/3 sm:w-[40vw] sm:h-[40vh] xl:absolute xl:right-20 xl:top-1/3 xl:w-[20vw] xl:h-[60vh] z-0'
				{...anim(image)}
			>
				<Image src='/home.jpg' alt='' fill style={{ objectFit: 'cover' }} />
			</motion.div>
		</main>
	);
}
