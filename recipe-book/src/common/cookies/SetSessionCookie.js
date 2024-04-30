
function SetSessionCookie(key, value) {
    document.cookie = `${key}=${value};  path=/`
}

module.exports = SetSessionCookie;