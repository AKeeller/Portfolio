function calculateAge(birthdate) {
	const birth = new Date(birthdate).getTime();
	const diff = Date.now() - birth;
	return Math.floor(diff / 1000 / 60 / 60 / 24 / 365.256);
}

export function renderAge(selector, birthdate) {
	document.addEventListener("DOMContentLoaded", () => {
		const ageSpan = document.querySelector(selector);
		if (ageSpan) {
			ageSpan.textContent = String(calculateAge(birthdate));
		}
	});
}