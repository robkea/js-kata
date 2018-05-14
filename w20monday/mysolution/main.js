`use strict`;

(function () {
    const cookieAlert = document.querySelector(`.cookiealert`);
    const acceptCookies = document.querySelector(`.acceptcookies`);

    cookieAlert.offsetHeight; // Force browser to trigger reflow (https://stackoverflow.com/a/39451131)

    if (!getCookie(`acceptCookies`)) {
        cookieAlert.classList.add(`show`);
    }

    acceptCookies.addEventListener(`click`, function () {
        setCookie(`acceptCookies`, true, 60);
        cookieAlert.classList.remove(`show`);
    });
})();

// Cookie functions from w3schools
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = `expires=` + d.toUTCString();
    document.cookie = cname + `=` + cvalue + `;` + expires + `;path=/`;
}

function getCookie(cname) {
    const name = cname + `=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        const c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return ``;
}
