import Inner from '@/components/layout/Inner';
import Image from 'next/image';

const TITLE = ['Selected', 'Work'];

export default function Projects() {
	return (
		<Inner>
			<h1 className='text-center text-[15vw] leading-none  relative z-[1]'>
				{TITLE.map((word) => (
					<div key={word}>
						{word.split('').map((l, idx) => (
							<span key={idx}>{l}</span>
						))}
					</div>
				))}
			</h1>
			<div className='absolute left-20 top-1/2 w-[20vw] h-[60vh] z-0'>
				<Image src='/projects.jpg' alt='' fill style={{ objectFit: 'center' }} />
			</div>
		</Inner>
	);
}
