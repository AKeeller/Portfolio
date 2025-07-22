import { renderAge } from './age.js'
import { startConfetti } from './confetti.js';
import { startHearts } from './hearts.js';
import { startSnow } from './snow.js';

renderAge('#age', '1994-08-20')

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