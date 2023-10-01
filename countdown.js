document.addEventListener("DOMContentLoaded", function () {
    // Set the target date for the countdown (e.g., December 31, 2023)
    const targetDate = new Date("2023-10-05 12:00:00").getTime();

    // Update the countdown every second
    const countdown = document.getElementById("countdown");
    const countdownInterval = setInterval(function () {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            countdown.innerText = "Countdown expired!";
        } else {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            countdown.innerHTML = `
                ${days}d ${hours}h ${minutes}m ${seconds}s
            `;
        }
    }, 1000);
});
