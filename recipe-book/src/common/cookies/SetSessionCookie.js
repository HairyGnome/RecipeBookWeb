
function SetSessionCookie(key, value) {
    document.cookie = `${key}=${value};  path=/`
}

export default SetSessionCookie;