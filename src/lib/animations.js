// GSAP animation helpers replacing Framer Motion variants
import { animate, cubicBezier, stagger } from 'framer-motion';
import { gsap } from 'gsap';

export const transition = { duration: 1.6, ease: cubicBezier(0.645, 0.015, 0.355, 1) };
export const transition2 = { duration: 1.6, ease: cubicBezier(0.6, 0.01, 0.16, 1) };

export function animateLetters(scope, selector = '.js-letter', options = {}) {
	const { delay = 0.5, stagger = 0.04, duration = 1, ease = 'power2.out' } = options;
	const elements = scope.querySelectorAll(selector);
	if (!elements.length) return;
	gsap.fromTo(elements, { yPercent: 100 }, { yPercent: 0, duration, ease, delay, stagger });
}

export function animateLines(scope, selector = '.js-line', options = {}) {
	const { delay = 1, stagger = 0.08, duration = 1, ease = 'power2.out' } = options;
	const elements = scope.querySelectorAll(selector);
	if (!elements.length) return;
	gsap.fromTo(elements, { yPercent: 100 }, { yPercent: 0, duration, ease, delay, stagger });
}

export function animateImageReveal(scope, selector = '.js-image', options = {}) {
	const { delay = 0.6, duration = 1, ease = 'power2.out' } = options;
	const el = scope.querySelector(selector);
	if (!el) return;
	gsap.fromTo(el, { clipPath: 'inset(0% 100% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration, ease, delay });
}

export function animateOpacityIn(scope, selector = '.js-fade', options = {}) {
	const { delay = 0.6, duration = 1, ease = 'power2.out' } = options;
	const el = scope.querySelector(selector);
	if (!el) return;
	gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration, ease, delay });
}

export function playEnterAnimations(next, bg, clipMask, curtains, content) {
	const sequence = [
		[clipMask, { clipPath: ['inset(100% 0% 0% 0%)', 'inset(0% 0% 0% 0%)'] }, { ...transition, at: 0 }],
		[bg, { scale: [1, 1.1] }, { ...transition, times: [0, 1], at: 0 }],
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
		[bg, { scale: [1.1, 1] }, { ...transition, times: [0, 1], at: 0.2 }],
		[
			curtains,
			{ clipPath: ['inset(100% 0% 0% 0%)', 'inset(0% 0% 0% 0%)'] },
			{ ...transition, delay: stagger(0.16), at: 0.24 },
		],
	];

	animate(sequence).then(next);
}
