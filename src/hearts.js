function startHearts() {
	const duration = 3 * 1000;
	const animationEnd = Date.now() + duration;
	let skew = 1;

	const scalar = 1.2;
	const heart = confetti.shapeFromText({ text: '❤️', scalar });

	function randomInRange(min, max) {
		return Math.random() * (max - min) + min;
	}

	(function frame() {
		const timeLeft = animationEnd - Date.now();
		const ticks = Math.max(200, 500 * (timeLeft / duration));
		skew = Math.max(0.8, skew - 0.001);

		confetti({
			particleCount: 1,
			startVelocity: 0,
			ticks: ticks,
			origin: {
				x: Math.random(),
				y: Math.random() * skew - 0.2
			},
			colors: ['#ffffff'],
			gravity: randomInRange(0.4, 0.6),
			drift: randomInRange(-0.4, 0.4),
			shapes: [heart],
			scalar
		});

		if (timeLeft > 0) {
			requestAnimationFrame(frame);
		}
	})();
}

window.startHearts = startHearts;