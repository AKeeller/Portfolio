function startConfetti() {
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

window.startConfetti = startConfetti