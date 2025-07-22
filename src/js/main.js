import { startConfetti } from './confetti.js';
import { startHearts } from './hearts.js';
import { startSnow } from './snow.js';

function calculateAge(birthdate) {
	var birth = new Date(birthdate).getTime();
	var diff = Date.now() - birth;
	return Math.floor(diff / 1000 / 60 / 60 / 24 / 365.256);
}

document.addEventListener("DOMContentLoaded", function () {
	const ageSpan = document.getElementById("age");
	if (ageSpan)
		ageSpan.textContent = String(calculateAge("1994-08-20"));
});

const today = new Date();
const isValentinesDay = today.getMonth() === 1 && today.getDate() === 14;
const isBirthday = today.getMonth() === 7 && today.getDate() === 20;
const isWinter = (today.getMonth() === 11) || (today.getMonth() === 0);

if (isBirthday)
	startConfetti()

if (isWinter)
	startSnow()

if (isValentinesDay)
	startHearts()