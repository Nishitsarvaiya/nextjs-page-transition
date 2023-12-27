import { cubicBezier } from "framer-motion";

export const transition = { duration: 1.6, ease: cubicBezier(0.645, 0.045, 0.355, 1) };
export const transition2 = { duration: 1.6, ease: cubicBezier(0.645, 0.045, 0.355, 1) };

export const anim = (variants, custom) => ({ initial: "initial", animate: "enter", exit: "exit", variants, custom });

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

export const maskZoomOut = {
	initial: {
		scale: 1,
	},
	// enter: {
	// 	scale: 1,
	// 	transition: { ...transition2 },
	// },
	exit: {
		scale: [1.3, 1],
		transition: { ...transition2, times: [0, 1] },
	},
};

export const clipDown = {
	initial: {
		clipPath: "inset(100% 0% 0% 0%)",
	},
	enter: {
		clipPath: "inset(0% 0% 0% 0%)",
		transition: { ...transition2, duration: 1 },
	},
};

// export const scaleDown = {
// 	initial: {
// 		clipPath: "inset(0% 0% 0% 0%)",
// 		y: 0,
// 	},
// 	exit: {
// 		scale: [1, 0.7, 0.7],
// 		y: [0, -20, -20],
// 		clipPath: ["inset(0% 0% 0% 0%)", "inset(0% 0% 0% 0%)", "inset(0% 0% 100% 0%)"],
// 		transition: { ...transition, times: [0, 0.65, 1] },
// 	},
// };

export const clipMask = {
	initial: {
		clipPath: "inset(0% 0%)",
	},
	exit: {
		clipPath: ["inset(0% 0% 0% 0%)", "inset(18% 10% 18% 10%)", "inset(12% 10% 88% 10%)"],
		transition: { ...transition, times: [0, 0.65, 1] },
	},
};

export const scaleDown = {
	initial: {
		scale: 1,
	},
	exit: {
		scale: 0.7,
		transition: { ...transition, duration: 1, delay: 0.5 },
	},
};

export const curtainUp = {
	initial: {
		clipPath: "inset(100% 0% 0% 0%)",
	},
	exit: (delay) => ({
		clipPath: "inset(0% 0% 0% 0%)",
		transition: { ...transition, delay: delay },
	}),
};

export const letter = {
	initial: {
		y: "100%",
	},
	enter: (idx) => ({
		y: 0,
		transition: { ...transition2, delay: 0.5 + idx * 0.04 },
	}),
	exit: (idx) => ({
		y: "-100%",
		transition: { ...transition2, delay: idx * 0.04 },
	}),
};

export const line = {
	initial: {
		y: "100%",
	},
	enter: (idx) => ({
		y: 0,
		transition: { ...transition2, delay: 1 + idx * 0.08 },
	}),
	exit: (idx) => ({
		y: "-100%",
		transition: { ...transition2, delay: idx * 0.08 },
	}),
};

export const image = {
	initial: {
		clipPath: "inset(0% 100% 0% 0%)",
	},
	enter: {
		clipPath: "inset(0% 0% 0% 0%)",
		transition: { ...transition2, duration: 1, delay: 0.6 },
	},
	exit: {
		clipPath: "inset(0% 0% 0% 100%)",
		transition: { ...transition2, duration: 1 },
	},
};
