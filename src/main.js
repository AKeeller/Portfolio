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
