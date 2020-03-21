export function setCookie(key, value, dateTime) {
    let time = new Date();
    time.setDate(time.getDate() + dateTime);
    document.cookie = key + '=' + value + ";expirse=" + time;
}

export function getCookie(key) {
    let arrStr = document.cookie.split(';');
    for (let i = 0; i < arrStr.length; i++) {
        let arr = arrStr[i].split('=');
        if (arr[0] === key) {
            return arr[1];
        }
    }
    return null;
}

export function rmCookie(key) {
    document.cookie = key + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;"
}
