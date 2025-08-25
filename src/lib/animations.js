// GSAP animation helpers replacing Framer Motion variants
import { animate, cubicBezier, stagger } from 'framer-motion';

export const transition = { duration: 1.6, ease: cubicBezier(0.645, 0.015, 0.355, 1) };
export const transition2 = { duration: 1.6, ease: cubicBezier(0.6, 0.01, 0.16, 1) };

export const anim = (variants, custom) => ({ initial: 'initial', animate: 'enter', exit: 'exit', variants, custom });

export const opacity = {
	initial: {
		opacity: 0,
	},
	enter: {
		opacity: 1,
		transition: { ...transition2 },
	},
	exit: {
		opacity: 0,
	},
};

export const letter = {
	initial: {
		y: '100%',
	},
	enter: (idx) => ({
		y: 0,
		transition: { ...transition2, delay: 0.5 + idx * 0.04 },
	}),
	exit: (idx) => ({
		y: '-100%',
		transition: { ...transition2, delay: idx * 0.04 },
	}),
};

export const line = {
	initial: {
		y: '100%',
	},
	enter: (idx) => ({
		y: 0,
		transition: { ...transition2, delay: 1 + idx * 0.08 },
	}),
	exit: (idx) => ({
		y: '-100%',
		transition: { ...transition2, delay: idx * 0.08 },
	}),
};

export const image = {
	initial: {
		clipPath: 'inset(0% 100% 0% 0%)',
	},
	enter: {
		clipPath: 'inset(0% 0% 0% 0%)',
		transition: { ...transition2, duration: 1, delay: 0.6 },
	},
	exit: {
		clipPath: 'inset(0% 0% 0% 100%)',
		transition: { ...transition2, duration: 1 },
	},
};

export function playEnterAnimations(next, bg, clipMask, curtains, content) {
	const sequence = [
		[clipMask, { clipPath: ['inset(100% 0% 0% 0%)', 'inset(0% 0% 0% 0%)'] }, { ...transition, at: 0 }],
		[bg, { scale: [1.2, 1] }, { ...transition, times: [0, 1], at: 0 }],
		[curtains, { clipPath: 'inset(100% 0% 0% 0%)' }, { duration: 0, at: 0 }],
		[content, { scale: 1 }, { ...transition, at: 0 }],
	];

	animate(sequence).then(next);
}

export function playExitAnimations(next, bg, clipMask, curtains, content) {
	const sequence = [
		[content, { scale: 0.7 }, { ...transition, at: 0 }],
		[
			clipMask,
			{ clipPath: ['inset(0% 0% 0% 0%)', 'inset(24% 20% 24% 20%)', 'inset(12% 20% 88% 20%)'] },
			{ ...transition, times: [0, 0.65, 1], at: 0.2 },
		],
		[bg, { scale: [1.4, 1.2] }, { ...transition, times: [0, 1], at: 0.2 }],
		[
			curtains,
			{ clipPath: ['inset(100% 0% 0% 0%)', 'inset(0% 0% 0% 0%)'] },
			{ ...transition, delay: stagger(0.16), at: 0.24 },
		],
	];

	animate(sequence).then(next);
}
