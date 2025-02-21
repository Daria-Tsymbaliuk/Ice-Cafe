document.addEventListener("DOMContentLoaded", function () {
    const minusBtn = document.querySelector(".minus");
    const plusBtn = document.querySelector(".plus");
    const countSpan = document.querySelector(".count");

    let count = 1;

    minusBtn.addEventListener("click", () => {
        if (count > 1) {
            count--;
            countSpan.textContent = count;
        }
    });

    plusBtn.addEventListener("click", () => {
        count++;
        countSpan.textContent = count;
    });
});
