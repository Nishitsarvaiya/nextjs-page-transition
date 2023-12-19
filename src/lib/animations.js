export const transition = { duration: 1.6, ease: [0.6, 0.01, 0.1, 0.96] };

export const anim = (variants, custom) => ({ initial: "initial", animate: "enter", exit: "exit", variants, custom });

export const opacity = {
	initial: {
		opacity: 0,
	},
	enter: {
		opacity: 1,
		transition: { ...transition, delay: 1.2 },
	},
	exit: {
		opacity: 0,
	},
};

export const clipDown = {
	initial: {
		clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
	},
	enter: {
		clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
		transition: { ...transition },
	},
	exit: {
		clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
	},
};

export const scaleDown = {
	initial: {
		clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
	},
	exit: {
		scale: 0.5,
		clipPath: "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
		transition: { ...transition },
	},
};

export const letter = {
	initial: {
		y: "100%",
	},
	enter: (idx) => ({
		y: 0,
		transition: { ...transition, delay: 0.5 + idx * 0.04 },
	}),
	exit: {
		y: "100%",
		transition: { ...transition },
	},
};

export const line = {
	initial: {
		y: "100%",
	},
	enter: (idx) => ({
		y: 0,
		transition: { ...transition, delay: 1 + idx * 0.08 },
	}),
	exit: {
		y: "100%",
		transition: { ...transition },
	},
};

export const image = {
	initial: {
		clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
	},
	enter: {
		clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
		transition: { ...transition, duration: 1, delay: 1.6 },
	},
	exit: {
		clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
		transition: { ...transition },
	},
};
