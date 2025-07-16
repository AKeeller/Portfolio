function calculateAge(birthdate) {
    var birth = new Date(birthdate).getTime();
    var diff = Date.now() - birth;
    return Math.floor(diff / 1000 / 60 / 60 / 24 / 365.256);
}
document.addEventListener("DOMContentLoaded", function () {
    var ageSpan = document.getElementById("age");
    if (ageSpan) {
        ageSpan.textContent = String(calculateAge("1994-08-20"));
    }
});

const today = new Date();
const isBirthday = today.getMonth() === 7 && today.getDate() === 20;
const isWinter = (today.getMonth() === 11) || (today.getMonth() === 0);

if (isBirthday) {
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

if (isWinter)
    startSnow()