const subhanAllahDisplay = document.getElementById("subhanAllahDisplay");
const subhanAllahIncrimentBtn = document.getElementById(
    "subhanAllahIncrimentBtn"
);
const subhanAllahDecrimentBtn = document.getElementById(
    "subhanAllahDecrimentBtn"
);

const AlhamdullahDisplay = document.getElementById("AlhamdullahDisplay");
const AlhamdullahIncrementBtn = document.getElementById(
    "AlhamdullahIncrementBtn"
);
const AlhamdullahDecncrementBtn = document.getElementById(
    "AlhamdullahDecncrementBtn"
);

const AllahuakberDisplay = document.getElementById("AllahuakberDisplay");
const AllahuakberIncrementBtn = document.getElementById(
    "AllahuakberIncrementBtn"
);
const AllahuakberDecncrementBtn = document.getElementById(
    "AllahuakberDecncrementBtn"
);

const resetBtn = document.getElementById("resetBtn");

// SumhanAllah
let sumhanAllahInitialValue = 0;
let alhamdulillahInitialValue = 0;
let allahuakberInitialValue = 0;

subhanAllahIncrimentBtn.addEventListener("click", function () {
    if (sumhanAllahInitialValue === 33) {
        return alert("Subhan Allah Complate '33' Please Fillup anoter one ");
    }
    sumhanAllahInitialValue += 1;

    subhanAllahDisplay.innerText = sumhanAllahInitialValue;
});

subhanAllahDecrimentBtn.addEventListener("click", function () {
    if (sumhanAllahInitialValue === 0) {
        return alert("You can not added nagetive value ");
    }
    sumhanAllahInitialValue -= 1;

    subhanAllahDisplay.innerText = sumhanAllahInitialValue;
});

// Alhamdulla

AlhamdullahIncrementBtn.addEventListener("click", function () {
    if (alhamdulillahInitialValue === 33) {
        return alert("Alhamdullah Complate '33' Please Fillup anoter one ");
    }
    alhamdulillahInitialValue += 1;

    AlhamdullahDisplay.innerText = alhamdulillahInitialValue;
});

AlhamdullahDecncrementBtn.addEventListener("click", function () {
    if (alhamdulillahInitialValue === 0) {
        return alert("You can not added nagetive value ");
    }
    alhamdulillahInitialValue -= 1;

    AlhamdullahDisplay.innerText = alhamdulillahInitialValue;
});

// Allahuakber

AllahuakberIncrementBtn.addEventListener("click", function () {
    if (allahuakberInitialValue === 33) {
        return alert("Allahuakber Complate '33' Please Fillup anoter one ");
    }
    allahuakberInitialValue += 1;

    AllahuakberDisplay.innerText = allahuakberInitialValue;
});

AllahuakberDecncrementBtn.addEventListener("click", function () {
    if (allahuakberInitialValue === 0) {
        return alert("You can not added nagetive value ");
    }
    allahuakberInitialValue -= 1;

    AllahuakberDisplay.innerText = allahuakberInitialValue;
});

resetBtn.addEventListener("click", function () {
    subhanAllahDisplay.innerText = 0;
    AlhamdullahDisplay.innerText = 0;
    AllahuakberDisplay.innerText = 0;

    sumhanAllahInitialValue = 0;
    alhamdulillahInitialValue = 0;
    allahuakberInitialValue = 0;
});
