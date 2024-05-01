

function GetSessionCookie(cookieName) {
    let cookieArray = document.cookie.split('; ');

    for(let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        let cookieParts = cookie.split('=');

        if(cookieParts[0].trim() === cookieName) {
            return cookieParts[1];
        }
    }

    return null;
}

export default GetSessionCookie;