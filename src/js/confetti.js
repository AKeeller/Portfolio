export async function startConfetti() {
	const { default: confetti } = await import('https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.module.mjs');

	setTimeout(() => {
		confetti({ angle: 60, spread: 55, origin: { x: 0 } });
	}, 300);

	setTimeout(() => {
		confetti({ angle: 120, spread: 55, origin: { x: 1 } });
	}, 500);

	setTimeout(() => {
		confetti();
	}, 1000);
}